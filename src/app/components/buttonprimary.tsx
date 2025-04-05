type ButtonProps = {
  title: string;
  link: string;
  newTab: boolean;
};

function ButtonPrimary({ title, link, newTab }: ButtonProps) {
  let target = "";
  if (newTab) target = "_blank";

  return (
    <a
      href={link}
      target={target}
      className="my-4 lg:my-8 py-3 px-4
                flex place-content-center place-items-center
                hover:bg-white bg-blue-500 hover:text-blue-500 transition
                text-base 2xl:text-xl font-bold
                group"
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#FFFFFF"
        className="group-hover:fill-blue-500 size-7 ml-2"
      >
        <path d="m361-311 191-190v81h72v-204H420v72h81L311-362l50 51ZM480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
      </svg>
    </a>
  );
}

export default ButtonPrimary;
