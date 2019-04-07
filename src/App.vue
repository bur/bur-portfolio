
<template>
  <div class="main-wrapper">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

fontawesome.library.add(brands, solid);

export default {
  data () {
    return {
      title: 'My portfolio',
    };
  },
  components: {
    FontAwesomeIcon
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  }
};
</script>

<style>
</style>
