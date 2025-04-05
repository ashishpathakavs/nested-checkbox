import Checkbox from "./Checkbox";

export default function CheckboxTree({ data, handleChange }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} style={{ marginLeft: "1rem", padding: "0.25rem" }}>
            <Checkbox
              id={item.id}
              label={item.label}
              status={item.status}
              handleChange={handleChange}
            />
            {item.children.length > 0 && (
              <CheckboxTree data={item.children} handleChange={handleChange} />
            )}
          </div>
        );
      })}
    </div>
  );
}
