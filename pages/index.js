import Head from "next/head";
import SectionFour from "../components/SectionFour";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";
import Header from "../components/Header";
import Footer from "../components/Footer";

const index = () => {
  return (
    <>
      <Head>
        <title>Dour Darcels</title>
      </Head>

      <Header></Header>

      <main className="min-h-screen">
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
        <SectionFive></SectionFive>
        <SectionSix></SectionSix>
      </main>

      <Footer></Footer>
    </>
  );
};

export default index;
