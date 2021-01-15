<template>
  <nuxt-link :to="`/news-view/${news.id}`" :news="news">
    <div class="interesting-item">
      <div class="row">
        <div class="col-4 p-0">
          <div class="img-container-parent">
            <div
              class="img-container"
              :style="{
                'background-image': `url(${require(`@/assets/images/${news.img}`)})`,
                'background-position': 'center',
                'background-size': 'cover',
              }"
            ></div>
          </div>
        </div>
        <div class="col-8">
          <div class="details">
            <h6>
              {{ news.title }}
            </h6>
            <p>{{ news.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'InterestingItem',
  props: {
    news: Object,
  },
}
</script>

<style lang="scss">
@import '@/styles/home.scss';
</style>
