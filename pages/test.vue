<template>
  <div class="test">
    <h1>Demo Page</h1>
    <post-form @postSaved="addPost"></post-form>
  </div>
</template>

<script>
import axios from '~/plugins/axios.js'
import PostForm from '~/components/AddPost.vue'
console.log(PostForm);
export default {
  components: {
    PostForm
  },
  methods: {
    addPost (post) {
      axios.post('/posts', post)
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
