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
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--    <div class="page__wrapper">
          <div
              v-for="pageNumber in totalPages"
              key="pageNumber"
              class="page"
              :class="{
                'current-page': page === pageNumber
              }"
              @click="changePage(pageNumber)"
          >
            {{pageNumber}}
          </div>
        </div>-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By content'}
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id);
      console.log(this.posts)
    },
    showDialog(){
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
        //this.isPostsLoading = false;
      } catch (e){
        alert('Error')
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (e){
        alert('Error')
      } finally {
      }
    }
  },
  mounted() {
    this.fetchPosts();

    /*const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }

    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);*/
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((x1, x2) => x1[this.selectedSort]?.localeCompare(x2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    /*page() {
      this.fetchPosts();
    }*/
    /*selectedSort(newValue){
      this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue])
      })
    },*/
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