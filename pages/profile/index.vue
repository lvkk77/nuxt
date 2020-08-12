<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img
              :src="user.image"
              class="user-img"
            />
            <h4>{{user.username}}</h4>
            <p>
              {{user.bio}}
            </p>
            <nuxt-link
              class="btn btn-sm btn-outline-secondary action-btn"
              to="/settings"
            >
              <i class="ion-gear-a"></i>
              Edit Profile Settings
            </nuxt-link>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link "
                  :class="{
                    active: tab === 'my_articles'
                  }"
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'my_articles'
                    }
                  }"
                  exact
                >My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'favorited_articles'
                  }"
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'favorited_articles'
                    }
                  }"
                  exact
                >Favorited Articles</nuxt-link>
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
            </nuxt-link>
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

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getArticles, addFavorite, delFavorite } from '@/api/articles'

export default {
  middleware: 'authenticated', // 路由保护中间件
  name: "UserProfile",
  watchQuery: ['tab', 'page'],
  async asyncData ({ query, params }) {
    const tab = query.tab || 'my_articles'
    const page = Number.parseInt(query.page || 1)
    const limit = 10

    const articleRes = tab === 'my_articles' ? await getArticles({
      limit,
      offset: (page - 1) * limit,
      author: params.username
    }) : await getArticles({
      limit,
      offset: (page - 1) * limit,
      favorited: params.username
    })

    const { articles, articlesCount } = articleRes.data

    articles.forEach(article => article.favoritedDisabled = false)

    return {
      articles,
      articlesCount,
      tab,
      page,
      limit
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
};
</script>

<style scoped>
</style>