<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.自动化test</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li
                class="nav-item"
                v-if="user"
              >
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'your_feed'
                  }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed'
                    }
                  }"
                  exact
                >Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'global_feed'
                  }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global_feed'
                    }
                  }"
                  exact
                >Global Feed</nuxt-link>
              </li>

              <li
                class="nav-item"
                v-if="tag"
              >
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{
                    active: tab === 'tag'
                  }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      tag: tag
                    }
                  }"
                ># {{ tag }}</nuxt-link>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                <img :src="article.author.image" />
              </nuxt-link>

              <div class="info">
                <nuxt-link
                  :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }"
                  class="author"
                >{{ article.author.username }}
                </nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{
                active: article.favorited
              }"
                @click="onFavorite(article)"
                :disabled="article.favoritedDisabled"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{
                name: 'article',
                params: {
                  slug: article.slug
                }
              }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                :to="{
                  name:'home',
                  query: {
                    tab:'tag',
                    tag: item
                  }
                }"
                class="tag-pill tag-default"
                v-for="item in tags"
                :key="item"
              >{{ item }}</nuxt-link>

            </div>
          </div>
        </div>
        <!-- 分页列表 -->
        <nav>
          <ul class="pagination">
            <li
              class="page-item"
              :class="{
                active: item === page
              }"
              v-for="item in totalPage"
              :key="item"
            >
              <nuxt-link
                class="page-link"
                :to="{
                  name: 'home',
                  query: {
                    page: item,
                    tag: $route.query.tag,
                    tab: tab
                  }
                }"
              >{{item}}</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles, getYourFeedArticles, addFavorite, delFavorite } from '@/api/articles'
import { getTags } from '@/api/tag'
import { mapState } from "vuex";

export default {
  name: 'HomeIndex',
  watchQuery: ['page', 'tag', 'tab'],
  async asyncData ({ query }) {
    const page = Number.parseInt(query.page || 1)
    const limit = 20
    const tab = query.tab || 'global_feed'
    const tag = query.tag
    const loadArticles = tab === 'your_feed' ? getYourFeedArticles : getArticles

    const [articleRes, tagRes] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag
      }),
      getTags()
    ])

    const { articles, articlesCount } = articleRes.data
    const { tags } = tagRes.data

    articles.forEach(article => article.favoritedDisabled = false)

    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tab,
      tag
    }
  },
  computed: {
    ...mapState(['user']),
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods: {
    async onFavorite (article) {
      article.favoritedDisabled = true
      if (article.favorited) {
        await delFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoritedDisabled = false
    }
  },
}
</script>

<style scoped>
</style>