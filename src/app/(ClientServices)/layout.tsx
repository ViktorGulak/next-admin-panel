
import Header from "@/components/header/Header"
import Image from 'next/image'
import logo from "../../assets/logo.png"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header>
          <section className="navbar-section">
            <Image src={logo} alt="Logo" height={45} />
          </section>
        </Header>
        <main className="content">
            {children}
        </main>
    </>
  );
}