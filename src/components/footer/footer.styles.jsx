import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const FooterContainer = styled.div`
  clear: both;
  display: block;
  width: 100%;

`;

export const LinkGroupContainer = styled.div`
  display: block;
  
`;

export const IconBar = styled.div`
  background: white;
  border-top: 1px solid gray;
  text-align: center;
  width: 100%;

  .social-links {
    height: 30px;
    vertical-align: top;
    display: inline-flex ;

    svg {
      width: 30px;
      height: 30px;
      padding: 0 0 0 50px;
      
    }
  }

  .payment-types {
    margin: 20px 0 20px 50px;
    padding: 0 0 0 50px;
    height: 20px;
    display: inline-flex;
    vertical-align: top;
    border-left: 1px solid black;
    overflow: hidden;
    text-align: left;
  }
  
  .social-link {
    background-position: 50%;
    background-repeat: no-repeat;
    border: 1px solid black;
    border-radius: 50%;
    height: 30px;
    line-height: 0;
    margin: 15px 0 15px 50px;
    padding: 1px;
    position: relative;
    text-transform: capitalize;
    white-space: nowrap;
    width: 30px;
    display: inline-block;
    list-style: none;
    
    &:first-child{
      margin-left: 0;
    }

    &:hover {
      color: transparent;
      border: blueviolet;
    }
  }

  a {
    position: relative;
    display: block;
    height: 100%;
  }
  
  .payment-type {
    &:not(:first-child){
      margin-left: 36px;
    }
  }

  img {
    height: 20px;
  }
  
`

export const HelpLinksContainer = styled.div`
  background-color: #eee;
  
`

export const HelpLinksGroup = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  max-width: 1366px;
  padding: 32px;

  .help-links {
    border-bottom: none;
    margin-left: 16px;
    flex: 1;
    margin-bottom: 0;
    margin-right: 0;

    &:first-child {
      margin-left: 0;
    }
    
    &:last-of-type {
      margin-right: 0;
    }
    
    a {
      margin: 0 -5px;
      padding: 0 5px;
      display: block;
      line-height: 44px;
      text-decoration: none;
      color: blue;
      font-family: futura-pt,sans-serif;
      font-size: .875rem;
      letter-spacing: .4px;

      &:hover {
        color: blueviolet;
      }
    }
  }
  
  .header {
    color: black;
    border-bottom: none;
    padding-bottom: 10px;
    padding-left: 0;
    margin: 0;
    line-height: normal;
    font-family: futura-pt,sans-serif;
    font-size: .875rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 900;
    display: block;
  }

`

export const LocationContainer = styled.div`
  border-top: none;
  margin-left: 18px;    
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 4px;

  .country-location {
    color: black;
    border-bottom: none;
    padding-bottom: 10px;
    padding-left: 0;
    margin: 0;
    line-height: normal;
    font-family: futura-pt,sans-serif;
    font-size: .875rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 900;
    display: block; 
  }  
`

export const Button = styled.button`
  background-color: initial;
  border: none;
  height: 30px;
  margin: 0;
  outline: none;
  padding: 0;
  text-align: left;
  align-items: center;
  display: flex;

  .location-text {
    font-family: futura-pt,sans-serif;
    font-size: .875rem;
    letter-spacing: .4px;
  }
  
  img {
    border: 1px solid black;
    border-radius: 50%;
    box-sizing: border-box;
    height: 15px;
    outline: 1px solid currentColor;
    width: 15px;
  }
  
  .countryFlag {
    margin-left: 7px;
    margin-right:7px ;
    &:hover {
      cursor: pointer;
      outline: 1px solid burlywood;
    }
  }

  .change-label::before {
    content: "|";
    margin-right: 5px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
`

export const CountrySelector = styled.div`
  height: auto;
  display: inline-block;
  margin-bottom: 10px;

`

export const InternationalSites = styled.div`
  background-color: gray;
  padding: 8px 0;
  border-top: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  .countryFlag {
    margin-left: 7px;
    margin-right:7px ;
    &:hover {
      cursor: pointer;
      outline: 1px solid burlywood;
    }
  }

  a {
    color: gray;
    height: 15px;
    padding: 14.5px;
    width: 15px;
    display: inline-block;
  }
  
  p {
    font-size: 14px;
    letter-spacing: .6px;
    line-height: 20px;
    font-weight: 400;
    margin: 0;
  }


  ul {
    margin: 0;
    display: block;
  }
  
  li {
  display: inline-block;
  }

  img {
    height: 100%;
    width: 100%;
    border: 1px solid black;
    border-radius: 50%;
    box-sizing: border-box;

  }

  @media (min-width: 768px) {
    background-color: initial;
    padding: 0;
  }
`

export const LegalBar = styled.div`
  padding: 0;
  font-size: .75rem;
  height: 50px;
  width: 100%;
  background-color: #d4d9db;
  color: #7e7cb3;
  box-sizing: border-box;
  font-family: futura-pt,sans-serif;
  letter-spacing: .4px;

  .legalBar {
    display: flex;
    box-sizing: border-box;
    max-width: 1366px;
    padding: 0 32px;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    margin: 0 auto;

    .copyright {
      color: black;
      line-height: 50px;
      flex: 5px 0 85px;
    }

    .legalLinks {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      clip-path: polygon(
        0 0,
        calc(100% - 16px) 0,
        calc(100% - 16px) 100%,
        0 100%
      );
      text-align: right;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-end;

      a {
        display: inline-block;
        padding: 0 4px;
        text-decoration: none;
      }

      li {
        line-height: 50px;
        display: inline-block;
        position: relative;
        padding-right: 1em;  
        &:last-child{
          margin-right: 5px;
        }
        
        .hideOnSmallViewport {
          display: inline-block;
        }
      }

      .seperator::after {
        content: "|";
        display: inline;
        position: absolute;
        right: 3px;
      }
    }
  }
  
`
