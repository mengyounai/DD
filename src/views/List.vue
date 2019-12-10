<template>
    <div class="main">
        <div class="header">

            <Row type="flex" justify="center" align="middle" class="code-row-bg">
                <Col  :lg="{ span: 4, offset: 5 }">
                    <a href="http://localhost:8080/index"><img src="../images/DD阅读.png"></a>
                </Col>
                <Col  :lg="{ span: 5, offset: 4 }">
                    <Input search enter-button placeholder="Enter something..." class="input"/>
                </Col>
                <Col :xs="{ offset: 2 }">
                    <a href="http://localhost:8080/personal"><img src="../images/头像.png" style="width: 50px;height: 50px"></a>
                    <!--<a href="http://localhost:8080/login"  >登录</a>/-->
                    <!--<a href="http://localhost:8080/register"  >注册</a>-->
                </Col>
            </Row>
        </div>

        <div class="content">
            <div class="header2">
            </div>
                <div class="content1">
                    <div class="row">

                        <div class="title">
                            <Icon type="ios-square" style="color: rgba(95,216,53,1);width: 30px;  font-size: 20px;  "/>
                            <span style="font-family: 黑体;font-weight: bold;font-size:18px;letter-spacing:2px">分类检索</span>
                        </div>

                        <div class="select">
                            <ul class="ul1">
                                <li><Button class="button1">全部</Button></li>
                                <li><Button class="button1">都市</Button></li>
                                <li><Button class="button1">悬疑</Button></li>
                                <li><Button class="button1">玄幻</Button></li>
                                <li><Button class="button1">科幻</Button></li>
                                <li><Button class="button1">战斗</Button></li>
                                <li><Button class="button1">日常</Button></li>
                                <li><Button class="button1">搞笑</Button></li>
                                <li><Button class="button1">热血</Button></li>
                                <li><Button class="button1">言情</Button></li>
                                <li><Button class="button1">治愈</Button></li>
                                <li><Button class="button1">超能力</Button></li>
                                <li><Button class="button1">冒险</Button></li>
                                <li><Button class="button1">百合</Button></li>
                                <li><Button class="button1">校园</Button></li>

                            </ul>
                        </div>

                        <div class="list">
                            <ul class="ul2" v-for="(item,index) in showlist" :info="item" :key="index">
                                <li>
                                    <a href="http://localhost:8080/detail" class="list1">
                                        <img class="img1" :src="item.imgurl">

                                    <div class="caption">
                                        <p class="p1">{{item.name}}</p>
                                        <p class="p2">作者:<span style="margin-left:5px;color: rgba(87,200,75,0.8)">{{item.author}}</span></p>
                                        <p class="p3">简介:<span style="margin-left:5px;">{{item.introduce}}</span></p>
                                    </div>
                                    </a>

                                </li>
                                <hr style="margin:10px 0 10px 0">
                            </ul>
                        </div>

                        <div class="page">
                            <Page :total="total" :current="current" :page-size="size"
                                  prev-text="上一页" next-text="下一页" @on-change="change"/>
                        </div>
                        </div>

            </div>
        </div>
        <div class="footer">
            <div class="footer1">
            </div>
            <div class="row1">
                <div class="row2">
                    <span>网站概要</span>
                    <span style="margin-left: 5px">——</span>
                    <ul class="ul5">
                        <li><a>关于我们</a></li>
                        <li><a>加入我们</a></li>
                        <li><a>联系我们</a></li>
                        <li><a>免责声明</a></li>
                    </ul>
                </div>

                <div class="row2">
                    <span>作者服务</span>
                    <span style="margin-left: 5px">——</span>
                    <ul class="ul5">
                        <li><a>福利与签约</a></li>
                        <li><a>联系编辑</a></li>
                    </ul>
                </div>

                <div class="row2">
                    <span>DD阅读</span>
                    <span style="margin-left: 5px">——</span>
                    <ul class="ul5">
                        <li><a>文库精选</a></li>
                        <li><a>轻小说文库</a></li>
                        <li><a>DD阅读专栏</a></li>
                        <li><a>16型作者人格</a></li>
                    </ul>
                </div>

                <div class="row3">
                    <img src="../images/DD阅读2.png">
                </div>
            </div>


        </div>


    </div>

</template>

