<template>
  <div class="-mx-6 -mb-6">
    <vue-good-table
      :columns="columns"
      styleClass=" vgt-table lesspadding v-middle table-head borderless  rounded-md "
      :rows="teamtable"
      :pagination-options="{
        enabled: true,
        perPage: perpage,
      }"
      :sort-options="{
        enabled: false,
      }"
    >
      <template v-slot:table-row="props">
        
        <span
          v-if="props.column.field == 'customer'"
          class="flex items-center min-w-[150px]"
        >
          <span class="text-sm text-slate-600 dark:text-slate-300 capitalize">{{
            props.row.customer.name
          }}</span>
        </span>

        <span
          v-if="props.column.field == 'status'"
          class="block min-w-[140px] text-left"
        >
          <span class="inline-block text-center mx-auto py-1">
            <span
              v-if="props.row.status === 'progress'"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span
                class="h-[6px] w-[6px] bg-danger-500 rounded-full inline-block ring-4 ring-opacity-30 ring-danger-500"
              ></span>
              <span>In progress</span>
            </span>
            <span
              v-if="props.row.status === 'complete'"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span
                class="h-[6px] w-[6px] bg-success-500 rounded-full inline-block ring-4 ring-opacity-30 ring-success-500"
              ></span>

              <span>Complete</span>
            </span>
          </span>
        </span>
        
      </template>
      <template #pagination-bottom="props">
        <div class="py-4 px-3 justify-center hidden">
          <Pagination
            :total="50"
            :current="current"
            :per-page="perpage"
            :pageRange="pageRange"
            @page-changed="current = $event"
            :pageChanged="props.pageChanged"
            :perPageChanged="props.perPageChanged"
          >
            >
          </Pagination>
        </div>
      </template>
    </vue-good-table>
  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Pagination from "@/components/Pagination";
import { MenuItem } from "@headlessui/vue";
import { shapeLine4 } from "./data.js";

export default {
  components: {
    Pagination,
    Dropdown,
    Icon,
    MenuItem,
  },

  data() {
    return {
      shapeLine4,
      current: 1,
      perpage: 6,
      pageRange: 5,
      searchTerm: "",
      
      teamtable: [
        {
          customer: {
            name: "Arlene McCoy",
            deg: "Ux designer",
          },
          status: "progress",
        },
        {
          customer: {
            name: "Arlene McCoy",
            deg: "Ux designer",
          },
          status: "progress",
        },
        {
          customer: {
            name: "Arlene McCoy",
            deg: "Ux designer",
          },
          status: "progress",
        },
        {
          customer: {
            name: "Arlene McCoy",
            deg: "Ux designer",
          },
          status: "progress",
        },
        {
          customer: {
            name: "Arlene McCoy",
            deg: "Ux designer",
          },
          status: "progress",
        },
        {
          customer: {
            name: "Arlene McCoy",
            deg: "Ux designer",
          },
          status: "progress",
        },
      ],
      columns: [
        {
          field: "customer",
        },
        {
          field: "status",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.vgt-table th {
    display: none; // This hides the header
  }
</style>
