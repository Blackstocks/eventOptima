<template>
  <div class="space-y-5 profile-page">
    <div class="profiel-wrap px-[35px] pb-10 pt-9 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
      <div class="profile-box flex-none md:text-start text-center">
        <div class="md:flex items-end md:space-x-6 rtl:space-x-reverse">
          <div class="flex-1">
            <div
              class="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]"
            >
              G Abhinav Reddy
            </div>
            <div class="text-sm font-light text-slate-600 dark:text-slate-400">
              Student
            </div>
          </div>
        </div>
      </div>
      <!-- end profile box -->
      <!-- <div
        class="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4"
      >
        <div class="flex-1">
          <div
            class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
          >
            $32,400
          </div>
          <div class="text-sm text-slate-600 font-light dark:text-slate-300">
            Total Balance
          </div>
        </div>
        
        <div class="flex-1">
          <div
            class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
          >
            200
          </div>
          <div class="text-sm text-slate-600 font-light dark:text-slate-300">
            Board Card
          </div>
        </div>
        
        <div class="flex-1">
          <div
            class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
          >
            3200
          </div>
          <div class="text-sm text-slate-600 font-light dark:text-slate-300">
            Calender Events
          </div>
        </div>
        
      </div> -->
      <!-- profile info-500 -->
    </div>
    <div class="grid grid-cols-12 gap-6">
      <div class="lg:col-span-4 col-span-12">
        <Card title="Info">
          <ul class="list space-y-8">
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:envelope" />
              </div>
              <div class="flex-1">
                <div
                  class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  EMAIL
                </div>
                <a
                  href="mailto:someone@example.com"
                  class="text-base text-slate-600 dark:text-slate-50"
                >
                  abhinav.reddy@ecell-iitkgp.org
                </a>
              </div>
            </li>
            <!-- end single list -->
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:phone-arrow-up-right" />
              </div>
              <div class="flex-1">
                <div
                  class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  PHONE
                </div>
                <a
                  href="tel:0189749676767"
                  class="text-base text-slate-600 dark:text-slate-50"
                >
                  +91-798589112
                </a>
              </div>
            </li>
            <!-- end single list -->
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:building-library" />
              </div>
              <div class="flex-1">
                <div
                  class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  College
                </div>
                <div class="text-base text-slate-600 dark:text-slate-50">
                  Indian Institute of Technology Kharagpur
                </div>
              </div>
            </li>
            <!-- end single list -->
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:map" />
              </div>
              <div class="flex-1">
                <div
                  class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  LOCATION
                </div>
                <div class="text-base text-slate-600 dark:text-slate-50">
                  Kharagpur, West Bengal, India
                </div>
              </div>
            </li>
            <!-- end single list -->
          </ul>
        </Card>
      </div>
      <div class="lg:col-span-8 col-span-12">
        <Card title="GES 2024">
          <Justify />
        </Card>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-4 col-span-12">
            <Card title="Status">
              <Teamtable className=" justify-center" />
            </Card>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <Card title="Notice" >
              <div className="overflow-x-auto -mx-6">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden ">
                    <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                      <tbody className="dark:text-slate-300 bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 flex flex-col gap-4 justify-center align-middle">
                          <tr key=1>
                            <td className="table-td w-36 pl-4">24th Dec 2023</td>
                            <td className="table-td">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore rem non consequuntur temporibus ipsum.</td>
                          </tr>
                          <tr key=2>
                            <td className="table-td w-36 pl-4">24th Dec 2023</td>
                            <td className="table-td">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore rem non consequuntur temporibus ipsum.</td>
                          </tr>
                          <tr key=3>
                            <td className="table-td w-36 pl-4">24th Dec 2023</td>
                            <td className="table-td">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore rem non consequuntur temporibus ipsum.</td>
                          </tr>
                          <tr key=4>
                            <td className="table-td w-36 pl-4">24th Dec 2023</td>
                            <td className="table-td">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore rem non consequuntur temporibus ipsum.</td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Card>
          </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Icon from "@/components/Icon";

import Teamtable from "./Analytics-Component/Teamtable";

import Justify from "./Justify";

export default {
  components: {
    Card,
    Icon,
    Teamtable,
    Justify,
  },
  data() {
    return {
      
    };
  },
};

</script>
<style lang="scss" scoped></style>
