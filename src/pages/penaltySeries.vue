<template>
  <div>
    <HeaderBetIsOn :green-btn="greenBtn"/>
    <BetIsOn :bet-is="betIs" @open="playingTimeModal = true"/>
    <div class="penalty-series">
      <div class="penalty-series__line penalty-series__line-left"></div>
      <div class="penalty-series__line penalty-series__line-right"></div>
      <button class="penalty-series__btn-pause">PRESS PAUSE TO BETS OFF</button>
    </div>
    <BetsWrap :bets-wrap="betsWrap"/>
    <BetsWrap :bets-wrap="betsWrapHits"/>
    <PercentOfPosession/>
    <BetsWrap :bets-wrap="betsWrapMatchStats"/>
    <div class="penalty-series__match-status">
      <p class="penalty-series__match-title h1">
        MATCH STATUS
      </p>
      <p class="penalty-series__match-subtitle h1">PENALTY SERIES</p>
      <div class="container">
        <div class="penalty-series__match-btns">
          <button class="penalty-series__match-btn-pause">PAUSE</button>
          <button class="penalty-series__match-btn-end">END OF SERIES</button>
        </div>
      </div>
    </div>

    <div class="playing-time-modal" v-show="playingTimeModal === true">
      <img src="../static/images/close-burger.svg" alt="close" class="playing-time-modal__close" @click="playingTimeModal = false">
      <p class="playing-time-modal__title h1">PLAYING TIME</p>
      <div class="playing-time-modal__slider-row">
        <ul class="playing-time-modal__slider-col">
          <li class="playing-time-modal__slider-item"
              v-for="hoursItem in hoursItems"
              :key="hoursItem"
          >
            {{ hoursItem }}
          </li>
        </ul>
        <ul class="playing-time-modal__slider-col">
          <li class="playing-time-modal__slider-item"
              v-for="minutesItem in minutesItems"
              :key="minutesItem"
          >
            {{ minutesItem }}
          </li>
        </ul>
        <ul class="playing-time-modal__slider-col">
          <li class="playing-time-modal__slider-item"
              v-for="secondsItem in secondsItems"
              :key="secondsItem"
          >
            {{ secondsItem }}
          </li>
        </ul>
      </div>
      <button class="playing-time-modal__btn main__btn">CONFIRM</button>
    </div>
  </div>
</template>

<script>
import HeaderBetIsOn from "@/components/global/HeaderBetIsOn";
import BetIsOn from "@/components/global/BetIsOn";
import BetsWrap from "@/components/global/BetsWrap";
import PercentOfPosession from "@/components/global/PercentOfPosession";

export default {
  name: "penaltySeries",
  data() {
    return {
      hoursItems: [17, 18, 19, 20, 21, 22, 23, 24, 25],
      minutesItems: ['07', '08', '09', '10', '11', '12', '13', '14', '15'],
      secondsItems: ['55', '56', '57', '58', '59', '00', '01', '02', '03'],
      playingTimeModal: false,
      greenBtn: true,
      betsWrap: {
        title: 'GOAL',
        firstTeam: 'ARSENAL',
        secondTeam: 'LIVERPOOL',
        btnName: 'ADJUST TIME'

      },
      betsWrapHits: {
        title: 'HITS ON MATCH',
        subtitle: 'HITS OFF',
        subtitleSecond: 'HITS IN',
        showSubtitle: true,
        firstTeam: 'ARSENAL',
        secondTeam: 'LIVERPOOL',
        showSecond: true,
        btnName: 'ADJUST TIME'
      },
      betsWrapMatchStats: {
        title: 'MATCH STATS',
        subtitle: 'YELLOW CARDS',
        subtitleSecond: 'RED CARDS',
        subtitleThird: 'CORNERS',
        subtitleFourth: 'PENALTY',
        showFourth: true,
        showSubtitle: true,
        firstTeam: 'ARSENAL',
        secondTeam: 'LIVERPOOL',
        showSecond: true,
        btnName: 'ADJUST TIME'
      },
      betIs: {
        title: 'BETS IS ON'
      }
    }
  },
  components: {
    HeaderBetIsOn,
    BetIsOn,
    BetsWrap,
    PercentOfPosession,
  }
}
</script>

<style lang="scss">
.penalty-series {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;

  &__line {
    width: 5px;
    height: 1200px;
    background: #19D92C;
    position: absolute;
    top: -76px;

    &-left {
      left: 0;
    }

    &-right {
      right: 0;
    }
  }

  &__btn-pause {
    position: absolute;
    top: -21px;
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

  &__match {
    &-status {
      background: linear-gradient(91.88deg, #007ACC -11.43%, #B21107 109.55%);
    }

    &-title {
      color: #FFFFFF;
      padding-top: 19px;
    }

    &-subtitle {
      color: #FFFFFF;
      font-size: 14px;
      line-height: 16px;
    }

    &-btns {
      padding-bottom: 35px;
      padding-top: 27px;
      display: flex;
      justify-content: space-between;
    }

    &-btn-pause {
      font-family: RobotoCondensed-Bold, sans-serif;
      font-weight: 800;
      font-size: 14px;
      border-radius: 5px;
      line-height: 16px;
      border: 1px solid #FFFFFF;
      color: #FFFFFF;
      background: transparent;
      padding: 6px 53px;
    }

    &-btn-end {
      font-family: RobotoCondensed-Bold, sans-serif;
      font-weight: 800;
      font-size: 14px;
      border-radius: 5px;
      line-height: 16px;
      color: #1E394B;
      background: #D9D9D9;
      border: none;
      padding: 6px 36px;
    }
  }
}
.playing-time-modal {
  z-index: 9999;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 252px;
  right: 0;
  height: 458px;
  width: 360px;
  background: rgba(3, 41, 67, 0.8);
  backdrop-filter: blur(4px);

  &__close {
    position: absolute;
    right: 35px;
    top: 35px;
  }

  &__title {
    color: #FFFFFF;
    padding-top: 66px;
  }
  &__btn {
    color: #1E394B;
    background: #D9D9D9;
    border: 1px solid #FFFFFF;
    margin-top: 32px;
    padding: 6px 44px;
  }
  &__slider {
    &-row {
      padding: 6px 15px 0 15px;
      display: flex;
      justify-content: space-between;
    }

    &-col {
      margin-top: 0;
      padding: 0;
    }

    &-item {
      font-family: Inter-Medium, sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #A9A9A9;
      display: flex;
      justify-content: center;

      &-active {
        border: 2px solid #C4C4C4;
      }

      &:nth-child(1) {
        color: #A9A9A9;
      }

      &:nth-child(2) {
        color: #BFBFBF;
      }

      &:nth-child(3) {
        color: #D2D2D2;
        padding-bottom: 5px;
      }

      &:nth-child(4) {
        color: #FFFFFF;
      }

      &:nth-child(5) {
        border: 2px solid #C4C4C4;
        margin: 16px 0 15px 0;
        padding: 5px 0px;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        font-family: Inter-Bold, sans-serif;
        width: 85px;
        color: #FFFFFF;
      }

      &:nth-child(6) {
        padding-bottom: 3px;
        color: #FFFFFF;
      }

      &:nth-child(7) {
        padding-bottom: 3px;
        color: #D2D2D2;
      }

      &:nth-child(8) {
        color: #BFBFBF;
      }

      &:nth-child(9) {
        color: #A9A9A9;
      }
    }
  }
}
</style>