const NewsModel = require('./newsModel');

describe('NewsModel', () => {
  
  it('#getNews - initialises with an empty array for news stories', () => {
    news = new NewsModel();
    expect(news.getNews()).toEqual([])
  });;
});