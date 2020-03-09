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
CATEGORIES:Work,Test group
X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\:ABPerson
END:VCARD`;


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

}