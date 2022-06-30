<template>
  <div v-if="modelOpen" class="model-container">
    <div class="container">
      <div class="model-topbar">
        <h3>Set a name for the backtest</h3>
        <img
          src="@/assets/icons/cross.svg"
          alt=""
          @click="changeStatus(false)"
        />
      </div>
      <div class="model-inputs-container">
        <div>
          <label for="">Backtest name</label>
          <input type="text" placeholder="Middle Strategy No Risk Test 1" />
        </div>
        <div>
          <label for="">Backtest description</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Go to settings</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["changeStatus"]),
  },
  computed: {
    ...mapGetters(["modelOpen"]),
  },
};
</script>

<style scoped>
.model-container {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.62); /* margin-left: 200px; */
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  background: #fff;
  width: 40%;
  /* height: 60%; */
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
}
label {
  display: block;
  font-size: 1.3rem;
}
input,
textarea {
  width: 100%;
}
.model-topbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}
.model-topbar h3 {
  font-size: 1.7rem;
}
.model-inputs-container {
  width: 100%;
  padding: 2rem;
}
.model-inputs-container div {
  margin-top: 2rem;
}
.model-inputs-container div input,
textarea {
  padding: 1rem 0.4rem;
  outline: none;
  border: none;
  border-radius: 12px;
  border: 1px solid #9d97a4;
  margin-top: 1rem;
}
button {
  padding: 0px;

  height: 52px;
  width: 100%;
  border: none;
  background: linear-gradient(64.09deg, #3a64fa 15.45%, #c041fb 83.65%);
  box-shadow: inset 0px 4px 30px rgba(238, 205, 254, 0.32);
  border-radius: 16px;
  color: #fff;
}
</style>
