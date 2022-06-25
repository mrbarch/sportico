<template>
  <div>
    <div class="match-item">
      <div class="match-item__block">
        <div class="match-item__team-row">
          <div class="match-item__team-wrap match-item__team-wrap-left">
            <div class="match-item__col match-item__col-left">
              <p class="match-item__team-name h1">ARSENAL</p>
              <img src="../../static/images/team-logo-1.svg" alt="team-logo-1" class="match-item__team-img">
            </div>
          </div>
          <div style="position: relative">
            <div class="match-item__bill">0:0</div>
            <img src="../../static/images/delete-match.svg" alt="delete-match" class="match-item__img-delete"
                 v-if="matchItems.deleteButton">
          </div>
          <div class="match-item__team-wrap match-item__team-wrap-right">
            <div class="match-item__col match-item__col">
              <p class="match-item__team-name match-item__team-name-right h1">LIVERPOOL</p>
              <img src="../../static/images/team-logo.svg" alt="team-logo-1"
                   class="match-item__team-img match-item__team-img-right">
            </div>
          </div>
        </div>
        <div class="match-item__time-row">
          <p class="match-item__date">{{ matchItems.dateOfMatch }}</p>
          <p class="match-item__time-in-hours h1">{{ matchItems.timeToMatch }}</p>
          <p class="match-item__to-match" v-show="matchItems.toMatch === true">TO MATCH</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchItem",
  props: {
    matchItems: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.match-item {
  position: relative;

  &__block {
    background: #CECECE;
    padding: 11px 0 0 0;
  }

  &__team-row {
    display: flex;
    justify-content: space-between;
  }

  &__team-wrap {
    position: relative;
    width: 147px;
    height: 33px;
    background: #C4C4C4;

    &-right {
      border-radius: 5px 0 0 5px;
      background: #1E394B;
    }

    &-left {
      border-radius: 0 5px 5px 0;
      background: #0572BB;
    }
  }

  &__bill {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-self: center;
    padding-top: 5px;
  }

  &__team {
    &-name {
      font-family: RobotoCondensed-Bold, sans-serif;
      color: #FFFFFF;
      font-size: 10px;
      line-height: 12px;
      padding-left: 11px;

      &-right {
        padding: 0;
      }
    }

    &-img {
      position: absolute;
      right: 19px;
      top: 5px;
      width: 23px;

      &-right {
        left: 20px;
        right: 0;
      }
    }
  }

  &__time-row {
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
  }

  &__date {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 10px;
    line-height: 12px;
    color: #000000;
    position: absolute;
  }

  &__time-in-hours {
    margin: 0 auto;
    padding: 9px 0 11px 0;
  }

  &__to-match {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 10px;
    line-height: 12px;
    color: #000000;
    position: absolute;
    right: 41px;

    &:before {
      content: '';
      position: absolute;
      right: -19px;
      top: -1px;
      background: url("../../static/images/arrow.svg") no-repeat;
      width: 15px;
      height: 15px;
    }
  }

  &__img-delete {
    position: absolute;
    top: -20px;
    left: 2px;
  }
}
</style>