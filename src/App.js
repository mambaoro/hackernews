import React, { Component } from 'react';
import Search from './search';
import Table from './table';
import { Button } from './button';
import { withLoading } from './withLoading';
import { withError } from './withError';
import { fetchSearchTopStories } from './fetchSearchTopStories';
import { setSearchTopStories } from './setSearchTopStories';
import { needToSearchTopStories } from './needToSearchTopStories';
import { onSearchChange } from './onSearchChange';
import { onSearchSubmit } from './onSearchSubmit';
import { onDismiss } from './onDismiss';
import { DEFAULT_QUERY } from './fetchHackernews';
import './App.css';

export { Search, Table, Button };

export default class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false,
    }

    this.needToSearchTopStories = needToSearchTopStories.bind(this);
    this.setSearchTopStories = setSearchTopStories.bind(this);
    this.fetchSearchTopStories = fetchSearchTopStories.bind(this);
    this.onSearchChange = onSearchChange.bind(this);
    this.onSearchSubmit = onSearchSubmit.bind(this);
    this.onDismiss = onDismiss.bind(this);
    }

    componentDidMount() {
      this._isMounted = true;
      const { searchTerm } = this.state;
      this.setState({
        searchKey: searchTerm,
        isLoading: true
      });
      this.fetchSearchTopStories(searchTerm);
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

  render() {
    const { results, searchTerm, searchKey, error, isLoading } = this.state;
    const ButtonWithLoading = withLoading(Button);
    const TablewithError = withError(Table);

    const page = (
      results &&
      results[searchKey] &&
      results[searchKey].page
    ) || 0;

    const list = (
      results &&
      results[searchKey] &&
      results[searchKey].hits
    ) || [];

    return (
      <div className="page">
        <div className="interactions">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        >
          Search
        </Search>
        </div>
        <TablewithError
          error={error}
          list={list}
          onDismiss={this.onDismiss}
        />
        <div className="interactions">
          <ButtonWithLoading
            isLoading={isLoading}
            onClick={() =>
              this.fetchSearchTopStories(searchKey, page + 1)}
            error={error}
          >
            More
          </ButtonWithLoading>
        </div>
      </div>
    );
  }
}
