<template>
    <div class="shrink-view" :style="{maxHeight: (mIsOpen?contentHeight:0) + 'px'}">
        <slot></slot>
    </div>


</template>

<script>
    export default {
        name: "aaa",

        data () {
            return {
                contentHeight: 0,
                mIsOpen:this.value
            }
        },
        props: {
            value: Boolean // 定义属性 value，这样v-model的值就可以接收到。
        },
        updated () {
            this.init();
        },
        mounted () {
            this.init();
        },
        methods: {
            // 因为 updated 和 mounted 里都要使用本方法，所以将本方法提取为一个方法方便调用。使用 nextTick 进一步保证视图高度获取精确。
            init () {
                this.$nextTick(() => {
                    this.contentHeight = this.$el.scrollHeight;
                });
            }
        },
        watch: {
            // 监听 value 的变化，并将变化值赋值给 本组件维护的 mIsOpen 字段中
            value (newValue) {
                this.mIsOpen = newValue;
            },

            // 监听 mIsOpen 的变化，一旦变化，将input事件暴露，这样可实现v-model双向绑定。
            mIsOpen (newValue) {
                this.$emit('input', newValue);
            }
        },

    }
</script>



<style scoped>

    .shrink-view {
        overflow: hidden;

        -webkit-transition-duration: 300ms;
        -moz-transition-duration: 300ms;
        -ms-transition-duration: 300ms;
        -o-transition-duration: 300ms;
        transition-duration: 300ms;
    }


</style>