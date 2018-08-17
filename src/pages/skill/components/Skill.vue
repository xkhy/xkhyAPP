<template>
  <div class="skill">
		<div class="main">
			<div class="speech_list">
				<!--<div class="speech_name"></div>-->
				<span>直销</span>
				<input type="number" name="" id="" placeholder="请输入您的电话"/>
				<span class="icon_style iconfont">&#xe61b;</span>
			</div>
			<div class="speech_list">
				<!--<div class="speech_name"></div>-->
				<span>直销</span>
				<input type="number" name="" id="" placeholder="请输入您的电话"/>
				<span class="icon_style iconfont">&#xe61b;</span>
			</div>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'Skill',
    data () {
      return {
        msg: 'skill'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .skill .main .speech_list{
	width: 94%;
	height: 2.8rem;
	background-color: white;
	border-radius:0.4rem;
	line-height: 3rem;
	margin-left: 3%;
	margin-top: 0.8rem;
	padding-left: 0.7rem;
	font-size: 0.8rem;
	box-sizing: border-box;
}
.speech_list span{
	float: left;
}
.speech_list input{
	width: 60%;
	height: 1.6rem;
	position: relative;
	top: -0.1rem;
	border: 0;
	font-size: 0.8rem;
	padding-left: 1rem;
}
.speech_list .icon_style{
	color: #0096ff;
	font-size: 1.6rem;
	position: absolute;
	right: 1.5rem;
}
.speech_list span:first-child {
  color: #555;
} 
</style>
