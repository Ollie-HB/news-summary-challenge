/**
 * @jest-environment jsdom
 */

//  const fs = require('fs');

//  const NewsView = require('./newsView');
//  const NewsClient = require('./newsClient');
//  const NewsModel = require('./newsModel');
  
//   describe('Tests NewsView', () => {
    
//     beforeEach(() => {
//       document.body.innerHTML = fs.readFileSync('./index.html');
//     });

// it('loads and displays news stories', () => {
//   const model = new NewsModel;

//   const fakeClient = {
//     loadNews: (callback) => {
//     callback({
//       results: {
//         webTitle: "Ofgem to unveil new household energy bill price cap on Thursday morning – business live",
//         webUrl :"https://www.theguardian.com/business/live/2022/feb/02/oil-prices-climb-seven-year-highs-opec-meeting-markets-await-eurozone-inflation",
//         fields: {
//           headline: "Ofgem to unveil new household energy bill price cap on Thursday morning – business live",
//           thumbnail: "https://media.guim.co.uk/aee3b3b05ea2a37acdadc91095c163fd381eba4a/0_24_3500_2100/500.jpg"
//           },
//         },
//       }); 
//     }
//   }
//   const view = new NewsView(model, fakeClient);

//   view.displayNewsFromApi();
//   expect(document.querySelectorAll('div.story').length).toEqual(1);
// });
// });