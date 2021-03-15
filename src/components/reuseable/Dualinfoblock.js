import React from 'react'
import Heading from '../reuseable/Heading'
import {Link} from 'gatsby'
export default function Dualinfoblock({heading,bgimage,dualblockmessage}) {
    return (
        <section className="my-4 py-4 bg-theme ">
            <div className="container">
            <Heading title={heading}/>
            <div className="row">
                <div className="col-8 mx-auto">
                    <p className="lead text-white mb-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor asperiores consequatur necessitatibus quo ab modi expedita architecto ipsum aut qui dolore, nihil eaque odio! Ratione est voluptatum tenetur, quam deserunt ea aspernatur. Consequuntur veniam suscipit quis expedita exercitationem iste tenetur. Delectus minima ad sunt obcaecati repudiandae placeat omnis ducimus. Quisquam! 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, doloribus voluptas natus aspernatur omnis quas consequatur? Mollitia rem cumque voluptatibus in blanditiis error odit voluptatum dicta corporis voluptates ut, recusandae fugit repellendus sint quidem illum expedita explicabo ipsa, eum quod odio reiciendis? Accusamus aspernatur natus, perspiciatis tempora architecto earum fugit nisi quas omnis consectetur eius maiores vero sit ut aperiam labore suscipit eligendi veniam doloremque? Doloremque vel modi rerum debitis repellendus iste eaque obcaecati consectetur et sed fugit, ea quam. Fuga at architecto illum porro magni, rem nesciunt perferendis consequuntur et in dolorem quo nemo veritatis quia unde aut accusamus.   
                    </p>

                    
                </div>
                <div className="col-4">
                <div class="card bg-dark">
                     <img className="card-img-top" src={bgimage} alt="Card image goes here"/>
                    <div className="card-body">
                         <h5 clasName="card-title text-success">Just click photo</h5>
                         <p className="card-text text-white">{dualblockmessage} </p>
                       <Link to="/ourteam">
                       
                        <button className="btn btn-warning btn-block   ">{heading}
                        </button>
                        </Link>
                    </div>
                   </div>
                </div>

            </div>
            
            </div>
            
        </section>
    )
}
