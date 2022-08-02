// tak in an array of posts
//create a new tag set no duplicates
//add the tags of each post to the tag set
//return a single array of tags based on the set

import { ref } from "vue";

const useTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  console.log(tagSet);
  tags.value = [...tagSet];
  return { tags };
};

export default useTags;
