<template>
  <div>
    <Header/>
    <Step :step-name="stepName"/>
    <TournamentTable :table-text="tableText"/>
  </div>
</template>

<script>
import Step from "@/components/global/Step";
import Header from "@/components/global/Header";
import TournamentTable from "@/components/global/TournamentTable";

export default {
  name: "chosenMode",
  data() {
    return {
      stepName: {
        title: 'CREATING A NEW TOURNAMENT',
        step: 'STEP 2',
      },
      tableText: {
        disableModeType: true
      }
    }
  },
  components: {
    Header,
    Step,
    TournamentTable
  }
}
</script>

<style scoped>

</style>