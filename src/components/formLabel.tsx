interface PropTypes {
  forTxt: string;
  styles?: string;
  labelText: string;
}

function FormLabel({ forTxt, styles, labelText }: PropTypes) {
  return (
    <>
      <label
        htmlFor={forTxt}
        className={`block text-xl text-purple-950 pt-2 pb-0.5 px-2 font-bold ${styles}`}
      >
        {labelText}
      </label>
    </>
  );
}

export default FormLabel;
