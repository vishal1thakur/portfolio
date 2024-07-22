import React from "react";
//Styling and Animation
import styled from "styled-components";
import make5 from "../img/make5.png";
import make6 from "../img/make6.png";

const Make2 = () => {
    return (
        <PB>
            <div className="text">
                <div className="main-text">
                    <div className="line"></div>
                    <div className="text1">Make - #2</div>
                </div>
                <div className="secondary-text1">
                    <br />
                    <span>Visualizer redesign</span>
                    <br />
                    <br />
                    In the user tests it was observed that the frame viewer was
                    hardly used and so was removed in this iteration. More
                    toggling options were added in the video player itself which
                    included going forward and backward by 10 seconds and a
                    frame. <br /> The segment panel was simplified by having
                    both the teams on the same section.
                </div>
                <div className="image">
                    <img className="image3" src={make5} alt="" />
                </div>
                <div className="secondary-text1 secondary-text2">
                    <br />
                    <span>Adding a comment section</span>
                    <br />
                    <br />A new section was added in the interface to log in
                    comments for the mistakes made in the tagging process.
                </div>
                <div className="image">
                    <img className="image3" src={make6} alt="" />
                </div>
                <div className="secondary-text1 secondary-text2">
                    <br />
                    <span>Iteration #2</span>
                    <br />
                    <br />
                    These changes were handover and developed for new batch of
                    user tests.
                </div>
                <div className="image">
                    <video width="640" height="354" controls>
                        <source
                            src="https://utfs.io/f/16281732-0fd3-4bea-8a26-de42ff73d1ad-20z02.mp4"
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
            width: 120%;
        }
        video {
            width: 120%;
            height: 120%;
        }
    }
`;

export default Make2;
