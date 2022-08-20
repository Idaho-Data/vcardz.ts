export class TestData {

  public static johnDoe1 = `
BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN;type=display:John Doe
FN;type=abbreviation:J Doe
ORG:Example.com Inc.;
TITLE:Imaginary test person
EMAIL;type=INTERNET;type=WORK;type=pref:johnDoe@example.org
TEL;type=WORK;type=pref:+1 617 555 1212
TEL;type=WORK:+1 (617) 555-1234
TEL;type=CELL:+1 781 555 1212
TEL;type=HOME:+1 202 555 1212
CATEGORIES:Test group,Work
X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\\\:ABPerson
item1.ADR;type=WORK:;;2 Enterprise Avenue;Worktown;NY;01111;USA
item1.X-ABADR:us
item2.ADR;type=HOME;type=pref:;;3 Acacia Avenue;Hoemtown;MA;02222;USA
item2.X-ABADR:us
NOTE:John Doe has a long and varied history\\, being documented on more police files that anyone else. Reports of his death are alas numerous.
item3.URL;type=pref:http\\://www.example.com/doe
item3.X-ABLabel:_$!<HomePage>!$_
item4.URL:http\\://www.example.com/Joe/foaf.df
item4.X-ABLabel:FOAF
item5.X-ABRELATEDNAMES;type=pref:Jane Doe
item5.X-ABLabel:_$!<Friend>!$_
END:VCARD`;

  public static johnDoe1_string =
`BEGIN:VCARD
VERSION:4.0
FN;TYPE=display:John Doe
FN;TYPE=abbreviation:J Doe
N:Doe;John;;;
ORG:Example.com Inc.;
TITLE:Imaginary test person
EMAIL;TYPE=INTERNET,WORK,pref:johnDoe@example.org
TEL;TYPE=WORK,pref:617-555-1212
TEL;TYPE=WORK:617-555-1234
TEL;TYPE=CELL:781-555-1212
TEL;TYPE=HOME:202-555-1212
CATEGORIES:Test group,Work
X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\\\:ABPerson
NOTE:John Doe has a long and varied history\\, being documented on more police files that anyone else. Reports of his death are alas numerous.
item1.ADR;TYPE=WORK:;;2 Enterprise Avenue;Worktown;NY;01111;USA
item1.X-ABADR:us
item2.ADR;TYPE=HOME,pref:;;3 Acacia Avenue;Hoemtown;MA;02222;USA
item2.X-ABADR:us
item3.URL;TYPE=pref:http\\://www.example.com/doe
item3.X-ABLABEL:_$!<HomePage>!$_
item4.URL:http\\://www.example.com/Joe/foaf.df
item4.X-ABLABEL:FOAF
item5.X-ABLABEL:_$!<Friend>!$_
item5.X-ABRELATEDNAMES;TYPE=pref:Jane Doe
END:VCARD`;

  public static johnDoe1_json = `
{
  "N": {
    "tag": {
      "prop": "N",
      "group": "",
      "attr": {}
    },
    "value": "Doe;John;;;",
    "tokens": [
      "Doe",
      "John",
      "",
      "",
      ""
    ],
    "last": "Doe",
    "first": "John",
    "middle": "",
    "prefix": "",
    "suffix": ""
  },
  "FN": [
    {
      "value": "John Doe",
      "tag": {
        "prop": "FN",
        "group": "",
        "attr": {
          "TYPE": [
            "display"
          ]
        }
      }
    },
    {
      "value": "J Doe",
      "tag": {
        "prop": "FN",
        "group": "",
        "attr": {
          "TYPE": [
            "abbreviation"
          ]
        }
      }
    }
  ],
  "ORG": [
    {
      "tag": {
        "prop": "ORG",
        "group": "",
        "attr": {}
      },
      "value": "Example.com Inc.;",
      "tokens": [
        "Example.com Inc.",
        ""
      ]
    }
  ],
  "TITLE": [
    {
      "value": "Imaginary test person",
      "tag": {
        "prop": "TITLE",
        "group": "",
        "attr": {}
      }
    }
  ],
  "EMAIL": [
    {
      "value": "johnDoe@example.org",
      "tag": {
        "prop": "EMAIL",
        "group": "",
        "attr": {
          "TYPE": [
            "INTERNET",
            "WORK",
            "pref"
          ]
        }
      }
    }
  ],
  "TEL": [
    {
      "value": "617-555-1212",
      "tag": {
        "prop": "TEL",
        "group": "",
        "attr": {
          "TYPE": [
            "WORK",
            "pref"
          ]
        }
      }
    },
    {
      "value": "617-555-1234",
      "tag": {
        "prop": "TEL",
        "group": "",
        "attr": {
          "TYPE": [
            "WORK"
          ]
        }
      }
    },
    {
      "value": "781-555-1212",
      "tag": {
        "prop": "TEL",
        "group": "",
        "attr": {
          "TYPE": [
            "CELL"
          ]
        }
      }
    },
    {
      "value": "202-555-1212",
      "tag": {
        "prop": "TEL",
        "group": "",
        "attr": {
          "TYPE": [
            "HOME"
          ]
        }
      }
    }
  ],
  "ADR": [
    {
      "tag": {
        "prop": "ADR",
        "group": "item1",
        "attr": {
          "TYPE": [
            "WORK"
          ]
        }
      },
      "value": ";;2 Enterprise Avenue;Worktown;NY;01111;USA",
      "tokens": [
        "",
        "",
        "2 Enterprise Avenue",
        "Worktown",
        "NY",
        "01111",
        "USA"
      ],
      "poBox": "",
      "extended": "",
      "street": "2 Enterprise Avenue",
      "city": "Worktown",
      "region": "NY",
      "postalCode": "01111",
      "country": "USA"
    },
    {
      "tag": {
        "prop": "ADR",
        "group": "item2",
        "attr": {
          "TYPE": [
            "HOME",
            "pref"
          ]
        }
      },
      "value": ";;3 Acacia Avenue;Hoemtown;MA;02222;USA",
      "tokens": [
        "",
        "",
        "3 Acacia Avenue",
        "Hoemtown",
        "MA",
        "02222",
        "USA"
      ],
      "poBox": "",
      "extended": "",
      "street": "3 Acacia Avenue",
      "city": "Hoemtown",
      "region": "MA",
      "postalCode": "02222",
      "country": "USA"
    }
  ],
  "X-ABADR": [
    {
      "value": "us",
      "tag": {
        "prop": "X-ABADR",
        "group": "item1",
        "attr": {}
      }
    },
    {
      "value": "us",
      "tag": {
        "prop": "X-ABADR",
        "group": "item2",
        "attr": {}
      }
    }
  ],
  "NOTE": [
    {
      "value": "John Doe has a long and varied history, being documented on more police files that anyone else. Reports of his death are alas numerous.",
      "tag": {
        "prop": "NOTE",
        "group": "",
        "attr": {}
      }
    }
  ],
  "URL": {
    "value": "http://www.example.com/doe",
    "tag": {
      "prop": "URL",
      "group": "item3",
      "attr": {
        "TYPE": [
          "pref"
        ]
      }
    }
  },
  "X-ABLABEL": [
    {
      "value": "_$!<HomePage>!$_",
      "tag": {
        "prop": "X-ABLABEL",
        "group": "item3",
        "attr": {}
      }
    },
    {
      "value": "FOAF",
      "tag": {
        "prop": "X-ABLABEL",
        "group": "item4",
        "attr": {}
      }
    },
    {
      "value": "_$!<Friend>!$_",
      "tag": {
        "prop": "X-ABLABEL",
        "group": "item5",
        "attr": {}
      }
    }
  ],
  "X-ABRELATEDNAMES": [
    {
      "value": "Jane Doe",
      "tag": {
        "prop": "X-ABRELATEDNAMES",
        "group": "item5",
        "attr": {
          "TYPE": [
            "pref"
          ]
        }
      }
    }
  ],
  "CATEGORIES": [
    {
      "tag": {
        "prop": "CATEGORIES",
        "group": "",
        "attr": {}
      },
      "value": "Work,Test group",
      "tokens": [
        "Work",
        "Test group"
      ]
    }
  ],
  "X-ABUID": [
    {
      "value": "5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE:ABPerson",
      "tag": {
        "prop": "X-ABUID",
        "group": "",
        "attr": {}
      }
    }
  ]
}  
  `;


  public static event1 = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ZContent.net//Zap Calendar 1.0//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Abraham Lincoln
UID:c7614cff-3549-4a00-9152-d25cc1fe077d
SEQUENCE:0
STATUS:CONFIRMED
TRANSP:TRANSPARENT
RRULE:FREQ=YEARLY;INTERVAL=1;BYMONTH=2;BYMONTHDAY=12
DTSTART:20080212
DTEND:20080213
DTSTAMP:20150421T141403
CATEGORIES:U.S. Presidents,Civil War People
LOCATION:Hodgenville\\, Kentucky
GEO:37.5739497;-85.7399606
DESCRIPTION:Born February 12\\, 1809\\nSixteenth President (1861-1865)\\n\\n\\n
 \\nhttp://AmericanHistoryCalendar.com
URL:http://americanhistorycalendar.com/peoplecalendar/1,328-abraham-lincol
 n
END:VEVENT
END:VCALENDAR`;


  public static testEvent2 = `
BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Mueller Timeline
X-WR-TIMEZONE:America/New_York
X-WR-CALDESC:Events from the Report on The Investigation Into Russian Inter
 ference In The 2016 Presidential Election
BEGIN:VEVENT
DTSTART:20181207T080000Z
DTEND:20181207T090000Z
DTSTAMP:20200308T222237Z
UID:3c24dgcb8g8sob7h8l5perhh5e@google.com
CREATED:20200305T073614Z
DESCRIPTION:President Trump confirmed he would nominate William P. Barr as 
 the attorney general of the United States to take the spot vacated by Jeff 
 Sessions. Barr\\, who had served as attorney general in the George H. W. Bus
 h administration\\, won Senate confirmation on February 14\\, 2019\\, by a 54-
 45 vote and took over supervision of the special counsel investigation as i
 t approached its conclusion.*\\n\\n* Helderman\\, Rosalind S. and Zapotosky\\, 
 Matt. The Mueller Report: The Washington Post. Scribner\\, 2019\\, p49
LAST-MODIFIED:20200306T043924Z
LOCATION:
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:President Trump nominates William P. Barr as attorney general of th
 e United States
TRANSP:TRANSPARENT
END:VEVENT
END:VCALENDAR`;

  // http://static.userland.com/gems/backend/rssTwoExample2.xml
  public static rssFeed20 =
`<!--  RSS generated by Radio UserLand v8.0.5 on 9/30/2002; 4:00:00 AM Pacific  -->
<rss xmlns:blogChannel="http://backend.userland.com/blogChannelModule" version="2.0">
    <channel>
        <title>Scripting News</title>
        <link>http://www.scripting.com/</link>
        <description>A weblog about scripting and stuff like that.</description>
        <language>en-us</language>
        <blogChannel:blogRoll>http://radio.weblogs.com/0001015/userland/scriptingNewsLeftLinks.opml</blogChannel:blogRoll>
        <blogChannel:mySubscriptions>http://radio.weblogs.com/0001015/gems/mySubscriptions.opml</blogChannel:mySubscriptions>
        <blogChannel:blink>http://diveintomark.org/</blogChannel:blink>
        <copyright>Copyright 1997-2002 Dave Winer</copyright>
        <lastBuildDate>Mon, 30 Sep 2002 11:00:00 GMT</lastBuildDate>
        <docs>http://backend.userland.com/rss</docs>
        <generator>Radio UserLand v8.0.5</generator>
        <category domain="Syndic8">1765</category>
        <managingEditor>dave@userland.com</managingEditor>
        <webMaster>dave@userland.com</webMaster>
        <ttl>40</ttl>
        <item>
            <description>"rssflowersalignright"With any luck we should have one or two more days of namespaces stuff here on Scripting News. It feels like it's winding down. Later in the week I'm going to a <a href="http://harvardbusinessonline.hbsp.harvard.edu/b02/en/conferences/conf_detail.jhtml?id=s775stg&pid=144XCF">conference</a> put on by the Harvard Business School. So that should change the topic a bit. The following week I'm off to Colorado for the <a href="http://www.digitalidworld.com/conference/2002/index.php">Digital ID World</a> conference. We had to go through namespaces, and it turns out that weblogs are a great way to work around mail lists that are clogged with <a href="http://www.userland.com/whatIsStopEnergy">stop energy</a>. I think we solved the problem, have reached a consensus, and will be ready to move forward shortly.</description>
            <pubDate>Mon, 30 Sep 2002 01:56:02 GMT</pubDate>
            <guid>http://scriptingnews.userland.com/backissues/2002/09/29#When:6:56:02PM</guid>
        </item>
        <item>
            <description>Joshua Allen: <a href="http://www.netcrucible.com/blog/2002/09/29.html#a243">Who loves namespaces?</a></description>
            <pubDate>Sun, 29 Sep 2002 19:59:01 GMT</pubDate>
            <guid>http://scriptingnews.userland.com/backissues/2002/09/29#When:12:59:01PM</guid>
        </item>
        <item>
            <description><a href="http://www.docuverse.com/blog/donpark/2002/09/29.html#a68">Don Park</a>: "It is too easy for engineer to anticipate too much and XML Namespace is a frequent host of over-anticipation."</description>
            <pubDate>Mon, 30 Sep 2002 01:52:02 GMT</pubDate>
            <guid>http://scriptingnews.userland.com/backissues/2002/09/29#When:6:52:02PM</guid>
        </item>
        <item>
            <description><a href="http://scriptingnews.userland.com/stories/storyReader$1768">Three Sunday Morning Options</a>. "I just got off the phone with Tim Bray, who graciously returned my call on a Sunday morning while he was making breakfast for his kids." We talked about three options for namespaces in RSS 2.0, and I think I now have the tradeoffs well outlined, and ready for other developers to review. If there is now a consensus, I think we can easily move forward. </description>
            <pubDate>Sun, 29 Sep 2002 17:05:20 GMT</pubDate>
            <guid>http://scriptingnews.userland.com/backissues/2002/09/29#When:10:05:20AM</guid>
        </item>
        <item>
            <description><a href="http://blog.mediacooperative.com/mt-comments.cgi?entry_id=1435">Mark Pilgrim</a> weighs in behind option 1 on a Ben Hammersley thread. On the RSS2-Support list, Phil Ringnalda lists a set of <a href="http://groups.yahoo.com/group/RSS2-Support/message/54">proposals</a>, the first is equivalent to option 1. </description>
            <pubDate>Sun, 29 Sep 2002 19:09:28 GMT</pubDate>
            <guid>http://scriptingnews.userland.com/backissues/2002/09/29#When:12:09:28PM</guid>
        </item>
        <item>
            <description><a href="http://effbot.org/zone/effnews-4.htm">Fredrik Lundh breaks</a> through, following Simon Fell's lead, now his Python aggregator works with Scripting News <a href="http://www.scripting.com/rss.xml">in</a> RSS 2.0. BTW, the spec is imperfect in regards to namespaces. We anticipated a 2.0.1 and 2.0.2 in the Roadmap for exactly this purpose. Thanks for your help, as usual, Fredrik. </description>
            <pubDate>Sun, 29 Sep 2002 15:01:02 GMT</pubDate>
            <guid>http://scriptingnews.userland.com/backissues/2002/09/29#When:8:01:02AM</guid>
        </item>
        <item>
            <title>Law and Order</title>
            <link>http://scriptingnews.userland.com/backissues/2002/09/29#lawAndOrder</link>
            <description> <p><a href="http://www.nbc.com/Law_&_Order/index.html"><img src="http://radio.weblogs.com/0001015/images/2002/09/29/lenny.gif" width="45" height="53" border="0" align="right" hspace="15" vspace="5" alt="A picture named lenny.gif"></a>A great line in a recent Law and Order. Lenny Briscoe, played by Jerry Orbach, is interrogating a suspect. The suspect tells a story and reaches a point where no one believes him, not even the suspect himself. Lenny says: "Now there's five minutes of my life that's lost forever." </p> </description>
            <pubDate>Sun, 29 Sep 2002 23:48:33 GMT</pubDate>
            <guid>http://scriptingnews.userland.com/backissues/2002/09/29#lawAndOrder</guid>
        </item>
        <item>
            <title>Rule 1</title>
            <link>http://scriptingnews.userland.com/backissues/2002/09/29#rule1</link>
            <description> <p>In the discussions over namespaces in RSS 2.0, one thing I hear a lot of, that is just plain wrong, is that when you move up by a major version number, breakage is expected and is okay. In the world I come from it is, emphatically, <i>not okay.</i> We spend huge resources to make sure that files, scripts and apps built in version N work in version N+1 without modification. Even the smallest change in the core engine can break apps. It's just not acceptable. When we make changes we have to be sure there's no breakage. I don't know where these other people come from, or if they make software that anyone uses, but the users I know don't stand for that. As we expose the tradeoffs it becomes clear that <i>that's the issue here.</i> We are not in Year Zero. There are users. Breaking them is not an option. A conclusion to lift the confusion: Version 0.91 and 0.92 files are valid 2.0 files. This is where we started, what seems like years ago.</p> <p>BTW, you can ask anyone who's worked for me in a technical job to explain rules 1 and 1b. (I'll clue you in. Rule 1 is "No Breakage" and Rule 1b is "Don't Break Dave.")</p> </description>
            <pubDate>Sun, 29 Sep 2002 17:24:20 GMT</pubDate>
            <guid>http://scriptingnews.userland.com/backissues/2002/09/29#rule1</guid>
        </item>
        <item>
            <title>Really early morning no-coffee notes</title>
            <link>http://scriptingnews.userland.com/backissues/2002/09/29#reallyEarlyMorningNocoffeeNotes</link>
            <description> <p>One of the lessons I've learned in 47.4 years: When someone accuses you of a <a href="http://www.dictionary.com/search?q=deceit">deceit</a>, there's a very good chance the accuser practices that form of deceit, and a reasonable chance that he or she is doing it as they point the finger. </p> <p><a href="http://www.docuverse.com/blog/donpark/2002/09/28.html#a66">Don Park</a>: "He poured a barrel full of pig urine all over the Korean Congress because he was pissed off about all the dirty politics going on."</p> <p><a href="http://davenet.userland.com/1995/01/04/demoingsoftwareforfunprofi">1/4/95</a>: "By the way, the person with the big problem is probably a competitor."</p> <p>I've had a fair amount of experience in the last few years with what you might call standards work. XML-RPC, SOAP, RSS, OPML. Each has been different from the others. In all this work, the most positive experience was XML-RPC, and not just because of the technical excellence of the people involved. In the end, what matters more to me is <a href="http://www.dictionary.com/search?q=collegiality">collegiality</a>. Working together, person to person, for the sheer pleasure of it, is even more satisfying than a good technical result. Now, getting both is the best, and while XML-RPC is not perfect, it's pretty good. I also believe that if you have collegiality, technical excellence follows as a natural outcome.</p> <p>One more bit of philosophy. At my checkup earlier this week, one of the things my cardiologist asked was if I was experiencing any kind of intellectual dysfunction. In other words, did I lose any of my sharpness as a result of the surgery in June. I told him yes I had and thanked him for asking. In an amazing bit of synchronicity, the next day John Robb <a href="http://jrobb.userland.com/2002/09/25.html#a2598">located</a> an article in New Scientist that said that scientists had found a way to prevent this from happening. I hadn't talked with John about my experience or the question the doctor asked. Yesterday I was telling the story to my friend Dave Jacobs. He said it's not a problem because I always had excess capacity in that area. Exactly right Big Dave and thanks for the vote of confidence.</p> </description>
            <pubDate>Sun, 29 Sep 2002 11:13:10 GMT</pubDate>
            <guid>http://scriptingnews.userland.com/backissues/2002/09/29#reallyEarlyMorningNocoffeeNotes</guid>
        </item>
    </channel>
</rss>`;

  // https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml
  public static rssFeedNyTimes =
`<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:nyt="http://www.nytimes.com/namespaces/rss/2.0" version="2.0">
    <channel>
        <title>NYT > Top Stories</title>
        <link>https://www.nytimes.com</link>
        <atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml" rel="self" type="application/rss+xml"/>
        <description/>
        <language>en-us</language>
        <copyright>Copyright 2021 The New York Times Company</copyright>
        <lastBuildDate>Sat, 02 Jan 2021 16:43:12 +0000</lastBuildDate>
        <pubDate>Sat, 02 Jan 2021 16:43:12 +0000</pubDate>
        <image>
            <title>NYT > Top Stories</title>
            <url>https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png</url>
            <link>https://www.nytimes.com</link>
        </image>
        <item>
            <title>As Understanding of Russian Hacking Grows, So Does Alarm</title>
            <link>https://www.nytimes.com/2021/01/02/us/politics/russian-hacking-government.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/us/politics/russian-hacking-government.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/us/politics/russian-hacking-government.html" rel="standout"/>
            <description>Those behind the widespread intrusion into government and corporate networks exploited seams in U.S. defenses and gave away nothing to American monitoring of their systems.</description>
            <dc:creator>David E. Sanger, Nicole Perlroth and Julian E. Barnes</dc:creator>
            <pubDate>Sat, 02 Jan 2021 14:32:49 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">US Federal Government Data Breach (2020)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Cyberwarfare and Defense</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Cybersecurity and Infrastructure Security Agency</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Defense Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">FireEye Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">CrowdStrike Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Amazon.com Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Microsoft Corp</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Security Agency</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">SolarWinds</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Foreign Intelligence Service (Russia)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Homeland Security Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">State Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Nakasone, Paul M</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Spaulding, Suzanne E</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Warner, Mark R</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Biden, Joseph R Jr</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/29/us/politics/29dc-hack-nsa/29dc-hack-nsa-moth.jpg" width="151"/>
            <media:credit>T.J. Kirkpatrick for The New York Times</media:credit>
            <media:description>Legal prohibitions on the National Security Agency bar it from surveilling networks inside the United States.</media:description>
        </item>
        <item>
            <title>Gunfire and Crashing Cars: In Struggling Neighborhoods, ‘We’re Losing Our Grip’</title>
            <link>https://www.nytimes.com/2021/01/02/us/crime-poverty-pandemic-cleveland.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/us/crime-poverty-pandemic-cleveland.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/us/crime-poverty-pandemic-cleveland.html" rel="standout"/>
            <description>A year of hardship in parts of Cleveland has left many with the sense that the fabric of their communities was fraying.</description>
            <dc:creator>Campbell Robertson</dc:creator>
            <pubDate>Sat, 02 Jan 2021 10:00:16 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Cleveland (Ohio)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Murders, Attempted Murders and Homicides</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus Aid, Relief, and Economic Security Act (2020)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/01/us/02virus-unraveling/00virus-unraveling8-moth.jpg" width="151"/>
            <media:credit>Da'Shaunae Marisa for The New York Times</media:credit>
            <media:description>“Sometimes,” said the Rev. Richard Gibson, whose 101-year-old church is in the Slavic Village neighborhood of Cleveland, “it feels like we’re losing our grip on civilization.”</media:description>
        </item>
        <item>
            <title>Taiwan Vows to Stick to Covid-19 Limits</title>
            <link>https://www.nytimes.com/2021/01/02/world/asia/taiwan-coronavirus-health-minister.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/world/asia/taiwan-coronavirus-health-minister.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/world/asia/taiwan-coronavirus-health-minister.html" rel="standout"/>
            <description>The island’s success against the coronavirus has created a sinking feeling for many residents: How much longer can their good fortune last?</description>
            <dc:creator>Raymond Zhong</dc:creator>
            <pubDate>Sat, 02 Jan 2021 08:00:10 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Vaccination and Immunization</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Taipei (Taiwan)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Taiwan</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Chen Shih-chung</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/28/world/00virus-taiwan02/00virus-taiwan02-moth.jpg" width="151"/>
            <media:credit>An Rong Xu for The New York Times</media:credit>
            <media:description>Commuters in Taipei in December. Life in Taiwan has remained normal for most of the past year, and gross domestic product is still forecast to grow.</media:description>
        </item>
        <item>
            <title>A Continent Where the Dead Are Not Counted</title>
            <link>https://www.nytimes.com/2021/01/02/world/africa/africa-coronavirus-deaths-underreporting.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/world/africa/africa-coronavirus-deaths-underreporting.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/world/africa/africa-coronavirus-deaths-underreporting.html" rel="standout"/>
            <description>All 54 African countries put together have registered fewer Covid deaths than France. That doesn’t mean people aren’t dying from the virus.</description>
            <dc:creator>Ruth Maclean</dc:creator>
            <pubDate>Sat, 02 Jan 2021 14:05:37 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Disease Rates</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Doctors Without Borders</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">King's College</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Africa</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Nigeria</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/31/world/02africa-death-promo/00africa-death-2-promo-moth-v2.jpg" width="151"/>
            <media:credit>Feisal Omar/Reuters</media:credit>
            <media:description>Mourners pray in front of the body of a man suspected to have died of Covid-19, outside Mogadishu, Somalia, in April 2020.</media:description>
        </item>
        <item>
            <title>Desperate to Contain New Variant, Britain Departs From Tested Vaccine Regimens</title>
            <link>https://www.nytimes.com/live/2021/01/02/world/covid-19-coronavirus/</link>
            <guid isPermaLink="true">https://www.nytimes.com/live/2021/01/02/world/covid-19-coronavirus/</guid>
            <atom:link href="https://www.nytimes.com/live/2021/01/02/world/covid-19-coronavirus/" rel="standout"/>
            <description>Britain is delaying second doses to concentrate on giving first injections, and will allow for a mix-and-match regimen. Here’s the latest on the pandemic.</description>
            <dc:creator>The New York Times</dc:creator>
            <pubDate>Sat, 02 Jan 2021 16:31:12 +0000</pubDate>
        </item>
        <item>
            <title>As Some Deficit Hawks Turn Dove, the New Politics of Debt Are on Display</title>
            <link>https://www.nytimes.com/2021/01/02/business/economy/republicans-deficit.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/business/economy/republicans-deficit.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/business/economy/republicans-deficit.html" rel="standout"/>
            <description>Some Republicans who once scolded about fiscal austerity are now embracing government spending, underlining that the public supports more generous relief.</description>
            <dc:creator>Jeanna Smialek and Catie Edmondson</dc:creator>
            <pubDate>Sat, 02 Jan 2021 13:22:19 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Federal Budget (US)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus Aid, Relief, and Economic Security Act (2020)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">National Debt (US)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Democratic Party</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">House of Representatives</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Republican Party</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Senate</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/31/us/00dc-deficit01/00dc-deficit01-moth.jpg" width="151"/>
            <media:credit>Stefani Reynolds for The New York Times</media:credit>
            <media:description>Senator Kelly Loeffler, who is locked in a tight runoff in Georgia, is among the prominent conservatives supporting President Trump’s call to increase stimulus payments.</media:description>
        </item>
        <item>
            <title>‘Year of the Reveal’: Runoffs Follow Pandemic, Protests and a Test of Atlanta’s Promise</title>
            <link>https://www.nytimes.com/2021/01/02/us/georgia-runoff-atlanta-.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/us/georgia-runoff-atlanta-.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/us/georgia-runoff-atlanta-.html" rel="standout"/>
            <description>The high-stakes Senate contests come after months of tumult and activism in a city often seen as both resolutely Southern and somehow distinct from the rest of the region.</description>
            <dc:creator>Rick Rojas</dc:creator>
            <pubDate>Sat, 02 Jan 2021 14:41:57 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Elections, Senate</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Democratic Party</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Biden, Joseph R Jr</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Brooks, Rayshard (d 2020)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Lewis, John R</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">TI (1980- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Atlanta (Ga)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Black Lives Matter Movement</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Presidential Election of 2020</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/01/us/02atlanta/merlin_179805498_342ce51d-b8a9-4b01-9552-d297426570dc-moth.jpg" width="151"/>
            <media:credit>Meridith Kohut for The New York Times</media:credit>
            <media:description>Tuesday’s Senate runoffs come after months of intense political activity and tumult in Atlanta.</media:description>
        </item>
        <item>
            <title>Federal Judge Dismisses Election Lawsuit Against Pence</title>
            <link>https://www.nytimes.com/2021/01/01/us/politics/mike-pence-louie-gohmert-lawsuit.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/us/politics/mike-pence-louie-gohmert-lawsuit.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/us/politics/mike-pence-louie-gohmert-lawsuit.html" rel="standout"/>
            <description>President Trump’s congressional allies had hoped to give the vice president the power to reject electoral votes that were cast for Joseph R. Biden Jr.</description>
            <dc:creator>Catie Edmondson and Maggie Haberman</dc:creator>
            <pubDate>Sat, 02 Jan 2021 03:30:20 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Suits and Litigation (Civil)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Republican Party</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Biden, Joseph R Jr</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Gohmert, Louis B Jr</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kernodle, Jeremy D</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Pence, Mike</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/02/lens/01dc-suit-print/Gohmert-lawsuit-photo-moth.jpg" width="151"/>
            <media:credit>Al Drago for The New York Times</media:credit>
            <media:description>Representative Louie Gohmert of Texas, who spearheaded the lawsuit, said his lawyers would appeal.</media:description>
        </item>
        <item>
            <title>In Abrupt Reversal of Iran Strategy, Pentagon Orders Aircraft Carrier Home</title>
            <link>https://www.nytimes.com/2021/01/01/us/politics/iran-trump.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/us/politics/iran-trump.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/us/politics/iran-trump.html" rel="standout"/>
            <description>After weeks of escalation and threatening language, the Defense Department is sending mixed messages as the anniversary of the death of an Iranian general nears.</description>
            <dc:creator>Eric Schmitt</dc:creator>
            <pubDate>Sat, 02 Jan 2021 01:07:04 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Aircraft Carriers</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United States Navy</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iran</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Nuclear Weapons</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Targeted Killings</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Suleimani, Qassim</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Defense Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Miller, Christopher C (1965- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">McKenzie, Kenneth F</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/01/us/politics/01DC-MILITARY1/01DC-MILITARY1-moth.jpg" width="151"/>
            <media:credit>U.S. Navy, via Getty Images</media:credit>
            <media:description>The aircraft carrier Nimitz and other warships provided air cover for American troops withdrawing from Iraq, Afghanistan and Somalia.</media:description>
        </item>
        <item>
            <title>Alabama and Ohio State Reach the National Title Game With Runaway Wins</title>
            <link>https://www.nytimes.com/2021/01/01/sports/ncaafootball/alabama-ohio-state-cfp.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/sports/ncaafootball/alabama-ohio-state-cfp.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/sports/ncaafootball/alabama-ohio-state-cfp.html" rel="standout"/>
            <description>Notre Dame never really threatened the Crimson Tide in their College Football Playoff semifinal, and then Ohio State rolled over Clemson.</description>
            <dc:creator>Billy Witz</dc:creator>
            <pubDate>Sat, 02 Jan 2021 06:12:12 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Football (College)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Rose Bowl (Football Game)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Playoff Games</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">College Football Playoff National Championship</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">University of Alabama</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">University of Notre Dame</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Clemson University</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Ohio State University</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Sugar Bowl</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Harris, Najee</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Saban, Nick</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/01/sports/01cfp-harris2/merlin_181867371_65df3de1-8603-463a-8046-cd6fa6b6260e-moth.jpg" width="151"/>
            <media:credit>Michael Ainsworth/Associated Press</media:credit>
            <media:description>Alabama’s Najee Harris hurdling Notre Dame’s Nick McCloud on the way to a 53-yard gain.</media:description>
        </item>
        <item>
            <title>10 Powerful ‘Daily’ Episodes From 2020</title>
            <link>https://www.nytimes.com/2020/12/18/podcasts/10-powerful-daily-episodes-from-2020.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/18/podcasts/10-powerful-daily-episodes-from-2020.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/18/podcasts/10-powerful-daily-episodes-from-2020.html" rel="standout"/>
            <description>In a year defined by a pandemic, protests and politics, “The Daily” sought out personal stories. Here’s a holiday playlist of the episodes that Michael Barbaro and our team can’t forget.</description>
            <dc:creator>Michael Barbaro</dc:creator>
            <pubDate>Fri, 18 Dec 2020 10:00:35 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Presidential Election of 2020</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Black People</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Police Reform</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">#MeToo Movement</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Black Lives Matter Movement</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/21/briefing/18daily-protests/09AMBRIEFING-8NewYork-moth.jpg" width="151"/>
            <media:credit>Demetrius Freeman for The New York Times</media:credit>
            <media:description>Protesters marched in New York in June as anger spread across the country.</media:description>
        </item>
        <item>
            <title>How 2020 Changed Our Minds</title>
            <link>https://www.nytimes.com/2021/01/01/opinion/how-2020-changed-our-minds.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/opinion/how-2020-changed-our-minds.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/opinion/how-2020-changed-our-minds.html" rel="standout"/>
            <description>Listeners join the hosts to weigh in on the many ways this hellish year made them think differently.</description>
            <pubDate>Fri, 01 Jan 2021 10:00:07 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">New Year</category>
        </item>
        <item>
            <title>Visit ‘At Home’</title>
            <link>https://www.nytimes.com/spotlight/at-home</link>
            <guid isPermaLink="true">https://www.nytimes.com/spotlight/at-home</guid>
            <atom:link href="https://www.nytimes.com/spotlight/at-home" rel="standout"/>
            <description>Get our best ideas for leading a full and cultured life every day.</description>
            <dc:creator>The New York Times</dc:creator>
            <pubDate>Fri, 01 Jan 2021 23:27:44 +0000</pubDate>
        </item>
        <item>
            <title>This Is Why Nursing Homes Failed So Badly</title>
            <link>https://www.nytimes.com/2020/12/31/opinion/sunday/covid-nursing-homes.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/opinion/sunday/covid-nursing-homes.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/opinion/sunday/covid-nursing-homes.html" rel="standout"/>
            <description>The first coronavirus outbreak in the United States happened in a nursing home in February. Since then, it’s only gotten worse.</description>
            <dc:creator>E. Tammy Kim</dc:creator>
            <pubDate>Sat, 02 Jan 2021 01:34:41 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus Risks and Safety Concerns</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Nursing Homes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Biden, Joseph R Jr</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Elder Care</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Medicare and Medicaid Services</category>
        </item>
        <item>
            <title>Britain Has Lost Itself</title>
            <link>https://www.nytimes.com/2021/01/01/opinion/britain-brexit-europe-germany.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/opinion/britain-brexit-europe-germany.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/opinion/britain-brexit-europe-germany.html" rel="standout"/>
            <description>My grandparents, who fled Nazi Germany for Britain, would be heartbroken to see the country today.</description>
            <dc:creator>Peter Gumbel</dc:creator>
            <pubDate>Fri, 01 Jan 2021 15:21:45 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Great Britain Withdrawal from EU (Brexit)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Europe</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">European Union</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">World War II (1939-45)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Germany</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Holocaust and the Nazi Era</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/01/opinion/01gumbel/01gumbel-moth-v2.jpg" width="151"/>
            <media:credit>Shonagh Rae</media:credit>
        </item>
        <item>
            <title>Do Kids Really Need to Learn to Code?</title>
            <link>https://www.nytimes.com/2021/01/02/opinion/teaching-coding-schools-india.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/opinion/teaching-coding-schools-india.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/opinion/teaching-coding-schools-india.html" rel="standout"/>
            <description>In India, parents are being aggressively sold the idea that their children must start coding at 4 or 5 or be future failures.</description>
            <dc:creator>Neelesh Misra</dc:creator>
            <pubDate>Sat, 02 Jan 2021 13:49:06 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantine (Life and Culture)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">E-Learning</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Children and Childhood</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Education (K-12)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Online Advertising</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Parenting</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">India</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Uttar Pradesh State (India)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/04/opinion/04misra-01/22misra-01-moth.jpg" width="151"/>
            <media:credit>Dhiraj Singh/Bloomberg</media:credit>
            <media:description>An Indian student taking an online coding class at her home in Mumbai, India.</media:description>
        </item>
        <item>
            <title>Things Will Get Better. Seriously.</title>
            <link>https://www.nytimes.com/2020/12/31/opinion/2021-economy-recovery.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/opinion/2021-economy-recovery.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/opinion/2021-economy-recovery.html" rel="standout"/>
            <description>Reasons to be hopeful about the Biden economy.</description>
            <dc:creator>Paul Krugman</dc:creator>
            <pubDate>Fri, 01 Jan 2021 00:00:09 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Biden, Joseph R Jr</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Alternative and Renewable Energy</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Vaccination and Immunization</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/31/opinion/31krugman1/31krugman1-moth-v2.jpg" width="151"/>
            <media:credit>Calla Kessler for The New York Times</media:credit>
        </item>
        <item>
            <title>‘Because of You Guys, I’m Stuck in My Room’</title>
            <link>https://www.nytimes.com/2021/01/01/opinion/nursing-home-senior-living-coronavirus.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/opinion/nursing-home-senior-living-coronavirus.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/opinion/nursing-home-senior-living-coronavirus.html" rel="standout"/>
            <description>Residents and caregivers at senior living facilities write about life during the pandemic — and trying to stay safe while facing the challenges of long-term isolation.</description>
            <dc:creator>Kristin Lin</dc:creator>
            <pubDate>Fri, 01 Jan 2021 16:00:06 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantine (Life and Culture)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Loneliness</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Nursing Homes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
        </item>
        <item>
            <title>What New Science Techniques Tells Us About Ancient Women Warriors</title>
            <link>https://www.nytimes.com/2021/01/01/opinion/women-hunter-leader.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/opinion/women-hunter-leader.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/opinion/women-hunter-leader.html" rel="standout"/>
            <description>Recent studies show that man was not always the hunter.</description>
            <dc:creator>Annalee Newitz</dc:creator>
            <pubDate>Fri, 01 Jan 2021 21:00:39 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Archaeology and Anthropology</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Vikings</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Andes Mountains</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/04/opinion/04newitz/02newitz-moth.jpg" width="151"/>
            <media:credit>Claire Merchlinsky</media:credit>
        </item>
        <item>
            <title>Horrified by the Blackwater Pardons</title>
            <link>https://www.nytimes.com/2021/01/01/opinion/letters/blackwater-pardons.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/opinion/letters/blackwater-pardons.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/opinion/letters/blackwater-pardons.html" rel="standout"/>
            <description>The F.B.I. agent who led the Blackwater investigation and two other letter writers are appalled by the pardon of men who killed innocent civilians.</description>
            <pubDate>Fri, 01 Jan 2021 19:30:05 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mercenaries and Private Military Contractors</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Blackwater Worldwide</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iraq</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/26/world/26iraq-blackwater01-inyt/merlin_181607631_81ba977b-ed0d-425c-8902-a390cf721a65-moth.jpg" width="151"/>
            <media:credit>Ali Yussef/Agence France-Presse &mdash; Getty Images</media:credit>
            <media:description> </media:description>
        </item>
        <item>
            <title>Goodbye, Twitter Trump! And Other Predictions for 2021</title>
            <link>https://www.nytimes.com/2020/12/31/opinion/tech-predictions-2021.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/opinion/tech-predictions-2021.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/opinion/tech-predictions-2021.html" rel="standout"/>
            <description>The coronavirus has forced the kind of work experimentation that would have taken a decade otherwise.</description>
            <dc:creator>Kara Swisher</dc:creator>
            <pubDate>Thu, 31 Dec 2020 23:48:54 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantine (Life and Culture)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/31/opinion/31swisher/31swisher-moth.jpg" width="151"/>
            <media:credit>The New York Times</media:credit>
        </item>
        <item>
            <title>Bosses: Consider Caring a Bit</title>
            <link>https://www.nytimes.com/2020/12/31/opinion/work-boss-employee-relationship.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/opinion/work-boss-employee-relationship.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/opinion/work-boss-employee-relationship.html" rel="standout"/>
            <description>Workplace activism is here to stay. You might as well embrace it.</description>
            <dc:creator>Jessica Powell</dc:creator>
            <pubDate>Thu, 31 Dec 2020 20:00:06 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Workplace Environment</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/04/opinion/04powell/31powell-moth.jpg" width="151"/>
            <media:credit>Bill Rebholz</media:credit>
        </item>
        <item>
            <title>After Five Centuries, a Native American With Real Power</title>
            <link>https://www.nytimes.com/2021/01/01/opinion/native-american-secretary-interior-deb-haaland.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/opinion/native-american-secretary-interior-deb-haaland.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/opinion/native-american-secretary-interior-deb-haaland.html" rel="standout"/>
            <description>The expected nomination of Deb Haaland.</description>
            <dc:creator>Timothy Egan</dc:creator>
            <pubDate>Fri, 01 Jan 2021 16:00:05 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Interior Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Native Americans</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New Mexico</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Biden, Joseph R Jr</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Haaland, Deb</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/01/opinion/01eganWeb/01eganWeb-moth.jpg" width="151"/>
            <media:credit>Celeste Sloman for The New York Times</media:credit>
        </item>
        <item>
            <title>We Came All This Way to Let Vaccines Go Bad in the Freezer?</title>
            <link>https://www.nytimes.com/2020/12/31/opinion/coronavirus-vaccines-expiring.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/opinion/coronavirus-vaccines-expiring.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/opinion/coronavirus-vaccines-expiring.html" rel="standout"/>
            <description>America did not sufficiently plan for how to get millions of people vaccinated.</description>
            <dc:creator>The Editorial Board</dc:creator>
            <pubDate>Thu, 31 Dec 2020 21:00:06 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Vaccination and Immunization</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">States (US)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/31/opinion/31vaccine-web/31vaccine-web-moth-v2.jpg" width="151"/>
            <media:credit>Illustration by Michael Houtz; photographs by Getty Images</media:credit>
        </item>
        <item>
            <title>New Yorkers Who Fled Virus Are Returning Home, Warily</title>
            <link>https://www.nytimes.com/2021/01/01/realestate/who-left-new-york-coronavirus.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/realestate/who-left-new-york-coronavirus.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/realestate/who-left-new-york-coronavirus.html" rel="standout"/>
            <description>Tens of thousands of New Yorkers left the city when the pandemic struck and spent months living elsewhere. What did they learn?</description>
            <dc:creator>Steven Kurutz</dc:creator>
            <pubDate>Fri, 01 Jan 2021 23:46:26 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Real Estate and Housing (Residential)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Renting and Leasing (Real Estate)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantine (Life and Culture)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Families and Family Life</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Brooklyn (NYC)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New Jersey</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Long Island (NY)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Lynchburg (Va)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/03/realestate/03exilesillo/merlin_181634829_eef2dcb3-17fd-4503-928e-e90c2bda1ab2-moth.jpg" width="151"/>
            <media:credit>Jan Feindt</media:credit>
        </item>
        <item>
            <title>Is Dairy Farming Cruel to Cows?</title>
            <link>https://www.nytimes.com/2020/12/29/science/dairy-farming-cows-milk.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/29/science/dairy-farming-cows-milk.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/29/science/dairy-farming-cows-milk.html" rel="standout"/>
            <description>A small group of animal welfare scientists is seeking answers to that question. Facing a growing anti-dairy movement, many farmers are altering their practices.</description>
            <dc:creator>Andrew Jacobs</dc:creator>
            <pubDate>Tue, 29 Dec 2020 17:08:55 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Dairy Products</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Agriculture and Farming</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Animal Abuse, Rights and Welfare</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Cattle</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Hawthorne Valley Farm</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Dick Van Dam Dairy</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/11/30/science/00SCI-COWS1/00SCI-COWS1-moth.jpg" width="151"/>
            <media:credit>Lauren Lancaster for The New York Times</media:credit>
            <media:description>Nate Chittenden, a dairy farmer at Dutch Hollow Farm in Schodack Landing, N.Y., with his cows. “I’m in charge of this entire life from cradle to grave, and it’s important for me to know this animal went through its life without suffering,” he said.</media:description>
        </item>
        <item>
            <title>Seriously? He Gets an Early Vaccine?</title>
            <link>https://www.nytimes.com/2020/12/31/style/early-vaccines-politicians-social-qs.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/style/early-vaccines-politicians-social-qs.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/style/early-vaccines-politicians-social-qs.html" rel="standout"/>
            <description>My sister’s Covid-downplaying politician husband is even more insufferable now that he’s been vaccinated. How do I talk to her about him?</description>
            <dc:creator>Philip Galanes</dc:creator>
            <pubDate>Thu, 31 Dec 2020 14:00:03 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Customs, Etiquette and Manners</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Content Type: Service</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2011/07/28/fashion/social_inline/social_inline-moth-v2.jpg" width="151"/>
            <media:credit>Christoph Niemann</media:credit>
        </item>
        <item>
            <title>Without Trump, or Masks, Mar-a-Lago Partied On</title>
            <link>https://www.nytimes.com/2021/01/01/us/politics/trump-new-years-eve-mar-a-lago.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/us/politics/trump-new-years-eve-mar-a-lago.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/us/politics/trump-new-years-eve-mar-a-lago.html" rel="standout"/>
            <description>President Trump did not attend his private social club’s annual New Year’s Eve bash, which hundreds of guests attended despite the coronavirus.</description>
            <dc:creator>Michael Crowley</dc:creator>
            <pubDate>Fri, 01 Jan 2021 23:42:32 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Parties (Social)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Beach Boys</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Mar-a-Lago (Palm Beach, Fla)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/01/us/politics/01dc-party/01dc-party-moth.jpg" width="151"/>
            <media:credit>Saul Martinez for The New York Times</media:credit>
            <media:description>Mar-a-Lago, President Trump’s private club in Palm Beach, Fla. Mr. Trump returned to Washington before the party began.</media:description>
        </item>
        <item>
            <title>What to Know as Troubled Afghan Peace Talks Enter a New Phase</title>
            <link>https://www.nytimes.com/2021/01/01/world/asia/afghanistan-peace-talks.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/world/asia/afghanistan-peace-talks.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/world/asia/afghanistan-peace-talks.html" rel="standout"/>
            <description>The Afghan government and the Taliban are set to continue negotiations toward a cease-fire in early January, but several fundamental issues stand in the way of progress.</description>
            <dc:creator>David Zucchino and Thomas Gibbons-Neff</dc:creator>
            <pubDate>Fri, 01 Jan 2021 21:39:55 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Civilian Casualties</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Afghanistan War (2001- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Peace Process</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Biden, Joseph R Jr</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Milley, Mark A</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Doha (Qatar)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/28/world/28taliban-peace-talks-1/merlin_176895168_905bdf3d-3d60-408c-a857-cf8c6f867dc5-moth.jpg" width="151"/>
            <media:credit>Ibraheem Al Omari/Reuters</media:credit>
            <media:description>Afghan government and Taliban negotiators meeting in Doha, Qatar, in September. The next round of talks is scheduled for Jan. 5.</media:description>
        </item>
        <item>
            <title>Trump Calls Georgia Senate Races ‘Illegal and Invalid’</title>
            <link>https://www.nytimes.com/2021/01/01/us/politics/trump-georgia-senate.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/us/politics/trump-georgia-senate.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/us/politics/trump-georgia-senate.html" rel="standout"/>
            <description>President Trump continued his assault on election integrity, baselessly claiming the presidential results and the Senate runoffs in Georgia were both invalid — which could complicate G.O.P. efforts to motivate voters.</description>
            <dc:creator>Richard Fausset</dc:creator>
            <pubDate>Sat, 02 Jan 2021 01:27:00 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Elections</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Voter Fraud (Election Fraud)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Republican Party</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Georgia</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/02/lens/01trump-georgia-print/01trump-georgia-photo-moth.jpg" width="151"/>
            <media:credit>Nicole Craine for The New York Times</media:credit>
            <media:description>Democratic nominee for U.S. Senate Jon Ossoff campaigning in Suwanee, Ga., on Thursday. The president has claimed the runoff race Mr. Ossoff is participating in is &ldquo;invalid.&rdquo;</media:description>
        </item>
        <item>
            <title>Armando Manzanero, Mexican composer of hits by Luis Miguel, Elvis Presley, dead at 86</title>
            <link>https://www.nytimes.com/2021/01/01/world/americas/armando-manzanero-dead.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/world/americas/armando-manzanero-dead.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/world/americas/armando-manzanero-dead.html" rel="standout"/>
            <description>He was known as one of the great romantic composers. His songs were performed by Elvis Presley, Andrea Bocelli, Christina Aguilera and many others.</description>
            <dc:creator>Oscar Lopez</dc:creator>
            <pubDate>Fri, 01 Jan 2021 18:29:01 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Manzanero, Armando (1934-2020)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mexico</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Music</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Obituaries)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Grammy Awards</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/30/world/30mexico/30mexico-moth.jpg" width="151"/>
            <media:credit>Luis Gutierrez/Norte Photo, via Getty Images</media:credit>
            <media:description>The singer-songwriter Armando Manzanero performing in 2017 in Alamos, Mexico. He was hospitalized with Covid-19 in the days before his death.</media:description>
        </item>
        <item>
            <title>Tesla Says It Hit Goal of Delivering 500,000 Cars in 2020</title>
            <link>https://www.nytimes.com/2021/01/02/business/tesla-2020-deliveries.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/business/tesla-2020-deliveries.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/business/tesla-2020-deliveries.html" rel="standout"/>
            <description>The milestone seemed unreachable just three years ago and comes as Tesla has seen a string of profitable quarters and a buoyant stock.</description>
            <dc:creator>Neal E. Boudette</dc:creator>
            <pubDate>Sat, 02 Jan 2021 16:08:40 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Electric and Hybrid Vehicles</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Factories and Manufacturing</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Standard & Poor's 500-Stock Index</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Tesla Motors Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Musk, Elon</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/03/business/03tesla/merlin_168394293_203a877a-f90c-4e89-966e-aeb7b9bf5254-moth.jpg" width="151"/>
            <media:credit>an Rong Xu for The New York Times</media:credit>
            <media:description>A Tesla store in Red Hook, Brooklyn.</media:description>
        </item>
        <item>
            <title>The Vegas Chapels Are Open, and Waiting</title>
            <link>https://www.nytimes.com/2021/01/02/business/las-vegas-weddings-coronavirus.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/business/las-vegas-weddings-coronavirus.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/business/las-vegas-weddings-coronavirus.html" rel="standout"/>
            <description>The pandemic did not stop a Las Vegas tradition: the fast, budget-priced nuptial ceremony with you and your very own (socially distant) Elvis impersonator.</description>
            <dc:creator>David Degner and Stacy Cowley</dc:creator>
            <pubDate>Sat, 02 Jan 2021 10:00:15 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Las Vegas (Nev)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Weddings and Engagements</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">A Little White Wedding Chapel</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/03/business/25Vegas-Weddings-01/25Vegas-Weddings-01-moth.jpg" width="151"/>
            <media:description>Kirsten Bulock and Shawnea Pryor of #MarriedInVegas Studios photographing a masked couple in November.</media:description>
        </item>
        <item>
            <title>Rowing the Nile: A Soothing Respite in a Chaotic Metropolis</title>
            <link>https://www.nytimes.com/2021/01/02/world/middleeast/nile-rowing-cairo-egypt.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/world/middleeast/nile-rowing-cairo-egypt.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/world/middleeast/nile-rowing-cairo-egypt.html" rel="standout"/>
            <description>Ancient pharoahs rowed the Nile. Now Egyptians have rediscovered the practice, finding a new perspective on the river that shaped their country.</description>
            <dc:creator>Vivian Yee</dc:creator>
            <pubDate>Sat, 02 Jan 2021 08:11:37 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Nile River</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Rowing</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Cairo (Egypt)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Egypt</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Egyptian Civilization</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/31/world/00nile-dispatch-3sub/00nile-dispatch-3sub-moth.jpg" width="151"/>
            <media:credit>Sima Diab for The New York Times</media:credit>
            <media:description>Members of a rowing class on the Nile at sunrise.</media:description>
        </item>
        <item>
            <title>A Canadian ‘Buy Local’ Effort Fights Amazon on Its Own Turf</title>
            <link>https://www.nytimes.com/2021/01/02/business/not-amazon-canada.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/business/not-amazon-canada.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/business/not-amazon-canada.html" rel="standout"/>
            <description>A website called Not Amazon was created to drive sales to more than 4,000 independent stores in four cities. The initiative aims to keep expanding.</description>
            <dc:creator>Geneva Abdul</dc:creator>
            <pubDate>Sat, 02 Jan 2021 10:00:09 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">E-Commerce</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Shopping and Retail</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Small Business</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Canada</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Toronto (Ontario)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Halifax (Nova Scotia)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Vancouver (British Columbia)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Calgary (Alberta)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/01/us/00notamazon-01/00notamazon-01-moth.jpg" width="151"/>
            <media:credit>Chloe Ellingson for The New York Times</media:credit>
            <media:description>Ali Haberstroh created Not Amazon, a website designed to help small businesses in Toronto that has since expanded to other Canadian cities.</media:description>
        </item>
        <item>
            <title>Washington Has Been Lucrative for Some on Biden’s Team</title>
            <link>https://www.nytimes.com/2021/01/01/us/politics/yellen-speaking-fees-disclosure.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/us/politics/yellen-speaking-fees-disclosure.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/us/politics/yellen-speaking-fees-disclosure.html" rel="standout"/>
            <description>Janet Yellen, the president-elect’s pick for Treasury secretary, collected more than $7 million in speaking fees over the past two years. Antony J. Blinken and Avril Haines did well, too.</description>
            <dc:creator>Kenneth P. Vogel and Eric Lipton</dc:creator>
            <pubDate>Sat, 02 Jan 2021 03:17:30 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Appointments and Executive Changes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Presidential Transition (US)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Conflicts of Interest</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Treasury Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Biden, Joseph R Jr</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Blinken, Antony J</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Yellen, Janet L</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/01/us/politics/01dc-disclosure2/01dc-disclosure2-moth.jpg" width="151"/>
            <media:credit>Anna Moneymaker for The New York Times</media:credit>
            <media:description>Antony J. Blinken, President-elect Joseph R. Biden Jr.’s nominee for secretary of state, formed WestExec Advisors with three other former Obama administration officials.</media:description>
        </item>
        <item>
            <title>Winter TV Preview: 21 Shows to Watch</title>
            <link>https://www.nytimes.com/2020/12/31/arts/television/winter-tv-preview-2021.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/arts/television/winter-tv-preview-2021.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/arts/television/winter-tv-preview-2021.html" rel="standout"/>
            <description>Newcomers and old favorites include a Marvel series, the long-awaited return of “Gomorrah” and Judi Dench among the orangutans.</description>
            <dc:creator>Mike Hale</dc:creator>
            <pubDate>Fri, 01 Jan 2021 14:35:52 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Television</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Netflix Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Pop (TV Network)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">ViacomCBS Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Starz</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">CBS Corporation</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Discovery Channel</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Disney Plus</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">HBO Max</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Amazon.com Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">All Creatures Great and Small (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Call My Agent! (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Dickinson (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Flack (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Gomorrah (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Servant (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">WandaVision (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">In the Long Run (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">30 Coins (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Coyote (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Judi Dench's Wild Borneo Adventure (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Spiral (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Lupin (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Pretend It's a City (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Crack: Cocaine, Corruption & Conspiracy (TV Program)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Losing Alice (TV Program)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/01/arts/31winter-tv-preview2/merlin_181779237_1a970b6a-b95f-440e-9a4e-713acc49cf24-moth.jpg" width="151"/>
            <media:credit>Discovery+</media:credit>
            <media:description>&ldquo;Judi Dench&rsquo;s Wild Borneo Adventure," a two-part documentary, features Dench as an orangutan groupie.</media:description>
        </item>
        <item>
            <title>Pandemic Driving Is Still Down, but Will Insurers Grant More Relief?</title>
            <link>https://www.nytimes.com/2021/01/01/your-money/covid-driving-car-insurance.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/your-money/covid-driving-car-insurance.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/your-money/covid-driving-car-insurance.html" rel="standout"/>
            <description>Many gave drivers a break in the spring. With accident claims remaining below normal, consumer advocates are calling for another one.</description>
            <dc:creator>Ann Carrns</dc:creator>
            <pubDate>Fri, 01 Jan 2021 14:00:07 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Automobile Insurance and Liability</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Content Type: Service</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Traffic Accidents and Safety</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Rebates and Refunds</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Consumer Federation of America</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Consumer Watchdog</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Progressive Casualty Insurance Co</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Geico (Government Employees Insurance Co)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">State Farm Insurance Cos</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/02/business/01Adviser-print/01Adviser-illo-moth.jpg" width="151"/>
            <media:credit>Brian Britigan</media:credit>
        </item>
        <item>
            <title>New in Paperback: ‘The Red Lotus’ and ‘This Is Big’</title>
            <link>https://www.nytimes.com/2020/12/31/books/review/new-paperbacks.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/books/review/new-paperbacks.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/books/review/new-paperbacks.html" rel="standout"/>
            <description>Six new paperbacks to check out this week.</description>
            <dc:creator>Jennifer Krauss</dc:creator>
            <pubDate>Thu, 31 Dec 2020 18:03:01 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Books and Literature</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">The Truants (Book)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Weinberg, Kate</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">The Cheffe: A Cook's Novel (Book)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">NDiaye, Marie</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Stump, Jordan</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">The Red Lotus (Book)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Bohjalian, Chris</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">How to Treat People: A Nurse's Notes (Book)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Case, Molly</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Small Days and Nights (Book)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Doshi, Tishani</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">This Is Big: How the Founder of Weight Watchers Changed the World -- and Me (Book)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Meltzer, Marisa</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Nidetch, Jean (1923-2015)</category>
        </item>
        <item>
            <title>A ‘Frankenstein’ That Never Lived</title>
            <link>https://www.nytimes.com/2020/12/30/theater/frankenstein-broadway-flop.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/30/theater/frankenstein-broadway-flop.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/30/theater/frankenstein-broadway-flop.html" rel="standout"/>
            <description>On Jan. 4, 1981, the effects-heavy production opened and closed on the same night. Forty years later, the creators revisit a very expensive Broadway flop.</description>
            <dc:creator>Jennifer Schuessler</dc:creator>
            <pubDate>Thu, 31 Dec 2020 14:49:28 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Theater</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Frankenstein (Play)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Nederlander Organization</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Palace Theater</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Carradine, John</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Lane, Stewart F (1951- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Nederlander, James M (1922-2016)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Moore, Tom (1943- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Dukes, David</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kipness, Joe</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Gialanella, Victor</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/03/arts/03frankenstein-1/03frankenstein-1-moth.jpg" width="151"/>
            <media:credit>Martha Swope, via The New York Public Library for the Performing Arts</media:credit>
            <media:description>Keith Jochim as the Creature in the Broadway production of "Frankenstein."</media:description>
        </item>
        <item>
            <title>Vanessa Kirby Has Been Waiting for a Role That Scares Her</title>
            <link>https://www.nytimes.com/2020/12/31/movies/vanessa-kirby-pieces-of-a-woman.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/movies/vanessa-kirby-pieces-of-a-woman.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/movies/vanessa-kirby-pieces-of-a-woman.html" rel="standout"/>
            <description>For her first lead in a film, the actress wanted a character as challenging as many of those she’s played onstage. She found it in Kornel Mundruczo’s “Pieces of a Woman.”</description>
            <dc:creator>Eleanor Stanford</dc:creator>
            <pubDate>Thu, 31 Dec 2020 13:33:07 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Pregnancy and Childbirth</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Netflix Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Mundruczo, Kornel</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Pieces of a Woman (Movie)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kirby, Vanessa (1988- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Actors and Actresses</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Movies</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Content Type: Personal Profile</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Miscarriages</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/03/arts/03kirby1/03kirby1-moth.jpg" width="151"/>
            <media:credit>Lauren Fleishman for The New York Times</media:credit>
            <media:description>“Pieces of a Woman,” which debuts Jan. 7 on Netflix, is the first lead film role for the actress Vanessa Kirby.</media:description>
        </item>
        <item>
            <title>Look but Don’t Touch: Supercars That Have Barely Been Driven</title>
            <link>https://www.nytimes.com/2020/12/31/business/low-mileage-supercars-lamborghini.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/business/low-mileage-supercars-lamborghini.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/business/low-mileage-supercars-lamborghini.html" rel="standout"/>
            <description>The power and prestige of cars like a 1990 Lamborghini might compel some owners to take a Sunday drive. But with odometers this low, the investment would take a hit.</description>
            <dc:creator>Jim Motavalli</dc:creator>
            <pubDate>Thu, 31 Dec 2020 10:00:19 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Automobiles</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Antique and Classic Cars</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Collectors and Collections</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Automobili Lamborghini SpA</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Auctions</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Luxury Goods and Services</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/31/business/31wheels1/31wheels1-moth.jpg" width="151"/>
            <media:credit>Curated</media:credit>
            <media:description>A 1993 Cizeta V16T with less than 600 miles is headed to auction.</media:description>
        </item>
        <item>
            <title>An Olympic Dream Is Reborn, Despite Fears of Brain Trauma</title>
            <link>https://www.nytimes.com/2020/12/31/sports/bobsled-concussions-brain-damage.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/31/sports/bobsled-concussions-brain-damage.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/31/sports/bobsled-concussions-brain-damage.html" rel="standout"/>
            <description>A.J. Edelman walked away from the hazards of sledding sports after he competed for Israel in the skeleton at the 2018 Winter Games. Now he is trying again in a bobsled.</description>
            <dc:creator>Matthew Futterman</dc:creator>
            <pubDate>Thu, 31 Dec 2020 14:12:29 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Olympic Games (2022)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Beijing (China)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Israel</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Traumatic Brain Injury</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/30/sports/30israel-sled1/30israel-sled1-moth.jpg" width="151"/>
            <media:credit>Jun Michael Park for The New York Times</media:credit>
            <media:description>A.J. Edelman working on his bobsled driving skills this month at the Olympic Sliding Center in Pyeongchang, South Korea. Edelman, the sled’s driver, was waiting for his three Israeli teammates to join him in Pyeongchang.</media:description>
        </item>
        <item>
            <title>Love Music to Surprise You? Jon Caramanica Recommends TikTok Dives</title>
            <link>https://www.nytimes.com/2021/01/01/arts/music/best-albums-tiktok.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/arts/music/best-albums-tiktok.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/arts/music/best-albums-tiktok.html" rel="standout"/>
            <description>The Times’s Culture editor has questions. Our critic has answers.</description>
            <dc:creator>Gilbert Cruz</dc:creator>
            <pubDate>Fri, 01 Jan 2021 15:00:06 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantine (Life and Culture)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Music</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Pop and Rock Music</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Rap and Hip-Hop</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">TikTok (ByteDance)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/03/arts/03Questions-from-the-Boss1/merlin_181604550_2deadcc9-e522-45e5-9129-51341ea957b5-moth.jpg" width="151"/>
            <media:credit>Gary Miller/Getty Images</media:credit>
            <media:description>The songs on Fiona Apple’s 2020 album “Fetch the Bolt Cutters” succeed by connecting to the artist’s resentments as well as her creative impulses.</media:description>
        </item>
        <item>
            <title>From a 1550s Pandemic, a Choral Work Still Casts Its Spell</title>
            <link>https://www.nytimes.com/2020/12/30/arts/music/John-Sheppard-media-vita.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/30/arts/music/John-Sheppard-media-vita.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/30/arts/music/John-Sheppard-media-vita.html" rel="standout"/>
            <description>We know remarkably little about John Sheppard and his “Media vita.” But it has become a cult favorite of early music.</description>
            <dc:creator>David Allen</dc:creator>
            <pubDate>Fri, 01 Jan 2021 03:41:36 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Classical Music</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Choir of New College, Oxford</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Stile Antico</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Tallis Scholars</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Sheppard, John (1515-58)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Media vita (Musical Work)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantine (Life and Culture)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Influenza</category>
        </item>
        <item>
            <title>For a Healthier 2021, Keep the Best Habits of a Very Bad Year</title>
            <link>https://www.nytimes.com/2021/01/01/well/live/new-year-habits-gratitude.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/01/well/live/new-year-habits-gratitude.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/01/well/live/new-year-habits-gratitude.html" rel="standout"/>
            <description>Our 7-Day Well Challenge will show you how to build on the healthy habits you learned during pandemic life.</description>
            <dc:creator>Tara Parker-Pope</dc:creator>
            <pubDate>Fri, 01 Jan 2021 10:00:13 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Content Type: Service</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">New Year</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Letters</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Habits and Routines (Behavior)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Psychology and Psychologists</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Friendship</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Anxiety and Stress</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Exercise</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mental Health and Disorders</category>
        </item>
        <item>
            <title>Will My Popcorn Explode?</title>
            <link>https://www.nytimes.com/2020/12/29/science/randall-munroe-question-popcorn.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/29/science/randall-munroe-question-popcorn.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/29/science/randall-munroe-question-popcorn.html" rel="standout"/>
            <description>The odds that all of your popcorn kernels will pop simultaneously aren’t zero. Maybe think instead of the multiple lotteries you’re more likely to win.</description>
            <dc:creator>Randall Munroe</dc:creator>
            <pubDate>Wed, 30 Dec 2020 15:00:06 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Popcorn</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Noise</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Statistics</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/29/science/00SCI-MUNROE-popcorn1/00SCI-MUNROE-popcorn1-moth.jpg" width="151"/>
        </item>
        <item>
            <title>A New Population of Blue Whales Was Discovered Hiding in the Indian Ocean</title>
            <link>https://www.nytimes.com/2020/12/23/science/blue-whales-indian-ocean.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/23/science/blue-whales-indian-ocean.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/23/science/blue-whales-indian-ocean.html" rel="standout"/>
            <description>The whales in the group seem to sing a unique song.</description>
            <dc:creator>Katherine J. Wu</dc:creator>
            <pubDate>Wed, 23 Dec 2020 17:06:20 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Whales and Whaling</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Animal Behavior</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Indian Ocean</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Endangered Species Research (Journal)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-animals</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/23/science/23TB-BLUEWHALES1/23TB-BLUEWHALES1-moth.jpg" width="151"/>
            <media:credit>Robert Baldwin/Environment Society of Oman</media:credit>
            <media:description>Researchers said that the blue whale song that crackled through the team’s underwater recordings was unlike any they had heard.</media:description>
        </item>
        <item>
            <title>‘The Pandemic Is a Prisoner’s Dilemma Game’</title>
            <link>https://www.nytimes.com/2020/12/20/health/virus-vaccine-game-theory.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/20/health/virus-vaccine-game-theory.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/20/health/virus-vaccine-game-theory.html" rel="standout"/>
            <description>Using game theory, researchers modeled two ways of prioritizing vaccinations, to see which saved more lives.</description>
            <dc:creator>Siobhan Roberts</dc:creator>
            <pubDate>Sun, 20 Dec 2020 14:55:16 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus Risks and Safety Concerns</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Disease Rates</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Vaccination and Immunization</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Altruism</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Medicine and Health</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mathematics</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Bauch, Chris</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Anand, Madhur</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/20/science/20VIRUS-SCI-GAME1/merlin_181380453_486cd750-8c54-4e2f-83db-67120ae93605-moth.jpg" width="151"/>
            <media:credit>Ian Willms for The New York Times</media:credit>
            <media:description>Madhur Anand, an ecologist, right, and Chris Bauch, a mathematical biologist, focus their research on the interplay between human behavior and environment systems.</media:description>
        </item>
        <item>
            <title>The Year of Buyer’s Remorse</title>
            <link>https://www.nytimes.com/2021/01/02/style/the-year-of-buyers-remorse.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/style/the-year-of-buyers-remorse.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/style/the-year-of-buyers-remorse.html" rel="standout"/>
            <description>In 2020 we stocked up on a lot. Maybe some things we didn’t need.</description>
            <dc:creator>Alyson Krueger</dc:creator>
            <pubDate>Sat, 02 Jan 2021 10:00:04 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Shopping and Retail</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantine (Life and Culture)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Consumer Behavior</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/02/fashion/02BUYERSREMORSE-toilet-paper/02BUYERSREMORSE-toilet-paper-moth.jpg" width="151"/>
            <media:credit>Kenyon Anderson for The New York Times</media:credit>
            <media:description>Roll call: Ameriicans perhaps overstocked on toilet paper.</media:description>
        </item>
        <item>
            <title>My Packages Keep Getting Stolen. What Can I Do?</title>
            <link>https://www.nytimes.com/2021/01/02/realestate/stolen-packages.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2021/01/02/realestate/stolen-packages.html</guid>
            <atom:link href="https://www.nytimes.com/2021/01/02/realestate/stolen-packages.html" rel="standout"/>
            <description>A 2019 analysis found that 90,000 packages are lost or stolen every day in New York. And it’s only getting worse during the pandemic.</description>
            <dc:creator>Ronda Kaysen</dc:creator>
            <pubDate>Sat, 02 Jan 2021 15:00:07 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Real Estate and Housing (Residential)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Robberies and Thefts</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Postal Service (US)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United Parcel Service Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Delivery Services</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2021/01/03/realestate/02ASK/02ASK-moth.jpg" width="151"/>
            <media:credit>Nadia Pillon</media:credit>
        </item>
        <item>
            <title>A Cheerleader’s Vulgar Message Prompts a First Amendment Showdown</title>
            <link>https://www.nytimes.com/2020/12/28/us/supreme-court-schools-free-speech.html</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/12/28/us/supreme-court-schools-free-speech.html</guid>
            <atom:link href="https://www.nytimes.com/2020/12/28/us/supreme-court-schools-free-speech.html" rel="standout"/>
            <description>A Pennsylvania school district has asked the Supreme Court to rule on whether students may be disciplined for what they say on social media.</description>
            <dc:creator>Adam Liptak</dc:creator>
            <pubDate>Mon, 28 Dec 2020 14:24:07 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Supreme Court (US)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">School Discipline (Students)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Education (K-12)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Freedom of Speech and Expression</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">First Amendment (US Constitution)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/12/28/us/politics/28DC-Bar1/28DC-Bar1-moth.jpg" width="151"/>
            <media:credit>Anna Moneymaker/The New York Times</media:credit>
            <media:description>The Supreme Court next month will consider whether to hear the case of Mahanoy Area School District v. B.L., involving a student’s freedom of speech while off school grounds.</media:description>
        </item>
        <item>
            <title>Spelling Bee</title>
            <link>https://www.nytimes.com/puzzles/spelling-bee</link>
            <guid isPermaLink="true">https://www.nytimes.com/puzzles/spelling-bee</guid>
            <atom:link href="https://www.nytimes.com/puzzles/spelling-bee" rel="standout"/>
            <description>Use 7 letters to make as many words as you can.</description>
            <dc:creator>The New York Times</dc:creator>
            <pubDate>Mon, 07 Dec 2020 23:19:30 +0000</pubDate>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/crosswords/spelling-bee-logo-nytgames-hi-res/spelling-bee-logo-nytgames-hi-res-moth-v2.png" width="151"/>
            <media:credit>The New York Times</media:credit>
        </item>
        <item>
            <title>The Crossword, Tiles and More</title>
            <link>https://www.nytimes.com/crosswords</link>
            <guid isPermaLink="true">https://www.nytimes.com/crosswords</guid>
            <atom:link href="https://www.nytimes.com/crosswords" rel="standout"/>
            <description>Solve the daily puzzle edited by Will Shortz, or try out other games like the Mini and Vertex.</description>
            <dc:creator>The New York Times</dc:creator>
            <pubDate>Mon, 07 Dec 2020 23:19:30 +0000</pubDate>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/crosswords/crossword-logo-nytgames-hires/crossword-logo-nytgames-hires-moth-v2.png" width="151"/>
            <media:credit>The New York Times</media:credit>
        </item>
        <item>
            <title>Vertex</title>
            <link>https://www.nytimes.com/puzzles/vertex</link>
            <guid isPermaLink="true">https://www.nytimes.com/puzzles/vertex</guid>
            <atom:link href="https://www.nytimes.com/puzzles/vertex" rel="standout"/>
            <description>Connect the dots to reveal the hidden picture.</description>
            <dc:creator>The New York Times</dc:creator>
            <pubDate>Mon, 07 Dec 2020 23:19:30 +0000</pubDate>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/crosswords/vertex-nytgames-hi-res/vertex-nytgames-hi-res-moth-v3.png" width="151"/>
            <media:credit>The New York Times</media:credit>
        </item>
    </channel>
</rss>`;

}
