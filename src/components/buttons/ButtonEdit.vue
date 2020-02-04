<template>
    <router-link
        tag="a"
        :title="$t('button.edit')"
        class="btn btn-success"
        :to="{ name: routeName, params: { id: recordId } }"
    >
        <i class="fa fa-edit"></i> {{ $t('button.edit') }}
    </router-link>
</template>

<script>
  export default {
    name: 'ButtonEdit',
    props: {
      routeName: {
        type: String,
        default: ''
      },
      recordId: {
        type: Number,
        required: true
      }
    }
  }
</script>
