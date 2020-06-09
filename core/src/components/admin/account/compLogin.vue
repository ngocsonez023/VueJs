<template>
  <div class="container-fluid login-page">
    <div class="row">
      <div class="col-md-12 mx-auto">
        <div id="first" :style="[getPage ? {'display':'block'} : {'display':'none'}]">
          <div class="myform form">
            <div class="logo mb-3">
              <div class="col-md-12 text-center">
                <h1>Login</h1>
              </div>
            </div>
            <form @submit.prevent="handleLogin" name="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  v-model="email"
                />
                <div v-show="submitted && !email" class="invalid-feedback">Username is required</div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Password"
                  v-model="password"
                />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
              </div>
              <div class="form-group">
                <p class="text-center">
                  By signing up you accept our
                  <a href="#">Terms Of Use</a>
                </p>
              </div>
              <div class="col-md-12 text-center">
                <button class="btn btn-block mybtn btn-primary tx-tfm">Login</button>
              </div>
              <div class="col-md-12">
                <div class="login-or">
                  <hr class="hr-or" />
                  <span class="span-or">or</span>
                </div>
              </div>
              <div class="col-md-12 mb-3">
                <p class="text-center">
                  <a href="javascript:void();" class="google btn mybtn">
                    <i class="fab fa-google-plus-g"></i> Signup using Google
                  </a>
                </p>
              </div>
              <div class="form-group">
                <p class="text-center">
                  Don't have account?
                  <a href="#" id="signup" @click="changeSignInUp">Sign up here</a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div id="second" :style="[getPage?{'display':'none'} : {'display':'block'}]">
          <div class="myform form">
            <div class="logo mb-3">
              <div class="col-md-12 text-center">
                <h1>Signup</h1>
              </div>
            </div>
            <form action="#" name="registration">
              <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Firstname"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  class="form-control"
                  id="lastname"
                  aria-describedby="emailHelp"
                  placeholder="Enter Lastname"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Password"
                />
              </div>
              <div class="col-md-12 text-center mb-3">
                <button
                  type="submit"
                  class="btn btn-block mybtn btn-primary tx-tfm"
                >Get Started For Free</button>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <p class="text-center">
                    <a href="#" @click="changeSignInUp">Already have an account?</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    ...mapGetters(['getPage'])
  },
  methods: {
    ...mapMutations(['changeSignInUp']),
    ...mapActions(['login']),
    handleLogin (e) {
      this.submitted = true
      const { email, password } = this
      if (email && password) {
        this.login({email, password})
      }
    }
  }
}
</script>

<style></style>
