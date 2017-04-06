<template>
  <div class="card-controls">

    <div class="control-btn dislike-btn" @click="handleDislike">
      <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 212.982 212.982" style="enable-background:new 0 0 212.982 212.982;" xml:space="preserve">
            <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312
                c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312
                l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937
                c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/>
            </svg>
    </div>

    <div class="control-btn like-btn" @click="handleLike">
      <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <path d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
              c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
              c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
          </svg>
    </div>

  </div>
</template>

<script>
  export default {

    methods: {

      handleLike() {
        VueEvent.$emit('like-pressed')
      },

      handleDislike() {
        VueEvent.$emit('dislike-pressed')
      }
    }
  }
</script>

<style lang="scss" scoped>

  .card-controls {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 60px;
    left: 0;
    right: 0;
  }

  .control-btn {
    border: 10px solid #F5F5F5;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    padding: 20px 17px 17px 17px;
    cursor: pointer;
    margin: 0 -5px;
  }

  .dislike-btn {
    padding: 22px;

  svg {
    fill: #FF6C6C;
  }
  }

  .like-btn svg {
    fill: #4CCC93;
  }

</style>
