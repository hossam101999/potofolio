import "./App.css";
import ExamGate from "./assets/Exam Gate.png";
import Ecommerce from "./assets/Ecommerce.png";
import Bondi from "./assets/Bondi.png";
import Elzero from "./assets/Elzero.png";
import Redux from "./assets/redux-svgrepo-com.svg";
import TypeScript from "./assets/typescript-icon-svgrepo-com.svg";
import TailwindCSS from "./assets/tailwind-css-svgrepo-com.svg";
import myPhoto from "./assets/myPhoto.png";
import ArrowDown from "./assets/arrow-down.svg";
import myCv from "./PDFs/Hossam-Salah-Khatab-CV.pdf";
import { useEffect, useState } from "react";
import { EmailForm } from "./EmailForm.jsx";
import kaspe from "./assets/kaspe.png";
function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative overflow-hidden">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-[-14px] sm:top-[0px] z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Hossam salah Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#connectMe"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Connect Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div className=" w-full md:max-w-[60%]">
              <h2 className="font-bold text-4xl">
                Hello, I'm hossam salah Hassan
              </h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  Frontend Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  I am a Front-End Developer specializing in React JS, with
                  strong skills in HTML, CSS, JavaScript, and modern React
                  tools. I also have backend experience in Node.js, Express, and
                  MongoDB. With excellent time management and a collaborative
                  spirit,
                </p>
                <a
                  href={myCv}
                  download="Hossam-Salah-Khatab-CV.pdf"
                  target="_blank"
                >
                  <button className=" px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Download resume
                  </button>
                </a>
              </div>
              <div className="text-white mt-10 ms-auto">
                <a
                  href="https://www.linkedin.com/in/hossam-salah-1ab717238/"
                  className="icon-linkedin text-3xl"
                >
                  <i className="fa-brands fa-linkedin me-5"></i>
                </a>
                <a
                  href="https://github.com/hossam101999"
                  className="icon-github text-3xl"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img
                  src={myPhoto}
                  className="relative z-10 w-[280px] m-auto sm:w-[600px] rounded-full"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Ecommerce} className="w-full h-[30vh]" />
                <h3 className="text-2xl font-semibold mt-8">E-commerce</h3>
                <p className="text-gray-400 text-sm mt-2">
                  <i>Responsive Angular App with APIs dummy</i>{" "}
                </p>
                <div className="flex justify-between gap-2 mt-12 items-end">
                  <a
                    href="https://angular-e-com-c48r.vercel.app"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                  <a
                    href="https://github.com/hossam101999/angular-E-com.git"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </a>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={ExamGate} className="w-full h-[30vh]" />
                <h3 className="text-2xl font-semibold mt-8">Exam Gate</h3>
                <p className="text-gray-400 text-sm mt-2">
                  <i>Exam Automated an Offers Application Web Responsive</i>
                </p>
                <div className="flex mt-5 gap-2">
                  <a
                    href="https://github.com/hossam101999/exam_.git"
                    target="_blank"
                    className="block w-full"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      cheackgithib
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Elzero} className="w-full h-[30vh]" />
                <h3 className="text-2xl font-semibold mt-8">ُfull-E-comerce</h3>
                <p className="text-gray-400 text-sm mt-2">
                  in this project me and my team made a full e-commerce using
                  angular and node
                </p>
                <div className="flex justify-between gap-2 mt-12 items-end">
                  <a
                    href="https://itians-ecommerce-team.vercel.app/"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                  <a
                    href="https://github.com/hossam101999/E-comerce"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Bondi} className="w-full h-[30vh]" />
                <h3 className="text-2xl font-semibold mt-8">
                  protofolio Project
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  this iss an angular protogolio
                </p>
                <div className="flex justify-between gap-2 mt-10 items-end">
                  <a
                    href="profile-in-angular.vercel.app"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                  <a
                    href="https://github.com/hossam101999/profile_in_angular.git"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1 w-50 p-20">
              <img src={kaspe} className="w-full h-[30vh]" />
              <h3 className="text-2xl font-semibold mt-8">blog page</h3>
              <p className="text-gray-400 text-sm mt-2">
                <i>Exam plog page Web Responsive by react </i>
              </p>
              <div className="flex mt-5 gap-2">
                <a
                  href="https://github.com/hossam101999/reactblog"
                  target="_blank"
                  className="block w-full"
                >
                  <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    cheackgithib
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-html5 me-3 text-[#e34f26] text-2xl"></i>
                    HTML
                  </h2>
                  <p className="text-gray-500">85%</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-css3 me-3 text-[#2965f1] text-2xl"></i>
                    CSS
                  </h2>
                  <p className="text-gray-500">85%</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-angular me-3 text-[#2965f1] text-2xl"></i>
                    Angular 
                  </h2>
                  <p className="text-gray-500">85%</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-bootstrap me-3 text-[#702cf6] text-2xl"></i>
                    Bootstrap 5
                  </h2>
                  <p className="text-gray-500">85%</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <img
                      src={TailwindCSS}
                      className="w-7 inline-block pb-2 me-3 "
                    />
                    Tailwind CSS
                  </h2>
                  <p className="text-gray-500">75%</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-js me-3 text-[#f7df1e] text-2xl"></i>
                    JavaScript
                  </h2>
                  <p className="text-gray-500">80%</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <img
                      src={TypeScript}
                      className="w-6 inline-block pb-2 me-3 "
                    />
                    TypeScript
                  </h2>
                  <p className="text-gray-500">70%</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-react me-3 text-[#00d8ff] text-2xl"></i>
                    React Js
                  </h2>
                  <p className="text-gray-500">75%</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <img src={Redux} className="w-7 inline-block pb-2 me-3 " />
                    Redux, Redux Toolkit
                  </h2>
                  <p className="text-gray-500">70%</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-git-alt me-3 text-[#fc6d26] text-2xl"></i>
                    Git
                  </h2>
                  <p className="text-gray-500">70%</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  GitHub
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Responsive Design
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  RestFull APIs
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B1 english
                </p>
              </div>
              <div>
                <p className=" font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
            </div>
          </div>
        </section>

        <EmailForm />
      </main>
      <footer>
        <div className="container m-auto flex justify-evenly px-4 py-6 align-middle">
          <div>
            <p className="text-gray-300 text-sm">hossam salah</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/hossam-salah-1ab717238/"
                  className="icon-linkedin text-3xl"
                >
                  <i className="fa-brands fa-linkedin me-0 sm:me-5"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hossam101999"
                  className="icon-github text-3xl"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-[-20px] sm:right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
