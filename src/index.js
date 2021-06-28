import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'




import './Navbar/index.js';

import {Heading,GetCards,PopulateCards,InsideUcWrapper} from './InsideUc/index.js'
import './InsideUc/insideUc.css';

import './Culture/index.js'
import './Culture/culture.css';
import { CultureCard, CultureCardContainer, CultureWrapper } from './Culture/index.js';

import './Impact/index.js';
import './Impact/impact.css';
import { ImpactCardContainer, ImpactWrapper } from './Impact/index.js';

import './FoundersAndInvestors/index.js';
import './FoundersAndInvestors/founders.css';
import './FoundersAndInvestors/investor.css';
import { FounderAndInvestorWrapper, FounderCard, InvestorCard, InvestorContainer } from './FoundersAndInvestors/index.js';

import './Perks/index.js'
import { PerkCard, PerkCardContainer, PerkWrapper } from './Perks/index.js';
import './Perks/perks.css';

import './Footer/index.js';
import './Footer/footer.css';
import { FooterWrapper } from './Footer/index.js';

import './OpenPositions/index.js';
import './OpenPositions/jobs.css';
import { JobOpeningCard, JobOpeningCardContainer, OpenPositionWrapper } from './OpenPositions/index.js';
import './OpenPositions/department.css';


import './JobPortal/index';
import './JobPortal/style.css';
import { GetButton, JobPortalPageCard, JobPortalPageCardContainer,GetJobPortalWrapper } from './JobPortal/index';
import { GetHeaderBar, GetNavbar } from './Navbar/index.js';

import './Header/index.js';
import './Header/style.css';
import { HeaderTitle } from './Header/index.js';

// Apply for the jobs
import './ApplyForJob';
import './ApplyForJob/style.css'
import { ApplyForJobWrapper, SubmitYourApplicationForJob } from './ApplyForJob';


//Fake Objects
// check for Inside Uc part
const InsideUcObjects = [
  {
    category: 'Engineering',
    heading: '10X Engineering',
    subHeading: 'Podcast Series by UC engineering',
    imgUrl: 'https://picsum.photos/536/354',
    urlLink: 'https:google.com',
    urlDescription: 'View on Youtube'
  },
  {
    category: 'Engineering',
    heading: 'Engineering at UC',
    subHeading: 'Case studies and blogs ',
    imgUrl: 'https://picsum.photos/536/354',
    urlLink: 'https:google.com',
    urlDescription: 'View on medium'
  },
  {
    category: 'Engineering',
    heading: 'TBD',
    subHeading: 'Description goes here',
    imgUrl: 'https://picsum.photos/536/354',
    urlLink: 'https:google.com',
    urlDescription: 'Join our Discord Channel'
  },

  {
    category: 'Design and Research',
    heading: 'Align',
    subHeading: 'Quaterly magazing at UC',
    imgUrl: 'https://picsum.photos/536/354',
    urlLink: 'https:google.com',
    urlDescription: 'View on medium'
  },
  {
    category: 'Design and Research',
    heading: 'Design at UC',
    subHeading: 'Case Studies and Blogs ',
    imgUrl: 'https://picsum.photos/536/354',
    urlLink: 'https:google.com',
    urlDescription: 'View on medium'

  },
  {
    category: 'Design and Research',
    heading: 'Show & tell',
    subHeading: 'glimpse into what we are upto in design',
    imgUrl: 'https://picsum.photos/536/354',
    urlLink: 'https:google.com',
    urlDescription: 'View on Instagram'
  },

  {
    category: 'Culture',
    heading: 'Block Link goes here',
    subHeading: 'short description goes here',
    imgUrl: 'https://picsum.photos/536/354',
    urlLink: 'https:google.com',
    urlDescription: 'Link goes Here'
  },
  {
    category: 'Culture',
    heading: 'Block Link goes here',
    subHeading: 'short description goes here',
    imgUrl: 'https://picsum.photos/536/354',
    urlLink: 'https:google.com',
    urlDescription: 'Link goes Here'

  },
  {
    category: 'Culture',
    heading: 'Block Link goes here',
    subHeading: 'short description goes here',
    imgUrl: 'https://picsum.photos/536/354',
    urlLink: 'https:google.com',
    urlDescription: 'Link goes Here'
  }
]
// Check for Perks
const Perks = {
  perkDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  perksList: [
    {
      perkDetail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has",
      imgUrl: "https://source.unsplash.com/assets/grid-erondu-1d1407af0d578ecaa04ef86a84f1906172c2140513fced96b99dfc2a169d0e89.png"
    },
    {
      perkDetail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has",
      imgUrl: "https://picsum.photos/536/354"
    },
    {
      perkDetail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has",
      imgUrl: "https://picsum.photos/536/354"
    },
    {
      perkDetail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has",
      imgUrl: "https://picsum.photos/536/354"
    },
    {
      perkDetail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has",
      imgUrl: "https://picsum.photos/536/354"
    },
    {
      perkDetail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has",
      imgUrl: "https://picsum.photos/536/354"
    }
  ]
}
// check Culture
const Culture = {
  cultureDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  cultureList : [
      {
        name: 'Customer Obsession',
        urlLink: ''
      },
      {
        name: 'First Principles',
        urlLink: ''
      },
      {
        name: 'Ownership',
        urlLink: ''
      },
      {
        name: 'Bold',
        urlLink: ''
      },
      {
        name: 'Simplify',
        urlLink: ''
      },
      {
        name: 'Bias for action',
        urlLink: ''
      }

  ]
}
// check for impact
const Impact = [
  {
    name: "hello world",
    imgUrl: ""
  },
  {
    name: "hello world",
    imgUrl: ""
  },
  {
    name: "hello world",
    imgUrl: ""
  },

  {
    name: "hello world",
    imgUrl: ""
  },
  {
    name: "hello world",
    imgUrl: ""
  },
  {
    name: "hello world",
    imgUrl: ""
  },

  {
    name: "hello world",
    imgUrl: ""
  }
]

const founderInvestor = {
  founders: [

  ],
  investors: [
    
  ]
}



function MainPage (props) {
  return (
      <>
        <GetHeaderBar/>
        <InsideUcWrapper name = {InsideUcObjects} />   
        <OpenPositionWrapper/>
        <PerkWrapper name={Perks} />
        <CultureWrapper name={Culture} />
        <ImpactWrapper name={Impact} />
        <FounderAndInvestorWrapper/>
        <FooterWrapper/>
        
      </>
  );
}

function JobPortalPage (props) {
  return (
    <>
    <HeaderTitle/>
      <GetJobPortalWrapper/>
      <FooterWrapper/>
    </>
  )
}

function ApplyForTheJobPage (props) {
  return (
    <>
      <HeaderTitle/>
      <ApplyForJobWrapper/>
      <FooterWrapper/>
    </>
  );
}



ReactDOM.render(
  <>  
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/jobPortal" component={JobPortalPage} />
      <Route path="/applyJob" component={ApplyForTheJobPage} />
    </Router>
  </>
  ,
  document.getElementById('root')
);