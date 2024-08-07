import React from "react";
//Styling and Animation
import styled from "styled-components";
import HeaderRCO from "./components/HeaderRCO";
// Styles
import GlobalStylesRCO from "./components/GlobalStylesRCO";
import ProjectBackground from "./components/ProjectBackground";
import ProblemStatement from "./components/ProblemStatement";
import ProjectDetails from "./components/ProjectDetails";
import Process from "./components/Process";
import DiscoverDefine from "./components/DiscoverDefine";
import DesignDeliver from "./components/DesignDeliver";
import ScrollToTop from "../ScrollToTop";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const RCO = () => {
    return (
        <RCOApp
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ backgroundColor: "#FDFDFD" }}
        >
            <ScrollToTop />

            <GlobalStylesRCO />
            <HeaderRCO />
            <ProjectBackground />
            <ProjectDetails />
            <ProblemStatement />
            <Process />
            <DiscoverDefine />
            <DesignDeliver />
        </RCOApp>
    );
};

const RCOApp = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0rem 0rem 0rem 6.5rem;
    overflow-x: none;
    @media only screen and (max-width: 600px) {
        margin-left: 0rem;
    }
`;

export default RCO;
