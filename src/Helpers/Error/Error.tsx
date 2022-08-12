import styled from "styled-components";

const P = styled.p`
  color: #f31;
  margin: 1rem auto;
`;

function Error({ error }: { error: string }) {
  return (
    <div className="container">
      <P>{error}</P>
    </div>
  );
}

export default Error;
