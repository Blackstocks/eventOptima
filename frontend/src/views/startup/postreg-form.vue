<template>
  
  <div>
      <form @submit.prevent="submit" class=" flex flex-col gap-4">
        <Card class="content-box mt-14 border-t border-slate-100 dark:border-slate-700 p-6 mx-4 rounded-md bg-white dark:bg-slate-800">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-1">
                <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
                  Basic Details
                </h4>
            </div>
            <Textinput label="Full Name" type="text" placeholder="Full Name" v-model="fullName" :error="fullNameError" />
            <Textinput label="Phone" type="text" placeholder="Phone" v-model="phone" :error="phoneError" />
            <Select label="Gender" placeholder="Select your Gender" v-model="gender" :error="genderError" :options="genderOptions" />
            <Textinput label="LinkedIn Profile" type="text" placeholder="LinkedIn Profile URL" v-model="linkedinId" :error="linkedinIdError" />
            <Select label="Alumn of IIT Kharagpur" placeholder="Select an option" v-model="alumn" :error="alumnError" :options="alumnOptions" />
            <Textinput label="Cofounder Name" type="text" placeholder="Cofounder Name" v-model="cofounderName" :error="cofounderNameError" />
            <Textinput label="Cofounder Phone" type="text" placeholder="Cofounder Phone" v-model="cofounderPhone" :error="cofounderPhoneError" />
            <Textinput label="Cofounder Email" type="text" placeholder="Cofounder Email" v-model="cofounderEmail" :error="cofounderEmailError" />
            <Textinput label="Address (City)" type="text" placeholder="City" v-model="city" :error="cityError" />
            <Select label="State" placeholder="State" v-model="state" :error="stateError" :options="stateOptions" />
            <Select label="Country" placeholder="Country" v-model="country" :error="countryError" :options="countryOptions" />
          </div>
        </Card>

        <Card class="content-box mt-14 border-t border-slate-100 dark:border-slate-700 p-6 mx-4 rounded-md bg-white dark:bg-slate-800">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-1">
                <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
                  Startup Details
                </h4>
            </div>
            <Textinput label="Startup Name" type="text" placeholder="Startup Name" v-model="startup" :error="startupError" />
            <Select label="Startup Stage?" placeholder="Stage of your Startup" v-model="startupStage" :error="startupStageError" :options="startupStageOptions" />
            <Textinput label="Startup Funding" type="text" placeholder="Startup Funding" v-model="fundingStartup" :error="fundingStartupError" />
            <Select label="Company Type" placeholder="Your company type" v-model="companyType" :error="companyTypeError" :options="companyTypeOptions" />
            <Select label="Company Size" placeholder="Select company size" v-model="companySize" :error="companySizeError" :options="companySizeOptions" />
            <Textarea label="Startup Description" type="text" placeholder="Describe your startup" v-model="desc" :error="descError" />
            <Textinput label="Website Link" type="text" placeholder="Startup Website" v-model="website" :error="websiteError" />
          </div>
        </Card>

        <Card class="content-box mt-14 border-t border-slate-100 dark:border-slate-700 p-6 mx-4 rounded-md bg-white dark:bg-slate-800">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-1">
                <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
                  Additional Information
                </h4>
            </div>
            <Select label="Interested in Startup Expo?" placeholder="Yes/No" v-model="startupExpo" :error="startupExpoError" :options="startupExpoOptions" />
            <Select label="Interns Requirement?" placeholder="Yes/No" v-model="interns" :error="internsError" :options="internsOptions" />
            <Textarea label="Achievements" type="text" placeholder="Describe your startup's achievements" v-model="achieve" :error="achieveError" />
            <Textarea label="Areas of Help" type="text" placeholder="Looking for help in any areas?" v-model="help" :error="helpError" />
          </div>
        </Card>

        <div class="my-2" :class="stepNumber > 0 ? 'flex justify-between' : 'text-right'">
          <Button :text="'submit'" btnClass="btn-dark" />
        </div>
      </form>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Textinput from "@/components/Textinput";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import Card from "@/components/Card";
import { useField, useForm } from "vee-validate";
import { computed, ref } from "vue";
import { useToast } from "vue-toastification";
import * as yup from "yup";
import axios from 'axios';

