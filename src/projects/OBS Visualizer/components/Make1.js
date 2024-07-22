import React from "react";
//Styling and Animation
import styled from "styled-components";
import make1 from "../img/make1.png";
import make2 from "../img/make2.png";
import make3 from "../img/make3.png";
import make4 from "../img/make4.png";

const Make1 = () => {
    return (
        <PB>
            <div className="text">
                <div className="main-text">
                    <div className="line"></div>
                    <div className="text1">Make - #1</div>
                </div>
                <div className="secondary-text1">
                    With the functionality and user defined, I began with
                    mapping out the information architecture of the entire
                    system.
                </div>
                <div className="image">
                    <img class="image1" src={make1} alt="" />
                </div>
                <div className="secondary-text1 secondary-text2">
                    <br />
                    <span>The MVP - Manage Files</span>
                    <br />
                    <br />
                    The file manager is a table view of all the files that have
                    been tagged. The main functions of the manager is: <br />{" "}
                    <br /> 1. Allocate files to the Quality Checker <br /> 2.
                    Ingest the file in the visualization environment <br />
                    <br />
                    Search and filter functionalities have been added for
                    perusing through the many files in the system.
                </div>
                <div className="image image2">
                    <img src={make2} alt="" />
                </div>
                <div className="secondary-text1 secondary-text2">
                    <br />
                    <span>The MVP - Check Quality</span>
                    <br />
                    <br />
                    This is the environment where the visualization take place.
                    The main header opens the File Manager and houses the login
                    functions. <br />
                    <br /> The main tool is divided into three parts: <br />
                    <br /> 1. A video player with toggling functionality &
                    Submit and Report CTA's. <br /> 2. A viewer to display
                    frames of the video being played for identifying exact
                    frames where a tagging mistake has been made. <br /> 3. A
                    Segment panel that lists all the players of each team with
                    their respected video segments.
                </div>
                <div className="image">
                    <img src={make3} alt="" />
                </div>
                <div className="secondary-text1 secondary-text2">
                    <br />
                    <span>The MVP - UI Style Guide</span>
                    <br />
                    <br />
                    This tools follows the established design system at
                    AthenasOwl, with an emphasis to reuse components for faster
                    development time and ease of future rework.
                </div>
                <div className="image">
                    <img className="image3" src={make4} alt="" />
                </div>
                <div className="secondary-text1 secondary-text2">
                    <br />
                    <span>The MVP - Final Screens</span>
                    <br />
                    <br />
                    The wireframes and the UI guideline was converted into a
                    working prototype which was handed over for development.
                    This design was used to gather the first user studies for
                    the next iteration.
                </div>
                <div className="image">
                    <video width="640" height="354" controls>
                        <source
                            src="https://utfs.io/f/15adbef7-a38d-4c9b-ae40-ade1faa84c02-20z01.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
        </PB>
    );
};

const PB = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: left;
        padding-top: 5rem;

        .main-text {
            display: flex;
            align-items: center;
            justify-content: left;

            .text1 {
                color: #4a4749;
                font-size: 1.5rem;
                margin-left: 0.3rem;
                font-weight: 450;
            }
            .line {
                display: flex;
                flex-direction: row;
                justify-content: center;
                text-align: center;
                align-items: center;

                border-left: 5px solid #ffcd2e;
                border-top: 0px;
                border-bottom: 0px;
                border-right: 0px;
                height: 1.5rem;
            }
        }
        .secondary-text1 {
            margin-top: 1rem;
            letter-spacing: 0.05;
            line-height: 1.8rem;
            font-size: 1.1rem;
            font-weight: 350;
            color: #1b1b1b;
            span {
                font-weight: 500;
                color: #4a4749;
                text-decoration: 0.5px underline;
                text-decoration-color: #ffcd2e;
            }
        }
        .secondary-text2 {
            margin-top: 4rem;
        }
    }
    .image {
        display: flex;
        justify-content: center;
        margin-top: 5rem;
        img {
            width: 100%;
        }
        .image1 {
            width: 70%;
        }
        .image3 {
            width: 110%;
        }
        video {
            width: 120%;
            height: 120%;
        }
    }
`;

export default Make1;
