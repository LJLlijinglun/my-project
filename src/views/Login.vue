<template>
  <div>
<!--    自定义规则-->
      <el-form :rules="rules" ref="loginFrom" :model="from" label-width="80px" class="login_form">
        <h3>欢迎登录</h3>
        <el-form-item label="账号" prop="username">
          <el-input type="text" placeholder="请输入账号" v-model="from.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="text" placeholder="请输入密码" v-model="from.password"/>
        </el-form-item>
        <el-form-item>
          <el-button @click="login('loginFrom')" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    <el-dialog
    title="温馨提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
    >
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" v-on:click="dialogVisible=false">确定</el-button>
      </span>

    </el-dialog>

  </div>
</template>



<script>

export default {
  data() {
    return {
      // handleClose:false,

      //对话框显示和隐藏
      dialogVisible:false,
      from:{
        username: '',
        password: '',
      },

      //表单验证 需要在el-form-item元素中增加prop属性
      rules: {
        username: [
          {required:true,message:'账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required:true,message:'密码不能为空', trigger: 'blur' }
        ],
      },
    }

  },
  methods: {
    //表单绑定验证功能
    login(formName) {
      this.$refs[formName].validate((valid) =>{
        if (valid){
          //使用vue-router路由到指定的页面,该方式为编程式导航
          this.$router.push("/index/"+this.from.username);
        }else {
          this.dialogVisible = true;
          return false;
        }
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>
<style>
.login_form {
  padding: 35px 35px 15px 35px;
  width: 350px;
  margin: 180px auto;
  border-radius: 10px;
  box-shadow: 0pt 0pt 5pt 5pt rgba(5, 13, 2, 0.08);

}
</style>
