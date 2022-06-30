<template>
  <Model />
  <div class="home">
    <SideBar />
    <div class="home-container">
      <TopBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Model from "./components/Model.vue";
import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";
export default {
  components: { TopBar, SideBar, Model },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background-color: #e5e5e5;
}
html {
  font-size: 10px;
}
.home {
  display: flex;
}
.home-container {
  flex: 4;
}
</style>
