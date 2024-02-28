import { useEffect, useState } from "react";

import {
  ChartComponent,
  ChartButton,
  ChartButtonProps,
  SortButton,
} from "components/common";
import { ICryptoInfo, PopToken, IPriceLog } from "store/types";
import { useNavigate } from "react-router";
import { animated, useSpring } from "react-spring";

interface MainViewProps {
  crypto: ICryptoInfo[];
  data: IPriceLog[];
  popId: PopToken;
  getInfo: (id: number) => void;
  getPrice: (id: PopToken) => void;
}

export const MainView: React.FC<MainViewProps> = ({
  crypto,
  data,
  getPrice,
  popId,
}) => {
  const [tableData, setTableData] = useState<ICryptoInfo[]>([...crypto]);
  useEffect(() => setTableData([...crypto]), [crypto]);

  const [sortOrder, setSortOrder] = useState({
    name: false,
    slug: false,
    id: false,
    rank: false,
    price: false,
  });
  const handleSortString = (key: "name" | "slug") => {
    sortOrder[key]
      ? setTableData([
          ...tableData.sort((a, b) => a[key].localeCompare(b[key])),
        ])
      : setTableData([
          ...tableData.sort((a, b) => b[key].localeCompare(a[key])),
        ]);
    setSortOrder({ ...sortOrder, [key]: !sortOrder[key] });
  };
  const handleSortNumber = (key: "id" | "rank" | "price") => {
    sortOrder[key]
      ? setTableData([...tableData.sort((a, b) => a[key] - b[key])])
      : setTableData([...tableData.sort((a, b) => b[key] - a[key])]);
    setSortOrder({ ...sortOrder, [key]: !sortOrder[key] });
  };

  const tokenButton: ChartButtonProps[] = [
    {
      id: "BTC",
      label: "Bitcoin",
      Icon: (
        <img
          src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"}
          alt="solana"
          className="w-10 m-auto"
        />
      ),
      color: "BTC",
      onClick: getPrice,
      popId: popId,
    },
    {
      id: "ETH",
      label: "Etherium",
      Icon: (
        <img
          src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"}
          alt="solana"
          className="w-10 m-auto"
        />
      ),
      color: "ETH",
      onClick: getPrice,
      popId: popId,
    },
    {
      id: "BNB",
      label: "BNB",
      Icon: (
        <img
          src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"}
          alt="solana"
          className="w-10 m-auto"
        />
      ),
      color: "BNB",
      onClick: getPrice,
      popId: popId,
    },
    {
      id: "SOLANA",
      label: "Solana",
      Icon: (
        <img
          src={"https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"}
          alt="solana"
          className="w-10 m-auto rounded-full"
        />
      ),
      color: "SOLANA",
      onClick: getPrice,
      popId: popId,
    },
  ];

  const sortButton = [
    {
      handleSort: () => handleSortNumber("id"),
      label: "Id",
      order: sortOrder.id,
      className: "w-1/12",
    },
    {
      handleSort: () => handleSortString("name"),
      label: "Name",
      order: sortOrder.name,
      className: "w-1/3",
    },
    {
      handleSort: () => handleSortString("slug"),
      label: "Slug",
      order: sortOrder.slug,
      className: "w-1/6",
    },
    {
      handleSort: () => handleSortNumber("price"),
      label: "Price",
      order: sortOrder.price,
      className: "w-1/6",
    },
    {
      handleSort: () => handleSortNumber("rank"),
      label: "Rank",
      order: sortOrder.rank,
      className: "w-1/12",
    },
  ];
  const tableAnimations = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  const naviate = useNavigate();
  return (
    <div className="w-full p-10 overflow-auto h-full flex flex-col gap-5">
      <div className="w-full rounded-md bg-card pt-5 px-5 mx-auto flex flex-col gap-5">
        <h1 className="text-white text-left text-xl font-bold">Coin Price</h1>
        <div className="desktop:w-1/2 w-full m-auto flex items-center justify-around">
          {tokenButton.map((token, index) => (
            <ChartButton
              color={token.color}
              id={token.id}
              Icon={token.Icon}
              label={token.label}
              onClick={getPrice}
              popId={popId}
              key={index}
            />
          ))}
        </div>
        <ChartComponent data={data} tag={popId} />
      </div>
      <div className="w-full rounded-md bg-card p-3">
        <animated.table className="w-full text-left" style={tableAnimations}>
          <thead>
            <tr className="text-white border-b">
              {sortButton.map((button, index) => (
                <th
                  className={`${button.className} hover:bg-hover`}
                  key={index}
                >
                  <SortButton
                    handleSort={button.handleSort}
                    label={button.label}
                    order={button.order}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white">
            {tableData.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-hover cursor-pointer"
                onClick={() => naviate(`report/${item.id}`)}
              >
                <td className="py-3 px-5">{item.id}</td>
                <td className="py-3 px-5">
                  <div className="flex items-center gap-2 h-full">
                    <img src={item.logo} className="w-6 rounded-full bg-white" />
                    <span className="font-bold">{item.name}</span>
                    <span className="font-normal"> ({item.symbol})</span>
                  </div>
                </td>
                <td className="py-3 px-5">{item.slug}</td>
                <td className="py-3 px-5">{item.price}</td>
                <td className="py-3 px-5">{item.rank}</td>
              </tr>
            ))}
          </tbody>
        </animated.table>
      </div>
    </div>
  );
};
