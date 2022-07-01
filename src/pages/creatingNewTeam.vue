<template>
  <div>
    <Header/>
    <Step :stepName="stepName"/>
    <div class="creating-new-team">
      <p class="creating-new-team__title h1">ENTER A TEAM NAME</p>
      <input type="text" class="creating-new-team__input main__input">
      <button class="creating-new-team__btn main__btn">CREATE</button>
      <button class="creating-new-team__btn-back btn__back">BACK</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";

export default {
  name: "creatingNewTeam",
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
.creating-new-team {
  display: flex;
  align-items: center;
  flex-direction: column;
  &__title {
    padding-top: 30px;
  }
  &__input {
    margin-top: 27px;
    width: 302px;
    height: 43px;
    padding-left: 14px;
    &::placeholder {
      font-family: Roboto-Regular, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #1E394B;
    }
  }
  &__btn {
    margin-top: 150px;
    padding: 7px 80px;
    &-back {
      margin-top: 25px;
      padding: 6px 58px;
    }
  }
}
</style>