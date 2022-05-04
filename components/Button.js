const Button = ({ homeButtonTitle }) => {
  console.log("button title:", homeButtonTitle);
  return (
    <button className="bg-purple hover:bg-white text-white hover:text-purple py-2 px-4 rounded-full">
      {homeButtonTitle}
    </button>
  );
};

export default Button;
