import { defineRoute, RouteConfig } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default defineRoute(async (req, ctx) => {
  return (
    <Partial name="main">
      <h2>Foo</h2>
      <p>This is the Foo partial route.</p>
      <ul>
        <li>
          <a href="/bar" f-partial="/partials/bar">bar</a>
        </li>
        <li>
          <a href="/">home</a>
        </li>
      </ul>
    </Partial>
  );
});
