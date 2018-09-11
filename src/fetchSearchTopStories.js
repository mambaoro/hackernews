import { PATH_BASE, PATH_SEARCH, PARAM_SEARCH, PARAM_PAGE, PARAM_HPP, DEFAULT_HPP } from './fetchHackernews';
import axios from 'axios';

export const fetchSearchTopStories = function(searchTerm, page = 0) {
  this.setState({ isLoading: true });

  axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    .then(result => this._isMounted && this.setSearchTopStories(result.data))
    .catch(error => this._isMounted && this.setState({ error }));
}
