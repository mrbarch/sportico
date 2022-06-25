<template>
  <div>
    <div class="percentage-of-posession">
      <p class="percentage-of-posession__title h1">% OF POSESSION</p>
      <div class="percentage-of-posession__team-name-block">
        <p class="percentage-of-posession__team-name h1">ARSENAL</p>
        <p class="percentage-of-posession__team-name h1">LIVERPOOL</p>
      </div>
      <div class="percentage-of-posession__number-block">
        <p class="percentage-of-posession__number h1">67</p>
        <div class="percentage-of-posession__line"></div>
        <p class="percentage-of-posession__number h1">33</p>
      </div>
      <div class="percentage-of-posession__roulette">
        <p class="percentage-of-posession__roulette-number h1">67</p>
        <p class="percentage-of-posession__roulette-number h1">33</p>
      </div>
      <div class="percentage-of-posession__roulette-line">
        <img src="../../static/images/roulette.svg" alt="roulette" class="percentage-of-posession__roulette-item">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PercentOfPosession"
}
</script>

<style lang="scss">
.percentage-of-posession {
  z-index: 10;
  position: relative;
  margin-top: 11px;
  background: linear-gradient(90deg, #0673BC 0%, #1D3E54 92.23%);
  padding: 18px 20px 9px 20px;
  color: #FFFFFF;
  margin-bottom: 21px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__title {
    margin: 0;
  }

  &__team-name {
    font-size: 10px;
    line-height: 12px;
    margin: 0;

    &-block {
      width: 320px;
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
    }
  }
  &__number {
    font-size: 14px;
    line-height: 16px;
    &-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 78px;
    }
  }
  &__line {
    width: 3px;
    height: 31px;
    background: #076DB2;
  }
  &__roulette {
    position: relative;
    top: -22px;
    width: 320px;
    display: flex;
    justify-content: space-between;
    &-line {
      position: relative;
      width: 300px;
      height: 5px;
      background: #EDEDED;
      top: -16px;
    }
    &-item {
      width: 50px;
      position: absolute;
      top: -7px;
      right: 75px;
    }
  }
}
</style>