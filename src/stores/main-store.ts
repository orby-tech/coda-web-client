import axios from 'axios';
import {
  action, makeAutoObservable, observable,
} from 'mobx';
import { io } from 'socket.io-client';
import { apiUrl } from '../app-config';
import { SenderType } from '../models';

class MainStore {
    @observable rows = []

    constructor() {
      makeAutoObservable(this);
      this.getListOfSenders();

      const socket = io(apiUrl);
      socket.on('ListOfSendersUpdated', () => this.getListOfSenders());
    }

    @action bindRows = (data:any) => {
      this.rows = data;
    };

    @action
      getListOfSenders = async () => {
        const newRows = await axios
          .get(`${apiUrl}list-of-senders/`)
          .then((res: any) => res.data);
        this.bindRows(newRows);
      };
}

export interface Stores {
  mainStore?: {
    rows: SenderType[]
  }
}

const stores: Stores = {
  mainStore: new MainStore(),
};

export default stores;
