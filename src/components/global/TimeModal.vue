<template>
  <div>
    <div class="time-modal">
      <img src="../../static/images/close-burger.svg" alt="close" class="time-modal__close" @click="$emit('close')">
      <p class="time-modal__title h1">DATE</p>
      <div class="time-modal__slider-row">
        <ul class="time-modal__slider-col">
          <li class="time-modal__slider-item"
              v-for="(hoursItem, index) in hoursItems"
              :key="hoursItem"
              :class="{'time-modal__slider-item-active' : index = activeData}"
          >
            {{ hoursItem }}
          </li>
        </ul>
        <ul class="time-modal__slider-col">
          <li class="time-modal__slider-item"
              v-for="(minutesItem, index) in minutesItems"
              :key="minutesItem"
              :class="{'time-modal__slider-item-active' : index = activeMonth}"
          >
            {{ minutesItem }}
          </li>
        </ul>
        <ul class="time-modal__slider-col">
          <li class="time-modal__slider-item"
              v-for="(secondsItem, index) in secondsItems"
              :key="secondsItem"
              :class="{'time-modal__slider-item-active' : index = activeYear}"
          >
            {{ secondsItem }}
          </li>
        </ul>
      </div>
      <button class="date-modal__btn main__btn">CONFIRM</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeModal",
  data() {
    return {
      activeData: null,
      activeMonth: null,
      activeYear: null,
      hoursItems: [17, 18, 19, 20, 21, 22, 23, 24, 25],
      minutesItems: ['07', '08', '09', '10', '11', '12', '13', '14', '15'],
      secondsItems: ['55', '56', '57', '58', '59', '00', '01', '02', '03'],
    }
  }
}
</script>

<style lang="scss">
.time-modal {
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
  &__btn {
    color: #1E394B;
    background: #D9D9D9;
    border: 1px solid #FFFFFF;
    margin-top: 32px;
    padding: 6px 44px;
  }
  &__title {
    color: #FFFFFF;
    padding-top: 66px;
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