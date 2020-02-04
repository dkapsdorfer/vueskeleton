<template>
    <div>
        <div class="row">
            <div class="col-lg-4">
            </div>
            <div class="col-lg-4">
                <h1>{{ $t('rubric.rubric_list') }}</h1>
            </div>
            <div class="col-lg-4">
                <app-button-create
                    route-name="rubric_new"
                >
                </app-button-create>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>{{ $t('rubric.list.id') }}</th>
                            <th>{{ $t('rubric.list.title') }}</th>
                            <th>{{ $t('rubric.list.slug') }}</th>
                            <th>{{ $t('rubric.list.hidden') }}</th>
                            <th>{{ $t('rubric.list.actions') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in demoItems" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.slug }}</td>
                            <td>
                                <b-icon-check v-if="item.hidden"></b-icon-check>
                            </td>
                            <td>
                                <div>
                                    <b-button variant="outline-primary">
                                        {{ $t('button.info') }}
                                    </b-button>
                                    <b-button variant="outline-primary">
                                        {{ $t('button.edit') }}
                                    </b-button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ButtonCreate from "../../components/buttons/ButtonCreate";

  export default {
    name: 'RubricListView',
    data() {
      return {
        dataLoaded: false,
        demoItems: [
          {
            'id': 1,
            'title': 'Z domova',
            'slug': 'z-domova',
            'hidden': false
          },
          {
            'id': 2,
            'title': 'Zo zahraničia',
            'slug': 'zo-zahranicia',
            'hidden': false

          },
          {
            'id': 3,
            'title': 'Ekonomika',
            'slug': 'ekonomika',
            'hidden': true
          },
          {
            'id': 4,
            'title': 'Šport',
            'slug': 'sport',
            'hidden': false
          },
          {
            'id': 5,
            'title': 'Komentáre',
            'slug': 'komentare',
            'hidden': true
          },
          {
            'id': 6,
            'title': 'Kultúra',
            'slug': 'kultura',
            'hidden': false
          }
        ]
      }
    },
    components: {
      appButtonCreate: ButtonCreate
    },
    computed: {
      ...mapState([
        'callingAPI'
      ]),
      rubrics() {
        return this.$store.getters['rubric/list']
      },
      totalCount() {
        return this.$store.getters['rubric/totalCount']
      },
      page() {
        return this.$store.getters['rubric/page']
      }
    },
    methods: {
      getRubrics() {
        this.$store.dispatch('rubric/fetch')
          .then(() => {
            this.dataLoaded = true
          })
      },
      setPageAndGetRecords(page) {
        this.$store.commit('rubric/setPage', page)
        this.getRubrics()
      }
    },
    mounted() {
      // TODO Load rubrics from vuex store
    }
  }
</script>

<style lang="scss" scoped>


</style>
