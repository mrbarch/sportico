<template>
  <div>
    <div class="timeline-item"
         :class="{'timeline-item__success' : timelineItems.status === 'success', 'timeline-item__active' : timelineItems.status === 'active'}">
      <div class="timeline-item__text-block">
        <div class="timeline-item__time">21:11</div>
        <div class="timeline-item__team">Liverpool</div>
        <div class="timeline-item__type">Yellow Card</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineItem",
  props: {
    timelineItems: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.timeline-item:hover .timeline-item__team {
  &:before {
    background: #1994E6;
  }
}

.timeline-item:hover .timeline-item__type {
  &:before {
    background: #1994E6;
  }
}
.timeline-item:hover {
  &:after {
    display: none;
  }
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 21px;
    background: url("../../static/images/done-delete.svg") no-repeat;
  }
}


.timeline-item {
  position: relative;
  margin-bottom: 25px;
  padding-left: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F2F2F2;
  border: 1px solid #B21107;
  border-radius: 10px;
  margin-left: 11px;
  width: 319px;
  height: 61px;
  font-family: Inter-Medium, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;

  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 21px;
    background: url("../../static/images/delete-cross.svg") no-repeat;

  }

  &:hover {
    background: #347EB0;
    border: 1px solid #80AAC6;

  }

  &__success {
    border: 1px solid #19D92C;
  }

  &__active {


  }

  &__text-block {
    display: flex;
    justify-content: space-between;
    width: 195px;

  }

  &__text-active {
    color: #A3D5F5;
  }

  &__team {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 2px;
      left: -3px;
      height: 15px;
      background: #E8E8E8;

      &:hover {
        background: #1994E6;
      }
    }
  }

  &__type {
    padding-left: 18px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 2px;
      left: 14px;
      height: 15px;
      background: #E8E8E8;
    }
  }
}
</style>