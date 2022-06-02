import Link from "next/link";
import Container from "./Container";
import Dropwdown from "./DropdownComponent";
import { useRouter } from 'next/router';


const NavBar = () => {
  const router = useRouter();
  console.log("pathname:", router.pathname);
  return (
    <div className="bg-green h-28 text-white py-10">
      <Container>
        <nav className="grid grid-cols-2">
          <div className="">
            <h1 className="md:text-3xl text-xl font-serif">
              <Link href="/">Föda Hemma</Link>
            </h1>
          </div>
            <div className="flex justify-end">
              <ul className="lg:flex justify-end gap-24 hidden">
                <li className="hover_effect">
                  <a className={`${router.pathname === "/barnmorskor" ? "text-beige" : ""}`}>
                    <Link href="/barnmorskor">Barnmorskor</Link>
                  </a>
                </li>
                <li className="hover_effect">
                  <a className={`${router.pathname === "/qanda" ? "text-beige" : ""}`}>
                  <Link href="/qanda" >Q&A</Link>
                  </a>
                </li>
              </ul>
              <Dropwdown />
            </div>
        </nav>
      </Container> 
     
    </div>
  );
};

export default NavBar;
