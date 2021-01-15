<template>
  <div class="business-news">
    <div class="row">
      <div class="col-lg-8">
        <h3>व्यापार समाचार</h3>
        <BusinessNewsItem
          v-for="news in getBusiness"
          :key="news.id"
          :news="news"
        />
      </div>
      <div class="col-lg-4 mt-5 mt-lg-0">
        <h4>सब भन्दा सेयर गरिएको</h4>

        <div v-for="(news, index) in randomNews" :key="news.id">
          <MostShareItem
            class="mt-3"
            :count="index + 1"
            :news="news"
            v-if="index < 10"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BusinessNewsItem from './business_news_item'
import MostShareItem from '../sports/most_share_item'
import { mapGetters } from 'vuex'
import { shuffle } from '~/helpers/news_helper'

export default {
  name: 'Business',
  components: {
    BusinessNewsItem,
    MostShareItem,
  },
  data() {
    return {
      randomNews: [],
    }
  },
  computed: mapGetters(['getBusiness', 'getNews']),
  created() {
    this.randomNews = this.getNews
  },
}
</script>

<style></style>
