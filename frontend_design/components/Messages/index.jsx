import React from "react";
import Frame54 from "../Frame54";
import Frame31 from "../Frame31";
import Frame28 from "../Frame28";
import Frame29 from "../Frame29";
import PrimaryOutlined from "../PrimaryOutlined";
import "./Messages.css";

function Messages(props) {
  const {
    drafts,
    messages1,
    settings,
    support,
    number,
    notifications,
    image2,
    drEverly,
    east1,
    east2,
    messages2,
    inbox,
    edit_Square1,
    image71,
    image81,
    account_Circle,
    image10,
    image9,
    image11,
    image12,
    spanText1,
    spanText2,
    jan120231043Am,
    drJones,
    heyDrEverlyCan1,
    aa,
    justSendOverTheL1,
    spanText3,
    spanText4,
    image72,
    image82,
    spanText5,
    spanText6,
    heyDrEverlyCan2,
    justSendOverTheL2,
    spanText7,
    spanText8,
    screenShot20230410At1501,
    frame31Props,
    frame28Props,
    primaryOutlined1Props,
    primaryOutlined2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="messages-3 screen">
        <div className="overlap-group7">
          <div className="frame-50-2">
            <Frame54 />
            <div className="navigation-expanded-2">
              <div className="nav-bar-2">
                <Frame31 className={frame31Props.className} />
                <Frame28 account_Circle={frame28Props.account_Circle} />
                <Frame29 />
                <div className="frame-30-2">
                  <img className="drafts-1" src={drafts} alt="drafts" />
                  <div className="messages-4 inter-bold-white-14px-2">{messages1}</div>
                </div>
              </div>
            </div>
          </div>
          <img className="icon-settings-2" src={settings} alt="icon-settings" />
          <div className="support-2 inter-normal-white-16px">{support}</div>
          <div className="ellipse-46-3"></div>
          <div className="ellipse-47-2"></div>
          <div className="ellipse-48-2"></div>
          <div className="ellipse-49-2"></div>
          <div className="ellipse-50-2"></div>
        </div>
        <div className="flex-col-3">
          <div className="flex-row-8">
            <div className="overlap-group5-1">
              <div className="ellipse-37-2"></div>
              <div className="number-10 inter-medium-white-6px">{number}</div>
              <img className="icon-notifications-2" src={notifications} alt="icon-notifications" />
            </div>
            <img className="image-2-2" src={image2} alt="image 2" />
            <div className="dr-everly-2 inter-medium-black-16px">{drEverly}</div>
          </div>
          <div className="overlap-group6">
            <img className="east-3" src={east1} alt="east" />
            <img className="east-4" src={east2} alt="east" />
            <PrimaryOutlined className={primaryOutlined1Props.className} />
            <div className="rectangle-31-1"></div>
            <img className="vector-2-2" src="/img/vector-2-2.svg" alt="Vector 2" />
            <div className="messages-5 inter-semi-bold-black-20px">{messages2}</div>
            <PrimaryOutlined className={primaryOutlined2Props.className} />
            <div className="frame-16">
              <div className="overlap-group-2">
                <div className="flex-col-4">
                  <div className="overlap-group3-2">
                    <div className="overlap-group1-1">
                      <img className="vector-1" src="/img/vector-1.svg" alt="Vector 1" />
                      <div className="inbox-2 inter-medium-black-20px">{inbox}</div>
                    </div>
                    <img className="edit_square-1" src={edit_Square1} alt="edit_square" />
                  </div>
                  <img className="image-7" src={image71} alt="image 7" />
                  <div className="ellipse-1"></div>
                  <img className="vector-5-1" src="/img/vector-5-2.svg" alt="Vector 5" />
                  <img className="image-8-1" src={image81} alt="image 8" />
                  <div className="flex-row-9">
                    <img className="account_circle-4" src={account_Circle} alt="account_circle" />
                    <div className="ellipse-2"></div>
                  </div>
                  <img className="vector-6" src="/img/vector-6.svg" alt="Vector 6" />
                </div>
                <div className="overlap-group4-1">
                  <div className="vector-container">
                    <img className="vector-8-1" src="/img/vector-8-1.svg" alt="Vector 8" />
                    <img className="vector-7-1" src="/img/vector-7-1.svg" alt="Vector 7" />
                  </div>
                  <img className="image-10" src={image10} alt="image 10" />
                  <img className="image-9" src={image9} alt="image 9" />
                  <img className="image-11-2" src={image11} alt="image 11" />
                  <div className="rectangle-26"></div>
                  <div className="rectangle-27"></div>
                  <img className="image-12-2" src={image12} alt="image 12" />
                  <div className="rectangle-31-2"></div>
                  <div className="rectangle-32"></div>
                  <div className="rectangle-33"></div>
                  <div className="rectangle-28"></div>
                  <div className="rectangle-30-1"></div>
                  <div className="rectangle-29"></div>
                </div>
              </div>
            </div>
            <div className="dr-jones-1045-am inter-bold-white-14px">
              <span className="inter-bold-black-14px">{spanText1}</span>
              <span className="span1-4 inter-normal-steel-blue-12px">{spanText2}</span>
            </div>
            <p className="jan-1-2023-1043-am inter-normal-steel-blue-12px">{jan120231043Am}</p>
            <div className="dr-jones inter-bold-black-14px">{drJones}</div>
            <p className="hey-dr-everly-can-1 inter-normal-black-12px">{heyDrEverlyCan1}</p>
            <div className="aa inter-normal-black-12px">{aa}</div>
            <p className="just-send-over-the-l inter-normal-black-12px">{justSendOverTheL1}</p>
            <div className="dr-brown-930-am inter-bold-white-14px">
              <span className="inter-bold-black-14px">{spanText3}</span>
              <span className="span1-4 inter-normal-steel-blue-12px">{spanText4}</span>
            </div>
            <img className="vector-5-2" src="/img/vector-5-1.svg" alt="Vector 5" />
            <img className="image-7-1" src={image72} alt="image 7" />
            <img className="image-8-2" src={image82} alt="image 8" />
            <div className="dr-jones-1045-am-1 inter-bold-white-14px">
              <span className="inter-bold-black-14px">{spanText5}</span>
              <span className="span1-4 inter-normal-steel-blue-12px">{spanText6}</span>
            </div>
            <p className="hey-dr-everly-can-2 inter-normal-black-12px">{heyDrEverlyCan2}</p>
            <p className="just-send-over-the-l-1 inter-normal-black-12px">{justSendOverTheL2}</p>
            <div className="dr-brown-930-am-1 inter-bold-white-14px">
              <span className="inter-bold-black-14px">{spanText7}</span>
              <span className="span1-4 inter-normal-steel-blue-12px">{spanText8}</span>
            </div>
            <img className="icon-share" src="/img/edit-square-1.svg" alt="icon-share" />
            <img
              className="screen-shot-2023-04-10-at-150-1"
              src={screenShot20230410At1501}
              alt="Screen Shot 2023-04-10 at 1.50 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
