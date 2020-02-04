<template>
    <router-link
        tag="a"
        class="btn btn-success"
        :to="{ name: routeName }"
        :title="$t('button.create_new')"
    >
        <i class="fas fa-plus"></i> {{ $t('button.create_new') }}
    </router-link>
</template>
<script>
  export default {
    name: 'CreateButton',
    props: {
      routeName: {
        type: String
      }
    }
  }
</script>
