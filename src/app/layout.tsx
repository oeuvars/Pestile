import type { Metadata } from 'next';
import './globals.css';
import Provider from './_trpc/provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Pestile | Flight Booking with Convinience',
  description: 'Book Your Flight in 2 minutes with three swipes.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body>
            <Provider>
              {children}
            </Provider>
            <Toaster />
        </body>
      </html>
  )
}
