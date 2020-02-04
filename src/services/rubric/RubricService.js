import Store from '../../store'

const getRubricTitle = (rubricId) => {
  return Store.getters['rubric/rubricById'](rubricId).title
}

export default {
  getRubricTitle
}
