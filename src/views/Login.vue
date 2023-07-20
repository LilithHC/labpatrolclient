<template>
  <div class="login-box">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="80px"
        class="demo-ruleForm"
    >
      <h2>lab management system</h2>
      <el-form-item label="username：" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="password：" prop="password">
        <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="submitForm(ruleFormRef)">login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive({
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'please input username', trigger: 'blur' },
          { min: 3, max: 10, message: 'username is invalid', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'please input password', trigger: 'blur' },
          { min: 3, max: 10, message: 'password is invalid', trigger: 'blur' }
        ]
      }
    })

    return {
      ...toRefs(data)
    }
  }
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url("../assets/login-bg.jpeg");
  text-align: center;
  padding: 1px;
  .demo-ruleForm{
    width: 500px;
    margin: 200px auto;
    background: rgba(255, 255, 255, .7);
    padding: 40px;
    border-radius: 5px;
  }
  .login-btn{
    width: 48%;
  }
  h2{
    margin-bottom: 20px;
  }
}
</style>
