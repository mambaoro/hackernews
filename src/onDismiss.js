export const onDismiss = function (id) {
  const { searchKey, results } = this.state;
  const { hits, page } = results[searchKey];
  const updatedHits = hits.filter((item) => {
    return item.objectID !== id;
  });

  this.setState({
    results: {
      ...results,
      [searchKey]: { hits: updatedHits, page }
    }
  });
}
