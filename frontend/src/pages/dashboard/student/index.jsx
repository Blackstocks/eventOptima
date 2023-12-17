import React, { Fragment }  from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import TeamTable from "@/components/partials/Table/team-table";
import { tableData } from "@/constant/table-data";
import { Tab, Disclosure, Transition } from "@headlessui/react";

const buttons = [
  {
    title: "About",
    icon: "heroicons-outline:home",
  },
  {
    title: "Events",
    icon: "heroicons-outline:user",
  },
  {
    title: "Competitions",
    icon: "heroicons-outline:chat-alt-2",
  },
  // {
  //   title: "Settings",
  //   icon: "heroicons-outline:cog",
  // },
];

const columns = [
  {
    label: "Date",
    field: "date",
  },
  {
    label: "Notice",
    field: "notice",
  },
];

const rows = tableData.slice(0, 3);

const Dashboard = () => {
  return (
    <div>
      <div className="space-y-5 profile-page">
        <div className="profiel-wrap px-[35px] pb-10 pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
          
          <div className="profile-box flex-none md:text-start text-center">
            <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
              <div className="flex-1">
                <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
                  G Abhinav Reddy
                </div>
                <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                  Student
                </div>
              </div>
            </div>
          </div>

          <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4">
            
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-4 col-span-12">
            <Card title="Info">
              <ul className="list space-y-8">
                <li className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:envelope" />
                  </div>
                  <div className="flex-1">
                    <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      EMAIL
                    </div>
                    <a
                      href="mailto:someone@example.com"
                      className="text-base text-slate-600 dark:text-slate-50"
                    >
                      abhinav25102005@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:phone-arrow-up-right" />
                  </div>
                  <div className="flex-1">
                    <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      PHONE
                    </div>
                    <a
                      href="tel:0189749676767"
                      className="text-base text-slate-600 dark:text-slate-50"
                    >
                      +91-7981589112
                    </a>
                  </div>
                </li>

                <li className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:building-library" />
                  </div>
                  <div className="flex-1">
                    <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      COLLEGE
                    </div>
                    <div className="text-base text-slate-600 dark:text-slate-50">
                      Indian Institute of Technology Kharagpur
                    </div>
                  </div>
                </li>

                <li className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:map" />
                  </div>
                  <div className="flex-1">
                    <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      LOCATION
                    </div>
                    <div className="text-base text-slate-600 dark:text-slate-50">
                      Alwal, Hyderabad, Telangana, India 500010
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
          <div className="lg:col-span-8 col-span-12">
          <Card title="GES'24">
          <Tab.Group>
            <Tab.List className="lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse">
              {buttons.map((item, i) => (
                <Tab as={Fragment} key={i}>
                  {({ selected }) => (
                    <button
                      className={` inline-flex items-start text-sm font-medium mb-7 capitalize bg-white dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute
                      before:left-1/2 before:bottom-[-6px] before:h-[1.5px]
                        before:bg-primary-500 before:-translate-x-1/2
                
                ${
                  selected
                    ? "text-primary-500 before:w-full"
                    : "text-slate-500 before:w-0 dark:text-slate-300"
                }
                `}
                    >
                      <span className="text-base relative top-[1px] ltr:mr-1 rtl:ml-1">
                        <Icon icon={item.icon} />
                      </span>
                      {item.title}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                  <h6>Global Entrepreneurship Summit 2024</h6>
                  <br />
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                  tempor enim. Elit aute irure tempor cupidatat incididunt sint
                  deserunt ut voluptate aute id deserunt nisi.
                  <br />
                  <br />
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                  tempor enim. Elit aute irure tempor cupidatat incididunt sint
                  deserunt ut voluptate aute id deserunt nisi.
                  <br />
                  
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                  tempor enim.
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                  tempor enim. Elit aute irure tempor cupidatat incididunt sint
                  deserunt ut voluptate aute id deserunt nisi.
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          </Card>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-4 col-span-12">
            <Card title="Status">
              <TeamTable />
            </Card>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <Card title="Notice" >
              <div className="overflow-x-auto -mx-6">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden ">
                    <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                      {/* <thead className=" border-t border-slate-100 dark:border-slate-800">
                        <tr>
                          {columns.map((column, i) => (
                            <th key={i} scope="col" className=" table-th ">
                              {column.label}
                            </th>
                          ))}
                        </tr>
                      </thead> */}
                      <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                        {rows.map((row, i) => (
                          <tr key={i}>
                            <td className="table-td">{row.date}</td>
                            <td className="table-td ">{row.notice}</td>
                          </tr>
                        ))}
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
  );
};

export default Dashboard;
