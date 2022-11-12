import { useState } from "react";
import { dataTwo } from "./dataTwo";

function Carousel() {
    const [picture, setPicture] = useState(0);
    console.log (picture);
    const {id, image} = dataTwo[picture];

    const pervious = () => {
        setPicture((picture => {
            picture --;
            if (picture < 0) {
                return dataTwo.length-1;
            }
            return picture;
        }))
    }

    const next = () => {
         setPicture((picture => {
            picture++;
            if (picture > dataTwo.length -1){
                picture = 0
            }
            return picture;
        }
            ))
    }

return (<div key={id}>
    <div>
        <img src={image} width="300px" alt="cakes" />
    </div>
    
    <div>
        <button className="btn" onClick={pervious}> Back</button>
        <button className="btn" onClick={next}>Next</button>
    </div>
    </div>
)
}
export default Carousel;