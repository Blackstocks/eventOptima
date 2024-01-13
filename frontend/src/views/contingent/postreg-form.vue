<template>
  
  <div>
      <form @submit.prevent="submit" class=" flex flex-col gap-4">
        <Card class="content-box mt-14 border-t border-slate-100 dark:border-slate-700 p-6 mx-4 rounded-md bg-white dark:bg-slate-800">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div class="lg:col-span-3 md:col-span-2 col-span-1">
            <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
              Basic Information
            </h4>
          </div>
          <Textinput label="Full Name" type="text" placeholder="Full Name" v-model="fullName" :error="fullNameError" />
          <Textinput label="Phone" type="text" placeholder="Phone" v-model="phone" :error="phoneError" />
          <Select label="Gender" placeholder="Select your Gender" v-model="gender" :error="genderError" :options="genderOptions" />
          <Textinput label="Address (City)" type="text" placeholder="Address" v-model="address" :error="addressError" />
          <Select label="State" placeholder="Select State" v-model="state" :error="stateError" :options="stateOptions" />
          <Select label="Country" placeholder="Select Country" v-model="country" :error="countryError" :options="countryOptions" />
          <Textinput label="Organization" type="text" placeholder="Organization" v-model="organization" :error="organizationError" />
          <Select label="Professional Level" placeholder="Select Professional Level" v-model="professionalLevel" :error="professionalLevelError" :options="professionalLevelOptions" />
          <Select label="Industry" placeholder="Select Industry" v-model="industry" :error="industryError" :options="industryOptions" />
          <Textinput label="Job Title" type="text" placeholder="Job Title" v-model="jobTitle" :error="jobTitleError" />
          <Select label="Job Function" placeholder="Select Job Function" v-model="jobFunction" :error="jobFunctionError" :options="jobFunctionOptions" />
          <Select 
            label="Job Type" 
            placeholder="Full Time/Part Time" 
            v-model="fullTimeRoles" 
            :error="fullTimeRolesError" 
            :options="fullTimeRolesOptions" 
          />
          <Textarea label="Area of Help" placeholder="Areas where you seek help" v-model="areaOfHelp" :error="areaOfHelpError" />
          <Textarea label="Expertise" placeholder="Describe your expertise" v-model="expertise" :error="expertiseError" />
          <Textarea label="Past Experience" placeholder="Describe your past experience" v-model="postExperience" :error="postExperienceError" />

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
import Checkbox from "@/components/Checkbox"; // Assuming you have a Checkbox component
import Card from "@/components/Card";
import { useToast } from "vue-toastification";
import { computed, ref } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import axios from 'axios';

