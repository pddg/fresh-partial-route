import { type PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-partial-route</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body f-client-nav>
        <h1>Fresh Partial Route Example</h1>
        <Partial name="main">
          <Component />
        </Partial>
      </body>
    </html>
  );
}
