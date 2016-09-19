<template>
<div class="p-lg">
	<div class="loginBox">
		<div class="loginBoxInner">
			<div class="logo">
				<h1>运营管理后台</h1>
			</div>
			<form id="login" method="post" >
				<div class="username">
					<div class="usernameInner">
						<input type="text" id="username" name="j_username" placeholder="手机号码">
					</div>
				</div>
				<div class="validateCode" placeholder="请输入密码">
					<div class="validateCodeInner">
						<input type="password" >
					</div>
					
				</div>
				<input type="submit" id="loginBtn" value="登 录">
			
			</form>
		</div>
</div>
</div>

	
</template>
<script>
export default {
        data(){
            return {
                
               

            }
        },
       
    }
</script>
<style lang="sass">
	.p-lg {
		.loginBox {
			background: #fff;
			border-radius: 2px;
			box-shadow: 0 0 2px rgba(0, 0, 0, .3);
			margin: 7% auto 0;
			padding: 5px;
			width: 350px;
		}
		.code {
			cursor: pointer;
			width:150px;
			height:47px;
		}
		.loginBoxInner {
			background: #32415a url("../assets/images/patternbg.png") repeat;
			border-radius: 0 0 2px 2px;
			padding: 20px;
		}
		
		.loginBox .logo {
			text-align: center;
		}
		
		.loginBox .logo h1 {
			border-bottom: 1px solid #56647d;
			color: #fb9337;
			font-size: 32px;
			margin-bottom: 5px;
			line-height: 150%;
		}
		
		.loginBox .logo .sLogin {
			color: #999;
			display: block;
			margin: 10px 0 10px 0;
		}
		
		.nousername {
			display: none;
		}
		
		.nousername p {
			background: #fffccc;
			border-radius: 2px;
			color: #333;
			padding: 5px;
			text-align: center;
			line-height: 24px;
		}
		
		.loginBox form {
			display: block;
			margin:40px auto;
		}
		
		.loginBox .username, .loginBox .password, .loginBox .validateCode {
			background: #eee url("../assets/images/username.png") no-repeat
				13px center;
			border-radius: 2px;
			box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
			margin: 20px 0;
		}
		
		.loginBox .password {
			background-image: url("../assets/images/password.png");
		}
		
		.loginBox .validateCode {
			background-image: url("../assets/images/info.png");
		}
		
		.loginBox .usernameInner, .loginBox .passwordInner {
			background: #fff;
			border-left: 1px solid #ddd;
			border-radius: 2px;
			margin-left: 45px;
			padding-right: 20px;
		}
		
		.loginBox .validateCodeInner {
			background: #fff;
			border-left: 1px solid #ddd;
			border-radius: 2px;
			margin-left: 45px;
			padding-right: 20px;
		}
		
		.loginBox .username input, .loginBox .password input, .validateCode input {
			border: 0 none;
			border-radius: 0 2px 2px 0;
			box-shadow: none;
			color: #666;
			font-size: 14px;
			padding: 15px 10px;
			width: 100%;
		}
		
		#loginBtn {
			background: #f0801d url("../assets/images/btngrad.png") repeat-x left
				top;
			border: 0 none;
			border-radius: 2px;
			box-shadow: 0 1px 2px rgba(0, 0, 0, .4);
			font-size: 14px;
			font-weight: normal;
			padding: 15px 0;
			text-transform: uppercase;
			width: 100%;
			color: #fff;
			cursor: pointer
		}
		
		#loginBtn:hover {
			background-color: #f0721e;
		}
		
		.loginBox .keep {
			margin-top: 20px;
			font-weight: bold;
			color: #ccc;
			font-size: 11px;
		}
		
		.loginBox .keep input, span {
			vertical-align: middle;
		} 
		
		#validateCodeContainer {
			display: inline-block; 
			float: right; 
			position: relative; 
			width: 150px;
			height:47px; 
			margin-top: -47px;
		}
		
		#login input {
			outline: none;
		}
	}
	
</style>