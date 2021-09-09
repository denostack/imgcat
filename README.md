# 🦕🥞 imgcat

Print Image to Terminal(iTerm2).

## Usage

```typescript
import { printImage } from "https://deno.land/x/imgcat/mod.ts";

await printImage(await Deno.readFile("./deno512.png"));
```

And run with `deno run -A file.ts`.
