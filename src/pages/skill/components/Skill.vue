<template>
  <div class="skill">
		<div class="main">
			<li class="speech_list" v-for="(item,index) of skillList" >
				<span class = "skillName">{{item.skillName}}</span>
				<label><input type="number"  placeholder="请输入您的电话" class="skillInput" :id="'input'+ forId(item.id)"/></label>
				<span class="icon_style iconfont skillBtn" @click="ringUp(item.id)" >&#xe61b;</span>
			</li>
		</div>
  </div>
</template>

<script>

export default {
    name: 'Skill',
    data () {
        return {
            msg: 'skill',
            skillList:[{
              id:1,
              skillName:" 直销"
            },{
              id:2,
              skillName:"贷款"
            },{
                id:3,
              skillName:"金融"
            },{
                id:4,
              skillName:"房产"
            }]
        }
    },
    methods:{
        ringUp:function (num) {
            var chooseInput = document.getElementById('input'+num);
            //获取电话号码
            var choosemobile = chooseInput.value;
            //获取所选话术模板id
            var chooseSkill = num;
            //验证电话正确格式
            this.checkMobile(choosemobile);




            //然后开始打电话
        },
        forId:function (num) {
            return(num);
        },
        checkMobile:function (mobile) {

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
