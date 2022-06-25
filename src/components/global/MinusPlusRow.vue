<template>
  <div>
    <div>

      <p class="minus-plus-row__title h1" v-show="betsWrap.showSubtitle">{{ betsWrap.subtitle }}</p>
      <div class="minus-plus-row">
        <div class="minus-plus-row__col">
          <img src="../../static/images/minus.svg" alt="minus" class="minus-plus-row__img">
          <img src="../../static/images/plus.svg" alt="plus" class="minus-plus-row__img">
          <p class="minus-plus-row__points h1">01</p>
        </div>
        <div class="minus-plus-row__line" :class="{'minus-plus-row__line-yellow' : betsWrap.subtitle === 'YELLOW CARDS'}"></div>
        <div class="minus-plus-row__col">
          <p class="minus-plus-row__points h1">01</p>
          <img src="../../static/images/minus.svg" alt="" class="minus-plus-row__img">
          <img src="../../static/images/plus.svg" alt="" class="minus-plus-row__img">
        </div>
      </div>

      <div v-show="betsWrap.showSecond === true">
        <p class="minus-plus-row__title-second h1" v-show="betsWrap.showSubtitle">{{ betsWrap.subtitleSecond }}</p>
        <div class="minus-plus-row">
          <div class="minus-plus-row__col">
            <img src="../../static/images/minus.svg" alt="minus" class="minus-plus-row__img">
            <img src="../../static/images/plus.svg" alt="plus" class="minus-plus-row__img">
            <p class="minus-plus-row__points h1">01</p>
          </div>
          <div class="minus-plus-row__line" :class="{'minus-plus-row__line-red' : betsWrap.subtitleSecond === 'RED CARDS'}"></div>
          <div class="minus-plus-row__col">
            <p class="minus-plus-row__points h1">01</p>
            <img src="../../static/images/minus.svg" alt="" class="minus-plus-row__img">
            <img src="../../static/images/plus.svg" alt="" class="minus-plus-row__img">
          </div>
        </div>
      </div>

      <div v-show="betsWrap.showFourth === true">
        <p class="minus-plus-row__title-third h1">{{ betsWrap.subtitleThird }}</p>
        <div class="minus-plus-row">
          <div class="minus-plus-row__col">
            <img src="../../static/images/minus.svg" alt="minus" class="minus-plus-row__img">
            <img src="../../static/images/plus.svg" alt="plus" class="minus-plus-row__img">
            <p class="minus-plus-row__points h1">01</p>
          </div>
          <div class="minus-plus-row__line" :class="{'minus-plus-row__line-white' : betsWrap.subtitleThird === 'CORNERS'}"></div>
          <div class="minus-plus-row__col">
            <p class="minus-plus-row__points h1">01</p>
            <img src="../../static/images/minus.svg" alt="" class="minus-plus-row__img">
            <img src="../../static/images/plus.svg" alt="" class="minus-plus-row__img">
          </div>
        </div>

        <p class="minus-plus-row__title-fourth h1">{{ betsWrap.subtitleFourth }}</p>
        <div class="minus-plus-row">
          <div class="minus-plus-row__col">
            <img src="../../static/images/minus.svg" alt="minus" class="minus-plus-row__img">
            <img src="../../static/images/plus.svg" alt="plus" class="minus-plus-row__img">
            <p class="minus-plus-row__points h1">01</p>
          </div>
          <div class="minus-plus-row__line"></div>
          <div class="minus-plus-row__col">
            <p class="minus-plus-row__points h1">01</p>
            <img src="../../static/images/minus.svg" alt="" class="minus-plus-row__img">
            <img src="../../static/images/plus.svg" alt="" class="minus-plus-row__img">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "MinusPlusRow",
  props: {
    betsWrap: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.minus-plus-row {
  display: flex;
  justify-content: space-between;
  padding-top: 11px;
  align-items: center;
  position: relative;

  &__title {
    font-size: 10px;
    line-height: 12px;
    margin-top: -12px;
    margin-bottom: -1px;
    &-second {
      font-size: 10px;
      line-height: 12px;
      margin-top: 10px;
      margin-bottom: 0;
    }
    &-third {
      font-size: 10px;
      line-height: 12px;
      margin-top: 13px;
      margin-bottom: 0;
    }
    &-fourth {
      font-size: 10px;
      line-height: 12px;
      margin-top: 12px;
      margin-bottom: 0;
    }
  }
  &__img {
    width: 30px;
  }

  &__col {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 134px;
  }

  &__points {
    font-size: 14px;
    line-height: 16px;
  }

  &__line {
    width: 3px;
    height: 31px;
    background: #076DB2;
    &-yellow {
      background: #E7EB1B;
    }
    &-red {
      background: #B21107;
    }
    &-white {
      background: #D7DDE1;
    }

  }
}
</style>