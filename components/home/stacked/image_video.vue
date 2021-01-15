<template>
  <div class="image-video-news">
    <div class="container text-center">
      <div class="row">
        <div class="col-md">
          <div
            class="img-container"
            :style="{
              'background-image': `url(${require(`@/assets/images/${news.img}`)})`,
            }"
          ></div>
        </div>
        <div class="col-md mt-4 mt-md-0">
          <div
            class="img-container"
            :style="{
              'background-image': `url(${require(`@/assets/images/${news.img2}`)})`,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageVideoNews',
  props: {
    news: Object,
  },
}
</script>

<style lang="scss">
@import '@/styles/home.scss';
</style>
