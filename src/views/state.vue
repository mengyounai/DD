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
                    </router-link>                </Col>
                <Col :xs="{ offset: 2 }">
                    <div v-show="exist">
                        <a class="a1" href="http://localhost:8080/personal"><img class="img10"
                                                                                 :src="pinfo.icon"></a>
                    </div>
                    <div v-show="!exist">
                        <a href="http://localhost:8080/login">登录</a>/
                        <a href="http://localhost:8080/register">注册</a>
                    </div>
                </Col>
            </Row>
        </div>


        <div class="content">
            <div class="header2">
            </div>
            <div class="a">
            <div class="content2" style="float: left;margin-top:0px">
                <Menu active-name="0">
                    <MenuGroup title="个人信息">
                        <MenuItem name="1">
                            <Icon type="md-document"/>
                            <a href="http://localhost:8080/personal" >个人信息</a>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="md-document"/>
                            <a href="http://localhost:8080/state" >我的借阅</a>
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="md-document"/>
                            <a href="http://localhost:8080/credit">信用分记录</a>
                        </MenuItem>
                    </MenuGroup>
                    <MenuGroup title="关注中心">
                        <MenuItem name="4">
                            <Icon type="md-document"/>
                            <a href="#">最近阅读</a>
                        </MenuItem>

                    </MenuGroup>
                    <MenuGroup title="用户管理">
                        <MenuItem name="5">
                            <Icon type="md-document"/>
                            <a href="#">修改密码</a>
                        </MenuItem>
                        <MenuItem name="6">
                            <Icon type="md-chatbubbles" />
                            <a href="#">
                            退出
                            </a>
                        </MenuItem>
                    </MenuGroup>
                </Menu>
            </div>
            <div class="content1">
                <div class="b">
                    <a class="you">我的书架</a>
                </div>
                <div style="float: left">
                <table class="table" border="0">
                    <tr style="color:rgba(4,29,3,0.75);">
                        <th>图片</th>
                        <th>书籍名称</th>
                        <th>ISBN</th>
                        <th>借阅时间</th>
                        <th>归还时间</th>
                        <th>操作</th>
                    </tr>

                    <tr v-for="(item,index) in showlist.slice(0, 3)" :info="item" :key="index">
                        <td class="td1">
                            <router-link class="list1" :to="{name:'detail',params:{id:item.bookid}}">
                            <img :src="item.bookicon">
                            </router-link>
                        </td>
                        <td class="td2" style="">
                            {{item.bookname}}
                        </td>
                        <td class="td3">
                            {{item.ISBN}}
                        </td>
                        <td class="td4">
                            {{item.borrowTime}}
                        </td>
                        <td class="td5">
                            {{item.returnTime}}
                        </td>
                        <td class="td6">
                            <Button @click="borrow(index)">续借</Button>
                        </td>
                        <hr>
                    </tr>

                </table>
                    <div class="page">
                        <Page :total="total" :current="current" :page-size="size"
                              prev-text="上一页" next-text="下一页" @on-change="change"/>
                    </div>
            </div>


            </div>

            </div>
        </div>
        <div class="footer">
            <div class="footer1">
            </div>
            <div class="row4">
                <div class="row5">
                    <span>网站概要</span>
                    <span style="margin-left: 5px">——</span>
                    <ul class="ul5">
                        <li><a>关于我们</a></li>
                        <li><a>加入我们</a></li>
                        <li><a>联系我们</a></li>
                        <li><a>免责声明</a></li>
                    </ul>
                </div>

                <div class="row5">
                    <span>作者服务</span>
                    <span style="margin-left: 5px">——</span>
                    <ul class="ul5">
                        <li><a>福利与签约</a></li>
                        <li><a>联系编辑</a></li>
                    </ul>
                </div>

                <div class="row5">
                    <span>DD阅读</span>
                    <span style="margin-left: 5px">——</span>
                    <ul class="ul5">
                        <li><a>文库精选</a></li>
                        <li><a>轻小说文库</a></li>
                        <li><a>DD阅读专栏</a></li>
                        <li><a>16型作者人格</a></li>
                    </ul>
                </div>

                <div class="row6">
                    <img src="../images/DD阅读2.png">
                </div>
            </div>


        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "state",
        data() {
            return {
                bookinfo: [
                    {
                        name: '海贼王',
                        ISBN: '1',
                        author: '尾田栄一郎',
                        introduce: '太长了不想写',
                        imgurl: 'https://lain.bgm.tv/pic/cover/c/92/97/975_YKuWd.jpg',
                        time1: '2019-7-21',
                        time2: '2019-7-21'
                    },
                    {
                        name: '名侦探柯南',
                        ISBN: '2',
                        author: '青山剛昌',
                        introduce: '太长了不想写',
                        imgurl: 'https://lain.bgm.tv/pic/cover/c/01/88/899_Q3F3X.jpg',
                        time1: '2016-5-2',
                        time2: '2019-7-21'

                    },
                    {
                        name: '来自新世界',
                        ISBN: '3',
                        author: '貴志祐介',
                        introduce: '太长了不想写',
                        imgurl: 'https://lain.bgm.tv/pic/cover/c/1e/7b/37782_OkkQ7.jpg',
                        time1: '2019-1-1',
                        time2: '2019-7-21'
                    },
                ],
                serachInfo: '',
                exist:'',
                pinfo:[],
                showlist: [],
                current: 1,
                size: 3,
            }
        },

        computed: {
            total() {
                return this.bookinfo.length;
            }
        },

        mounted() {
            if (this.$cookieStore.getCookie('username')) {
                var username=this.$cookieStore.getCookie('username')
                axios.post('http://' + this.$store.state.address + ':8090/DDbook/user/index',{
                    username:username
                }).then((res)=>{
                    this.pinfo=res.data.data
                    this.$store.commit('setId', this.pinfo.userid);
                    axios.post('http://' + this.$store.state.address + ':8090/DDbook/user/userBorrow', {
                        userId: this.$store.state.id,
                    }).then((res) => {
                        this.bookinfo=res.data.data
                        this.showlist=res.data.data
                        console.log(res.data.data)


                    })

                })

                this.exist = true
            }
            else {
                this.exist = false
            }
            console.log(this.$cookieStore.getCookie('username'))


        },

        methods: {

            change(val) {
                this.current = val;
                this.showlist = [];
                for (var i = 0; i < this.size; i++) {
                    var index = (this.current - 1) * this.size + i;
                    if (index < this.bookinfo.length) {
                        var prod = this.bookinfo[index];
                        this.showlist.push(prod);
                    }
                    else
                        break;
                }
            },

            borrow(index) {

                var a = confirm("是否续借(默认30天)")
                if (a) {
                    axios.post('http://' + this.$store.state.address + ':8090/DDbook/book/renewBook', {
                        borrowId: this.showlist[index].borrowid,

                    }).then((res) => {
                        location.reload()
                    })
                }

            }
        }



    }
