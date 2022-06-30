<template>
  <div>
    <div class="logo-selected">
      <div class="logo-check" v-if="showTable === 'selected'">
        <p class="logo-check__title h1">YOU SELECTED</p>
        <p class="logo-check__full-path h1">liverpool.jpg</p>
        <img src="../../static/images/team-logo.svg" alt="team-logo" class="logo-check__img">
        <p class="logo-check__question h1">IS THIS THE LOGO OF LIVERPOOL?</p>
        <div class="container">
          <div class="logo-check__btns">
            <button class="logo-check__btn main__btn">YES</button>
            <button class="logo-check__btn-no btn__back">NO</button>
          </div>
        </div>
      </div>
      <div class="logo-approve" v-if="showTable === 'approve'">
        <p class="logo-approve__title h1">APPROVE</p>
        <p class="logo-approve__subtitle h1">ARE YOU SURE TOU WANT TO CREATE</p>
        <p class="logo-approve__team-name h1">LIVERPOOL</p>
        <img src="../../static/images/team-logo.svg" alt="team-logo" class="logo-approve__img">
        <div class="container">
          <div class="logo-approve__btns">
            <button class="logo-approve__btn main__btn">YES</button>
            <button class="logo-approve__btn-no btn__back">NO</button>
          </div>
        </div>
      </div>
      <div class="logo-done" v-if="showTable === 'done'">
        <p class="logo-done__title h1">DONE</p>
        <p class="logo-done__team-name h1">LIVERPOOL</p>
        <p class="logo-done__subtitle h1">WAS ADDED TO TEAM LIST</p>
        <button class="logo-done__btn main__btn">TO LIST</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "LogoSelected",
  props: {
    showTable: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.logo-selected {
  margin: 20px auto 0 auto;
  width: 344px;
  height: 287px;
  background: #E9E9E9;
  border: 1px solid #0572BB;
}

.logo-check {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__title {
    padding-top: 10px;
  }

  &__full-path {
    padding-top: 7px;
    font-weight: 800;
    font-size: 10px;
    line-height: 12px;
    margin: 0;
  }

  &__img {
    width: 63px;
    padding-top: 32px;
  }

  &__question {
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    padding-top: 2px;
  }

  &__btn {
    padding: 8px 63px;
    margin: 0;
    height: 30px;

    &-no {
      padding: 8px 66px;
      margin: 0;
      height: 30px;
    }
  }
}

.logo-approve {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__title {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    padding-top: 7px;
  }

  &__subtitle {
    padding-top: 28px;
  }

  &__team-name {
    padding-top: 12px;
    font-size: 16px;
    line-height: 19px;
    margin: 0;
  }

  &__img {
    width: 23px;
    padding-top: 19px;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
  }

  &__btn {
    padding: 8px 63px;
    margin: 0;
    height: 30px;

    &-no {
      padding: 8px 66px;
      margin: 0;
      height: 30px;
    }
  }
}

.logo-done {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__title {
    font-family: RobotoCondensed-Bold, sans-serif;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    padding-top: 7px;
  }

  &__subtitle {
    padding-top: 9px;
  }

  &__team-name {
    padding-top: 38px;
    font-size: 16px;
    line-height: 19px;
    margin: 0;
  }

  &__img {
    width: 23px;
    padding-top: 19px;
  }


  &__btn {
    font-size: 14px;
    line-height: 16px;
    padding: 8px 54px;
    margin: 60px 0 0 0;
    height: 30px;
  }
}
</style>