<template>
    <div v-if="loading" class="loading-indicator">Loading...</div>
    <div v-else class="space-y-5 profile-page">
      <div class="space-y-5 profile-page">
        <div class="profiel-wrap px-[35px] pb-10 pt-9 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1] h-[120px] bg-center bg-[url('../../assets/images/logo/banner.png')]">
          <div class="profile-box flex-none md:text-start text-center">
            <div class="md:flex items-end md:space-x-6 rtl:space-x-reverse">
              <div class="flex-1">
                <div
                  class="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]"
                >
                  <!-- {{data.full_name}} -->
                </div>
                <div class="text-sm font-light text-slate-600 dark:text-slate-400">
                  <!-- Student -->
                </div>
              </div>
            </div>
          </div>
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
                      {{ data.email }}
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
                    {{ data.phone }}
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
                      Organization
                    </div>
                    <div class="text-base text-slate-600 dark:text-slate-50">
                      {{ data.organization }}
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
                      {{ data.address }}, {{ data.state }}
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
                              <tr v-for="(singleNotice, index) in notice" :key="index">
                                <td class="table-td w-36 pl-4">{{ singleNotice.date }}</td>
                                <td class="table-td">{{ singleNotice.notice }}</td>
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
    </div>
  </template>
  <script>
  import Card from "@/components/Card";
  import Icon from "@/components/Icon";
  
  import Teamtable from "./Analytics-Component/Teamtable";
  import Fileinput from "@/components/Fileinput";
  
  import Justify from "../../common/Justify";
  
  import axios from 'axios';
  
  export default {
    components: {
      Card,
      Icon,
      Teamtable,
      Fileinput,
      Justify,
    },
    data() {
      return {
        data: null,
        notice : null,
        loading: true,
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        
        const user = JSON.parse(localStorage.getItem('user'));
  
        const accessToken = localStorage.getItem('accessToken');
  
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${accessToken}`,
        };
  
        axios.get('https://api-ges.ecell-iitkgp.org/professional/', { 
                    headers: {
                      'Authorization': `JWT ${accessToken}`,
                      'Accept': 'application/json'
                    },
                    params: {
                      'id': user.id,
                    }})
          .then(response => {
            this.data = response.data.user;
            this.notice = response.data.notice;
            console.log(this.data, this.notice);
            this.loading = false; 
          })
          .catch(error => {
            console.error('There was an error!', error);
            this.loading = false;
            window.location.href = '/professional/register';
          });
      }
    },
  };
  
  </script>
  <style lang="scss" scoped></style>
  