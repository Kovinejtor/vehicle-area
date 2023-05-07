<template>
  <div class="landing-page">
    <h1 class="headline">Vehicle area</h1>

    <div class="container">
      <h2 class="login-heading">Log in</h2>
      <div class="button-container">
        <button class="google-button">
          <img
            src="../assets/google-logo.png"
            alt="Google Logo"
            class="button-logo"
          />
          Continue with Google
        </button>
        <button class="facebook-button">
          <img
            src="../assets/facebook-logo.png"
            alt="Facebook Logo"
            class="button-logo"
          />
          Continue with Facebook
        </button>
        <button class="twitter-button">
          <img
            src="../assets/twitter-logo.png"
            alt="Twitter Logo"
            class="button-logo"
          />
          Continue with Twitter
        </button>
      </div>
      <div class="or-line">
        <span class="or-text">or</span>
      </div>

      <div class="login-form">
        <form>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Log in</button>
        </form>
      </div>

      <div class="form-group">
        <a href="#" class="forgot-password">Forgot Password?</a>
      </div>

      <div class="text-center mt-3">
        Don't have an account? <a href="#" class="signup-link">Sign up.</a>
      </div>
    </div>
  </div>
</template>

<style>
.landing-page {
  background-color: #7b7b7b;
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.headline {
  font-size: 4rem;
  color: #afffd9;
  position: absolute;
  left: 10%;
  top: 30%;
  transform: translateY(-50%);
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5) inset;
}

.container {
  background-color: white;
  border-radius: 10px;
  width: 30%;
  height: 85%;
  margin-left: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-heading {
  font-size: 2rem;
  color: black;
  margin-bottom: 1rem;
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}

.google-button,
.facebook-button,
.twitter-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b5998;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  width: 100%;
  max-width: 900px;
  height: 50px;
  margin-top: 15px;
  font-size: 1.2rem;
}

.button-logo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.or-line {
  width: 100%;
  height: 1px;
  background-color: #c5c5c5;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
}

.or-text {
  background-color: white;
  padding: 0px 10px;
  font-size: 1rem;
  color: #c5c5c5;
  //text-transform: uppercase;
  font-weight: bold;
}

.login-form {
  margin-top: 30px;
  max-width: 300px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  max-width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #c5c5c5;
  padding: 5px 10px;
}

.btn-primary {
  background-color: #3792de;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  margin-top: 15px;
  margin: 0 auto;
  display: block;
}

.forgot-password {
  display: block;
  text-align: center;
  color: #000;
  text-decoration: none;
  margin-top: 10px;
}

.forgot-password:hover {
  text-decoration: none;
}

.signup-link {
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: none;
}
</style>
