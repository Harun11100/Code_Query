import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import React from "react";
import {Inter,Space_Grotesk} from 'next/font/google'

const inter=Inter({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700']
  ,
  variable:'--font-inter'
})

const spaceGrotesk=Space_Grotesk({
  subsets:['latin'],
  weight:['300','400','500','600','700']
  ,
  variable:'--font-spaceGrotesk'
})


export const metadata: Metadata = {
  icons:{
    icon:'/assets/images/site-logo.svg'
  },
  title: "CodeQuery",
  description: "A comunity driven platform for asking and answer questions ",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
         className={`${inter.variable} ${spaceGrotesk.variable}`}
        >
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

