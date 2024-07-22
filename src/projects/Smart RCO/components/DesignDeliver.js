import React from "react";
//Styling and Animation
import styled from "styled-components";
import design1 from "../img/design1.jpg";
import design2 from "../img/design2.png";

const DesignDeliver = () => {
    return (
        <PB>
            <div className="text">
                <div className="main-text">
                    <div className="line"></div>
                    <div className="text1">Design - Deliver</div>
                </div>
                <div className="secondary-text1">
                    <br />
                    These high level business and user goals were then
                    translated into wireframes.
                </div>
                <div className="image">
                    <img className="image3" src={design2} alt="" />
                </div>
                <div className="secondary-text1 secondary-text2">
                    <br />
                    <span>UI Style Guide</span>
                </div>
                <div className="image image2">
                    <img src={design1} alt="" />
                </div>
                <div className="secondary-text1 secondary-text2">
                    <br />
                    <span>Final Screens</span>
                    <br />
                    <br />
                    The user of this product are the sales directors of networks
                    and television broadcasters. The product should be tailored
                    to the tasks that need to be carried out as a bid is
                    received.
                </div>
                <div className="image">
                    <video width="640" height="354" controls>
                        <source
                            src="https://utfs.io/f/baf012f0-3109-4909-be77-e6fd5422694e-22wni.mp4"
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
        .image3 {
            width: 120%;
        }
        video {
            width: 120%;
            height: 120%;
            margin-bottom: 5rem;
        }
    }
`;

export default DesignDeliver;
