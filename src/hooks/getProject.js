import { ref } from "vue";
import { firestore } from "@/firebase/config";

const getProject = () => {
  const docRef = firestore.collection("projects");
  const error = ref(null);
  const isLoading = ref(null);
  const project = ref(null);

  const loadProjectById = async (projectId) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await docRef.doc(projectId).get();

      if (!response.exists) {
        throw Error();
      }
      project.value = { ...response.data(), id: response.id };
      console.log(project.value);
      isLoading.value = false;
    } catch (e) {
      error.value = e.message;
      isLoading.value = false;
    }
  };
  return { project, isLoading, error, loadProjectById };
};

export default getProject;
