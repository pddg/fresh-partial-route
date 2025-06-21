export default function Home() {
  return (
    <ul>
      <li><a href="/foo" f-partial="/partials/foo">foo</a></li>
      <li><a href="/bar" f-partial="/partials/bar">bar</a></li>
    </ul>
  );
}
