type textProps = {
  text: string;
};
function TextMe({ text }: textProps) {
  return (
    <div className="w-full flex justify-end gap-4 items-start">
      <span className=" bg-neutral-700 text-sm  p-2 rounded-full px-4 ">
        {text}
      </span>
    </div>
  );
}

export default TextMe;
