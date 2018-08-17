<template>
<div>
  			<div class="category">
				<div class="category-left" id="">
					<span class="current">跟进客户</span>
				</div>
				<div class="category-in" id="">
					<span>成功客户</span>
				</div>
				<div class="category-right" id="">
					<span>未分类</span>
				</div>
			</div>

      <div class="index-li-solid"></div>

      <div class="main">
				<div class="index-list">
					<div class="index-li">
						<div class="index-li-left">
							<div class="li-left1">
								<span class="iconfont" style="font-size: 1rem;color: #0096ff;">&#xe686;</span>
								<span>15888888888</span>
							</div>
							<div class="li-left">
								<span>通话时间：</span>
								<span>2018-03-26 15:22:56</span>
							</div>
							<div class="li-left">
								<span>累计时长：</span>
								<span>10分55秒</span>
							</div>
							<div class="li-left">
								<span>负责人：</span>
								<span>审计局</span>
							</div>
						</div>
						<div class="index-li-in"></div>
						<div class="index-li-right">
							<div class="li-right">
								<span class="iconfont">&#xe659;</span>
								<span>语音</span>
							</div>
							<div class="li-right">
								<span class="iconfont">&#xe628;</span>
								<span>归类</span>
							</div>
							<div class="li-right">
								<span class="iconfont">&#xe60b;</span>
								<span>资料</span>
							</div>
						</div>
					</div>
					<div class="index-li-solid"></div>
				</div>
				<div class="index-list">
					<div class="index-li">
						<div class="index-li-left">
							<div class="li-left1">
								<span class="iconfont" style="font-size: 1rem;color: #0096ff;">&#xe686;</span>
								<span>15888888888</span>
							</div>
							<div class="li-left">
								<span>通话时间：</span>
								<span>2018-03-26 15:22:56</span>
							</div>
							<div class="li-left">
								<span>累计时长：</span>
								<span>10分55秒</span>
							</div>
							<div class="li-left">
								<span>负责人：</span>
								<span>审计局</span>
							</div>
						</div>
						<div class="index-li-in"></div>
						<div class="index-li-right">
							<div class="li-right">
								<span class="iconfont">&#xe659;</span>
								<span>语音</span>
							</div>
							<div class="li-right">
								<span class="iconfont">&#xe628;</span>
								<span>归类</span>
							</div>
							<div class="li-right">
								<span class="iconfont">&#xe60b;</span>
								<span>资料</span>
							</div>
						</div>
					</div>
					<div class="index-li-solid"></div>
				</div>
			</div>
</div>
			
</template>

<script>
export default {
  name: "PrivateSea",
  data() {
    return {
      msg: "PrivateSea"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.category {
  width: 100%;
  height: 1.8rem;
  line-height: 1.8rem;
  display: flex;
  color: #333;
  margin-bottom: 0.5rem;
  background-color: #fff;
}
.category-left {
  width: 100%;
  height: 1.8rem;
  text-align: center;
  border-right: 1px solid #dddddd;
  flex-wrap: nowrap;
}
.category-in {
  width: 100%;
  height: 1.8rem;
  text-align: center;
  border-right: 1px solid #dddddd;
  flex-wrap: nowrap;
}
.category-right {
  width: 100%;
  height: 1.8rem;
  text-align: center;
  border-right: 1px solid #dddddd;
  flex-wrap: nowrap;
}

.index-list {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}

.index-li {
  width: 100%;
  height: 6.4rem;
  display: flex;
  background-color: #fff;
}
.index-li-left {
  width: 240%;
  height: 6.4rem;
  padding-left: 1rem;
  box-sizing: border-box;
  flex-wrap: nowrap;
  padding-top: 0.6rem;
}
.li-left {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.7rem;
  color: #999;
}
.li-left1 {
  width: 100%;
  height: 1.6rem;
  line-height: 1.6rem;
  font-size: 1rem;
}
.index-li-in {
  width: 2px;
  height: 5.4rem;
  flex-wrap: nowrap;
  border-right: 1px solid #ddd;
  margin-top: 0.5rem;
}
.index-li-right {
  width: 100%;
  height: 6rem;
  flex-wrap: nowrap;
  padding-top: 0.8rem;
}
.li-right {
  width: 100%;
  height: 1.6rem;
  line-height: 1.6rem;
  font-size: 0.7rem;
  padding-left: 1.4rem;
  color: #999;
}
.index-li-solid {
  width: 100%;
  height: 0.4rem;
  background-color: #eeeeee;
}
</style>
