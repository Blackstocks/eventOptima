<template>
  <div class="loginwrapper">
    <div class="lg-inner-column">
      <div class="left-column relative z-[1] bg-[#010214]" style="background-color: #010214 !important;">
        <div class="max-w-[520px] pt-24 ltr:pl-20 rtl:pr-20 text-center">
          <router-link to="/">
            <img
              src="@/assets/images/logo/ecell-logo-white.png"
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

        <div className="bg-[#010214] absolute bottom-[-18vh] -z-10 ">
          <earth></earth>
        </div>
        
      </div>
      <div class="right-column relative bg-white dark:bg-slate-800">
        <div
          class="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
        >
          <div class="auth-box h-full flex flex-col justify-center">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/"
                ><img
                  src="@/assets/images/logo/ecell-logo.png"
                  alt=""
                  class="mx-auto"
              /></router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-5">
              <h4 class="font-medium">Sign up</h4>
              <div class="text-slate-500 dark:text-slate-400 text-base">
                Create an account to register as a <strong class="text-[#BE3A44]">Campus Ambassador</strong>
              </div>
            </div>
            <Signup />
            <!-- <div
              className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6"
            >
              <div
                className=" absolute inline-block  bg-white dark:bg-slate-800 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal "
              >
                Or continue with
              </div>
            </div>
            <div class="max-w-[242px] mx-auto mt-8 w-full">
              <Social />
            </div> -->
            <div
              class="max-w-[215px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm"
            >
              Already registered?
              <router-link
                to="/"
                class="text-[#BE3A44] dark:text-white font-medium hover:underline"
              >
                Sign In</router-link
              >
            </div>
          </div>
          <div class="auth-footer text-center">
            Copyright 2024, Entrepreneurship Cell, IIT Kharagpur All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Signup from "../common/caSignup";
import Social from "../common/Social";

import earth from "../common/earth.vue"

export default {
  components: {
    Social,
    Signup,
    earth,
  },
};
</script>
<style lang="scss"></style>
