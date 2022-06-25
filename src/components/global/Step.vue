<template>
  <div>
    <div class="step">
      <p class="step__title h1">
        {{ stepName.title }}
      </p>
      <h1 class="step__subtitle step__text">
        {{ stepName.step }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step",
  props: {
    stepName: {
      type: Object
    }
  }
}
</script>
step: 'STEP 1'

<style lang="scss">
  .step {
    display: flex;
    flex-direction: column;
    &__title {
      padding-top: 7px;
    }
    &__subtitle {
      padding-top: 148px;
    }
  }
</style>