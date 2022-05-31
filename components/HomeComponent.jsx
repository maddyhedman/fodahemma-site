import Container from "./Container";
import Image from "next/image";
import Button from "../components/Button";

const HomeComponent = ({ home }) => {
  const homePage = home[0].fields;
  const image = 'https:' + homePage.image.fields.file.url;
  console.log(image);
  return (
    <div className="bg-green py-10 h-screen">
      <Container>
        <main className="flex justify-center flex-col relative items-center pt-28">
          <div className="w-[20rem]">
            <Image src={image} height={1600} width={1000}/>
          </div>
          <h1 className="w-[40rem] absolute text-5xl font-serif text-white leading-[76px] mt-24">
            {homePage.title}
          </h1>
          <div className="flex gap-10 mt-10">
            <Button
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
