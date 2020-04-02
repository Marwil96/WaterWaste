import React from "react"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => (
  <div className='Homepage'>
    <SEO title="Waterwaster" />
    <div className='HeroSection'>
      <h3 className='HeroSection__title'>Water Waster</h3>
    </div>
    <div className='TextSection TextSection__blue TextSection__center'>
      <span> How much water are you wasting each day? What about your friends and loved ones? We all agree that we have to combat the waste of precious water but what are you and I really doing? Forgetting to turn off the water while brushing our teeth, showering for 40 minutes and watering our lawns? <br /><br />  UNDP:s Sustainable Global Goal number 6, "Ensure access to water and sanitation for all" aims to make the world a better place by 2030.   <br/><br/>My project takes on what ordinary people can do, small things that can make a change, influence each other to influence the world. </span>
    </div>

    <div className='TextSection'>
      <div className='Image-Text-Row'>
        <img src='/InfiniteShort.gif' />
        <span>It's hard to grip, as water feels like an infinite resource to us that have it readily available, but we all know that this line of thinking is non-viable for a sustainable future. </span>
      </div>
      <span>That's why Waterwaster exists. You can now use the app to see how much water you use each month with information directly from your water-bills. <br/> Compare with your friends and family and the world average. See how much water you use compared to those in vulnerable areas of the world. And set your own goals, but be careful not to overfill the cup!</span>
      <img className='TextSection__pipe' src='/Pipe.gif' />
    </div>
    <div className='TextSection TextSection__blue TextSection__mockup'>
      <div className='Image-Text-Row'>
        <span>The gamification elements encourages you to lessen your usage and think twice before watering your lawn in a approachable manner.<br /><br /> To make a difference we have to show it like it is. And educate those who are not in the stream.</span>
        <img src='/mockup.png'/>
      </div>
    </div>
    <span style={{marginTop:200, marginBottom:64}}>Hyper Island Application 2020  @Ludvig Martinsson</span>
  </div>
)

export default IndexPage
