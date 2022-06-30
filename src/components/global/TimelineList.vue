<template>
  <div>
    <div  class="timeline-list">
      <TimelineItem  v-for="(timelineItem, index) in timelineItems" :key="index" :timeline-items="timelineItem"/>
    </div>
  </div>
</template>

<script>
import TimelineItem from "@/components/global/TimelineItem";

export default {
  name: "TimelineList",
  components: {
    TimelineItem
  },
  data() {
    return {
      timelineItems: [
        {
          status: 'wrong'
        },
        {
          status: 'success'
        },
        {
          status: 'wrong'
        },
        {
          status: 'active'
        },
        {
          status: 'wrong'
        },
        {
          status: 'success'
        },
        {
          status: 'success'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.timeline-list {
  overflow-y: scroll !important;
  background: linear-gradient(90deg, #0673BC 0%, #1D3E54 92.23%);
  height: 510px;
  width: 97.5%;
}
.timeline-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 0;
  width: 3px !important;
  background-color: transparent;
  display: none !important;
}

.timeline-list::-webkit-scrollbar {
  width: 3px !important;
  background-color: transparent;
}

.timeline-list::-webkit-scrollbar-thumb {
  background: #0871B8;
  border-radius: 20px !important;
  width: 3px !important;
  height: 109px;
}

</style>