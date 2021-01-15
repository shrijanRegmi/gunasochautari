<template>
  <div class="landing-side">
    <div class="row">
      <div class="col-4">
        <div class="mBtn mBtn-active" @click="onPressBtns(0)">सम्बन्धित</div>
      </div>
      <div class="col-4">
        <div class="mBtn" @click="onPressBtns(1)">ब्रेकिंग</div>
      </div>
      <div class="col-4">
        <div class="mBtn" @click="onPressBtns(2)">लोकप्रिय</div>
      </div>
    </div>

    <div class="content mt-4">
      <div v-for="news in newsList" :key="news.id">
        <LandingSideItem :news="news" />
      </div>
    </div>
  </div>
</template>

<script>
import LandingSideItem from './landing_side_item'
import { mapGetters } from 'vuex'

export default {
  name: 'LandingSide',
  components: {
    LandingSideItem,
  },
  data() {
    return {
      newsList: [],
    }
  },
  computed: mapGetters(['getRelated', 'getBreaking', 'getPopular']),
  created() {
    this.newsList = this.getRelated
  },
  methods: {
    onPressBtns(index) {
      switch (index) {
        case 0:
          this.newsList = this.getRelated
          break
        case 1:
          this.newsList = this.getBreaking
          break
        case 2:
          this.newsList = this.getPopular
          break
        default:
          break
      }

      const btns = document.querySelectorAll('.mBtn')

      for (var i = 0; i < btns.length; i++) {
        const btn = btns[i]
        btn.classList.remove('mBtn-active')
        btns[index].classList.add('mBtn-active')
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/home.scss';
</style>
