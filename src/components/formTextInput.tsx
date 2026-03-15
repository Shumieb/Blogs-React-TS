interface PropTypes {
  name: string;
  inputValue: string;
  handleChange: (text: string) => void;
  styles?: string;
}

function FormTextInput({ name, inputValue, handleChange, styles }: PropTypes) {
  return (
    <>
      <input
        type="text"
        name={name}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        className={`border-2 outline-purple-950 text-lg text-purple-950 py-1 px-2 rounded-md w-[100%] ${styles}`}
      />
    </>
  );
}

export default FormTextInput;
