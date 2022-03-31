import { observable, makeObservable, action } from "mobx";

interface dataProps {
  func_name: string;
  size: number;
  runtime: number;
}

export class DataStoreImpl {
  @observable Data: dataProps[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  collect_data(func_name: string, size: number, runtime: number) {
    const obj = { func_name, size, runtime };

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
}

export const DataStore = new DataStoreImpl();
