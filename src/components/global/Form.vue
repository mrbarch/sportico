<template>
  <div>
    <div class="form">
      <div class="container">
        <p class="form__login h1">
          {{ formInfo.login }}
        </p>
        <p class="form__check" :class="{'form__show': formInfo.showCheckEmail}">
          CHECK YOUR EMAIL FOR NEW PASSWORD
        </p>
        <p class="form__enter" :class="{'form__enter-small': formInfo.showCheckEmail}">
          {{ formInfo.enter }}
        </p>
        <form class="form__inputs">
          <input type="email" class="form__input form__email" placeholder="Email">
          <input type="password" class="form__input form__password" placeholder="Password"
                 :class="{'form__hide': formInfo.disablePasswordField}">
          <p class="form__forgot" :class="{'form__hide': formInfo.disableForgotPassword}">
            Forgot password? Click
            <span><router-link
              to="/restorePasswordDone" class="form__click-here"> here
            </router-link></span>
            to restore
          </p>
          <div class="form__plate" :class="{'form__hide': formInfo.disablePlate}"></div>
          <button type="submit" class="form__submit-btn main__btn" :class="{'form__submit-btn-big': formInfo.disablePlate}">
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    formInfo: {
      type: Object,
    }
  }
}
</script>

<style lang="scss">
.form {
  padding: 7px 0 100px 0;

  &__enter {
    font-family: RobotoCondensed-Bold, sans-serif;
    display: flex;
    justify-content: center;
    padding-top: 35px;
    &-small {
      padding-top: 8px;
    }
  }

  &__inputs {
    padding-top: 27px;
  }

  &__input {
    padding: 0 0 0 20px;
    border: 1px solid #076DB2;
    border-radius: 5px;
    outline: none;
    width: 300px;
    height: 48px;
  }

  &__password {
    margin: 39px 0 0 0;
  }

  &__forgot {
    font-family: Roboto-Medium, sans-serif;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #A9A9A9;
    display: flex;
    justify-content: center;
    padding: 18px 0 24px 0;

    span {
      padding: 0 2px;
    }
  }

  &__click-here {
    color: #0F5E92 !important;
  }

  &__plate {
    background: #D9D9D9;
    width: 186px;
    height: 51px;
    margin-top: 25px;
  }

  &__hide {
    display: none;
  }
  &__show {
    display: flex !important;
  }
  &__submit-btn {
    margin-top: 39px;
    padding: 8px 41px;
    &-big {
      margin-top: 117px;
    }
  }
  &__check {
    margin: 0;
    display: none;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #A9A9A9;
  }
}
</style>