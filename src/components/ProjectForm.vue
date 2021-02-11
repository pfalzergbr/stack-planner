<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="projectName">Project Name</label>
      <input
        name="projectName"
        type="text"
        v-model.trim="formData.projectName.val"
      />
    </div>
    <div>
      <label for="projectUrl">Link</label>
      <input
        name="projectUrl"
        type="text"
        v-model.trim="formData.projectUrl.val"
      />
    </div>
    <div>
      <label for="githubUrl">Github Link</label>
      <input
        name="githubUrl"
        type="text"
        v-model.trim="formData.githubUrl.val"
      />
    </div>
    <div>
      <label for="description">Description</label>
      <textarea
        name="description"
        v-model.trim="formData.description.val"
      ></textarea>
    </div>
    <div>
      <label for="frontend">Frontend</label>
      <textarea name="frontend" v-model.trim="formData.frontend.val"></textarea>
    </div>
    <div>
      <label for="backend">Backend</label>
      <textarea name="backend" v-model.trim="formData.backend.val"></textarea>
    </div>
    <div>
      <label for="reason">What to practice</label>
      <textarea name="reason" v-model.trim="formData.reason.val" />
    </div>
    <base-button>Submit</base-button>
  </form>
</template>

<script>
import { ref } from "vue";

import { validateForm, clearForm } from "@/services/formServices";
import BaseButton from "../components/UI/BaseButton";

export default {
  components: { BaseButton },
  setup() {
    const formData = ref({
      projectName: { val: "", error: null, required: true, minLength: 5 },
      projectUrl: { val: "", error: null, required: false },
      githubUrl: { val: "", error: null, required: false },
      description: { val: "", error: null, required: true, minLength: 5 },
      frontend: { val: "", error: null, required: false },
      backend: { val: "", error: null, required: false },
      reason: { val: "", error: null, required: true, minLength: 5 },
    });

    const handleSubmit = () => {
      const formIsValid = validateForm(formData.value);
      console.log(formIsValid)
      console.log(formData.value)
      clearForm();
    };

    return { formData, handleSubmit };
  },
};
</script>
