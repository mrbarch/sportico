<template>
  <div>
    <Header/>
    <Step :stepName="stepName"/>
    <div class="match-will-play">
      <p class="match-will-play__title h1">THIS MATCH WILL PLAY</p>
      <div class="match-will-play__block">
        <div class="match-will-play__item-wrap">
          <div class="match-will-play__item match-will-play__first">
            <p class="match-will-play__team-name h1">ARSENAL</p>
            <img src="../static/images/team-logo-1.svg" alt="team-logo-1" class="match-will-play__team-img">
          </div>
        </div>
        <div class="match-will-play__item-wrap">
          <div class="match-will-play__item match-will-play__second">
            <p class="match-will-play__team-name match-will-play__team-name-right h1">LIVERPOOL</p>
            <img src="../static/images/team-logo.svg" alt="team-logo"
                 class="match-will-play__team-img match-will-play__team-img-right">
          </div>
        </div>
      </div>
      <button class="match-will-play__btn-change h1">CHANGE</button>
    </div>
    <button class="match-will-play__btn main__btn">NEXT</button>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";

export default {
  name: "matchWillPlay",
  components: {
    Header,
    Step,
  },
  data() {
    return {
      stepName: {
        title: 'ADD NEW FOOTBALL MATCH',
        step: 'STEP 2'
      },
    }
  },
}
</script>

<style lang="scss">
.match-will-play {

  &__title {
    padding-top: 71px;
  }

  &__block {
    padding-top: 13px;
    display: flex;
    justify-content: space-between;
  }

  &__first {
    left: 105px;
  }

  &__second {
    left: 19px;
  }

  &__item {
    &-wrap {
      position: relative;
      width: 147px;
      height: 33px;
      background: #C4C4C4;

      &:nth-child(1) {
        border-radius: 0 5px 5px 0;
        background: #0572BB;
      }

      &:nth-child(2) {
        border-radius: 5px 0 0 5px;
        background: #1E394B;
      }
    }
  }

  &__btn-change {
    font-family: RobotoCondensed-Bold, sans-serif;
    border: 1px solid #076DB2;
    border-radius: 5px;
    font-size: 14px;
    line-height: 16px;
    margin: 30px auto 10px auto;
    padding: 6px 78px;
  }

  &__team-img {
    position: absolute;
    right: 19px;
    top: 5px;
    width: 23px;

    &-right {
      left: 20px;
      right: 0;
    }
  }

  &__team-name {
    font-family: RobotoCondensed-Bold, sans-serif;
    color: #FFFFFF;
    font-size: 10px;
    line-height: 12px;
    padding-left: 11px;

    &-right {
      padding: 0;
    }
  }
  &__btn {
    padding: 7px 57px;
    margin: 150px 20px 0 0;
    float: right;
  }
}
</style>