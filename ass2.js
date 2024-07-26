import { useState } from "react";

function Ass2(){
    const [review,setReview]=useState(' ');
     const inputValueChange = (event) => {
         console.log("Input changed");
         console.log(event.target.value);
    }
    const addReview = () => {
        console.log("Adding review.....");
    }
    return(
        <div>
    
            <input type="text" placeholder="Enter a review"onChange={inputValueChange}/> 
            <button className="btn btn-light" onClick={addReview}>Add Review</button>
        </div>
    );
}
export default Ass2;