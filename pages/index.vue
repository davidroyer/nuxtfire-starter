<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">NuxtFire API</h1>
      <ul>
        <li v-for="(post, key) in posts" :key="key">
        <nuxt-link :to="`/posts/${post.slug}`">{{post.title}}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {Logo},
    async asyncData ({app}) {
      let { data } = await app.axios.get('/posts')

      return {
        posts: data
      }
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    /*text-align: center;*/
  }

  .title {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .network {
    font-weight: 400;
    font-size: 1rem;
  }

  .network .circle {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: green;
    padding: .1rem .5rem;
    border-radius: 1rem;
  }

  .network.offline .circle {
    background: red;
  }
</style>
