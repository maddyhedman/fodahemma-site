const MidwifeComponent = ({ midwife }) => {
  console.log(midwife);
  return (
    <div className="maddy">
      <h1 className="font-serif text-purple text-center">{midwife.title}</h1>
      <div className="grid grid-cols-3 gap-x-20 gap-y-10 py-20 px-10 ">
        {midwife &&
          midwife?.barnmorska?.map((midwife, index) => (
            <div className="midwife-container">
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
    </div>
  );
};

export default MidwifeComponent;
