import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { IPriceLog } from "store/types";

interface ChartProps {
  data: IPriceLog[];
  tag: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: string }[];
  label?: string;
}

export const StreamChartComponent: React.FC<ChartProps> = ({ data, tag }) => {
  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload) {
      return (
        <div className="flex flex-col gap-2 border-l-4 border-lightGreen p-2 bg-darkGreen bg-opacity-50 text-white">
          <h1 className="text-xl">{`${tag} price`}</h1>
          <p>{`Date: ${label}`}</p>
          <p>{`Price: ${payload.length > 0 ? payload[0].value : ""}$`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="bg-card w-full h-full min-h-60 p-5 rounded-md">
      <ResponsiveContainer className="h-full border-white stroke-white">
        <AreaChart data={data} className="border-white stroke-white px-5 py-1">
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
            className="stroke-white fill-white stroke-2"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
