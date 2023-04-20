import React from "react";
import './Values.css';

const Values =()=>{
    return (

        <div id="OurValues" className='wrapper pt-5'>

            <h1 className='text-center mt-5 titulos-color'>OUR VALUES</h1>
            <div className='cols'>
                {/* valor 1 */}
                <div className="col" a="this.classList.toggle('hover');">
					<div className="containers">
						<div className="front">
							<div className="inner">
								<p>Passion</p>
                            	<span>by snowboarding</span>
						    </div>
					    </div>
					    <div className="back">
						    <div className="inner">
						  		<p>Our passion for this sport is reflected in everything we do.</p>
							</div>
						</div>
					</div>
				</div>
            	{/* valor 2 */}
            	<div className="col" a="this.classList.toggle('hover');">
					<div className="containers">
						<div className="front2">
							<div className="inner">
								<p>Excellence</p>
              					<span>en la calidad</span>
							</div>
						</div>
						<div className="back">
							<div className="inner">
						  		<p>We work with the best manufacturers and suppliers in the industry, offering high quality products.</p>
							</div>
						</div>
					</div>
				</div>
            	{/* valor 3 */}
            	<div className="col" a="this.classList.toggle('hover');">
					<div className="containers">
						<div className="front3">
							<div className="inner">
								<p>Service</p>
              					<span>outstanding customer</span>
							</div>
						</div>
						<div className="back">
							<div className="inner">
						 		 <p>Expert and personalized advice to help find the products that best suit your needs.</p>
							</div>
						</div>
					</div>
				</div>
              	{/* valor 4 */}
            	<div className="col" a="this.classList.toggle('hover');">
					<div className="containers">
						<div className="front4">
							<div className="inner">
								<p>Responsibility</p>
              					<span>social</span>
							</div>
						</div>
						<div className="back">
							<div className="inner">
						  		<p>We care about the impact our company has on the community and the environment. </p>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
    )
}

export default Values