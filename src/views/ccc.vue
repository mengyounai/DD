<template>
    <div>
    <Upload
            ref="upload"
            :headers="{'Authorization':'Bearer '+token}"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            :action="uploadUrl"
            :data="uploadData"
            style="display: inline-block;width:58px;"
    >

    </Upload>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                uploadData:{userId:JSON.parse(localStorage.getItem("userInfo")).userId},
            }
        }
    }
</script>
