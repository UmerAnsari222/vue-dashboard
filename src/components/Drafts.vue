<template>
  <Filter />
  <div class="drafts-container">
    <div class="drafts-topbar">
      <h3>Drafts</h3>
      <div class="topbar">
        <ul>
          <li class="active">Active</li>
          <li>Deleted</li>
          <li>Waiting for approval</li>
        </ul>
      </div>
    </div>
    <div class="drafts-wrapper">
      <div>
        <span>Preset Name</span>
        <span>Direction</span>
        <span>Currency</span>
        <span>Strategy</span>
        <span>Transaction type</span>
        <span>Profit</span>
        <span>Status</span>
        <span>Dates</span>
      </div>
      <div class="drafts-data-wrapper">
        <div class="drafts-data">
          <span>Middle Strategy No Risk Preset</span>
          <span class="long">LONG</span>
          <span>BTC</span>
          <span>conservative</span>
          <span>Composite</span>
          <span>0.0026 BTC</span>
          <span>Active</span>
          <span>01.04.2021</span>
          <span>
            <router-link to="/drafts/add/backtest">
              <img src="@/assets/icons/trash.svg" alt="" />
            </router-link>
            <img
              @click="handelClick"
              src="@/assets/icons/up-arrow.svg"
              alt=""
            />
          </span>
        </div>
        <div v-if="isOpen" class="drafts-data-inner">
          <div class="drafts-data-inner-topbar">
            <h4>Backtest 1</h4>
            <div>
              <img src="@/assets/icons/star.svg" alt="" />
              <img src="@/assets/icons/star.svg" alt="" />
              <img src="@/assets/icons/star.svg" alt="" />
              <img src="@/assets/icons/star.svg" alt="" />
              <img src="@/assets/icons/star.svg" alt="" />
            </div>
          </div>
          <div class="drafts-data-inner-grid">
            <span>Middle Strategy No Risk Preset</span>
            <div>
              <div class="middle-strategy-grid">
                <span class="long">LONG</span>
                <span>BTC</span>
                <span>conservative</span>
                <span>Composite</span>
                <span>0.0026 BTC</span>
                <span>Active</span>
                <span>01.04.2021</span>
                <span>
                  <img src="@/assets/icons/trash.svg" alt="" />
                </span>
              </div>
              <div class="middle-strategy-grid">
                <span class="long">LONG</span>
                <span>BTC</span>
                <span>conservative</span>
                <span>Composite</span>
                <span>0.0026 BTC</span>
                <span>Active</span>
                <span>01.04.2021</span>
                <span>
                  <img src="@/assets/icons/trash.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filter from "./Filter.vue";

export default {
  components: {
    Filter,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handelClick() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.drafts-container {
  background-color: #fff;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 10px;
  margin-left: 250px;
  width: 80%;
  margin-bottom: 4rem;
}
.drafts-topbar {
  display: flex;
  flex-direction: column;
}
.drafts-topbar h3 {
  font-size: 2rem;
  font-weight: 700;
}
.drafts-topbar .topbar {
  width: 30%;
  margin-top: 1rem;
}
.drafts-topbar .topbar ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.drafts-topbar .topbar ul li {
  list-style-type: none;
  font-size: 1.5rem;
  font-weight: 500;
}
.drafts-topbar .topbar ul li.active {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #d0d0f0;
}
.drafts-wrapper {
  margin-top: 2rem;
}
.drafts-wrapper div:first-child {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}
.drafts-wrapper .drafts-data {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}
.drafts-wrapper div:first-child > span {
  text-align: center;
}
.drafts-wrapper div:first-child > span:first-child {
  text-align: left;
}

.drafts-wrapper .drafts-data-wrapper .drafts-data > span:last-child {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.drafts-wrapper .drafts-data-wrapper .drafts-data > span:first-child {
  text-align: left;
}
.drafts-wrapper div:first-child > span {
  font-size: 1.3em;
  font-weight: 600;
}
.drafts-data-wrapper .drafts-data {
  margin-top: 1rem;
  padding: 1.3rem 1rem;
  border-radius: 12px;
  /* border: 1px solid #9d97a4; */
  box-shadow: -3px 0px 6px 1px rgba(199, 191, 191, 0.75);
  -webkit-box-shadow: -3px 0px 6px 1px rgba(199, 191, 191, 0.75);
  -moz-box-shadow: -3px 0px 6px 1px rgba(199, 191, 191, 0.75);
}
.drafts-wrapper .drafts-data > span {
  text-align: center;
  font-size: 1.2rem !important;
  font-weight: 500 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.long {
  background-color: #e3e3ee;
  border-radius: 199px;
}
.drafts-data-inner {
  background-color: #e0e0e9;
  border-radius: 10px;
  padding: 1rem 2rem;
  transition: all 0.5s ease-in-out;
}
.drafts-data-inner-topbar {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.drafts-data-inner-topbar h4 {
  font-size: 1.3rem;
}
.drafts-data-inner-grid {
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-top: 1rem !important;
  align-items: center;
}
.drafts-data-inner-grid div > .middle-strategy-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
.drafts-data-inner-grid div .middle-strategy-grid span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem !important;
  margin-bottom: 0.5rem;
}
.drafts-data-inner-grid span:last-child img {
  margin-left: 10rem;
}
</style>
