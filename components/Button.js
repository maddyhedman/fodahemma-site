const Button = ({ homeButtonTitle }) => {

  return (
    <button className="bg-purple hover:bg-white text-white hover:text-purple py-5 w-60 rounded-full text-xl">
      {homeButtonTitle}
    </button>
  );
};

export default Button;
