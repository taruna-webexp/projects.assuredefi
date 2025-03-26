const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="space-y-4 p-3 border rounded-md"
        style={{
          background: "rgba(4, 3, 17)",
        }}
      >
        <p className="">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
export default CustomTooltip;
