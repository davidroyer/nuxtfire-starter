<template lang="html">
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/admin">Admin</nuxt-link>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
nav {
  background: #1F2D3A;
  padding: 1em;
  display: flex;
  justify-content: space-around;

  a {
    color: white;
    text-decoration: none;
    &.nuxt-link-exact-active {
      font-weight: 700;
    }
  }
}
</style>
