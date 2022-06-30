<template>
  <div v-if="!modelOpen" class="sidebar">
    <div class="sidebar-logo">
      <img src="@/assets/images/logo.svg" alt="" />
    </div>
    <div class="sidebar-list">
      <ul>
        <li>
          <router-link active-class="active" exact-active-class="active" to="/">
            <img src="@/assets/icons/board.svg" alt="" />
            <span>Главная</span>
          </router-link>
        </li>
        <li>
          <router-link
            active-class="active"
            exact-active-class="active"
            to="/strategies"
          >
            <img src="@/assets/icons/signal.svg" alt="" />
            <span>Стратегии</span>
          </router-link>
        </li>
        <li>
          <router-link
            active-class="active"
            exact-active-class="active"
            to="/drafts"
          >
            <img src="@/assets/icons/file.svg" alt="" />
            <span>Черновики</span>
          </router-link>
        </li>
        <li>
          <router-link
            active-class="active"
            exact-active-class="active"
            to="/create"
          >
            <img src="@/assets/icons/file.svg" alt="" />
            <span>Создать пресет</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="bottom-sidebar">
      <div class="profile-container">
        <img src="@/assets/images/profile.svg" alt="" />
        <span>Мой профиль</span>
      </div>
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
a {
  text-decoration: none;
}
.sidebar {
  background: #302a36;
  flex: 1;
  height: 100%;
  position: fixed;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
}

.sidebar-logo {
  margin: 0 auto;
}
.sidebar-logo img {
  height: 50px;
}
.sidebar-list {
  width: 80%;
  margin: 0 auto;
  margin-top: 1.6rem;
  flex: 1;
}
.sidebar-list ul li {
  list-style: none;
  margin-bottom: 2rem;
}
.sidebar-list ul li a {
  display: flex;
  padding: 1.4rem 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}
.sidebar-list ul li a:hover {
  background-color: #a04afc;
  color: #ffffff;
}

.active {
  background-color: #a04afc;
  color: #ffffff;
}

.sidebar-list ul li span {
  color: #d1ced4;
  font-size: 1.5rem;
  margin-left: 12px;
}
.sidebar-list ul li img {
  height: 24px;
}
.bottom-sidebar {
  padding: 0 2rem;
}
.bottom-sidebar {
  border-top: 1px solid #9a9a9a;
  margin-bottom: 1rem;
}
.bottom-sidebar .profile-container {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.bottom-sidebar .profile-container span {
  color: #d1ced4;
  margin-left: 1.5rem;
  font-size: 14px;
}
</style>
