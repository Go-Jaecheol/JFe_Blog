import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FaGithub, FaInstagram } from 'react-icons/fa'

import profile from "../images/profile-pic2.png";

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BioImage = styled.img`
  display: fixed;
  width: 150px;
  height: 150px;
  border-radius: 30%;
  margin-bottom: 20px;
`;

const BioName = styled.div`
  font-size: 20px;
`;

const BioIcons = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 28px;
  padding: 20px;
  justify-content: space-between;
  a {
    margin-left: 7px;
    margin-right: 7px;
    color: gray;
    &:visited {
      color: gray;
    }
  }
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            github
            instagram
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <BioWrapper>
      <BioImage src={profile} alt="profile image"/>
      <h3>Jfe</h3>
      <BioName>{author.name}</BioName>
      <BioIcons>
        <a href={`https://github.com/${social.github}`} target="_blank">
          <FaGithub/>
        </a>
        <a href={`https://www.instagram.com/${social.instagram}`} target="_blank">
          <FaInstagram/>
        </a>
      </BioIcons>
    </BioWrapper>
  )
}

export default Bio
