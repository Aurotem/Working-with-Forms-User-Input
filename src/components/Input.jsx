export default function Input({ children, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{children}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
