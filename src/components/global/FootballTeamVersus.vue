<template>
  <div>
    <div class="football-team-versus">
      <div class="football-team-versus__question-mark">
        <div class="football-team-versus__question-item-wrap football-team-versus__question-item-wrap-active">
          <div style="position:relative;" v-show="teamTable.teamData === true">
            <p class="football-team-versus__team-name h1">ARSENAL</p>
            <img src="../../static/images/team-logo-1.svg" alt="team-logo-1" class="football-team-versus__team-img">
          </div>
        </div>
        <div class="football-team-versus__question-item-wrap" :class="{'choose-team-wrap' : teamTable.teamData === false}">
          <div v-show="teamTable.teamData === true">
            <div class="football-team-versus__question-item football-team-versus__question-second"></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="football-team-versus__choose-block">
          <button class="football-team-versus__choose-item main__btn">{{ teamTable.teamA }}</button>
          <button class="football-team-versus__choose-item main__btn">{{ teamTable.teamB }}</button>
        </div>
      </div>
      <div class="football-team-versus__or">OR</div>
      <button class="football-team-versus__btn-create h1">CREATE A NEW TEAM</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FootballTeamVersus",
  props: {
    teamTable: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.choose-team-wrap {
  background: #1E394B !important;
}

.football-team-versus {
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
      position: relative;
      width: 147px;
      height: 33px;
      background: #C4C4C4;

      &-active {
        background: #0572BB;
      }
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
  &__team-img {
    position: absolute;
    right: 19px;
    top: -5px;
    width: 23px;
  }
  &__team-name {
    font-family: RobotoCondensed-Bold, sans-serif;
    color: #FFFFFF;
    font-size: 10px;
    line-height: 12px;
    padding-left: 11px;
  }
}
</style>