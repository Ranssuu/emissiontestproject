<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Page</title>
    <link rel="stylesheet" href="CSS/register.css">
</head>
<body>
    <div class="register-container">
        <div class="form-container">
            <h2>Create Account</h2>
            <form action="submit_registration.php" method="post">
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" required>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" required>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number">
                <input type="email" id="email" name="email" placeholder="Email" required>
                <input type="password" id="password" name="password" placeholder="Password" required>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required>
                <div class="terms">
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">I have read and agreed to the Terms of Service and Privacy Policy.</label>
                </div>
                <button type="submit">Create Account</button>
            </form>
            <div class="social-signup">
                <p>Or:</p>
                <button class="google-btn">Signup with Google</button>
                <button class="facebook-btn">Signup with Facebook</button>
            </div>
            <div class="login-link">
                <p>Already have an account? <a href="login.html">Log In</a></p>
            </div>
        </div>
        <div class="logo-container">
            <div class="logo">
                <div class="logotextbox">
                    <h2>IOT Emission Test</h2>
                </div>
                <div class="logoimg">
                    <img src="imgs/Logo.svg" alt="IOT Emission Test">
                </div>
            </div>
        </div>
    </div>
</body>
</html>
