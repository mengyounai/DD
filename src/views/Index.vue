<template>
    <div class="main">
        <div class="header">

            <Row type="flex" justify="center" align="middle" class="code-row-bg">
                <Col :lg="{ span: 4, offset: 5 }">
                    <a href="http://localhost:8080/index"><img src="../images/DD阅读.png"></a>
                </Col>
                <Col :lg="{ span: 5, offset: 4 }">
                    <Input style="width: 200px" type="text" v-model="serachInfo"/>
                    <router-link :to="{name:'list2',params:{serachInfo:serachInfo}}">
                        <Button style="width: 50px;height: 30px" type="primary"
                                icon="ios-search"></Button>
                    </router-link>
                </Col>
                <Col :xs="{ offset: 2 }">
                    <div v-show="exist">
                        <a class="a1" href="http://localhost:8080/personal"><img class="img1"
                                                                                 :src="pinfo.icon"></a>
                    </div>
                    <div v-show="!exist">
                        <a href="http://localhost:8080/login">登录</a>/
                        <a href="http://localhost:8080/register">注册</a>
                    </div>
                </Col>
            </Row>

        </div>
        <hr style="background-color: #cccccc">
        <div class="content" style="display: flex;">
            <div class="content1" style="width: 60%">
                <Carousel v-model="value3"
                          :autoplay="setting.autoplay"
                          :autoplay-speed="setting.autoplaySpeed"
                          :dots="setting.dots"
                          :radius-dot="setting.radiusDot"
                          :trigger="setting.trigger"
                          :arrow="setting.arrow"
                >
                    <Carousel-item v-for="(item,index) in NoticInfo " :info="item" :key="index">
                        <div class="demo-carousel">
                            <img class="demo-img" :src="item.noticeimg"/>
                        </div>
                    </Carousel-item>

                </Carousel>
            </div>
            <div class="content2" style=" ">
                <div>
                    <span class="span1"><a href="#"><img src="../images/作者中心.png"/></a> </span>
                </div>
                <div style="width: 100%;height: 70%;">

                    <ul class="ul2">
                        <span class="line"></span>
                        <span> <li><a href="#"><img src="../images/签到.png"></a></li></span>
                        <span class="line"></span>
                        <span> <li><a href="http://localhost:8080/list"><img src="../images/书.png"></a></li></span>
                        <span class="line"></span>
                        <span> <li><a href="http://localhost:8080/state"><img src="../images/续.png"></a></li></span>
                        <span class="line"></span>

                        <div id="line1"><br><br><br><br><br><br><br>
                            <div id="line2">
                                <h3 style="text-align: center;">公告</h3>
                                <ul class="ul3" v-for="(item,index) in NoticInfo.slice(0, 3) " :info="item"
                                    :key="index">
                                    <span><li>{{index+1}}:{{item.noticecon}}</li></span>

                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content3">
            <div style="width: 65%">
                <h3 style="margin:15px 0 0 180px">图书推荐</h3>

                <ul class="ul1"  style="margin:10px 0 0 180px">
                    <li v-for="(item,index) in bookinfo2" :info="item" :key="index" :title="item.name">
                        <router-link class="list1" :to="{name:'detail',params:{id:item.id}}">
                        <img class="img2" :src="item.icon">
                        </router-link>
                    </li>
                </ul>
            </div>
            <div style="width: 23%">
                <h3 style="margin-top: 30px;margin-bottom: 2px">排行榜</h3>
                <ul class="ul4" v-for="(item,index) in bookinfo.slice(0, 5) " :info="item" :key="index">
                    <li>
                        <router-link class="list1" :to="{name:'detail',params:{id:item.id}}">
                        <a>{{index+1}}.{{item.name}}
                        </a>
                        </router-link>
                    </li>
                </ul>
            </div>


        </div>
        <div class="footer">
            <div class="footer1">
            </div>
            <div class="row">
                <div class="row1">
                    <span>网站概要</span>
                    <span style="margin-left: 5px">——</span>
                    <ul class="ul5">
                        <li><a>关于我们</a></li>
                        <li><a>加入我们</a></li>
                        <li><a>联系我们</a></li>
                        <li><a>免责声明</a></li>
                    </ul>
                </div>

                <div class="row1">
                    <span>作者服务</span>
                    <span style="margin-left: 5px">——</span>
                    <ul class="ul5">
                        <li><a>福利与签约</a></li>
                        <li><a>联系编辑</a></li>
                    </ul>
                </div>

                <div class="row1">
                    <span>DD阅读</span>
                    <span style="margin-left: 5px">——</span>
                    <ul class="ul6">
                        <li><a>文库精选</a></li>
                        <li><a>轻小说文库</a></li>
                        <li><a>DD阅读专栏</a></li>
                        <li><a>16型作者人格</a></li>
                    </ul>
                </div>

                <div class="row2">
                    <img src="../images/DD阅读2.png">
                </div>
            </div>


        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Index",
        data() {
            return {
                NoticInfo: [
                    {noticeid: '', noticetitle: '', noticecon: '', noticeimg: ''},

                ],
                bookinfo: [
                    {ISBN: '', name: '', click: ''}

                ],
                bookinfo2:[

                ],
                pinfo:[

                ],

                value3: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover',
                },
                serachInfo: '',
                bookserach: [],
                loginuser: '',
                exist: false
            }

        },

        methods: {

            logout(){
                var a=confirm("是否退出？")
                if(a){
                    this.$cookieStore.delCookie('username');
                    this.$router.push("/login")
                }

            },


        },
        mounted() {
            if (this.$cookieStore.getCookie('username')) {
                var username=this.$cookieStore.getCookie('username')
                axios.post('http://' + this.$store.state.address + ':8090/DDbook/user/index',{
                    username:username
                }).then((res)=>{
                    this.pinfo=res.data.data
                    console.log(res)
                    console.log(this.pinfo.userid)
                })

                this.exist = true
            }
            else {
                this.exist = false
            }
            console.log(this.$cookieStore.getCookie('username'))


        },
        created: function () {

            axios.get('http://' + this.$store.state.address + ':8090/DDbook/notice/index')
                .then((res) => {
                    this.NoticInfo = res.data.data;
                    this.$store.commit('setNoticInfo', this.NoticInfo);
                    console.log(res.data.data)
                })

            axios.get('http://' + this.$store.state.address + ':8090/DDbook/book/index')
                .then((res) => {
                    this.bookinfo = res.data.data;
                    console.log(res.data.data);

                })

            axios.get('http://' + this.$store.state.address + ':8090/DDbook/book/Recommend')
                .then((res) => {
                    this.bookinfo2=res.data.data
                    console.log(res.data.data);
                })

        }


    }

