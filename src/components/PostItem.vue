<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong>{{post.title}}{{post.id}}</div>
      <div><strong>Описание: </strong>{{post.body}}{{post.id}}</div>
    </div>
    <div class="post__btns">
      <my-button
          @click = "$router.push(`/posts/${post.id}`)"
          style="margin-right: 5px"
      >
        Open
      </my-button>
      <my-button
          @click="$emit('remove', post)"
      >
        Delete
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>