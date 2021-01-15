<template>
  <div class="stacked-news">
    <div class="main-container">
      <ImageVideoNews :news="getStackedNews" />
      <div class="container">
        <div class="content">
          <h1 class="text-white">
            {{ getStackedNews.title }}
          </h1>
          <p class="text-white">
            कोभिड-१९ ले सङ्क्रमित मानिसहरूको फोक्सोमा तीन महिनाभन्दा धेरै
            समयपश्चात् पनि खराबी गराइरहेको पाइएको अनुसन्धानकर्ताहरूले बताएका
            छन्।
          </p>
          <nuxt-link
            :to="`news-view/${getStackedNews.id}`"
            :news="getStackedNews"
          >
            <BorderBtn />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageVideoNews from '@/components/home/stacked/image_video'
import BorderBtn from '@/components/border_btn'
import { mapGetters } from 'vuex'

export default {
  name: 'StackedNews',
  components: {
    ImageVideoNews,
    BorderBtn,
  },
  computed: mapGetters(['getStackedNews']),
}
</script>

<style lang="scss">
@import '@/styles/home.scss';
</style>
