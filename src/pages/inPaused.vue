<template>
  <div>
    <HeaderBetIsOn :green-btn="greenBtn"/>
    <BetIsOn :bet-is="betIs"/>
    <div class="bets-in-pause">
      <div class="bets-in-pause__line bets-in-pause__line-left"></div>
      <div class="bets-in-pause__line bets-in-pause__line-right"></div>
      <button class="bets-in-pause__btn-pause">PRESS PAUSE TO BETS ON</button>
    </div>
    <BetsWrap :bets-wrap="betsWrap"/>
    <BetsWrap :bets-wrap="betsWrapHits"/>
    <PercentOfPosession/>
    <BetsWrap :bets-wrap="betsWrapMatchStats"/>
    <div class="bets-in-pause__match-status">
      <p class="bets-in-pause__match-title h1">
        MATCH STATUS
      </p>
      <p class="bets-in-pause__match-subtitle h1">IN PAUSED</p>
      <div class="container">
        <div class="bets-in-pause__match-btns">
          <button class="bets-in-pause__match-btn bets-in-pause__match-btn-additional">ADDITIONAL TIME</button>
          <button class="bets-in-pause__match-btn bets-in-pause__match-btn-penalty">PENALTY SERIES</button>
          <button class="bets-in-pause__match-btn bets-in-pause__match-btn-end">END OF GAME</button>
          <button class="bets-in-pause__match-btn bets-in-pause__match-btn-continue">CONTINUE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBetIsOn from "@/components/global/HeaderBetIsOn";
import BetIsOn from "@/components/global/BetIsOn";
import BetsWrap from "@/components/global/BetsWrap";
import PercentOfPosession from "@/components/global/PercentOfPosession";

export default {
  name: "inPaused",
  data() {
    return {
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
        title: 'BETS IS OFF'
      }
    }
  },
  components: {
    HeaderBetIsOn,
    BetIsOn,
    BetsWrap,
    PercentOfPosession
  }
}
</script>

<style lang="scss">
.bets-in-pause {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;

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
    padding: 0 2px;
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
      padding-top: 27px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &-btn {
      margin-bottom: 50px;
    }

    &-btn-continue {
      font-family: RobotoCondensed-Bold, sans-serif;
      font-weight: 800;
      font-size: 14px;
      border-radius: 5px;
      line-height: 16px;
      border: 1px solid #FFFFFF;
      color: #FFFFFF;
      background: transparent;
      padding: 6px 42px;
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
      padding: 6px 33px;
    }
    &-btn-penalty {
      font-family: RobotoCondensed-Bold, sans-serif;
      font-weight: 800;
      font-size: 14px;
      border-radius: 5px;
      line-height: 16px;
      color: #1E394B;
      background: #D9D9D9;
      border: none;
      padding: 6px 25px;
    }
    &-btn-additional {
      font-family: RobotoCondensed-Bold, sans-serif;
      font-weight: 800;
      font-size: 14px;
      border-radius: 5px;
      line-height: 16px;
      color: #1E394B;
      background: #D9D9D9;
      border: none;
      padding: 6px 21px;
    }
  }
}
</style>