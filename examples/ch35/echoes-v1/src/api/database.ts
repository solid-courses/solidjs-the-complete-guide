import { existsSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { Entity, Schema } from '~/types';

/**
 * DB File Path:
 * It is relative to the project root.
 */
const DB_FILE_PATH = 'demo.db.json';

export function generateUniqueId() {
  const timestamp = Date.now();
  const suffix = Math.random().toString(36).substring(2, 8);
  return `${timestamp}${suffix}`;
}

class Database<TSchema extends Record<string, Entity[]>> {
  #filePath: string;

  constructor(filePath: string) {
    this.#filePath = filePath;
    if (!existsSync(this.#filePath)) this.#write({});
  }

  async #read(): Promise<TSchema> {
    const raw = await readFile(this.#filePath, { encoding: 'utf-8' });
    return JSON.parse(raw.trim() || `{}`) as TSchema;
  }

  #write(data: Partial<Schema>) {
    writeFileSync(this.#filePath, JSON.stringify(data, null, 2));
  }

  async table<TKey extends keyof TSchema>(name: TKey) {
    const data = await this.#read();

    const records: TSchema[TKey] = data[name] ?? [];

    const saveData = () => {
      data[name] = records;
      this.#write(data);
    };

    return {
      findAll(filter?: (item: TSchema[TKey][number]) => boolean): TSchema[TKey] {
        return (filter ? records.filter(filter) : records) as TSchema[TKey];
      },
      findOne(filter: (item: TSchema[TKey][number]) => boolean): TSchema[TKey][number] | undefined {
        return records.find(filter);
      },
      findById(id: string): TSchema[TKey][number] | undefined {
        return records.find(item => item.id === id);
      },
      create(
        data: Omit<TSchema[TKey][number], 'id'> & { id?: string }
      ): TSchema[TKey][number] {
        const id = data.id || generateUniqueId();
        const item: TSchema[TKey][number] = { ...data, id };
        records.push(item);
        saveData();
        return item;
      },
      deleteById(id: string): number {
        const index = records.findIndex(item => item.id === id);
        if (index >= 0) {
          records.splice(index, 1);
          saveData();
          return 1;
        }
        return 0;
      },
      deleteOne(filter: (item: TSchema[TKey][number]) => boolean): number {
        const index = records.findIndex(filter);
        if (index >= 0) {
          records.splice(index, 1);
          saveData();
          return 1;
        }
        return 0;
      },
      deleteMany(filter: (item: TSchema[TKey][number]) => boolean): number {
        const items = records.filter(filter);
        items.forEach(item => {
          const index = records.indexOf(item);
          if (index >= 0) records.splice(index, 1);
        });
        if (items.length > 0) saveData();
        return items.length;
      },
      updateById(id: string, item: Partial<TSchema[TKey][number]>): number {
        const index = records.findIndex(el => el.id === id);
        if (index >= 0) {
          records[index] = { ...item, id };
          saveData();
          return 1;
        }
        return 0;
      },
      updateOne(
        query: (item: TSchema[TKey][number]) => boolean,
        value: Partial<TSchema[TKey][number]>
      ): number {
        const index = records.findIndex(query);
        if (index >= 0) {
          const { id } = records[index];
          records[index] = { ...value, id };
          saveData();
          return 1;
        }
        return 0;
      },
      updateMany(
        filter: (item: TSchema[TKey][number]) => boolean,
        value: Partial<TSchema[TKey][number]>
      ): number {
        const items = records.filter(filter);
        items.forEach(item => {
          const index = records.findIndex(el => el.id === item.id);
          if (index >= 0) {
            records[index] = { ...value, id: item.id };
          }
        });
        if (items.length > 0) saveData();
        return items.length;
      },
      count(query: (item: TSchema[TKey][number]) => boolean): number {
        return records.filter(query).length;
      },
      exists(query: (item: TSchema[TKey][number]) => boolean): boolean {
        return records.some(query);
      },
    };
  }
}

export const database = new Database<Schema>(DB_FILE_PATH);