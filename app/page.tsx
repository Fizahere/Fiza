
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./portfolio/Profile";
import Resume from "./portfolio/Resume";
import Getintouch from "./portfolio/Getintouch";

export default function Home() {
  
  return (
    <div className="bg-[#0d1117] p-3 sm:p-10">
      <Navbar />
     <div className="2xl:w-3/5 mx-auto">
      <Profile/>
      <Resume/>
      <Getintouch/>
     </div>
      <Footer />
    </div>
  );
}
