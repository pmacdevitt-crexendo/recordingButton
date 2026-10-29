# Recording Row Button

A tiny NetSapiens Flow remote that adds a "Recording" button to every row of
the Call Logs table. Clicking it currently shows a placeholder message; change
`handleClick` in `src/App.tsx` to make it do real work with that row's call.

## Deploy

1. Push these files to a public GitHub repo, at the top level (not in a subfolder),
   including `.github/workflows/deploy.yml`.
2. Settings → Pages → Source: GitHub Actions, then Actions → Deploy to GitHub
   Pages → Run workflow. Wait for the green check.
3. Your bundle: `https://<user>.github.io/<repo>/remoteEntry.js`
4. Platform → UI SDK Management → Registered Apps → Add App, with
   `webpack_module: recordingRowButton` and that URL. Then click Deploy.

Bump `version` in `package.json` before every push after the first deploy.
