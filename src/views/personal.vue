<template>
    <div class="main">
        <div class="header">

            <Row type="flex" justify="center" align="middle" class="code-row-bg">
                <Col :lg="{ span: 4, offset: 5 }">
                    <a href="http://localhost:8080/index"><img src="../images/DD阅读.png"></a>
                </Col>
                <Col :lg="{ span: 5, offset: 4 }">
                    <Input search enter-button placeholder="Enter something..." class="input"/>
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
            <div class="content1">
                <div class="row">

                <div class="title">
                    <Icon type="ios-square" style="color: green;width: 30px;"/>
                    <span style="font-family: 新宋体;font-weight: bold;letter-spacing:2px">用户资料</span>
                </div>


                <div class="info">

                    <div class="info-left">
                        <div class="info-left2">
                            <img src="../images/头像3.png">
                        </div>
                        <button class="button1">更换头像</button>
                    </div>

                    <div class="info-right">
                            <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="70">
                            <FormItem label="用户Id" prop="id">
                                <span v-model="formItem.id">{{formItem.id}}</span>
                            </FormItem>
                            <FormItem label="信用分" prop="grade">
                                <span style="color: rgba(222,126,24,1)" v-model="formItem.grade">{{formItem.grade}}</span>
                               <span> <Button class="button2">信用分记录</Button></span>
                            </FormItem>

                            <FormItem label="用户名" prop="username">
                                <input v-model="formItem.username" />
                            </FormItem>
                            <FormItem label="生日年月" prop="date">
                                <Row>
                                    <Col  span="11">
                                        <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem label="性别" prop="sex">
                                <RadioGroup v-model="formItem.sex">
                                    <Radio label="male">男</Radio>
                                    <Radio label="female">女</Radio>
                                    <Radio label="secret">保密</Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem label="个人介绍" prop="textarea">
                                <Input style="width: 350px" v-model="formItem.textarea"  type="textarea"  :rows="4" placeholder="Enter something..."></Input>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" @click="handleSubmit('formItem')">提交</Button>
                                <Button @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>                            </FormItem>
                        </Form>
                    </div>

                </div>

                </div>
                <div class="content2">
                    <Menu active-name="1">
                        <MenuGroup title="个人信息">
                            <MenuItem name="1">
                                <Icon type="md-document"/>
                                <a href="http://localhost:8080/personal">个人信息</a>
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="md-document"/>
                                <a href="http://localhost:8080/state">我的借阅</a>
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="md-chatbubbles" />
                                退出
                            </MenuItem>
                            <!--<MenuItem name="3">-->
                                <!--<Icon type="md-chatbubbles" />-->
                                <!--退出-->
                            <!--</MenuItem>-->
                        </MenuGroup>
                    </Menu>
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

    </div>
</template>

<script>
    export default {
        name: "personal",
        data () {
            return {
                formItem: {
                    id:"1",
                    grade:"100",
                    username: 'ACG丶由乃',
                    sex: 'male',
                    date: '1999-07-21',
                    textarea: 'THE 铭天下第一',

                },
                ruleValidate: {
                    username: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],

                    sex: [
                        { required: false, message: 'Please select gender', trigger: 'change' }
                    ],

                    date: [
                        { required: false, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            doclick(){
                this.$router.push('/state');
            }

        },




    }
</script>

<style scoped>
    *{
        /*border: 1px solid black;*/
    }
    .main {

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
        height: 500px;

    }
    .row{

        position: relative;
        left: 5%;
        top:5%;
        width: 85%;
        height: 85%;



    }

    .info{
        overflow: hidden;

    }
    .title {
        /*margin: 0 auto;*/
        /*padding: 20px 0 0 20px;*/
    }


    .info-left {

        float: left;

        width: 20%;
        height: 150px;
        margin: 30px 0 0 40px;

    }

    .info-left2 {

        width: 120px;
        height: 120px;
        border-radius: 75px;
        overflow: hidden;
        background: rgba(232, 116, 41, 0.13);

    }

    .info-left img {
        width: 120px;
        height: 120px;

    }

    .button1 {
        background: rgba(95,216,53,0.85);
        color: white;
        width: 80px;
        height: 40px;
        margin:10px 0 0 20px;
    }
    .button2{
        background: rgba(95,216,53,0.85);
        color: white;
        margin-left: 20px;

    }


    .info-right{
        font-family: 新宋体;
        font-weight: bold;
        float: left;
        width: 60%;
        margin-left: 45px;
    }
    .content2{
        float: right;
        margin-top: -420px;

    }
    .footer{
        color: white;
        margin-top: 50px;
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