const buildFilterQuery = function (filter) {
  let filterQuery = ''

  if (filter.id) {
    filterQuery += '&filter_eq[id]=' + filter.id
  }

  if (filter.title) {
    filterQuery += '&filter_contains[title]=' + filter.title
  }

  if (filter.slug) {
    filterQuery += '&filter_contains[slug]=' + filter.slug
  }

  return filterQuery
}

export default {
  buildFilterQuery
}
