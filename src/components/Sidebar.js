import React from "react";
import styled from "styled-components";

import Bio from "./Bio";

const SidebarWrapper = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 400px;
  justify-content: center;
  align-items: center;
`;

const SidebarContent = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 300px;
  margin-left: 30px;
  padding: 3rem;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  @media (max-width: 1100px) {
    width: 90%;
  }
`;

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SidebarContent>
                <Bio/>
            </SidebarContent>
        </SidebarWrapper>
    );
}

export default Sidebar;