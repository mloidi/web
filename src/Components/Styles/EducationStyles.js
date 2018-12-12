import styled from 'styled-components';

export const Styles = styled.div`
  background: white;
  /* border: 1px solid grey; */
  border-left: 10px solid green;
  /* box-shadow: 0px 12px 31px 0px rgba(0, 0, 0, 0.62); */
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px 15% 20px 15%;
  padding: 20px;
  @media (max-width: 768px) {
    margin: 20px 10px 20px 10px;
  }
  a {
    color: black;
    text-decoration: none;
    border-bottom: 2px solid #ecd018;
  }
  .imgLogo {
    object-fit: cover;
    padding: 0 3rem;
    img {
      max-width: 50%;
      height: auto;
    }
    @media (max-width: 768px) {
    }
  }
  .text {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1rem;
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
  }
  .textDescription {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1rem;
    grid-template-columns: 1% auto;
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
    p {
      margin: 0 0 0 5px;
    }
    .icon {
      margin: 7px 0 0 0;
    }
  }
  .textDescriptionDetails {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1rem;
    display: grid;
    grid-template-columns: 1% auto;
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
    p {
      margin: 0 0 0 5px;
    }
    .icon {
      margin: 7px 0 0 0;
    }
  }
  .textTitle {
    font-weight: 900;
    font-size: 1em;
    margin-bottom: 10px;
  }
  .textRigth {
    text-align: end;
    @media (max-width: 700px) {
      text-align: start;
    }
  }
  .textLeft {
    text-align: start;
  }
  .textCenter {
    text-align: center;
  }
  .hidden {
    display: none;
  }
  .visible {
    display: inline;
  }
  .showDetailButton {
    border: none;
    background: white;
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

export const SubHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 20px 0 30px 0;
  /* border-bottom: 1px solid; */
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

export const Detail = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 0;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;