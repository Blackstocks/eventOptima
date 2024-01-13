<template>
    <div>
      <TabGroup>
        <div class="grid gap-5 grid-cols-12">
          <div class="xl:col-span-3 lg:col-span-4 col-span-12 card-auto-height">
            <Card>
              <TabList class="flex flex-col space-y-1 text-start items-start">
                <Tab
                  v-for="(item, i) in faqmenus"
                  :key="i"
                  v-slot="{ selected }"
                  as="template"
                >
                  <button
                    type="button"
                    class="focus:ring-0 focus:outline-none space-x-2 text-sm flex items-center w-full transition duration-150 px-3 py-4 rounded-[6px] rtl:space-x-reverse"
                    :class="
                      selected
                        ? 'bg-slate-100 dark:bg-slate-900 dark:text-white'
                        : 'bg-white dark:bg-slate-800 dark:text-slate-300'
                    "
                  >
                    <Icon
                      icon="heroicons:chevron-double-right-solid"
                      class="text-lg"
                      :class="
                        selected ? ' opacity-100' : 'opacity-50 dark:opacity-100'
                      "
                    />
                    <span> {{ item.title }}</span>
                  </button>
                </Tab>
              </TabList>
            </Card>
          </div>
          <div class="xl:col-span-9 lg:col-span-8 col-span-12">
            <TabPanels>
              <TabPanel>
                <Accordion :items="items" parentClass="space-y-5" />
              </TabPanel>
              <TabPanel>
                <Accordion :items="items2" parentClass="space-y-5" />
              </TabPanel>
              <TabPanel>
                <Accordion :items="items3" parentClass="space-y-5" />
              </TabPanel>
            </TabPanels>
          </div>
        </div>
      </TabGroup>
    </div>
  </template>
  
  <script>
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
  import Card from "@/components/Card";
  import Icon from "@/components/Icon";
  import Accordion from "@/components/Accordion";
  export default {
    components: {
      TabGroup,
      TabList,
      Tab,
      TabPanels,
      TabPanel,
      Card,
      Accordion,
      Icon,
    },
    data() {
      return {
        faqmenus: [
          {
            title: "Registration",
          },
          {
            title: "Campus Ambassador",
          },
          // {
          //   title: "Legal",
          // },
        ],
        items: [
          {
            title: "Student Registration?",
            content:
              "Student Individual - If you want to attend GES not as a part of any contingent, you can register under this category.",
          },
          {
            title: "Campus Ambassador Registration?",
            content:
              "Campus Ambassador - If you want to be a Campus Ambassador of GES in your college, you can register under this category.",
          },
          {
            title: "Professional Registration?",
            content:
              "Professional - A professor, faculty from any collegeor a working professional can attend GES under this category.",
          },
          {
            title: "College Contingent Registration?",
            content:
              "College Contingent - You can form a contingent of four or more student individual(s).All contingent members have to register as individual student or professor first before registering as contingent.",
          },
          {
            title: "Startup Registration?",
            content:
              "Startup - If you are a startup and want to showcase your product in GES, you can register under this category. If any startup wants to participate in Startup Camp and related events as a startup, you need to register under this category. You cannot attend GES as a college contingent or part of any college contingent. Any startup  professional who does not want to participate in Startup Camp and related events can attend GES under Professional category and not under Startup Camp category.",
          },
          {
            title: "Terms & Conditions",
            content:
              "Payment is non-refundable, under any circumstances whatsoever. Tshirt of specified size will be provided only on availability (till stocks last). Accommodation inside campus is mandatory. Paraphernalia required will be provided on arrival. Any person found flouting institute rules will be subjected to disciplinary proceedings and as a consequence, the respective college may be debarred from GES forever in the future. Registration Fees has to be paid completely in one installment, as given in the website. No concessions will be permitted except those mentioned on website. Appliances and belongings are the sole responsibility of the participants. E-Cell, IIT Kharagpur is not responsible for any loss or damage caused.",
          },
          // {
          //   title: "Fees",
          //   content:
          //     "Student Individual : INR College Contingent</b> :  <b>Professional</b> : INR  <b>Campus Ambassador</b> : <b>Empresario Semi-Finalists</b> : <b>For Startups</b> : ",
          // },
        ],
        items2: [
          {
            title: "What would be the roles of the Campus Ambassador",
            content:
              "Acting as a link between IIT Kharagpur and their own campus.",
          },
          {
            title: "What are the requirements for being the Campus Ambassador?",
            content:
              "There are no requirements to be a Campus Ambassador, you just need to be enthusiastic about entrepreneurship. ",
          },
        ],

      };
    },
  };
  </script>
  <style lang="scss">
  .card-height {
    .card {
      @apply h-[248px] overflow-auto;
    }
  }
  .card-auto-height {
    .card {
      @apply h-auto;
    }
  }
  </style>
  