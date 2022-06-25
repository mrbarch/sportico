<template>
  <div>
    <div class="toaster">
      <h1 class="toaster__title">
        {{ toasterType.title }}
      </h1>
      <div class="toaster__circle" :style="{'border-color': toasterType.borderColor }"></div>
      <p class="toaster__info">
        {{ toasterType.info }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toaster",
  props: {
    toasterType: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.toaster {
  z-index: 99;
  position: fixed;
  bottom: 0;
  height: 154px;
  width: 100%;
  background: rgba(3, 41, 67, 0.8);
  backdrop-filter: blur(4px);
  &__title {
    position: relative;
    z-index: 3;
    font-family: Roboto-Bold, sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 14px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    padding-top: 28px;
  }
  &__circle {
    position: relative;
    z-index: 2;
    width: 42px;
    height: 42px;
    border-radius: 50px;
    margin: 0 auto;
    margin-top: 13px;
    border: 2.5px solid;
  }
  &__info {
    position: relative;
    z-index: 2;
    color: #ffffff;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-family: RobotoCondensed-Bold, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 8px;
    line-height: 9px;
  }
}
</style>