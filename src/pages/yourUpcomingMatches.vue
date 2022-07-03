<template>
  <div>
    <Header/>
    <div class="your-upcoming-matches">
      <div class="your-upcoming-matches__burger" @click="burgerActive = true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="your-upcoming-matches__burger-menu" :class="{'burger-show' : burgerActive === true}">
        <img src="../static/images/close-burger.svg" alt="close-burger" class="your-upcoming-matches__burger-close" @click="burgerActive = false">
        <p class="your-upcoming-matches__burger-title h1">SORT BY</p>
        <ul class="your-upcoming-matches__burger-list h1">
          <li class="your-upcoming-matches__burger-item">UPCOMING</li>
          <li class="your-upcoming-matches__burger-item">TOURNAMENT</li>
        </ul>
      </div>
      <p class="your-upcoming-matches__title h1">YOUR UPCOMING MATCHES</p>
    </div>
    <div v-for="matchItem in shortList" :key="matchItem.index" class="your-upcoming-matches__item-wrap">
      <MatchItem :match-items="matchItem"/>
    </div>
    <p class="your-upcoming-matches__subtitle">CHAMPIONS LEAGUE UEFA</p>
    <div v-for="matchItem in shortListPremier" :key="matchItem.index" class="your-upcoming-matches__item-wrap">
      <MatchItem :match-items="matchItem"/>
    </div>
    <p class="your-upcoming-matches__subtitle">PREMIERE LEAGUE </p>
    <div v-for="matchItem in shortListLeague" :key="matchItem.index" class="your-upcoming-matches__item-wrap">
      <MatchItem :match-items="matchItem"/>
    </div>
    <div class="container">
      <div class="your-upcoming-matches__btns">
        <button class="your-upcoming-matches__btn main__btn">ADD MATCH</button>
        <button class="your-upcoming-matches__btn-back btn__back">DELETE MATCH</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import MatchItem from "@/components/global/MatchItem";

export default {
  name: "yourUpcomingMatches",
  components: {
    Header,
    MatchItem
  },
  data() {
    return {
      burgerActive: false ,
      matchItems: [
        {
          dateOfMatch: 'TODAY AT 21:45',
          timeToMatch: '01:22:44',
          toMatch: true,
          deleteButton: false,
        },
        {
          dateOfMatch: '22.06.22 AT 21:45',
          timeToMatch: '37:22:44',
          toMatch: false,
          deleteButton: false,
        },
        {
          dateOfMatch: '23.06.22 AT 21:45',
          timeToMatch: '127:22:44',
          toMatch: false,
          deleteButton: false,
        },
        {
          dateOfMatch: '24.06.22 AT 21:45',
          timeToMatch: '233:83:09',
          toMatch: false,
          deleteButton: false,
        },
        {
          dateOfMatch: '25.07.22 AT 21:45',
          timeToMatch: '--:--:--',
          toMatch: true,
          deleteButton: false,
        }
      ]
    }
  },
  computed: {
    shortList() {
      return this.matchItems.slice(0, 1)
    },
    shortListPremier() {
      return this.matchItems.slice(1, 4)
    },
    shortListLeague() {
      return this.matchItems.slice(4, 5)
    }
  }
}
</script>

<style lang="scss">
.burger-show {
  display: block !important;
}

.your-upcoming-matches {
  margin-bottom: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__showTourney {
  }
  &__item-wrap {
    margin-bottom: 20px;
  }

  &__title {
    padding-top: 7px;
  }

  &__subtitle {
    margin: -4px 0 16px 20px;
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 10px;
    line-height: 12px;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    margin-top: 84px;
    margin-bottom: 30px;
  }

  &__btn {
    padding: 7px 37px;
    margin: 0;

    &-back {
      margin: 0;
      padding: 6px 37px;
    }
  }

  &__burger {
    position: absolute;
    height: 20px;
    width: 18px;
    left: 20px;
    top: 20px;

    &-title {
      align-self: start;
      color: #007ACC;
      padding: 25px 0 0 19px;
      justify-content: start;
    }

    &-list {
      display: initial;
      flex-direction: column;
      padding-left: 29px;
    }

    &-item {
      justify-content: start;
      padding-left: 42px;
      padding-bottom: 12px;
    }

    &-menu {
      display: none;
      width: 188px;
      height: 171px;
      background: #F3F3F3;
      border: 1px solid #007ACC;
      position: absolute;
      top: 10px;
      z-index: 5;
      flex-direction: column;
    }

    &-close {
      position: absolute;
      right: 19px;
      top: 15px;
    }

    span {
      background: #D9D9D9;
      border-radius: 4px;
      position: absolute;

      &:nth-child(1) {
        width: 18px;
        height: 2px;
      }

      &:nth-child(2) {
        top: 4px;
        width: 15px;
        height: 2px;
      }

      &:nth-child(3) {
        top: 8px;
        width: 11px;
        height: 2px;
      }

    }
  }
}
</style>