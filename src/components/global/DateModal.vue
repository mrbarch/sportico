<template>
  <div>
    <div class="date-modal">
      <img src="../../static/images/close-burger.svg" alt="close" class="date-modal__close" @click="$emit('close')">
      <p class="date-modal__title h1">DATE</p>
      <div class="date-modal__slider-row">
        <ul class="date-modal__slider-col">
          <li class="date-modal__slider-item"
              v-for="(dayItem, index) in dayItems"
              :key="dayItem"
              :class="{'date-modal__slider-item-active' : index = activeData}"
          >
            {{ dayItem }}
          </li>
        </ul>
        <ul class="date-modal__slider-col">
          <li class="date-modal__slider-item"
              v-for="(monthItem, index) in monthItems"
              :key="monthItem"
              :class="{'date-modal__slider-item-active' : index = activeMonth}"
          >
            {{ monthItem }}
          </li>
        </ul>
        <ul class="date-modal__year-slider-col">
          <li class="date-modal__year-slider-item"
              v-for="(yearItem, index) in yearItems"
              :key="yearItem"
              :class="{'date-modal__year-slider-item-active' : index = activeYear}"
          >
            {{ yearItem }}
          </li>
        </ul>
      </div>
      <button class="date-modal__btn main__btn">CONFIRM</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DateModal",
  data() {
    return {
      activeData: null,
      activeMonth: null,
      activeYear: null,
      dayItems: [17, 18, 19, 20, 21, 22, 23, 24, 25],
      monthItems: ['DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
      yearItems: [2022, 2023, 2024, 2025, 2026],
    }
  }
}
</script>

<style lang="scss">
.date-modal {
  position: absolute;
  bottom: 0;
  left: 0;
  top: 252px;
  right: 0;
  height: 458px;
  width: 100%;
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

  &__year-slider {
    &-row {
      padding: 6px 15px 0 15px;
      display: flex;
      justify-content: space-between;
    }

    &-col {
      margin-top: 0;
      padding: 72px 0 0 0;
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
        border: 2px solid #FFFFFF;
        margin: 16px 0 15px 0;
        padding: 5px 0px;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        font-family: Inter-Bold, sans-serif;
        width: 85px;
        color: #FFFFFF;
      }

      &:nth-child(2) {
        color: #FFFFFF;
        padding-bottom: 3px;
      }

      &:nth-child(3) {
        color: #D2D2D2;
        padding-bottom: 3px;
      }

      &:nth-child(4) {
        color: #BFBFBF;
      }

      &:nth-child(5) {
        color: #A9A9A9;
      }
    }
  }
}
</style>