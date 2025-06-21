import { defineRoute } from "$fresh/server.ts";

export default defineRoute(async (req, ctx) => {
  return (
    <>
      <h2>Bar</h2>
      <p>This is the Bar partial route.</p>
      <ul>
        <li>
          <a href="/foo" f-partial="/foo">foo</a>
        </li>
        <li>
          <a href="/">home</a>
        </li>
      </ul>
    </>
  );
});
