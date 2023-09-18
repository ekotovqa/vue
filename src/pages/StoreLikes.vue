<template>
  <div>
    <h2>{{$store.state.like.isAuth ? "User is authorized" : "User is not authorized"}}</h2>
  </div>
  <div>
    <h1>{{$store.state.like.likes}}</h1>
  </div>
  <div>
    <my-button @click="$store.commit('incrementLikes')">Like</my-button>
    <my-button
        @click="$store.commit('decrementLikes')"
        style="margin-left: 5px"
    >
      Dislike
    </my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton}

}
</script>

<style lang="scss" scoped>

</style>