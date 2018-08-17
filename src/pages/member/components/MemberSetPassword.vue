<template>
<div>
  <header>
    <span class="icon-style iconfont">&#xe64b;</span>
    <div class="header_title">修改密码</div>
  </header>

  <div class="header_btm"></div>
  <div class="psw_input">
    <div class="psw_input_li">
      <input type="text" name="" id="" placeholder="请输入原密码" />
    </div>
    <div class="psw_input_li">
      <input type="password" name="" id="" placeholder="请输入新密码" />
    </div>
    <div class="psw_input_li">
      <input type="password" name="" id="" placeholder="确认新密码" />
    </div>
  </div>
  <div class="add_note_btn" style="width: 90%;margin-left: 5%;margin-top: 4rem;">
    <button id="">确认</button>
  </div>

</div>

</template>

<script>
  export default {
    name: 'membersetpassword',

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .psw_input{
    width: 100%;
    height: 7.6rem;
    padding: 0rem 0.8rem;
    box-sizing: border-box;
  }
  .psw_input_li{
    width: 100%;
    height: 2.6rem;
    border-bottom: 1px solid #ddd;
    line-height: 2.6rem;
    float: left;
  }
  .psw_input_li input{
    width: 60%;
    height: 1.5rem;
    position: relative;
    bottom: 0.1rem;
    border: 0;
    font-size: 0.8rem;
  }
</style>
