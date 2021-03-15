import * as React from "react"
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import {Link} from 'gatsby';



import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reuseable/heroSection'
import Infoblock from  '../components/reuseable/infoblock'
import Dualinfoblock from '../components/reuseable/Dualinfoblock'
import Teamphotosection from '../components/about/teamphotosection'

const aboutPage = (props) => (
  <Layout>
    <SEO title="Home" />
    
    <BackgroundImage 
    fluid={props.data.indexImage.childImageSharp.fluid}
    className="about-background"
    >
     
    <h1 className="text-white text-center  text-uppercase diaplay-4">About LearncodeOnline</h1>
    <div>
   
    </div>
    </BackgroundImage>

    <Dualinfoblock heading="A message from CEO" dualblockmessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt voluptates voluptas vel a, quia animi distinctio dolor accusantium et!" bgimage="https://images.pexels.com/photos/583846/pexels-photo-583846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> 
  <Infoblock heading="About Vision"/>
  <Teamphotosection  heading=" Our Team"/>
  
  
   
  </Layout>
)





export const pageQuery = graphql`
  query{
    indexImage:file(relativePath: { eq: "aboutbg2.jpg" }){
      childImageSharp {
        fluid(maxWidth:1800){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default aboutPage