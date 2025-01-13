"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Code, FolderGit2 } from "lucide-react"
import { cn } from "../../lib/utils"

export function NavBar({ className }) {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "people", "tech", "projects"]
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActive(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const items = [
    {
      name: "Home",
      href: "#home",
      icon: Home,
      id: "home"
    },
    {
      name: "People",
      href: "#people",
      icon: User,
      id: "people"
    },
    {
      name: "Tech",
      href: "#tech",
      icon: Code,
      id: "tech"
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FolderGit2,
      id: "projects"
    }
  ]

  return (
    <nav className={cn("fixed bottom-4 md:top-4 left-1/2 -translate-x-1/2 z-[100] w-[90%] md:w-auto", className)}>
      <div className="relative flex items-center justify-between md:justify-start gap-2 md:gap-4 px-3 md:px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-black/75 backdrop-blur-md">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "relative px-2 md:px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center justify-center",
              active === item.id && "text-gray-900 dark:text-white"
            )}
            onClick={() => setActive(item.id)}
          >
            <span className="relative z-10 block md:hidden">
              <item.icon size={24} />
            </span>
            <span className="relative z-10 hidden md:block">{item.name}</span>
            {active === item.id && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full -z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 dark:bg-blue-400 rounded-t-full">
                  <div className="absolute w-12 h-6 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </a>
        ))}
      </div>
    </nav>
  )
} 