# 🦕🥞 imgcat

Print Image to Terminal(iTerm2).

## Usage

```typescript
import { printImage } from "https://deno.land/x/imgcat/mod.ts";

await printImage(await Deno.readFile("./deno512.png"));
```

And run with `deno run -A test.ts`.

![example1](https://user-images.githubusercontent.com/4086535/132720680-202d2840-af68-4df1-ab06-f0675b41afd4.png)

Alo, You can use it with [deno-canvas](https://deno.land/x/canvas@v1.3.0).

```typescript
import { printImage } from "https://deno.land/x/imgcat/mod.ts";

import { createCanvas } from "https://deno.land/x/canvas@v1.3.0/mod.ts";

const canvas = createCanvas(200, 200);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(10, 10, 200 - 20, 200 - 20);

await printImage(canvas.toBuffer());
```

![example2](https://user-images.githubusercontent.com/4086535/132720734-e9094cce-55ad-4177-98b8-6af2c87978cb.png)
