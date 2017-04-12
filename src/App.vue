<template>
  <div id="app" :style="'filter: grayscale(' + likePercentage + '%);'">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 app-container">
          <business-screen-card v-for="(business, index) in businesses"
                                :business="business"
                                :hidden="active_business_index !== index"
                                :index="index"
                                :liked="has_been_liked">
          </business-screen-card>
          <business-screen-controls :nr_of_likes="nr_of_likes" :nr_of_dislikes="nr_of_dislikes"></business-screen-controls>
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
            description: 'THE EFFICIENT WAY TO SPILL. Spilling just got a whole lot better.'
          },
          {
            picture: 'business-6.png',
            cash: '$1 000 000 000',
            name: 'PotatoPersevere',
            description: 'Analyzing Your Potato. PotatoPersevere is a different kind of potato app.'
          },
          {
            picture: 'business-7.png',
            cash: '$1 000 000',
            name: 'Knowledgely',
            description: 'Knowledgely was created to help you find pieces of knowledge in your area. From local pieces of knowledge to national brands, no one knows pieces of knowledge like Knowledgely. No one.'
          },
          {
            picture: 'business-8.png',
            cash: '$50 000 000',
            name: 'PetSmart',
            description: 'We\'re a health tracker for household pets. Manage your pet\'s health online, with our cloud software.'
          },
          {
            picture: 'business-9.png',
            cash: '$150 000',
            name: 'Loveify',
            description: 'Do You Love? Loveify is why you\'ll never love the same way again.'
          },
          {
            picture: 'business-10.png',
            cash: '$10 000',
            name: 'PlantLink',
            description: 'EASY. PERFECT. EXCLUSIVE. PlantLink is a place for people who enjoy planting to connect. Find local planting events or just share your favorite tips and stories with others who love to plant.'
          },
        ],
        active_business_index: 0,
        has_been_liked: false,
        nr_of_likes: 0,
        nr_of_dislikes: 0,

        business_executed: false,
        hide_business_executed_timeout: null,
      };
    },

    components: { BusinessScreenCard, BusinessScreenControls, BusinessExecuted },

    computed: {
      likePercentage() {
        if (this.nr_of_likes < this.nr_of_dislikes) {
          let percent = 100 - (this.nr_of_likes / this.nr_of_dislikes) * 100
          return percent
        }
        return 0
      }
    },

    methods: {

      initializeEventListeners() {

        VueEvent.$on('like-pressed', () => {
          this.has_been_liked = true
          this.nr_of_likes++

          if (this.isBusinessExecuted()) {
            this.business_executed = true
            this.playBusinessSounds()

            setTimeout(() => {
              this.business_executed = false

              this.nextBusiness()
            }, 3000)
          } else {
            setTimeout(() => {
              this.nextBusiness()
            }, 100)
          }
        })

        VueEvent.$on('dislike-pressed', () => {
          this.has_been_liked = false
          this.nr_of_dislikes++
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
        return this.nr_of_likes % 5 === 0
      },

      playBusinessSounds() {
        let airHorn = new Audio('static/sounds/air_horn.mp3')
        airHorn.play()
        $('body').makeItRain()

        setTimeout(() => {
          let chaChing = new Audio('static/sounds/cha_ching.mp3')
          chaChing.play()
          setTimeout(() => {
            let chaChing = new Audio('static/sounds/cha_ching.mp3')
            chaChing.play()
            setTimeout(() => {
              let chaChing = new Audio('static/sounds/cha_ching.mp3')
              chaChing.play()
            }, 500)
          }, 500)
        }, 1000)
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

  #app {
    min-height: 100vh;
  }
</style>
