import React from "react";
import BtcSVG from "../components/BtcSVG";
import EthSVG from "../components/EthSVG";
import UsdtSVG from "../components/USDTSVG";
import BnbSVG from "../components/BnbSVG";
import { SiFsecure } from "react-icons/si";
import { BsStack, BsTools } from "react-icons/bs";
import { MdMobileFriendly, MdInsights } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const features = [
  {
    icon: <BsTools />,
    title: "Cutting-Edge Technology",
    body: "Our platform harnesses the power of cutting-edge technology to deliver real-time data and lightning-fast execution. ",
  },
  {
    icon: <SiFsecure />,
    title: "Secure and Reliable",
    body: "Your security is our top priority. With industry-leading security measures and encryption protocols, your assets are safe with us.",
  },

  {
    icon: <MdMobileFriendly />,
    title: "User-Friendly Interface",
    body: "We believe that navigating the world of cryptocurrencies should be easy for everyone. Our user-friendly interface is designed for beginners and seasoned traders alike.",
  },
  {
    icon: <MdInsights />,
    title: "Expert Insights",
    body: "Gain access to insights from our team of experts who continuously analyze the market trends and provide you with valuable information to make well-informed decisions.",
  },
  {
    icon: <BsStack />,
    title: "Educational Resources",
    body: "We believe that knowledge is the key to success in the crypto world. Access our comprehensive educational resources to enhance your trading skills.",
  },
  {
    icon: <BiSupport />,
    title: "24/7 Customer Support",
    body: "Our dedicated support team is available 24/7 to assist you with any queries or concerns you may have. We're here to ensure a seamless and enjoyable trading experience.",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="animated-logos">
          <BtcSVG />
          <EthSVG />
          <UsdtSVG />
          <BnbSVG />
        </div>
        <div className="hero__content-box">
          <h1 className="heading__primary">
            <span className="heading__primary--main">Stay Ahead in the</span>
            <span className="heading__primary--sub">Crypto Game</span>
          </h1>
          <p className="text text--animated">
            Welcome to Stay Ahead, your premier destination for navigating the
            thrilling world of cryptocurrencies.
          </p>
        </div>
        <button className="btn btn--primary btn--animated">
          join today!
          <BtcSVG />
        </button>
      </section>

      {/* Famour Coins */}
      <section className="section__coins">
        <div className="coins__left">
          <div>
            <h3 className="heading__tertiary">
              Empowering You to Unlock the Future of Digital Wealth
            </h3>
            <p className="coins__text">
              Leading Crypto companies around the world have integrated
              COINWISE.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section__feature">
        <div className="section__feature__header">
          <h6>Why Choose Us?</h6>
          <h4>Don't Settle for Less</h4>
        </div>
        <div className="section__feature__body">
          {features.map((el, idx) => {
            return (
              <FeatureItem
                icon={el.icon}
                title={el.title}
                body={el.body}
                key={idx + 1}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

const FeatureItem = ({ icon, title, body }) => {
  return (
    <div className="feature__item">
      {icon}
      <h3 className="feature__item__title">{title}</h3>
      <p className="feature__item__text">{body}</p>
    </div>
  );
};

export default Home;
