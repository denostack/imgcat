const OSC = "\u001B]";
const BEL = "\u0007";

// @ref https://iterm2.com/documentation-images.html
export interface ImageOptions {
  width?: string;
  height?: string;
  noPreserveAspectRatio?: boolean;
}

export function image(
  buffer: Uint8Array,
  options: ImageOptions = {},
): string {
  let body = `${OSC}1337;File=inline=1`;
  if (options.width) {
    body += `;width=${options.width}`;
  }
  if (options.height) {
    body += `;height=${options.height}`;
  }
  if (options.noPreserveAspectRatio) {
    body += ";preserveAspectRatio=0";
  }

  let binary = "";
  const len = buffer.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(buffer[i]);
  }
  body += `:${btoa(binary)}${BEL}`;
  return body;
}
