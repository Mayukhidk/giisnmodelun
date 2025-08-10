import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Global Model United Nations | GIIS MUN - Student Diplomacy & Leadership',
  description:
    'Join the Global Model United Nations at GIIS for an unparalleled experience in student diplomacy, leadership, and international relations. Participate in authentic UN simulations, develop public speaking and negotiation skills, and connect with future leaders from around the world. GIIS MUN offers workshops, awards, and opportunities for high school students to engage in global issues and civic engagement.',
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
    'Student Conferences',
    'Leadership Development',
    'International Education',
    'Future Leaders',
    'Global Networking',
    'Student Empowerment',
    'Educational Conference',
    'Youth Empowerment',
    'Global Collaboration',
    'Skill Building',
    'Debate Competition',
    'International Students',
    'Student Workshops',
    'UN Agenda',
    'Sustainable Development Goals',
    'SDGs',
    'Global Awareness',
    'Cultural Exchange',
    'Academic Excellence',
    'Student Initiatives',
    'Leadership Skills',
    'Global Community',
    'Youth Conference',
    'Student Engagement',
    'International Networking',
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
      'Experience the GIIS Model United Nations: a global platform for students to develop diplomacy, leadership, and public speaking skills. Join international peers, participate in UN simulations, and become a future leader at GIIS MUN.',
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
    site: '@giismun',
    creator: '@giismun',
    title: 'Global Model United Nations | GIIS MUN - Student Diplomacy & Leadership',
    description:
      'Join GIIS MUN for international Model United Nations simulations, leadership development, and global networking. Empowering students to become future leaders.',
    images: ['https://giismun.org/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  alternates: {
    canonical: 'https://giismun.org',
    languages: {
      'en': 'https://giismun.org',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" />
      </head>
      <body>{children}</body>
    </html>
  )
}
