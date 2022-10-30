class NewsModel {
  constructor(){
    this.stories = []
    // this.headlines = []
  }

  getNews(){
    return this.stories
  }

  setNews(stories){
    this.stories = stories;
  }
  
  getHeadlines() {
    const news = this.stories.response.results
    let headlines = news.map(story => {
      return story.fields.headline
    })
    return headlines
  }
}


module.exports = NewsModel;