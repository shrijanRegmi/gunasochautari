<template>
  <nuxt-link :to="`/news-view/${news.id}`" :news="news">
    <div class="most-share-item">
      <div class="row">
        <div class="col-3">
          <div class="number">
            <h4>{{ count }}</h4>
          </div>
        </div>
        <div class="col-9">
          <div class="d-flex">
            <p class="type">{{ news.category }}</p>
            <p class="slash-icon mx-3">/</p>
            <p class="date">{{ news.date }}</p>
          </div>
          <h6>{{ news.title }}</h6>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'MostShareItem',
  props: {
    count: Number,
    news: Object,
  },
  created() {
    console.log(this.news.img);
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/home.scss';
</style>
