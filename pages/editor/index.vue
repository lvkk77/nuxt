<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages">
            <template v-for="(messages,field) in errors">
              <li
                v-for="(message, index) in messages"
                :key="index"
              >
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>
          <form
            onsubmit="return false"
            id="articleForm"
          >
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                >
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                >
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tag"
                  @keyup.enter="enterTag"
                >
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag,index) in article.tagList"
                    :key="index"
                  >
                    <i
                      class="ion-close-round"
                      @click="delTag(index)"
                    ></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="updateArticle"
                v-if="slug"
              >
                Update Article
              </button>

              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="publishArticle"
                v-else
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { createArticle, getArticleDetails, updateArticle } from "@/api/articles";
export default {
  middleware: 'authenticated', // 路由保护中间件
  name: "EditorIndex",
  data () {
    return {
      tag: "",
      slug: this.$route.params.slug,
      errors: {},
      article: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      }
    }
  },
  async mounted () {
    if (this.slug) {
      const { data } = await getArticleDetails(this.slug)
      const { article } = data

      this.article.title = article.title
      this.article.body = article.body
      this.article.description = article.description
      this.article.tagList = article.tagList
    }

  },
  methods: {
    enterTag () {
      const tagList = this.article.tagList
      const found = tagList.indexOf(this.tag);

      if (this.tag !== '' && found) {
        tagList.push(this.tag)
        this.tag = ''
      }
    },
    delTag (index) {
      const tagList = this.article.tagList
      tagList.splice(index, 1)
    },
    async publishArticle () {
      try {
        const { data } = await createArticle(this.article)
        document.getElementById("articleForm").reset();
      } catch (error) {
        this.errors = error.response.data.errors
      }
    },
    async updateArticle () {
      const newData = {
        slug: this.slug,
        article: this.article
      }
      try {
        await updateArticle(newData)
      } catch (error) {
        this.errors = error.response.data.errors
      }
    },
  }

}
</script>

<style>
</style>