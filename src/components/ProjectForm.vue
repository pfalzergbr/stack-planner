<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="projectName">Project Name</label>
      <input
        name="projectName"
        type="text"
        v-model.trim="formData.projectName.val"
      />
      <p class="" v-if="formData.projectName.error">
        {{ formData.projectName.error }}
      </p>
    </div>
    <div>
      <label for="projectUrl">Link</label>
      <input
        name="projectUrl"
        type="text"
        v-model.trim="formData.projectUrl.val"
      />
      <p class="" v-if="formData.projectName.projectUrl">
        {{ formData.projectName.projectUrl }}
      </p>
    </div>
    <div>
      <label for="githubUrl">Github Link</label>
      <input
        name="githubUrl"
        type="text"
        v-model.trim="formData.githubUrl.val"
      />
      <p class="" v-if="formData.githubUrl.error">
        {{ formData.githubUrl.error }}
      </p>
    </div>
    <div>
      <label for="description">Description</label>
      <textarea
        name="description"
        v-model.trim="formData.description.val"
      ></textarea>
      <p class="" v-if="formData.description.error">
        {{ formData.description.error }}
      </p>
    </div>
    <div>
      <label for="frontend">Frontend</label>
      <textarea name="frontend" v-model.trim="formData.frontend.val"></textarea>
      <p class="" v-if="formData.frontend.error">
        {{ formData.frontend.error }}
      </p>
    </div>
    <div>
      <label for="backend">Backend</label>
      <textarea name="backend" v-model.trim="formData.backend.val"></textarea>
      <p class="" v-if="formData.backend.error">{{ formData.backend.error }}</p>
    </div>
    <div>
      <label for="reason">What to practice</label>
      <textarea name="reason" v-model.trim="formData.reason.val" />
      <p class="" v-if="formData.reason.error">{{ formData.reason.error }}</p>
    </div>
    <base-button>Submit</base-button>
  </form>
</template>

<script>
import { ref } from "vue";

import useDocument from "@/hooks/useDocument";
import getUser from "@/hooks/getUser";
import {
  validateForm,
  clearForm,
  extractFormData,
} from "@/services/formServices";
import BaseButton from "../components/UI/BaseButton";

export default {
  components: { BaseButton },
  setup() {
    const { isLoading, error, addDocument } = useDocument("projects");
    const { user } = getUser();
    const formData = ref({
      projectName: { val: "", error: null, required: true, minLength: 5 },
      projectUrl: { val: "", error: null, required: false },
      githubUrl: { val: "", error: null, required: false },
      description: { val: "", error: null, required: true, minLength: 5 },
      frontend: { val: "", error: null, required: false },
      backend: { val: "", error: null, required: false },
      reason: { val: "", error: null, required: true, minLength: 5 },
    });

    const handleSubmit = async () => {
      const formIsValid = validateForm(formData.value);
      if (formIsValid) {
        const form = extractFormData(formData.value);
        await addDocument(form);
        clearForm(formData.value);
      }
    };

    return { formData, error, isLoading, user, handleSubmit };
  },
};
</script>
