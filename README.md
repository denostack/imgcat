# 🦕🥞 imgcat

Print Image to Terminal(iTerm2).

## Usage

```typescript
import { printImage } from "https://deno.land/x/imgcat/mod.ts";

await printImage(await Deno.readFile("./deno512.png"));
```

And run with `deno run -A test.ts`.

![image](https://user-images.githubusercontent.com/4086535/132719987-72a5ad7a-2317-473d-8447-814ff2d2d7c5.png)

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
