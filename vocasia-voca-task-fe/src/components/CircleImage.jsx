const CircleImage = ({ link }) => {
  return (
    <img
      className="h-[100px] w-[100px] border-4 border-slate-100 rounded-full mb-4 "
      src={link}
      alt="profile img"
    />
  );
};

export default CircleImage;
