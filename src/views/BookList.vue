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

        <div class="list">
        <product v-for="(item,index) in showlist" :info="item" :key="index"></product>
        </div>

        <div class="page">
        <Page :total="total" :current="current" :page-size="size"
        prev-text="上一页" next-text="下一页" @on-change="change"/>
        </div>

    </div>
</template>

<script>
    import Product from '@/components/Product.vue'
    import axios from 'axios'
    export default {
        name: "ProductList",
        data(){
            return  {
                prodlist:[],
                current:1,
                size:4,
                showlist:[]
            }
        },
        computed:{
            total(){
                return this.prodlist.length;
            }
        },
        components:{product:Product},
        mounted(){
            if (this.$store.state.loginuser == ''){
                this.$router.push('/');
            }
            else {
                axios.post("http://localhost:8090/api/getproductlist")
                    .then((res)=>{
                        this.prodlist = res.data;
                        this.$store.commit('setProdList',this.prodlist);
                        this.change(this.current);
                    })
            }
        },
        methods:{
            logout(){
                if (this.$cookies.isKey('username')){
                    this.$cookies.remove('username')
                }
                this.$store.commit('setLoginUser','');
            },
            change(val){
                this.current = val;
                this.showlist = [];
                for(var i=0;i<this.size;i++){
                    var index = (this.current-1)*this.size+i;
                    if (index < this.prodlist.length) {
                        var prod = this.prodlist[index];
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
    .list{width:100%; display:flex;
        flex-direction:row; flex-wrap:wrap; align-items: flex-start; justify-content: flex-start;}
    .page{
        width:100%; text-align:right; margin:20px auto;
    }
</style>