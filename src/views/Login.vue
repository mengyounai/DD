<template>

    <div class="main">

        <!--<video autoplay loop muted>-->
        <!--<source  src="../images/登录.mp4" type="video/mp4" >-->
        <!--</video>-->
        <div style="height: 100px;width: 100%">
            <img src="../images/header.png" style="width: 100%">
        </div>
        <div class="header">

            <span class="line"></span>
            <span class="text">登录</span>
            <span class="line"></span>
        </div>

        <div class="content">

            <div style="width: 50%;margin-top: 40px;padding: 40px; border-right: 1px solid #cccccc">
                <img src="../images/二维码.png" style="width: 200px">
                <p>扫二维码关注公众号</p>

            </div>

            <div class="login">
                <div class="content1" style="width:90%; margin-top: 50px;">
                    <p style="margin-bottom:5px;">
                        <Input prefix="ios-book" v-model="username" class="input" placeholder="你的用户名"
                               @on-blur="validateUser()"/>
                    </p>
                    <div style="width:100%;height:5px;color: #FFC0CB ">{{errmsg1}}</div>
                    <p>
                        <Input prefix="ios-book" v-model="password" type="password" placeholder="请输入密码" class="input"/>
                    </p>
                    <p style="margin-top: 25px">
                        <Checkbox v-model="save">记住我</Checkbox>
                        <span style="color: #cccccc">不是自己的电脑上不要勾选此项</span>
                        <a href="#" style="margin-left: 60px;">忘记密码?</a>
                    </p>
                    <p>
                        <Button type="primary" class="btn" @click="doLogin()">登录</Button>
                        <Button type="primary" class="btn" to="/register"
                                style="background: rgba(110,231,14,0.05);color: black">注册
                        </Button>
                    </p>
                </div>
            </div>
        </div>
        <div style="margin: 0 auto; margin-top: 50px;">
            <p>登录即代表你同意<a>用户协议</a>和<a>隐私政策</a></p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
                save: false,
                errmsg1: '',
                clsstr: 'main1',

            }


        },
        methods: {
            validateUser() {
                let valid = true;
                if (this.username == '') {
                    this.errmsg1 = '用户名不能为空';
                    valid = false;
                }
                if (valid == true)
                    this.errmsg1 = '';
                return valid;
            },
            doLogin() {
                axios.post('http://'+this.$store.state.address+':8090/DDbook/user/login', {
                    username: this.username,
                    password: this.password
                })
                    .then((res) => {
                        if (res.data) {
                            if (this.save) {
                                this.$cookies.set('username', this.username, '7d');
                            }
                            this.$store.commit('setLoginUser', this.username);
                            this.$router.push('/index');
                            console.log(res)
                        }

                        else {
                            alert('用户名或密码错误，请重新输入');
                            this.username = '';
                            this.password = '';
                            console.log(res)
                        }
                    })
                // this.$store.commit('setBookList',this.booklist);
                // this.$router.push('/index');

            },
        }
    }
</script>

<style scoped>
    * {
        /*border: 1px solid black;*/
        text-align: center;
    }

    video {
        position: fixed;
        left: 0;
        width: 1300px;

        height: 865px;

        /*加滤镜*/
        /*-webkit-filter: grayscale(100%);*/
        /*filter:grayscale(100%);*/
    }

    source {
        min-width: 100%;
        min-height: 100%;
        height: auto;
        width: auto;
    }

    .main {
        /*width:1304px;*/
        /*height:665px;*/
        /*position:relative;*/
        /*text-align:center;*/
        /*color:white;*/
        /*background:transparent url(../images/登录.jpg) center center no-repeat;*/
        /*background-size: 100% 100%;*/
    }

    .header {
        margin-top: 10px;
        width: 100%;
        height: 36px;
        line-height: 36px;
        /*border:1px solid green;*/
        text-align: center;
        font-size: 40px;
    }

    .text {
        margin: 20px;
        font-family: 新宋体;
        color: black;
        font-weight: bold;
    }

    .line {
        display: inline-block;
        width: 40%;
        border-top: 1px solid #cccccc;
        vertical-align: 10px;
    }

    .content {
        width: 100%;
        height: 330px;
        display: flex
    }

    .login {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: center;
        padding: 20px 30px;
        border-radius: 5px;
        text-align: left;
    }

    .login .input {
        width: 400px;
        margin-top: 20px;
    }

    .login .btn {
        width: 180px;
        height: 40px;
        margin-right: 20px;
        margin-top: 20px;
    }

    .login p, .login h3 {
        margin-bottom: 10px;
    }
</style>
