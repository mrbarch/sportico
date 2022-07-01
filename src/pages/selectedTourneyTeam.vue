<template>
  <div>
    <Header/>
    <Step :stepName="stepName"/>
    <div class="selected-tourney">
      <p class="selected-tourney__title h1">YOUR SELECTED TOURNEY IS</p>
      <p class="selected-tourney__subtitle h1">GACHIMUCHI LEAGUE</p>
      <button class="selected-tourney__btn">CHANGE</button>
      <button class="selected-tourney__btn-next main__btn">NEXT</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";

export default {
  name: "selectedTourneyTeam",
  data() {
    return {
      stepName: {
        title: 'ADD NEW FOOTBALL MATCH',
        step: 'STEP 1'
      }
    }
  },
  components: {
    Step,
    Header
  }
}
</script>

<style lang="scss">
.selected-tourney {
  display: flex;
  align-items: center;
  flex-direction: column;
  &__title {
    padding-top: 71px;
  }
  &__subtitle {
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    margin: 0;
  }
  &__btn {
    border: 1px solid #076DB2;
    border-radius: 5px;
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    margin-top: 57px;
    padding: 6px 78px;
    &-next {
      margin-top: 150px;
      margin-left: auto;
      margin-right: 19px;
      position: relative;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 145px;
      height: 30px;
    }
  }
}
</style>