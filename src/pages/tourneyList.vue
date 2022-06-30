<template>
  <div>
    <Header/>
    <img
        @click="searchInput = !searchInput"
        v-if="!searchInput"
        src="../../src/static/images/search.svg"
        class="tourney-list__search"
        alt="search"
    />
    <div class="tourney-list__search-input-container" v-if="searchInput">
      <input class="main__input tourney-list__search-input" v-model="inputText">
      <img src="../../src/static/images/search.svg" alt="search" class="tourney-list__search-input-img">
    </div>
    <div class="tourney-list__no-results h1" v-if="inputText > 1">NO RESULTS</div>
    <div class="tourney-list" v-if="!searchInput">
      <div class="tourney-list__title h1">SELECT A TOURNEY FROM THE LIST</div>
      <div class="tourney-list__block">
        <div
            class="tourney-list__item"
            @click="setActiveItem(index)"
            v-for="(tourneyItem, index) in tourneyItems"
            :key="index"
            :class="{'tourney-list__item-active' : index === activeTourneyItem }"
        >
          {{ tourneyItem }}
        </div>
      </div>
    </div>
    <button class="tourney-list__btn main__btn" :disable="activeTourneyItem === ''">
      NEXT
    </button>
  </div>
</template>

<script>
import Header from "@/components/global/Header";

export default {
  name: "tourneyList",
  data() {
    return {
      inputText: null,
      searchInput: false,
      activeTourneyItem: '',
      tourneyItems: [
        'EXTRACLASSA A',
        'EXTRACLASSA B',
        'GACHIMUCHI LEAGUE',
        'UEFA EURO 2022',
        'EXTRACLASSA A',
        'EXTRACLASSA B',
        'GACHIMUCHI LEAGUE',
        'UEFA EURO 2022',
        'EXTRACLASSA A',
        'EXTRACLASSA B',
      ]
    }
  },
  methods: {
    setActiveItem(item) {
      this.activeTourneyItem = item
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss">
.tourney-list {
  &__block {
    padding-top: 36px;
  }

  &__title {
    padding-top: 19px;
  }

  &__item {
    color: #FFFFFF;
    background: #1E394B;
    border-radius: 0 5px 5px 0;
    width: 192px;
    height: 24px;
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 20px;
    padding: 9px 0 0 63px;

    &-active {
      background: #0572BB;
    }
  }

  &__btn {
    margin-top: 73px;
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

  &__no-results {
    padding-top: 210px;
  }

  &__search {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 90px;
    left: 24px;
  }

  &__search-input {
    margin-top: 6px;
    width: 296px;
    padding-left: 20px;
    height: 34px;

    &-container {
      position: relative;
      width: 320px;
      margin: 0 auto;
    }

    &-img {
      position: absolute;
      top: 18px;
      right: 13px;
    }
  }
}
</style>