import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles= [
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": null,
      "title": "Tropical Storm Ophelia forms off U.S. East Coast, expected to bring heavy rain and wind - CBS News",
      "description": "Virginia's governor declared a state of emergency and Ophelia forced schools to close early and canceled weekend events.",
      "url": "https://www.cbsnews.com/news/tropical-storm-ophelia-north-carolina-virginia/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/09/22/5be58d0c-43d6-4d5a-b5e6-221647f26d12/thumbnail/1200x630/4693da1a05af915246c6680ffee1431e/ophelia-satellite.jpg?v=f5251b37272e6b1bc4e5456ab4445a67",
      "publishedAt": "2023-09-22T18:43:00Z",
      "content": "Tropical Storm Ophelia formed off the Atlantic coast early Friday afternoon and is threatening to bring heavy rain, storm surges and strong winds to the East Coast this weekend, the National Hurrican… [+4220 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nbcsportsbayarea.com"
      },
      "author": "Matt Maiocco",
      "title": "Purdy, 49ers' offense make Giants pay for blitz-happy approach - NBC Sports Bay Area",
      "description": "Despite a rough start, 49ers QB Brock Purdy stayed strong against the Giants' blitz on Thursday.",
      "url": "https://www.nbcsportsbayarea.com/nfl/san-francisco-49ers/brock-purdy-offense-giants-blitz/1657065/",
      "urlToImage": "https://media.nbcsportsbayarea.com/2023/09/brock-purdy-giants-blitz-GETTY.jpg?quality=85&strip=all&resize=1200%2C675",
      "publishedAt": "2023-09-22T18:35:05Z",
      "content": "SANTA CLARA   What began as a choppy performance ended with 49ers quarterback Brock Purdy chopping up the New York Giants blitz packages on Thursday night.\r\nPurdy completed 25 of 37 passing attempts … [+2292 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Chris Isidore, Vanessa Yurkevich",
      "title": "UAW announces significant expansion of strike at GM, Stellantis but reports progress in talks at Ford - CNN",
      "description": "The United Auto Workers union is expanding its strike against GM and Stellantis but raised hopes that progress is being made in talks by saying it would not have additional workers at Ford join the strike at this time.",
      "url": "https://www.cnn.com/2023/09/22/business/auto-workers-strike-expands/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230922093115-12-uaw-autoworkers-strike-toledo-oh-0918-restricted.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-09-22T18:28:00Z",
      "content": "The United Auto Workers union is expanding its strike against GM and Stellantis but said that progress in negotiations with Ford means it wont expand the number of Ford workers on the picket lines.\r\n… [+7144 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Samantha Murphy Kelly",
      "title": "iPhone 15 hits shelves around the world. Here’s what you need to know - CNN",
      "description": "Apple’s iPhone 15 lineup hit stores Friday as people waited in long lines across China, Europe and the US to be among the first to get their hands on one of the company’s next-generation smartphones.",
      "url": "https://www.cnn.com/2023/09/22/tech/apple-iphone-15-release/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230922104132-01-iphone-15-launch-0922-london.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-09-22T17:44:00Z",
      "content": "Apples iPhone 15 lineup hit stores Friday as people waited in long lines across China, Europe and the US to be among the first to get their hands on one of the companys next-generation smartphones.\r\n… [+3721 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Kenny Jacoby",
      "title": "Mich. State's Mel Tucker made false claims in sexual harassment case - USA TODAY",
      "description": "At the most consequential moment of his career, Tucker repeatedly made false statements to the school's investigator and misled her about basic facts.",
      "url": "https://www.usatoday.com/story/news/investigations/2023/09/22/michigan-state-mel-tucker-false-claims-sexual-harassment/70922038007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/22/USAT/70932196007-usatsi-21326567.jpeg?crop=1999,1126,x0,y102&width=1999&height=1126&format=pjpg&auto=webp",
      "publishedAt": "2023-09-22T17:23:35Z",
      "content": "On a sunny Thursday morning, Michigan State University football coach Mel Tucker strolled through tomato fields at a farm in Immokalee, Florida, toured its processing plants and loaded baskets of bri… [+13390 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Andrew Osborn",
      "title": "Questions about Russia's clout in ex-USSR grow after Karabakh crisis - Reuters",
      "description": "Russian foreign policy hawks savoured chaotic scenes at Kabul airport when U.S. forces quit Afghanistan two years ago. Images of fleeing Armenians at Russia's own peacekeeping base at an airport in <a href=\"/world/asia-pacific/azerbaijan-envisages-amnesty-kar…",
      "url": "https://www.reuters.com/world/questions-about-russias-clout-ex-ussr-grow-after-karabakh-crisis-2023-09-22/",
      "urlToImage": "https://www.reuters.com/resizer/MExkt-CXZfBO5_0dYA4lF1TGsaU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RXTQZ2LJFBO3ZLDBF5ZC7BG5IE.jpg",
      "publishedAt": "2023-09-22T17:06:00Z",
      "content": "Sept 22 (Reuters) - Russian foreign policy hawks savoured chaotic scenes at Kabul airport when U.S. forces quit Afghanistan two years ago. Images of fleeing Armenians at Russia's own peacekeeping bas… [+5738 chars]"
    },
    {
      "source": {
        "id": "nfl-news",
        "name": "NFL News"
      },
      "author": null,
      "title": "NFL Week 3 bold predictions: Scoring explosion in clash of winless teams; Bucs upset Eagles - NFL.com",
      "description": "Which offensive playmakers will go off in a battle of winless teams in Minnesota? Can Baker Mayfield lead the Bucs to an upset over Philly? NFL Network analysts provide bold predictions for Week 3 of the 2023 season.",
      "url": "https://www.nfl.com/news/nfl-week-3-bold-predictions-scoring-explosion-in-clash-of-winless-teams-bucs-ups",
      "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/c0muklzyuzwkceycfn7k",
      "publishedAt": "2023-09-22T16:59:00Z",
      "content": "Throughout the 2023 season, NFL Network analysts will provide one bold prediction heading into each week's slate of games (see the full Week 3 schedule).\r\nThe top five single-game fantasy performance… [+2899 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Karen DeYoung, John Hudson",
      "title": "U.S. close to providing Ukraine with long-range cluster missiles - The Washington Post",
      "description": "The Biden administration intends to send Kyiv a variant of the Army Tactical Missile System, which would enable strikes farther into Russian-held territory.",
      "url": "https://www.washingtonpost.com/national-security/2023/09/22/atacms-ukraine-cluster-munitions/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NSBOE3QTK7MLFSGA52WGR4SDEQ.JPG&w=1440",
      "publishedAt": "2023-09-22T16:40:30Z",
      "content": "Comment on this story\r\nComment\r\nThe Biden administration is close to deciding it will provide Ukraine with a version of ATACMS long-range missiles armed with cluster bomblets rather than a single war… [+7165 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Ben Baby",
      "title": "Source - Bengals add QB Reid Sinnett to practice squad - ESPN",
      "description": "The Bengals have signed QB Reid Sinnett to the practice squad, a source told ESPN's Adam Schefter. The move comes amid uncertainty about Joe Burrow's health.",
      "url": "https://www.espn.com/nfl/story/_/id/38462072/source-bengals-add-qb-reid-sinnett-practice-squad",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0922%2Fr1228151_1296x729_16%2D9.jpg",
      "publishedAt": "2023-09-22T16:20:00Z",
      "content": "CINCINNATI -- The Bengals are adding a familiar face to their quarterback room amid uncertainty surrounding Joe Burrow's health.\r\nReid Sinnett has been signed to the team's practice squad, a source t… [+1086 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WABC-TV"
      },
      "author": null,
      "title": "Farmingdale bus crash: Grief counselors on hand after bus crash kills two, including band director - WABC-TV",
      "description": "Gina Pellettiere was not only a passionate teacher, but she was also a single mother of a 2-year-old.",
      "url": "https://abc7ny.com/orange-county-bus-crash-farmingdale-school-band/13813596/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/13812467_092123-wabc-bus-crash-victim-img.jpg?w=1600",
      "publishedAt": "2023-09-22T16:17:09Z",
      "content": "ORANGE COUNTY, New York (WABC) -- Counselors are on campus Friday as students continue to grieve and process the terrifying crash that claimed the lives of two people after a bus overturned on I-84 T… [+3437 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Olga Voitovych, Jessie Gretener, Tim Lister, Anna Chernova",
      "title": "Ukraine launches missile attack on Russia’s Black Sea Fleet headquarters in Crimea, officials say - CNN",
      "description": "Ukraine launched a missile attack on the headquarters of Russia’s Black Sea Fleet on Friday, the latest and perhaps one of the most ambitious of Kyiv’s recent strikes on Russian military targets in Crimea.",
      "url": "https://www.cnn.com/2023/09/22/europe/ukraine-black-sea-attack-crimea-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230922081456-sevastopol-vpx.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-09-22T16:10:00Z",
      "content": "Ukraine launched a missile attack on the headquarters of Russias Black Sea Fleet on Friday, the latest and perhaps one of the most ambitious of Kyivs recent strikes on Russian military targets in Cri… [+4516 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Amazon to roll out ads on Prime Video in 2024 - Reuters",
      "description": "Amazon <a href=\"https://www.reuters.com/markets/companies/AMZN.O\" target=\"_blank\">(AMZN.O)</a> Prime Video will next year join streaming rivals in rolling out ads and introducing a higher-priced ad-free tier, as the industry grapples with a slowdown in subscr…",
      "url": "https://www.reuters.com/business/media-telecom/amazon-starts-ads-prime-video-2024-2023-09-22/",
      "urlToImage": "https://www.reuters.com/resizer/-AeYlkQU1TE9aR7rnJR6mQNcLXI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HXTUJZZLNBMSVAYFLLMAJJDZI4.jpg",
      "publishedAt": "2023-09-22T16:02:00Z",
      "content": "Sept 22 (Reuters) - Amazon (AMZN.O) Prime Video will next year join streaming rivals in rolling out ads and introducing a higher-priced ad-free tier, as the industry grapples with a slowdown in subsc… [+1993 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Deadline"
      },
      "author": "The Deadline Team",
      "title": "Deadline’s Strike Talk Podcast Week 21: Reasons For Optimism Over Imminent WGA Deal & Renaissance Of Unions - Deadline",
      "description": "Billy Ray, the Oscar-nominated screenwriter, director and producer who has used his downtime during the Hollywood labor strife between shifts on the picket lines to turn Strike Talk into a tour de …",
      "url": "https://deadline.com/2023/09/hollywood-strikes-optimism-unions-billy-ray-strike-talk-podcast-1235553589/comment-page-1/#comments",
      "urlToImage": "https://deadline.com/wp-content/uploads/2023/06/Deadline-Strike-Talk-Podcast-copy.jpg?w=1024",
      "publishedAt": "2023-09-22T16:01:00Z",
      "content": "Billy Ray, the Oscar-nominated screenwriter, director and producer who has used his downtime during the Hollywood labor strife between shifts on the picket lines to turn Strike Talk into a tour de fo… [+1897 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "Another tool to fight RSV may be coming for parents - POLITICO",
      "description": "The CDC’s vaccine advisory committee will meet today to deliberate who should receive Pfizer’s maternal RSV vaccine.",
      "url": "https://www.politico.com/newsletters/prescription-pulse/2023/09/22/another-tool-to-fight-rsv-may-be-coming-for-parents-00117539",
      "urlToImage": "https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg",
      "publishedAt": "2023-09-22T16:00:00Z",
      "content": "With help from Megan R. Wilson\r\nDriving the Day\r\nCDC ADVISERS CONSIDER MATERNAL RSV VACCINES The CDCs vaccine advisory committee will meet today to deliberate who should receive Pfizers maternal RSV … [+11552 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Texas Tribune"
      },
      "author": "Joshua Fechter",
      "title": "Dallas Mayor Eric Johnson switches to Republican Party - The Texas Tribune",
      "description": "Though the mayor’s position in Dallas is technically nonpartisan, Johnson joins Fort Worth Mayor Mattie Parker as one of two Republican mayors to lead a major Texas city.",
      "url": "https://www.texastribune.org/2023/09/22/dallas-mayor-eric-johnson-republican/",
      "urlToImage": "https://thumbnails.texastribune.org/otSk4W-3NV-tpWYjWrxp_IqNiNw=/1200x630/filters:quality(95):focal(0x0:3000x2000)/static.texastribune.org/media/files/f8f21ff957c3cfff8278b5f5ff0fd781/0922%20Eric%20Johnson%20TTF23%20EH%20TT%2006.jpg",
      "publishedAt": "2023-09-22T15:47:34Z",
      "content": "Sign up for The Brief, The Texas Tribunes daily newsletter that keeps readers up to speed on the most essential Texas news.\r\nDallas Mayor Eric Johnson, a longtime Democrat, said he's switched parties… [+1162 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "F-35 crash: Pilot called 911 after parachuting into backyard - BBC",
      "description": "Marine parachuted into a backyard and told emergency services he was OK but not sure where his jet was.",
      "url": "https://www.bbc.com/news/world-us-canada-66890941",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11DF3/production/_131230237_gettyimages-1238430762.jpg",
      "publishedAt": "2023-09-22T15:26:00Z",
      "content": "Media caption, Listen to 911 call pilot made after F-35 crash\r\nThe pilot of a US Marines F-35 jet that went missing called emergency services from a South Carolina home where his parachute landed.\r\nI… [+2348 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Alexander Tin",
      "title": "How FDA's top vaccines official is timing his COVID booster and flu shot for fall 2023 - CBS News",
      "description": "Can you get your COVID booster and flu shot at the same time? Here's what health experts say.",
      "url": "https://www.cbsnews.com/news/covid-vacccine-booster-flu-shot-for-fall-2023-fda/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/09/22/7b08d0d4-4ff2-4351-b0cf-f7bc6ee10b4d/thumbnail/1200x630g8/7ebe0a0b569223dd5ce3347c9f680bc5/gettyimages-1234825173.jpg?v=f5251b37272e6b1bc4e5456ab4445a67",
      "publishedAt": "2023-09-22T15:11:45Z",
      "content": "A top-ranking Food and Drug Administration official, responsible for overseeing the approvals of the new vaccines now rolling out for this fall and winter's three respiratory virus threats, said this… [+5421 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "Youri Benadjaoud",
      "title": "Why the CDC recommends that everyone over the age of 6 months get the updated COVID vaccine - ABC News",
      "description": "Immunity wanes after anywhere from three to six months, experts say.",
      "url": "https://abcnews.go.com/Health/cdc-recommends-age-6-months-updated-covid-vaccine/story?id=103287593",
      "urlToImage": "https://i.abcnewsfe.com/a/cd44c148-595d-4a8b-8948-76327f258dae/covid-booster-child-file-ap-jef-230922_1695392948447_hpMain_16x9.jpg?w=992",
      "publishedAt": "2023-09-22T15:02:34Z",
      "content": "An independent panel of advisers at the Centers for Disease Control and Prevention is recommending that everyone over the age of 6 months get the updated COVID vaccine this fall.\r\n\"Even children and … [+5039 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "mlive.com"
      },
      "author": "Matt Durr | mattdurr@mlive.com",
      "title": "Guests at Pine Knob may have been exposed to hepatitis A, health officials confirm - MLive.com",
      "description": "If you dined at the Ivy Lounge between Aug. 26 – Sept. 8 you are asked to monitor for possible symptoms of the virus.",
      "url": "https://www.mlive.com/news/2023/09/guests-at-pine-knob-may-have-been-exposed-to-hepatitis-a-health-officials-confirm.html",
      "urlToImage": "https://www.mlive.com/resizer/bFQAxojTtnGcJMgr-aSBGrNDqt8=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/LZW73J2YTZHAFG3DAQQNZWEC6Q.jpg",
      "publishedAt": "2023-09-22T14:49:00Z",
      "content": "PONTIAC, MI -- Officials with the Oakland County Health Division have confirmed a case of hepatitis A is associated with the Ivy Lounge at Pine Knob Music Theatre. In a press release issued Thursday,… [+1851 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Barron's"
      },
      "author": "Nicholas Jasinski",
      "title": "10yr Treasury Yield Isn't Done Rising. Buy Bonds Anyway. - Barron's",
      "description": "Historically, the 10-year U.S. Treasury yield has peaked around the Federal Reserve's last hike of the cycle. That's coming soon.",
      "url": "https://www.barrons.com/articles/10yr-treasury-yields-bond-c59a9389",
      "urlToImage": "https://images.barrons.com/im-627395/social",
      "publishedAt": "2023-09-22T14:33:00Z",
      "content": null
    }
  ]
  constructor(){
    super();
    console.log("hello i am a constructor from news component");

    this.state ={   
     articles: this.articles,
     loading: false,
     page:1
       
    }}

     async componentDidMount() {
      console.log("cmd");
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=09c4cb2aa07b4a9d922bc3ccf9914bef&page=1&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parseData=await data.json()
      console.log(parseData);
      this.setState({articles: parseData.articles,
        totalResults:parseData.totalResults
      })
    }

    handlePrevious = async ()=>{
      console.log("previous");

      

      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=09c4cb2aa07b4a9d922bc3ccf9914bef&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parseData=await data.json()
      console.log(parseData);
      this.setState({articles: parseData.articles,
      page:this.state.page-1
    })
  }
  
    handleNext = async ()=>{
      console.log("Next");
      if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=09c4cb2aa07b4a9d922bc3ccf9914bef&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parseData=await data.json()
      console.log(parseData);
      this.setState({articles: parseData.articles,
      page:this.state.page+1
    })
  }
    }



  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsPapers Top-Headlines</h1>
      
        <div className='row'>

        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} 
          urlToImage={element.urlToImage} url={element.url} />
        </div>
        })}
          
        </div>
         <div className='my-3 d-flex justify-content-between'>
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr;Previous</button>
         <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNext}>Next&rarr;</button>
         </div>

      </div>
    )
  }
}

export default News
