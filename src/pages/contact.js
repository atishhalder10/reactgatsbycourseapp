import * as React from "react"
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'




import Layout from "../components/layout"
import SEO from "../components/seo"

import Infoblock from  '../components/reuseable/infoblock'
import Contact from '../components/contact/contact'

const ContactPage = (props) => (
  <Layout>
    <SEO title="Home" />
    
    <BackgroundImage 
    fluid={props.data.indexImage.childImageSharp.fluid}
    className="about-background"
    >
     
    <h1 className="text-white text-center  text-uppercase diaplay-4">Contact US</h1>
    <div>
   
    </div>
    </BackgroundImage>

    
  <Infoblock heading="How can we help?"/>
  <Contact/>
  
  
  
   
  </Layout>
)





export const pageQuery = graphql`
  query{
    indexImage:file(relativePath: { eq: "contact.png" }){
      childImageSharp {
        fluid(maxWidth:1800){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default ContactPage