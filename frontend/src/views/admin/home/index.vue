
import { State } from '@amcharts/amcharts5/.internal/core/util/States';
<template>
    <div>
      <div class="card-auto space-y-5">
        <div class="grid grid-cols-12 gap-5">
          <div class="lg:col-span-12 col-span-12 space-y-5">
            <Card>
              <div class="grid grid-cols-12 gap-5">
                <div class="xl:col-span-12 col-span-12">
                  <!-- statitces start -->
                  <div
                    class="grid md:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-3"
                  >
                    <div
                      v-for="(item, i) in statistics"
                      :key="i"
                      :class="item.bg"
                      class="rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-50 text-center"
                    >
                      <div
                        class="mx-auto h-10 w-10 flex flex-col items-center justify-center rounded-full bg-white text-2xl mb-4"
                        :class="item.text"
                      >
                        <Icon :icon="item.icon" />
                      </div>
                      <span
                        class="block text-sm text-slate-600 font-medium dark:text-white mb-1"
                        >{{ item.title }}</span
                      >
                      <span
                        class="block mb- text-2xl text-slate-900 dark:text-white font-medium"
                        >{{ item.count }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <header class="md:flex md:space-y-0 space-y-4">
                <h6 class="flex-1 text-slate-900 dark:text-white capitalize">
                  Registrations by State
                </h6>
              </header>

              <div class="legend-ring">
                <apexchart
                  type="bar"
                  height="410"
                  :options="
                    this.$store.themeSettingsStore.isDark
                      ? stackedDark.chartOptions
                      : stacked.chartOptions
                  "
                  :series="stacked.series"
                />
              </div>
            </Card>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-5">
          <div class="xl:col-span-4 lg:col-span-5 col-span-12">
            <div class="lg:col-span-4 col-span-12 space-y-5">
              <Card title="Data Export">
                <ul class="divide-y divide-slate-100 dark:divide-slate-700">
                  <li v-for="(item, i) in files" :key="i" class="block py-[8px]">
                    <div class="flex space-x-2 rtl:space-x-reverse">
                      <div class="flex-1 flex space-x-2 rtl:space-x-reverse">
                        <div class="flex-1">
                          <span
                            class="block text-slate-600 text-sm dark:text-slate-300"
                            >{{ item.title }}</span
                          >
                        </div>
                      </div>
                      <div class="flex-none">
                        <button
                          type="button"
                          class="text-xs text-slate-900 dark:text-white"
                          @click="downloadCSV(item.title)"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </Card>
          </div>
          </div>
          <div class="xl:col-span-4 lg:col-span-5 col-span-12">
            
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import Card from "@/components/Card";
  import Checkbox from "@/components/Checkbox";
  import Icon from "@/components/Icon";
  import axios from 'axios';

  import {
    basicArea,
    basicAreaDark,
    donutTwo,
    donutTwoDark,
    pieChart,
    stacked,
    stackedDark,
  } from "./Analytics-Component/data";
  import DropEvent from "./Analytics-Component/DropEvent";
  import SelectMonth from "./Analytics-Component/SelectMonth";
  import Teamtable from "./Analytics-Component/Teamtable";

  export default {
    components: {
      Card,
      Icon,
      Checkbox,
      Teamtable,
      DropEvent,
      SelectMonth,
    },
    data() {
      return {
        basicArea,
        basicAreaDark,
        pieChart,
        donutTwo,
        donutTwoDark,
        
        stacked,
        stackedDark,

        userTypeCounts: [],
        studentStateCounts: [],
        campusAmbassadorStateCounts: [],
        
        attributes: [
          {
            key: "today",
            highlight: {
              color: "gray-500",
              fillMode: "solid",
            },
  
            dates: new Date(),
          },
          {},
        ],
        
        files: [
          {
            title: "Student",
          },
          {
            title: "Campus Ambassador",
          },
          {
            title: "Startup",
          },
          {
            title: "Professional",
          },
          // {
          //   title: "Continget",
          // },
        ],
        statistics: [
          {
            title: "Students",
            count: "",
            bg: "bg-info-500",
            text: "text-info-500",
            
            icon: "heroicons-outline:user",
          },
          {
            title: "CAs",
            count: "",
  
            bg: "bg-warning-500",
            text: "text-warning-500",
            
            icon: "heroicons-outline:users",
          },
          {
            title: "Startups",
            count: "",
            bg: "bg-primary-500",
            text: "text-primary-500",
            
            icon: "heroicons-outline:building-office-2",
          },
          {
            title: "Professionals",
            count: "",
            bg: "bg-success-500",
            text: "text-success-500",
            
            icon: "heroicons-outline:briefcase",
          },
          {
            title: "Total",
            count: "",
            bg: "bg-info-500",
            text: "text-info-500",
            
            icon: "heroicons-outline:briefcase",
          },
          {
            title: "Payments",
            count: "0%",
            bg: "bg-warning-500",
            text: "text-warning-500",
            
            icon: "heroicons-outline:currency-rupee",
          },
        ],
        
      };
    },
    created() {
      // Call the fetchData method on component creation
      this.fetchData();
    },
    methods: {

      async fetchData() {
      try {
        const url = 'https://api-ges.ecell-iitkgp.org/adminapp/dashboard';
        
        const accessToken = localStorage.accessToken;

        // Perform the GET request with the access token in the header
        const response = await axios.get(url, {
          headers: {
            Authorization: `JWT ${accessToken}`,
          },
        });

        // Process the response as needed
        const apiResponse = response.data;
        const { userTypeCounts, studentStateCounts, campusAmbassadorStateCounts } = this.formatApiResponse(apiResponse);

        // You can now use the three arrays in your component
        // console.log('User Type Counts:', userTypeCounts);
        // console.log('Student State Counts:', studentStateCounts);
        // console.log('Campus Ambassador State Counts:', campusAmbassadorStateCounts);

        this.userTypeCounts = userTypeCounts;
        this.studentStateCounts = studentStateCounts;
        this.campusAmbassadorStateCounts = campusAmbassadorStateCounts;

        this.stacked.series[0].data = this.studentStateCounts;
        this.stacked.series[1].data = this.campusAmbassadorStateCounts;

        this.statistics.forEach((statistic, index) => {
          if (index === 4) {
            // If it's the element at index 4, compute the sum of indices 0, 1, 2, and 3
            statistic.count = [0, 1, 2, 3].reduce((sum, i) => sum + parseInt(this.userTypeCounts[i] || 0, 10), 0).toString();
          } else {
            // For other elements, directly assign the value from userTypeCounts
            statistic.count = this.userTypeCounts[index].toString(); // Convert to string if needed
          }
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    formatApiResponse(apiResponse) {
      const userTypes = Object.keys(apiResponse.user_type_counts);
      const studentStates = Object.keys(apiResponse.student_state_counts);
      const campusAmbassadorStates = Object.keys(apiResponse.campus_ambassador_state_counts);

      const userTypeCounts = userTypes
      .filter((type, index) => index !== 2 && index < userTypes.length - 2)
      .map(type => apiResponse.user_type_counts[type]);

      const studentStateCounts = studentStates.map(state => apiResponse.student_state_counts[state]);
      const campusAmbassadorStateCounts = campusAmbassadorStates.map(state => apiResponse.campus_ambassador_state_counts[state]);

      return {
        userTypeCounts,
        studentStateCounts,
        campusAmbassadorStateCounts,
      };
    },

    async downloadCSV(userType) {
      const accessToken = localStorage.accessToken;

      console.log(userType)

      if (userType === "Campus Ambassador") userType = "CA";

      const url = `https://api-ges.ecell-iitkgp.org/adminapp/export/${userType}`;

      try {
        // Make an HTTP GET request to your Django backend API
        const response = await axios.get(url, {
          headers: {
            Authorization: `JWT ${accessToken}`,
          },
        });

        // Assuming the response.data is a JSON array
        const jsonData = response.data;

        // Convert JSON array to CSV string
        const csvContent = this.convertJsonToCsv(jsonData);

        // Create a Blob from the CSV content
        const blob = new Blob([csvContent], { type: 'text/csv' });

        // Create a temporary link element
        const link = document.createElement('a');

        // Set the link's href attribute to a URL created from the Blob
        link.href = window.URL.createObjectURL(blob);

        // Set the link's download attribute to the desired file name
        link.download = `${userType}_data.csv`;

        // Append the link to the document
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading CSV:', error);
      }
    },

    convertJsonToCsv(jsonData) {
      let csvContent = "";

      // Write CSV header
      const header = Object.keys(jsonData[0]);
      csvContent += header.map(key => `"${key}"`).join(",") + "\n";

      // Write CSV rows
      jsonData.forEach(item => {
        const row = header.map(key => `"${item[key]}"`).join(",");
        csvContent += row + "\n";
      });

      return csvContent;
    }

  },
  };
  </script>
  <style lang="scss">
  .custom-calender {
    .vc-pane-container,
    .vc-pane-layout,
    .vc-container,
    .vc-container * {
      border: none !important;
      font-family: "Inter", sans-serif !important;
      //background: #fafbff !important;
      font-weight: 400;
    }
    .vc-title {
      color: #0f172a !important;
      font-size: 24px !important;
      font-weight: 500 !important;
      margin-bottom: 15px !important;
    }
    .vc-arrow {
      margin-left: 10px !important;
      margin-right: 10px !important;
      color: #0f172a !important;
    }
    .vc-weekday {
      @apply font-normal dark:text-slate-400 text-sm text-slate-600;
    }
    .vc-day {
      @apply text-slate-900 dark:text-white;
    }
    .vc-highlight {
      background-color: #0f172a !important;
    }
  }
  .dark {
    .custom-calender {
      .vc-title {
        color: #fff !important;
      }
      .vc-arrow {
        color: #fff !important;
      }
    }
    .vc-container,
    .vc-container {
      @apply bg-slate-800;
    }
  }
  </style>
  