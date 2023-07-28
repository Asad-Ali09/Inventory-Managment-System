import React, { useEffect } from "react";
import BtcSVG from "../components/BtcSVG";
import EthSVG from "../components/EthSVG";
import UsdtSVG from "../components/USDTSVG";
import BnbSVG from "../components/BnbSVG";
import { SiFsecure } from "react-icons/si";
import { BsStack, BsTools } from "react-icons/bs";
import { MdMobileFriendly, MdInsights } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllExcahnges,
  // selectError,
  selectStatus,
  fetchExchanges,
} from "../redux/markets/exchangesSlice";
import ExchangeCard from "../components/ExchangeCard";
import Testimonial from "../components/Testimonial";
import testimonialImg1 from "../assets/jhon.jpg";
import testimonialImg2 from "../assets/mia.jpg";
import testimonialImg3 from "../assets/david.jpg";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

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
const testimonials = [
  {
    name: "John Smith",
    title: "Cryptocurrency Enthusiast",
    image: `${testimonialImg1}`,
    desc: "I've been trading cryptocurrencies for a few years now, and I must say, Coinwise has taken my experience to a whole new level. The platform's user-friendly interface and real-time data have made it incredibly easy for me to stay on top of the market trends. The educational resources are a goldmine for valuable insights. Thanks to this app, I've been able to unlock exciting opportunities and increase my digital wealth.",
  },

  {
    name: "Mia Lewis",
    title: "Experienced Trader",
    image: `${testimonialImg2}`,
    desc: "I've tried various crypto trading platforms, but none have impressed me as much as Coinwise. The advanced tools, technical indicators, and insightful market analysis provided by the app have been instrumental in my successful trades. The speed of execution is fantastic, and the security measures give me peace of mind. This app has truly empowered me to unlock the future of digital wealth.",
  },
  {
    name: "David Walter",
    title: "Long-term Investor",
    image: testimonialImg3,
    desc: "I'm not a day trader; I prefer holding onto my investments for the long term. Coinwise has been the perfect partner for my investment journey. The app's portfolio management tools and detailed performance reports keep me informed about my holdings. It's been a pleasure using this platform, and I highly recommend it to anyone looking to explore the world of cryptocurrencies.",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const exchanges = useSelector(selectAllExcahnges);
  const exchangeStatus = useSelector(selectStatus);
  // const Error = useSelector(selectError);

  useEffect(() => {
    if (exchangeStatus === "idle") {
      dispatch(fetchExchanges());
    }
  }, [exchangeStatus, dispatch]);

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
        <button
          onClick={() => navigate("/market")}
          className="btn btn--primary btn--animated"
        >
          Browse Market!
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
        <div className="exchange__cards">
          {exchangeStatus === "loading" ? (
            <Loading />
          ) : (
            exchanges.map((el) => {
              return (
                <ExchangeCard
                  key={el.id}
                  title={el.name}
                  image={el.image}
                  year={el.year_established}
                  url={el.url}
                />
              );
            })
          )}
        </div>
      </section>

      {/* Feature Section */}
      <section className="section__feature">
        <div className="heading__secondary">
          <h6 className="heading__secondary--main">Why Choose Us?</h6>
          <h4 className="heading__secondary--sub">Don't Settle for Less</h4>
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

      {/* Testimonials */}
      <section className="testimonials__section">
        <div className="heading__secondary">
          <h6 className="heading__secondary--main">testimonials</h6>
          <h4 className="heading__secondary--sub">Hear from our clients</h4>
        </div>

        <div className="testimonials">
          {testimonials.map((el, idx) => {
            return (
              <Testimonial
                image={el.image}
                name={el.name}
                desc={el.desc}
                title={el.title}
                key={idx}
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
