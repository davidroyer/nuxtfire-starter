<template>
  <div class="test">
    <h1>Admin</h1>

    <post-form @postSaved="addPost"></post-form>
  </div>
</template>

<script>

import PostForm from '~/components/AddPost.vue'

export default {
  components: {
    PostForm
  },
  methods: {
    addPost (post) {
      this.$axios.post('/posts', post)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="css">
</style>
