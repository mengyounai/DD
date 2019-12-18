<template>
    <div class="main">

        <div class="header">
            <Row type="flex" justify="center" align="middle" class="code-row-bg">
                <Col :lg="{ span: 4, offset: 5 }">
                    <a href="http://localhost:8080/index"><img src="../images/DD阅读.png"></a>
                </Col>
                <Col :lg="{ span: 5, offset: 4 }">
                    <Input style="width: 200px" type="text" v-model="serachInfo"/><Button @click="dosearch" style="width: 50px;height: 30px" type="primary" icon="ios-search"></Button>
                </Col>
                <Col :xs="{ offset: 2 }">
                    <a href="http://localhost:8080/personal"><img src="../images/头像.png"
                                                                  style="width: 50px;height: 50px"></a>
                    <!--<a href="http://localhost:8080/login"  >登录</a>/-->
                    <!--<a href="http://localhost:8080/register"  >注册</a>-->
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
                                <a href="#">信用分记录</a>
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
                        <a class="a1">信用分记录 </a><a2 lass="a2">您最近一周的变化情况</a2>
                    </div>
                    <div style="float: left">
                        <table class="table" border="0">
                            <tr style="color:rgba(4,29,3,0.75);">
                                <th>时间</th>
                                <th>变化</th>
                                <th>原因</th>
                            </tr>

                            <tr v-for="(item,index) in creditinfo" :info="item" :key="index">
                                <td class="td1">
                                    {{item.time}}
                                </td>

                                <td class="td2" style="">
                                    {{item.change}}
                                </td>
                                <td class="td3">
                                    {{item.reason}}
                                </td>
                                <hr>
                            </tr>

                        </table>
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
    export default {
        name: "state",
        data() {
            return {
                creditinfo: [
                    {
                        time: '2019-7-20',
                        change:123,
                        reason:123


                    },
                    {
                        time: '2019-7-21',
                        change:456,
                        reason:456

                    },
                    {
                        time: '2019-7-22',
                        change:789,
                        reason:789
                    },
                    {
                        time: '2019-7-23',
                        change:111,
                        reason:111

                    },
                    {
                        time: '2019-7-24',
                        change:222,
                        reason:222

                    },
                    {
                        time: '2019-7-25',
                        change:333,
                        reason:333

                    },
                ],

                serachInfo: '',
            }
        },
        methods: {
            dosearch() {
                axios.post('http://'+this.$store.state.address+':8090/DDbook/book/selBookByName', {bookName: this.serachInfo,})
                    .then((res)=>{

                        this.$store.commit('setSerachInfo',res.data.data);
                        this.$router.push({
                            name: 'list2',

                        })
                        console.log(res.data.data);

                    })
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
    .header input,button{
        border-radius: 0px;
    }
    .b{
        height: 49px;
        line-height: 49px;
        vertical-align:middle;
    }
    .a1{
        margin-left: 20px;
        font-size: 20px;
    }

    .b a2{
        font-size: 15px;

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
        margin-left: 30px;
    }

    .table td {
        border:1px solid lightsteelblue;
    }

    .table tr {

        margin-top: 10px;


    }

    .table tr:first-child {

    }

    .table img {
        width: 72px;
        margin-top: 10px;
        height: 100px;
    }

    .td1 {
        height: 60px;
        width: 300px;
    }

    .td2 {
        height: 60px;
        width: 300px;
    }

    .td3 {
        height: 60px;
        width: 300px;
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

</style>