export const onSort = function(sortKey) {
  const isSortReverse = this.state.sortKey === sortKey &&
  !this.state.isSortReverse;
  this.setState({ sortKey, isSortReverse });
}
