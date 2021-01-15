<template>
  <div class="news-view mt-3 mt-md-5">
    <div class="container">
      <ShareThis />

      <h3>
        {{ news.title }}
      </h3>
      <div
        class="img-container mt-3"
        :style="{
          backgroundImage: `url(${require(`@/assets/images/${news.img}`)})`,
        }"
      ></div>

      <p class="long mt-3" v-html="news.long"></p>

      <div class="more-content">
        <hr />

        <h5>यो पनि हेर्नुहोस्</h5>
        <div class="row">
          <div class="col-md-6" v-for="(news, index) in getNews" :key="news.id">
            <LandingSideItem v-if="index < 6" :news="news" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LandingSideItem from '@/components/home/landing/landing_side_item'
import ShareThis from '@/components/sharethis'

export default {
  name: 'NewsView',
  components: {
    LandingSideItem,
    ShareThis,
  },
  data() {
    return {
      id: this.$route.params.id,
      news: {},
    }
  },
  computed: mapGetters(['getNews', 'getStackedNews']),
  created() {
    const thisNews = this.getNews.filter((news) => news.id == this.id)
    this.news = thisNews[0]

    // if stacked news
    if (this.id == 0) {
      this.news = this.getStackedNews
    }
  },
  head() {
    return {
      title: `गुनासो चौतारी - ${this.news.title}`,
      meta: [
        { property: 'og:title', content: `गुनासो चौतारी - ${this.news.title}` },
        { property: 'og:site_name', content: 'गुनासो चौतारी' },
        {
          property: 'og:description',
          content: this.news.short,
        },
        { property: 'og:type', content: 'article' },
        {
          property: 'og:image',
          content: `https://gunasochautari.com/images/${this.news.img}`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/styles/news_view.scss';
</style>
