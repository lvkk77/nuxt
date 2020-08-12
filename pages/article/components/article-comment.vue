<template>
  <div>
    <form
      class="card comment-form"
      onsubmit="return false"
    >
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          v-model="commentText"
          rows="3"
        ></textarea>
      </div>
      <div class="card-footer">
        <img
          :src="user.image"
          class="comment-author-img"
        />
        <button
          class="btn btn-sm btn-primary"
          @click="clickPostComment"
        >
          Post Comment
        </button>
      </div>
    </form>

    <div
      class="card"
      v-for="(coment,index) in comments"
      :key="coment.id"
    >
      <div class="card-block">
        <p class="card-text">{{coment.body}}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name:'profile',
            params: {
              username: coment.author.username
            }
          }"
          class="comment-author"
        >
          <img
            :src="coment.author.image"
            class="comment-author-img"
          />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          :to="{
            name:'profile',
            params: {
              username: coment.author.username
            }
          }"
          class="comment-author"
        >{{ coment.author.username }}</nuxt-link>
        <span class="date-posted">{{ coment.createdAt | date('MMM DD YYYY')}}</span>
        <span
          class="mod-options"
          v-if="coment.author.username === user.username"
        >
          <i
            class="ion-trash-a"
            @click="delComment(coment.id,index)"
          ></i>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import { getComment, postComment, delComment } from "@/api/articles";
import { mapState } from 'vuex'
export default {
  name: 'ArticleComment',
  computed: {
    ...mapState(['user'])
  },
  data () {
    return {
      commentText: '',
      comments: []
    }
  },
  props: {
    article: {
      type: Object,
      required: true
    }

  },
  async mounted () {
    const { data } = await getComment(this.article.slug)
    this.comments = data.comments
  },
  methods: {
    async clickPostComment () {
      const { data } = await postComment({
        slug: this.article.slug,
        comment: {
          body: this.commentText
        }
      })

      try {
        this.commentText = ''
        this.comments.unshift(data.comment)
      } catch (error) {
        console.log(error)
      }

    },
    async delComment (id, index) {
      try {
        const { data } = await delComment({
          slug: this.article.slug,
          id
        })
        this.comments.splice(index, 1)
      } catch (error) {
        console.log(error)
      }
    }
  }

}
</script>

<style>
</style>