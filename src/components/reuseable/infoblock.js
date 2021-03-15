import React from 'react'
import Heading from "./Heading";
import {Link} from 'gatsby';
export default function infoblock({heading}) {
    return (
        <section className="bg-theme my-3 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text white mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quas error voluptatem eaque consectetur mollitia eius facere eligendi cum, reprehenderit quod voluptates temporibus nesciunt odio quo fugit dolor recusandae provident sint, quisquam corrupti. Architecto, saepe. Mollitia ipsum, nulla perferendis qui saepe et a tempore accusamus, officiis quaerat dicta facilis neque laudantium ad iusto, magnam cum cupiditate sed explicabo. Ab, vero!
                        </p>
                        <Link to="/about"  >
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
