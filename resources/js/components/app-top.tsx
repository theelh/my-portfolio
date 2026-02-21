import { Link } from "@inertiajs/react"
import i18next from "i18next"
import { DownloadIcon, Menu, X } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import AppLogo from "./app-logo"

interface NavItem {
  title: string
  href: string
}

const AppTop: React.FC = () => {
  const isRTL: boolean = i18next.language === "ar"
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const lastScrollY = useRef(0)
  const currentPath = window.location.pathname

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction =
        currentScrollY > lastScrollY.current ? "down" : "up"

      setIsScrolled(currentScrollY > 20)

      if (direction === "down" && currentScrollY > 100) {
        setIsVisible(false)
      }

      if (direction === "up") {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems: NavItem[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Project", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-7xl
        rounded-3xl
        transition-all duration-500 ease-out
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0"
        }
        ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-[#7af298]/30"
            : "bg-transparent"
        }
      `}
    >
      <div className="px-6">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <AppLogo />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all
                  ${
                    currentPath === item.href
                      ? "text-[#7AF298]"
                      : "text-white"
                  }
                  hover:text-[#7AF298]
                `}
              >
                {item.title}

                {currentPath === item.href && (
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-10 -translate-x-1/2 bg-[#7AF298]" />
                )}
              </Link>
            ))}
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:flex items-center">
            <a
                href="/files/my-resum-es.pdf"
                target="_blank"
                className="flex items-center gap-2 border border-[#c0c0c0] bg-[#7af298] text-black px-4 py-2 rounded-md font-mono text-sm">
              Download CV
              <DownloadIcon size={16} />
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 pt-2 bg-black/90 backdrop-blur-xl rounded-b-3xl">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium transition-colors
                ${
                  currentPath === item.href
                    ? "text-[#7AF298]"
                    : "text-white"
                }
                hover:text-[#7AF298]
              `}
            >
              {item.title}
            </Link>
          ))}

          <a
            href="/files/my-resum-es.pdf"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 border border-[#c0c0c0] bg-[#7af298] text-black px-4 py-2 rounded-md font-mono text-sm mt-4"
          >
            Download CV
            <DownloadIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default AppTop
