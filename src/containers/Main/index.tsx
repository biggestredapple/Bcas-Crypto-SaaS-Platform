import { MainView } from "components/views";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppActions, AppDispatch, RootState, useAppSelector } from "store";
import { PopToken } from "store/types";

export const MainContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchCrypto, popLog, popId } = useAppSelector(
    (store: RootState) => store.crypto
  );
  useEffect(() => {
    dispatch(AppActions.crypto.getAllCryptoRequest());
    dispatch(AppActions.crypto.getLogRequest("BTC"));
  }, []);
  const getInfo = (id: number) => {
    dispatch(AppActions.crypto.getOneCryptoRequest(id));
  };
  const getPrice = (id: PopToken) => {
    dispatch(AppActions.crypto.getLogRequest(id));
  };
  return (
    <MainView
      crypto={searchCrypto}
      getInfo={getInfo}
      getPrice={getPrice}
      data={popLog}
      popId={popId}
    />
  );
};
