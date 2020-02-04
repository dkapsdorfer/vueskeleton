<template>
    <div id="main-wrapper">
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'Dash',
    data() {
      return {
        error: ''
      }
    }
  }
</script>

<style lang="scss">

</style>
