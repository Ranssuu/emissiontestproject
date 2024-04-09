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
                <input type="text" id="firstName" name="firstName" placeholder="First Name" required>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" required>
                <input type="email" id="email" name="email" placeholder="Email" required>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number">
                <input type="password" id="password" name="password" placeholder="Password" required>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required>
                <button type="submit">Create Account</button>
            </form>
            <div class="login-link">
                <p>Already have an account? <a href="login.html">Log In</a></p>
            </div>
        </div>
        <div class="logo-container">
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
