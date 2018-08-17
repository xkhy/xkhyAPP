<template>
  <div class="skill">
		<div class="main">
			<div class="speech_list" v-for="item of skillList" ref="skillList">
				<span class = "skillName">{{item.skillName}}</span>
				<input type="number" name="item.id"  placeholder="请输入您的电话" class="skillInput"/>
				<span class="icon_style iconfont skillBtn" :key="item.id" >&#xe61b;</span>
			</div>
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
	mounted:function () {
	    var a  = skillList.length;
		console.log(a)
		var nameLi = document.getElementsByClassName("skillName");
		var inputLi = document.getElementsByClassName("skillInput");
		var btnLi = document.getElementsByClassName("skillBtn");

		for(var i = 0;i<btnLi.length;i++){
            !function(i){
                btnLi[i].addEventListener("click",function(){
                    for(var j=0;j<btnLi.length;j++){
                        if(j!=i){

                        }else{
                            var moblie = inputLi[j].value;
                            var name = skillList.skillName;
                            alert(name)
                        }
                    }
                })
            }(i)
		}




    },

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
