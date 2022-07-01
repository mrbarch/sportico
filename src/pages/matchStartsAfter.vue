<template>
  <div style="height: 100vh;">
    <HeaderBetIsOn :green-btn="greenBtn"/>
    <BetIsOn/>
    <div class="match-starts-after">
      <p class="match-starts-after__title h1">MATCH AUTOMATICALLY STARTS AFTER</p>
      <p class="match-starts-after__timer h1">01:22:44</p>
      <p class="match-starts-after__subtitle h1">AFTER THE MATCH STARTS, PRESS START TO CONTINUE WORKING WITH THE APP</p>
      <button class="match-starts-after__btn-start">START</button>
      <button class="match-starts-after__btn-change">CHANGE MATCH START TIME</button>
    </div>
  </div>
</template>

<script>
import HeaderBetIsOn from "@/components/global/HeaderBetIsOn";
import BetIsOn from "@/components/global/BetIsOn";

export default {
  name: "matchStartsAfter",
  data() {
    return {
      greenBtn: false
    }
  },
  components: {
    HeaderBetIsOn,
    BetIsOn
  }
}
</script>

<style lang="scss">
.match-starts-after {
  background: linear-gradient(90deg, #0673BC 0%, #1D3E54 92.23%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFFFFF;
  margin-top: 11px;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &__title {
    padding-top: 6px;
  }
  &__timer {
    font-size: 16px;
    line-height: 19px;
    margin: 0;
  }
  &__subtitle {
    font-size: 8px;
    line-height: 9px;
    padding-top: 8px;
  }
  &__btn-start {
    font-family: RobotoCondensed-Bold,sans-serif;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    background: #D9D9D9;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
    padding: 6px 52px;
    color: #1E394B;
  }
  &__btn-change {
    font-family: RobotoCondensed-Bold,sans-serif;
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    background: transparent;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    margin-top: 184px;
    padding: 7px 21px;
    color: #FFFFFF;
  }
}
</style>