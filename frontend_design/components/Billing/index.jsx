import React from "react";
import Frame54 from "../Frame54";
import Frame31 from "../Frame31";
import Frame28 from "../Frame28";
import Frame30 from "../Frame30";
import PrimaryOutlined from "../PrimaryOutlined";
import InactiveFilled from "../InactiveFilled";
import Frame49 from "../Frame49";
import Frame58 from "../Frame58";
import PrimaryFilled from "../PrimaryFilled";
import PrimaryFilled2 from "../PrimaryFilled2";
import SmallWhite from "../SmallWhite";
import "./Billing.css";

function Billing(props) {
  const {
    attach_Money,
    billing,
    settings,
    support,
    number,
    notifications,
    image2,
    drEverly,
    east1,
    account_Circle1,
    account_Circle2,
    createBill,
    search1,
    department,
    browseDepartments,
    symptoms,
    east2,
    recentBills,
    patientName1,
    place,
    amount,
    patientName2,
    x1123345Pm,
    price1,
    completed1,
    patientName3,
    x1123530Pm,
    price2,
    completed2,
    navbarLinkPatientName,
    navbarLink1223900Am,
    navbarLinkPrice,
    navbarLinkPending,
    searchByPatientDepartmentDate,
    frame28Props,
    frame30Props,
    inactiveFilledProps,
    frame581Props,
    frame582Props,
    primaryFilledProps,
    primaryFilled2Props,
    smallWhiteProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="billing-3 screen">
        <div className="overlap-group2-1">
          <div className="frame-50-1">
            <Frame54 />
            <div className="navigation-expanded-1">
              <div className="nav-bar-1">
                <Frame31 />
                <Frame28 account_Circle={frame28Props.account_Circle} className={frame28Props.className} />
                <div className="frame-29-3">
                  <img className="attach_money-3" src={attach_Money} alt="attach_money" />
                  <div className="billing-4 inter-bold-white-14px-2">{billing}</div>
                </div>
                <Frame30 className={frame30Props.className} />
              </div>
            </div>
          </div>
          <img className="icon-settings-1" src={settings} alt="icon-settings" />
          <div className="support-1 inter-normal-white-16px">{support}</div>
          <div className="ellipse-46-2"></div>
          <div className="ellipse-47-1"></div>
          <div className="ellipse-48-1"></div>
          <div className="ellipse-49-1"></div>
          <div className="ellipse-50-1"></div>
        </div>
        <div className="flex-col-2">
          <div className="flex-row-3">
            <div className="overlap-group3-1">
              <div className="ellipse-37-1"></div>
              <div className="number-9 inter-medium-white-6px">{number}</div>
              <img className="icon-notifications-1" src={notifications} alt="icon-notifications" />
            </div>
            <img className="image-2-1" src={image2} alt="image 2" />
            <div className="dr-everly-1 inter-medium-black-16px">{drEverly}</div>
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group4">
              <img className="east-1" src={east1} alt="east" />
              <PrimaryOutlined />
              <div className="frame-21">
                <div className="overlap-group-1">
                  <img className="account_circle-1" src={account_Circle1} alt="account_circle" />
                  <img className="account_circle-3" src={account_Circle2} alt="account_circle" />
                  <div className="rectangle-25"></div>
                  <img className="vector-2" src="/img/vector-2-1.svg" alt="Vector 2" />
                  <div className="create-bill inter-semi-bold-black-20px">{createBill}</div>
                  <img className="search" src={search1} alt="search" />
                  <InactiveFilled bigPrimaryButtonProps={inactiveFilledProps.bigPrimaryButtonProps} />
                  <div className="frame-56">
                    <div className="department valign-text-middle inter-semi-bold-black-11-8px">{department}</div>
                    <div className="frame-48-1">
                      <div className="browse-departments valign-text-middle inter-normal-quick-silver-12px">
                        {browseDepartments}
                      </div>
                      <img className="vector" src="/img/vector.svg" alt="Vector" />
                    </div>
                  </div>
                  <div className="frame-57">
                    <div className="symptoms valign-text-middle inter-semi-bold-black-11-8px">{symptoms}</div>
                    <Frame49 />
                  </div>
                  <Frame58 diagnosis={frame581Props.diagnosis} />
                  <Frame58 diagnosis={frame582Props.diagnosis} className={frame582Props.className} />
                </div>
              </div>
              <PrimaryFilled bigPrimaryButtonProps={primaryFilledProps.bigPrimaryButtonProps} />
            </div>
            <div className="overlap-group5">
              <img className="east-2" src={east2} alt="east" />
              <div className="rectangle-31"></div>
              <div className="frame-20">
                <div className="recent-bills inter-semi-bold-black-20px">{recentBills}</div>
                <img className="vector-2-1" src="/img/vector-2.svg" alt="Vector 2" />
                <div className="flex-row-4 inter-bold-eerie-black-14px">
                  <div className="patient-name-1">{patientName1}</div>
                  <div className="place-1">{place}</div>
                  <div className="amount">{amount}</div>
                </div>
                <div className="upcoming-patients">
                  <img className="vector-8" src="/img/vector-8.svg" alt="Vector 8" />
                  <div className="flex-row-5">
                    <div className="patient-name inter-medium-black-12px">{patientName2}</div>
                    <div className="x1123-1 inter-normal-steel-blue-12px">{x1123345Pm}</div>
                    <div className="price-2 inter-normal-black-12px">{price1}</div>
                    <div className="completed inter-medium-laurel-12px">{completed1}</div>
                  </div>
                  <img className="vector-5" src="/img/vector-5.svg" alt="Vector 5" />
                  <div className="flex-row-6">
                    <div className="patient-name-2 inter-medium-black-12px">{patientName3}</div>
                    <div className="x1123-1 inter-normal-steel-blue-12px">{x1123530Pm}</div>
                    <div className="price-3 inter-normal-black-12px">{price2}</div>
                    <div className="completed-1 inter-medium-laurel-12px">{completed2}</div>
                  </div>
                  <img className="vector-7" src="/img/vector-7.svg" alt="Vector 7" />
                  <div className="navbar-link-container">
                    <div className="patient-name inter-medium-black-12px">{navbarLinkPatientName}</div>
                    <div className="navbar-link-1223-900-am inter-normal-steel-blue-12px">{navbarLink1223900Am}</div>
                    <div className="navbar-link-price inter-normal-black-12px">{navbarLinkPrice}</div>
                    <div className="navbar-link-pending">{navbarLinkPending}</div>
                  </div>
                  <div className="flex-row-7">
                    <PrimaryFilled2 bigPrimaryButton2Props={primaryFilled2Props.bigPrimaryButton2Props} />
                    <SmallWhite bigPrimaryButton2Props={smallWhiteProps.bigPrimaryButton2Props} />
                  </div>
                </div>
              </div>
              <div className="frame-47-1">
                <p className="search-by-patient-department-date-1 valign-text-middle inter-normal-quick-silver-12px">
                  {searchByPatientDepartmentDate}
                </p>
                <img className="icon-search-1" src="/img/search.svg" alt="icon-search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
