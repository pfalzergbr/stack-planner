<template>
  <div>
    <h1>Projects</h1>
    <div class="projects__container"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import getProjects from "@/hooks/getProjects.js";
export default {
  setup() {
    const { error, isLoading, projects, loadProjects } = getProjects();

    onMounted(async () => {
      await loadProjects();
    });

    return { error, isLoading, projects, loadProjects };
  },
};
</script>