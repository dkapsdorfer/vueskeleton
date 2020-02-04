<script>
  import RubricNewView from './RubricNewView'
  import NotifyService from '../../services/NotifyService'

  export default {
    name: 'RubricEditView',
    extends: RubricNewView,
    methods: {
      getRubric() {
        this.$store.dispatch('rubric/fetchOne', this.$route.params.id)
          .then(() => {
            this.rubric = this.$store.getters['rubric/detail']
          })
      },
      async save() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          NotifyService.setErrorMessage(this.$t('notify.please_fill_all_required_fields'))
          return
        }
        this.$store.dispatch('rubric/update', this.rubric)
          .then(() => {
            this.rubric = this.$store.getters['rubric/detail']
            if (this.$store.getters['rubric/error'] === null) {
              NotifyService.setSuccessMessage(this.$t('notify.record_was_updated'))
            } else {
              NotifyService.setErrorMessage(this.$store.getters['rubric/error'])
            }
          })
          .catch(error => console.log(error))
      }
    },
    created() {
      this.getRubric()
    }
  }
</script>
