export const Input = ({ handleEdit }) => {
  return (
    <input
      type="text"
      className="text-base"
      placeholder="Click to edit the title"
      onChange={handleEdit}
      maxLength={50}
    />
  );
};
