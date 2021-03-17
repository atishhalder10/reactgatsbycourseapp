import React, { Component } from 'react'
import Heading from '../reuseable/Heading'
import Img from 'gatsby-image'

export default class bundlecart extends Component {
  
    constructor(props){
        super(props)
        this.state={
            bundle:props.bundle.edges,
            mybundle:props.bundle.edges,
          
        }
    }
    cat
  
  
  
  
  
  
    render() {
        return (
            <section className="py-3 pt-1 ">
            <div className="container">
                <Heading title="Bundles"/>
                <div className="row ">
                    {this.state.mybundle.map(({node})=>{
                        return(
                            <div
                                key={node.id}
                                className="col- col-md-6 col-sm-10 d-flex mx-auto px-2 mx-5 my-3">
                                    <Img  fixed={node.image.fixed} />
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex  justify-content-between">
                                            <h6 className="mb-0">{node.title}</h6>
                                            <h6 className="mb-0 text-success">$ {node.price}</h6>
                                        </div>
                                       
                                        <button 
                                             data-item-id={node.id}
                                             data-item-name={node.title}
                                             data-item-price={node.price}
                                             data-item-url="https://atishcoursecart.netlify.app/"
                                             
                                             data-item-image={node.image.fixed.src}
                                             
                                        className="btn btn-warning  col-10  col-md-5 snipcart-add-item">Join Now </button>
                                    </div>
                            </div>

                        )

                    })

                    }
                </div>
            </div>
        </section>
        )
    }
}
