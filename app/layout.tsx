import Footer from './components/footer';
import './globals.css';
import Navigation from './navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="flex h-screen flex-col">
          <div className="py-4 px-2">
            <Navigation />
          </div>
          <main className="grow p-8">{children}</main>
          <div className="">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
