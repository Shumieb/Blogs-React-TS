interface PropTypes {
  valueTxt: string;
}

function SubmitBtn({ valueTxt }: PropTypes) {
  return (
    <>
      <input
        type="submit"
        value={valueTxt}
        className="border-3 border-purple-950 text-lg py-1 px-4 rounded bg-purple-950 text-white capitalize me-2 w-[200px] cursor-pointer shadow-md hover:shadow-lg"
      />
    </>
  );
}

export default SubmitBtn;
