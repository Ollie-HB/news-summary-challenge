class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');

    // this.displayHeadlines();
    };

    displayHeadlines(){
      const headlines = this.model.getHeadlines();
      this.client.loadNews()

      // news.forEach(story => {
      // const storyElement = document.createElement('div');
      // storyElement.className = 'story';
      // this.mainContainerEl.append(storyElement);
    }
  };
    


  module.exports = NewsView;