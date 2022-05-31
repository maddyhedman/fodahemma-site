const MidwifeComponent = ({ midwife }) => {
  console.log(midwife);
  return (
    <div>
      <h1 className="font-serif text-purple text-center">{midwife.title}</h1>
      <div className="grid grid-cols-3 gap-x-20 gap-y-10 py-20 px-10 ">
        {midwife &&
          midwife?.barnmorska?.map((midwife, index) => (
            <div key={index} className="midwife-container">
              <h1 className="font-serif  text-center">{midwife.fields.name}</h1>
              <p className="font-serif text-center">
                {" "}
                {midwife.fields.website}
              </p>
              <p className="font-serif  text-center"> {midwife.fields.email}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MidwifeComponent;
