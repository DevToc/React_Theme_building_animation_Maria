import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import Banner from "../components/Home/Banner/Banner";
import Instagram from "../components/Home/Instagram/Instagram";
import News from "../components/Home/News/News";
import Offer from "../components/Home/Offer/Offer";
import Partner from "../components/Home/Partner/Partner";
import Subscribe from "../components/Home/Subscribe/Subscribe";
import Testmonials from "../components/Home/Testmonials/Testmonials";

const Home = (props) => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Offer></Offer>
      <Testmonials> </Testmonials>
      <News></News>
      <Subscribe></Subscribe>
      <Partner></Partner>
      <Instagram></Instagram>
      <Footer></Footer>
    </div>
  )
}

export default Home;