import styled from "@emotion/styled";
import React from "react";
import Rating from "react-rating";
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
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-items: space-between;
  align-items: center;
  span {
      font-weight: 600;
  }
`;
const Text = styled.p`
  font-size: 14px;
`;

// Simple example how react rating works
// Read more: https://www.npmjs.com/package/react-rating#callbacks to see options available
// See options available in props: https://www.npmjs.com/package/react-rating#properties

const RCRating = () => {
  const [currentRating, setCurrentRating] = React.useState(0);
  const handleRatingsChange = (ratingValue) => {
    setCurrentRating(ratingValue);
  };
  return (
    <Container>
      <Wrapper>
        <Text>
          Using Bootstrap Icons from{" "}
          <a
            href="https://react-icons.github.io/react-icons/icons?name=bs"
            target="_blank"
          >
            React Icons
          </a>
        </Text>
        <Rating
          emptySymbol={<BsStar size="30px" />}
          fullSymbol={<BsStarFill color="orange" size="30px" />}
          fractions={2}
          initialRating={2}
        />
      </Wrapper>
      <Wrapper>
        <Text>With Callback </Text>
        <Rating
          emptySymbol={<FaRegStar size="30px" />}
          fullSymbol={<FaRegStar color="orange" size="30px" />}
          fractions={2}
          initialRating={currentRating}
          onChange={handleRatingsChange}
        />
        <Text>Rating is: <span>{currentRating}</span></Text>
      </Wrapper>
    </Container>
  );
};

export default RCRating;
