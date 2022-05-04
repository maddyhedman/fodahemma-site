import Container from "./Container";
import Image from "next/image";
import babyfeet from "../public/images/babyfeet.jpg";
import Button from "../components/Button";

const HomeComponent = ({ home }) => {
  const homePage = home[0].fields;
  console.log("ctaLeft:", homePage.ctaLeft.fields.title);
  return (
    <div className="bg-green py-10 h-screen">
      <Container>
        <main className="flex justify-center flex-col relative items-center pt-28">
          <div className="w-[20rem]">
            <Image src={babyfeet} />
          </div>
          <h1 className="w-[40rem] absolute text-5xl font-serif text-white">
            {homePage.title}
          </h1>
          <div className="flex justify-between w-35">
            <Button
              className="mr-10"
              homeButtonTitle={homePage.ctaLeft.fields.title}
            />
            <Button homeButtonTitle={homePage.ctaRight.fields.title} />
          </div>
        </main>
      </Container>
    </div>
  );
};

export default HomeComponent;
