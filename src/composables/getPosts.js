import { ref, reactive } from "vue";
import { colRef } from "@/firebase/config";
import { getDocs, orderBy, query } from "firebase/firestore";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      //get data from firebase database
      const q = query(colRef, orderBy("createdAt", "desc"));
      getDocs(q).then((snapshot) => {
        console.log(snapshot.docs);
        //map
        posts.value = snapshot.docs.map((doc) => {
          console.log(doc.data());
          console.log(doc.id);

          return { ...doc.data(), id: doc.id };
        });
      });

      // simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 500);
      // });
      // let data = await fetch("http://localhost:3000/posts");
      // console.log(data);
      // if (!data.ok) {
      //   throw Error("no data available");
      // }
      // posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
