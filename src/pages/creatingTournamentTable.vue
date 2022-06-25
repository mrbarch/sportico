<template>
  <div>
    <Header/>
    <Step :step-name="stepName"/>
    <div class="tournament-table-choose">
      <p class="tournament-table-choose__title">APPROVE</p>
      <p class="tournament-table-choose__subtitle h1">ARE YOU SURE TOU WANT TO CREATE</p>
      <p class="tournament-table-choose__question h1">GACHIMUCHI LEAGUE?</p>
      <div class="tournament-table-choose__btns">
        <button class="tournament-table-choose__btn main__btn">YES</button>
        <button class="tournament-table-choose__btn tournament-table-choose__btn-cancel">NO</button>
      </div>
    </div>
  </div>
</template>

<script>
import Step from "@/components/global/Step";
import Header from "@/components/global/Header";

export default {
  name: "creatingTournamentTable",
  data() {
    return {
      stepName: {
        title: 'CREATING A NEW TOURNAMENT',
        step: 'STEP 1'
      },
      tableText: {
        title: 'APPROVE',
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
.tournament-table-choose {
  background: #E9E9E9;
  border: 1px solid #0572BB;
  width: 346px;
  height: 290px;
  margin: auto;
  margin-top: 19px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__title {
    padding-top: 8px;
    font-family: RobotoCondensed-Bold, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
  }

  &__subtitle {
    padding-top: 29px;
  }

  &__question {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    padding-top: 9px;
    margin: 0;
  }

  &__btns {
    padding-top: 69px;
    display: flex;
    justify-content: space-between;
    width: 320px;
  }

  &__btn {
    width: 150px;
    display: flex;
    justify-content: center;
    padding: 7px;
    margin: 0;

    &-cancel {
      background: #E9E9E9;
      border: 1px solid #B21107;
      color: #B21107;
      border-radius: 5px;
      font-weight: 800;
      font-size: 14px;
      line-height: 16px;
      font-family: RobotoCondensed-Bold, sans-serif;
    }
  }
}
</style>