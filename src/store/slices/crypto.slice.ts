import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICryptoInfo,
  PopToken,
  IPriceLog,
  ILinkData,
  ISearchInfo,
} from "store/types";

interface ICryptoState {
  allCrypto: ICryptoInfo[];
  searchCrypto: ICryptoInfo[];
  cryptoLinkData: ILinkData | null;
  cryptoMetaData: ICryptoInfo | null;
  popId: PopToken;
  popLog: IPriceLog[];
}

const initialState: ICryptoState = {
  allCrypto: [],
  searchCrypto: [],
  cryptoLinkData: null,
  cryptoMetaData: null,
  popId: "BTC",
  popLog: [],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    getAllCryptoRequest() {},
    getAllCrypto(state: ICryptoState, action: PayloadAction<ICryptoInfo[]>) {
      state.allCrypto = [...action.payload];
      state.searchCrypto = [...action.payload];
    },
    getLinkDataRequest(_state: ICryptoState, _action: PayloadAction<number>) {},
    getLinkData(state: ICryptoState, action: PayloadAction<ILinkData>) {
      state.cryptoLinkData = { ...action.payload };
    },
    getLogRequest(state: ICryptoState, action: PayloadAction<PopToken>) {
      state.popId = action.payload;
    },
    getLog(state: ICryptoState, action: PayloadAction<IPriceLog[]>) {
      state.popLog = action.payload.map((item) => ({
        date: item.date.split("T")[0],
        price: item.price,
      }));
    },
    getOneCryptoRequest(state: ICryptoState, _action: PayloadAction<number>) {
      state.cryptoMetaData = null;
    },
    getOneCrypto(state: ICryptoState, action: PayloadAction<ICryptoInfo>) {
      state.cryptoMetaData = action.payload;
    },
    getSearch(state: ICryptoState, action: PayloadAction<ISearchInfo>) {
      state.searchCrypto = state.allCrypto.filter(
        (crypto) =>
          crypto.name.toUpperCase().includes(action.payload.name.toUpperCase()) &&
          crypto.price < action.payload.price
      );
    },
  },
});

export const cryptoActions = cryptoSlice.actions;

export const cryptoReducer = cryptoSlice.reducer;
