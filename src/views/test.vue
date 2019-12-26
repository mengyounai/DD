<template>
    <div>

        <div style="width: 100px;vertical-align:middle;height:32px;background: rgba(161,250,211,0.4);border: 1px solid black;display: inline-block;text-align: center">111</div>
        <Input type="text" v-model="text" style="width: 100px;vertical-align:middle;"/>


        <!--<Input style="width: 200px" type="text" v-model="serachInfo"/>-->
        <!--<Button  style="width: 50px;height: 30px" type="primary" icon="ios-search"></Button>-->


    </div>
</template>

<script>
    export default {
        name: "test",
        data(){
            return{
                text:'1'
            }
        }
    }
</script>

<style scoped>

</style>