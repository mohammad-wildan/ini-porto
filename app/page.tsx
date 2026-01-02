import Image from "next/image";

export default function Home() {
  return (
 <div>
  <div className="bg-[url('/bg.png')] h-screen w-full bg-center bg-cover flex">
  <div className="mx-auto mt-70">
  <div className="w-200 border-sky-200 p-10 border-5 rounded-4xl bg-white shadow-xl h-80">
  <h1 className=" text-6xl font-black text-sky-600">Hello Everyone</h1>
  <h2 className="text-5xl font-black text-sky-600">Iam Wildan</h2>
  <p className="text-sky-500 font-bold text-1xl mt-2">A 17 year old student from Kediri, currently studying Software Engineering at SMK Telkom Malang. Focused on frontend development, with experience in graphic design gained through extracurricular activities, school assignments,
     and various creative, modern, and responsive web projects, emphasizing user experience, problem solving, teamwork, and continuous skill improvement.</p>
  </div>
  </div>
  <div className="mx-auto max-w-150">
  <img className="w-full " src="/foto3.png" alt="" />
  </div>
  </div>

  <div className="bg-sky-200 w-full p-5 pb-10">
    <h1 className="text-7xl font-bold text-white p-5">My Experience</h1>
    <div className="flex space-x-10">
      <div className="bg-white w-1/3 p-5 rounded-4xl border-5 border-sky-600">
        <div className="flex">
        <img className="bg-sky-300 p-3 w-16 rounded-2xl" src="/logo.png" alt="" />
        <h1 className="text-3xl font-bold text-sky-600 my-auto ml-3">Business Idea Development</h1>
        </div>
        <p className="text-sky-500 font-semibold mt-2">Contributed to a school business project by developing innovative business ideas, acting as a hipster and data researcher, analyzing market references, and delivering a well-structured pitch deck ready for professional presentation.</p>
      </div>
      <div className="bg-white w-1/3 p-5 rounded-4xl border-5 border-sky-600">
        <div className="flex">
        <img className="bg-sky-300 p-3 w-16 rounded-2xl" src="/logo1.png" alt="" />
        <h1 className="text-3xl font-bold text-sky-600 my-auto ml-3">University Design Competition</h1>
        </div>
        <p className="text-sky-500 font-semibold mt-2">Won a digital poster graphic design competition held by Universitas Negeri Malang, organized by Bumantara Student Press Organization and the Student Executive Board of the Faculty of Social Sciences successfully.</p>
      </div>
      <div className="bg-white w-1/3 p-5 rounded-4xl border-5 border-sky-600">
        <div className="flex">
        <img className="bg-sky-300 p-3 w-16 rounded-2xl" src="/logo2.png" alt="" />
        <h1 className="text-3xl font-bold text-sky-600 my-auto ml-3">Co-Curricular Involvement</h1>
        </div>
        <p className="text-sky-500 font-semibold mt-2">Contributed to a school co-curricular program, Moklet Serve, by serving as an event organizer, speaker, and designer, actively supporting program planning, public communication, teamwork, and creative visual development throughout the activity.</p>
      </div>
    </div>
  </div>
    
  <div className="bg-[url('/bg2.png')] h-screen w-full bg-center bg-cover flex">
  <div className="my-auto mx-auto">
    <img className="w-170 rounded-4xl" src="foto2.png" alt="" />
  </div>
    <div className="my-auto mx-auto">
    <div className="flex space-x-3 mb-10">
    <div className="bg-white w-125 p-4 border-sky-200 border-5 rounded-4xl shadow-xl">
      <h1 className="text-4xl font-bold text-sky-600">Data Diri</h1>
      <p className="text-2xl font-bold text-sky-500">Nama: Mohammad Wildan Syaiful Amri</p>
      <p className="text-2xl font-bold text-sky-500">Umur: 17 (tujuh belas)</p>
      <p className="text-2xl font-bold text-sky-500">Kota asal: Kediri</p>
    </div>
    <div className="bg-white w-125 p-4 border-sky-200 border-5 rounded-4xl shadow-xl">
      <h1 className="text-4xl font-bold text-sky-600">Contact</h1>
      <p className="text-2xl font-bold text-sky-500">Gmail: nadliw838@gmail.com</p>
      <p className="text-2xl font-bold text-sky-500">Whatsapp: +62 822-3112-5391</p>
      <p className="text-2xl font-bold text-sky-500">Intagram: wildan.amri_</p>
    </div>
    </div>
    <div className="bg-white w-250 p-4 border-sky-200 border-5 rounded-4xl shadow-xl mx-auto">
      <h1 className="text-center text-5xl font-bold text-sky-600 mb-5">Riwayat Pendidikan</h1>
      <div className="flex mx-auto">
      <div className="w-1/3">
      <img className="w-35 mx-auto" src="sekolah.png" alt="" />
      <h1 className="text-3xl font-bold text-sky-600 text-center">SDI Arrobithoh</h1>
      <p className="font-bold text-sky-500 text-center text-2xl">2015-2021</p>
      </div>
      <div className="w-1/3">
      <img className="w-35 mx-auto" src="sekolah1.png" alt="" />
      <h1 className="text-3xl font-bold text-sky-600 text-center">MTSN 1 Kediri</h1>
      <p className="font-bold text-sky-500 text-center text-2xl">2021-2024</p>
      </div>
      <div className="w-1/3">
      <img className="w-35 mx-auto" src="sekolah3.png" alt="" />
      <h1 className="text-3xl font-bold text-sky-600 text-center">SMK Telkom Malang</h1>
      <p className="font-bold text-sky-500 text-center text-2xl">2024-2026</p>
      </div>
      </div>
    </div>
    </div>
  </div>

  <div className="bg-[url('/bg3png.png')] min-h-screen w-full bg-center bg-cover px-6 py-16">
  
  <h1 className="text-white font-bold text-5xl md:text-7xl text-center mb-16">
    Some Of My Project
  </h1>

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center lg:text-left">
        UI/UX Design
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <img
          className="w-full rounded-2xl p-2 bg-white shadow-xl" src="gambar2.png" alt=""
        />
        <img className="w-full rounded-2xl p-2 bg-white shadow-xl" src="gambar1.png" alt=""
        />
      </div>
    </div>

    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center lg:text-left">
        Design Graphic
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <img className="w-full rounded-2xl p-2 bg-white shadow-xl" src="Instagram post - 1.png" alt="" />
        <img className="w-full rounded-2xl p-2 bg-white shadow-xl" src="Instagram post - 2.png" alt="" />
        <img className="w-full rounded-2xl p-2 bg-white shadow-xl" src="Instagram post - 3.png" alt="" />
        <img className="w-full rounded-2xl p-2 bg-white shadow-xl" src="yukino.png" alt="" />
      </div>
    </div>

  </div>
</div>

 </div>
  );
}
