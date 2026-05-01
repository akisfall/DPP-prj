function DataTable({ data }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{Array.isArray(value) ? value.join("、") : value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
