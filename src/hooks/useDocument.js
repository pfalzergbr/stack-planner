import { ref } from "vue";
import { firestore } from "@/firebase/config";

const useDocument = (collection) => {
  const error = ref(null);
  const isLoading = ref(null);

  const addDocument = async (document) => {
    error.value = null;
    isLoading.value = true;

    try {
      const response = await firestore.collection(collection).add(document);
      isLoading.value = false;
      return response;
    } catch (e) {
      error.value = "Something went wrong. Cannot create new document";
      isLoading.value = false;
    }
  };

  const deleteDocument = async (id) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await firestore
        .collection(collection)
        .doc(id)
        .delete();
      isLoading.value = false;
      return response;
    } catch (e) {
      isLoading.value = false;
      error.value = "Something went wrong. Cannot delete the document";
    }
  };

  const updateDocument = async (updates, id) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await firestore
        .collection(collection)
        .doc(id)
        .update(updates);
      isLoading.value = false;
      return response;
    } catch (e) {
      isLoading.value = false;
      error.value = "Something went wrong. Cannot update the document";
    }
  };

  return { error, isLoading, addDocument, deleteDocument, updateDocument };
};

export default useDocument;
