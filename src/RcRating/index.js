import styled from '@emotion/styled'
import React from 'react'
import Rating from 'react-rating';
import { MdStarRate, MdOutlineStarOutline } from "react-icons/md";
import { BsStarFill, BsStar } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

const Container = styled.div`
    display: grid;
    height: 90vh;
    width: 100vw;
    justify-items: center;
    align-items: center;
`;

// Simple example how react rating works
// Read more: https://www.npmjs.com/package/react-rating#callbacks to see options available
// See options available in props: https://www.npmjs.com/package/react-rating#properties

const RCRating=()=> {
    const handleRatingsChange = (ratingValue)=>{
        alert(`selected ratig: ${ratingValue.toString()}`, )
    }
    return (
        <Container>
            <Rating
                emptySymbol={<MdOutlineStarOutline size="30px"/>}
                fullSymbol={<MdStarRate color="orange" size="30px"/>}
                fractions={2}
                // readonly  // make it read only, user cannot adjust value
                initialRating={3.5}
                onChange={handleRatingsChange}
            />
            
            <Rating
                emptySymbol={<BsStar size="30px"/>}
                fullSymbol={<BsStarFill color="orange" size="30px"/>}
                fractions={2}
                initialRating={2}
                onChange={handleRatingsChange}

            />
              <Rating
                emptySymbol={<FaRegStar size="30px"/>}
                fullSymbol={<FaRegStar color="orange" size="30px"/>}
                fractions={2}
                onChange={handleRatingsChange}

            />
            
        </Container>
    )
}

export default RCRating
