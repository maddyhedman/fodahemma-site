import Container from "./Container";

const MidwifeComponent = ({ midwife }) => {
  return (
    <div>
      <Container>
        <h1 className="font-serif text-center mt-20 text-5xl">{midwife.title}</h1>
        <div>
          <p className="text-right">Filtrera efter län</p>
          <div></div>
        </div>
        {/* GRID CONTAINER */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 ">
          {midwife &&
            midwife?.barnmorska?.map((midwife, index) => (
              <div className="midwife-container h-80 py-10">
                <div key={index}>
                  <h1 className="font-serif text-green">{midwife.fields.name}</h1>
                  <img src="../public/images/url.png" />
                  <p className="font-serif text-green">
                    {" "}
                    {midwife.fields.website}
                  </p>
                  <p className="font-serif text-green"> {midwife.fields.email}</p>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default MidwifeComponent;
