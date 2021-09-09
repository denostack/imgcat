import { image, ImageOptions } from "./iterm.ts";

const encoder = new TextEncoder();

export async function printImage(buffer: Uint8Array, options?: ImageOptions) {
  if (Deno.env.get("TERM_PROGRAM") === "iTerm.app") {
    const encoded = encoder.encode(image(buffer, options));
    const chunksize = 16384;
    const len = Math.ceil(encoded.byteLength / chunksize);
    for (let i = 0; i < len; i++) {
      await Deno.stdout.write(
        encoded.slice(i * chunksize, (i + 1) * chunksize),
      );
    }
    await Deno.stdout.write(new Uint8Array([10]));
  } else {
    throw new Error("printImage is only available in iTerm2.");
  }
}
