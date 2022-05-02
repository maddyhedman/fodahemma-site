import Footer from './Footer'
import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <div className="bg-black">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}