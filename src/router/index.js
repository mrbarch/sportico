import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from "@/pages/mainPage";
import restorePasswordDone from "@/pages/restorePasswordDone";
import restorePasswordFail from "@/pages/restorePasswordFail";
import newPassword from "@/pages/newPassword";
import upcomingMatches from "@/pages/upcomingMatches";
import addMatch from "@/pages/addMatch";
import createNewTournament from "@/pages/createNewTournament";
import creatingTournamentTable from "@/pages/creatingTournamentTable";
import tournamentWasAdded from "@/pages/tournamentWasAdded";
import selectTourneyMode from "@/pages/selectTourneyMode";
import chosenMode from "@/pages/chosenMode";
import tourneyList from "@/pages/tourneyList";
import selectedTourneyTeam from "@/pages/selectedTourneyTeam";
import chooseTeam from "@/pages/chooseTeam";
import creatingNewTeam from "@/pages/creatingNewTeam";
import uploadLogo from "@/pages/uploadLogo";
import selectedTeamImg from "@/pages/selectedTeamImg";
import approveTeamImg from "@/pages/approveTeamImg";
import doneTeamImg from "@/pages/doneTeamImg";
import selectTeam from "@/pages/selectTeam";
import addNewFootballMatch from "@/pages/addNewFootballMatch";
import addNewFootballMatchChange from "@/pages/addNewFootballMatchChange";
import matchWillPlay from "@/pages/matchWillPlay";
import matchDate from "@/pages/matchDate";
import deletePages from "@/pages/deletePages";
import yourUpcomingMatches from "@/pages/yourUpcomingMatches";
import matchStartsAfter from "@/pages/matchStartsAfter";
import betsProcess from "@/pages/betsProcess";
import inPaused from "@/pages/inPaused";
import secondTime from "@/pages/secondTime";
import additionalTime from "@/pages/additionalTIme";
import penaltySeries from "@/pages/penaltySeries";
import additionalTimeEnded from "@/pages/additionalTimeEnded";
import endOfGame from "@/pages/endOfGame";
import timeline from "@/pages/timeline";
import SiteMap from "@/pages/router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'SiteMap',
        component: SiteMap
    },
    {
        path: '/mainPage',
        name: 'mainPage',
        component: mainPage
    },
    {
        path: '/restorePasswordDone',
        name: 'restorePasswordDone',
        component: restorePasswordDone
    },
    {
        path: '/restorePasswordFail',
        name: 'restorePasswordFail',
        component: restorePasswordFail
    },
    {
        path: '/newPassword',
        name: 'newPassword',
        component: newPassword
    },
    {
        path: '/upcomingMatches',
        name: 'upcomingMatches',
        component: upcomingMatches
    },
    {
        path: '/addMatch',
        name: 'addMatch',
        component: addMatch
    },
    {
        path: '/createNewTournament',
        name: 'createNewTournament',
        component: createNewTournament
    },
    {
        path: '/creatingTournamentTable',
        name: 'creatingTournamentTable',
        component: creatingTournamentTable
    },
    {
        path: '/creatingTournamentTable',
        name: 'creatingTournamentTable',
        component: creatingTournamentTable
    },
    {
        path: '/tournamentWasAdded',
        name: 'tournamentWasAdded',
        component: tournamentWasAdded
    },
    {
        path: '/selectTourneyMode',
        name: 'selectTourneyMode',
        component: selectTourneyMode
    },
    {
        path: '/chosenMode',
        name: 'chosenMode',
        component: chosenMode
    },
    {
        path: '/tourneyList',
        name: 'tourneyList',
        component: tourneyList
    },
    {
        path: '/selectedTourneyTeam',
        name: 'selectedTourneyTeam',
        component: selectedTourneyTeam
    },
    {
        path: '/chooseTeam',
        name: 'chooseTeam',
        component: chooseTeam
    },
    {
        path: '/creatingNewTeam',
        name: 'creatingNewTeam',
        component: creatingNewTeam
    },
    {
        path: '/uploadLogo',
        name: 'uploadLogo',
        component: uploadLogo
    },
    {
        path: '/selectedTeamImg',
        name: 'selectedTeamImg',
        component: selectedTeamImg
    },
    {
        path: '/approveTeamImg',
        name: 'approveTeamImg',
        component: approveTeamImg
    },
    {
        path: '/doneTeamImg',
        name: 'doneTeamImg',
        component: doneTeamImg
    },
    {
        path: '/selectTeam',
        name: 'selectTeam',
        component: selectTeam
    },
    {
        path: '/addNewFootballMatch',
        name: 'addNewFootballMatch',
        component: addNewFootballMatch
    },
    {
        path: '/addNewFootballMatchChange',
        name: 'addNewFootballMatchChange',
        component: addNewFootballMatchChange
    },
    {
        path: '/matchWillPlay',
        name: 'matchWillPlay',
        component: matchWillPlay
    },
    {
        path: '/matchDate',
        name: 'matchDate',
        component: matchDate
    },
    {
        path: '/deletePages',
        name: 'deletePages',
        component: deletePages
    },
    {
        path: '/yourUpcomingMatches',
        name: 'yourUpcomingMatches',
        component: yourUpcomingMatches
    },
    {
        path: '/matchStartsAfter',
        name: 'matchStartsAfter',
        component: matchStartsAfter
    },
    {
        path: '/betsProcess',
        name: 'betsProcess',
        component: betsProcess
    },
    {
        path: '/inPaused',
        name: 'inPaused',
        component: inPaused
    },
    {
        path: '/secondTime',
        name: 'secondTime',
        component: secondTime
    },
    {
        path: '/additionalTime',
        name: 'additionalTime',
        component: additionalTime
    },
    {
        path: '/penaltySeries',
        name: 'penaltySeries',
        component: penaltySeries
    },
    {
        path: '/additionalTimeEnded',
        name: 'additionalTimeEnded',
        component: additionalTimeEnded
    },
    {
        path: '/endOfGame',
        name: 'endOfGame',
        component: endOfGame
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: timeline
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
