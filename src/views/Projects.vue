<template>
  <div>
    <h1>Projects</h1>
    <div v-if="isLoading">Loading</div>
    <div v-else class="projects__container">
      <router-link 
        v-for="project in projects" 
        :key="project.id" 
        :to="`/projects/${project.id}`">
        {{ project.projectName }}
      </router-link>
    </div>
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