<template>
  <div class="video-news">
    <iframe
      class="img-container"
      src="https://www.youtube.com/embed/AiQBZj5A8O4"
      allowfullscreen
      frameBorder="0"
    ></iframe>
  </div>
</template>

<script>
import VideoNewsItem from "./video_news_item";

export default {
  name: "VideoNews",
  components: {
    VideoNewsItem,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
