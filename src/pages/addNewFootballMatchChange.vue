<template>
  <div>
    <Header/>
    <Step :stepName="stepName"/>
    <FootballTeamVersus :team-table="teamTable"/>
    <button class="football-match-change__btn main__btn">NEXT</button>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";
import FootballTeamVersus from "@/components/global/FootballTeamVersus";

export default {
  name: "addNewFootballMatchChange",
  data() {
    return {
      stepName: {
        title: 'ADD NEW FOOTBALL MATCH',
        step: 'STEP 2'
      },
      teamTable: {
        teamData: false,
        teamA: 'CHANGE TEAM A',
        teamB: 'CHANGE TEAM B'
      }
    }
  },
  components: {
    Header,
    Step,
    FootballTeamVersus
  }
}
</script>

<style lang="scss">
.football-match-change__btn {
  display: flex;
  padding: 7px 57px;
  margin: 150px 20px 0 0;
  float: right;
}
</style>