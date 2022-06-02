const Button = ({ homeButtonTitle }) => {

  return (
    <button className="bg-purple hover:bg-white text-white hover:text-purple py-4 w-52 rounded-full text-md">
      {homeButtonTitle}
    </button>
  );
};

export default Button;
