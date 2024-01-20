<template>
  <div class="loginwrapper">
    <div class="lg-inner-column">
      <div class="left-column relative z-[1] bg-[#010214]" style="background-color: #010214 !important;">
        <div class="max-w-[520px] pt-24 ltr:pl-20 rtl:pr-20 text-center bg-[#010214]">
          <router-link to="/">
            <img
              :src="logoWhite"
              alt=""
              class="mb-4 mx-auto h-20"
            />
          </router-link>

          <p class=" mb-6">presents</p>

          <img
              src="../../../../src/assets/images/logo/ges.svg"
              alt=""
              class="mb-4 mx-auto"
            />

        </div>

        <div className="bg-[#010214] absolute bottom-[-20vh] -z-10 ">
          <earth></earth>
        </div>
        
      </div>
      <div class="right-column relative">
        <div
          class="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
        >
          <div class="auth-box2 flex flex-col justify-center h-full">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/"
                ><img
                  src="@/assets/images/logo/ecell-logo.png"
                  alt=""
                  class="mx-auto"
              /></router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-5">
              <h4 class="font-medium mb-4">Forgot Your Password?</h4>
              <div class="text-slate-500 dark:text-slate-400 text-base">
                Reset Password
              </div>
            </div>
            <div
              class="font-normal text-base text-slate-500 dark:text-slate-400 text-center px-2 bg-slate-100 dark:bg-slate-600 rounded py-3 mb-4 mt-10"
            >
              Enter your Email and instructions will be sent to you!
            </div>

            <ForgotPass />
            <div
              class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm"
            >
              Forget It,
              <router-link
                to="/"
                class="text-slate-900 dark:text-white font-medium hover:underline"
              >
                Send me Back
              </router-link>
              to The Sign In
            </div>
          </div>
          <div class="auth-footer text-center">
            Copyright 2021, Dashcode All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ForgotPass from "./common/forgot";
import earth from "./common/earth.vue"

// Image Import
import logoWhite from "@/assets/images/logo/ecell-logo-white.png"
import logo from "@/assets/images/logo/ecell-logo.png"
import sideImg from "@/assets/images/auth/ils1.svg"

export default {
  data () {
    return {
      logoWhite,logo,sideImg
    }
  },
  components: {
    ForgotPass,
    earth,
  },
};
</script>
<style lang="scss"></style>
