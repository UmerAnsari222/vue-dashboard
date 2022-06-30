<template>
  <div v-if="!modelOpen" class="top-bar">
    <div class="top-bar-container">
      <div>
        <span>2</span>
        <img src="@/assets/icons/bell.svg" alt="" />
      </div>
      <img src="@/assets/images/profile.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["modelOpen"]),
  },
};
</script>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem 2rem;
  background-color: #ededf6;
}
.top-bar-container div span {
  background-color: red;
  position: absolute;
  top: -10px;
  left: 20px;
  width: 20px;
  height: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
}
.top-bar-container div {
  background-color: #e4d3fb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: relative;
}
.top-bar-container div > img:first-child {
  height: 2rem;
  margin: 0 auto;
}
.top-bar-container {
  display: flex;
  align-items: center;
}
</style>
