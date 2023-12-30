<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <Textinput
      label="Email"
      type="email"
      placeholder="Type your email"
      name="emil"
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
    <Select label="register as" name="userType" v-model="userType" :error="userTypeError" :options="selectOptions" />
    <Checkbox name="checkbox" label="You accept our Terms and Conditions and Privacy Policy" checked disabled />

    <button type="submit" class="btn btn-dark block w-full text-center">
      Create an account
    </button>
  </form>
</template>

<script>
import Textinput from "@/components/Textinput";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

import { inject } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

import axios from 'axios';

export default {
  components: {
    Textinput,
    Select,
    Checkbox,
  },
  data() {
    return {
      checkbox: false,
      selectOptions: [
        {
          value: "Student",
          label: "Student"
        },
        {
          value: "Campus Ambassador",
          label: "Campus Ambassador"
        },
        {
          value: "Startup",
          label: "Startup"
        },
        {
          value: "Professional",
          label: "Professional"
        },
        {
          value: "Contingent",
          label: "Contingent"
        },
      ]
    };
  },
  setup() {
    // Define a validation schema
    const schema = yup.object({
      email: yup.string().required(" Email is required").email(),
      password: yup.string().required("Password is  required").min(8),
      userType: yup.string().required("This field is required"),
      checkbox: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
    });
    const swal = inject("$swal");
    const toast = useToast();
    const router = useRouter();

    // Create a form context with the validation schema
    const users = [];
    const { handleSubmit } = useForm({
      validationSchema: schema,
    });
    // No need to define rules for fields

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: userType, errorMessage: userTypeError } = useField("userType");
    const { value: checkbox, errorMessage: checkboxError } = useField("checkbox");
    const { value: password, errorMessage: passwordError } = useField("password");

    const onSubmit = handleSubmit(async (values) => {
      try {
        const response = await axios.post('http://localhost:8000/auth/users/', {
          email: email.value,
          password: password.value,
          user_type: userType.value,
          // Add any other required fields that your API expects
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.data) {
          // Assuming response.data contains the user data or a success message
          router.push("/"); // Redirect to home or login page after successful signup
          toast.success("Account created successfully", { timeout: 2000 });
        }
      } catch (error) {
        if (error.response && error.response.data) {
          // Handle specific errors returned from the server
          const errorMsg = error.response.data.email ? "Email already exists" : "Signup failed";
          swal.fire({
            title: errorMsg,
            text: "Please try another email",
            icon: "error",
            confirmButtonText: "Ok",
          });
        } else {
          // General error handling
          toast.error("Signup failed", { timeout: 2000 });
        }
      }
    });

    return {
      email,
      emailError,
      userType,
      userTypeError,
      checkbox,
      checkboxError,
      password,
      passwordError,
      onSubmit,
    };
  },
};
</script>

<style lang="scss"></style>
