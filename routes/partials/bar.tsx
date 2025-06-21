import { defineRoute, RouteConfig } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default defineRoute(async (req, ctx) => {
  return (
    <Partial name="main">
      <h2>Bar</h2>
      <p>This is the Bar partial route.</p>
      <ul>
        <li>
          <a href="/foo" f-partial="/partials/foo">foo</a>
        </li>
        <li>
          <a href="/">home</a>
        </li>
      </ul>
    </Partial>
  );
});
