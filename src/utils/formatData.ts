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

export { transformArray };
