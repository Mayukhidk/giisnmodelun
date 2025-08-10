import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GIIS MUN | Global Model United Nations',
  description:
    'Join GIIS MUN for authentic UN simulations, public speaking, and leadership training. Connect with international students, debate global issues, and become a future leader.',
  generator: 'GIIS',
keywords: [
  // Core MUN terms
  'Model United Nations',
  'MUN Conference',
  'International Model United Nations',
  'GIIS MUN',
  'Global MUN',
  'UN Simulation',
  'MUN Debate',
  'MUN Training',
  'Crisis Simulation',
  'Diplomacy Simulation',

  // Skills & benefits
  'Student Diplomacy',
  'International Relations',
  'Youth Leadership',
  'Public Speaking',
  'Debate Competition',
  'Negotiation Skills',
  'Global Citizenship',
  'Conflict Resolution',
  'Leadership Development',
  'Global Networking',

  // Education & academic focus
  'Student Leadership',
  'Political Science Education',
  'International Education',
  'Educational Conference',
  'Youth Empowerment',
  'Academic Excellence',
  'Skill Building',
  'Global Awareness',
  'Cultural Exchange',
  'SDGs',
  'Sustainable Development Goals',

  // Target audience
  'High School MUN',
  'Student Conferences',
  'Youth Conference',
  'International Students',
  'Student Engagement',
  'Future Leaders',
  'Global Collaboration',
  'Student Initiatives',

  // Location & branding
  'GIIS Noida',
  'Global Indian International School',
  'MUN India',
  'Model UN India',
  'MUN Delhi NCR',
  'MUN Noida',
]
  authors: [
    { name: 'Mayukh', url: 'https://giisnmun.com' },
    { name: 'Global Indian International School', url: 'https://giisnmun.com' }
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
    title: 'GIIS MUN | Global Model United Nations - Student Diplomacy & Leadership',
    description:
      'Experience GIIS MUN: a world-class platform for student diplomacy, debate, and leadership. Join peers worldwide and develop real-world skills.',
    url: 'https://giisnmun.com',
    siteName: 'GIIS MUN',
    images: [
      {
        url: '/Screenshot-2025-08-10.png',
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
    title: 'GIIS MUN | Global Model United Nations - Student Diplomacy & Leadership',
    description:
      'Join GIIS MUN for UN simulations, leadership training, and global networking. Empowering students to solve real-world issues.',
    images: [
      {
        url: '/Screenshot-2025-08-10.png',
        alt: 'GIIS MUN Banner - Global Model United Nations',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  alternates: {
    canonical: 'https://giisnmun.com',
    languages: {
      en: 'https://giisnmun.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ACTUAL_CODE_HERE" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Global Indian International School - MUN',
              url: 'https://giisnmun.com',
              logo: 'https://giisnmun.com/favicon.ico',
              sameAs: [
                'https://twitter.com/giismun',
                'https://instagram.com/giismun',
              ],
              description:
                'GIIS MUN offers global Model United Nations conferences, leadership training, and public speaking opportunities for high school students.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Noida',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
