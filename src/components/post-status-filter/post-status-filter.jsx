import React, { Component } from 'react';

import './post-status-filter.scss';

export default class PostStatusFilter extends Component {
  state = {}

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'like', label: 'Liked' }
  ];

  render() {
    const { filter, onFilterSelect } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const active = filter === name;
      const activeClass = active ? 'btnOne' : 'btnTwo'
      return (
        <button
          key={name}
          className={activeClass}
          onClick={() => onFilterSelect(name)}
        >{label}</button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}