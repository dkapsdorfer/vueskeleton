<template>
    <router-link
        tag="a"
        class="btn btn-secondary"
        :to="{ name: routeName, params: routeParams }"
        :title="$t('button.close')"
        @click.native="$emit('click')"
    >
        <i class="fas fa-window-close"></i> <span class="hidden-sm-down">{{ $t('button.close') }}</span>
    </router-link>
</template>

<script>
  export default {
    name: 'ButtonClose',
    props: {
      routeName: {
        type: String,
        default: ''
      },
      routeParams: {
        type: String,
        default: ''
      }
    }
  }
</script>
