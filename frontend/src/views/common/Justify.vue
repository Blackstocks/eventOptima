<template>
  <TabGroup>
    <TabList class="lg:space-x-6 md:space-x-3 space-x-0 rtl:space-x-reverse">
      <Tab
        v-slot="{ selected }"
        as="template"
        v-for="(item, i) in buttons"
        :key="i"
      >
        <button
          :class="[
            selected
              ? 'text-white bg-[#1E293B] dark:bg-black-600'
              : 'text-slate-500 bg-white dark:bg-slate-700 dark:text-slate-300',
          ]"
          class="text-sm font-medium mb-7 last:mb-0 capitalize ring-0 foucs:ring-0 focus:outline-none px-6 rounded-md py-2 transition duration-150"
        >
          {{ item.title }}
        </button>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <div class="text-slate-600 dark:text-slate-400 text-sm font-normal">
          Global Entrepreneurship Summit (GES) is IIT Kharagpur's annual, international corporate summit conducted by Entrepreneurship Cell, IIT Kharagpur. 
          <br><br>
          It is India's largest student-run entrepreneurial summit, GES has always been a unique platform for academicians, new-age entrepreneurs, eminent business personalities, venture capitalists, and students to gather in one place and share their entrepreneurial endeavors and experiences, as well as pledge to take entrepreneurship to greater heights, since its inception in 2007.
        </div>
      </TabPanel>
      <TabPanel>
        <div class="text-slate-600 dark:text-slate-400 text-sm font-normal">
          <!-- Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim. -->
        </div>
      </TabPanel>
      <TabPanel
        ><div class="text-slate-600 dark:text-slate-400 text-sm font-normal">
          <!-- Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui -->
        </div></TabPanel
      >
      <!-- <TabPanel
        ><div class="text-slate-600 dark:text-slate-400 text-sm font-normal">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi.
        </div></TabPanel
      > -->
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const buttons = [
  {
    title: "About",
  },
  {
    title: "Events",
  },
  {
    title: "Competitions",
  },
  // {
  //   title: "Sponsors",
  // },
];
</script>
