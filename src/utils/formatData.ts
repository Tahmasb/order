type Item = {
  _id: string;
  label: string;
};

type TransformedItem = {
  id: string;
  label: string;
};

function transformArray(items: Item[]): TransformedItem[] {
  return items.map(({ _id, label }) => ({
    id: _id,
    label: label,
  }));
}

function cleanObject<T extends object>(obj: T): T {
  const result: any = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key as keyof T];
    if (
      value !== "" &&
      !(Array.isArray(value) && value.length === 0) &&
      !(value instanceof Object && Object.keys(value).length === 0)
    ) {
      result[key] = value;
    }
  });
  return result as T;
}

export { transformArray, cleanObject };
