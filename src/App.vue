<template>
    <div id="app">
        <div id="nav">
            <router-link to="/home">Home </router-link>
            <router-link to="/rubric">Rubric </router-link>
        </div>
        <router-view/>
        <notifications
            group="main"
            position="top center"
            :speed="500"
            :width="600"
        />
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        text-align: center;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
