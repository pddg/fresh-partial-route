export default function Foo() {
  return (
    <div>
      <h1>Foo</h1>
      <p>This is the Foo partial route.</p>
      <ul>
        <li>
          <a href="/bar" f-partial="/partials/bar">bar</a>
        </li>
        <li>
          <a href="/">home</a>
        </li>
      </ul>
    </div>
  );
}
