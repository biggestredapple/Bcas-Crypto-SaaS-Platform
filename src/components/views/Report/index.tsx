import {
  BlogComponent,
  BlogComponentProps,
  StreamChartComponent,
} from "components";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { ICryptoInfo, ILinkData, IPriceLog } from "store/types";

interface ReportViewProps {
  linkData: ILinkData | null;
  metaData: ICryptoInfo | null;
}

const generateLog = (price: number) => {
  let serie: IPriceLog[] = [];
  const date = new Date(Date.now() - 60 * 1000);
  for (let i = 0; i < 60; i++) {
    const time = new Date(date.getTime() + i * 1000);
    serie = [
      ...serie,
      {
        date: `${time.getMinutes()}:${time.getSeconds()}`,
        price: price * 1.1 - price * 0.2 * Math.random(),
      },
    ];
  }
  return serie;
};

export const ReportView: React.FC<ReportViewProps> = ({
  linkData,
  metaData,
}) => {
  if (!metaData) return null;

  const [data, setData] = useState<IPriceLog[]>(generateLog(metaData.price));
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const newArray: IPriceLog[] = [
        ...data.slice(1), // Use slice to create a new array without mutating the original state
        {
          date: `${now.getMinutes()}:${now.getSeconds()}`,
          price: metaData.price * 1.1 - Math.random() * metaData.price * 0.2,
        },
      ];
      setData(newArray); // Directly set the new array without mutating the state
    }, 1000);
    return () => clearInterval(interval);
  }, [metaData, data]); // Add data to the dependency array to ensure the effect runs when data changes
  const blogData: BlogComponentProps[] = [
    {
      date: "2 hours ago",
      title:
        "Stablecoins Join The Crypto Bull Run With $140B Market Cap, Highest Since 2022",
      content:
        "February has been an overall notable month for cryptocurrencies and the crypto industry. We’ve seen Bitcoin and Ether, the two largest cryptocurrencies by market capitalization, reach milestones not seen since the crypto winter started. The bull run has seemingly started, as many...",
      publish: "NewsBTC",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/9022.png?_=3d878e7",
    },
    {
      date: "2 hours ago",
      title:
        "Should We Wait for Bitcoin (BTC) at $60,000, Ethereum (ETH) Secures Way to $3,500, Dogecoin",
      content: "Unexpected Bitcoin breakthrough pushes market to edge",
      publish: "U.Today",
      image:
        "https://u.today/sites/default/files/styles/1200x900/public/2024-02/unnamed%20%2860%29.jpg",
    },
    {
      date: "2 hours ago",
      title:
        "Rebel Satoshi presale in focus, XMR and MINA can recover after slump",
      content:
        "Bitcoin trading is growing more popular on exchanges as the average investor’s profits continue to rise.",
      publish: "CryptoPotato",
      image:
        "https://cryptopotato.com/wp-content/uploads/2024/01/Bitcoin_Network_Upgrade.jpg",
    },
  ];
  const desAnimations = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 500, // Adjust the delay as needed
  });
  const tableData = ["", "", "", ""];
  const tableAnimations = tableData.map((_, index) => {
    return useSpring({
      from: { opacity: 0, transform: "translateY(-20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      delay: (index + 2) * 500, // Adjust the delay as needed
    });
  });
  const rowAnimations = blogData.map((_, index) => {
    return useSpring({
      from: { opacity: 0, transform: "translateY(-20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      delay: (index + 6) * 500, // Adjust the delay as needed
    });
  });
  return (
    <div className="w-full h-full">
      {linkData && metaData ? (
        <div className="p-10 overflow-auto flex flex-col gap-5 h-full">
          <animated.div
            className="flex items-center bg-card rounded-md p-3 gap-3"
            style={desAnimations}
          >
            <img src={metaData.logo} alt="tokenLogo" />
            <p className="text-white text-xl laptop:text-lg tablet:text-sm mobile:text-xs">{linkData.description}</p>
          </animated.div>
          <div className="flex gap-5">
            <div className="grid grid-cols-2 gap-5 w-full h-full laptop:grid-cols-1 tablet:grid-cols-1 mobile:grid-cols-1">
              <animated.div style={tableAnimations[0]}>
                <StreamChartComponent data={data} tag={metaData.symbol} />
              </animated.div>
              <animated.div style={tableAnimations[1]}>
                <StreamChartComponent data={data} tag={metaData.symbol} />
              </animated.div>
              <animated.div style={tableAnimations[2]}>
                <StreamChartComponent data={data} tag={metaData.symbol} />
              </animated.div>
              <animated.div style={tableAnimations[3]}>
                <StreamChartComponent data={data} tag={metaData.symbol} />
              </animated.div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            {blogData.map((blog, index) => (
              <animated.div key={index} style={rowAnimations[index]}>
                <BlogComponent
                  date={blog.date}
                  title={blog.title}
                  content={blog.content}
                  publish={blog.publish}
                  image={blog.image}
                />
              </animated.div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
