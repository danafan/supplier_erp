<template>
	<div class="fill">
		<el-image class="fill" :src="login_back" fit="cover"></el-image>
		<div class="login_content">
			<div class="primary_color f22 fw500 width-100 tac mb32">手机号密码登录</div>
			<div class="input_box mb32">
				<input type="number" class="phone" v-model="phone" placeholder="请输入手机号">
				<img class="clear_icon" src="../static/clear_icon.png" @click="phone = ''">
			</div>
			<div class="input_box mb60">
				<input type="number" class="phone" v-model="password" placeholder="请输入密码">
				<img class="clear_icon" src="../static/clear_icon.png" @click="password = ''">
			</div>
			<!-- <div class="input_box mb60">
				<input type="number" class="code" v-model="code" placeholder="短信验证码">
				<div class="but_text" :class="{'but_text_active':!notBut}" @click="getCode">{{but_text}}</div>
			</div> -->
			<div class="login" @click="login">登录</div>
		</div>
	</div>
</template>
<script>
	import resource from '../api/resource.js'
	export default{
		data(){
			return{
				login_back:require('../static/login_back.png'),
				phone:"",							//手机号
				password:"",						//密码
				// code:"",
				// but_text:"获取验证码",
				// notBut: true,                   	//默认获取验证码按钮可点击
    //   			time:60,                        	//默认倒数60秒
      		}
      	},
      	methods:{
      		login(){
        		if(!this.judgmentPhone.test(this.phone)){
        			this.$message.warning("请输入正确的手机号");
        		}else if(this.password == ''){
        			this.$message.warning("请输入密码");
        		}else{
        			let obj = {
        				phone: this.phone,
        				password:this.password
        			}
        			resource.login(obj).then(res => {
        				if(res.data.code == 1){ 
        					let data = res.data.data;
        					localStorage.setItem("account_id", data.account_id);
        					localStorage.setItem("secret_key", data.secret_key);
        					localStorage.setItem("login_token", data.login_token);
        					let supplier_list = JSON.stringify(data.supplier_list);
        					localStorage.setItem("supplier_list", supplier_list);
        					let user_info = {
        						account_id:data.account_id,
        						login_token:data.login_token,
        						secret_key:data.secret_key,
        						supplier_list:data.supplier_list,
        					}
        					this.$store.commit('setToken',user_info);
        					
        					this.$router.replace('/index');
        				}else{
        					this.$toast(res.data.msg);
        				}
        			});
        		}
        	}
			//获取验证码
			// getCode(){
			// 	if(!this.judgmentPhone.test(this.phone)){
			// 		this.$message.warning("请输入正确的手机号");
			// 	}else{
   //      			if(this.notBut == true){//如果按钮可以点击
   //      				let obj = {
   //      					phone: this.phone,
   //      				}
   //      				resource.getSms(obj).then(res => {
   //      					if(res.data.code == 1){ 
   //      						this.$message.success("发送成功...");
   //      						this.timeDown();
   //      					}else{
   //      						this.$toast(res.data.msg);
   //      					}
   //      				});
   //      			}else{
   //      				this.$message.warning("操作频繁");
   //      			}
   //      		}
   //      	},
			// 倒计时
			// timeDown () {
			// 	if (this.time > 0) {
   //      			this.notBut = false;   //按钮不可点击
   //      			this.time --;
   //      			this.but_text = "重新发送" + this.time + "秒";
   //      			setTimeout(() => {
   //      				this.timeDown();
   //      			}, 1000);
   //      		} else {
   //      			this.notBut = true;    //按钮可以点击
   //      			this.time = 60;
   //      			this.but_text = "获取验证码";
   //      		}
   //      	},
        	//点击登录
        	// login(){
        	// 	if(!this.judgmentPhone.test(this.phone)){
        	// 		this.$message.warning("请输入正确的手机号");
        	// 	}else if(this.code == ''){
        	// 		this.$message.warning("请输入验证码");
        	// 	}else{
        	// 		let obj = {
        	// 			phone: this.phone,
        	// 			code:this.code
        	// 		}
        	// 		resource.login(obj).then(res => {
        	// 			if(res.data.code == 1){ 
        	// 				let data = res.data.data;
        	// 				localStorage.setItem("account_id", data.account_id);
        	// 				localStorage.setItem("secret_key", data.secret_key);
        	// 				localStorage.setItem("login_token", data.login_token);
        	// 				localStorage.setItem("supplier_name", data.supplier_name);
        	// 				let user_info = {
        	// 					account_id:data.account_id,
        	// 					login_token:data.login_token,
        	// 					secret_key:data.secret_key,
        	// 					supplier_name:data.supplier_name,
        	// 				}
        	// 				this.$store.commit('setToken',user_info);
        					
        	// 				this.$router.replace('/index');
        	// 			}else{
        	// 				this.$toast(res.data.msg);
        	// 			}
        	// 		});
        	// 	}
        	// }
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
		}
		.phone{
			padding-right: 40rem;
		}
		.code{
			padding-right: 110rem;
		}
		.clear_icon{
			position: absolute;
			right: 10rem;
			width: 20rem;
			height: 20rem;
			z-index: 9;
		}
		.but_text{
			position: absolute;
			right: 15rem;
			font-size: 16rem;
			color:#5575EB;
			cursor: pointer;
		}
		.but_text_active{
			color:#666666;
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