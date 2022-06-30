<template>
  <div class="middle-strategy-container">
    <div class="middle-strategy-wrapper">
      <div class="middle-strategy-title"></div>
      <div class="main-container">
        <MiddleStrategy />
        <!-- <Drafts /> -->
        <!-- <NoRiskPreset /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Drafts from "../components/Drafts.vue";
// import NoRiskPreset from "../components/NoRiskPreset.vue";
import MiddleStrategy from "../components/MiddleStrategy.vue";
export default {
  components: {
    // Filter,
    // Drafts,
    // NoRiskPreset,
    MiddleStrategy,
  },
};
</script>

<style scoped>
.middle-strategy-container {
  max-width: 100%;
  margin: 0 auto;
}
.middle-strategy-wrapper {
  margin-left: 250px;
  width: 80%;
}
.middle-strategy-title {
  padding-top: 2rem;
  display: flex;
  align-items: center;
}
.middle-strategy-title h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2rem;
}
</style>
