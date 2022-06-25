<template>
  <div>
    <Header/>
    <Step :stepName="stepName"/>
    <LogoSelected :show-table="showTable"/>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";
import LogoSelected from "@/components/global/LogoSelected";

export default {
  name: "doneTeamImg",
  data() {
    return {
      stepName: {
        title: 'CREATING A NEW TEAM',
        step: 'STEP 2'
      },
      showTable: 'done'
    }
  },
  components: {
    Step,
    Header,
    LogoSelected
  }
}
</script>

<style lang="scss">

</style>