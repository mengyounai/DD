<template>
    <div class="main">
        <div style="height: 100px;width: 100%">
            <img src="../images/header.png" style="width: 100%">
        </div>
        <div class="row">
        <div class="header">
            <a class="text" href="http://localhost:8080/index">主页</a>
            >
            <a class="text" href="http://localhost:8080/personal">个人详情</a>
            >
            <a class="text">修改密码</a>
        </div>
            <div class="content">

                <div class="content1">
                        <Steps :current="current">
                            <Step title="身份验证"></Step>
                            <Step title="设置密码"></Step>
                            <Step title="改密成功"></Step>
                        </Steps>

                </div>
                <div v-show="show1">
                <div class="content2">
                    <div class="content2-1">密保问题</div>
                    <Input class="content2-2" disabled type="text" v-model="text1"/>
                </div>
                <div class="content3">
                    <Input class="content3-1"  placeholder="请输入答案" v-model="text2"/>
                </div>

                    <div class="content4">
                        <Button type="primary" @click="next1" style="width: 100%">下一步</Button>
                    </div>
                </div>

                <div v-show="show2">

                    <div class="content5">
                        <div class="content2-1">请输入旧密码</div>
                        <Input class="content2-2" type="text" v-model="pass1" @on-blur="validateUser()"/>
                        <span style="position:absolute;left:65%;line-height: 32px;color: red">{{errmsg1}}</span>
                    </div>
                    <div class="content5">
                        <div class="content2-1">请输入新密码</div>
                        <Input class="content2-2"  type="text" v-model="pass2" @on-blur="validatePass()"/>
                        <span style="position:absolute;left:65%;line-height: 32px;color: red">{{errmsg}}</span>

                    </div>
                    <div class="content5">
                        <div class="content2-1">确认密码</div>
                        <Input class="content2-2"  type="text" v-model="pass3" @on-blur="validatePass2()"/>
<span style="position:absolute;left:65%;line-height: 32px;color: red">{{errmsg2}}</span>
                    </div>


                    <div class="content4">
                        <Button type="primary" @click="next2" style="width: 100%">下一步</Button>
                    </div>

                </div>

                <div v-show="show3">

                    <div class="content5">

                    <p>修改密码成功！点击跳转到<router-link to="/index">主页</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                current: 0,
                text1:'你的父亲名字',
                text2:'',
                show1:true,
                show2:false,
                show3:false,
                pass1:'',
                pass2:'',
                pass3:'',
                errmsg:'',
                errmsg1:'',
                errmsg2:'',
                pinfo:[]
            }
        },

        mounted() {



        },


        methods: {
            validateUser(){
                let valid=true;
                if (this.pass1==''||this.pass1==null){
                    this.errmsg1='密码不能为空';
                    valid=false;
                }

                if (valid == true)
                    this.errmsg1= '';
                return valid;
            },

            validatePass(){
                let valid=true;
                if (this.pass2==''){
                    this.errmsg='密码不能为空!';
                    valid=false;
                }
                else {
                    var reg=new RegExp(/^\w{6,16}$/)
                    valid=reg.test(this.pass2);
                    if (!valid)
                        this.errmsg='密码需为6-16位字符'
                }
                if (valid)
                    this.errmsg='';
                return valid;
            },
            validatePass2(){
                let valid=true;
                if (this.pass3==""){
                    valid=false;
                    this.errmsg2='请输入确认密码';
                }
                else {
                    if (this.pass3!=this.pass2){
                        valid=false;
                        this.errmsg2="两次密码不一致"
                    }
                }
                if (valid)
                    this.errmsg2='';
                return valid;
            },
            validate(){
                let validate1 = this.validateUser();
                let validate2 = this.validatePass();
                let validate3 = this.validatePass2();
                return validate1&&validate2&&validate3;
            },

            next1 () {

                axios.post('http://' + this.$store.state.address + ':8090/DDbook/user/answer',{
                    userId:this.pinfo.userid,
                    answer:this.text2
                }).then((res)=>{
                    if (res.data) {
                        if (this.current == 3) {
                            this.current = 0;
                        } else {
                            this.current += 1;
                        }
                        this.show1=false
                        this.show2=true
                    }
                    else {
                        alert("密保答案错误")
                    }
                })



            },
            next2 () {

                if (this.validate()) {

                    axios.post('http://' + this.$store.state.address + ':8090/DDbook/user/updPass', {
                        userId: this.pinfo.userid,
                        password: this.pass1,
                        password2: this.pass2
                    }).then((res) => {

                        console.log(res)
                        
                        if (res.data) {
                            if (this.current == 3) {
                                this.current = 0;
                            } else {
                                this.current += 1;
                            }
                            this.show2 = false
                            this.show3 = true
                        }else{
                            alert("旧密码错误")
                        }
                    })


                }
            }
        },
        created: function () {

            if (this.$cookieStore.getCookie('username')) {
                var username=this.$cookieStore.getCookie('username')
                axios.post('http://' + this.$store.state.address + ':8090/DDbook/user/index',{
                    username:username
                }).then((res)=>{
                    this.pinfo=res.data.data
                    axios.post('http://' + this.$store.state.address + ':8090/DDbook/user/question',{
                        userId:this.pinfo.userid
                    })
                        .then((res) => {

                            if (res.data=='') {
                                var a= confirm("未设置密保，请设置")
                                if (a) {
                                    this.$router.push("/question")
                                }else {
                                    this.$router.push("/personal")
                                }

                            }else{
                                this.text1=res.data
                            }

                            console.log(res)


                        })
                    console.log(res)
                    console.log(this.pinfo.userid)
                })

                this.exist = true
            }
            else {
                this.exist = false
            }
            console.log(this.$cookieStore.getCookie('username'))


        }
    }
</script>

<style scoped>
    *{
        margin: 0 auto;
    }
    .main{

    }
    .row{


    }
    .header{
        width: 1000px;
        margin-top: 40px;
        font-size: 15px;

    }

    .content1{

        margin-top: 50px;
        width:500px;
    }
    .content2{
        display: flex;
        justify-content:center;
        margin-top: 50px;
        width: 550px;

    }
    .content2-1{
        margin: 0 0 0 0;
        width: 100px;
        vertical-align:middle;
        height:34px;
        background: rgba(245,247,250,0.8);

        display: inline-block;
        text-align: center;
        line-height: 32px;
    }
    .content2-2{
        margin: 0 0 0 0;
        width: 253px;
        border-radius: 0px;


    }
    .content3{
        display: flex;
        justify-content:center;
        margin-top: 30px;
        width: 353px;


    }
    .content3-1{
        margin: 0 0 0 0;
        width: 400px;
        vertical-align:middle;
        height:32px;
        background: rgba(245,247,250,0.8);
        display: inline-block;
        text-align: center;
        line-height: 32px;
    }

    .content4{
        display: flex;
        justify-content:center;
        margin-top: 30px;
        width: 353px;
    }

    .content5{
        display: flex;
        justify-content:center;
        margin-top: 30px;
        width: 800px;

    }


</style>