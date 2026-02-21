import { Head, Link } from '@inertiajs/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from "gsap/SplitText"
import { ArrowUpRightIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import AppTop from '@/components/app-top'
import Chatbot from '@/components/chatbot'
import ZoomScrollImage from '@/components/FlipGallery'
import { Footer } from '@/components/footer'


gsap.registerPlugin(ScrollTrigger, SplitText)
export default function About() {
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

  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!wrapperRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(".split", { opacity: 1 })

      document.fonts.ready.then(() => {
        const containers = gsap.utils.toArray<HTMLDivElement>(".container")

        containers.forEach((container) => {
          const texts = container.querySelectorAll(".split")

texts.forEach((text) => {
  SplitText.create(text, {
    type: "words,lines",
    mask: "lines",
    linesClass: "line",
    autoSplit: true,
    onSplit: (instance: any) => {
      return gsap.from(instance.lines, {
        yPercent: 120,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
    },
  })
})
        })
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  const text = "Creating, Exploring & Enjoying Every Single Day"
  const text2 = "Life for me is about balance — doing what I love, staying curious, and finding joy in both the small wins and big milestones."



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
            {/* <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full fixed h-full object-cover"
            >
                <source src="/videos/vd-1.mp4" type="video/mp4" />
            </video> */}
            <img className="w-full fixed h-full object-cover" src="./img/about/about2.png" alt="about-bg" />
            {/* Glass Cursor Effect */}
            <div className="lens fixed pointer-events-none z-20" />
          </div>

      {/* 🌟 FOREGROUND CONTENT */}
      <div id="smooth-wrapper">
      <div id="smooth-content" className="relative z-10 min-h-screen flex flex-col items-center pt-6 text-[#1b1b18] lg:justify-center">
        <main className="flex flex-col font-sans text-center items-center w-full my-20 lg:my-40 h-full max-w-7xl px-6">
            <p className="text-[16px] text-[#7af298]">// Hello World</p>
            <h1 className="lg:text-[72px] text-[42px] text-white font-semibold max-w-xl lg:leading-20">I'm a Full Stack Developer</h1>
            <ZoomScrollImage/>
            <p className="lg:text-[24px] text-lg text-white font-sans font-semibold max-w-2xl mt-9">
               <span className="text-[#7AF298]">{'<p>'}</span> I CRAFT FAST, SCALABLE, AND <span className="text-[#7AF298]">USER-FRIENDLY WEB</span> APPLICATIONS WITH MODERN JAVASCRIPT FRAMEWORKS — COMBINING REACT ON THE FRONTEND WITH ROBUST <span className="text-[#7AF298]">SERVER-SIDE SOLUTIONS</span> USING NODE.JS. <span className="text-[#7AF298]">{'</p>'}</span>
            </p>
            <p className="text-md text-gray-400 max-w-2xl">
              I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning through experimentation.  You’ll find me building side projects, diving into new tech stacks, or simply exploring web development.
            </p>
            <a
                href="/files/my-resum-es.pdf"
                target="_blank"
                className="flex items-center gap-2 border mt-9 border-[#c0c0c0] bg-[#7af298] text-black px-7 py-2 rounded-4xl font-sans text-md font-semibold">
               My Resume
            </a>
        </main>


        <main className=" w-full h-full max-w-full bg-[#191818] font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div
              ref={wrapperRef}
              className="flex flex-col items-center justify-center"
            >
              {[1].map((i) => (
                <div key={i} className="container font-sans lg:w-[35vw] my-20">

                  <h2 className="split leading-tight text-center text-[32px] lg:text-[48px] font-semibold text-white will-change-transform opacity-0">
                    {text}
                  </h2>

                  <p className="split text-center text-md text-white/70 mt-6 opacity-0">
                    {text2}
                  </p>

                </div>
              ))}
            </div>
          </div>
        </main>

        {/* ***************** */}

        <main className=" w-full py-12 h-full max-w-full bg-[#191818] font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white">
              <p className="text-sm sm:text-[16px] mt-1 lg:mt-3 text-[#7af298]">
                // Experience
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-bold max-w-xl leading-tight">
                Professional Working Experience
              </h3>
            </div>
            <div className="flex items-center text-[#7af298] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#505559] w-[90vw]"/>
              {">"}
            </div>
            <div className="grid grid-cols-1 font-sans md:grid-cols-2 lg:grid-cols-2 items-start gap-16 lg:gap-10 max-w-7xl py-20 px-6">
              <div className="max-w-md left-0 w-full lg:h-76 flex flex-col justify-start">
                <img src="./img/about/about3.jpg" alt="about3" />
              </div>
              <div className="lg:flex w-full lg:max-w-380 max-w-full flex flex-col items-start  lg:justify-start">
                <div className="flex items-center lg:gap-4 py-5 border-b border-white/30 justify-between w-full">
                  <div>
                    <h3 className="text-[16px] text-white">Digital media mobile</h3>
                    <p className="text-[#7af298] text-sm mt-1">2025 - Present</p>
                  </div>
                  <h3 className="text-[16px] text-end text-[#b5b5b5]">Freelance Web Developer</h3>
                </div>
                <div className="flex items-center gap-4 py-5 border-b border-white/30 justify-between w-full">
                  <div>
                    <h3 className="text-[16px] text-white">Digital media mobile</h3>
                    <p className="text-[#7af298] text-sm mt-1">2024 - 2025</p>
                  </div>
                  <h3 className="text-[16px] text-end text-[#b5b5b5]">Web developer internship</h3>
                </div>
                <p className="text-sm text-gray-300 mt-4 max-w-xl">
                  I have a strong background in web development, with experience in both frontend and backend technologies. I have worked on various projects, including e-commerce websites, content management systems, and custom web applications. My expertise includes HTML, CSS, JavaScript, React, Node.js, and database management. I am passionate about creating efficient and user-friendly web solutions that meet the needs of clients and users alike.
                </p>
                <Link href="/contact" className="mt-4 flex text-[#7AF298] border px-5 py-2 rounded-3xl transition-all duration-700 hover:rotate-x-180 hover:bg-[#7AF298] hover:text-[#191818] border-[#7AF298] items-center gap-2 font-mono text-sm ">
                  Hire me
                  <ArrowUpRightIcon className="text-xs"/>
                </Link>
              </div>
            </div>
          </div>
        </main>
        {/* ***************** */}

        <main className=" w-full pt-44 py-12 h-full max-w-full bg-[#191818] font-mono justify-center">
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
