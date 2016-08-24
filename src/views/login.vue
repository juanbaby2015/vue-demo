<template>
	<div class="loginBox">
		<div class="loginBoxInner">
			<div class="logo">
				<h1>运营管理后台</h1>
			</div>
			<div style="display: block; height: 26px;">
				<div class="nousername">
					<p></p>
				</div>
			</div>
			<form id="login" method="post" novalidate="novalidate" onsubmit="layer.load();" enctype="application/x-www-form-urlencoded" action="/tntbos/j_spring_security_check">
				<div class="username">
					<div class="usernameInner">
						<input type="text" id="username" name="j_username" placeholder="用户名">
					</div>
				</div>
				<div class="password">
					<div class="passwordInner">
						<input type="password" id="password" name="j_password" placeholder="密码">
						<input type="hidden" name="token" value="bos">
					</div>
				</div>
				<div class="validateCode">
					<div class="validateCodeInner">
						<input type="text" id="validateCode" maxlength="4" name="validateCode" placeholder="验证码">
					</div>
					<div id="validateCodeContainer">
						<img alt="loading..." width="150" height="47" id="imgCode" onclick="imgClickHandler();" style="cursor: pointer;" title="看不清，换一张" src="/tntbos/imageCode.jpeg?1472003481774">
					</div>
				</div>
				<input type="submit" id="loginBtn" value="登 录">
				<div class="keep"><label><input type="checkbox" name="rememberMe" onclick="this.value = this.checked == true ? 1 : false;"><span> &nbsp;记住我</span></label><font style="vertical-align: middle;"> &nbsp; （注 ：请不要在公用计算机上使用）</font></div>
			</form>
		</div>
	</div>
</template>
<script>

</script>
<style lang="sass">
	.login-body {
		background: url("../assets/images/patternbg.png") repeat;
	}
	
	.loginBox {
		background: #fff;
		border-radius: 2px;
		box-shadow: 0 0 2px rgba(0, 0, 0, .3);
		margin: 7% auto 0;
		padding: 5px;
		width: 350px;
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
		margin-top: 20px;
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
</style>