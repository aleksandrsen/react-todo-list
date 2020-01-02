import React, {Component} from 'react';
import './App.css'
import SearchPanel from '../search-panel'
import FilterItems from '../filter-items'
import SortItems from '../sort-items'
import TodoList from '../todo-list'
import ItemAddPanel from '../item-add-panel'
import ItemsStatus from '../items-status'

export default class App extends Component {

    startId = 100;

    state = {
        todos: [
            this.createItem('Drink Coffee'),
            this.createItem('Make app'),
            this.createItem('Go to work'),
            this.createItem('Buy some fruits')
        ],
        term: '',
        filter: 'all'
    };

    // Search panel
    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    onSearchChange = (term) => {
        this.setState({term});
    };

    // Items status
    getDoneCount = () => {
        let doneItems = this.state.todos.filter((todo) => todo.done);
        return doneItems.length;
    };

    // Item add panel
    addItem = (text) => {
        let newItem = this.createItem(text);

        this.setState({
            todos: [
                newItem,
                ...this.state.todos
            ]
        })
    };

    createItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.startId++
        }
    };

    // Filter items
    onFilterChange = (filter) => {
        this.setState({filter});
    };

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    };

    // Todo list item
    onDeleteItem = (id) => {
        this.setState(({todos}) => {
            const index = todos.findIndex((el) => el.id === id);

            const newArray = [
                ...todos.slice(0, index),
                ...todos.slice(index + 1)
            ];

            return {
                todos: newArray
            }
        });
    };

    // Todo lit item footer

    onToogleImportant = (id) => {
        this.setState(({todos}) => {
            return {
                todos: this.toggleProperty(todos, id, 'important')
            }
        })
    };

    onToogleDone = (id) => {
        this.setState(({todos}) => {
            return {
                todos: this.toggleProperty(todos, id, 'done')
            }
        })
    };

    toggleProperty = (arr, id, propName) => {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];

        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
    };

    // Edit item
    onEditItem = (id) => {
        console.log('hello edit' + id);
    };


    render() {
        const {todos, term, filter} = this.state;
        let doneItems = this.getDoneCount();
        let allItems = this.state.todos.length;

        const visibleItems = this.filter(this.search(todos, term), filter);

        return (
            <div className='app'>
                <header>
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemsStatus done={doneItems} all={allItems}/>
                </header>
                <main>
                    <div className="container-fluid">
                        <div className='controls'>
                            <ItemAddPanel addItem={this.addItem}/>
                            <div className='right'>
                                <SortItems/>
                                <FilterItems
                                    filter={filter}
                                    onFilterChange={this.onFilterChange}/>
                            </div>
                        </div>
                        <TodoList
                            todos={visibleItems}
                            onDeleteItem={this.onDeleteItem}
                            onToogleImportant={this.onToogleImportant}
                            onToogleDone={this.onToogleDone}
                            onEditItem={this.onEditItem}
                        />
                    </div>
                </main>
            </div>
        )
    }
}