import React from 'react';

import './app-header.scss';

export default function AppHeader({ likes, posts }) {
    return (
        <div className="app-header">
            <div className="app-header-title">Simple List</div>
            <div className="app-header-counter">{`Total posts: ${posts}. Total likes: ${likes}`}</div>
        </div>
    )
}
