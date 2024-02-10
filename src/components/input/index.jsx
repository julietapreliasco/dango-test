export const Input = ({ handleEdit, title }) => {
  return (
    <input
      type="text"
      className="text-base"
      placeholder={title}
      onChange={handleEdit}
      maxLength={50}
    />
  );
};
