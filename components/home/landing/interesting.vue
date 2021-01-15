<template>
  <div class="interesting">
    <div class="d-flex interesting-title justify-content-end mb-3">
      <!-- <h3>ब्रेकिंग समाचार</h3> -->

      <div class="mCarousel-btns d-none d-lg-flex">
        <a
          class="carousel-control-prev"
          href="#interestingCarousel-lg"
          role="button"
          data-slide="prev"
        >
          <i class="fas fa-chevron-left"></i>
        </a>
        <a
          class="carousel-control-next"
          href="#interestingCarousel-lg"
          role="button"
          data-slide="next"
        >
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>

      <div class="mCarousel-btns d-none d-md-flex d-lg-none">
        <a
          class="carousel-control-prev"
          href="#interestingCarousel-md"
          role="button"
          data-slide="prev"
        >
          <i class="fas fa-chevron-left"></i>
        </a>
        <a
          class="carousel-control-next"
          href="#interestingCarousel-md"
          role="button"
          data-slide="next"
        >
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>

      <div class="mCarousel-btns d-flex d-md-none">
        <a
          class="carousel-control-prev"
          href="#interestingCarousel-sm"
          role="button"
          data-slide="prev"
        >
          <i class="fas fa-chevron-left"></i>
        </a>
        <a
          class="carousel-control-next"
          href="#interestingCarousel-sm"
          role="button"
          data-slide="next"
        >
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
    <div
      id="interestingCarousel-lg"
      class="carousel slide d-none d-lg-block"
      data-ride="carousel"
    >
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[0]" />
            </div>
            <div class="col">
              <InterestingItem :news="getInteresting[1]" />
            </div>
            <div class="col">
              <InterestingItem :news="getInteresting[2]" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[3]" />
            </div>
            <div class="col">
              <InterestingItem :news="getInteresting[4]" />
            </div>
            <div class="col">
              <InterestingItem :news="getInteresting[5]" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="interestingCarousel-md"
      class="carousel slide d-none d-md-block d-lg-none"
      data-ride="carousel"
    >
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[0]" />
            </div>
            <div class="col">
              <InterestingItem :news="getInteresting[1]" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[2]" />
            </div>
            <div class="col">
              <InterestingItem :news="getInteresting[3]" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[4]" />
            </div>
            <div class="col">
              <InterestingItem :news="getInteresting[5]" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="interestingCarousel-sm"
      class="carousel slide d-block d-md-none"
      data-ride="carousel"
    >
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[0]" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[1]" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[2]" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[3]" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[4]" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem :news="getInteresting[5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InterestingItem from './interesting_item'
import { mapGetters } from 'vuex'

export default {
  name: 'Interesting',
  components: {
    InterestingItem: InterestingItem,
  },
  computed: mapGetters(['getInteresting']),
}
</script>

<style lang="scss">
@import '@/styles/home.scss';
</style>
