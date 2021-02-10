import { ref } from "vue";
import { auth, google } from "@/firebase/config.js";

const error = ref(null);
const isLoading = ref(false);

const login = async () => {
  error.value = null;
  isLoading.value = null;

  try {
    const credential = await auth.signInWithPopup(google);
    console.log(credential);
  } catch (e) {
    error.value = e.message;
    isLoading.value = false;
  }
};

const logout = async () => {
  error.value = null;
  isLoading.value = null;

  try {
    await auth.signOut();
    isLoading.value = false;
  } catch (e) {
    error.value = e.message;
    isLoading.value = false;
  }
};

const useAuth = () => {
  return { error, login, logout, isLoading };
};

export default useAuth;
