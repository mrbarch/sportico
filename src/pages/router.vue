<template>
  <div>
    <div class="routing">
      <router-link to="/additionalTIme">additionalTIme</router-link>
      <router-link to="/additionalTimeEnded">additionalTimeEnded</router-link>
      <router-link to="/addMatch">addMatch</router-link>
      <router-link to="/addNewFootballMatch">addNewFootballMatch</router-link>
      <router-link to="/addNewFootballMatchChange">addNewFootballMatchChange</router-link>
      <router-link to="/approveTeamImg">approveTeamImg</router-link>
      <router-link to="/betsProcess">betsProcess</router-link>
      <router-link to="/chooseTeam">chooseTeam</router-link>
      <router-link to="/chosenMode">chosenMode</router-link>
      <router-link to="/createNewTournament">createNewTournament</router-link>
      <router-link to="/creatingNewTeam">creatingNewTeam</router-link>
      <router-link to="/creatingTournamentTable">creatingTournamentTable</router-link>
      <router-link to="/deletePages">deletePages</router-link>
      <router-link to="/doneTeamImg">doneTeamImg</router-link>
      <router-link to="/endOfGame">endOfGame</router-link>
      <router-link to="/inPaused">inPaused</router-link>
      <router-link to="/matchDate">matchDate</router-link>
      <router-link to="/matchStartsAfter">matchStartsAfter</router-link>
      <router-link to="/matchWillPlay">matchWillPlay</router-link>
      <router-link to="/newPassword">newPassword</router-link>
      <router-link to="/penaltySeries">penaltySeries</router-link>
      <router-link to="/restorePasswordDone">restorePasswordDone</router-link>
      <router-link to="/restorePasswordFail">restorePasswordFail</router-link>
      <router-link to="/secondTime">secondTime</router-link>
      <router-link to="/selectedTeamImg">selectedTeamImg</router-link>
      <router-link to="/selectedTourneyTeam">selectedTourneyTeam</router-link>
      <router-link to="/selectTeam">selectTeam</router-link>
      <router-link to="/selectTourneyMode">selectTourneyMode</router-link>
      <router-link to="/timeline">timeline</router-link>
      <router-link to="/tournamentWasAdded">tournamentWasAdded</router-link>
      <router-link to="/tourneyList">tourneyList</router-link>
      <router-link to="/upcomingMatches">upcomingMatches</router-link>
      <router-link to="/uploadLogo">uploadLogo</router-link>
      <router-link to="/yourUpcomingMatches">yourUpcomingMatches</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "router"
}
</script>

<style lang="scss">
.routing {
  display: flex;
  flex-direction: column;
a {
  margin-top: 20px;
  font-size: 16px;
}
}
</style>