<template>
  <div>
    <div class="bets-wrap">
      <p class="bets-wrap__title h1">{{ betsWrap.title }}</p>
      <div class="bets-wrap__team-name-block">
        <p class="bets-wrap__team-name h1">{{ betsWrap.firstTeam }}</p>
        <p class="bets-wrap__team-name h1">{{ betsWrap.secondTeam }}</p>
      </div>
      <MinusPlusRow :bets-wrap="betsWrap"/>
      <div class="bets-wrap__btn-block">
        <button class="bets-wrap__btn-submit">
          SUBMIT
        </button>
        <button class="bets-wrap__btn-adjust">
          {{ betsWrap.btnName }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MinusPlusRow from "@/components/global/MinusPlusRow";

export default {
  name: "BetsWrap",
  components: {
    MinusPlusRow
  },
  props: {
    betsWrap: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.bets-wrap {
  z-index: 10;
  position: relative;
  margin-top: 11px;
  background: linear-gradient(90deg, #0673BC 0%, #1D3E54 92.23%);
  padding: 18px 20px 20px 20px;
  color: #FFFFFF;
  margin-bottom: 20px;

  &__title {
    margin: 0;
  }

  &__team-name {
    font-size: 10px;
    line-height: 12px;
    margin: 0;

    &-block {
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
    }
  }
  &__btn-block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__btn-submit {
    background: #D9D9D9;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    font-family: RobotoCondensed-Bold, sans-serif;
    color: #1E394B;
    margin-top: 13px;
    padding: 6px 48px;
    width: 145px;
  }
  &__btn-adjust {
    background: transparent;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    font-family: RobotoCondensed-Bold, sans-serif;
    color: #FFFFFF;
    margin-top: 19px;
    padding: 4px 0;
    width: 120px;
  }
}
</style>