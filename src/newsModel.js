class NewsModel {
  constructor(){
    this.stories = []
  }

  getNews(){
    return this.stories
  }

  setNews(stories){
    this.stories = stories;
  }
}

module.exports = NewsModel;