<template>
  <div class="home">
    Home
    <button @click="login">Login</button>
  </div>
</template>

<script>
// @ is an alias to /src
import useAuth from "@/hooks/useAuth.js";

export default {
  setup() {
    const { error, isLoading, login } = useAuth();

    return { error, isLoading, login };
  },
};
</script>
