import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"
import Footer from "./Footer"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <Container data-is-root-path={isRootPath}>
      <GlobalStyle/>
      <main>{children}</main>
    </Container>
  )
}

export default Layout
