import Container from "./Container";
import { TbPhone } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { MdOutlinePlace } from "react-icons/md";


const MidwifeComponent = ({ midwife }) => {
  return (
    <Container>
      <div className="">
        <h1 className="font-serif text-black text-center text-5xl md:pt-10 pt-6">
          {midwife.title}
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-5  md:py-20 py-5 md:mb-36  ">
          {midwife &&
            midwife?.barnmorska?.map((midwife, index) => (

              <div
                key={index}
                className="midwife-container flex flex-col items-center h-80 md:w-84 md:px-20 justify-center"
              >
                <h2 className="font-serif  text-2xl pb-5 break-normal text-center">
                  {midwife.fields.name}
                </h2>

                {midwife.fields.phone && (
                  <a className="flex items-center gap-2" href="tel:+46">
                    {" "}
                    <TbPhone /> +46 {midwife.fields.phone}
                  </a>
                )}
                {midwife.fields.website && (
                  <a
                    className="flex gap-2 items-center"
                    href={"http://" + midwife.fields.website}
                    target="_blank"
                  >
                    {" "}
                    <TbWorld />
                    {midwife.fields.website}
                  </a>
                )}
                {midwife.fields.email && (
                  <p className="flex items-center gap-2">
                    {" "}
                    <TbMail />
                    {midwife.fields.email}
                  </p>
                )}
                {midwife.fields.county && (
                  <p className="font-serif flex items-center gap-2 ">
                    <MdOutlinePlace />
                    {midwife.fields.county}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default MidwifeComponent;
