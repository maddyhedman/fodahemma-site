import Container from "./Container";
import { TbPhone } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { TbMail } from "react-icons/tb";

const MidwifeComponent = ({ midwife }) => {
  return (
    <Container>
      <div className="">
        <h1 className="font-serif text-black text-center text-5xl pt-10">
          {midwife.title}
        </h1>
        <div className="grid lg:grid-cols-3 gap-x-5 gap-y-5 py-20  md:grid-cols-2 mb-36">
          {midwife &&
            midwife?.barnmorska?.map((midwife, index) => (
              <div key={index} className="midwife-container h-80 w-84 px-10">
                <h1 className="font-serif pt-20 text-2xl pb-5">
                  {midwife.fields.name}
                </h1>

                {midwife.fields.phone && (
                  <a
                    className="font-serif flex items-center gap-2"
                    href="tel:+46"
                  >
                    {" "}
                    <TbPhone /> +46 {midwife.fields.phone}
                  </a>
                )}
                {midwife.fields.website && (
                  <a
                    className="font-serif flex gap-2 items-center"
                    href={"http://" + midwife.fields.website}
                    target="_blank"
                  >
                    {" "}
                    <TbWorld />
                    {midwife.fields.website}
                  </a>
                )}
                {midwife.fields.email && (
                  <p className="font-serif flex items-center gap-2">
                    {" "}
                    <TbMail />
                    {midwife.fields.email}
                  </p>
                )}
                <p className="font-serif gap-2"> {midwife.fields.county}</p>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default MidwifeComponent;
