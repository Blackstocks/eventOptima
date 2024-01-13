<template>
  <Dropdown classMenuItems=" w-[180px] top-[58px] ">
    
      <div
          type="button"
          :class="`${
            active
              ? 'bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 text-slate-900 dark:text-slate-300'
              : 'text-slate-600 dark:text-slate-300'
          } `"
          class="inline-flex items-center space-x-2 rtl:space-x-reverse w-full px-4 py-2 first:rounded-t last:rounded-b font-normal cursor-pointer"
          @click="handleClick"
        >
          <div class="flex-none text-lg">
            <Icon icon="heroicons-outline:login" />
          </div>
          <div class="flex-1 text-sm">
            Logout
          </div>
      </div>
    
  </Dropdown>
</template>
<script>
import { MenuItem } from "@headlessui/vue";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import profileImg from "@/assets/images/all-img/user.png"
import axios from "axios";

export default {
  methods: {
    handleClick() {
      this.$router.push("/");
      localStorage.removeItem("activeUser");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    }
  },
  components: {
    Icon,
    Dropdown,
    MenuItem,
  },
  data() {
    return {
      profileImg,
      ProfileMenu: [
        // {
        //   label: "Profile",
        //   icon: "heroicons-outline:user",
        //   link: () => {
        //     this.$router.push("profile");
        //   },
        // },
        // {
        //   label: "Chat",
        //   icon: "heroicons-outline:chat",
        //   link: () => {
        //     this.$router.push("chat");
        //   },
        // },
        // {
        //   label: "Email",
        //   icon: "heroicons-outline:mail",
        //   link: () => {
        //     this.$router.push("email");
        //   },
        // },
        // {
        //   label: "Todo",
        //   icon: "heroicons-outline:clipboard-check",
        //   link: () => {
        //     this.$router.push("todo");
        //   },
        // },
        // {
        //   label: "Settings",
        //   icon: "heroicons-outline:cog",
        //   link: () => {
        //     this.$router.push("settings");
        //   },
        // },
        // {
        //   label: "Price",
        //   icon: "heroicons-outline:credit-card",
        //   link: () => {
        //     this.$router.push("pricing");
        //   },
        // },
        // {
        //   label: "Faq",
        //   icon: "heroicons-outline:information-circle",
        //   link: () => {
        //     this.$router.push("faq");
        //   },
        // },
        {
          label: "Logout",
          icon: "heroicons-outline:login",
          link: () => {
            this.$router.push("/");
            localStorage.removeItem("activeUser");
          },
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
