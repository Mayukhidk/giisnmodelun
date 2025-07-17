"use client";
import { Home, Info, Users, Calendar, FileText } from 'lucide-react'
import { NavBar } from './tubelight-navbar'

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#Home', icon: Home },
    { name: 'About', url: '#About', icon: Info },               // Info icon for About section
    { name: 'Committees', url: '#Committees', icon: Users },    // Users icon for Committees (groups)
    { name: 'Itinerary', url: '#Timeline', icon: Calendar },    // Calendar icon for Itinerary/Timeline
    { name: 'Secretariat', url: '#sec', icon: FileText }        // FileText is good for Secretariat (documents)
  ]

  return <NavBar items={navItems} />
}
