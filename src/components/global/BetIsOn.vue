<template>
  <div>
    <div class="bet-is-on">
      <div class="bet-is-on__team-row">
        <div class="bet-is-on__team-wrap bet-is-on__team-wrap-left" :class="{'bet-is-on__team-wrap-red' : betIs.red}">
          <div class="bet-is-on__col bet-is-on__col-left">
            <p class="bet-is-on__team-name h1">ARSENAL</p>
            <img src="../../static/images/team-logo-1.svg" alt="team-logo-1" class="bet-is-on__team-img">
          </div>
        </div>
        <div style="position:relative;">
          <div class="bet-is-on__bill"  :class="{'bet-is-on__bill-red' : betIs.red}">0:0</div>
          <img src="../../static/images/pause.svg" alt="pause" class="bet-is-on__pause">
        </div>
        <div class="bet-is-on__team-wrap bet-is-on__team-wrap-right" :class="{'bet-is-on__team-wrap-red' : betIs.red}">
          <div class="bet-is-on__col bet-is-on__col">
            <p class="bet-is-on__team-name bet-is-on__team-name-right h1">LIVERPOOL</p>
            <img src="../../static/images/team-logo.svg" alt="team-logo-1"
                 class="bet-is-on__team-img bet-is-on__team-img-right">
          </div>
        </div>
      </div>
      <div class="bet-is-on__row">
        <div class="bet-is-on__row-line" v-show="betIs.red"></div>
        <div class="container">
          <div class="bet-is-on__row-wrap">
            <div class="bet-is-on__row-text">{{ betIs.title }}</div>
            <div class="bet-is-on__row-text">{{ betIs.title }}</div>
          </div>
        </div>
      </div>
      <div class="bet-is-on__position-row">
        <div class="bet-is-on__position-wrap bet-is-on__position-wrap-left">
          <div class="bet-is-on__position-col bet-is-on__position-col-left">
            <p class="bet-is-on__position-name h1">1st</p>
          </div>
        </div>
        <div class="bet-is-on__position-wrap bet-is-on__position-wrap-right">
          <div class="bet-is-on__position-col bet-is-on__position-col-right">
            <p class="bet-is-on__position-name bet-is-on__position-name-right h1">00:00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BetIsOn",
  props: {
    betIs: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.bet-is-on__row-line {
  width: 100%;
  height: 1px;
  background: #ffffff;
}

.bet-is-on {
  position: relative;
  padding-top: 20px;
  z-index: 5;

  &__position-row {
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
  }

  &__position-wrap {
    display: flex;
    align-items: center;
    position: relative;
    width: 99px;
    height: 33px;
    background: linear-gradient(90deg, #1E394B 0%, #0572BB 95%);
    &-right {
      border-radius: 5px 0 0 5px;
    }

    &-left {
      border-radius: 0 5px 5px 0;
    }
  }
  &__position-col {
    background: #F1F1F1;
    border-radius: 4px;
    width: 82px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-left {
      margin-left: 11px;
    }
    &-right {
      margin-left: 6px;
    }
  }

  &__position-name {
    margin: 0;
  }

  &__row {
    width: 100%;
    height: 14px;
    background: linear-gradient(90deg, #076DB2 0.7%, #21313C 100%);
    margin-top: 19px;

    &-wrap {
      justify-content: space-between;
      display: flex;
      width: 320px;
    }

    &-text {
      font-family: RobotoCondensed-Bold, sans-serif;
      font-weight: 800;
      font-size: 10px;
      line-height: 12px;
      color: #FFFFFF;
    }
  }

  &__pause {
    position: absolute;
    left: -9px;
    top: 40px;
  }

  &__block {
    background: #CECECE;
    padding: 11px 0 0 0;
  }

  &__team-row {
    display: flex;
    justify-content: space-between;
  }

  &__team-wrap {
    position: relative;
    width: 147px;
    height: 34px;
    background: #C4C4C4;

    &-red {
      height: 31px;

      border: 1px solid #FFFFFF;
    }

    &-right {
      border-radius: 5px 0 0 5px;
      background: #1E394B;
      border-right: none;
    }

    &-left {
      border-radius: 0 5px 5px 0;
      background: #0572BB;
      border-left: none;
    }
  }

  &__bill {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-self: center;
    padding-top: 5px;
    &-red {
      color: #FFFFFF;
    }
  }

  &__team {
    &-name {
      font-family: RobotoCondensed-Bold, sans-serif;
      color: #FFFFFF;
      font-size: 10px;
      line-height: 12px;
      padding-left: 11px;

      &-right {
        padding: 0;
      }
    }

    &-img {
      position: absolute;
      right: 19px;
      top: 5px;
      width: 23px;

      &-right {
        left: 20px;
        right: 0;
      }
    }
  }
}
</style>