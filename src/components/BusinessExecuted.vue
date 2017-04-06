<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated zoomInFromFront"
    leave-active-class="animated fadeOutFast">
    <div class="business-container" v-if="!hidden">
      <h1 class="business">BUSINESS</h1>
      <h1 class="executed">EXECUTED</h1>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      hidden: {required: true},
    }
  }
</script>

<style lang="scss" scoped>

  .business-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: 'Impact', sans-serif;
    height: 90vh;
    margin-top: 5vh;
    z-index: 3;

    h1 {
      font-size: 110px;
      text-shadow: -2px -2px 0 #fff,
      2px -2px 0 #fff,
      -2px 2px 0 #fff,
      2px 2px 0 #fff;
    }
  }

</style>
