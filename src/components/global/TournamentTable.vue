<template>
  <div>
    <div class="tournament-table">
      <p class="tournament-table__title h1">DONE</p>
      <p class="tournament-table__subtitle h1">GACHIMUCHI LEAGUE</p>
      <p class="tournament-table__was-added h1">WAS ADDED TO TOURNAMENTS LIST</p>
      <div class="tournament-table__mode-type" :class="{'tournament-table__mode-type-active' : tableText.disableModeType}">
        <p class="tournament-table__mode-type-item">MODE</p>
        <p class="tournament-table__mode-type-item">2 TIMES BY 40 MINUTES</p>
      </div>
      <button class="tournament-table__btn main__btn">TO LIST</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TournamentTable",
  props: {
    tableText: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.tournament-table {
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
    font-size: 14px;
    line-height: 16px;
  }
  &__subtitle {
    padding-top: 22px;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 0;
  }
  &__was-added {
    padding-top: 21px;
    margin: 0;
  }
  &__btn {
    margin-top: 72px;
    padding: 7px 52px;
    font-family: RobotoCondensed-Bold, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
  }
  &__mode-type {
    justify-content: center;
    flex-direction: column;
    position: absolute;
    bottom: -78px;
    display: none;
    &-active {
      display: flex;
    }

    &-item {
      font-family: RobotoCondensed-Bold, sans-serif;
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
      color: #000000;
      margin: 0 auto;
      &:nth-child(1) {
        padding-bottom: 5px;
      }
    }
  }
}
</style>