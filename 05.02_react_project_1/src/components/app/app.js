import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
// import WhoAmIAll from '../test_project/test_project';

import './app.css';

export default class App extends Component { //Компонент с приложением
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: "Прошлое забыто, будущее закрыто, настоящее даровано", important: true, id: 1},
                {label: "Там, где есть руины, есть надежда на сокровища", important: false, like: true, id: 2},
                {label: "У тихих людей самые громкие мысли", important: false, id: 3},
                {label: "Примите неопределенность. Когда ничего не ясно, все возможно", important: false, id: 4}
            ],
            term: '',
            filter: 'all',
            dataLocalstorage: false
        };
        this.deletedItem = this.deletedItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 5;
    }

    deletedItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            localStorage.setItem('datalistnotes', JSON.stringify(newArr))

            return {
                data: newArr
            }
        });
    }

    async addItem(body) {

        const datalistnotes = []
        
        await JSON.parse(localStorage.getItem('datalistnotes')).forEach(element => {
            datalistnotes.push(
                element.id
            )
        });
        console.log(datalistnotes)
        console.log(Math.max.apply(null, datalistnotes))

        const newItem = {
            label: body,
            important: false,
            // id: this.maxId++,
            id: (Math.max.apply(null, datalistnotes)) + 1,
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            localStorage.setItem('datalistnotes', JSON.stringify(newArr))
            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            localStorage.setItem('datalistnotes', JSON.stringify(newArr))

            return {
                data: newArr
            }
        }); 
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            localStorage.setItem('datalistnotes', JSON.stringify(newArr))
            return {
                data: newArr
            }
        }); 
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else if (filter === 'important') {
            return items.filter(item => item.important)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }
    
    onFilterSelect(filter){
        this.setState({filter})
    }

    async componentDidMount() {
        const {data} = this.state;
        const datalistnotes = await JSON.parse(localStorage.getItem('datalistnotes'))
        if(!datalistnotes) {
            await localStorage.setItem('datalistnotes', JSON.stringify(data))
            this.setState({
                dataLocalstorage: true
            })
        } else {
            this.setState({
                data: datalistnotes,
                dataLocalstorage: true
            })
        }
    }

    render() {

        if (!this.state.dataLocalstorage) {
            return (
                <div>
                    <h1>Идёт загрузка...</h1>
                </div>
            )
        } else {
            const {data, term, filter} = this.state;
            // const datalistnotes = JSON.parse(localStorage.getItem('datalistnotes'))
            const liked = data.filter((item) => item.like).length;
            const allPosts = data.length;
            const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

            return (
                <div className="app">
                    <AppHeader liked={liked} allPosts={allPosts}/>
                    <div className="search-panel d-flex">
                        <SearchPanel
                            onUpdateSearch={this.onUpdateSearch}/>
                        <PostStatusFilter
                            filter={filter}
                            onFilterSelect={this.onFilterSelect}/>
                    </div>
                    <PostList 
                        posts={visiblePosts}
                        onDelete={this.deletedItem}
                        onToggleImportant={this.onToggleImportant}
                        onToggleLiked={this.onToggleLiked}
                    />
                    <PostAddForm
                        onAdd={this.addItem}
                    />
                    {/* <WhoAmIAll/> */}
                </div>
            )  
        }
    }
}