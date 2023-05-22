import React from "react";
import Frame54 from "../Frame54";
import Frame31 from "../Frame31";
import Frame29 from "../Frame29";
import Frame30 from "../Frame30";
import Frame55 from "../Frame55";
import UnfilledText from "../UnfilledText";
import InactiveFilled from "../InactiveFilled";
import LargeUnfilled from "../LargeUnfilled";
import PrimaryFilled from "../PrimaryFilled";
import "./Patients.css";

function Patients(props) {
  const {
    account_Circle1,
    patients,
    iconSettings,
    support,
    number,
    iconNotifications,
    image2,
    drEverly,
    east1,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    image11,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    todaysVitals,
    image13,
    iconHeart,
    vital_Signs,
    image14,
    symptoms,
    proposedTreatment,
    x1123345Pm1,
    previousVisit,
    brokenAnkleCausing,
    restIceXRayExa,
    medications,
    consultationNotes,
    east2,
    recentPayments,
    transaction,
    place,
    amount,
    xRay1,
    x1123345Pm2,
    price1,
    medication,
    x1123530Pm,
    price2,
    account_Circle2,
    xRay2,
    x1223900Am,
    price3,
    east3,
    frame31Props,
    frame55Props,
    unfilledText1Props,
    unfilledText2Props,
    unfilledText3Props,
    inactiveFilled1Props,
    largeUnfilledProps,
    inactiveFilled2Props,
    primaryFilledProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="patients-3 screen">
        <div className="overlap-group5-2">
          <div className="frame-50-3">
            <Frame54 />
            <div className="navigation-expanded-3">
              <div className="nav-bar-3">
                <Frame31 className={frame31Props.className} />
                <div className="frame-28-3">
                  <img className="account_circle-5" src={account_Circle1} alt="account_circle" />
                  <div className="patients-4 inter-bold-white-14px-2">{patients}</div>
                </div>
                <Frame29 />
                <Frame30 />
              </div>
            </div>
          </div>
          <img className="icon-settings-3" src={iconSettings} alt="icon-settings" />
          <div className="support-3 inter-normal-white-16px">{support}</div>
          <div className="ellipse-46-4"></div>
          <div className="ellipse-47-3"></div>
          <div className="ellipse-48-3"></div>
          <div className="ellipse-49-3"></div>
          <div className="ellipse-50-3"></div>
        </div>
        <div className="flex-col-5">
          <div className="flex-row-10">
            <div className="overlap-group3-3">
              <div className="ellipse-37-3"></div>
              <div className="number-11 inter-medium-white-6px">{number}</div>
              <img className="icon-notifications-3" src={iconNotifications} alt="icon-notifications" />
            </div>
            <img className="image-2-3" src={image2} alt="image 2" />
            <div className="dr-everly-3 inter-medium-black-16px">{drEverly}</div>
          </div>
          <div className="flex-col-6">
            <div className="flex-row-11">
              <div className="overlap-group-container-1">
                <div className="overlap-group9">
                  <div className="rectangle-36"></div>
                  <img className="east-5" src={east1} alt="east" />
                  <Frame55 className={frame55Props.className} />
                </div>
                <div className="overlap-group8 inter-medium-black-20px">
                  <img className="line-5-1" src="/img/line-4.svg" alt="Line 5" />
                  <div className="rectangle-34"></div>
                  <div className="address valign-text-middle">
                    <span>
                      <span className="inter-medium-black-20px">{spanText1}</span>
                      <span className="span1-5 inter-medium-black-12px">{spanText2}</span>
                    </span>
                  </div>
                  <div className="x986-f valign-text-middle">
                    <span>
                      <span className="inter-medium-black-20px">{spanText3}</span>
                      <span className="span1-5 inter-medium-black-12px">{spanText4}</span>
                    </span>
                  </div>
                  <img className="image-11-3" src={image11} alt="image 11" />
                  <div className="address-1 valign-text-middle">
                    <span>
                      <span className="inter-medium-black-20px">{spanText5}</span>
                      <span className="span1-5 inter-medium-black-12px">{spanText6}</span>
                    </span>
                  </div>
                  <div className="x10868-mm-hg valign-text-middle">
                    <span>
                      <span className="inter-medium-black-20px">{spanText7}</span>
                      <span className="span1-5 inter-medium-black-12px">{spanText8}</span>
                    </span>
                  </div>
                  <div className="percent valign-text-middle">
                    <span>
                      <span className="inter-medium-black-20px">{spanText9}</span>
                      <span className="span1-5 inter-medium-black-12px">{spanText10}</span>
                    </span>
                  </div>
                  <img className="vector-10" src="/img/vector-10.svg" alt="Vector 10" />
                  <div className="todays-vitals">{todaysVitals}</div>
                  <img className="image-13" src={image13} alt="image 13" />
                  <img className="icon-heart" src={iconHeart} alt="icon-heart" />
                  <img className="vital_signs" src={vital_Signs} alt="vital_signs" />
                  <img className="image-14" src={image14} alt="image 14" />
                </div>
              </div>
              <div className="overlap-group10">
                <div className="rectangle-35"></div>
                <div className="symptoms-1 valign-text-middle inter-medium-black-14px">{symptoms}</div>
                <div className="proposed-treatment valign-text-middle inter-medium-black-14px">{proposedTreatment}</div>
                <div className="x1123-345-pm">{x1123345Pm1}</div>
                <img className="vector-12" src="/img/vector-12.svg" alt="Vector 12" />
                <div className="previous-visit inter-medium-black-20px">{previousVisit}</div>
                <p className="broken-ankle-causing valign-text-middle inter-normal-black-12px">{brokenAnkleCausing}</p>
                <p className="rest-ice-x-ray-exa valign-text-middle inter-normal-black-12px">{restIceXRayExa}</p>
              </div>
              <div className="overlap-group7-1">
                <div className="rectangle-38"></div>
                <UnfilledText
                  spanText1={unfilledText1Props.spanText1}
                  spanText2={unfilledText1Props.spanText2}
                  spanText3={unfilledText1Props.spanText3}
                />
                <UnfilledText
                  spanText1={unfilledText2Props.spanText1}
                  spanText2={unfilledText2Props.spanText2}
                  spanText3={unfilledText2Props.spanText3}
                  className={unfilledText2Props.className}
                />
                <UnfilledText
                  spanText1={unfilledText3Props.spanText1}
                  spanText2={unfilledText3Props.spanText2}
                  spanText3={unfilledText3Props.spanText3}
                  className={unfilledText3Props.className}
                />
                <img className="vector-9" src="/img/vector-9.svg" alt="Vector 9" />
                <div className="medications inter-medium-black-20px">{medications}</div>
                <InactiveFilled
                  className={inactiveFilled1Props.className}
                  bigPrimaryButtonProps={inactiveFilled1Props.bigPrimaryButtonProps}
                />
              </div>
            </div>
            <div className="flex-row-12">
              <div className="overlap-group6-1">
                <div className="overlap-group11">
                  <img className="vector-11" src="/img/vector-11.svg" alt="Vector 11" />
                  <div className="consultation-notes inter-medium-black-20px">{consultationNotes}</div>
                  <LargeUnfilled largeUnfilled2Props={largeUnfilledProps.largeUnfilled2Props} />
                </div>
                <img className="east-6" src={east2} alt="east" />
                <InactiveFilled
                  className={inactiveFilled2Props.className}
                  bigPrimaryButtonProps={inactiveFilled2Props.bigPrimaryButtonProps}
                />
              </div>
              <div className="frame-17">
                <div className="flex-col-7">
                  <div className="flex-col-8">
                    <div className="overlap-group2-2">
                      <div className="overlap-group1-2">
                        <img className="vector-1-1" src="/img/vector-1-1.svg" alt="Vector 1" />
                        <div className="recent-payments inter-medium-black-20px">{recentPayments}</div>
                      </div>
                      <PrimaryFilled
                        className={primaryFilledProps.className}
                        bigPrimaryButtonProps={primaryFilledProps.bigPrimaryButtonProps}
                      />
                    </div>
                    <div className="flex-row-13 dmsans-bold-eerie-black-14px">
                      <div className="transaction">{transaction}</div>
                      <div className="place-5">{place}</div>
                      <div className="amount-1">{amount}</div>
                    </div>
                    <img className="vector-2-3" src="/img/vector-2-3.svg" alt="Vector 2" />
                    <div className="flex-row-14">
                      <div className="x-ray dmsans-bold-black-12px">{xRay1}</div>
                      <div className="x1123-345-pm-1 dmsans-normal-black-12px">{x1123345Pm2}</div>
                      <div className="price-4 dmsans-medium-black-12px">{price1}</div>
                    </div>
                    <div className="flex-row-15">
                      <div className="medication dmsans-bold-black-12px">{medication}</div>
                      <div className="x1123-530-pm dmsans-normal-black-12px">{x1123530Pm}</div>
                      <div className="price-5 dmsans-medium-black-12px">{price2}</div>
                    </div>
                  </div>
                  <div className="flex-row-16">
                    <div className="flex-col-9">
                      <img className="account_circle-6" src={account_Circle2} alt="account_circle" />
                      <div className="x-ray-1 dmsans-bold-black-12px">{xRay2}</div>
                    </div>
                    <div className="x1223-900-am dmsans-normal-black-12px">{x1223900Am}</div>
                    <div className="price-6 dmsans-medium-black-12px">{price3}</div>
                  </div>
                </div>
                <img className="east-7" src={east3} alt="east" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;
