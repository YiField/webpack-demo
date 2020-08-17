<template>
  <div class="ereader"></div>
</template>
<script>
import Epub from "epubjs";
const DOWNLOAD_URL =
  "machiavelli-history-of-florence-and-of-the-affairs-of-italy.epub";
export default {
  name: "eReader",
  data() {
    return {};
  },
  methods: {
    showEpub() {
      this.book = new Epub(DOWNLOAD_URL);
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight,
      });
      this.rendition.display();
    },
  },
  mounted() {
    this.showEpub();
  },
};
</script>
