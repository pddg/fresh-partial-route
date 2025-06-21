export default function Home() {
  return (
    <ul>
      <li>
        <a href="/foo" f-partial="/foo">foo</a>
      </li>
      <li>
        <a href="/bar" f-partial="/bar">bar</a>
      </li>
    </ul>
  );
}
