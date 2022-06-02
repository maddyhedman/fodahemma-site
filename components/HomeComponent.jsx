import Container from "./Container";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

const HomeComponent = ({ home }) => {
  const homePage = home[0].fields;
  const image = "https:" + homePage.image.fields.file.url;
  const alt = homePage.image.fields.description;

  return (
    <div className="bg-green py-10 h-screen">
      <Container>
        <main className="flex justify-center flex-col relative items-center">
          <div className="w-3/4 lg:w-1/4 md:w-1/3">
            <Image src={image} height={1600} width={1000} alt={alt} />
          </div>

          <h1 className="md:w-3/4 text-center absolute md:text-5xl text-3xl font-serif text-white lg:leading-[76px] -mt-72">
            {homePage.title}
          </h1>

          <div className="flex gap-10 mt-10 flex-wrap justify-center">
            <Link href="/barnmorskor">
              <a>
                <Button homeButtonTitle={homePage.ctaLeft.fields.title} />
              </a>
            </Link>
            <Link href="qanda">
              <a>
                <Button homeButtonTitle={homePage.ctaRight.fields.title} />
              </a>
            </Link>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default HomeComponent;
