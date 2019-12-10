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
        <div class="content1">
            <div class="content1-sum">
                <div class="content1-left">
                    <img src="../images/详情图片.jpg">
                </div>
                <div class="content1-right">
                    <p style="margin-top: 0">书名:{{bookinfo.name}}</p>
                    <p>类型:{{bookinfo.type}}</p>
                    <p>ISBN:{{bookinfo.ISBN}}</p>
                    <p>出版社:{{bookinfo.address}}</p>
                    <p>出版时间:{{bookinfo.time}}</p>
                    <p>
                        <Button>点击阅读</Button>
                        <Button style="margin-left: 20px">借阅/已借阅</Button>
                    </p>
                </div>
        </div>

        </div>


            <div class="content2">
                <div class="content2-left">
                    <div class="content2-hearder">
                        <Icon type="md-home" />
                        <a href="http://localhost:8080/index">首页</a>
                        &nbsp&nbsp>&nbsp&nbsp
                        <a href="http://localhost:8080/list">DD图库</a>
                        &nbsp&nbsp>&nbsp&nbsp
                        <a>{{bookinfo.name}}</a>
                    </div>
                    <p class="p1">书籍简介</p>
                    <hr>
                    <p class="p2">
                        {{bookinfo.textarea}}
                    </p>

                </div>
                <div class="content2-right">
                <div class="grade">
                    <div class="grade-title">
                        <div class="span1">
                            <img src="../images/starky.png">
                            <span>小说评分</span>
                        </div>
                    </div>
                    <div class="grade-content">
                        <div class="grade-content1">
                            <Rate disabled  allow-half v-model="valueDisabled" class="grade1"> </Rate>
                            <span style="font-size:40px;margin-left:40px;color: #f5a623">{{ valueDisabled }}</span>
                            <p style="margin-left: 10px;color: #cccccc">已有<span style="color: rgba(67,142,179,1)">116</span>人参与评分(在星星上滑动评分)</p>
                        </div>

                        <div class="grade-content2">
                            <span style="margin-left: 10px;">评分：</span>
                            <Rate show-text allow-half v-model="valueCustomText" class="grade2">
                            </Rate>
                        </div>
                        <div class="grade-content3">
                            <ul class="ul1">
                                <li class="item-inner">
                                    <div >
                                        <div class="count">{{a}}%</div>
                                        <div class="fill" v-bind:style="{height: a+'px'}"></div>
                                        <div class="order">1</div>
                                    </div>
                                </li>
                                <li class="item-inner">
                                    <div >
                                        <div class="count">{{b}}%</div>
                                        <div class="fill" v-bind:style="{height: b+'px'}"></div>
                                        <div class="order">2</div>
                                    </div>
                                </li>
                                <li class="item-inner">
                                    <div >
                                        <div class="count">{{c}}%</div>
                                        <div class="fill" v-bind:style="{height: c+'px'}"></div>
                                        <div class="order">3</div>
                                    </div>
                                </li>
                                <li class="item-inner">
                                    <div >
                                        <div class="count">{{d}}%</div>
                                        <div class="fill" v-bind:style="{height: d+'px'}" ></div>
                                        <div class="order">4</div>
                                    </div>
                                </li>
                                <li class="item-inner">
                                    <div >
                                        <div class="count">{{e}}%</div>
                                        <div class="fill" v-bind:style="{height: e+'px'}"></div>
                                        <div class="order">5</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="content3">
                <div class="row">
                    <div class="row-1">
                    <h3 class="row1">
                        <p class="p3">{{f}}<span style="margin-left:20px">请说点什么吧</span></p>

                    </h3>
                    <div class="row2" >
                        <Input type="textarea" :rows="3"/>
                        <Button>发表评论</Button>

                    </div>
                    <hr style="margin-top: 10px">
                    <div class="row3">
                            <ul class="ul2" v-for="(item,index) in personalinfo" :info="item" :key="index">
                                <li>
                                    <!--<img src="../images/头像2.jpg">-->
                                    <div class="list1">
                                    <img class="img1" :src="item.imgurl">
                                    <div class="caption">
                                        <p class="p4">{{item.name}}</p>
                                        <p class="p5">{{item.content}}</p>
                                        <p class="p6">
                                            <a style="color: rgba(81,90,110,1)" @click="doClick(index)"><Icon type="md-thumbs-up" style="font-size: 20px"/></a>
                                            {{item.sum3}}
                                            <a style="color: rgba(81,90,110,1);margin-left: 5px"><Icon type="md-thumbs-down" style="font-size: 20px"/></a>
                                            <Button class="button1" type="primary" icon="ios-text" @click="doClick2(index)">回复</Button>
                                            <span style="float: right;">{{item.time}}
                                                <a style="margin:0 10px 0 20px;color: blue" @click="doClick3(index)">
                                                    <Icon type="ios-arrow-down" v-show="item.show3"/><Icon type="ios-arrow-up" v-show="!item.show3"/></a>
                                            </span>

                                        </p>
                                        <div class="p7">
                                            <shrink-view v-model="item.show==false">
                                                <Input type="textarea" :rows="3" />
                                                <Button class="button2">发表评论</Button>
                                            </shrink-view>
                                        </div>
                                        <div class="p8">
                                            <shrink-view v-model="item.show2==false">
                                            <ul class="ul2" v-for="(item,index) in personalinfo2" :info="item" :key="index">

                                                <li>
                                            <div class="list1">
                                                <img class="img1" :src="item.imgurl">
                                                <div class="caption">
                                                    <p class="p4">{{item.name}}</p>
                                                    <p class="p5">{{item.content}}</p>
                                                    <p class="p6">
                                                        <a style="color: rgba(81,90,110,1)" @click="doClick(index)"><Icon type="md-thumbs-up" style="font-size: 20px"/></a>
                                                        {{item.sum3}}
                                                        <a style="color: rgba(81,90,110,1);margin-left: 5px"><Icon type="md-thumbs-down" style="font-size: 20px"/></a>
                                                        <Button class="button1" type="primary" icon="ios-text">回复</Button>
                                                        <span style="float: right;">{{item.time}}<a style="margin:0 10px 0 20px;color: blue"><Icon type="ios-arrow-down" /></a></span>

                                                    </p>
                                                    <div class="p7">
                                                        <shrink-view v-model="item.show==false">
                                                            <Input type="textarea" :rows="3" />
                                                            <Button class="button2">发表评论</Button>
                                                        </shrink-view>
                                                    </div>
                                                    </div>
                                            </div>
                                                </li>

                                            </ul>
                                            </shrink-view>
                                        </div>

                                    </div>
                                    </div>

                                </li>
                            </ul>

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
    import ShrinkView from '../views/aaa';
    export default {
        props:['m'],
        components: {
            ShrinkView
        },
        name: "Detail",
        data(){
            return{
                bookinfo:{
                    name:'未来日记',
                    type:'治愈',
                    ISBN:'1',
                    address:'Japan',
                    time:'2002-6-23',
                    textarea:'国中二年级学生天野雪辉习惯远离所有人，以一个旁观者的角度把亲眼所见的事记录在自己的手机中。一天，时空之神Deus把未来日记植入他的手机中，这日记记录的是他未来90天发生的事，包括考试内容、遇到的危险等。但这个“日记”一旦被破坏，持有者的未来将会同时消失，也就是持有者会立刻消失。Deus已选定十二位未来日记持有者，而最后生存的人将会成为Deus的继承者，掌握支配时空的“神之座”。故事说得便是他跟同样拥有未来日记的其余11人，展开你死我活斗争的杀人游戏。',
                },

                personalinfo: [
                    {id:'0',name: '维多利加',sum3:"2", imgurl:'https://www.liuli.se/wp/wp-content/uploads/wpdiscuz/cache/gravatars/491e70bc8c27a17ec9bd2035ca5f5ea7.gif',content:'很赞很喜欢',time:'2019年07月21日 上午12:55',show:'false',show2:'false',show3:'false'},
                    {id:'1',name: '无限缤纷',sum3:'1', imgurl:'https://www.liuli.se/wp/wp-content/uploads/wpforo/avatars/1178069256qq-com_87009.jpg',content:'还不错',time:'2019年02月3日 上午2:30',show:'false',show2:'false',show3:'false'},
                    {id:'2',name: '中二的鲁路修',sum3:'1',imgurl:'https://www.liuli.se/wp/wp-content/uploads/wpdiscuz/cache/gravatars/c00ceff6317e36a8ab2e71cc6c86cdbe.gif', content:'好感动',time:'2019年02月21日 下午18:20',show:'false',show2:'false',show3:'false'},
                    {id:'3',name: '回家部部长', sum3:'1',imgurl:'https://www.liuli.se/wp/wp-content/uploads/wpdiscuz/cache/gravatars/94455db8a782f8c3e446af3bf69a8a36.gif',content:'期待下一作',time:'2019年06月5日  上午8:55',show:'false',show2:'false',show3:'false'},
                    {id:'4',name: '聪明的戴佳伟', sum3:'1',imgurl:'https://www.liuli.se/wp/wp-content/uploads/wpdiscuz/cache/gravatars/39564b2fe181c3ee91adf04dcd53d8f2.gif',content:'有人在吗',time:'2019年09月11日  下午20:10',show:'false',show2:'false',show3:'false'},

        ],
                personalinfo2: [
                    {id:'0',name: '维多利加',sum3:"2", imgurl:'https://www.liuli.se/wp/wp-content/uploads/wpdiscuz/cache/gravatars/491e70bc8c27a17ec9bd2035ca5f5ea7.gif',content:'这就是史上第一吗',time:'2019年07月21日 上午12:55',show:'false'},
                    {id:'1',name: '无限缤纷',sum3:'1', imgurl:'https://www.liuli.se/wp/wp-content/uploads/wpforo/avatars/1178069256qq-com_87009.jpg',content:'马马虎虎',time:'2019年02月3日 上午2:30',show:'false'},
                    {id:'2',name: '中二的鲁路修',sum3:'1',imgurl:'https://www.liuli.se/wp/wp-content/uploads/wpdiscuz/cache/gravatars/c00ceff6317e36a8ab2e71cc6c86cdbe.gif', content:'超好看',time:'2019年02月21日 下午18:20',show:'false'},

                ],
                valueDisabled: 5,
                valueCustomText: 0,
                count:'',
                count1:'1',
                count2:'6',
                count3:'7',
                count4:'9',
                count5:'8',
                sum:'20',
                sum2:'',
                open: false,
                current:1,
                size:4,
                showlist:[]



            }
        },

        methods:{
            doClick(index){
                this.personalinfo[index].sum3++
                console.log(this.personalinfo[index].sum3)

            },
            doClick2(index){
                this.personalinfo[index].show=!this.personalinfo[index].show
                console.log(this.personalinfo[index].show)
            },
            doClick3(index){
                this.personalinfo[index].show2=!this.personalinfo[index].show2
                this.personalinfo[index].show3=!this.personalinfo[index].show3
                console.log(this.personalinfo[index].show2)
            },
            // change(val){
            //     this.current = val;
            //     this.showlist = [];
            //     for(var i=0;i<this.size;i++){
            //         var index = (this.current-1)*this.size+i;
            //         if (index < this.personalinfo.length) {
            //             var prod = this.personalinfo[index];
            //             this.showlist.push(prod);
            //         }
            //         else
            //             break;
            //     }
            // }
        },
        computed:{
            a(){
                var a=Math.round(this.count1/this.sum*100)
                return a;
            },
            b(){
                var a=Math.round(this.count2/this.sum*100)
                return a;
            },
            c(){
                var a=Math.round(this.count3/this.sum*100)
                return a;
            },
            d(){
                var a=Math.round(this.count4/this.sum*100)
                return a;
            },
            e(){
                var a=Math.round(this.count5/this.sum*100)
                return a;
            },
            f(){
                var sum=this.personalinfo.length+this.personalinfo2.length
                return sum;
            }
            // total(){
            //     return this.personalinfo.length;
            // },
            // mounted(){
            //     this.$store.commit('setpersonList',this.personalinfo);
            //     this.change(this.current);
            // },
        },

    }
