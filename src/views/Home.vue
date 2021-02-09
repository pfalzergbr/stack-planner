<template>
  <div class="home">
    Home
    <button @click="login">Login</button>
  </div>
</template>

<script>
// @ is an alias to /src
import useLogin from '@/hooks/useLogin.js';
export default {
  setup() {
    const {error, isLoading, login} = useLogin();
    
    return {error, isLoading, login};
  }
};

</script>
