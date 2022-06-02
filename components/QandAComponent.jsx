import Container from "./Container";

const QandAComponent = ({ qanda }) => {
  return (
    <div className="bg-green h-screen py-10">
      <Container>
        <h1 className="font-serif text-6xl text-white text-center">
          {qanda.title}
        </h1>
        <div className="grid grid-cols-2 gap-x-20 gap-y-10 py-20">
          {qanda &&
            qanda?.qAndA?.map((qanda, index) => (
              <div key={index}>
                <h1 className="font-serif text-3xl text-white">
                  {qanda?.fields?.question}
                </h1>
                <p className="text-[#D1C2B5] mt-2">{qanda?.fields?.answer}</p>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default QandAComponent;
