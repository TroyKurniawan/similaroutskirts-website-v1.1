type ButtonProps = {
  title: string;
  link: string;
};

function ButtonHeader({ title, link }: ButtonProps) {
  return (
    <a
      href={link}
      className="py-4 px-4 mx-2
                 border-blue-500 hover:border-b-4 transition-all
                  flex
                  text-lg font-bold
                  hover:bg-white hover:bg-opacity-5
                  group"
    >
      {title}
    </a>
  );
}

export default ButtonHeader;
