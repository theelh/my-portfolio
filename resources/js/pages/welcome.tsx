import { Head, Link } from '@inertiajs/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRightIcon, Code2Icon, DownloadIcon, FolderKeyIcon, PlusIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import AppTop from '@/components/app-top'
import { BrainScene } from '@/components/BrainScene'
import Chatbot from '@/components/chatbot'
import { Footer } from '@/components/footer'
import TerminalSection from '@/components/TerminalSection'


export default function Welcome() {
     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
     useEffect(() => {
        const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
        })

        // 🔥 VERY IMPORTANT
        ScrollTrigger.refresh()

        return () => {
        smoother.paused()
        }
    }, [])

    const techFlex  = [
    { title: "HTML", icon: "/icons/html-5.png" },
    { title: "CSS", icon: "/icons/css-file-format-symbol.png" },
    { title: "Node js ", icon: "/icons/programing.png" },
    { title: "PHP", icon: "/icons/php.png" },
    { title: "My SQL", icon: "/icons/mysql.png" },
    { title: "JAVA", icon: "/icons/java.png" },
    { title: "PYTHON", icon: "/icons/python.png" },
    { title: "Type-Script", icon: "/icons/typescript.png" },
    { title: "HugginFace AI Models", icon: "/icons/generative.png" },
    { title: "Rest API", icon: "/icons/cloud-api.png" },
    { title: "3D Three JS", icon: "/icons/3d-model.png" },
  ]
  
  
  const [isHovering, setIsHovering] = useState(Boolean)
useEffect(() => {
  const lens = document.querySelector(".lens")

  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0

  const speed = 0.12 // lower = smoother inertia

  
  const move = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  window.addEventListener("mousemove", move)

  const animate = () => {
    currentX += (mouseX - currentX) * speed
    currentY += (mouseY - currentY) * speed

    if (lens) {
      lens.setAttribute(
        "style",
        `transform: translate(${currentX}px, ${currentY}px) translate(-50%, -50%) scale(1.08);`
      )
    }

    requestAnimationFrame(animate)
  }

  animate()

  return () => {
    window.removeEventListener("mousemove", move)
  }
}, [])


const cpt = [
  { title: "BLS Services", 
    img: "/cpt/11.png", 
    description:"Oscult BTP accompagne vos projets d’ingénierie structurelle : études techniques, diagnostics, audits et expertises pour bâtiments existants. Rénovation, réhabilitation et adaptation sur mesure.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://oscult-ingenierie.ma/"},
    
  { title: "Airless Decoration", 
    img: "/cpt/2.png", 
    description:"Interior and exterior painting services for individuals and professionals. Modern techniques (airless painting, sprayed plaster) for a high-end, durable and meticulous finish.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://airlessdecoration.fr/" },

  { title: "Age d'Or Services", 
    img: "/cpt/3.png", 
    description:"Composed of a team of home care professionals, the Age d’Or agency prioritizes meeting your needs, whether they are daily or more occasional. Our team is ready to listen to you, discuss your needs, and provide the services best suited to your lifestyle.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://agedorservicesguyane.fr/"  },

  { title: "AHC Plumber", 
    img: "/cpt/4.png", 
    description:"AHC Plomberie is a company specializing in all plumbing, heating and bathroom creation work in the Rouen area.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://ahcplomberie.fr/"  },
]

interface AccordionItem {
  id: number
  title: string
  content: string
  image: string
}

const items: AccordionItem[] = [
  {
    id: 1,
    title: "Custom Web Development",
    content: "Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability.",
    image: "./img/acoo/acco4.png",
  },
  {
    id: 2,
    title: "Frontend Engineering",
    content: "Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability.",
    image: "./img/acoo/acco2.png",
  },
  {
    id: 3,
    title: "Server logic & API Development",
    content: "Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability.",
    image: "./img/acoo/acco3.png",
  },
  {
    id: 4,
    title: "Full Stack Application Development",
    content: "Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability.",
    image: "./img/acoo/acco1.png",
  },
]


