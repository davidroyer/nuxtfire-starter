<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button>Default Button</el-button>
        <el-button type="primary">Primary Button</el-button>
        <el-button type="text">Text Button</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-input-number v-model="num1" :min="1" :max="10"></el-input-number>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  layout: 'teub',
  data () {
    return {
      num1: 1,
      color: 'rgba(19, 206, 102, 0.8)'
    }
  }
}
</script>

<style>
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
  padding-top: 50px;
}
.el-row {
  padding: 10px;
  text-align: center;
}
</style>
