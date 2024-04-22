import React from "react";
import Navbar from "./Navbar";
import Man from "../image/imageLandingpage1.png";
import Counter1 from "../image/Counter_1.png";
import Counter2 from "../image/Counter_2.png";
import Counter3 from "../image/Counter_3.png";
import Kurakura from "../image/kurakura.png";
import Kertas from "../image/kertas.png";
import BotolKaca from "../image/botolkaca.png";
import Women from "../image/womenwatering.png";
import Footer from "../image/Footer.png"

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 grid grid-cols-2 gap-8 items-center mt-8">
        <div className="flex items-center">
          <img src={Man} alt="Man" className="h-[551] w-[602]" />
        </div>
        <div className="text-left">
          <h1 className="text-6xl font-light mb-4">
            Be a Craft
            <br />
            today with Bank
            <br />
            Sampah Sri Wilis
          </h1>
          <p className="text-lg mb-6">
            First timer or experienced, we have something for you. Take a look
            at our vast collection of greenery & let us help you transform your
            household and front/back yard.
          </p>
          <button className="bg-gradient-to-br from-green-200 to-green-500 hover:from-green-500 hover:to-green-800 text-white font-bold py-2 px-4 rounded-lg">
            explore catalog &rarr;
          </button>
        </div>
      </div>
      <div>
        <h1 className="mt-8 font-bold text-lg text-center">
          Visi Misi Bank Sampah Sri Wilis
        </h1>
        <p className="font-thin text-center">
          First timer or experienced, we have something for you. Take a look at
          our vast collection of greenery & let us help you transform your
          household and front/back yard.
        </p>
      </div>
      <div className="flex justify-around mt-8">
        <div className="text-center">
          <h1 className="font-raleway text-custom-E3A476">9,124,204</h1>
          <span>Total Sampah</span>
        </div>
        <div className="text-center">
          <h1 className="font-raleway text-custom-E3A476">50+</h1>
          <span>Jumlah Kerajinan</span>
        </div>
        <div className="text-center">
          <h1 className="font-raleway text-custom-E3A476">400+</h1>
          <span>Jumlah Tipe Produk</span>
        </div>
      </div>
      <div className="flex justify-center mt-6 font-raleway font-bold text-customColor">
        Our Product
      </div>
      <div className="flex justify-around mt-8">
        <div className="flex flex-col items-center">
          <img src={Counter1} alt="" className="justify-center" />
          <img src={Kurakura} alt="" />
          <h1 className="mt-2 text-center text-customColor">Kura Kura</h1>
          <p className="mt-2 text-center text-customColor">
            The Philodendron White Princess has been around for some time in
            private collections. But they have hit the market…
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Counter2} alt="" className="justify-center" />
          <img src={Kertas} alt="" />
          <h1 className="mt-2 text-center text-customColor">Kertas</h1>
          <p className="mt-2 text-center text-customColor">
            As it is a small species, Monstera Obliqua is uncommon. Another
            reason for its scarcity is that it grows slowly and has short…
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Counter3} alt="" className="justify-center" />
          <img src={BotolKaca} alt="" />
          <h1 className="mt-2 text-center text-customColor">Botol Kaca</h1>
          <p className="mt-2 text-center text-customColor">
            Although a lively addition to your home all year round—the Norfolk
            Island Pine shines as a live holiday tree during the winter…
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <button className="bg-gradient-to-br from-green-200 to-green-500 hover:from-green-500 hover:to-green-800 text-white font-bold py-2 px-4 rounded-lg">
          see full catalog &rarr;
        </button>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-2 gap-8 items-center mt-8">
        <div className="flex items-center">
          <img src={Women} alt="Man" className="h-[551] w-[602]" />
        </div>
        <div className="text-left">
          <h1 className="text-6xl font-light mb-4 text-custom-E3A476">
            our Core team
            <br />
            and their philosophy
          </h1>
          <p className="text-lg mb-6">
            In Aranyak, we have a great team to help you manage and maintain all
            your healthy plants simultaneously. We help you to change your
            outlook on life with our huge collection of greenery. Refer to our
            collection of plants for indoor and outdoor vegetation and
            beautification. 
          </p>
        </div>
      </div>
      <img src={Footer} alt="" className="w-full"/>
    </div>
  );
}
