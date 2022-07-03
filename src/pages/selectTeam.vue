<template>
  <div>
    <Header/>
    <img
        @click="searchInputTeam = !searchInputTeam"
        v-if="!searchInputTeam"
        src="../../src/static/images/search.svg"
        class="select-team__search"
        alt="search"
    />
    <div class="select-team__search-input-container" v-if="searchInputTeam">
      <input class="main__input select-team__search-input" v-model="inputTextTeam">
      <img src="../../src/static/images/search.svg" alt="search" class="select-team__search-input-img">
    </div>
    <div class="select-team__no-results h1" v-if="inputTextTeam !== ''">NO RESULTS</div>
    <div class="select-team" v-if="!searchInputTeam">
      <div class="select-team__title h1">SELECT A TEAM FROM THE LIST</div>
      <div class="select-team__block">
        <div
            class="select-team__item"
            @click="setActiveItem(index)"
            v-for="(teamItem, index) in teamItems"
            :key="index"
            :class="{'select-team__item-active' : index === activeTeamItem }"
        >
          {{ teamItem.teamName }}
          <img :src="setTeamImg(teamItem.teamImg)" alt="team-img" class="select-team__item-img">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="select-team__btns">
        <button class="select-team__btn-create">CREATE A NEW TEAM</button>
        <button class="select-team__btn main__btn" :disable="activeTeamItem === ''">NEXT</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";

export default {
  name: "selectTeam",
  data() {
    return {
      inputTextTeam: null,
      searchInputTeam: false,
      activeTeamItem: '',
      teamItems: [
        {
          teamName: 'LIVERPOOL',
          teamImg: 'team-logo.svg',
        },
        {
          teamName: 'LIVERPOOL',
          teamImg: 'team-logo.svg',
        },
        {
          teamName: 'LIVERPOOL',
          teamImg: 'team-logo.svg',
        },
        {
          teamName: 'ARSENAL',
          teamImg: 'team-logo-1.svg',
        },
        {
          teamName: 'ARSENAL',
          teamImg: 'team-logo-1.svg',
        },
        {
          teamName: 'ARSENAL',
          teamImg: 'team-logo-1.svg',
        },
        {
          teamName: 'LIVERPOOL',
          teamImg: 'team-logo.svg',
        },
        {
          teamName: 'LIVERPOOL',
          teamImg: 'team-logo.svg',
        },
        {
          teamName: 'LIVERPOOL',
          teamImg: 'team-logo.svg',
        },
        {
          teamName: 'ARSENAL',
          teamImg: 'team-logo-1.svg',
        },
        {
          teamName: 'ARSENAL',
          teamImg: 'team-logo-1.svg',
        },
        {
          teamName: 'ARSENAL',
          teamImg: 'team-logo-1.svg',
        },
        {
          teamName: 'LIVERPOOL',
          teamImg: 'team-logo.svg',
        },
        {
          teamName: 'LIVERPOOL',
          teamImg: 'team-logo.svg',
        },
        {
          teamName: 'LIVERPOOL',
          teamImg: 'team-logo.svg',
        },
        {
          teamName: 'ARSENAL',
          teamImg: 'team-logo-1.svg',
        },
        {
          teamName: 'ARSENAL',
          teamImg: 'team-logo-1.svg',
        },
        {
          teamName: 'ARSENAL',
          teamImg: 'team-logo-1.svg',
        },
      ]
    }
  },
  methods: {
    setActiveItem(item) {
      this.activeTeamItem = item
    },
    setTeamImg(imgName) {
      return require("../../src/static/images/" + imgName);
    },
  },
  components: {
    Header
  }
}
</script>

<style lang="scss">
.select-team {
  &__block {
    padding-top: 17px;
    overflow-y: scroll;
    height: 520px;
  }
  &__title {
    padding: 19px 0;
  }
  &__item {
    color: #FFFFFF;
    background: #1E394B;
    border-radius: 0 5px 5px 0;
    width: 192px;
    height: 34px;
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 19px;
    display: flex;
    align-items: center;
    padding: 0 0 0 63px;
    &-img {
      width: 23px;
      padding-left: 9px;
    }
    &-active {
      background: #0572BB;
    }
  }
  &__btns {
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
    margin-bottom: 30px;
  }
  &__btn {
    margin: 0;
    position: relative;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 30px;
    &-create {
      padding: 1px 14px;
      font-family: RobotoCondensed-Bold, sans-serif;
      font-weight: 800;
      font-size: 14px;
      line-height: 16px;
      color: #1E394B;
      border: 1px solid #076DB2;
      border-radius: 5px;
    }
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