type SocialMediaButtonProps = {
  link: string;
  icon: string;
};

const SocialMediaButton = ({ link, icon }: SocialMediaButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="grid content-center px-4 hover:scale-90 transition"
    >
      <img src={icon} className=" w-7 cursor-pointer" />
    </a>
  );
};

export default SocialMediaButton;
