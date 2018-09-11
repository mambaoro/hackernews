export const needToSearchTopStories = function(searchTerm) {
  return !this.state.results[searchTerm];
}
