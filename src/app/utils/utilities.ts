export function encodeBase64(data: string): string {
  const buffer = Buffer.from(data);

  return buffer.toString('base64');
}

export function decodeBase64(base64: string): string {
  const buffer = Buffer.from(base64, 'base64');

  return buffer.toString('ascii');
}
