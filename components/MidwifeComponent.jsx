import Container from "./Container";

const MidwifeComponent = ({ midwife }) => {
  console.log(midwife);
  return (
    <Container>
      <div className="">
        <h1 className="font-serif text-purple text-center text-5xl pt-10">
          {midwife.title}
        </h1>
        <div className="grid lg:grid-cols-3 gap-x-20 gap-y-10 py-20  md:grid-cols-2 ">
          {midwife &&
            midwife?.barnmorska?.map((midwife, index) => (
              <div key={index} className="midwife-container h-72">
                <h1 className="font-serif  text-center pt-20 text-2xl">
                  {midwife.fields.name}
                </h1>
                <p className="font-serif text-center ">
                  {" "}
                  {midwife.fields.website}
                </p>
                <p className="font-serif  text-center">
                  {" "}
                  {midwife.fields.email}
                </p>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default MidwifeComponent;