export default {
  components: {
    Button,
    Textinput,
    Textarea,
    Select,
    Card,
  },

  setup() {
    const toast = useToast();
    const steps = [
      { id: 1, title: "Basic Information" },
      { id: 2, title: "Startup Details" },
      { id: 3, title: "Additional Information" },
    ];

    let stepNumber = ref(0);

    // Validation Schemas
    let formSchema = yup.object().shape({
      fullName: yup.string().required("Full name is required"),
      phone: yup.string().required("Phone number is required").matches(/^[0-9]+$/, "Phone number must be numeric"),
      gender: yup.string().required("Gender is required"),
      linkedinId: yup.string().required("LinkedIn profile is required").url("LinkedIn profile must be a valid URL"),
      alumn: yup.string().required("Alumn of IIT Kharagpur selection is required"),
      cofounderName: yup.string(), // Include validation as required
      cofounderPhone: yup.string().matches(/^[0-9]+$/, "Phone number must be numeric"),
      cofounderEmail: yup.string().email("Email must be a valid email"),
      city: yup.string().required("City is required"),
      state: yup.string().required("State is required"),
      country: yup.string().required("Country is required"),
      startup: yup.string().required("Startup name is required"),
      startupStage: yup.string().required("Startup stage is required"),
      fundingStartup: yup.string().required("Startup stage is required"),
      companyType: yup.string().required("Company type is required"),
      companySize: yup.string().required("Company size is required"),
      desc: yup.string().required("Startup description is required"),
      website: yup.string().url("Website must be a valid URL"),
      startupExpo: yup.string().required("Interested in Startup Expo? is required"),
      interns: yup.string().required("Interns Requirement? is required"),
      achieve: yup.string(), // Include validation as required
      help: yup.string(), // Include validation as required
    });

    const { handleSubmit } = useForm({
      validationSchema: formSchema,
      keepValuesOnUnmount: true,
    });

    // Define useField for all fields in all steps
    const { value: fullName, errorMessage: fullNameError } = useField("fullName");
    const { value: phone, errorMessage: phoneError } = useField("phone");
    const { value: gender, errorMessage: genderError } = useField("gender");
    const { value: linkedinId, errorMessage: linkedinIdError } = useField("linkedinId");
    const { value: alumn, errorMessage: alumnError } = useField("alumn");
    const { value: cofounderName, errorMessage: cofounderNameError } = useField("cofounderName");
    const { value: cofounderPhone, errorMessage: cofounderPhoneError } = useField("cofounderPhone");
    const { value: cofounderEmail, errorMessage: cofounderEmailError } = useField("cofounderEmail");
    const { value: city, errorMessage: cityError } = useField("city");
    const { value: state, errorMessage: stateError } = useField("state");
    const { value: country, errorMessage: countryError } = useField("country");
    const { value: startup, errorMessage: startupError } = useField("startup");
    const { value: startupStage, errorMessage: startupStageError } = useField("startupStage");
    const { value: fundingStartup, errorMessage: fundingStartupError } = useField("fundingStartup");
    const { value: companyType, errorMessage: companyTypeError } = useField("companyType");
    const { value: desc, errorMessage: descError } = useField("desc");
    const { value: website, errorMessage: websiteError } = useField("website");
    const { value: startupExpo, errorMessage: startupExpoError } = useField("startupExpo");
    const { value: interns, errorMessage: internsError } = useField("interns");
    const { value: achieve, errorMessage: achieveError } = useField("achieve");
    const { value: help, errorMessage: helpError } = useField("help");
    const { value: companySize, errorMessage: companySizeError } = useField("companySize");

    // Options for select fields
    const alumnOptions = ref([
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ]);

    const genderOptions = ref([
        {
          value: "Male",
          label: "Male"
        },
        {
          value: "Female",
          label: "Female"
        },
        {
          value: "Others",
          label: "Others"
        },
        {
          value: "Prefer not say",
          label: "Prefer not say"
        },
      ]);

    const stateOptions = ref([
        { value: "Andhra Pradesh", label: "Andhra Pradesh" },
        { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
        { value: "Assam", label: "Assam" },
        { value: "Bihar", label: "Bihar" },
        { value: "Chhattisgarh", label: "Chhattisgarh" },
        { value: "Goa", label: "Goa" },
        { value: "Gujarat", label: "Gujarat" },
        { value: "Haryana", label: "Haryana" },
        { value: "Himachal Pradesh", label: "Himachal Pradesh" },
        { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
        { value: "Jharkhand", label: "Jharkhand" },
        { value: "Karnataka", label: "Karnataka" },
        { value: "Kerala", label: "Kerala" },
        { value: "Madhya Pradesh", label: "Madhya Pradesh" },
        { value: "Maharashtra", label: "Maharashtra" },
        { value: "Manipur", label: "Manipur" },
        { value: "Meghalaya", label: "Meghalaya" },
        { value: "Mizoram", label: "Mizoram" },
        { value: "Nagaland", label: "Nagaland" },
        { value: "Odisha", label: "Odisha" },
        { value: "Punjab", label: "Punjab" },
        { value: "Rajasthan", label: "Rajasthan" },
        { value: "Sikkim", label: "Sikkim" },
        { value: "Tamil Nadu", label: "Tamil Nadu" },
        { value: "Telangana", label: "Telangana" },
        { value: "Tripura", label: "Tripura" },
        { value: "Uttarakhand", label: "Uttarakhand" },
        { value: "Uttar Pradesh", label: "Uttar Pradesh" },
        { value: "West Bengal", label: "West Bengal" },
        { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
        { value: "Chandigarh", label: "Chandigarh" },
        { value: "Dadra and Nagar Haveli", label: "Dadra and Nagar Haveli" },
        { value: "Daman and Diu", label: "Daman and Diu" },
        { value: "Delhi", label: "Delhi" },
        { value: "Lakshadweep", label: "Lakshadweep" },
        { value: "Puducherry", label: "Puducherry" },
      ]);

    const countryOptions = ref([
        {
          value: "India",
          label: "India"
        },
        {
          value: "Sri Lanka",
          label: "Sri Lanka"
        },
        {
          value: "Nepal",
          label: "Nepal"
        },
        {
          value: "USA",
          label: "USA"
        },
        {
          value: "UK",
          label: "UK"
        },
        {
          value: "Australia",
          label: "Australia"
        },
        {
          value: "Canada",
          label: "Canada"
        },
      ]);

    const startupStageOptions = ref([
      { value: "idea", label: "Idea" },
      { value: "concept", label: "Concept" },
      { value: "pre_seed", label: "Pre-Seed" },
      { value: "seed", label: "Seed" },
      { value: "early_stage", label: "Early Stage" },
      { value: "growth", label: "Growth" },
      { value: "expansion", label: "Expansion" },
      { value: "mature", label: "Mature" },
      { value: "exit", label: "Exit" },
    ]);

    const companyTypeOptions = ref([
      { value: "private", label: "Private Limited" },
      { value: "public", label: "Public Limited" },
      { value: "partnership", label: "Partnership" },
      { value: "sole_proprietorship", label: "Sole Proprietorship" },
      { value: "llc", label: "Limited Liability Company (LLC)" },
      { value: "nonprofit", label: "Nonprofit" },
      { value: "cooperative", label: "Cooperative" },
      { value: "other", label: "Other" },
    ]);

    const companySizeOptions = ref([
      { value: "1-10", label: "1-10 employees" },
      { value: "11-50", label: "11-50 employees" },
      { value: "51-200", label: "51-200 employees" },
      { value: "201-500", label: "201-500 employees" },
      { value: "501-1000", label: "501-1000 employees" },
      { value: "1001-5000", label: "1001-5000 employees" },
      { value: "5001-10000", label: "5001-10000 employees" },
      { value: "10001+", label: "10001+ employees" },
    ]);

    const startupExpoOptions = ref([
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ]);

    const internsOptions = ref([
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ]);

    const submit = handleSubmit(async() => {
      
      const formData = {
        full_name: fullName.value,
        phone: phone.value,
        gender: gender.value,
        linkedin_id: linkedinId.value,
        alumn_of_iit_kharagpur: alumn.value,
        co_founder_name: cofounderName.value,
        co_founder_phone: cofounderPhone.value,
        co_founder_email: cofounderEmail.value,
        address: city.value,
        state: state.value,
        country: country.value,

        startup_name: startup.value,
        startup_stage: startupStage.value,
        startup_fund: fundingStartup.value,
        company_type: companyType.value,
        company_size: companySize.value,
        startup_description: desc.value,
        website_link: website.value,
        
        interested_in_expo: startupExpo.value,
        intern_requirement: interns.value,
        achievements: achieve.value,
        area_of_help: help.value,
      };

      console.log(formData);

      const accessToken = localStorage.getItem('accessToken');

      const user = JSON.parse(localStorage.getItem('user'));

      try {
        const response = await axios.post('https://api-ges.ecell-iitkgp.org/startup/registration', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${accessToken}`,
              }, user, formData
            });

        toast.success("Form Submitted", { timeout: 2000 });
        window.location.href = "/startup/home";

        // Handle successful response
      } catch (error) {
        toast.error("Failed to submit form", { timeout: 2000 });
        // Handle errors (e.g., display error message)
      }

    });

    return {
      fullName,
      fullNameError,
      phone,
      phoneError,
      gender,
      genderError,
      genderOptions,
      linkedinId,
      linkedinIdError,
      alumn,
      alumnError,
      alumnOptions,
      cofounderName,
      cofounderNameError,
      cofounderPhone,
      cofounderPhoneError,
      cofounderEmail,
      cofounderEmailError,
      city,
      cityError,
      state,
      stateError,
      stateOptions,
      country,
      countryError,
      countryOptions,
      startup,
      startupError,
      startupStage,
      startupStageError,
      startupStageOptions,
      fundingStartup,
      fundingStartupError,
      companyType,
      companyTypeError,
      companyTypeOptions,
      companySize,
      companySizeError,
      companySizeOptions,
      desc,
      descError,
      website,
      websiteError,
      startupExpo,
      startupExpoError,
      startupExpoOptions,
      interns,
      internsError,
      internsOptions,
      achieve,
      achieveError,
      help,
      helpError,
      submit,
      steps,
      stepNumber
    };
  },
};
</script>


<style lang="scss" scoped></style>
