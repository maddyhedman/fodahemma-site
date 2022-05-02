import Link from "next/link"
import Container from "./Container"
import Dropwdown from "./DropdownComponent"

const NavBar = () => {
return (
    <div className="bg-green h-28 text-[#ffffff] py-10">
        <Container>
            <nav className="grid grid-cols-2">
                <div>
                    <h1 className="text-3xl font-serif">
                        <Link href="/">Föda Hemma</Link>
                    </h1>
                </div>
                <div className="">
                    <ul className="lg:flex justify-end gap-24 hidden">
                        <li><Link href="/barnmorskor">Barnmorskor</Link></li>
                        <li><Link href="/qanda">Q&A</Link></li>
                    </ul>
                    <Dropwdown />
                </div>
            </nav>
        </Container>
    </div>
)
}

export default NavBar