<template>
  <div class="share-this">
    <div class="sharethis-inline-share-buttons"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const st = window.__sharethis__
    if (!st) {
      const script = document.createElement('script')
      script.src =
        'https://platform-api.sharethis.com/js/sharethis.js#property=5f0450ce10009800120b8db6&product=sticky-share-buttons'
      document.body.appendChild(script)
    } else if (typeof st.initialize === 'function') {
      st.href = window.location.href
      st.initialize()
    }
  },
}
</script>

<style scoped>
.share-this {
  margin-bottom: 14px;
}
</style>
