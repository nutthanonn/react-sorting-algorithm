import { makeObservable, action } from "mobx";

export class SortFunctionImpl {
  constructor() {
    makeObservable(this);
  }

  @action
  merge(a: number[], b: number[]): number[] {
    var i: number = 0;
    var j: number = 0;
    const final: number[] = [];

    while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
        final.push(a[i]);
        i++;
      } else {
        final.push(b[j]);
        j++;
      }
    }
    while (i < a.length) {
      final.push(a[i]);
      i++;
    }
    while (j < b.length) {
      final.push(b[j]);
      j++;
    }
    return final;
  }

  @action
  mergeSort(items: number[]): number[] {
    if (items.length < 2) {
      return items;
    }

    const first: number[] = this.mergeSort(items.slice(0, items.length / 2));
    const second: number[] = this.mergeSort(items.slice(items.length / 2));

    return this.merge(first, second);
  }

  @action
  bubbleSort(items: number[]) {
    for (var i = 0; i < items.length; i++) {
      for (var j = 0; j < items.length - i - 1; j++) {
        if (items[j] > items[j + 1]) {
          var temp = items[j];
          items[j] = items[j + 1];
          items[j + 1] = temp;
        }
      }
    }
    console.log("bbs");
    return items;
  }

  @action
  insertionSort(items: number[]) {
    for (var i = 0; i < items.length; i++) {
      for (var j = 0; j < i; j++) {
        if (items[j] > items[i]) {
          var temp = items[j];
          items[j] = items[i];
          items[i] = temp;
        }
      }
    }
    console.log("is");
    return items;
  }

  @action
  selectionSort(items: number[]) {
    for (var i = 0; i < items.length; i++) {
      for (var j = 0; j < items.length; j++) {
        if (items[j] > items[i]) {
          var temp = items[i];
          items[i] = items[j];
          items[j] = temp;
        }
      }
    }
    console.log("ss");
    return items;
  }

  @action
  call_sort(key: string, items: number[]): number[] {
    var arr: number[] = [];

    switch (key) {
      case "Merge Sort":
        arr = this.mergeSort(items);
        break;

      case "Bubble Sort":
        arr = this.bubbleSort(items);
        break;

      case "Insertion Sort":
        arr = this.insertionSort(items);
        break;

      case "Selection Sort":
        arr = this.selectionSort(items);
        break;
    }
    return arr;
  }
}

export const SortFunctionStore = new SortFunctionImpl();
