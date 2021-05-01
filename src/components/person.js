export default function Person(props) {
  const p = props.person;
  return (
    <tr>
      <td>{p.firstName}</td>
      <td>{p.lasttName}</td>
      <td>{p.email}</td>
      <td>{p.password}</td>
      <td>{p.gender}</td>
      <td>{p.birthday}</td>
      <td>{p.about}</td>
    </tr>
  );
}
