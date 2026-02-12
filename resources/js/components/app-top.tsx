import { Link } from '@inertiajs/react'
import i18next from 'i18next'; 
import i18n from 'i18next-browser-languagedetector';
import { DownloadIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import AppLogo from './app-logo';

interface NavItem {
  title: string
  href: string
}


const AppTop: React.FC<{ canRegister?: boolean }> = () => {
  const isRTL: boolean = i18next.language === 'ar'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const currentPath = window.location.pathname

  // const lastScrollY = useRef<number>(0)

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

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])




  const navItems: NavItem[] = [
    { title: "Home", href: '/' },
    { title: "About", href: '/welcservices' },
    { title: "Project", href: '/welcAbout' },
    { title: "Contact", href: '/welccontact' },
  ]

  return (
    <header
  dir={isRTL ? 'rtl' : 'ltr'}
  className={`
    fixed top-4 left-1/2 z-50
    -translate-x-1/2
    w-full max-w-7xl lg:max-w-7xl
    border-white/45 shadow-md shadow-white/20
    rounded-3xl text-sm bg-black/80 backdrop-blur-xs
    transition-all duration-500 ease-out
    ${
      isVisible
        ? 'translate-y-0 opacity-100'
        : '-translate-y-70 opacity-0'
    }
    ${
      isScrolled
        ? `
          bg-black/80 backdrop-blur-xl
          border border-white
          border-spacing-7
          shadow-xl shadow-[#7af298]/50
          before:absolute before:inset-0 before:rounded-3xl
          before:border before:border-transparent
          before:bg-linear-to-r
          before:from-[#7af298]/20
          before:via-[#11001c]/20
          before:to-[#7af298]/20
          before:-z-10
        `
        : 'bg-transparent border-transparent shadow-none'
    }
  `}
>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <AppLogo />
          </Link>

          {/* Main navigation */}
          <nav className="flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-4 py-2 text-sm font-medium transition-all
                  ${
                    currentPath === item.href
                      ? 'text-[#c0c0c0] font-mono'
                      : isScrolled
                        ? 'text-white'
                        : 'text-white'
                  }
                  hover:text-[#67f767]
                `}
              >
                {item.title}

                {currentPath === item.href && (
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full border-b border-[#DDA0DDFF] bg-[#c0c0c0] shadow-sm shadow-[#DDA0DDFF] " />
                )}
              </Link>
            ))}
          </nav>

          {/* Auth actions */}
          <nav className="flex items-center justify-end gap-4">
            <Link className="flex items-center font-mono gap-2 border border-[#c0c0c0] bg-[#7af298] text-[#131313] p-2 px-3">
            Download CV
            <DownloadIcon className="size-4"/>
            </Link>
          </nav>

        </div>
      </div>
    </header>

    
  )
}

export default AppTop
