import { ref } from "vue";
import { firestore } from "@/firebase/config";

const getProjects = () => {
  const docRef = firestore.collection('projects');
  const error = ref(null);
  const isLoading = ref(null);
  const projects = ref(null);

  //TODO - Implement filters

  const loadProjects = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await docRef.get();
      projects.value = response.docs.map((document) => {
        return { ...document.data(), id: document.id };
      });
      isLoading.value = false;
    } catch (e) {
      isLoading.value = false;
      error.value = "Something went wrong. Cannot load the projects";
    }
  };

  return { error, isLoading, projects, loadProjects };
};

export default getProjects;
