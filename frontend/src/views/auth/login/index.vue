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
          <div class="auth-box h-full flex flex-col justify-center">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/">
                <img
                  :src="logo"
                  alt=""
                  class="mx-auto"
                  v-if="!this.$store.themeSettingsStore.isDark"
                />
                <img
                  :src="logoWhite"
                  alt=""
                  class="mx-auto"
                  v-else
                />
              </router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-4">
              <h4 class="font-medium">Sign in</h4>
              <div class="text-slate-500 text-base">
                Sign in to your account
              </div>
            </div>
            <Signin />
            <!-- <div
              class="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6"
            >
              <div
                class="absolute inline-block bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-slate-500 font-normal"
              >
                Or continue with
              </div>
            </div>
            <div class="max-w-[242px] mx-auto mt-8 w-full">
              <Social />
            </div> -->
            <div
              class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase text-sm"
            >
              Don’t have an account?
              <router-link
                to="/register"
                class="text-[#BE3A44] dark:text-white font-medium hover:underline"
              >
                Sign up
              </router-link>
            </div>
          </div>
          <div class="auth-footer text-center">
            Copyright 2024, Entrepreneurship Cell, IIT Kharagpur All Rights Reserved.
            <br class="pt-4">
            <a
            href="https://reg-ges.ecell-iitkgp.org/termsandconditions"
            target="_blank"
            class="text-slate-900 font-semibold"
          >
            Terms & Conditions
          </a>
           | 
          <a
            href="https://reg-ges.ecell-iitkgp.org/refundpolicy"
            target="_blank"
            class="text-slate-900 font-semibold"
          >
            Refund Policy
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Signin from "../common/Signin";
import Social from "../common/Social";

// Image Import
import logoWhite from "@/assets/images/logo/ecell-logo-white.png"
import logo from "@/assets/images/logo/ecell-logo.png"
import sideImg from "@/assets/images/auth/ils1.svg"

import earth from "../common/earth.vue"

export default {
  data () {
    return {
      logoWhite,logo,sideImg
    }
  },
  components: {
    Social,
    Signin,
    earth,
  },
};
</script>

<style lang="scss"></style>
