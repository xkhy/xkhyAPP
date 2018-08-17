<template>
  <div>
    <header>
      <span class="icon-style iconfont">&#xe64b;</span>
      <div class="header_title">版本更新</div>
    </header>

    <div class="update_text">
      <p>当前版本为最新版本！</p>
      <p>无需更新</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'member',
    data () {
      return {
        msg: 'member'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .update_text{
    margin-top: 6rem;
  }
  .update_text p{
    text-align: center;
    font-size: 0.8rem;
    color: #999;
    line-height: 0.5rem;
  }
</style>
