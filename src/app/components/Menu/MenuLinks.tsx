type MenuLinkProps = {
  title: string;
  link: string;
};

const MenuLinks = ({ title, link }: MenuLinkProps) => {
  return (
    <a href={link}>
      <p
        className="hover:text-blue-500 hover:cursor-pointer hover:pr-4 hover:border-r-8 border-blue-500 transition-all
                    text-2xl py-2 pt-3 my-4"
      >
        {title}
      </p>
    </a>
  );
};

export default MenuLinks;
