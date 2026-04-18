type ClassDictionary = Record<string, boolean | null | undefined>;
type ClassValue = ClassDictionary | ClassValue[] | null | number | string | undefined;

function toClassName(value: ClassValue): string[] {
  if (!value) {
    return [];
  }

  if (typeof value === "string" || typeof value === "number") {
    return [String(value)];
  }

  if (Array.isArray(value)) {
    return value.flatMap(toClassName);
  }

  return Object.entries(value)
    .filter(([, enabled]) => Boolean(enabled))
    .map(([className]) => className);
}

export function cn(...inputs: ClassValue[]) {
  return inputs.flatMap(toClassName).join(" ");
}
