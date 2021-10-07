import styled from "@emotion/styled";
import RCRating from "./RcRating";

const Title = styled.h2`
  text-align: center;
`;
function App() {
  return (
    <div className="App">
      <Title>rc-ratings in action</Title>
      
        <RCRating/>
    </div>
  );
}

export default App;
