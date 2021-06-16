<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { posts, showPosts } = getPosts();

    return { posts, showPosts };
  },
};
</script>
