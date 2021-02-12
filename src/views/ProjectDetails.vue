<template>
  <div v-if="isLoading">Loading</div>
  <!-- <div v-else>Project {{ project.projectName }}</div> -->
</template>

<script>
// import { ref } from 'vue'
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import getProject from "@/hooks/getProject";

export default {
  setup() {
    const route = useRoute();
    const projectId = route.params.id;
    const { project, isLoading, error, loadProjectById } = getProject();

    onMounted(async () => {
      loadProjectById(projectId);
    });

    return { project, isLoading, error };
  },
};
</script>
