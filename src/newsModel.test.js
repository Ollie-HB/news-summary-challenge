const testApiData = require('./apiTestExample');
const NewsModel = require('./newsModel');

describe('NewsModel', () => {
  
  it('#getNews - initialises with empty array', () => {
    news = new NewsModel();
    expect(news.getNews()).toEqual([])
  });

  it('#setNews - returns API data once set', () => {
    news = new NewsModel();
    news.setNews(testApiData);
    expect(news.getNews()).toEqual(testApiData)
  });

  it('#getHeadlines - returns headlines of stories from API', () => {
    news = new NewsModel();
    news.setNews(testApiData);
    expect(news.getHeadlines()[0]).toEqual("At last, the inventors of modern skiing have something to cheer: Dave Ryding");
    expect(news.getHeadlines()[1]).toEqual("Ofgem to unveil new household energy bill price cap on Thursday morning – business live");
    expect(news.getHeadlines().length).toEqual(2);
  })
});