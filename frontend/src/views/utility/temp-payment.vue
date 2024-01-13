<template>
    <div class=" ml-4 mt-auto">
        <div class="flex justify-between flex-wrap items-center">
          <div class="max-w-[500px] space-y-4">
            <div
              class="relative flex space-x-3 items-center text-2xl text-slate-900 dark:text-white"
            >
              <span class="inline-block w-[25px] bg-secondary-500 h-[1px]"></span
              ><span>Coming soon</span>
            </div>
            <div
              class="xl:text-[70px] xl:leading-[70px] text-4xl font-semibold text-slate-900 dark:text-white"
            >
              Global Entrepreneurship Summit 2024
            </div>
            <p
              class="font-normal text-slate-600 dark:text-slate-300 max-w-[400px]"
            >
              Entrepreneurship Cell, IIT Kharagpur
            </p>
            <br>
            
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
          <div>
            <img src="@/assets/images/svg/img-1.svg" alt="" />
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import Button from "@/components/Button";
  import Icon from "@/components/Icon";
  export default {
    components: {
      Button,
      Icon,
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  