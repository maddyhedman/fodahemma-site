import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-green h-28 text-[#ffffff] py-10">
      <Container>
        <div className="flex flex-col items-center ">
          <h1 className="text-3xl font-serif">
            <Link href="/">Föda Hemma</Link>
          </h1>
        </div>
        <div className="flex flex-col ">
          <p className="text-l text-center ">Amondi & Hedman ©</p>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
