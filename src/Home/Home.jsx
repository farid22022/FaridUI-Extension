
import Section1 from "./Section1";
import Section2 from "./Section2";
import Accessories from "../Components/Accessories/Accessories";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import WelcomeComponent from "../Components/Welcome";


const Home = () => {
    return (
        <div className="text-center h-screen">
            <h2 className="absolute text-5xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500">FaridUI</h2>
            <WelcomeComponent></WelcomeComponent>
            {/* <SearchBar></SearchBar>
            <Clock></Clock>
            <AnalogClock></AnalogClock> */}
            <div className="grid grid-cols-2 gap-4">
                <Section1 className=""></Section1>
                <Section2 className=""></Section2>
            </div>
            {/* <Calculator></Calculator> */}
            {/* <Weather></Weather> */}
            {/* <AIWebBrowserButtons></AIWebBrowserButtons>
            <Tools></Tools> */}
            <Section3></Section3>
            {/* <GoogleTools></GoogleTools> */}
            {/* <KeepNote></KeepNote> */}
            <Section5></Section5>
            <Section4></Section4>
            <Accessories></Accessories>
        </div>
    );
};

export default Home;