export default {
  components: {
    Button,
    Textinput,
    Textarea,
    Select,
    Checkbox,
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
    const formSchema = yup.object({
      fullName: yup.string().required("Full name is required"),
      phone: yup.string().required("Phone number is required").matches(/^[0-9]+$/, "Phone number must be numeric"),
      gender: yup.string().required("Gender is required"),
      address: yup.string().required("Address is required"),
      state: yup.string().required("State is required"),
      country: yup.string().required("Country is required"),
      professionalLevel: yup.string().required("Professional Level is required"),
      organization: yup.string().required("Organization is required"),
      jobFunction: yup.string().required("Job Function is required"),
      industry: yup.string().required("Industry is required"),
      jobTitle: yup.string().required("Job Title is required"),
      areaOfHelp: yup.string(),
      expertise: yup.string(),
      postExperience: yup.string(),
      fullTimeRoles: yup.string().required("This field is required"),
    });

    const { handleSubmit } = useForm({
      validationSchema: formSchema,
      keepValuesOnUnmount: true,
    });

    // Define useField for all fields in all steps
    const { value: fullName, errorMessage: fullNameError } = useField('fullName');
    const { value: phone, errorMessage: phoneError } = useField('phone');
    const { value: gender, errorMessage: genderError } = useField('gender');
    const { value: address, errorMessage: addressError } = useField('address');
    const { value: state, errorMessage: stateError } = useField('state');
    const { value: country, errorMessage: countryError } = useField('country');
    const { value: organization, errorMessage: organizationError } = useField('organization');
    const { value: professionalLevel, errorMessage: professionalLevelError } = useField('professionalLevel');
    const { value: jobFunction, errorMessage: jobFunctionError } = useField('jobFunction');
    const { value: industry, errorMessage: industryError } = useField('industry');
    const { value: jobTitle, errorMessage: jobTitleError } = useField('jobTitle');
    const { value: areaOfHelp, errorMessage: areaOfHelpError } = useField('areaOfHelp');
    const { value: expertise, errorMessage: expertiseError } = useField('expertise');
    const { value: postExperience, errorMessage: postExperienceError } = useField('postExperience');
    const { value: fullTimeRoles, errorMessage: fullTimeRolesError } = useField('fullTimeRoles');

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

      const professionalLevelOptions = ref([
        { value: 'Entry', label: 'Entry Level' },
        { value: 'Mid', label: 'Mid Level' },
        { value: 'Senior', label: 'Senior Level' },
        { value: 'Executive', label: 'Executive Level' },
      ]);

    const fullTimeRolesOptions = ref([
      { value: "Full Time", label: "Full Time" },
      { value: "Part Time", label: "Part Time" },
    ]);

    const industryOptions = ref([
      { value: 'Agriculture', label: 'Agriculture' },
      { value: 'AR/VR', label: 'AR/VR' },
      { value: 'AI', label: 'AI' },
      { value: 'Automotive', label: 'Automotive' },
      { value: 'Aviation', label: 'Aviation' },
      { value: 'Biotech', label: 'Biotech' },
      { value: 'Blockchain', label: 'Blockchain' },
      { value: 'CleanTechnology', label: 'Clean Technology' },
      { value: 'Consulting', label: 'Consulting' },
      { value: 'ConsumerGoods', label: 'Consumer Goods' },
      { value: 'Cryptocurrency', label: 'Cryptocurrency' },
      { value: 'Cybersecurity', label: 'Cybersecurity' },
      { value: 'DesignGraphics', label: 'Design/Graphics' },
      { value: 'DigitalMarketing', label: 'Digital Marketing' },
      { value: 'eCommerce', label: 'e-Commerce' },
      { value: 'Education', label: 'Education' },
      { value: 'EntertainmentGaming', label: 'Entertainment/Gaming' },
      { value: 'Events', label: 'Events' },
      { value: 'Fashion', label: 'Fashion' },
      { value: 'FintechFinance', label: 'Fintech/Finance' },
      { value: 'FoodBeverage', label: 'Food/Beverage' },
      { value: 'HardwareIoT', label: 'Hardware/IoT' },
      { value: 'WellnessFitness', label: 'Wellness and Fitness' },
      { value: 'HealthCare', label: 'Health Care' },
      { value: 'Hospitality', label: 'Hospitality' },
      { value: 'HumanResources', label: 'Human Resources' },
      { value: 'ITServices', label: 'IT/Services' },
      { value: 'LawLegal', label: 'Law/Legal' },
      { value: 'LogisticsSupplyChain', label: 'Logistics/Supply Chain' },
      { value: 'ManufacturingIndustrial', label: 'Manufacturing/Industrial' },
      { value: 'MarketingAdvertisingSales', label: 'Marketing/Advertising/Sales' },
      { value: 'Media', label: 'Media' },
      { value: 'Nanotechnology', label: 'Nanotechnology' },
      { value: 'Nonprofits', label: 'Nonprofits' },
      { value: 'OilEnergy', label: 'Oil/Energy' },
      { value: 'Pharmaceuticals', label: 'Pharmaceuticals' },
      { value: 'RealEstateConstruction', label: 'Real Estate/Construction' },
      { value: 'Restaurants', label: 'Restaurants' },
      { value: 'Retail', label: 'Retail' },
      { value: 'SaaS', label: 'SaaS' },
      { value: 'Services', label: 'Services' },
      { value: 'Sports', label: 'Sports' },
      { value: 'Telecommunication', label: 'Telecommunication' },
      { value: 'TransportMobility', label: 'Transport/Mobility' },
      { value: 'Technology', label: 'Technology' },
      { value: 'Travel', label: 'Travel' },
      { value: 'UserExperienceDesign', label: 'User Experience Design' },
      { value: 'VentureForGoods', label: 'Venture for Goods' },
    ]);

    const jobFunctionOptions = ref([
      { value: 'IT', label: 'Information Technology' },
      { value: 'HR', label: 'Human Resources' },
      // Add other job functions as needed
      // Example additional job functions
      { value: 'Marketing', label: 'Marketing' },
      { value: 'Sales', label: 'Sales' },
      { value: 'Engineering', label: 'Engineering' },
      { value: 'Operations', label: 'Operations' },
      { value: 'Finance', label: 'Finance' },
      { value: 'CustomerService', label: 'Customer Service' },
      { value: 'ResearchDevelopment', label: 'Research & Development' },
      { value: 'Administrative', label: 'Administrative' },
      { value: 'BusinessDevelopment', label: 'Business Development' },
      { value: 'ProductManagement', label: 'Product Management' },
      { value: 'Legal', label: 'Legal' },
      { value: 'Education', label: 'Education' },
      { value: 'MediaCommunications', label: 'Media & Communications' },
      { value: 'ArtDesign', label: 'Art & Design' },
      { value: 'HealthcareServices', label: 'Healthcare Services' },
      { value: 'CommunitySocialServices', label: 'Community & Social Services' },
      { value: 'Entrepreneurship', label: 'Entrepreneurship' },
      { value: 'Others', label: 'Others' },
      // Add additional functions as per your requirements
    ]);


    const submit = handleSubmit(async() => {

      console.log("Submit");
      
      const formData = {
        full_name: fullName.value,
        phone: phone.value,
        gender: gender.value,
        address: address.value,
        state: state.value,
        country: country.value,
        professional_level: professionalLevel.value,
        organization: organization.value,
        job_function: jobFunction.value,
        industry: industry.value,
        job_title: jobTitle.value,
        area_of_help: areaOfHelp.value,
        expertise: expertise.value,
        post_experience: postExperience.value,
        full_time_roles: fullTimeRoles.value
      };

      

      const accessToken = localStorage.getItem('accessToken');

      const user = JSON.parse(localStorage.getItem('user'));

      try {
        const response = await axios.post('https://api-ges.ecell-iitkgp.org/professional/registration', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${accessToken}`,
              }, user, formData
            });

        toast.success("Form Submitted", { timeout: 2000 });
        window.location.href = "/professional/home";

        // Handle successful response
      } catch (error) {
        toast.error("Failed to professional form", { timeout: 2000 });
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
      address,
      addressError,
      state,
      stateError,
      stateOptions,
      country,
      countryError,
      countryOptions,
      professionalLevel,
      professionalLevelError,
      professionalLevelOptions, 
      organization,
      organizationError,
      jobFunction,
      jobFunctionError,
      jobFunctionOptions,
      industry,
      industryError,
      industryOptions,
      jobTitle,
      jobTitleError,
      areaOfHelp,
      areaOfHelpError,
      expertise,
      expertiseError,
      postExperience,
      postExperienceError,
      fullTimeRoles,
      fullTimeRolesError,
      fullTimeRolesOptions,
      submit,
      steps,
      stepNumber
    };
  },
};
</script>


<style lang="scss" scoped></style>
