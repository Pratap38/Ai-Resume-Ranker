import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/Cardshow";
import Footer from "../components/Footer";
import Chatbot from "../components/chatbot";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Chatbot/>
      <Card />
      <Footer />
    </>
  );
};

export default Home;
