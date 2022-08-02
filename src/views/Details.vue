<template>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
    <p>{{ error }}</p>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";

import { useRoute, useRouter } from "vue-router";
import { colRef, db } from "@/firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default {
  props: ["id"],
  components: { Spinner },

  setup(props) {
    const route = useRoute();
    const router = useRouter();
    console.log(route);
    const { post, error, load } = getPost(route.params.id);
    load();

    const handleClick = () => {
      const docRef = doc(db, "posts", props.id);
      deleteDoc(docRef);
      router.push({ name: "HomeView" });
    };

    return { post, error, handleClick };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}

button.delete {
  margin: 10px auto;
}
</style>