</script>

<style scoped>
    *{
        /*border: 1px solid blue;*/
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
    .content{

    }
    .content1{
        color: white;
        width: 100%;
        height: 310px;
        background: url(../images/背景.jpg) no-repeat center center#030A1A
    }
    .content1-sum{
        justify-content: center;
        display: flex;
        position: relative;
        left: 5%;
        top:12%;
        width: 90%;
        height: 75%;

    }
    .content1-left{
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .content1-left img{
        width: 100%;
        height: 100%;
    }
    .content1-right{
        font-size: 15px;
        width: 70%;

    }
    .content1-right button{
        color: white;
        height: 40px;
        font-size: 25px;
        border-radius: 75px;
        background: rgba(245,165,35,1);
    }
    .content1-right p{
        margin-left: 50px;
        margin-top: 17px;
    }
    .grade{
        width: 100%;

    }
    .grade-title{
        height: 50px;
        background: rgba(20,20,20,0.75);
    }
    .span1{
        padding-left:10px;
        color: white;
        font-size: 22px;
        padding-top: 15px;

    }
    .span1 span{
        display: inline-block;
        margin-left: 10px;

    }
    .span1 img{
        width: 27px;

    }
    .grade-content{
        background: white;

    }
    .grade-content1{

    }
    .grade1{
        margin-left: 10px;
    }
    .content2{
        display: flex;
        height:270px;
        align-items: center;
        background: rgba(243,243,243,1);

    }
    .content2-left{
        position: relative;
        left: 5%;
        width: 60%;
        height: 90%;
    }
    .content2-left a{
        font-size: 13px;
        color:black;
        font-family: "微软雅黑 Light";
    }
    .content2-left a:hover{

    }
    .content2-right{

        width: 20%;
        position: relative;
        left: 15%;
        top:-39px;
    }
    .p1{
        margin:10px 0 10px 0px;
        color: rgba(245,165,35,1);
    }
    .p2{
        text-indent:2em;
        margin:20px 0 0 0px

    }
    .grade-content3{
        height: 130px;
        display: flex;
    }
    .ul1{

        position: absolute;
        bottom: 0;
        width: 90%;
        left: 5%;

    }
    .ul1 li{
        list-style: none;
        display: inline-block;
    }
    .item-inner{
        margin-left: 10px;
        text-align: center;

    }
    .count{

    }
    .fill{

        background: rgba(245,165,35,1);
    }
    .order{

    }
    .content3{
        display: flex;
        min-height: 1100px;
        height: auto;
        background: rgba(15,15,15,0.75);

    }
    .row{
        position:relative;
        width:90%;
        left: 5%;
        background:rgba(27,27,27,1);

    }
    .row-1{
        position:relative;
        width:90%;
        height:90%;
        left: 5%;

    }
    .row1{
        margin-top: 20px;
        height: 50px;
    }
    .row2{
        height: 120px;
    }
    .row2 button{
        float: right;
    }
    .row3{
        margin-top: 20px;
        height:auto;
        padding-bottom: 70px;

    }
    .p3{
        position: relative;
        top: 20%;
        height: 40px;
        padding-left: 20px;
        background:transparent url("../images/文本.png") no-repeat;
    }
    .row2 button{
        color: white;
        margin-top: 10px;
        background: rgba(51,51,51,1);

    }
    .img1{
        width: 7%;
        height: 5%;
    }
    .img1 img{
        width: 100%;
    }
    .ul2{
        margin-top: 15px;

    }
    .row3 ul:first-child{
        margin-top: 30px;
    }
    .ul2 li{
        list-style: none;
    }
    .caption{
        border-top: 1px solid rgba(243,243,243,0.6);
        width: 95%;
        height: 100%;
        margin-left: 20px;
        background: rgba(33,33,33,1);

    }
    .caption p:last-child{

    }
    .p4{
        margin-top: 10px;
        margin-left: 10px;
        color:rgba(17,168,198,0.8);
        font-size: 20px;
    }
    .p5{
        font-size: 18px;
        margin-top: 20px;
        margin-left: 10px;
        color:rgba(243,243,243,0.6);
    }
    .p6{
        margin-top: 10px;
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .p7{

    }

    .list1 {
        display: flex;
        width: 100%;
        height: auto;
        /*padding-bottom: 70px;*/

    }
    .button1{
        font-size: 10px;
        height: 25px;
        margin-left: 20px;
        background: none;
        color:rgba(17,168,198,1);
    }
    .button2{
        float: right;
        color: white;
        margin-top: 10px;
        background: rgba(51,51,51,1);
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