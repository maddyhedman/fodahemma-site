const MidwifeComponent = ({ midwife }) => {
  console.log(midwife);
  return (
    <div className="bg-purple h-screen py-10">
      <h1 className="font-serif text-white text-center">{midwife.title}</h1>
      <div className="grid grid-cols-2 gap-x-20 gap-y-10 py-20">
        {midwife &&
          midwife?.barnmorska?.map((midwife, index) => (
            <div key={index}>
              <h1 className="font-serif text-white">{midwife.fields.name}</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MidwifeComponent;
