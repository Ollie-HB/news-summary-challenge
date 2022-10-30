const testApiData = require('./apiTestExample');
const NewsClient = require('./newsClient');

require('jest-fetch-mock').enableMocks();

describe('NewsClient class', () => {

  beforeEach(() => {
  fetch.resetMocks();
});

  it('calls fetch and loads news stories', (done) => {
    const client = new NewsClient();
    fetch.mockResponseOnce(
      JSON.stringify({testApiData})
    );

    client.loadNews((dataFromApi) => {
      expect(dataFromApi.testApiData.response.results[0].fields.headline).toEqual("At last, the inventors of modern skiing have something to cheer: Dave Ryding");
      done();
    });
  });
});
