<template>
  <div class="wrapper">
    <el-row type="flex" justify="space-around"
            class="not-found">
      <div class="not-found-prompt">
        <p class="title">很抱歉，没找到相关的页面……</p>
        <br/>
        <br/>
        <p style="color: #F4511E">我们建议您：</p>
        <br/>
        <p>1. 输入正确的网址</p>
        <br/>
        <p>2. 检查网络状态，并在网络正常后刷新页面（甩锅给网络）</p>
      </div>
      <el-image :src="require('assets/images/not-found.jpg')"
                alt="search-not-found"
                class="not-found-img"></el-image>
    </el-row>
    <FooterBar interval="6"></FooterBar>
  </div>
</template>

<script>
  import FooterBar from 'components/FooterBar.vue'

  export default {
    name: 'PageNotFound',
    components: {
      FooterBar
    }
  }
</script>

<style scoped>
  .not-found {
    text-align: left;
    margin-top: 6vw;
  }

  .not-found .not-found-prompt {
    margin-top: 8vw;
    margin-left: 10vw;
  }

  .not-found .not-found-img {
    width: 27.6vw;
    height: 15vw;
    margin-top: 7vw;
    margin-right: 10vw;
  }
</style>
