export default function Movie({ name, release }) {
  return (
    <div>
      <li>
        {name}, {release}
      </li>
    </div>
  );
}
