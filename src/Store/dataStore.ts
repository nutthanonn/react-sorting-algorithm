import { observable, makeObservable, action } from "mobx";

interface dataProps {
  func_name: string;
  size: number;
  runtime: number;
}

export class DataStoreImpl {
  @observable data: dataProps[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  collect_data(func_name: string, size: number, runtime: number) {
    this.data.push({ func_name, size, runtime });
  }
}

export const DataStore = new DataStoreImpl();
