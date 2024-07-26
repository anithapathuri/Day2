import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="container">
            <div className="header">
                <h1>Product Name</h1>
            </div>
            <div className="product-details">
                <img src="S23.jpeg" alt="Samsung S23" className="product-image" />
                <div className="product-info">
                    <h2>Product Name</h2>
                    <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
                    <div className="price-add-to-cart">
                        <h2>₹500.00</h2>
                        <button className="btn btn-light">Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="product-specifications">
                <h2>Product specifications</h2>
                <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
            </div>
            <div className="reviews">
                <h2>Reviews</h2>
                <input type="text" placeholder="Type to review" className="review-input" />
                <button className="btn btn-dark">Add review</button>
            </div>
            <div className="review-list">
                <h3>Reviews</h3>
                <div className="review-item">
                    <h4>Reviewer name</h4>
                    <p>This product is good.</p>
                </div>
                <div className="review-item">
                    <h4>Reviewer name</h4>
                    <p>This product is not great.</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
