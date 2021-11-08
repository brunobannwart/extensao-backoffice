export function encodeBase64(data: string): string {
  const buffer = Buffer.from(data);

  return buffer.toString('base64');
}

export function decodeBase64(base64: string): string {
  const buffer = Buffer.from(base64, 'base64');

  return buffer.toString('ascii');
}

export function renameJSONKeys(data: string, keys: Map<string, string>): string {
  Object.keys(data).forEach((o) => {
    data[keys.get(o)] = data[0];
    delete data[0];
  });

  return data;
}
