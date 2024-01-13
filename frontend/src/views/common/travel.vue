<template>
    <div>
      <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
        <Card title="Instructions">
            <li>Upload your travel ticket using the field </li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, id.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione odio voluptatem expedita quod esse consequatur optio quam pariatur fugiat?</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, id.</li>
        </Card>
        <Card title="Ticket Upload">
            <DropZoneVue />
            <div class=" mt-5 flex justify-end">
                <button class="btn btn-primary bg-slate-800 dark:bg-black-600">Submit</button>
            </div>
        </Card>
      </div>
    </div>
  </template>
  <script>
  import Card from "@/components/Card";
  import Textinput from "@/components/Textinput";

  import DropZoneVue from "./DropZone.vue";

  export default {
    components: {
      Card,
      Textinput,
      DropZoneVue,
    },
    data() {
      return {};
    },
  };
  </script>
  <style></style>
  