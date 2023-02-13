<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/fitness_01.jpeg"> -->
    <div class="header-title">
      <h1>文章の内容</h1>
    </div>
    <div class="content-items">
      <ArticleComponent :article="item" v-for="(item, index) in articles" :key="index"></ArticleComponent>
    </div>
  </div>
</template>

<script lang="ts">
import ArticleComponent from "@/components/ArticleComponent.vue";
import { defineComponent, ref } from "vue";
import { ArticleModel } from "../model/article.model";

export default defineComponent({
  name: "BlogMainPage",
  components: {
    ArticleComponent,
  },

  setup() {
    const articles = ref<ArticleModel[]>([
      {
        title: "1",
        content: "SSS",
      },
      {
        title: "2",
        content: "ZZZ",
      },
      {
        title: "3",
        content: "XXX",
      },
    ]);
    return {
      articles,
    };
  },
});
</script>

<style lang="scss">
.home {
  display: flex;
  flex-flow: column;
  background: url("../assets/cc_bg.jpg");
  height: 100%;
  width: 100%;

  .header-title {
    display: flex;
    justify-content: center;

    width: 100%;
  }

  .content-items {
    display: flex;
    flex-flow: column;
    // justify-content: center;
  }

  img {
    width: 800px;
  }
}
</style>
