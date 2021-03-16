import * as React from "react"
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import {Link} from 'gatsby';



import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reuseable/heroSection'
import Infoblock from  '../components/reuseable/infoblock'
import Dualinfoblock from '../components/reuseable/Dualinfoblock'
import Coursecart from '../components/cart/coursecart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <BackgroundImage 
    fluid={data.indexImage.childImageSharp.fluid}
    className="hero-background"
    >
     
    <h1 className="text-white text-center  text-uppercase diaplay-4">I write code</h1>
    <div>
    <h4 className="text-warning">atishcoursecart.netlify.app</h4>
    </div>
    </BackgroundImage>

    
  <Infoblock heading="About Us"/>
  <Coursecart courses={data.courses} />
  
  <Dualinfoblock heading="Our Team" dualblockmessage="   eum quod odio reiciendis? Accusamus aspernatur natus, perspiciatis tempora architecto earum fugit nisi quas omnis consectetur eius maiores vero sit ut aperiam labore suscipit" bgimage="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  
   
  </Layout>
)



export default IndexPage

export const pageQuery = graphql`
  query{
    indexImage:file(relativePath: { eq: "heromain.png" }){
      childImageSharp {
        fluid(maxWidth:1800){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses:allContentfulCoursecart{
      edges{
        node{
            id
            title
            price
            category
            description{
              description
            }
          image{
            fixed(width:200,height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
      
    }
  }
`;