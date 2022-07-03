<template>
  <div>
    <div class="playing-time-modal">
      <img src="../../static/images/close-burger.svg" alt="close" class="playing-time-modal__close" @click="$emit('close')">
      <p class="playing-time-modal__title h1">DATE</p>
      <div class="playing-time-modal__slider-row">
        <ul class="playing-time-modal__slider-col">
          <li class="playing-time-modal__slider-item"
              v-for="(dayItem, index) in dayItems"
              :key="dayItem"
              :class="{'playing-time-modal__slider-item-active' : index = activeData}"
          >
            {{ dayItem }}
          </li>
        </ul>
        <ul class="playing-time-modal__slider-col">
          <li class="playing-time-modal__slider-item"
              v-for="(monthItem, index) in monthItems"
              :key="monthItem"
              :class="{'playing-time-modal__slider-item-active' : index = activeMonth}"
          >
            {{ monthItem }}
          </li>
        </ul>
        <ul class="playing-time-modal__year-slider-col">
          <li class="playing-time-modal__year-slider-item"
              v-for="(yearItem, index) in yearItems"
              :key="yearItem"
              :class="{'playing-time-modal__year-slider-item-active' : index = activeYear}"
          >
            {{ yearItem }}
          </li>
        </ul>
      </div>
      <button class="playing-time-modal__btn main__btn">CONFIRM</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayingTImeModal",
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

</style>