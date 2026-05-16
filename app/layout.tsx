
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Resume Builder by Pervez Khan Afridi',
  description: 'Create professional resumes instantly - Mobile friendly and print ready',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}