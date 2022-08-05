<template>
  <div class="button" @click="handleClick">
  </div>
</template>
<script>

export default {
  name: "TestButton",
  data() {
    return {
      
    }
  },
  methods: {
    handleClick() {
      console.log("clicked");
    }
  }
};
</script>

<style scoped>
.button {
  width: 100px;
  height: 100px;
  background-color: #000;
  cursor: pointer;
}
</style>