export class BasePriorityQueue {
  _kind: string;
  constructor(kind: string) {
    this._kind = kind;
  }
}

/**
 * Option structure of Priority Queue.
 */
export type PriorityQueueOption<T> = {
  comparator?: Comparator<T>;
};

/**
 * Static interface of Priority Queue.
 */
export type PriorityQueueStatic = {
  /**
   * Build priority queue from given array.
   */
  from: <T>(
    _array: T[],
    _option?: PriorityQueueOption<T>
  ) => PriorityQueueInstance<T>;

  /**
   * Constructor of Priority Queue, with the given 'comparator'.
   * 'comparator' should be same as Array.prototype.sort's argument.
   * Like this: (a, b) => (a == b ? 0 : (a < b ? -1 : 1));
   * If not, default function will be passed by PriorityQueue entrypoint.
   */
  new <T>(option?: PriorityQueueOption<T>): PriorityQueueInstance<T>;
};

/**
 * Instance interface of Priority Queue.
 */
export type PriorityQueueInstance<T> = {
  comparator: Comparator<T>;

  /**
   * Clear this priority queue.
   */
  clear: () => void;

  /**
   * Write out the priority queue content as an Array.
   */
  toArray: () => T[];

  /**
   * Returns size of the priority queue.
   */
  get length(): number;

  /**
   * Push the element to the priority queue and returns self.
   */
  push: (_value: T) => void;

  /**
   * Get the top element of the priority queue.
   */
  top: () => T;

  /**
   * Pop the top element of the priority queue.
   */
  pop: () => T;

  /**
   * Merge another priority queue into this.
   */
  merge: <Instance extends PriorityQueueInstance<T>>(_other: Instance) => void;

  /**
   * Returns the priority queue is empty or not.
   */
  isEmpty: () => boolean;
};

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

export function dictOrderGreaterFirst(
  _a: unknown,
  _b: unknown
): ComparatorResult {
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
export class BinaryHeap<T>
  extends BasePriorityQueue
  implements PriorityQueueInstance<T> {
  comparator: Comparator<T>;
  collection: T[] = [];

  static from<U>(
    array: U[],
    option: PriorityQueueOption<U> = {}
  ): BinaryHeap<U> {
    const instance = new BinaryHeap(option);
    instance.collection = Array.from(array);
    heapifyAll(instance);
    return instance;
  }

  constructor({ comparator = defaultComparator }: PriorityQueueOption<T> = {}) {
    super("BinaryHeap");
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

  merge<Instance extends PriorityQueueInstance<T>>(other: Instance): void {
    if (other instanceof BinaryHeap) {
      this.collection = this.collection.concat(other.collection);
    } else {
      this.collection = this.collection.concat(other.toArray());
    }
    heapifyAll(this);
    other.clear();
  }

  isEmpty(): boolean {
    return !this.collection.length;
  }
}

const check: PriorityQueueStatic = BinaryHeap;
if (check === BinaryHeap) {
  // noop
}