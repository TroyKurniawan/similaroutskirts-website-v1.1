type ParagraphSectionProps = {
  title: string;
  text: string[];
  code: string[];
};

function ParagraphSection({ title, text, code }: ParagraphSectionProps) {
  return (
    <div className="w-screen grid justify-center my-12 lg:my-12">
      <div
        className="w-96 sm:w-[36rem] md:w-[42rem] lg:w-[60rem]
                      px-4 grid"
      >
        {/* Title */}
        {title[0] && (
          <h2 className="text-3xl md:text-5xl font-bold mb-8">{title}</h2>
        )}

        {/* Paragraph */}
        <div className="text-sm md:text-lg text-justify space-y-4">
          {text.map((t) => (
            <p>{t}</p>
          ))}
        </div>

        {/* Code */}
        {code[0] && (
          <div
            className="text-xs md:text-lg
                            p-4 md:p-8 mt-8
                            border-4 border-slate-800 bg-slate-900 bg-opacity-50 backdrop-blur"
          >
            <code>
              {code.map((t) => (
                <p>{t}</p>
              ))}
            </code>
          </div>
        )}
      </div>
    </div>
  );
}

export default ParagraphSection;
