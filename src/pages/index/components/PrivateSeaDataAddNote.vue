<template>
<div>
  		<header>
			<span class="icon-style iconfont">&#xe64b;</span>
			<div class="header_title">添加便签</div>
		</header>
		<div class="header_btm"></div>
		<div class="add_note_main">
			<textarea rows="10" placeholder="请输入您要写的便签，字数在100字以内。"></textarea>
			<div class="add_note_btn">
				<button id="">提交</button>
			</div>
		</div>
</div>
</template>

<script>
export default {
  name: 'PrivateSeaDataAddNote',
  data () {
    return {
      msg: 'PrivateSeaDataAddNote'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add_note_main {
	padding: 0.5rem;
}

.add_note_main textarea {
	width: 100%;
	border-radius: 0.3rem;
	padding: 0.3rem;
	box-sizing: border-box;
}

.add_note_btn {
	width: 100%;
	height: 2.5rem;
	text-align: center;
	margin-top: 1rem;
}

.add_note_btn button {
	width: 100%;
	height: 2.5rem;
	background-color: #0096ff;
	color: #fff;
	font-size: 0.8rem;
	border: none;
	border-radius: 0.2rem;
}
</style>
