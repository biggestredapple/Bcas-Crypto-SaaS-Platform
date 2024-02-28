import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useSpring, animated } from "react-spring";
import { IPriceLog, PopToken } from "store/types";

interface ChartProps {
  data: IPriceLog[];
  tag: PopToken;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: string }[];
  label?: string;
}

const config = {
  BTC: "#FF9933",
  ETH: "#0066FF",
  BNB: "#FFFF66",
  SOLANA: "#FF9999",
};
export const ChartComponent: React.FC<ChartProps> = ({ data, tag }) => {
  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload) {
      return (
        <div className="flex flex-col gap-2 border-l-4 border-lightGreen p-2 bg-card text-white bg-opacity-50">
          <h1 className="text-xl">{`${tag} price`}</h1>
          <p>{`Date: ${label}`}</p>
          <p>{`Price: ${payload[0].value}$`}</p>
        </div>
      );
    }

    return null;
  };
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div
      className="bg-card w-full h-96 rounded-b-md tablet:h-80 mobile:h-64"
      style={props}
    >
      <ResponsiveContainer className="border-white stroke-white">
        <AreaChart data={data} className="border-white stroke-white">
          <XAxis
            dataKey="date"
            axisLine={{ stroke: "white" }}
            tick={{ fill: "white" }}
          />
          <YAxis
            dataKey="price"
            axisLine={{ stroke: "white" }}
            tick={{ fill: "white" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="price"
            stroke={config[tag]}
            fill={config[tag]}
            strokeWidth={4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </animated.div>
  );
};
