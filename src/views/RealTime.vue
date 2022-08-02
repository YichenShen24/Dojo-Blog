<template>
  <h1>real time data</h1>
  <div v-for="post in posts" :key="post.id">{{ post.title }}</div>
</template>

<script>
import { ref } from "vue";
import { colRef, db } from "@/firebase/config";
import {
  getDocs,
  orderBy,
  query,
  onSnapshot,
  collection,
} from "firebase/firestore";

export default {
  setup() {
    const posts = ref([]);
    const collectionRef = collection(db, "posts");
    const q = query(colRef, orderBy("createdAt", "desc"));

    onSnapshot(colRef, (snapshot) => {
      posts.value = snapshot.docs.map((doc) => {
        // console.log(doc.data());
        // console.log(doc.id);
        return { ...doc.data(), id: doc.id };
      });

      console.log(posts);
    });

    return { posts };

    // getDocs(q).then((snapshot) => {
    //   console.log(snapshot.docs);
    //   //map
    //   posts.value = snapshot.docs.map((doc) => {
    //     console.log(doc.data());
    //     console.log(doc.id);

    //     return { ...doc.data(), id: doc.id };
    //   });
    // });
  },
};
</script>

<style></style>