</script>

<style scoped>
    * {
        /*border: 1px solid blue;*/
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
    .img10 {
        width: 54px;
        height: 56px;
        border-radius: 75px;
        overflow: hidden;
        /*background: rgba(232, 116, 41, 0.13);*/
    }


    .content {

        background: rgba(250, 250, 250, 0.75);
    }
    .b{
        height: 49px;
        line-height: 49px;
        font-size: 20px;

    }
    .you{
        margin-left: 20px;
    }
    .a{

        margin: 0 auto;
        width: 90%;
        height: 500px;
        background: white;
        margin-top: 5px;

    }

    .content1 {

    }

    .content2 a{

    }

    .table {
        text-align: center;
        border-collapse: collapse;
    }

    .table td {

    }

    .table tr {

        margin-top: 10px;
        border-bottom: 1px solid black;

    }

    .table tr:first-child {

    }

    .table img {
        width: 72px;
        margin-top: 10px;
        height: 100px;
    }

    .td1 {
        width: 130px
    }

    .td2 {
        width: 185px
    }

    .td3 {
        width: 153px
    }

    .td4 {
        width: 124px
    }
    .td5{
          width: 130px;
      }
    .td6{
        width: 130px;
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
    .row4{
        display: flex;
        position: relative;
        left: 15%;
        top:8%;
        width: 70%;
        height: 85%;
    }
    .row5{
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
    .row6{
        position: relative;
        top:15%;
        left: 10%;

    }

    .page{
        position: absolute;
        left: 75%;
        top:80%;
    }
</style>