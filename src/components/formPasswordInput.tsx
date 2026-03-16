interface PropTypes {
  name: string;
  inputValue: string;
  handleChange: (text: string) => void;
  placeHolder?: string;
  styles?: string;
}

function FormPasswordInput({
  name,
  inputValue,
  placeHolder,
  handleChange,
  styles,
}: PropTypes) {
  return (
    <>
      <input
        type="password"
        name={name}
        value={inputValue}
        placeholder={placeHolder}
        onChange={(e) => handleChange(e.target.value)}
        className={`border-2 outline-purple-950 text-lg text-purple-950 py-2 px-2 rounded-md w-[100%] ${styles}`}
      />
    </>
  );
}

export default FormPasswordInput;
