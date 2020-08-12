exports.ids = [4];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=a63ddae8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-a63ddae8>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-a63ddae8>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-a63ddae8>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-a63ddae8>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"user-img\" data-v-a63ddae8> <h4 data-v-a63ddae8>"+_vm._ssrEscape(_vm._s(_vm.user.username))+"</h4> <p data-v-a63ddae8>"+_vm._ssrEscape("\n            "+_vm._s(_vm.user.bio)+"\n          ")+"</p> "),_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v("\n            Edit Profile Settings\n          ")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-a63ddae8>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-a63ddae8>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-a63ddae8>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-a63ddae8>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-a63ddae8>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-a63ddae8>","</li>",[_c('nuxt-link',{staticClass:"nav-link ",class:{
                  active: _vm.tab === 'my_articles'
                },attrs:{"to":{
                  name: 'profile',
                  query: {
                    tab: 'my_articles'
                  }
                },"exact":""}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-a63ddae8>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'favorited_articles'
                },attrs:{"to":{
                  name: 'profile',
                  query: {
                    tab: 'favorited_articles'
                  }
                },"exact":""}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-a63ddae8>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-a63ddae8>","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile',
              params: {
                username: article.author.username
              }
            }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-a63ddae8>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
              name: 'profile',
              params: {
                username: article.author.username
              }
            }}},[_vm._v(_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\" data-v-a63ddae8>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoritedDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
              active: article.favorited
            }))+" data-v-a63ddae8><i class=\"ion-heart\" data-v-a63ddae8></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {
                slug: article.slug
              }
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-a63ddae8>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-a63ddae8>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
              active: item === _vm.page
            }))+" data-v-a63ddae8>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                name: 'home',
                query: {
                  page: item,
                  tag: _vm.$route.query.tag,
                  tab: _vm.tab
                }
              }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=a63ddae8&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// EXTERNAL MODULE: ./api/articles.js
var api_articles = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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
//


/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  // 路由保护中间件
  name: "UserProfile",
  watchQuery: ['tab', 'page'],

  async asyncData({
    query,
    params
  }) {
    const tab = query.tab || 'my_articles';
    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const articleRes = tab === 'my_articles' ? await Object(api_articles["g" /* getArticles */])({
      limit,
      offset: (page - 1) * limit,
      author: params.username
    }) : await Object(api_articles["g" /* getArticles */])({
      limit,
      offset: (page - 1) * limit,
      favorited: params.username
    });
    const {
      articles,
      articlesCount
    } = articleRes.data;
    articles.forEach(article => article.favoritedDisabled = false);
    return {
      articles,
      articlesCount,
      tab,
      page,
      limit
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavorite(article) {
      article.favoritedDisabled = true;

      if (article.favorited) {
        await Object(api_articles["e" /* delFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await Object(api_articles["a" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoritedDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a63ddae8",
  "3444561f"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map