/**
 * A signature definition of comparator.
 * This type has same to an argument of `Array#sort`.
 */
export type Comparator<T> = (a: T, b: T) => ComparatorResult;

/**
 * A type of comparator's result.
 */
export type ComparatorResult = 1 | 0 | -1 | number;

export function numericGreaterFirst(a: number, b: number): ComparatorResult {
  return a > b ? 1 : a < b ? -1 : 0;
}

export function dictOrderGreaterFirst(_a: unknown, _b: unknown): ComparatorResult {
  const a = (_a as any).toString();
  const b = (_b as any).toString();
  return a > b ? 1 : a < b ? -1 : 0;
}

export const defaultComparator = dictOrderGreaterFirst;

function getLargestIndex<T>(
  collection: T[],
  index: number,
  comparator: Comparator<T>
): number {
  const leftIndex = index * 2;
  const rightIndex = index * 2 + 1;
  let largestIndex = index;

  if (
    leftIndex < collection.length &&
    comparator(collection[largestIndex], collection[leftIndex]) < 0
  )
    largestIndex = leftIndex;
  if (
    rightIndex < collection.length &&
    comparator(collection[largestIndex], collection[rightIndex]) < 0
  )
    largestIndex = rightIndex;

  return largestIndex;
}

function heapify<T>(
  collection: T[],
  index: number,
  comparator: Comparator<T>
): void {
  const largestIndex = getLargestIndex(collection, index, comparator);

  if (largestIndex !== index) {
    // swap current & largest
    const t = collection[index];
    collection[index] = collection[largestIndex];
    collection[largestIndex] = t;
    heapify(collection, largestIndex, comparator);
  }
}

function heapifyAll<T>(instance: BinaryHeap<T>): void {
  for (let i = Math.floor(instance.collection.length / 2) - 1; i >= 0; --i) {
    heapify(instance.collection, i, instance.comparator);
  }
}

/**
 * An implementation of Binary Heap.
 */
export class BinaryHeap<T> {
  comparator: Comparator<T>;
  collection: T[] = [];

  static from<U>(array: U[], comparator: Comparator<U> = defaultComparator): BinaryHeap<U> {
    const instance = new BinaryHeap(comparator);
    instance.collection = Array.from(array);
    heapifyAll(instance);
    return instance;
  }

  constructor(comparator: Comparator<T> = defaultComparator) {
    this.comparator = comparator;
  }

  clear(): void {
    this.collection.length = 0;
  }

  toArray(): T[] {
    return [...this.collection].sort(this.comparator);
  }

  get length(): number {
    return this.collection.length;
  }

  top(): T {
    if (this.length === 0) {
      throw new Error("invalid operation: top() called for empty BinaryHeap");
    }
    return this.collection[0];
  }

  pop(): T {
    if (this.length === 0) {
      throw new Error("invalid operation: pop() called for empty BinaryHeap");
    }
    const ret = this.collection[0];
    if (this.collection.length > 1) {
      this.collection[0] = this.collection.pop()!;
      heapify(this.collection, 0, this.comparator);
    } else {
      this.collection.pop();
    }

    return ret;
  }

  push(value: T): void {
    this.collection.push(value);
    const arr = this.collection;

    for (
      let i = arr.length - 1, parent = Math.floor(i / 2);
      i > 0 && this.comparator(arr[parent], arr[i]) < 0;
      i = parent, parent = Math.floor(parent / 2)
    ) {
      const t = arr[i];
      arr[i] = arr[parent];
      arr[parent] = t;
    }
  }

  merge(other: BinaryHeap<T>): void {
    this.collection = this.collection.concat(other.collection);
    heapifyAll(this);
    other.clear();
  }

  isEmpty(): boolean {
    return !this.collection.length;
  }
}
