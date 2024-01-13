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
            <Textinput label="College Name" type="text" placeholder="College Name" v-model="collegeName" :error="collegeNameError" />
            <Select label="Year of Study" placeholder="Year of Study" v-model="yearOfStudy" :error="yearOfStudyError" :options="yearOfStudyOptions" />
            <Select label="Graduating Year" placeholder="Passing Year" v-model="passingYear" :error="passingYearError" :options="passingYearOptions" />
            <Select label="T-Shirt Size" placeholder="Select your size" v-model="tshirtSize" :error="tshirtSizeError" :options="tshirtSizeOptions" />
            <!-- <Select label="Want to become a Campus Ambassador?" placeholder="Select your Gender" v-model="ca" :error="caError" :options="caOptions" /> -->
            <Textinput label="Address (City)" type="text" placeholder="City" v-model="city" :error="cityError" />
            <Select label="State" placeholder="State" v-model="state" :error="stateError" :options="stateOptions" />
            <Select label="Country" placeholder="Country" v-model="country" :error="countryError" :options="countryOptions" />
          </div>
        </Card>

        <Card class="content-box mt-14 border-t border-slate-100 dark:border-slate-700 p-6 mx-4 rounded-md bg-white dark:bg-slate-800">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-2">
                <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
                  Career Details
                </h4>
            </div>
            
            <Select label="Want to participate Internship Drive?" placeholder="Yes/No" v-model="internshipDrive" :error="internshipDriveError" :options="internshipDriveOptions" />

            <!-- Only show the following fields if internshipDrive is 'Yes' -->
            <div v-if="isInternshipDriveYes" class=" w-full col-span-2 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              <Select label="Intern Profile" placeholder="Intern Profile" v-model="internProfile" :error="internProfileError" :options="internProfileOptions" />
              <Textinput label="Mention your Skills" type="text" placeholder="Separate them by ','" v-model="skills" :error="skillsError" />
              <Select label="Experience / Expertise" placeholder="Experience / Expertise" v-model="experience" :error="experienceError" :options="experienceOptions" />
              <Select label="Interest Choice" placeholder="Interest Choice" v-model="interestChoice" :error="interestChoiceError" :options="interestChoiceOptions" />
              <Select label="Industry Choice" placeholder="Industry Choice" v-model="industryChoice" :error="industryChoiceError" :options="industryChoiceOptions" />
            </div>

            
          </div>
        </Card>

        <Card class="content-box mt-14 border-t border-slate-100 dark:border-slate-700 p-6 mx-4 rounded-md bg-white dark:bg-slate-800">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-1">
                <h4 class="text-base text-slate-800 dark:text-slate-300 mb-6">
                  Additional Information
                </h4>
            </div>
            <Select label="Have a Startup?" placeholder="Yes/No" v-model="startup" :error="startupError" :options="startupOptions" />
            
            <Select label="Startup Stage? (If exists)" placeholder="Stage of your Startup" v-model="startupStage" :error="startupStageError" :options="startupStageOptions" />
            <!-- <Textinput label="Favourite Startup" type="text" placeholder="Favourite Startup" v-model="favouriteStartup" :error="favouriteStartupError" /> -->
            <!-- <Textinput label="Inspiration" type="text" placeholder="Inspiration" v-model="inspiration" :error="inspirationError" /> -->
            <Textinput label="LinkedIn Profile (Optional)" type="text" placeholder="LinkedIn Profile URL" v-model="linkedinId" :error="linkedinIdError" />
            <!-- <Textinput label="Event" type="text" placeholder="Event" v-model="event" :error="eventError" /> -->
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
    Select,
    Card,
  },

  setup() {
    const toast = useToast();
    const steps = [
      { id: 1, title: "Basic Information" },
      { id: 2, title: "Internship Preferences" },
      { id: 3, title: "Additional Information" },
    ];

    let stepNumber = ref(0);

    // Validation Schemas
    let formSchema = yup.object().shape({
      fullName: yup.string().required("Full name is required"),
      phone: yup.string().required("Phone number is required").matches(/^[0-9]+$/, "Phone number must be numeric"),
      gender: yup.string().required("Gender is required"),
      collegeName: yup.string().required("College name is required"),
      yearOfStudy: yup.string().required("Year of study is required"),
      passingYear: yup.number().required("Passing year is required"),
      // ca: yup.string().required("CA is required"),
      city: yup.string().required("City is required"),
      state: yup.string().required("State is required"),
      country: yup.string().required("Country is required"),
      internshipDrive: yup.string().required("Internship drive participation is required"),
      internProfile: yup.string(),
      skills: yup.string(),
      experience: yup.string(),
      interestChoice: yup.string(),
      industryChoice: yup.string(),
      startup: yup.string().required("Startup is required"),
      startupStage: yup.string(),
      favouriteStartup: yup.string(),
      inspiration: yup.string(),
      linkedinId: yup.string().url("LinkedIn ID must be a valid URL"),
      event: yup.string(),
      tshirtSize: yup.string().required("T-shirt size is required"),
    });

    const { handleSubmit } = useForm({
      validationSchema: formSchema,
      keepValuesOnUnmount: true,
    });

    // Define useField for all fields in all steps
    const { value: fullName, errorMessage: fullNameError } = useField("fullName");
    const { value: phone, errorMessage: phoneError } = useField("phone");
    const { value: gender, errorMessage: genderError } = useField("gender");
    const { value: collegeName, errorMessage: collegeNameError } = useField("collegeName");
    const { value: yearOfStudy, errorMessage: yearOfStudyError } = useField("yearOfStudy");
    const { value: passingYear, errorMessage: passingYearError } = useField("passingYear");
    // const { value: ca, errorMessage: caError } = useField("ca");
    const { value: city, errorMessage: cityError } = useField("city");
    const { value: state, errorMessage: stateError } = useField("state");
    const { value: country, errorMessage: countryError } = useField("country");
    const { value: internshipDrive, errorMessage: internshipDriveError } = useField("internshipDrive");
    const { value: internProfile, errorMessage: internProfileError } = useField("internProfile");
    const { value: skills, errorMessage: skillsError } = useField("skills");
    const { value: experience, errorMessage: experienceError } = useField("experience");
    const { value: interestChoice, errorMessage: interestChoiceError } = useField("interestChoice");
    const { value: industryChoice, errorMessage: industryChoiceError } = useField("industryChoice");
    const { value: startup, errorMessage: startupError } = useField("startup");
    const { value: startupStage, errorMessage: startupStageError } = useField("startupStage");
    const { value: favouriteStartup, errorMessage: favouriteStartupError } = useField("favouriteStartup");
    const { value: inspiration, errorMessage: inspirationError } = useField("inspiration");
    const { value: linkedinId, errorMessage: linkedinIdError } = useField("linkedinId");
    const { value: event, errorMessage: eventError } = useField("event");
    const { value: tshirtSize, errorMessage: tshirtSizeError } = useField("tshirtSize");

    const isInternshipDriveYes = computed(() => {
        return internshipDrive.value === 'Yes';
      });

    const submit = handleSubmit(async() => {
      const formData = {
        full_name: fullName.value,
        phone: phone.value,
        gender: gender.value,
        college_name: collegeName.value,
        year_of_study: yearOfStudy.value,
        passing_year: passingYear.value,
        // campus_ambassador: ca.value,
        address: city.value,
        state: state.value,
        country: country.value,
        want_internship: internshipDrive.value,
        intern_profile: internProfile.value,
        skills: skills.value,
        experience_expertise: experience.value,
        interest_choice: interestChoice.value,
        industry_choice: industryChoice.value,
        have_startup: startup.value,
        startup_stage: startupStage.value,
        // favourite_startup: favouriteStartup.value,
        // inspiration: inspiration.value,
        linkedin_id: linkedinId.value,
        // event: event.value,
        tshirt: tshirtSize.value,
      };

      const accessToken = localStorage.getItem('accessToken');

      const user = JSON.parse(localStorage.getItem('user'));

      try {
        const response = await axios.post('https://api-ges.ecell-iitkgp.org/student/registration', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${accessToken}`,
              }, user, formData
            });

        toast.success("Form Submitted", { timeout: 2000 });

        window.location.href = "/student/home";

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
      genderOptions : [
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
      ],
      collegeName,
      collegeNameError,
      yearOfStudy,
      yearOfStudyError,
      yearOfStudyOptions : [
        {
          value: "1st Year",
          label: "1st Year"
        },
        {
          value: "2nd Year",
          label: "2nd Year"
        },
        {
          value: "3rd Year",
          label: "3rd Year"
        },
        {
          value: "4th Year",
          label: "4th Year"
        },
        {
          value: "5th Year",
          label: "5th Year"
        },
      ],
      passingYear,
      passingYearError,
      passingYearOptions : [
        {
          value: "2023",
          label: "2023"
        },
        {
          value: "2024",
          label: "2024"
        },
        {
          value: "2025",
          label: "2025"
        },
        {
          value: "2026",
          label: "2026"
        },
        {
          value: "2027",
          label: "2027"
        },
      ],
      // ca,
      // caError,
      // caOptions : [
      //   {
      //     value: "Yes",
      //     label: "Yes"
      //   },
      //   {
      //     value: "No",
      //     label: "No"
      //   },
      // ],
      city,
      cityError,
      state,
      stateError,
      stateOptions:[
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
      ],
      country,
      countryError,
      countryOptions : [
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
      ],
      internshipDrive,
      internshipDriveError,
      internshipDriveOptions : [
        {
          value: "Yes",
          label: "Yes"
        },
        {
          value: "No",
          label: "No"
        },
      ],
      internProfile,
      internProfileError,
      internProfileOptions: [
        { value: "Software development", label: "Software development" },
        { value: "Product management", label: "Product management" },
        { value: "Investment Research", label: "Investment Research" },
        { value: "Business analyst", label: "Business analyst" },
        { value: "Data Analysis", label: "Data Analysis" },
        { value: "ML", label: "ML" },
        { value: "Android App Development", label: "Android App Development" },
        { value: "Web Development", label: "Web Development" },
        { value: "Sales and Marketing", label: "Sales and Marketing" },
        { value: "Business development", label: "Business development" },
        { value: "Content creation", label: "Content creation" },
        { value: "Social Media Marketing", label: "Social Media Marketing" },
        { value: "Research & Development", label: "Research & Development" },
        { value: "Finance", label: "Finance" },
        { value: "Operations", label: "Operations" },
        { value: "Back End development", label: "Back End development" },
        { value: "Design", label: "Design" },
        { value: "Supply Chain Management", label: "Supply Chain Management" },
        { value: "Front End development", label: "Front End development" },
        { value: "UI/UX Development", label: "UI/UX Development" },
      ],
      skills,
      skillsError,
      experience,
      experienceError,
      experienceOptions: [
        { value: "Web Development", label: "Web Development" },
        { value: "Android/iOS Development", label: "Android/iOS Development" },
        { value: "Designer", label: "Designer" },
        { value: "IOT", label: "IOT" },
        { value: "Marketing", label: "Marketing" },
        { value: "Operations", label: "Operations" },
        { value: "Product Management", label: "Product Management" },
        { value: "Business Development", label: "Business Development" },
        { value: "Sales", label: "Sales" },
      ],
      interestChoice,
      interestChoiceError,
      interestChoiceOptions: [
        { value: "Product", label: "Product" },
        { value: "Finance", label: "Finance" },
        { value: "Technology", label: "Technology" },
        { value: "Marketing", label: "Marketing" },
        { value: "Metaverse", label: "Metaverse" },
        { value: "Web3", label: "Web3" },
      ],
      industryChoice,
      industryChoiceError,
      industryChoiceOptions: [
        { value: "Agriculture", label: "Agriculture" },
        { value: "AR/VR", label: "AR/VR" },
        { value: "AI", label: "AI" },
        { value: "Automotive", label: "Automotive" },
        { value: "Aviation", label: "Aviation" },
        { value: "Biotech", label: "Biotech" },
        { value: "Blockchain", label: "Blockchain" },
        { value: "Clean Technology", label: "Clean Technology" },
        { value: "Consulting", label: "Consulting" },
        { value: "Consumer Goods", label: "Consumer Goods" },
        { value: "Cryptocurrency", label: "Cryptocurrency" },
        { value: "Cybersecurity", label: "Cybersecurity" },
        { value: "Design/Graphics", label: "Design/Graphics" },
        { value: "Digital Marketing", label: "Digital Marketing" },
        { value: "e-Commerce", label: "e-Commerce" },
        { value: "Education", label: "Education" },
        { value: "Entertainment/Gaming", label: "Entertainment/Gaming" },
        { value: "Events", label: "Events" },
        { value: "Fashion", label: "Fashion" },
        { value: "Fintech/Finance", label: "Fintech/Finance" },
        { value: "Food/Beverage", label: "Food/Beverage" },
        { value: "Hardware/IoT", label: "Hardware/IoT" },
        { value: "Wellness and Fitness", label: "Wellness and Fitness" },
        { value: "Health Care", label: "Health Care" },
        { value: "Hospitality", label: "Hospitality" },
        { value: "Human Resources", label: "Human Resources" },
        { value: "IT/Services", label: "IT/Services" },
        { value: "Law/Legal", label: "Law/Legal" },
        { value: "Logistics/Supply Chain", label: "Logistics/Supply Chain" },
        { value: "Manufacturing/Industrial", label: "Manufacturing/Industrial" },
        { value: "Marketing/Advertising/Sales", label: "Marketing/Advertising/Sales" },
        { value: "Media", label: "Media" },
        { value: "Nanotechnology", label: "Nanotechnology" },
        { value: "Nonprofits", label: "Nonprofits" },
        { value: "Oil/Energy", label: "Oil/Energy" },
        { value: "Pharmaceuticals", label: "Pharmaceuticals" },
        { value: "Real Estate/Construction", label: "Real Estate/Construction" },
        { value: "Restaurants", label: "Restaurants" },
        { value: "Retail", label: "Retail" },
        { value: "SaaS", label: "SaaS" },
        { value: "Services", label: "Services" },
        { value: "Sports", label: "Sports" },
        { value: "Telecommunication", label: "Telecommunication" },
        { value: "Transport/Mobility", label: "Transport/Mobility" },
        { value: "Technology", label: "Technology" },
        { value: "Travel", label: "Travel" },
        { value: "User Experience Design", label: "User Experience Design" },
        { value: "Venture for Goods", label: "Venture for Goods" },
      ],
      startup,
      startupError,
      startupStage,
      startupOptions:[
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      startupStageError,
      startupStageOptions:[
        { value: "Idea", label: "Idea" },
        { value: "Concept", label: "Concept" },
        { value: "Prototype", label: "Prototype" },
        { value: "Proof Concept", label: "Proof Concept" },
        { value: "Pilot", label: "Pilot" },
        { value: "Operational(<1year)", label: "Operational(<1year)" },
        { value: "Operational(>1year)", label: "Operational(>1year)" },
        { value: "Other", label: "Other" },
      ],
      favouriteStartup,
      favouriteStartupError,
      inspiration,
      inspirationError,
      linkedinId,
      linkedinIdError,
      event,
      eventError,
      tshirtSize,
      tshirtSizeError,
      tshirtSizeOptions: [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
        { value: "XL", label: "XL" },
        { value: "XXL", label: "XXL" },
      ],
      submit,
      steps,
      stepNumber,
      isInternshipDriveYes,
    };
  },
};
</script>


<style lang="scss" scoped></style>
