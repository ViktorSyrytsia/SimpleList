import React, { Component } from 'react';

import dataBase from './db';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.scss'

export default class App extends Component {
    state = {
        data: dataBase,
        term: '',
        filter: 'all'

    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(element => element.id === id);
            const newArray = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArray
            }

        })
    }
    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.state.data.length + 1
        }
        this.setState(({ data }) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(element => element.id === id);
            const newPost = { ...data[index], important: !data[index].important };
            const newArray = [...data.slice(0, index), newPost, ...data.slice(index + 1)];
            return {
                data: newArray
            }
        })
    }
    onToggleLiked = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(element => element.id === id);
            const newPost = { ...data[index], like: !data[index].like };
            const newArray = [...data.slice(0, index), newPost, ...data.slice(index + 1)];
            return {
                data: newArray
            }
        })
    }
    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }
    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }


    render() {
        const { data, term, filter } = this.state;

        const likes = data.filter(item => item.like).length;
        const posts = data.length;

        const visablePost = this.filterPost(this.searchPost(data, term), filter)

        return (
            <div className="app">
                <AppHeader
                    likes={likes}
                    posts={posts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visablePost}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAddItem={this.addItem} />
            </div>
        );
    }
}
