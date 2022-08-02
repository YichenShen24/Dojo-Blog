import { ref } from "vue";
import { colRef, db } from "@/firebase/config";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        throw Error("That post does not exist");
      }

      post.value = { ...docSnap.data(), id: docSnap.id };
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
