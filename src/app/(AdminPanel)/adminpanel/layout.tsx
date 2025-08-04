
import Header from "@/components/header/Header"
import Avatar from "@/components/avatar/Avatar"
import Image from 'next/image'
import logo from "@/assets/logo.png"
import Sidebar from "@/components/sidebar/Sidebar"
export default function AdminPanelLayout({
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
          <section className="navbar-section mx-2">
            <Avatar/>
          </section> 
        </Header>
        <main className="adm-content">
          <Sidebar/>
            {children}
        </main>
    </>
  );
}