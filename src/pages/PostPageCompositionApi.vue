<template>
  <div>
    <h1>Posts page</h1>
    <my-input
        v-focus
        v-model="searchQuery"
        placeholder="Search..."
    />
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Create Post
      </my-button>
      <my-select
          v-model="selectedSort"
          v-model:options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Loading ...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import useSortedPosts from "@/hooks/useSortedPosts";
import {usePosts} from "@/hooks/usePosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By content'}
      ]
    }
  },
  setup(props) {
    const {posts, isPostsLoading, totalPages} = usePosts(10);
    const {selectedSort, sortedPosts} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      isPostsLoading,
      totalPages,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
      console.log(this.posts)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
  }
}
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid teal;
  padding: 10px;
}

.current-page {
  border: 1px solid lightsalmon;
}
</style>