</script>

<style scoped>

    * {
        /*border: 1px solid saddlebrown;*/
    }

    .header {

        margin-left: -150px;
        margin-top: 10px;
        width: 100%;
        font-size: 16px;

    }

    .header img {
        height: 70%;
    }

    .header a {
        color: black;
    }

    .header a:hover {
        color: green;
    }

    .header input, button {
        border-radius: 0px;
    }

    .img1 {
        width: 54px;
        height: 56px;
        border-radius: 75px;
        overflow: hidden;
        /*background: rgba(232, 116, 41, 0.13);*/
    }

    .content {
        margin-top: 10px;
        width: 90%;
    }

    .content1 {

        margin-left: 100px;
        width: 60%;

    }

    .demo-carousel {
        width: 70%;
        margin: 0 auto;

    }

    .content1 img {
        width: 100%;
    }

    .content2 {
        float: right;
        width: 29%;

    }

    .ul1 li {

        margin-right: 40px;
        display: inline-block;
    }

    .ul2 {
        width: 100%;
        padding-left: 19px;
        margin-top: 10px;

    }

    .ul2 li {
        /*border: 1px solid black;*/
        width: 68px;
        list-style: none;
        display: inline-block;
    }

    .ul2 img {
        width: 100%;
    }

    .line {
        display: inline-block;
        width: 8.5%;
        border-top: 1px solid #cccccc;
        vertical-align: 30px;
    }

    .span1 {
        margin-left: 40px
    }

    #line1 {
        border-left: #ccc 1px solid; /*左边框，参数依次是颜色；粗细；类型-虚线、实线*/
        border-right: #ccc 1px solid;
        border-bottom: #ccc 1px solid;
        height: 190px;
        width: 313px;

        margin-top: -36px;
    }

    #line2 {

        border-top: #ccc 1px solid;
        margin-top: -100px;
    }

    .ul3 {
        width: 100%;
        padding-left: 19px;
        margin-top: 10px;

    }

    .ul3 li {
        /*border: 1px solid black;*/
        width: 100%;
        list-style: none;
        display: inline-block;
    }

    .content3 {
        display: flex;
        width: 100%;
    }

    .ul4 {
        list-style: none;

    }

    .ul4 li a {
        color: black;
    }

    .ul4 li a:hover {

    }

    .ul4 li:hover {
        background: rgba(157, 232, 253, 0.13);
    }

    .footer {
        color: white;
        margin-top: 50px;
        width: 100%;
        height: 150px;
        background: rgba(102, 102, 102, 1);
    }

    .footer li {
        list-style: none;

    }

    .footer span {
        color: rgba(204, 204, 204, 1);
    }

    .footer a {
        color: white;
    }

    .footer1 {
        width: 100%;
        height: 8px;
        background: rgba(0, 167, 134, 0.75);

    }

    .row {
        display: flex;
        position: relative;
        left: 15%;
        top: 8%;
        width: 70%;
        height: 85%;
    }

    .row1 {

        width: 23%;
    }

    .ul5 {
        border-right: 1px solid rgba(153, 153, 153, 0.5);
        height: 40%;
        width: 85%;

    }

    .ul5 li {
        margin-top: 10px;

        width: 50%;
        display: inline-block;
    }

    .row2 {
        position: relative;
        top: 15%;
        left: 10%;

    }

    .ul6 {
        height: 40%;
        width: 85%;
    }

    .ul6 li {
        margin-top: 10px;

        width: 50%;
        display: inline-block;
    }

    .img2{
        width: 88px;
        height: 110px;
    }


</style>