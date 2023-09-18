<template>
  <div>
    <div>
      <button @click="addLike">Like</button>
      <button @click="addDislike">Dislike</button>
    </div>
    <div>Количество лайков: <strong>{{likes}}</strong></div>
    <div>Количество дизлайков: <strong>{{dislikes}}</strong></div>
    <br>
    <div>Количество likeApi: <strong>{{likeApi}}</strong></div>
    <button @click="addLikeApi">add likeApi</button>
  </div>
</template>

<script>
import {ref} from "vue";
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0
    }
  },
  setup(props) {
    const likeApi = ref(1)

    const addLikeApi = () => {
      likeApi.value += 1
    }

    return {
      likeApi,
      addLikeApi
    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    }
  }
}
</script>

<style>

</style>