<template> Project {{ projectId }} </template>

<script>
// import { ref } from 'vue'
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const projectId = route.params.id;

    return { projectId };
  },
};
</script>
