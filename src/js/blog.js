import articles from "../data/articles.json";

$(function () {

  var data = {
    articles: [],
  }

  var app = new Vue({
    el: '#blogArticles',
    data: data,
    
    mounted: function () {
      this.articles = articles.data;
    }
  })
});