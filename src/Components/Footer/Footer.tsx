import styled from "styled-components";
import Dogs from "../../assets/dogs-footer.svg";
const FooterCss = styled.footer`
  background: #fb1;
  padding: 3rem 1rem 0 1rem;
  text-align: center;
  color: #764701;
  height: 10rem;
  img {
    margin: 1rem auto;
  }
`;

function Footer() {
  return (
    <FooterCss>
      <img src={Dogs} alt="" />
      <p>UVic Student Onboarding</p>
    </FooterCss>
  );
}

export default Footer;
