Use bun and its sub-commands rather than npm, yarn, or pnpm for package management and scripts. For example, use `bun i` to install dependencies, `bun add <package>` to add a package, and `bun run <script>` to run scripts defined in package.json.

Assume there's always a server running in the background using `bun dev`. If you need to test, use `bun build` or `bun run lint` as needed.