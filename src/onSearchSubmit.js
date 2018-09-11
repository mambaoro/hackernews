export const onSearchSubmit = function(event) {
  const { searchTerm } = this.state;
  this.setState({ searchKey: searchTerm });
  if (this.needToSearchTopStories(searchTerm)) {
    this.fetchSearchTopStories(searchTerm);
  }
  event.preventDefault();
}
