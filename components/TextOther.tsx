type textProps = {
  text: string;
  imageShow: boolean;
  imageSrc?: string;
};

function TextOther({ text, imageShow, imageSrc }: textProps) {
  return (
    <div className="w-full flex justify-start gap-4 items-start">
      {imageShow ? (
        <img src={imageSrc} className="h-7 w-7 rounded-full" alt="" />
      ) : (
        <div className="h-7 w-7" />
      )}
      <div className="w-1/2 flex justify-start items-center">
        <span className="border text-sm border-white border-opacity-[15%] p-2 rounded-full px-4 ">
          {text}
        </span>
      </div>
    </div>
  );
}

export default TextOther;
