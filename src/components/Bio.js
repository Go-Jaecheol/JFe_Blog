import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import profile from "../images/profile-pic.png";

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BioImage = styled.img`
  display: fixed;
  width: 50px;
  height: 50px;
`;

const BioName = styled.div`
  font-size: 20px;
  margin-top: 20px;
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
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <BioWrapper>
      <BioImage src={profile} alt="profile image"/>
      <BioName>{author.name}</BioName>
    </BioWrapper>
  )
}

export default Bio
