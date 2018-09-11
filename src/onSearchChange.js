export const onSearchChange = function (event) {
  this.setState({
    ...this.state,
    searchTerm: event.target.value
  });
}
