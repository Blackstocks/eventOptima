<template>
  <form ref="signin" @submit.prevent="onSubmit" class="space-y-4">
    <Textinput
      label="Email"
      type="email"
      placeholder="Enter your email"
      name="email"
      v-model="email"
      :error="emailError"
      classInput="h-[48px]"
    />
    <Textinput
      label="Password"
      type="password"
      placeholder="Enter your password"
      name="password"
      v-model="password"
      :error="passwordError"
      hasicon
      classInput="h-[48px]"
    />

    <div class="flex justify-between">
      <router-link
        to="/forgot-password"
        class="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >Forgot Password?</router-link
      >
    </div>

    <button type="submit" class="btn btn-dark block w-full text-center">
      Sign in
    </button>
  </form>
</template>

<script>
import Textinput from "@/components/Textinput";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

import axios from 'axios';

export default {
  components: {
    Textinput,
  },
  data() {
    return {
      checkbox: false,
    };
  },
  setup() {
    // Define a validation schema
    const schema = yup.object({
      email: yup.string().required("Email is required").email(),
      password: yup.string().required("Password is required").min(8),
    });

    const toast = useToast();
    const router = useRouter();

    const { handleSubmit } = useForm({
      validationSchema: schema,
    });

    // No need to define rules for fields

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } = useField("password");

    const onSubmit = async () => {

      try {
        const response = await axios.post('https://api-ges.ecell-iitkgp.org/auth/jwt/create/', {
          email:  email.value,
          password: password.value
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.data && response.data.access) {
          localStorage.setItem("accessToken", response.data.access);
          localStorage.setItem("refreshToken", response.data.refresh);
          
          try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.get('https://api-ges.ecell-iitkgp.org/auth/users/me/', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${accessToken}`
              }
            });

            // Store the user data in localStorage
            if (response.data) {
              localStorage.setItem('user', JSON.stringify(response.data));
            }

          } catch (error) {
            console.error(error);
          }

          const user = JSON.parse(localStorage.getItem('user'));

          if (user.user_type === 'Student' || user.user_type == 'Campus Ambassador'){
            router.push("/student/home");
          }

          else if (user.user_type === 'Startup'){
            router.push("/startup/home");
          }

          else if(user.user_type == "Professional"){
            router.push("/professional/home");
          }

          else if(user.user_type == "Contingent"){
            router.push("/contingent/home");
          }

          else if(user.user_type == "Admin"){
            router.push("/admin/home");
          }
          
          toast.success("Login successfully", { timeout: 2000 });
        } else {
          toast.error("Invalid credentials", { timeout: 2000 });
        }
      } catch (error) {
        toast.error("Login failed", { timeout: 2000 });
      }
    };

    return {
      email,

      emailError,
      password,
      passwordError,
      onSubmit,
    };
  },
};
</script>

<style lang="scss"></style>
