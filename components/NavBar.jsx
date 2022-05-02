import Link from "next/link"
import Container from "./Container"


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
                <div>
                    <ul className="flex justify-end gap-24">
                        <li><Link href="/barnmorskor">Barnmorskor</Link></li>
                        <li><Link href="/qanda">Q&A</Link></li>
                    </ul>
                </div>
            </nav>
        </Container>
    </div>
)
}

export default NavBar