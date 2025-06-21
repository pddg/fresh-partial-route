export default function Bar() {
  return (
    <div>
      <h1>Bar</h1>
      <p>This is the Bar partial route.</p>
      <ul>
        <li>
          <a href="/foo" f-partial="/partials/foo">foo</a>
        </li>
        <li>
          <a href="/">home</a>
        </li>
      </ul>
    </div>
  );
}
