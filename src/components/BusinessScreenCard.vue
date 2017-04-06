<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated zoomIn fadeIn"
    leave-active-class="animated bounceOutLeft"
  >
    <div class="card business-screen-card" v-if="!is_hidden" :data-card-index="index">
      <img class="card-img-top business-screen-img" :src="'/static/img/' + business.picture"
           :alt="business.name + 'picture'">
      <div class="card-block">

        <h4 class="card-title">{{ business.name }}, {{ business.cash }}</h4>
        <div class="card-text">
          {{ business.description }}

        </div>

      </div>
    </div>
  </transition>
</template>

<script>
  export default {

    props: {
      business: {required: true},
      hidden: {required: true},
      index: {required: true},
    },

    data() {
      return {
        is_hidden: this.hidden,
      }
    },

    watch: {
      hidden(val) {
        this.is_hidden = this.hidden;
      }
    },

    methods: {
      initializeEventListeners() {
        VueEvent.$on('like-pressed', () => {
          // Do something
        })
        VueEvent.$on('dislike-pressed', () => {
          // Do something
        })
      }
    },

    mounted() {
      this.initializeEventListeners()
    }
  }
</script>

<style lang="scss" scoped>

  .business-screen-card {
    border: 0;
    box-shadow: 0 3px 4px 1px rgba(0, 0, 0, .08), 0 7px 14px 2px rgba(50, 50, 93, .1);
    margin-bottom: 30px;
    margin-top: 5vh;
    position: absolute;

    .business-screen-img {
      width: 100%;
    }
  }

</style>
