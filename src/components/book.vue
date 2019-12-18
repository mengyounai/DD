<template>
    <div class="book">
        <img :src="info.imgurl" alt="">
        <p>书籍名称:{{info.name}}</p>
        <p>出版时间:{{info.time}}</p>
        <p><router-link :to="{name:'detail',query:{id:info.id}}">查看详情</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "book",
        props:['info']
    }
</script>

<style scoped>

</style>