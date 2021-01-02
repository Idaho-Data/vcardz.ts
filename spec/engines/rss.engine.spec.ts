import { RssEngine } from '../../vcardz/engines/rss.engine';
import { TestData } from '../data/testdata';
import {
  Channel,
  Item,
  Rss,
} from '../../vcardz/models/rss';


describe('rssEngine', () => {
  it('constructor test', () => {
    const parse = new RssEngine('foobar');
    expect(parse.payload).toEqual('foobar');
  });

  it ('generator test', () => {
    const engine = new RssEngine(TestData.rssFeed20);
    let result = engine.run().next().value;
    expect(result instanceof Item).toEqual(true);
  });


  it('rss feed test', () => {
    const engine = new RssEngine(TestData.rssFeedNyTimes);
    const feed = engine.feed;
    expect(feed instanceof Rss).toEqual(true);
    expect('2.0').toEqual(feed.version);
  });


  it('rss channel test', () => {
    const engine = new RssEngine(TestData.rssFeedNyTimes);
    const channel = engine.feed.channel;
    expect(channel instanceof Channel).toEqual(true);
    expect('NYT > Top Stories').toEqual(channel.title);
    expect('en-us').toEqual(channel.language);

    const testDate = new Date('2021-01-02T16:43:12.000Z');
    expect(testDate).toEqual(channel.pubDate);
  });


  it ('item description test', () => {
    const engine = new RssEngine(TestData.rssFeed20);
    let result = engine.run().next().value as Item;
    const descriptionTest = '"rssflowersalignright"With any luck we should have one or two more days of namespaces stuff here on Scripting News. It feels like it\'s winding down. Later in the week I\'m going to a <a href="http://harvardbusinessonline.hbsp.harvard.edu/b02/en/conferences/conf_detail.jhtml?id=s775stg&pid=144XCF">conference</a> put on by the Harvard Business School. So that should change the topic a bit. The following week I\'m off to Colorado for the <a href="http://www.digitalidworld.com/conference/2002/index.php">Digital ID World</a> conference. We had to go through namespaces, and it turns out that weblogs are a great way to work around mail lists that are clogged with <a href="http://www.userland.com/whatIsStopEnergy">stop energy</a>. I think we solved the problem, have reached a consensus, and will be ready to move forward shortly.';
    expect(descriptionTest).toEqual(result.description);
    expect(0).toEqual(result.category.length);
  });

  it('NY Times RSS feed test', () => {
    const engine = new RssEngine(TestData.rssFeedNyTimes);
    let result = engine.run().next().value as Item;

    const pubDateTest = new Date('2021-01-02T14:32:49.000Z');
    expect(pubDateTest).toEqual(result.pubDate as Date);
    expect(20).toEqual(result.category.length);
  });

  it('NY Times RSS item category test', () => {
    const engine = new RssEngine(TestData.rssFeedNyTimes);
    let result = engine.run().next().value as Item;

    expect(20).toEqual(result.category.length);
    expect('US Federal Government Data Breach (2020)').toEqual(result.category[0].category);
  });



});