const [activeId, setActiveId] = useState<number>(1)

  const activeItem = items.find(item => item.id === activeId)
  return (
    <>
    <AppTop/>
    <div
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
>
  {/* Chatbot global */}
      <Chatbot />
      <Head title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>
      {/* ✅ Background container with controlled layering */}
          <div  className="h-full fixed flex inset-0 items-end justify-end overflow-hidden z-0">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full fixed h-full object-cover"
            >
                <source src="/videos/vd-1.mp4" type="video/mp4" />
            </video>
            {/* Glass Cursor Effect */}
            <div className="lens fixed pointer-events-none z-20" />
          </div>

      {/* 🌟 FOREGROUND CONTENT */}
      <div id="smooth-wrapper">
      <div id="smooth-content" className="relative z-10 min-h-screen flex flex-col items-center pt-6 text-[#1b1b18] lg:justify-center">
        <main className="flex flex-col lg:flex-row gap-12 items-center w-full my-20 lg:my-40 h-full max-w-7xl px-6">
          <div className="w-full">
            <TerminalSection/>
          </div>
          <div className="w-full z-10 h-[40vh] sm:h-[50vh] lg:h-[70vh]">
            <BrainScene/>
          </div>
        </main>


        <main className=" w-full pt-32 h-full max-w-full bg-[#131313] font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <p className="text-[16px] text-[#7af298]">// Skills</p>
            <div className="flex flex-col lg:flex-row w-full gap-14 h-full bg-[#131313] font-mono justify-start">
                <div className="flex flex-col max-w-2xl gap-3 py-8 rounded-2xl font-mono text-white">
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-white/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Programming Languages</h1>
                          <Code2Icon className="text-[#7af298]"/>
                      </div>
                      <p className="text-sm text-gray-300">
                          PHP • Java-script • Type-script • HTML • CSS • Java • Oracle DB • SQL • PlSql
                      </p>
                  </div>
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-white/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Developer Tools</h1>
                          <Code2Icon className="text-[#7af298]"/>
                      </div>
                      <p className="text-sm text-gray-300">
                          Git • Github • Postman • API • REST APIs • Docker • Xampp • UML • Enterprise Architect
                      </p>
                  </div>
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-white/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Frameworks</h1>
                          <Code2Icon className="text-[#7af298]"/>
                      </div>
                      <p className="text-sm text-gray-300">
                          Reactjs • Tailwindcss • Laravel • Django
                      </p>
                  </div>
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-white/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Security</h1>
                          <FolderKeyIcon className="text-[#7af298]"/>
                      </div>
                      <p className="text-sm text-gray-300">
                          Linux ( Nmap/Wireshark/Metasploit ) • Networking & Protocols • VirtualBox • Docker 
                      </p>
                  </div>
                </div>
                <div className="flex flex-col max-w-2xl gap-3 py-8 rounded-2xl font-mono text-white">
                  <p className="text-md font-sans font-normal max-w-lg">
                    I thrive on solving real-world problems, turning ideas into clean, 
                    maintainable code, and learning through experimentation.  
                    You’ll find me building side projects, diving into new tech stacks, 
                    or simply exploring what’s next in the world of web development.
                  </p>
                  <a
                    href="/files/my-resum-es.pdf"
                    target="_blank"
                    className="flex mr-auto my-6 items-center font-mono gap-2 border border-[#131313] bg-[#7af298] text-[#131313] p-2 px-3">
                    Download CV
                    <DownloadIcon className="size-4"/>
                  </a>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly w-full gap-10 lg:gap-16 items-center mx-auto mt-12">
              <div className="p-7 border-b-2 border-white/25">
                <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-sans text-white font-bold">9+</h3>
                <p className="text-[16px] font-sans text-[#7af298]">Years in IT</p>
              </div>
              <div className="p-7 border-b-2 border-white/25">
                <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-sans text-white font-bold">2+</h3>
                <p className="text-[16px] font-sans text-[#7af298]">Years of Professional Experience</p>
              </div>
              <div className="p-7 border-b-2 border-white/25">
                <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-sans text-white font-bold">50+</h3>
                <p className="text-[16px] font-sans  text-[#7af298]">Completed Projects</p>
              </div>
            </div>
          </div>

          {/* ********************** */}

          <div className="max-w-340 mb-28 mt-44 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white">
              <p className="text-[16px] mt-3 text-[#7af298]">// Explore Work</p>
              <h3 className="text-[48px] font-bold max-w-lg leading-tight">
                A Showcase of My Latest Projects
              </h3>
            </div>
            <div className="flex items-center text-[#7af298] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#505559] w-[90vw]"/>
              {">"}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 font-sans gap-20 lg:gap-32 mt-12 justify-between items-center">
              <div className="flex flex-col gap-24">
                {cpt.slice(0, 2).map((project) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div key={project.title} className="flex flex-col gap-7">
                      <img src={project.img} alt={project.title} className="rounded-lg scale-100 lg:scale-[1.09] hover:scale-100 transition-all duration-700 object-cover h-64 sm:h-80 lg:h-96 w-full"/>
                      <div className="flex flex-col gap-3">
                        <h4 className="text-xl font-bold text-white">{project.title}</h4>
                        <p className="text-sm text-gray-300">{project.description}</p>
                        <div className="flex gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[14px] font-sans bg-[#2E2E2E] text-[#7af298] py-1  px-3 rounded-3xl">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex flex-col font-sans gap-24">
                {cpt.slice(2).map((project) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div key={project.title} className="flex flex-col gap-7">
                    <img src={project.img} alt={project.title} className="rounded-lg scale-100 lg:scale-[1.09] hover:scale-100 transition-all duration-700 object-cover h-64 sm:h-80 lg:h-96 w-full"/>
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                      <p className="text-sm text-gray-300">{project.description}</p>
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[14px] font-sans bg-[#2E2E2E] text-[#7af298] py-1  px-3 rounded-3xl">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  </a>
                ))}
              </div>
            </div>
          <div className="flex items-center my-24 text-[#7af298] font-semibold justify-center gap-1">
            <Link href="/projects" className="flex mx-auto items-center font-sans gap-2 border border-[#131313] bg-[#7af298] text-[#131313] p-2.5 px-7 rounded-3xl">
              View More Projects
            </Link>
          </div>
          </div>
        </main>


        <main className=" w-full  h-full max-w-full bg-[#131313] font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white">
              <p className="text-[16px] mt-3 text-[#7af298]">// Service</p>
              <h3 className="text-[48px] font-bold max-w-xl leading-tight">
                End-to-End Web Development Services 
              </h3>
            </div>
            <div className="flex items-center text-[#7af298] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#505559] w-[90vw]"/>
              {">"}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 max-w-7xl mx-auto py-16 lg:py-20 px-6">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={activeItem?.image}
                  alt={activeItem?.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
              </div>
            </div>

            {/* Accordion Section */}
            <div className="w-full font-sans lg:w-1/2 space-y-4">
              {items.map((item) => {
                const isActive = item.id === activeId

                return (
                  <div
                    key={item.id}
                    className={`border-b border-white/45 py-5 cursor-pointer transition-all duration-300 text-white`}
                    onClick={() => setActiveId(item.id)}
                  >
                    <h3 className="text-lg flex justify-between font-semibold font-sans">
                      {item.title}
                      {
                        isActive ? (
                          <p className="text-lg text-white/50 flex justify-between font-normal font-sans">
                            ( 0{item.id} )
                          </p>
                        ) : (
                          <PlusIcon className="text-[#7af298]"/>
                        )
                      }
                    </h3>

                    <div
                      className={`overflow-hidden transition-all duration-700 ${
                        isActive ? "max-h-40 mt-3" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm max-w-md opacity-80">
                        {item.content}
                      </p>
                    </div>
                    <Link href="/contact" className={`mt-4 text-[#7AF298] underline underline-offset-8 items-center gap-2 font-mono text-sm ${isActive ? "flex" : "text-[1px] mt-0 opacity-0 pointer-events-none"}`}>
                      Hire me
                      <ArrowUpRightIcon className="text-xs"/>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </main>

        {/* ***************** */}

        <main className=" w-full py-12 h-full max-w-full bg-[#191818] font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white">
              <p className="text-sm sm:text-[16px] mt-1 lg:mt-3 text-[#7af298]">
                // Process
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-bold max-w-xl leading-tight">
                My Development work Process
              </h3>
            </div>
            <div className="flex items-center text-[#7af298] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#505559] w-[90vw]"/>
              {">"}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-sans items-start gap-16 lg:gap-32 max-w-7xl mx-auto pb-20 px-6">
            <div className="pl-12">
              <h3 className="text-7xl sm:text-8xl lg:text-[158px] font-bold text-[#7af298]">01</h3>
              <p className="text-[22px] text-white font-semibold">Plan & Architect</p>
              <p className="text-sm text-gray-300 mt-4 max-w-xl">
                Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints.
              </p>
            </div>
            <div className="border-l border-white/25 pl-12">
              <h3 className="text-7xl sm:text-8xl lg:text-[158px] font-bold text-[#7af298]">02</h3>
              <p className="text-[22px] text-white font-semibold">Build & Develop</p>
              <p className="text-sm text-gray-300 mt-4 max-w-xl">
                Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure that every component—UI or API—is maintainable.
              </p>
            </div>
            <div className="border-l border-white/25 pl-12">
              <h3 className="text-7xl sm:text-8xl lg:text-[158px] font-bold text-[#7af298]">03</h3>
              <p className="text-[22px] text-white font-semibold">Launch & Support</p>
              <p className="text-sm text-gray-300 mt-4 max-w-xl">
                I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing.
              </p>
            </div>
          </div>
        </main>

        <section className="flex flex-col py-15 bg-black/40">
            <div className="relative w-full overflow-hidden">
                  <div className="pointer-events-none absolute right-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />
                    <div className="marquee">
                    {[...techFlex, ...techFlex].map((tech, index) => (
                      <div
                        key={`${tech.title}-${index}`}
                        className="flex items-center gap-4 mx-12 bg-white px-7 py-2"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.title}
                          className="h-8 w-8 object-contain"
                        />
                        <span className="text-lg font-semibold text-[#111A4A]">
                          {tech.title}
                        </span>
                      </div>
                    ))} 
                  </div>
                </div>
        </section>

        <main className=" w-full pt-12 h-full max-w-full bg-[#131313] font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white">
              <div className="flex flex-col gap-8 max-w-6xl">
                <p className="text-[16px] mt-3 text-[#7af298]">// Let's Connect</p>
                <img className="size-96 w-xl object-cover " src="./img/pre-footer.jpg" alt="" />
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="text-[48px] font-bold max-w-xl leading-tight">
                  Ready to take your idea to the next level?
                </h3>
                <Link href="/contact" className="flex mx-auto items-center font-sans gap-2 border border-[#131313] bg-[#7af298] text-[#131313] py-14 px-5 rounded-full">
                    Start Project
                </Link>
              </div>
            </div>
            
            </div>
            
             <Footer/>
        </main>
      </div>
      </div>
    </div>
    </>
  )
}
