import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './button';
import { onSort } from './onSort';
import { SORTS } from './sorts';
import { Sort } from './sortButton';
import { largeColumn, midColumn, smallColumn } from './columnWidth';
import './App.css';

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortKey: 'NONE',
      isSortReverse: false
    }

    this.onSort = onSort.bind(this);
  }


  render() {
    const { list, onDismiss } = this.props;
    const { sortKey, isSortReverse } = this.state;
    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse
      ? sortedList.reverse()
      : sortedList;

    return (
        <div className="table">
          <div className="table-header">
            <span style={largeColumn}>
              <Sort
                sortKey={'TITLE'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                Title
              </Sort>
            </span>
            <span style={midColumn}>
              <Sort
                sortKey={'AUTHOR'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                Author
              </Sort>
            </span>
            <span style={smallColumn}>
              <Sort
                sortKey={'COMMENTS'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                Comments
              </Sort>
            </span>
            <span style={smallColumn}>
              <Sort
                sortKey={'POINTS'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                Points
              </Sort>
            </span>
            <span style={{ width: '10%' }}>
              Archive
            </span>
          </div>
          {reverseSortedList.map(item =>
            <div key={item.objectID} className="table-row">
              <span style={largeColumn}>
                <a href={item.url}>{item.title}</a>
              </span><br/>
              <span style={midColumn}>{item.author}</span><br/>
              <span style={smallColumn}>{`Comments: ${item.num_comments}`}</span><br/>
              <span style={smallColumn}>{`Points: ${item.points}`}</span><br/>
              <span style={smallColumn}>
                <Button
                  onClick={() => onDismiss(item.objectID)}
                  className="button-inline"
                >
                  Remove
                </Button>
              </span>
            </div>
          )}
        </div>
      )};
    }

  Table.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        objectID: PropTypes.string.isRequired,
        author: PropTypes.string,
        num_comments: PropTypes.number,
        points: PropTypes.number
      })
    ).isRequired,
    onDismiss: PropTypes.func.isRequired
  }
