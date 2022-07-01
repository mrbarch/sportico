<template>
  <div style="height: 100vh;">
    <Header/>
    <BetIsOn :bet-is="betIs"/>
    <img src="../static/images/timeline.svg" alt="timeline" class="timeline__sign">
    <div class="timeline">
      <button class="timeline__btn">PRESS PAUSE TO BETS OFF</button>
      <p class="timeline__title h1">TIMELINE</p>
      <TimelineList />
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import BetIsOn from "@/components/global/BetIsOn";
import TimelineList from "@/components/global/TimelineList";

export default {
  name: "timeline",
  data() {
    return {
      betIs: {
        title: 'BETS IS ON',
      },
    }
  },
  components: {
    Header,
    BetIsOn,
    TimelineList
  }
}
</script>

<style lang="scss">
.timeline {
  position: relative;
  background: linear-gradient(90deg, #0673BC 0%, #1D3E54 92.23%);
  height: 100%;

  &__title {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    padding-top: 17px;
    padding-bottom: 15px;
    color: #ffffff;
    margin-bottom: 0;
  }

  &__btn {
    position: absolute;
    top: -32px;
    left: 32.5%;
    padding: 0 17px;
    font-family: RobotoCondensed-Bold, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 8px;
    line-height: 9px;
    color: #002F5E;
    border: 1px solid #002F5E;
    border-radius: 3px;
  }

  &__sign {
    position: absolute;
    top: 27px;
    left: 22px;
    width: 21px;
  }
}
</style>