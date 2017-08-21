<template lang="html">
  <div class="post" :key="post.key">
    <h1 v-text="post.title"></h1>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
function restructuredPost(data) {
  let keys = Object.keys(data)
  let key = keys[0]
  let postData = data[key]
  postData['key'] = key
  return postData
}

export default {
  async asyncData ({app, route}) {
    let slug = route.params.slug
    let { data } = await app.axios.get(`/posts/${slug}`)

    return {
      post: restructuredPost(data)
    }
  }
}
</script>

<style lang="css">
</style>
