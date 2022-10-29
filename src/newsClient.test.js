const NewsClient = require('./newsClient');

require('jest-fetch-mock').enableMocks()

describe('NewsClient class', () => {

  beforeEach(() => {
    fetch.resetMocks();
  });
  
  it('calls fetch and loads news stories', (done) => {
    
    const client = new NewsClient();

    fetch.mockResponseOnce(JSON.stringify({
      results: {
        webTitle: "Ofgem to unveil new household energy bill price cap on Thursday morning – business live",
        webUrl :"https://www.theguardian.com/business/live/2022/feb/02/oil-prices-climb-seven-year-highs-opec-meeting-markets-await-eurozone-inflation",
        fields: {
          headline: "Ofgem to unveil new household energy bill price cap on Thursday morning – business live",
          thumbnail: "https://media.guim.co.uk/aee3b3b05ea2a37acdadc91095c163fd381eba4a/0_24_3500_2100/500.jpg"
          },
        },
      })
    );

    client.loadNews((dataFromApi) => {
      expect(dataFromApi.results.fields.headline).toBe("Ofgem to unveil new household energy bill price cap on Thursday morning – business live");
      done();
    });
  });
});