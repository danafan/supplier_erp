<template>
	<div class="fill">
		<el-image class="fill" :src="login_back" fit="cover"></el-image>
		<div class="login_content">
			<div class="primary_color f22 fw500 width-100 tac mb32">修改密码</div>
			<div class="input_box mb32">
				<input type="password" v-model="password" placeholder="请输入密码">
				<img class="clear_icon" src="../static/clear_icon.png" @click="password = ''">
			</div>
			<div class="input_box mb32">
				<input type="password" v-model="new_password" placeholder="请输入新密码">
				<img class="clear_icon" src="../static/clear_icon.png" @click="new_password = ''">
			</div>
			<div class="input_box mb60">
				<input type="password" v-model="confirm_password" placeholder="请确认密码">
				<img class="clear_icon" src="../static/clear_icon.png" @click="confirm_password = ''">
			</div>
			<div class="login" @click="confirmFn">提交</div>
		</div>
	</div>
</template>
<script>
	import resource from '../api/resource.js'
	export default{
		data(){
			return{
				login_back:require('../static/login_back.png'),
				password:"",						//密码
				new_password:"",					//新密码
				confirm_password:"",				//确认密码
      		}
      	},
      	computed:{
			//账号id
			account_id(){
				return this.$store.state.account_id;
			}
		},
      	methods:{
      		//确认提交
      		confirmFn(){
        		if(this.password == ''){
        			this.$message.warning("请输入密码");
        		}else if(this.new_password == ''){
        			this.$message.warning("请输入新密码");
        		}else if(this.confirm_password == ''){
        			this.$message.warning("请确认密码");
        		}else if(this.new_password != this.confirm_password){
        			this.$message.warning("两次密码不一致！");
        		}else{
        			let obj = {
        				account_id:this.account_id,
        				old_password:this.password,
        				password:this.new_password,
        				confirm_password:this.confirm_password
        			}
        			resource.editPwd(obj).then(res => {
        				if(res.data.code == 1){ 
        					this.$message.success(res.data.msg);
        					this.$router.replace('/login');
        				}else{
        					this.$message.warning(res.data.msg);
        				}
        			});
        		}
        	}
			
        }
    }
</script>
<style lang="less" scoped>
.login_content{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	width: 478rem;
	height: 488rem;
	background: #FFFFFF;
	border-radius: 8rem;
	border: 1px solid #EBEBEB;
	z-index: 9;
	padding: 48rem;
	.input_box{
		position: relative;
		width: 100%;
		height: 52rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		input{
			box-sizing: border-box;
			background-color: #F2F4FF;
			border-radius: 6rem;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			font-size: 16rem;
			border:none;
			outline: none;
			padding-left: 22rem;
			padding-right: 40rem;
		}
		.clear_icon{
			position: absolute;
			right: 10rem;
			width: 20rem;
			height: 20rem;
			z-index: 9;
		}
	}
	.login{
		cursor: pointer;
		width: 380rem;
		text-align: center;
		height: 42rem;
		line-height: 42rem;
		background: #5575EB;
		border-radius: 4px;
		font-size: 14rem;
		color: #ffffff;
	}
}
</style>