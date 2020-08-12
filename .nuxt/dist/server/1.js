exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return delFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticleDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return postComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return delArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return delComment; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
const getYourFeedArticles = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    data
  });
};
const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
const delFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
const getArticleDetails = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
const getComment = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
const postComment = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${data.slug}/comments`,
    data: data.comment
  });
};
const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles`,
    data
  });
};
const updateArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${data.slug}`,
    data: data.article
  });
};
const delArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
};
const delComment = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${data.slug}/comments/${data.id}`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=870e6cf2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-mete',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-mete',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comment',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=870e6cf2&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=2ab11d0b&
var article_metavue_type_template_id_2ab11d0b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
    name:'profile',
    params:{
      username:_vm.article.author.username
    }
  }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name:'profile',
        params:{
          username:_vm.article.author.username
        }
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMM DD YYYY')))+"</span>")],2),_vm._ssrNode(" "),(_vm.article.author.username !== _vm.user.username)?[_vm._ssrNode("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
      active:_vm.article.author.following
    }))+"><i class=\"ion-plus-round\"></i>\n       \n      Follow Eric Simons <span class=\"counter\">(10)</span></button>\n      \n    <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
      active:_vm.article.favorited
    }))+"><i class=\"ion-heart\"></i>\n       \n      Favorite Post <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")]:[_vm._ssrNode("<span class=\"ng-scope\">","</span>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
          name:'editor',
          params:{
            slug:_vm.article.slug
          }
        }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n      ")]),_vm._ssrNode(" <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n      </button>")],2)]],2)}
var article_metavue_type_template_id_2ab11d0b_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=2ab11d0b&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'ArticleMete',
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    async del() {
      try {
        const {
          data
        } = await Object(articles["c" /* delArticle */])(this.article.slug);
        this.$router.go(-1);
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_2ab11d0b_render,
  article_metavue_type_template_id_2ab11d0b_staticRenderFns,
  false,
  injectStyles,
  null,
  "118b6948"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=template&id=587d5e1a&
var article_commentvue_type_template_id_587d5e1a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form onsubmit=\"return false\" class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.commentText))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n        Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(coment,index){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(coment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name:'profile',
          params: {
            username: coment.author.username
          }
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":coment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name:'profile',
          params: {
            username: coment.author.username
          }
        }}},[_vm._v(_vm._s(coment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(coment.createdAt,'MMM DD YYYY')))+"</span> "+((coment.author.username === _vm.user.username)?("<span class=\"mod-options\"><i class=\"ion-trash-a\"></i></span>"):"<!---->"))],2)],2)})],2)}
var article_commentvue_type_template_id_587d5e1a_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=template&id=587d5e1a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_commentvue_type_script_lang_js_ = ({
  name: 'ArticleComment',
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  data() {
    return {
      commentText: '',
      comments: []
    };
  },

  props: {
    article: {
      type: Object,
      required: true
    }
  },

  async mounted() {
    const {
      data
    } = await Object(articles["h" /* getComment */])(this.article.slug);
    this.comments = data.comments;
  },

  methods: {
    async clickPostComment() {
      const {
        data
      } = await Object(articles["j" /* postComment */])({
        slug: this.article.slug,
        comment: {
          body: this.commentText
        }
      });

      try {
        this.commentText = '';
        this.comments.unshift(data.comment);
      } catch (error) {
        console.log(error);
      }
    },

    async delComment(id, index) {
      try {
        const {
          data
        } = await Object(articles["d" /* delComment */])({
          slug: this.article.slug,
          id
        });
        this.comments.splice(index, 1);
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentvue_type_script_lang_js_ = (article_commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue



function article_comment_injectStyles (context) {
  
  
}

/* normalize component */

var article_comment_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentvue_type_script_lang_js_,
  article_commentvue_type_template_id_587d5e1a_render,
  article_commentvue_type_template_id_587d5e1a_staticRenderFns,
  false,
  article_comment_injectStyles,
  null,
  "0310cfd8"
  
)

/* harmony default export */ var article_comment = (article_comment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'ArticleIndex',

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(articles["f" /* getArticleDetails */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    md.render(article.body);
    return {
      article: article
    };
  },

  components: {
    ArticleMete: article_meta,
    ArticleComment: article_comment
  },

  head() {
    return {
      title: `${this.article.title} - ReallWorld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "4a209d2c"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map