<script>

    export default {
        name: "ProductList",
        data() {
            return {
                bookinfo: [
                    {name: '海贼王',author:'尾田栄一郎', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/92/97/975_YKuWd.jpg'},
                    {name: '名侦探柯南',author:'青山剛昌', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/01/88/899_Q3F3X.jpg'},
                    {name: '来自新世界',author:'貴志祐介', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/1e/7b/37782_OkkQ7.jpg'},
                    {name: '虫师',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师2',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师3',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师4',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师5',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师6',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师7',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师8',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师9',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师10',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                    {name: '虫师',author:'漆原友紀', introduce:'太长了不想写',imgurl: 'https://lain.bgm.tv/pic/cover/c/0e/57/3822_Or0Eq.jpg'},
                ],
                current:1,
                size:4,
                showlist:[]

            }
        },
        computed:{
            total(){
                return this.bookinfo.length;
            }
        },
        mounted(){
            this.$store.commit('setBookList',this.bookinfo);
            this.change(this.current);

        },
        methods:{
            change(val){
                this.current = val;
                this.showlist = [];
                for(var i=0;i<this.size;i++){
                    var index = (this.current-1)*this.size+i;
                    if (index < this.bookinfo.length) {
                        var prod = this.bookinfo[index];
                        this.showlist.push(prod);
                    }
                    else
                        break;
                }

            }
        }
    }
</script>

<style scoped>
    *{
        /*border: 1px solid blue;*/
    }
    .main{
        /*width:1100px; */
        /*margin:0 auto;*/
    }
    .header{

        margin-left: -150px;
        margin-top: 10px;
        width: 100%;
        font-size: 16px;

    }
    .header img{
        height: 70%;
    }
    .header a{
        color: black;
    }

    .header a:hover{
        color: green;
    }
    .header2 {
        width: 100%;
        height: 270px;
        background: transparent url(../images/header2.png) center center no-repeat;
    }

    .content {
        background: rgba(232, 116, 41, 0.13);
    }
    .content1 {
        background: white;
        margin: 0 auto;
        margin-top: -70px;
        width: 75%;
        min-height: 1300px;
        height: auto;
    }
    .row{
        position: relative;
        left: 5%;
        top:5%;
        width: 90%;
        height: 85%;
        padding-top:20px ;
    }
    .select{
        width: 100%;
        min-height: 130px;
        height: auto;
        margin-top: 5px;
        background: rgba(12,222,45,0.25);
    }
    .ul1{
        width: 95%;
        height: 90%;
        padding-top: 8px;

    }
    .ul1 li{
        width:50px;
        display: inline-block;
        margin-left: 25px;
        margin-top: 8px;
        list-style: none;

    }
    .ul1 button:hover{

    }
    .button1{
        border-radius: 75px;
    }

    .ul2 li{
        list-style: none;
    }
    .list{
        margin-top: 20px;
        overflow: hidden;
    }

    .list1{
        display:flex;
        width: 100%;

    }
    .img1{
        height: 217px;
    }

    .caption{
        width: 100%;
        margin-top: 20px;
        margin-left: 20px;

    }
    .caption p{
        letter-spacing:2px;
        padding-top: 20px;
    }
    .p1{
        font-family: "微软雅黑 Light";
        color: black;
        font-weight: bold;
        font-size: 20px;

    }
    .p2{
        color: rgba(13,23,29,0.75);
    }
    .p3{
        color: rgba(13,23,29,0.75);
    }

    .page{
        position: relative;
        left: 65%;
        margin-top: 30px;
    }
    .footer{
        color: white;
        width: 100%;
        height: 150px;
        background: rgba(102,102,102,1);
    }
    .footer li{
        list-style: none;

    }
    .footer span{
        color: rgba(204,204,204,1);
    }
    .footer a{
        color: white;
    }
    .footer1{
        width: 100%;
        height: 8px;
        background: rgba(0,167,134,0.75);

    }
    .row1{
        display: flex;
        position: relative;
        left: 15%;
        top:8%;
        width: 70%;
        height: 85%;
    }
    .row2{
        width: 23%;
    }
    .ul5{
        width: 85%;
    }
    .ul5 li{
        margin-top: 10px;
        width: 50%;
        display: inline-block;
    }
    .row3{
        position: relative;
        top:15%;
        left: 10%;

    }

</style>