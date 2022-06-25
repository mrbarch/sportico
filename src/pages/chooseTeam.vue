<template>
  <div>
    <Header/>
    <Step :stepName="stepName"/>
    <TeamVersus/>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";
import TeamVersus from "@/components/global/TeamVersus";

export default {
  name: "chooseTeam",
  data() {
    return {
      stepName: {
        title: 'ADD NEW FOOTBALL MATCH',
        step: 'STEP 2'
      }
    }
  },
  components: {
    Step,
    Header,
    TeamVersus
  }
}
</script>

<style scoped>

</style>