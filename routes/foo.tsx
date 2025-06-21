import { defineRoute } from "$fresh/server.ts";

export default defineRoute(async (req, ctx) => {
  return (
    <>
      <h2>Foo</h2>
      <p>This is the Foo partial route.</p>
      <ul>
        <li>
          <a href="/bar" f-partial="/bar">bar</a>
        </li>
        <li>
          <a href="/">home</a>
        </li>
      </ul>
    </>
  );
});
