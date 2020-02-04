<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <h1>{{ $t('rubric.new_rubric') }}</h1>
            </div>
            <div class="col-lg-6 text-right">
                <b-button
                    variant="success"
                    @click="save"
                >
                    {{ $t('button.save') }}
                </b-button>
                <app-button-close
                    route-name="rubric_list"
                >
                </app-button-close>
            </div>
        </div>

        <b-form-group>
            <label for="rubric-title">
                {{ $t('rubric.title') }} *
            </label>
            <b-form-input
                v-model="rubric.title"
                id="rubric-title"
            >
            </b-form-input>
        </b-form-group>

        <b-form-group>
            <label for="rubric-slug">
                {{ $t('rubric.slug') }} *
            </label>
            <b-form-input
                v-model="rubric.slug"
                id="rubric-slug"
            >
            </b-form-input>
        </b-form-group>

        <b-form-group>
            <label for="rubric-meta-title">
                {{ $t('rubric.meta_title') }}
            </label>
            <b-form-input
                v-model="rubric.meta.title"
                id="rubric-meta-title"
            >
            </b-form-input>
        </b-form-group>

        <b-form-group>
            <label for="rubric-meta-description">
                {{ $t('rubric.meta_description') }}
            </label>
            <b-form-input
                v-model="rubric.meta.description"
                id="rubric-meta-description"
            >
            </b-form-input>
        </b-form-group>

        <b-form-group>
            <label for="rubric-meta-keywords">
                {{ $t('rubric.meta_keywords') }}
            </label>
            <b-form-input
                v-model="rubric.meta.keywords"
                id="rubric-meta-keywords"
            >
            </b-form-input>
        </b-form-group>

        <b-form-group>
            <b-form-checkbox
                id="checkbox-1"
                v-model="rubric.hidden"
                name="checkbox-1"
            >
                {{ $t('rubric.hidden') }}
            </b-form-checkbox>
        </b-form-group>
        {{ rubric }}
    </div>
</template>

<script>
  import {required, minLength, maxLength} from 'vuelidate/lib/validators'
  import RubricModel from '../../model/RubricModel'
  import NotifyService from '../../services/NotifyService'
  import ButtonClose from "../../components/buttons/ButtonClose";

  export default {
    name: 'RubricNewView',
    data() {
      return {
        dataLoaded: false,
        isLoading: false,
        rubric: RubricModel
      }
    },
    components: {
      appButtonClose: ButtonClose
    },
    computed: {
      sites() {
        return this.$store.getters['site/enabledSites']
      },
      rubrics() {
        return this.$store.getters['rubric/list']
      },
      rubricsBySite() {
        if (!this.rubric.site) {
          return []
        }
        return this.$store.getters['rubric/rubricsBySite'](this.rubric.site)
      }
    },
    validations: {
      rubric: {
        title: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(255)
        },
        slug: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(255)
        },
        meta: {
          title: {
            maxLength: maxLength(255)
          },
          description: {
            maxLength: maxLength(255)
          },
          keywords: {
            maxLength: maxLength(255)
          }
        }
      }
    },
    methods: {
      async save() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          NotifyService.setErrorMessage(this.$t('notify.please_fill_all_required_fields'))
        } else {
          // TODO Create rubric
          NotifyService.setSuccessMessage(this.$t('notify.record_was_created'))
          /*
          this.$store.dispatch('rubric/create', this.rubric)
            .then(() => {
              if (this.$store.getters['rubric/error'] === null) {
                NotifyService.setSuccessMessage(this.$t('notify.record_was_created'))
                this.rubric = this.$store.getters['rubric/detail']
                this.$router.push('/rubric/' + this.rubric.id + '/edit')
              } else {
                NotifyService.setErrorMessage(this.$store.getters['rubric/error'])
              }
            })
            .catch(error => console.log(error)
            */
        }
      }
    },
    mounted() {
      // TODO Load sites, etc
    }
  }
</script>
