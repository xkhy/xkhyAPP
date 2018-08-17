<template>
<div>
  <header>
			<span class="icon-style iconfont">&#xe64b;</span>
			<div class="header_title">客户详情</div>
		</header>
		<div class="header_btm"></div>
		<div class="main">
			<div class="list">
				<li>
					<span>姓名</span>
					<input type="text" name="" id="" placeholder="请输入姓名"/>
				</li>
				<li>
					<span>性别</span>
					<select name="select">
						<option value="男">男</option>
						<option value="女">女</option>
					</select>
					<span class="icon_style iconfont">&#xe601;</span>
				</li>
				<li>
					<span>联系方式</span>
					<input type="text" name="" id="" placeholder="13888888888" readonly="readonly" style="margin-left: 0.4rem;"/>
				</li>
				<li>
					<span>生日</span>
					<span class="icon_style iconfont">&#xe601;</span>
				</li>
				<li>
					<span>城市</span>
					<span class="icon_style iconfont">&#xe601;</span>
				</li>
				<li>
					<table>公司</table>
					<input type="text" name="" id="" placeholder="请输入公司名称"/>
				</li>
				<li>
					<span>职位</span>
					<input type="text" name="" id="" placeholder="请输入您的职位"/>
				</li>
			</div>
			<div class="add_note_btn" style="width: 90%;margin-left: 5%;margin-top: 4rem;">
				<button id="">提交</button>
			</div>
		</div>
</div>
</template>

<script>
export default {
  name: 'PrivateSeaDataDetails',
  data () {
    return {
      msg: 'PrivateSeaDataDetails'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
