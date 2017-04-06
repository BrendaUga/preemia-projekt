<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 app-container">
          <business-screen-card v-for="(business, index) in businesses"
                                :business="business"
                                :hidden="active_business_index !== index"
                                :index="index"
                                :liked="has_been_liked">
          </business-screen-card>
          <business-screen-controls></business-screen-controls>
          <business-executed :hidden="!business_executed"></business-executed>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BusinessScreenCard from './components/BusinessScreenCard'
  import BusinessScreenControls from './components/BusinessScreenControls'
  import BusinessExecuted from './components/BusinessExecuted'

  export default {

    name: 'app',

    data() {
      return {
        businesses: [
          {
            picture: 'business-1.png',
            cash: '$500 000',
            name: 'FieldNow',
            description: "Appreciate your niche in the field ecosystem with online branding that's built by dashing people for mobile consumer"
          },
          {
            picture: 'business-2.png',
            cash: '$175 000',
            name: 'OutsidePlan',
            description: 'OutsidePlan is an integrated outside service that makes it easy to turn your outsides into cash.'
          },
          {
            picture: 'business-3.png',
            cash: '$2 500 000',
            name: 'Driv',
            description: 'Driving. Everyone talks about it but only the truly affordable are able to drive day in and day out. Here at Driv we understand your commitment and want to give you what you need to take your driving to the next level.'
          },
          {
            picture: 'business-4.png',
            cash: '$1 000 000',
            name: 'Passionme',
            description: 'Share your favorite passions and discover new ones. With Passionme you never know what you might find!'
          },
          {
            picture: 'business-5.png',
            cash: '$10 000 000',
            name: 'Spillr',
            description: 'THE EFFICIENT WAY TO SPILL. Spilling just got a whole lot better…'
          },
          {
            picture: 'business-6.png',
            cash: '$1 000 000 000',
            name: 'PotatoPersevere',
            description: 'Analyzing Your Potato. PotatoPersevere is a different kind of potato app.'
          },
        ],
        active_business_index: 0,
        business_executed: false,
        has_been_liked: false,
      };
    },

    components: { BusinessScreenCard, BusinessScreenControls, BusinessExecuted },

    methods: {
      initializeEventListeners() {

        VueEvent.$on('like-pressed', () => {

          this.has_been_liked = true
          if (this.isBusinessExecuted()) {
            this.business_executed = true;

            setTimeout(() => {
              this.business_executed = false;

              this.nextBusiness()
            }, 1500)
          } else {
            setTimeout(() => {
              this.nextBusiness()
            }, 100)
          }
        })
        VueEvent.$on('dislike-pressed', () => {
          this.has_been_liked = false
          setTimeout(() => {
            this.nextBusiness()
          }, 100)
        })
      },

      nextBusiness() {
        let indexes = []
        for (let i = 0; i < this.businesses.length; i++) {
          if (i !== this.active_business_index) {
            indexes.push(i)
          }
        }

        this.active_business_index = indexes[Math.floor(Math.random() * ((indexes.length - 1) - 0 + 1)) + 0]
      },

      isBusinessExecuted() {
        return Math.floor(Math.random() * (2 - 0 + 1)) + 0 === 2
      }
    },

    mounted() {
      this.active_business = this.businesses[0]
      this.initializeEventListeners()
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/app.scss';
</style>
