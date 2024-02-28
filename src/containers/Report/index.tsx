import { ReportView } from "components/views";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppActions, RootState } from "store";

export const ReportContainer: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cryptoLinkData, cryptoMetaData } = useSelector(
    (store: RootState) => store.crypto
  );
  useEffect(() => {
    if (id) {
      dispatch(AppActions.crypto.getOneCryptoRequest(parseInt(id)));
      dispatch(AppActions.crypto.getLinkDataRequest(parseInt(id)));
    }
  }, [dispatch]);
  return <ReportView linkData={cryptoLinkData} metaData={cryptoMetaData} />;
};
