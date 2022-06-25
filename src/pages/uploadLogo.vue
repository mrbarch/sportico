<template>
  <div>
    <Header/>
    <Step :stepName="stepName"/>
    <div class="upload-logo">
      <p class="upload-logo__title h1">
        UPLOAD LOGO FOR
      </p>
      <p class="upload-logo__subtitle h1">LIVERPOOL</p>
      <button class="upload-logo__btn main__btn">UPLOAD</button>
      <button class="upload-logo__btn-continue">CONTINUE WITHOUT LOGO</button>
      <button class="upload-logo__btn-back btn__back">BACK</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";

export default {
  name: "uploadLogo",
  data() {
    return {
      stepName: {
        title: 'CREATING A NEW TEAM',
        step: 'STEP 2'
      }
    }
  },
  components: {
    Step,
    Header,
  }
}
</script>

<style lang="scss">
.upload-logo {
  display: flex;
  align-items: center;
  flex-direction: column;
  &__title {
    padding-top: 71px;
  }
  &__subtitle {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    margin: 0;
  }
  &__btn {
    margin-top: 57px;
    padding: 7px 80px;
    &-continue {
      font-family: RobotoCondensed-Bold, sans-serif;
      border: 1px solid #076DB2;
      border-radius: 5px;
      font-weight: 800;
      font-size: 14px;
      line-height: 16px;
      margin-top: 225px;
      padding: 6px 25px;
      color: #1E394B;
    }
    &-back {
      margin-top: 25px;
      padding: 6px 58px;
    }
  }
}
</style>