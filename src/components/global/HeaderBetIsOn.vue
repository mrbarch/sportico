<template>
  <div>
    <header>
      <img src="../../../src/static/images/header-timer.svg" class="header__timer" alt="timer"/>
      <div class="header__logo-wrap">
        <img src="../../../src/static/images/logo.svg" class="header__logo" alt="logo"/>
        <div v-show="greenBtn === true" class="header__green-btn"></div>
        <div v-show="greenBtn === false" class="header__red-btn"></div>
      </div>
      <div class="header__burger" @click="showPopupHeader">
        <span class="header__line"></span>
        <span class="header__line"></span>
        <span class="header__line"></span>
      </div>
      <div class="burger__menu" @click.self="onClickOutsideHeader" v-if="showModalHeader"
           :class="{'hide-modal' : showModalHeader === false, 'show-modal' : showModalHeader === true}">
        <div class="burger__menu-content">
          <img src="../../static/images/close-burger.svg" alt="" class="burger__cross" @click="onClickOutsideHeader">
          <a href="#" class="burger__menu-current">CURRENTLY MATCH</a>
          <div class="burger__menu-line"></div>
          <a href="#" class="burger__menu-text burger__menu-upcoming">UPCOMING MATCHES</a>
          <a href="#" class="burger__menu-text burger__menu-new">CREATE NEW MATCH</a>
          <div class="burger__menu-line"></div>
          <a href="#" class="burger__menu-text burger__menu-logout">LOG OUT</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderBetIsOn",
  data() {
    return {
      open: false,
      showModalHeader: false,
    };
  },
  methods: {
    showPopupHeader() {
      this.showModalHeader = !this.showModalHeader
    },
    onClickOutsideHeader() {
      this.showModalHeader = false
    },
    showMenu() {
      this.open = false
    },
  },
  props: {
    greenBtn: {
      type: Boolean
    }
  },
}
</script>

<style lang="scss">
.show-modal {
  display: block !important;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOff {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.hide-modal {
  animation: fadeOff ease 1s;
}

.burger__menu-upcoming {
  padding-top: 65px;
}

.burger__menu-new {
  padding-top: 34px;
}

.burger__menu-bookmaker {
  padding-top: 80px;
  color: #CB8686 !important;
}

.burger__menu-logout {
  padding-top: 52px;
}

.burger {
  &__menu {
    display: none;
    background: rgba(4, 54, 86, 0.95);
    backdrop-filter: blur(4px);
    width: 88%;
    height: 764px;
    position: absolute;
    z-index: 100;
    right: 0;
    padding-right: 20px;
    top: 72px;

    &-line {
      height: 3px;
      width: 241px;
      background: #094E7D;
      border-radius: 2px;
      margin-top: 71px;
    }

    &-content {
      flex-direction: column;
      display: flex;
      align-items: end;
      padding-top: 92px;
    }

    &-current {
      font-family: Inter-SemiBold, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #89D791;
      padding-top: 16px;
    }

    &-text {
      font-family: Inter-SemiBold, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #FFFFFF;
    }
  }

  &__cross {
    position: absolute;
    right: 20px;
    top: 25px;
    width: 17px;
    height: 17px;
  }
}

header {
  position: relative;
  background: linear-gradient(91.88deg, #007ACC -11.43%, #B21107 109.55%);
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  &__timer {
    width: 25px;
    position: absolute;
    left: 20px;
  }
  &__logo {
    font-family: Syncopate-Regular, sans-serif;
    font-weight: 700;
    color: white;
    font-size: 14px;
    line-height: 15px;
    &-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column
    }
  }
  &__burger {
    position: absolute;
    right: 20px;
    top: 26px;
    width: 29px;
    height: 14px;
    cursor: pointer;
  }
  &__line {
    position: absolute;
    height: 3px;
    width: 29px;
    border-radius: 5px;
    background: #EFEFEF;
    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 8px;
    }
    &:last-child {
      top: 16px;
    }
  }
  &__green-btn {
    width: 8px;
    height: 8px;
    background: #19D92C;
    border-radius: 50% 50%;
    position: relative;
    top: 19px;
  }
  &__red-btn {
    width: 8px;
    height: 8px;
    background: #D91919;
    border-radius: 50% 50%;
    position: relative;
    top: 19px;
  }
}
</style>