import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import Banner from "../components/Home/Banner/Banner";
import Instagram from "../components/Home/Instagram/Instagram";
import Partner from "../components/Home/Partner/Partner";
import Subscribe from "../components/Home/Subscribe/Subscribe";

const Home = (props) => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Subscribe></Subscribe>
      <Partner></Partner>
      <Instagram></Instagram>
      <Footer></Footer>
    </div>
  )
}

export default Home;