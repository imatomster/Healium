import React from "react";
import Frame54 from "../Frame54";
import Frame28 from "../Frame28";
import Frame29 from "../Frame29";
import Frame30 from "../Frame30";
import Frame32 from "../Frame32";
import Frame55 from "../Frame55";
import "./Home.css";

function Home(props) {
  const {
    home,
    place,
    settings,
    support,
    east,
    upcomingVisits,
    name,
    searchByPatientDepartmentDate,
    number1,
    price1,
    m,
    t1,
    w,
    t2,
    f,
    price2,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    today,
    image5,
    spanText1,
    spanText2,
    spanText3,
    x1123930Am,
    image3,
    spanText4,
    spanText5,
    spanText6,
    x11231100Am,
    image4,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    x11231130Am,
    tomorrow,
    number8,
    inbox,
    newMessage,
    image7,
    spanText11,
    spanText12,
    heyDrEverlyCan,
    image8,
    spanText13,
    spanText14,
    justSentOverTheL,
    image121,
    spanText15,
    spanText16,
    howDidTheMeetingWithMaryGo,
    image122,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    image2,
    number9,
    notifications,
    drEverly,
    frame28Props,
    frame321Props,
    frame322Props2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="overlap-group">
          <div className="frame-50">
            <Frame54 />
            <div className="navigation-expanded">
              <div className="nav-bar">
                <div className="frame-31">
                  <img className="icon-home" src={home} alt="icon-home" />
                  <div className="place inter-bold-white-14px-2">{place}</div>
                </div>
                <Frame28 account_Circle={frame28Props.account_Circle} />
                <Frame29 />
                <Frame30 />
              </div>
            </div>
          </div>
          <img className="icon-settings" src={settings} alt="icon-settings" />
          <div className="support inter-normal-white-16px">{support}</div>
          <div className="ellipse-46"></div>
          <div className="ellipse-47"></div>
          <div className="ellipse-48"></div>
          <div className="ellipse-49"></div>
          <div className="ellipse-50"></div>
        </div>
        <div className="overlap-group3">
          <div className="overlap-group1">
            <div className="rectangle-30"></div>
            <img className="east" src={east} alt="east" />
            <div className="upcoming-visits inter-medium-black-20px">{upcomingVisits}</div>
            <div className="name">{name}</div>
            <div className="frame-47">
              <p className="search-by-patient-department-date valign-text-middle">{searchByPatientDepartmentDate}</p>
              <img className="icon-search" src="/img/search.svg" alt="icon-search" />
            </div>
            <img className="line-2" src="/img/line-2.svg" alt="Line 2" />
            <div className="ellipse-39"></div>
            <div className="ellipse-40"></div>
            <div className="ellipse-41"></div>
            <div className="ellipse-42"></div>
            <div className="ellipse-43"></div>
            <div className="ellipse-44"></div>
            <div className="ellipse-45"></div>
            <div className="number inter-normal-black-10px">{number1}</div>
            <div className="price inter-normal-black-10px">{price1}</div>
            <div className="m inter-normal-black-10px">{m}</div>
            <div className="t inter-normal-black-10px">{t1}</div>
            <div className="w inter-normal-black-10px">{w}</div>
            <div className="t-1 inter-normal-black-10px">{t2}</div>
            <div className="f inter-normal-black-10px">{f}</div>
            <div className="price-1 inter-normal-black-10px">{price2}</div>
            <div className="number-1 inter-normal-black-10px">{number2}</div>
            <div className="number-2 inter-normal-white-10px">{number3}</div>
            <div className="number-3 inter-normal-black-10px">{number4}</div>
            <div className="number-4 inter-normal-black-10px">{number5}</div>
            <div className="number-5 inter-normal-black-10px">{number6}</div>
            <div className="number-6 inter-normal-black-10px">{number7}</div>
            <img className="line-4" src="/img/line-4.svg" alt="Line 4" />
            <img className="line-5" src="/img/line-5.svg" alt="Line 5" />
            <img className="line-6" src="/img/line-6.svg" alt="Line 6" />
            <div className="frame-44">
              <div className="frame-4">
                <div className="today">{today}</div>
                <div className="frame-46">
                  <div className="frame-33">
                    <div className="frame-3">
                      <img className="image-5" src={image5} alt="image 5" />
                      <p className="name-1 inter-bold-white-14px">
                        <span className="inter-bold-black-14px">{spanText1}</span>
                        <span className="span-1 inter-normal-black-12px">{spanText2}</span>
                        <span className="span-1 inter-normal-steel-blue-12px">{spanText3}</span>
                      </p>
                    </div>
                    <div className="x1123 inter-normal-black-12px">{x1123930Am}</div>
                  </div>
                  <div className="frame-3-1">
                    <div className="frame-3">
                      <img className="image-3" src={image3} alt="image 3" />
                      <p className="name-2 inter-bold-white-14px">
                        <span className="inter-bold-black-14px">{spanText4}</span>
                        <span className="span-1 inter-normal-black-12px">{spanText5}</span>
                        <span className="span-1 inter-normal-steel-blue-12px">{spanText6}</span>
                      </p>
                    </div>
                    <div className="x1123 inter-normal-black-12px">{x11231100Am}</div>
                  </div>
                  <div className="frame-3-1">
                    <div className="frame-3">
                      <img className="image" src={image4} alt="image 4" />
                      <p className="name-3 inter-bold-white-14px">
                        <span className="inter-bold-black-14px">{spanText7}</span>
                        <span className="inter-normal-black-14px">{spanText8}</span>
                        <span className="inter-bold-black-14px">{spanText9}</span>
                        <span className="span-1 inter-normal-steel-blue-12px">{spanText10}</span>
                      </p>
                    </div>
                    <div className="x1123 inter-normal-black-12px">{x11231130Am}</div>
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="tomorrow inter-normal-black-10px">{tomorrow}</div>
                <div className="frame-46">
                  <Frame32
                    image9={frame321Props.image9}
                    spanText1={frame321Props.spanText1}
                    spanText2={frame321Props.spanText2}
                    spanText3={frame321Props.spanText3}
                    x11231100Am={frame321Props.x11231100Am}
                  />
                  <Frame32
                    image9={frame322Props2.image9}
                    spanText1={frame322Props2.spanText1}
                    spanText2={frame322Props2.spanText2}
                    spanText3={frame322Props2.spanText3}
                    x11231100Am={frame322Props2.x11231100Am}
                  />
                  <div className="frame-3-2"></div>
                  <div className="frame-3-2"></div>
                </div>
              </div>
            </div>
            <div className="number-7 inter-normal-white-10px">{number8}</div>
            <div className="inbox">
              <div className="flex-row">
                <div className="inbox-1 inter-medium-black-20px">{inbox}</div>
                <img className="edit_square" src="/img/edit-square.svg" alt="edit_square" />
                <div className="new-message">{newMessage}</div>
              </div>
              <img className="line-7" src="/img/line-7.svg" alt="Line 7" />
              <div className="frame-45">
                <div className="frame-33-1">
                  <div className="frame-3">
                    <img className="image" src={image7} alt="image 7" />
                    <div className="dr-jones-930-am inter-bold-white-14px">
                      <span className="inter-bold-black-14px">{spanText11}</span>
                      <span className="span-1 inter-normal-steel-blue-12px">{spanText12}</span>
                    </div>
                  </div>
                  <p className="hey-dr-everly-can inter-normal-black-12px">{heyDrEverlyCan}</p>
                  <img className="ellipse-46-1" src="/img/ellipse-46.svg" alt="Ellipse 46" />
                </div>
                <div className="frame-3-3">
                  <div className="frame-3">
                    <img className="image-8" src={image8} alt="image 8" />
                    <div className="dr-brown-815-am inter-bold-white-14px">
                      <span className="inter-bold-black-14px">{spanText13}</span>
                      <span className="span-1 inter-normal-steel-blue-12px">{spanText14}</span>
                    </div>
                  </div>
                  <img className="frame-51" src="/img/frame-51.svg" alt="Frame 51" />
                  <p className="just-sent-over-the-l inter-normal-black-12px">{justSentOverTheL}</p>
                </div>
                <div className="frame-3-3">
                  <div className="frame-3">
                    <img className="image-12" src={image121} alt="image 12" />
                    <div className="dr-bailey-800-am inter-bold-white-14px">
                      <span className="inter-bold-black-14px">{spanText15}</span>
                      <span className="span-1 inter-normal-steel-blue-12px">{spanText16}</span>
                    </div>
                  </div>
                  <img className="frame-51-1" src="/img/frame-51-1.svg" alt="Frame 51" />
                  <p className="how-did-the-meeting-with-mary-go inter-normal-black-12px">
                    {howDidTheMeetingWithMaryGo}
                  </p>
                  <img className="image-12-1" src={image122} alt="image 12" />
                </div>
              </div>
            </div>
            <p className="proposed-treatment-r valign-text-middle inter-semi-bold-black-14px">
              <span>
                <span className="inter-semi-bold-black-14px">{spanText17}</span>
                <span className="inter-normal-black-14px">{spanText18}</span>
              </span>
            </p>
            <div className="frame-53">
              <div className="frame-48">
                <p className="past-symptoms-broken valign-text-middle inter-semi-bold-black-14px">
                  <span>
                    <span className="inter-semi-bold-black-14px">{spanText19}</span>
                    <span className="span-1 inter-normal-black-12px">{spanText20}</span>
                  </span>
                </p>
              </div>
            </div>
            <Frame55 />
          </div>
          <img className="image-2" src={image2} alt="image 2" />
          <div className="overlap-group2">
            <div className="ellipse-37"></div>
            <div className="number-8 inter-medium-white-6px">{number9}</div>
            <img className="icon-notifications" src={notifications} alt="icon-notifications" />
          </div>
          <div className="dr-everly inter-medium-black-16px">{drEverly}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
