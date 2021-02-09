import { ref } from 'vue';
import { auth, google } from '@/firebase/config.js'

const error = ref(null);
const isLoading = ref(false);

const login = async () => {
  error.value = null;
  isLoading.value = null;

  const credential = await auth.signInWithPopup(google)
  console.log(credential);
}


const useLogin = () => {
  return { error, login,  isLoading}
}

export default useLogin
 