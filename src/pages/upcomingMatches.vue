<template>
  <div style="overflow: hidden; height: 100vh;">
    <Header/>
    <div class="upcoming-matches">
      <p class="upcoming-matches__title h1">
        YOUR UPCOMING MATCHES
      </p>
      <p class="upcoming-matches__info">THERE ARE NO UPCOMING MATCHES YET
        PUSH ADD MATCH TO CREATE <br>
        YOUR FIRST</p>
      <button class="upcoming-matches__btn main__btn">ADD MATCH</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";

export default {
  name: "upcomingMatches",
  components: {
    Header
  }
}
</script>

<style lang="scss">
.upcoming-matches {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  height: 100vh;

  &__title {
    padding-top: 7px;
  }

  &__info {
    width: 237px;
    margin: 0 auto;
    padding-top: 74px;
    font-family: RobotoCondensed-Bold, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    text-align: center;
  }
  &__btn {
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 7px 38px;
  }
}
</style>