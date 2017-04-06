<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated zoomInFromFront"
    leave-active-class="animated fadeOutFast">
    <div class="business-container" v-if="!hidden">
      <h1 class="business">BUSINESS</h1>

      <div class="cash-money-container">
        <!--<svg class="animate pulse glow" width="100%" viewBox="0 0 1034 914" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g id="Artboard1" transform="matrix(1,0,0,1,195.798,199.001)"> <rect x="-195.798" y="-199.001" width="1033.15" height="913.661" style="fill:none;"/> <g transform="matrix(1,0,0,1,-195.798,-199.001)"> <g id="Glow"> <path d="M110.861,276.699C110.861,276.699 281.292,279.038 260.573,108.906C260.573,108.906 429.481,303.294 571.567,78.64C571.567,78.64 642.945,313.353 821.197,136.721C821.197,136.721 810.75,309.782 964.217,338.01C964.217,338.01 758.443,457.401 940.849,586.77C940.849,586.77 705.389,656.368 757.045,836.072C757.045,836.072 641.619,584.171 454.605,788.116C454.605,788.116 349.692,620.299 153.755,834.59C153.755,834.59 223.902,615.631 55.954,583.639C55.954,583.639 304.526,459.748 110.861,276.699Z" style="fill:url(#_Radial1);"/> </g> </g> </g> <defs> <radialGradient id="_Radial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(454.132,0,0,378.716,510.086,457.356)"><stop offset="0%" style="stop-color:rgb(255,148,0);stop-opacity:1"/><stop offset="100%" style="stop-color:rgb(255,235,0);stop-opacity:1"/></radialGradient> </defs> </svg>-->
        <svg class="animate pulse glow" width="100%" viewBox="0 0 1034 914" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"> <g id="Artboard1" transform="matrix(1,0,0,1,195.798,199.001)"> <rect x="-195.798" y="-199.001" width="1033.15" height="913.661" style="fill:none;"/> <g transform="matrix(1,0,0,1,-195.798,-199.001)"> <g id="Glow"> <path d="M110.861,276.699C110.861,276.699 281.292,279.038 260.573,108.906C260.573,108.906 429.481,303.294 571.567,78.64C571.567,78.64 642.945,313.353 821.197,136.721C821.197,136.721 810.75,309.782 964.217,338.01C964.217,338.01 758.443,457.401 940.849,586.77C940.849,586.77 705.389,656.368 757.045,836.072C757.045,836.072 641.619,584.171 454.605,788.116C454.605,788.116 349.692,620.299 153.755,834.59C153.755,834.59 223.902,615.631 55.954,583.639C55.954,583.639 304.526,459.748 110.861,276.699Z" style="fill:rgb(242,197,0);stroke:white;stroke-width:8px;"/> </g> </g> </g> </svg>
        <svg class="animate smallPulse money" width="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><g id="Layer1"> <rect x="0" y="75.939" width="512" height="360.442" style="fill:rgb(149,213,167);"/> </g> <g id="Layer2"> <rect x="0" y="319.804" width="512" height="116.577" style="fill:rgb(128,203,147);"/> </g> <g id="Layer4"> <rect x="460.937" y="75.939" width="51.063" height="360.442" style="fill:rgb(128,203,147);"/> <rect x="460.937" y="319.804" width="51.063" height="116.577" style="fill:rgb(109,193,128);"/> </g> <g transform="matrix(1,0,0,1,0.804971,39.1428)"> <rect x="35.244" y="357.731" width="439.902" height="0.051" style="fill:rgb(149,213,167);stroke:rgb(149,213,167);stroke-width:21.33px;"/> </g> <g transform="matrix(1,0,0,1,0.804971,2.03608)"> <rect x="35.244" y="357.731" width="439.902" height="0.051" style="fill:rgb(149,213,167);stroke:rgb(149,213,167);stroke-width:21.33px;"/> </g> <g id="Layer3"> <g transform="matrix(1,0,0,1,358.791,-2.31189)"> <circle cx="76.723" cy="200.184" r="25.423" style="fill:rgb(237,237,237);"/> </g> <g transform="matrix(1,0,0,1,-0.404328,-2.31189)"> <circle cx="76.723" cy="200.184" r="25.423" style="fill:rgb(237,237,237);"/> </g> <g transform="matrix(1,0,0,1,-0.0235879,-0.179326)"> <rect x="153.453" y="75.939" width="205.574" height="243.865" style="fill:rgb(237,237,237);"/> </g> <rect x="153.453" y="319.804" width="205.574" height="116.577" style="fill:rgb(216,216,218);"/> </g> <g transform="matrix(1.02374,0,0,1.02374,-7.15149,115.044)"> <ellipse cx="255.005" cy="137.687" rx="4.54" ry="4.488" style="fill:rgb(149,213,167);"/> </g> <g transform="matrix(1.02374,0,0,1.02374,-6.07632,-3.70627)"> <ellipse cx="255.005" cy="137.687" rx="4.54" ry="4.488" style="fill:rgb(149,213,167);"/> </g> <g transform="matrix(1.26382,0,0,1.26711,-46.2223,5.51389)"> <ellipse cx="255.005" cy="137.687" rx="4.54" ry="4.488" style="fill:rgb(149,213,167);"/> </g> <g transform="matrix(1.27381,0,0,1.27712,-94.607,40.1809)"> <ellipse cx="255.005" cy="137.687" rx="4.54" ry="4.488" style="fill:rgb(149,213,167);"/> </g> <g transform="matrix(1,0,0,1,-22.0956,43.2412)"> <path d="M293.097,176.321C293.139,172.53 291.753,169.28 288.941,166.571C286.128,163.863 281.659,161.509 275.534,159.509C271.659,158.301 268.159,156.905 265.034,155.321C261.909,153.738 259.232,151.853 257.003,149.665C254.774,147.478 253.055,144.967 251.847,142.134C250.639,139.301 250.034,136.03 250.034,132.321C250.034,128.821 250.566,125.655 251.628,122.821C252.691,119.988 254.191,117.519 256.128,115.415C258.066,113.311 260.42,111.613 263.191,110.321C265.961,109.03 269.034,108.176 272.409,107.759L272.409,94.009L281.722,94.009L281.722,107.759C288.722,108.717 294.159,111.665 298.034,116.603C301.909,121.54 303.868,128.259 303.909,136.759L292.409,136.759C292.409,133.967 292.066,131.394 291.378,129.04C290.691,126.686 289.691,124.665 288.378,122.978C287.066,121.29 285.451,119.967 283.534,119.009C281.618,118.051 279.43,117.571 276.972,117.571C271.93,117.571 268.118,118.884 265.534,121.509C262.951,124.134 261.639,127.676 261.597,132.134C261.597,134.217 261.93,136.071 262.597,137.696C263.264,139.321 264.316,140.801 265.753,142.134C267.191,143.467 269.045,144.707 271.316,145.853C273.586,146.998 276.326,148.113 279.534,149.196C283.451,150.488 286.972,151.926 290.097,153.509C293.222,155.092 295.868,156.946 298.034,159.071C300.201,161.196 301.857,163.655 303.003,166.446C304.149,169.238 304.722,172.488 304.722,176.196C304.722,179.821 304.149,183.071 303.003,185.946C301.857,188.821 300.243,191.29 298.159,193.353C296.076,195.415 293.545,197.071 290.566,198.321C287.586,199.571 284.284,200.384 280.659,200.759L280.659,212.759L271.347,212.759L271.347,200.821C268.097,200.488 264.982,199.738 262.003,198.571C259.024,197.405 256.389,195.707 254.097,193.478C251.805,191.248 249.972,188.446 248.597,185.071C247.222,181.696 246.534,177.655 246.534,172.946L258.097,172.946C258.097,176.446 258.618,179.353 259.659,181.665C260.701,183.978 262.045,185.821 263.691,187.196C265.336,188.571 267.201,189.551 269.284,190.134C271.368,190.717 273.472,191.009 275.597,191.009C278.305,191.009 280.743,190.676 282.909,190.009C285.076,189.342 286.909,188.373 288.409,187.103C289.909,185.832 291.066,184.29 291.878,182.478C292.691,180.665 293.097,178.613 293.097,176.321Z" style="fill:rgb(149,213,167);fill-rule:nonzero;"/> </g> </svg>
      </div>

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

  .cash-money-container {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .money {
    position: absolute;
    width: 200px;
  }

</style>
