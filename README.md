# Emmy Portfolio

A responsive portfolio inspired by [samwrks.in](https://samwrks.in), built with Next.js and Tailwind CSS.

## Develop

On **Windows PowerShell**, if `npm` fails with “running scripts is disabled”, use `npm.cmd` (or open **Command Prompt**):

```bash
npm.cmd install
npm.cmd run dev:clean
```

If the page looks like plain HTML (no styling), stop the server, run `dev:clean`, then hard-refresh the browser (Ctrl+Shift+R).

Otherwise:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit copy, links, and project lists in `src/data/site.ts`.
