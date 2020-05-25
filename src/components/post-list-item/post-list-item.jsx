import React, { Component } from 'react';

import './post-list-item.scss';

export default class PostListItem extends Component {


    render() {
        const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;
        let importantClass = "app-list-item d-flex justify-content-between";
        let impBtnClass = "btn-star btn-sm";
        if (important) {
            importantClass += " important";
            impBtnClass += " gold"
        }
        let likeClass = "btn-heart btn-sm";
        if (like) {
            likeClass += " liked"
        }
        return (
            <li className={importantClass}>
                <span className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex align-items-center buttons-container">
                    <button
                        type="button"
                        className={impBtnClass}
                        onClick={onToggleImportant}>
                        Imp
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        Del
                    </button>
                    <button className={likeClass}
                        onClick={onToggleLiked} >
                        Like
                    </button>

                </div>
            </li>
        );
    }
}
