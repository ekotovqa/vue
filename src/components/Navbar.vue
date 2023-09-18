<template>
  <div class="navbar">
    <div @click="goTo('/')">FirstVueApp</div>
    <div class="navbar__btns">
      <my-button @click="goTo('/posts')">Posts Page</my-button>
      <my-button @click="goTo('/store')" style="margin-left: 5px">Store Post Page</my-button>
      <my-button @click="goTo('/composition')" style="margin-left: 5px">Composition Api Post Page</my-button>
      <my-button @click="goTo('/about')" style="margin-left: 5px">About</my-button>
      <my-button @click="goTo('/storeLikes')" style="margin-left: 5px">StoreLikes</my-button>
      <my-button @click="$router.push('/likes')" style="margin-left: 5px">Likes</my-button>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    goTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: antiquewhite;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>