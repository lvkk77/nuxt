import { request } from '@/plugins/request'

export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

export const getYourFeedArticles = data => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    data
  })
}

export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}


export const delFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

export const getArticleDetails = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

export const getComment = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

export const postComment = data => {
  return request({
    method: 'POST',
    url: `/api/articles/${data.slug}/comments`,
    data: data.comment
  })
}

export const createArticle = data => {
  return request({
    method: 'POST',
    url: `/api/articles`,
    data
  })
}

export const updateArticle = data => {
  return request({
    method: 'PUT',
    url: `/api/articles/${data.slug}`,
    data: data.article
  })
}

export const delArticle = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  })
}

export const delComment = data => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${data.slug}/comments/${data.id}`
  })
}
