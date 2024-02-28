import { useEffect } from "react";
import { toast } from "react-toastify";

import { NotFoundView } from "components/views";

export const NotFoundContainer: React.FC = () => {
  useEffect(() => {
    toast.error("Page does not exist!");
  });
  return <NotFoundView />;
};
