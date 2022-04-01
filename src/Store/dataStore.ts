import { observable, makeObservable, action } from "mobx";

interface dataProps {
  func_name: string;
  size: number;
  runtime: number;
}

export class DataStoreImpl {
  @observable Data: dataProps[] = [];

  @observable DataMerge: dataProps[] = [];
  @observable DataBubble: dataProps[] = [];
  @observable DataInsertion: dataProps[] = [];
  @observable DataSelection: dataProps[] = [];

  @observable TypeofChart: string = "Merge Sort";

  constructor() {
    makeObservable(this);
  }

  @action
  add_data_sort(
    obj: dataProps,
    len: number,
    arrData: dataProps[]
  ): dataProps[] {
    if (len === 0) {
      arrData.push(obj);
      return arrData;
    }
    for (var i = 0; i < len; i++) {
      if (obj.size < arrData[i].size) {
        arrData.splice(i, 0, obj);
        console.log(arrData);
        return arrData;
      }
    }

    arrData.push(obj);

    return arrData;
  }

  @action
  collect_data(func_name: string, size: number, runtime: number) {
    const obj = { func_name, size, runtime };

    switch (func_name) {
      case "Merge Sort":
        this.DataMerge = this.add_data_sort(
          obj,
          this.DataMerge.length,
          this.DataMerge
        );

        break;

      case "Bubble Sort":
        this.DataBubble = this.add_data_sort(
          obj,
          this.DataBubble.length,
          this.DataBubble
        );
        break;

      case "Insertion Sort":
        this.DataInsertion = this.add_data_sort(
          obj,
          this.DataInsertion.length,
          this.DataInsertion
        );
        break;

      case "Selection Sort":
        this.DataSelection = this.add_data_sort(
          obj,
          this.DataSelection.length,
          this.DataSelection
        );
        break;
    }
    const len = this.Data.length;
    if (len === 0) {
      this.Data.push(obj);
      return;
    }

    for (var i = 0; i < len; i++) {
      if (obj.size < this.Data[i].size) {
        this.Data.splice(i, 0, obj);
        return;
      }
    }
    this.Data.push(obj);
  }

  @action
  change_typeof_chart(key: string) {
    this.TypeofChart = key;
  }

  fetch_data_chart() {
    switch (this.TypeofChart) {
      case "Merge Sort":
        return [...this.DataMerge];

      case "Bubble Sort":
        return [...this.DataBubble];

      case "Insertion Sort":
        return [...this.DataInsertion];

      case "Selection Sort":
        return [...this.DataSelection];
    }
    return [];
  }
}

export const DataStore = new DataStoreImpl();
