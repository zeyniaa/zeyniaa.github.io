# Featured Works source UI films

These MP4s are rendered with HyperFrames from new browser captures of the running GitHub project source. No old clipboard screenshots or hand-built dashboard mockups are used. `sources.json` records the repository, source revision, capture provenance and runtime limits of every clip.

Install the pinned renderer and reproduce a film:

```sh
npm install --no-save hyperframes@0.8.201
npx hyperframes render . --composition compositions/simpul.html --output ../assets/videos/simpul.mp4 --fps 24 --quality standard --workers 1 --low-memory-mode
```

Repeat for dokumen, bali, sign, autism and kada. Requires Chrome/Chromium and FFmpeg. The native video element in the portfolio loops muted, uses `object-fit: contain`, pauses offscreen, and has a play/pause control and a native fullscreen option. Motion-reduction preferences keep the poster until the user chooses to play.

The sign and audio workspaces are actual FastAPI/HTML/CSS/JS project implementations. Their trained model weights are not included in their repositories; the films do not manufacture model outputs. Audio features come from an explicitly generated calibration signal. Simpul uses its repository-provided disposable browser fixture and DokumenTanya uses its repository-provided synthetic PDF. BaliTowerOps has local seed data and no configured LLM. KADA footage shows the actual frontend form-building interface, not analytics results.
