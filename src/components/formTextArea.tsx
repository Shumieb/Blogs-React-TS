interface PropTypes {
  name: string;
  inputValue: string;
  handleChange: (text: string) => void;
  rowNum: number;
  styles?: string;
}

function FormTextArea({
  name,
  inputValue,
  handleChange,
  rowNum,
  styles,
}: PropTypes) {
  return (
    <>
      <textarea
        name={name}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        rows={rowNum}
        className={`border-2 outline-purple-950 text-lg text-purple-950 py-1 px-2 rounded-md w-[100%] ${styles}`}
      />
    </>
  );
}

export default FormTextArea;
