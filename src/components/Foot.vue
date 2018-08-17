<template>
  <div class="menu">
    <a href="/">
      <div class="subMenu text-center" data-src="">
        <span class="menu_img iconfont icon-style">&#xe660;</span>
        <div class="menu_name current">私海</div>
      </div>
    </a>
    <a href="/opensea.html">
      <div class="subMenu text-center"  data-src="">
        <span class="menu_img iconfont" style="font-size: 20px !important;">&#xe602;</span>
        <div class="menu_name">公海</div>
      </div>
    </a>
    <a href="/skill.html">
      <div class="subMenu text-center" data-src="">
        <span class="menu_img iconfont">&#xe68c;</span>
        <div class="menu_name">话术</div>
      </div>
    </a>
    <a href="/member.html">
      <div class="subMenu text-center" data-src="">
        <span class="menu_img iconfont">&#xe61a;</span>
        <div class="menu_name">我的</div>
      </div>
    </a>


  </div>
</template>

<script>


  export default {

    name: 'foot',
    data () {
      return {
        msg: 'foot'
      }
    },
  }
</script>

<style>

  .menu {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    color: #474747;
    padding-top: 10px;
    border-top: 1px solid #eee;
    background-color: #fff;
  }

  .subMenu {
    width: 25%;
    float: left;
    cursor: pointer;
    border: 0;
  }

  .menu_name {
    height: 32px;
    width: 100%;
    font-size: 0.8rem;
    line-height: 26px;
  }

  .menu_img{
    height: 18px;
    line-height: 18px;
    font-size: 1.2rem !important;
  }


  /*img {
      vertical-align: middle;
      border: 0;
  }*/

  .active {
    color: #FFA129;
  }

  .text-center {
    text-align: center
  }


</style>
