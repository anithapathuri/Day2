import React from 'react';

function Product() {
    
    return (
        <div>
            <h1>Product Name</h1>
            <div style={{border:'1px solid',padding:'20px'}}>
                <img align='left'src="S23.jpeg" alt="Samsung S23" style={{width:'110px'}} />
                <div >
                    <p>This is about Samsung S23</p>
                    <h1>500</h1>
                    <button className="btn btn-light" >Add to cart</button>
                </div>
            </div>
            <div style={{border:'1px solid',padding:'10px'}}>
                <h3>Product specification</h3>
                <p>this is about samsung phone</p>
            </div>
            <div style={{border:'1px solid',padding:'10px'}}>
                <h2>Reviews</h2>
                <input type="text" placeholder="Type to review" className="review-input" />
                <button className="btn btn-dark">Add review</button>
            </div>
            <div style={{border:'1px solid',padding:'10px'}}>
                <h3>Reviews</h3>
                <div>
                    <h4>Reviewer name</h4>
                    <p>This product is good.</p>
                </div>
                <div>
                    <h4>Reviewer name</h4>
                    <p>This product is not great.</p>
                </div>
            </div>
        </div>

        
    );
}

export default Product;

