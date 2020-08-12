<template>
  <div class="article-meta">
    <nuxt-link :to="{
      name:'profile',
      params:{
        username:article.author.username
      }
    }">
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{
          name:'profile',
          params:{
            username:article.author.username
          }
        }"
        class="author"
      >{{article.author.username}}</nuxt-link>
      <span class="date">{{article.createdAt | date('MMM DD YYYY')}}</span>
    </div>

    <template v-if="article.author.username !== user.username">
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{
        active:article.author.following
      }"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        Follow Eric Simons <span class="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{
        active:article.favorited
      }"
      >
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post <span class="counter">({{article.favoritesCount}})</span>
      </button>
    </template>

    <template v-else>
      <span class="ng-scope">
        <nuxt-link
          class="btn btn-outline-secondary btn-sm"
          :to="{
            name:'editor',
            params:{
              slug:article.slug
            }
          }"
        >
          <i class="ion-edit"></i> Edit Article
        </nuxt-link>
        <button
          class="btn btn-outline-danger btn-sm"
          @click="del"
        >
          <i class="ion-trash-a"></i> Delete Article
        </button>
      </span>
    </template>
  </div>
</template>

<script>
import { delArticle } from "@/api/articles";
import { mapState } from 'vuex'
export default {
  name: 'ArticleMete',
  computed: {
    ...mapState(['user'])
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    async del () {
      try {
        const { data } = await delArticle(this.article.slug)
        this.$router.go(-1)
      } catch (error) {
        console.log(error)
      }
    }
  }

}
</script>

<style>
</style>