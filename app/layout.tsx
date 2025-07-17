import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Global Model United Nations | GIIS MUN - Student Diplomacy & Leadership',
  description:
    'Global Model United Nations at GIIS connects bright young minds worldwide to tackle real-world issues through diplomacy, debate, leadership, and global collaboration. Join us for immersive UN simulations, skill-building workshops, and impactful international relations education.',
  generator: 'GIIS',
  keywords: [
    'Model United Nations',
    'GIIS MUN',
    'Global MUN',
    'Student Leadership',
    'GIIS',
    'Global Indian International School',
    'UN Simulation',
    'Student Diplomacy',
    'International Relations',
    'MUN Conference',
    'Youth Leadership',
    'Debate and Diplomacy',
    'Global Education',
    'Crisis Simulation',
    'Public Speaking',
    'Negotiation Skills',
    'MUN Training',
    'Global Citizenship',
    'Political Science Education',
    'High School MUN',
    'International Model UN',
    'MUN Awards',
    'Global Issues',
    'Conflict Resolution',
    'Civic Engagement',
  ],
  authors: [
    { name: 'GIIS MUN Team', url: 'https://giismun.org' },
    { name: 'Global Indian International School', url: 'https://giisglobal.org' }
  ],
  creator: 'Global Indian International School',
  publisher: 'GIIS',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  themeColor: '#ffffff',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Global Model United Nations | GIIS MUN - Empowering Future Leaders',
    description:
      'GIIS MUN empowers students globally to experience diplomacy and leadership through engaging, high-impact MUN simulations. Develop public speaking, negotiation, and critical thinking skills while connecting with peers worldwide.',
    url: 'https://giismun.org',
    siteName: 'GIIS MUN',
    images: [
      {
        url: 'https://giismun.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GIIS MUN Banner - Global Model United Nations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Model United Nations | GIIS MUN',
    description:
      'Experience world-class student diplomacy and leadership at GIIS MUN. Register now to engage in impactful UN simulations and develop skills for the global stage.',
    images: ['https://giismun.org/og-image.jpg'],
    creator: '@giisglobal',
    site: '@giisglobal',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
