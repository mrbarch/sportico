<template>
  <div>
    <Header/>
    <div class="creating-tournament">
      <Step :step-name="stepName"/>
      <button class="creating-tournament__btn main__btn">CHOOSE TOURNAMENT</button>
      <div class="creating-tournament__or">or</div>
      <button class="creating-tournament__btn-create main__btn">CREATE NEW</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";

export default {
  name: "addMatch",
  data() {
    return {
      stepName: {
        title: 'ADD NEW FOOTBALL MATCH',
        step: 'STEP 1'
      }
    }
  },
  components: {
    Header,
    Step
  }
}
</script>

<style lang="scss">
.creating-tournament {
  &__title {
    padding-top: 7px;
  }
  &__step {
    padding-top: 148px;
  }
  &__btn {
    margin-top: 103px;
    padding: 8px 36px;
    &-create {
      border: 1px solid #076DB2;
      background: #FFFFFF;
      color: #1E394B;
      margin-top: 17px;
      padding: 6px 60px;
    }
  }
  &__or {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    text-transform: uppercase;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-top: 17px;
  }
}
</style>