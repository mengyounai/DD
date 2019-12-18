<template>
    <div>
    <Button @click="modal12 = true">更改头像</Button>
    <Modal v-model="modal12" draggable scrollable title="请选择头像">
        <Upload
                type="drag"
                :format="['jpg','jpeg','png']"
                :on-success="handleSuccess"
                :show-upload-list="true"
                action="https://console.upyun.com/services/image-jishanle/DD阅读/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击或拖拽上传图片</p>
            </div>
        </Upload>
    </Modal>


    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal12: false,
                modal13: false,

            }
        },
    methods: {
        handleView (name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove (file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess (res, file) {
            file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = '上传成功';
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        handleBeforeUpload () {
            const check = this.uploadList.length < 5;
            if (!check) {
                this.$Notice.warning({
                    title: 'Up to five pictures can be uploaded.'
                });
            }
            return check;
        }
    },

    }
</script>
