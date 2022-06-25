<template>
  <div>
    <div class="team-versus">
      <div class="team-versus__question-mark">
        <div class="team-versus__question-item-wrap">
          <div class="team-versus__question-item team-versus__question-first"></div>
        </div>
        <div class="team-versus__question-item-wrap">
          <div class="team-versus__question-item team-versus__question-second"></div>
        </div>
      </div>
      <div class="container">
        <div class="team-versus__choose-block">
          <button class="team-versus__choose-item main__btn">CHOOSE TEAM A</button>
          <button class="team-versus__choose-item main__btn">CHOOSE TEAM B</button>
        </div>
      </div>
      <div class="team-versus__or">OR</div>
      <button class="team-versus__btn-create h1">CREATE A NEW TEAM</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamVersus"
}
</script>

<style lang="scss">
.team-versus {
  padding-top: 30px;

  &__question-mark {
    display: flex;
    justify-content: space-between;
  }

  &__question-first {
    left: 105px;
  }

  &__question-second {
    left: 19px;
  }

  &__question-item {
    position: relative;
    top: 5px;
    background-color: #E9E9E9;
    border-radius: 50px;
    width: 23px;
    height: 23px;

    &-wrap {
      width: 147px;
      height: 33px;
      background: #C4C4C4;

      &:nth-child(1) {
        border-radius: 0 5px 5px 0;
      }

      &:nth-child(2) {
        border-radius: 5px 0 0 5px;
      }
    }

    &:nth-child(1) {
      &:before {
        content: '';
        background: url("../../static/images/question-sign.svg") no-repeat;
        background-size: 69%;
        position: absolute;
        width: 10px;
        height: 11px;
        left: 8px;
        top: 6px;
      }
    }
  }
  &__choose {
    &-block {
      display: flex;
      justify-content: space-between;
      padding-top: 40px;
    }
    &-item {
      padding: 7px 27px;
      margin: 0;
    }
  }
  &__or {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000000;
    padding-top: 18px;
  }
  &__btn-create {
    font-family: RobotoCondensed-Bold, sans-serif;
    border: 1px solid #076DB2;
    border-radius: 5px;
    font-size: 14px;
    line-height: 16px;
    margin: 18px auto 10px auto;
    padding: 6px 41px;
  }
}
</style>