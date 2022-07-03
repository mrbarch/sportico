<template>
  <div>
    <Header/>
    <Step :stepName="stepName"/>
    <div class="match-date">
      <p class="match-date__title h1">MATCH DATE</p>
      <button class="match-date__btn" @click="openModalDate()">20 SEPT 2022</button>
      <p class="match-date__at h1">AT</p>
      <button class="match-date__btn match-date__btn-time"  @click="openModalTime()">21:45</button>
      <button class="match-date__btn-finish main__btn">FINISH</button>
      <DateModal v-if="modalDate" @close="modalDate = false"/>
      <TimeModal v-if="modalTime" @close="modalTime = false"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Step from "@/components/global/Step";
import DateModal from "@/components/global/DateModal";
import TimeModal from "@/components/global/TimeModal";

export default {
  name: "matchDate",
  components: {
    Header,
    Step,
    DateModal,
    TimeModal
  },
  data() {
    return {
      modalDate: false,
      modalTime: false,
      stepName: {
        title: 'ADD NEW FOOTBALL MATCH',
        step: 'STEP 3'
      },
    }
  },
  methods: {
    openModalDate() {
      this.modalDate = true
    },
    openModalTime() {
      this.modalTime = true
    }
  }
}
</script>

<style lang="scss">
.match-date {
  display: flex;
  align-items: center;
  flex-direction: column;
  &__title {
    padding-top: 30px;
  }
  &__btn {
    border: 1px solid #076DB2;
    border-radius: 5px;
    letter-spacing: 0.3px;
    color: #0F5E92;
    font-family: Roboto-Bold, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    margin-top: 3px;
    padding: 1px 42px;
    &-time {
      margin: 0;
      padding: 1px 78px;
    }
    &-finish {
      margin-top: 150px;
      padding: 7px 54px
    }
  }
  &__at {
    padding-top: 3px;
  }
}
</style>