import Card from "../../components/p-9/Card";
import Footer from "../../components/p-9/Footer";
import Header from "../../components/p-9/Header";
import Main from "../../components/p-9/Main";
import Section from "../../components/p-9/Section";

const data = [
  {
    img: "/assets/images/p-9/item-1.png",
    title: "Create an account",
    heading: "Create/login to an existing account to get started",
    info: "An account is created with your email and a desired password",
    isLeft: true,
  },
  {
    img: "/assets/images/p-9/item-2.png",
    title: "Explore varieties",
    heading: "Shop for your favorites meal as e dey hot.",
    info: "Shop for your favorite meals or drinks and enjoy while doing it.",
    isLeft: false,
  },
  {
    img: "/assets/images/p-9/item-3.png",
    title: "Checkout",
    heading: "When you done check out and get it delivered.",
    info: "When you done check out and get it delivered with ease.",
    isLeft: true,
  },
];

const home = () => {
  return (
    <div>
      <Header />
      <Main />
      <div className="flex justify-center my-10">
        <h2 className="text-4xl font-semibold">How the app works</h2>
      </div>
      {data.map((item) => item && <Section data={item} />)}
      <Card />
      <Footer />
    </div>
  );
};

export default home;
