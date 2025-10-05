export interface Item {
  id: string;
  name: string;
  description?: string;
}

// In-memory data storage
export const items: Item[] = [
  {
    id: "1",
    name: "Sample Item",
    description: "Example default item",
  },
];
