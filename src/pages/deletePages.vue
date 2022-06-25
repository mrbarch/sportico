<template>
  <div>
    <Header/>
    <div class="delete-pages">
      <p class="delete-pages__title h1">
        DELETE MATCHES YOU DON’T NEEDED
      </p>
    </div>
    <div v-for="matchItem in matchItems" :key="matchItem.index" class="delete-pages__item-wrap">
      <MatchItem :match-items="matchItem"/>
    </div>
    <button class="delete-pages__btn main__btn">BACK TO LIST</button>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import MatchItem from "@/components/global/MatchItem";

export default {
  name: "deletePages",
  components: {
    Header,
    MatchItem
  },
  data() {
    return {
      matchItems: [
        {
          dateOfMatch: 'TODAY AT 21:45',
          timeToMatch: '01:22:44',
          toMatch: true,
          deleteButton: true,
        },
        {
          dateOfMatch: '22.06.22 AT 21:45',
          timeToMatch: '37:22:44',
          toMatch: false,
          deleteButton: true,
        },
        {
          dateOfMatch: '23.06.22 AT 21:45',
          timeToMatch: '127:22:44',
          toMatch: false,
          deleteButton: true,
        },
        {
          dateOfMatch: '24.06.22 AT 21:45',
          timeToMatch: '233:83:09',
          toMatch: false,
          deleteButton: true,
        },
        {
          dateOfMatch: '25.07.22 AT 21:45',
          timeToMatch: '--:--:--',
          toMatch: true,
          deleteButton: true,
        }
      ]
    }
  },
}
</script>

<style lang="scss">
.delete-pages {
  margin-bottom: 16px;
  &__title {
    padding-top: 7px;
  }
  &__item-wrap {
    margin-bottom: 19px;
  }
  &__btn {
    margin: 138px 0 0 20px;
    padding: 7px 33px;
  }
}
</style>