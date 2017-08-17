<template>
  <el-form ref="form" :model="post" label-width="120px">
    <el-form-item label="Post Title">
      <el-input v-model="post.title"></el-input>
    </el-form-item>
    <el-form-item label="Post Content">
      <el-input type="textarea" v-model="post.content"></el-input>
    </el-form-item>
    <el-form-item class="buttons">
      <el-button type="primary" class="save" @click="onSubmit">Save Post</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.post);
        this.$emit('postSaved', this.post)
      }
    }
  }
</script>

<style lang="scss">
.el-form-item {

  &.buttons {
    display: flex;

    .el-form-item__content {
      margin-left: auto !important;
    }

    .save {
      font-we: 700;
    }
  }

}
</style>
