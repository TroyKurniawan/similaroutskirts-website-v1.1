type SocialMediaButtonProps = {
  link: string;
  icon: string;
};

const SocialMediaButton = ({ link, icon }: SocialMediaButtonProps) => {
  return (
    <a href={link} target="_blank" className="grid content-center px-4">
      <img
        src={icon}
        className=" w-7 cursor-pointer hover:scale-90 transition"
      />
    </a>
  );
};

export default SocialMediaButton;
