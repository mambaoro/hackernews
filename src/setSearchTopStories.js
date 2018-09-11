import { updateSearchTopStoriesState } from './updateSearchTopStoriesState';

export const setSearchTopStories = function(result) {
  const { hits, page } = result;
  this.setState(updateSearchTopStoriesState(hits, page));
}
