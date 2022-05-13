export function isEmptyField(field: string | undefined | null): boolean {
  if (!field) return true;

  if (field.trim() === '') return true;

  return false;
}

export function isEmptyFields(fields: Array<string> | undefined | null): boolean {
  if (!fields) return true;

  if (fields.length === 0) return true;

  if (fields.some(field => !field || field.trim() === '')) return true;

  return false;
}