// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume Builder by Pervez Khan Afridi',
  description: 'Create professional resumes instantly with our advanced builder. Perfect for students and staff.',
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
      </head>
      <body>{children}</body>
    </html>
  );
}