<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="CSS/login.css">
</head>
<body>
    <div class="container">
        <div class="logincontainer">
            <div class="logintextbox">
                <h2>Login to your account</h2>
            </div>
            <form action="action_page.php" method="post">
                <div class="form-group">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>
                </div>
                <div class="form-group">
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>
                    <a href="#" class="forgot-password">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
            </form>
            <div class="textbox1">
                <a>Or continue with</a>
            </div>
            <div class="social-login">
                <button class="google-btn">
                    <img src="imgs/Google.svg" alt="Google">
                </button>
                <button class="facebook-btn">
                    <img src="imgs/facebook.svg" alt="Facebook">
                </button>
            </div>
            <div class="registertextbox">
                <a>Don't have an account yet? </a><a href="#">Register</a>
            </div>
        </div>
        <div class="logocontainer">
            <div class="logo">
                <div class="logotextbox">
                    <h2>Iot Emission Test</h2>
                </div>
                <div class="logoimg">
                    <img src="imgs/Logo.svg" alt="IOT Emission Test">
                </div>
            </div>
        </div>
    </div>
</body>
</html>
