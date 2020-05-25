import React from 'react';
import { ListGroup } from 'reactstrap';

import PostListItem from '../post-list-item';

import './post-list.scss';


export default function PostList({ posts, onDelete, onToggleImportant, onToggleLiked }) {
    return (
        <ListGroup className="post-list">
            {posts.map((post) => {
                const { id, label, important, like } = post;
                return (
                    <PostListItem
                        like={like}
                        key={id}
                        label={label}
                        important={important}
                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLiked={() => onToggleLiked(id)}
                    />
                )
            })}
        </ListGroup>
    )
}
