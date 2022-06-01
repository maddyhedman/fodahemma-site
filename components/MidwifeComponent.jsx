import Container from "./Container";

const MidwifeComponent = ({ midwife }) => {
  console.log("county", midwife.barnmorska[0].fields);
  return (
    <Container>
      <div className="">
        <h1 className="font-serif text-purple text-center text-5xl pt-10">
          {midwife.title}
        </h1>
        <div className="grid lg:grid-cols-3 gap-x-5 gap-y-5 py-20  md:grid-cols-2 mb-36">
          {midwife &&
            midwife?.barnmorska?.map((midwife, index) => (
              <div key={index} className="midwife-container h-72 px-10">
                <h1 className="font-serif pt-20 text-2xl">
                  {midwife.fields.name}
                </h1>
                {midwife.fields.phone && (
                  <p className="font-serif"> +{midwife.fields.phone}</p>
                )}
                <p className="font-serif"> {midwife.fields.website}</p>
                <p className="font-serif"> {midwife.fields.email}</p>
                <p className="font-serif"> {midwife.fields.county}</p>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default MidwifeComponent;
