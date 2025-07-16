"use client"; 

import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "../components/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#Home', icon: Home },
    { name: 'About', url: '#About', icon: User },
    { name: 'Committees', url: '#Committees', icon: Briefcase },
    { name: 'Itenary', url: '#Timeline', icon: Briefcase },
    { name: 'Secratriat', url: '#sec', icon: FileText }
  ]

  return <NavBar items={navItems} />
}
