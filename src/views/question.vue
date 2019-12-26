<template>
    <div class="main">
        <div style="height: 100px;width: 100%">
            <img src="../images/header.png" style="width: 100%">
        </div>
        <div class="header">
            <span class="line"></span>
            <span class="text">密保问题</span>
            <span class="line"></span>
        </div>


        <div class="content1">
            <div class="content1-1">密保问题</div>
            <Select v-model="question" style="width:200px" class="select">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>

        </div>
        <div class="content2">
            <div class="content2-1">密保答案</div>
            <Input type="text" v-model="answer" placeholder="请输入密保答案" style="width: 198px;margin: 0 0 0 0;"/>

        </div>
        <div class="content3">
            <Button type="primary" style="width:260px;padding: 0" @click="submit()">设置密保</Button>

        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "question",
        data() {
            return {
                cityList: [
                    {
                        value: '初中老师的姓名',
                        label: '初中老师的姓名'
                    },
                    {
                        value: '我最喜欢的游戏',
                        label: '我最喜欢的游戏'
                    },
                    {
                        value: '我最好的朋友',
                        label: '我最好的朋友'
                    },
                    {
                        value: '什么是哲学♂',
                        label: '什么是哲学♂'
                    },

                ],
                question: '',
                answer: '',
                pinfo:[],
            }
        },

        mounted() {



        },

        methods: {
            submit() {
                axios.post('http://' + this.$store.state.address + ':8090/DDbook/user/protect', {
                    userId: this.pinfo.userid,
                    ques:this.question,
                    ans: this.answer
                }).then((res) => {

                    if (res.data) {
                        confirm("设置成功，页面即将跳转")
                        this.$router.push("/personal")
                    }

                    console.log(res.data)


                })
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

                            if (res.data!='') {
                                var a= confirm("已设置密保，请返回")
                                this.$router.push("/personal")
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

    * {
        margin: 0 auto;
    }

    .content1 {
        display: flex;
        width: 500px;
        margin-top: 60px;
        justify-content: center;
    }

    .content2 {
        display: flex;
        width: 500px;
        margin-top: 30px;
        justify-content: center;
    }

    .content3 {

        width: 500px;
        margin-top: 30px;
        padding-left: 130px;

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

    .content1-1 {
        margin: 0 0 0 0;
        width: 100px;
        vertical-align: middle;
        height: 34px;

        display: inline-block;
        text-align: center;
        line-height: 32px;
    }

    .content2-1 {
        margin: 0 0 0 0;
        width: 100px;
        vertical-align: middle;
        height: 34px;

        display: inline-block;
        text-align: center;
        line-height: 32px;
    }

    .select {
        margin: 0 0 0 0;
        width: 253px;
        border-radius: 0px;
    }

</style>