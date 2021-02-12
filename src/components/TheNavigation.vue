<template>
  <nav class="navigation">
    <div class="navigation__home">
      <router-link :to="{ name: 'Home' }">
        <h1 class="navigation__home">StackPlanner</h1>
      </router-link>
    </div>
    <div v-if="user" class="navigation__links--loggedIn" >
      <!-- <router-link :to="{ name: 'UserProfile' }">Profile</router-link> -->
      <router-link :to="{ name: 'Projects' }">Projects</router-link>
      <router-link :to="{ name: 'NewProject' }">New Project</router-link>
      <base-button @click="handleLogout">Logout</base-button>
    </div>
    <div v-else class="navigation__links--loggedOut" >
      <base-button @click="handleLogin">Login</base-button>
    </div>
  </nav>
</template>

<script>
// import { ref } from "vue";
import useAuth from "@/hooks/useAuth";
import getUser from "@/hooks/getUser";
import BaseButton from "./UI/BaseButton.vue";

export default {
  components: { BaseButton },
  setup() {
    const { user } = getUser();

    const { isLoading, error, login, logout } = useAuth();

    const handleLogin = async () => {
      await login();
      console.log('logged in')
    }

    const handleLogout = async () => {
      await logout();
      console.log('logged out');
    }

    return { user, isLoading, error, handleLogin, handleLogout };
  },
};
</script>

<style>
</style>