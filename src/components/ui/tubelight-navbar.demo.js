"use client";

import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "./tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'People', url: '#people', icon: User },
    { name: 'Tech', url: '#tech', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: FileText }
  ]

  return <NavBar items={navItems} />
} 