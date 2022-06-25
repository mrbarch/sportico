<template>
  <div>
    <Header/>
    <Step :step-name="stepName"/>
    <div class="select-mode">
      <p class="select-mode__title h1">SELECT A TOURNEY MODE</p>
      <div class="container">
        <div class="select-mode__choose">
          <p class="select-mode__item" @click="activeBtn = '45min'" :class="{'select-mode__item-active' : activeBtn === '45min'}">2 TIMES BY 45 MINUTES</p>
          <p class="select-mode__item" @click="activeBtn = '35min'" :class="{'select-mode__item-active' : activeBtn === '35min'}">2 TIMES BY 35 MINUTES</p>
          <p class="select-mode__item" @click="activeBtn = '40min'" :class="{'select-mode__item-active' : activeBtn === '40min'}">2 TIMES BY 40 MINUTES</p>
        </div>
        <button class="select-mode__btn main__btn" :class="{'select-mode__btn-active' : activeBtn !== ''}">CREATE</button>
      </div>
    </div>
  </div>
</template>

<script>
import Step from "@/components/global/Step";
import Header from "@/components/global/Header";

export default {
  name: "selectTourneyMode",
  data() {
    return {
      activeBtn: '',
      stepName: {
        title: 'CREATING A NEW TOURNAMENT',
        step: 'STEP 2'
      }
    }
  },
  components: {
    Header,
    Step,
  }
}
</script>

<style lang="scss">
.select-mode {
  &__title {
    padding-top: 30px;
  }
  &__choose {
    margin-top: 26px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__item {
    padding: 16px 1px;
    display: flex;
    justify-content: center;
    border: 1px solid #676767;
    border-radius: 5px;
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    color: #676767;

    &-active {
      color: #076DB2;
      border: 1px solid #076DB2;
    }

    &:nth-child(1) {
      flex: 100%;
      margin-bottom: 25px;
    }
    &:nth-child(2) {
      align-items: center;
      padding: 16px 15px;
    }
    &:nth-child(3) {
      align-items: center;
      padding: 16px 15px;
    }
  }
  &__btn {
    background: #7D7D7D;
    margin-top: 201px;
    padding: 7px 81px;
    &-active {
      background: #0F5E92;
    }
  }
}
</style>