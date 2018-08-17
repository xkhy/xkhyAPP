<template>
  <div>
    <header>
			<span class="icon-style iconfont">&#xe64b;</span>
			<div class="header_title">归类</div>
		</header>
		<div class="header_btm"></div>
		<div class="main">
			<div class="box">
				<label for="radio1">成功客户</label><input type="radio" id="radio1" name="radio" checked="checked" />
			</div>
			<div class="line"></div>
			<div class="box">
				<label for="radio2">跟进客户</label><input type="radio" id="radio2" name="radio" />
			</div>
			<div class="line"></div>
			<div class="box">
				<label for="radio3">公海</label><input type="radio" id="radio3" name="radio" />
			</div>
			<div class="line"></div>
		</div>
		
		<div class="add_note_btn" style="width: 94%;margin-left: 3%;">
			<button id="">提交</button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'PrivateSeaClass',
  data () {
    return {
      msg: 'PrivateSeaClass'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
	width: 96%;
	height: 2rem;
	border-bottom: 1px solid #ddd;
	line-height: 2rem;
	margin-left: 2%;
	font-size: 0.8rem;
}
.box input{
	position: absolute;
	right: 1rem;
	margin-top: 0.6rem;
}
</style>
