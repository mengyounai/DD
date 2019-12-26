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
                        <span style="font-family: 新宋体;font-weight: bold;letter-spacing:2px">更改头像</span>
                    </div>
                    <div class="info">

                        <div class="info-left">
                            <div class="info-left2">
                                <img src="../images/头像3.png">
                            </div>
                            <span class="span1">当前头像</span>

                        </div>

                        <div class="info-right">
                            <Form ref="formItem" :model="formItem">
                                <FormItem v-model="formItem.imgurl" label="图片" prop="img">
                                    <Upload
                                            multiple
                                            type="drag"
                                            :show-upload-list="false"
                                            :on-success="handleSuccess"
                                            action="//jsonplaceholder.typicode.com/posts/">
                                        <div style="padding: 20px 0">
                                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                            <p>Click or drag files here to upload</p>
                                        </div>
                                    </Upload>
                                </FormItem>
                                <Button type="primary" @click="handleSubmit('formItem')">提交</Button>
                            </Form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "imgupload",
        data() {
            return {
                serachInfo: '',
                formItem: {
                    imgurl: "",
                },
            }
        },
        methods: {
            handleSubmit(name) {
                console.log(name)

            },
            handleSuccess(res, file) {
                file.url = '';
                file.name = '';
            },
            mounted() {

            }


        }
    }
</script>

<style scoped>
    * {
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

    .header input, button {
        border-radius: 0px;
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

    .row {

        position: relative;
        left: 5%;
        top: 5%;
        width: 85%;

    }

    .info {

        display: flex;
        float: left;
        overflow: hidden;
        width: 100%;

    }

    .info-left {
        text-align: center;
        width: 50%;
        margin: 140px 0 0 0px;
        border-right: 1px solid rgba(229, 233, 245, 1);

    }

    .info-left2 {
        margin: 0 auto;
        display: flex;
        width: 140px;
        height: 140px;
        border-radius: 70px;
        overflow: hidden;

        background: rgba(232, 116, 41, 0.13);

    }

    .info-left img {
        width: 140px;
        height: 140px;

    }

    .span1 {
        display: inline-block;
        margin-top: 10px;
    }

</style>