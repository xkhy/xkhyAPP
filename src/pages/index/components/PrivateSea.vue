<template>
    <div style="overflow: hidden">

        <div style="background-color: #ffffff!important;height: 3rem;width: 100%">
            <div class="page-search">
                <mt-search autofocus v-model="value" :result="filterResult"></mt-search>
            </div>
        </div>



        <div class="page-navbar">
            <mt-navbar class="page-part" v-model="selected">
                <mt-tab-item id="1"><span>跟进客户</span></mt-tab-item>
                <mt-tab-item id="2"><span>成功客户</span></mt-tab-item>
                <mt-tab-item id="3"><span>未分类</span></mt-tab-item>
            </mt-navbar>


            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
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
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="index-li">
                        <div class="index-li-left">
                            <div class="li-left1">
                                <span class="iconfont" style="font-size: 1rem;color: #0096ff;">&#xe686;</span>
                                <span>15666666666</span>
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
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <div class="index-li">
                        <div class="index-li-left">
                            <div class="li-left1">
                                <span class="iconfont" style="font-size: 1rem;color: #0096ff;">&#xe686;</span>
                                <span>1577777777</span>
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
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>

</template>

<script>
    export default {
        name: "PrivateSea",
        beforeCreate () {
            document.querySelector('body').setAttribute('style', 'background:#eee')
        },
        data() {
				
            return {
								selected: '1',
								value:'',
								filterResult:[],

            };
        },

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    .index-li {
        width: 100%;
        height: 6.4rem;
        display: flex;
        background-color: #fff;
        margin-top: 0.5rem;
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
        font-size: 0.85rem;
        padding-left: 1.4rem;
        color: #999;
    }


    .page-part span{
        font-size: 0.8rem;
    }
    .page-search{
        height: 3.1rem;
        font-size: 0.7rem;
    }
</style>
