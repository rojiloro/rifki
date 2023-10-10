import React from "react";
import men from "../assets/dua.png";
import woman from "../assets/tiga.png";
import { Link } from "react-router-dom";

function Detail() {
  return (
    <>
      <div id="acara">
        <div className="min-h-screen mt-4 bg-orange-50 py-10 font-custom2 sm:text-base text-sm">
          <div data-aos="zoom-in" className="italic text-center font-custom4 sm:mt-10 mt-5 font-bold sm:text-2xl text-base">
            <p>Assalamu'alaikum Warrahmatullahi Wabarakatuh</p>
          </div>
          <div className="sm:text-center text-center mx-6 sm:mt-10 mt-5  font-monserat">
            <p>Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.</p>
            <p>Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:</p>
          </div>
          <div className="sm:flex block sm:justify-center sm:mt-10 mt-5 font-monserat">
            <div data-aos="fade-up" className="bg-slate-300 rounded-full w-56 h-56 flex justify-center items-center sm:mx-28 mx-auto mb-64">
              <img src={men} alt="" className="rounded-full w-56 h-56 " />
            </div>
            <div className="text-center w-1/4 sm:mt-10 -mt-56 sm:hidden visible mx-auto mb-10">
              <p className="font-bold font-custom3 sm:text-3xl text-2xl mb-5">Rifkiyantoro, S.Kom</p>
              <p>Bapak Miskur dan ibu Fatonah</p>
              <p>Karangsari, Batur, Banjarnegara</p>
            </div>
            <div data-aos="fade-up" className="bg-slate-300 rounded-full w-56 h-56 flex justify-center items-center sm:mx-28 mx-auto">
              <img src={woman} alt="" className="rounded-full w-56 h-56" />
            </div>
            <div className="text-center w-1/4 sm:mt-10 mt-10 sm:hidden visible mx-auto mb-10">
              <p className="font-bold font-custom3 sm:text-3xl text-2xl mb-5">Zumrotun Alfiyah, S.Pd</p>
              <p>Bapak Suko Raharjo dan Ibu Siti Mainah</p>
              <p className="mt-1">Pejawaran Batur Banjarnegara</p>
            </div>
          </div>
          <div className="sm:flex justify-center -mt-56 sm:visible hidden">
            <div className="text-center w-1/4 mr-10">
              <p className="font-bold font-custom3 text-3xl mb-5">Rifkiyantoro</p>
              <p>Bapak Miskur dan ibu Fatonah</p>
              <p className="mt-1">Karangsari, Batur, Banjarnegara</p>
            </div>
            <div className="text-center w-1/4 ml-20">
              <p className="font-bold font-custom3 text-3xl mb-5">Zumrotun Alfiyah, Alhz</p>
              <p>Bapak Suko Raharjo dan Ibu Siti Mainah</p>
              <p className="mt-1">Pejawaran Batur Banjarnegara</p>
            </div>
          </div>
          <div>
            <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami</p>
            <p>apabila Bapak/Ibu/Saudara/i berkenan hadir</p>
            <p>untuk memberikan doa restu kepada kedua mempelai</p>
          </div>
          <div className="flex justify-center mt-10">
            <div className="sm:w-1/4 font-monserat  text-center sm:p-5 p-3 mr-4 bg-orange-200 rounded-lg hover:scale-110 transition cursor-pointer">
              <Link target="_blank" to="https://maps.app.goo.gl/ybF1BkdAhW8nxuvx5">
                <p>Tamu Undangan</p>
                <p>Rabu, Kamis</p>
                <p>18, 19 Oktober 2023</p>
                <p>Condong Campur 04/02, Pejawaran</p>
                <p>Banjarnegara</p>
                <p className="text-xl font-semibold text-orange-600">Click to see on maps</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
