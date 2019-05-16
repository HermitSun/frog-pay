<template>
  <el-row>
    <template v-for="i in Number(interval)">
      <br :key="i"/>
    </template>
    <p style="color:#C0C4CC">&copy;2019 弗灵格支付 by F.R.O.G</p>
  </el-row>
</template>

<script>
  export default {
    name: 'Payment',
    props: {
      interval: String
    }
  }
</script>

<style scoped>

</style>
