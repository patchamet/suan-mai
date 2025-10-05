import { randomUUID } from "node:crypto";
import { items, type Item } from "./auth.service.js";

export const resolvers = {
  Query: {
    items: () => items,
    item: (_: unknown, { id }: { id: string }) => items.find(item => item.id === id) ?? null,
  },
  Mutation: {
    createItem: (
      _: unknown,
      { input }: { input: { name: string; description?: string | null } }
    ) => {
      const newItem: Item = {
        id: randomUUID(),
        name: input.name,
        description: input.description ?? undefined,
      };

      items.push(newItem);

      return newItem;
    },
    updateItem: (
      _: unknown,
      { id, input }: { id: string; input: { name?: string | null; description?: string | null } }
    ) => {
      const item = items.find(i => i.id === id);
      if (!item) {
        throw new Error("Item not found");
      }

      if (input.name != null) {
        item.name = input.name;
      }

      if (input.description !== undefined) {
        item.description = input.description ?? undefined;
      }

      return item;
    },
    deleteItem: (_: unknown, { id }: { id: string }) => {
      const index = items.findIndex(item => item.id === id);
      if (index === -1) {
        throw new Error("Item not found");
      }

      const [deleted] = items.splice(index, 1);
      return deleted;
    },
  },
};
