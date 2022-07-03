<template>
  <div>
    <Header/>
    <Step :stepName="stepName"/>
    <div class="create-new-tournament">
      <p class="create-new-tournament__text h1">
        ENTER A TOURNEY NAME
      </p>
      <input type="text" placeholder="Gachimuchi League" class="main__input create-new-tournament__input">
      <button class="create-new-tournament__btn main__btn">
        NEXT
      </button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";

export default {
  name: "createNewTournament",
  data() {
    return {
      stepName: {
        title: 'CREATING A NEW TOURNAMENT',
        step: 'STEP 1'
      }
    }
  },
  components: {
    Header,
    Step
  }
}
</script>

<style lang="scss">
.create-new-tournament {
  &__text {
    padding-top: 30px;
  }
  &__input {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 38px;
    width: 296px;
    height: 44px;
    padding-left: 18px;
    &::placeholder {
      font-family: Roboto-Regular, sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #1E394B;
    }
  }
  &__btn {
    padding: 7px 87px;
    margin-top: 150px;
    margin-bottom: 140px;
  }
}
</style>