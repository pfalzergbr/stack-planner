<template>
  <nav>
    <div>
      <router-link :to="{ name: 'Home' }">
        <h1>Home</h1>
      </router-link>
    </div>
    <div v-if="user">
      <router-link :to="{ name: 'UserProfile' }">Profile</router-link>
      <router-link :to="{ name: 'Projects' }">Projects</router-link>
      <router-link :to="{ name: 'NewProject' }">New Project</router-link>
      <base-button>Login</base-button>
    </div>
    <div v-else>
      <base-button>Login</base-button>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import BaseButton from "./UI/BaseButton.vue";

export default {
  components: { BaseButton },
  setup() {
    const user = ref("user");

    return { user };
  },
};
</script>

<style>
</style>