<template>
  <div>
    <Header/>
    <Step :stepName="stepName"/>
    <FootballTeamVersus :team-table="teamTable"/>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";
import FootballTeamVersus from "@/components/global/FootballTeamVersus";

export default {
  name: "addNewFootballMatch",
  data() {
    return {
      stepName: {
        title: 'ADD NEW FOOTBALL MATCH',
        step: 'STEP 2'
      },
      teamTable: {
        teamData: true,
        teamA: 'CHANGE TEAM A',
        teamB: 'CHOOSE TEAM B'
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

</style>