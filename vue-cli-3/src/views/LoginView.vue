<template>
    <div class="box">
        <div class="item">
            <div class="label">用户名</div>
            <input type="text" v-model="form.userName" placeholder="username">
        </div>
        <div class="item">
            <div class="label">密码</div>
            <input type="text" v-model="form.userPassword" placeholder="userPassword">
        </div>
        <div class="btn" @click="open=true">登录</div>
        <img src="../assets/1.jpeg" width="20" alt="" class="img">
        <Teleport to="body">
            <div v-if="open" class="modal">
                <div class="modal-content">
                    <p>确定进行操作么？</p>
                    <div class="btn-group">
                        <button @click="goLogin">确定</button>
                        <button @click="open = false">取消</button>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { useBaseImg } from '../hooks/index'

const form = reactive({
    userName: '',
    userPassword: ''
})
const userName = ref('');
const userPassword = ref('');
const open = ref(false);
const goLogin = () => {
    open.value = false;
}
onMounted(()=> {
})
useBaseImg({el:'.img'}).then(res => {
    console.log(3, res);
})
</script>

<style scoped lang="less">
.box {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    .item {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        .label {
            margin-bottom: 10px;
            font-size: 14px;
        }
        input{
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 5px 10px;
            outline: none;
        }
    }
    .btn {
        width: 100px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 10px;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            background-color: #ccc;
            color: #fff;
        }
    }
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-content {
        width: 300px;
        height: 150px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    p {
        color: #000;
        font-size: 20px;
    }
    .btn-group {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 100%;
        height: 100%;
        button {
            width: 60px;
            height: 40px;
            border: 1px solid #ccc;
            border-radius: 10px;
            line-height: 60px;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                background-color: #ccc;
                color: #fff;
            }
            &:nth-child(2) {
                margin-top: 20px;
            }
        }
    }
}
</style>