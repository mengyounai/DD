<template>
    <div>
        <h1>Vue实现收缩效果</h1>

        <input type="checkbox" v-model="open">

        <div style="border: 1px solid gray">
            <shrink-view v-model="open">

                你看到的边框只是为了演示效果需要，实际组件是不会有任何内容的，它只提供收缩功能。
                <hr>
                此处内容可以是任何内容，组件会自动根据内容高度进行展开，需要用户关系的只需暴露是否开还是关的状态。
                开发者也只需关系此状态，故此可以放心的使用本控件实现页面上部分内容的收缩展示。

            </shrink-view>
        </div>

    </div>
</template>

<script>
    import ShrinkView from '../views/aaa';

    export default {
        components: {
            ShrinkView
        },
        data () {
            return {
                open: false
            }
        }
    }

</script>

<style scoped>

</style>