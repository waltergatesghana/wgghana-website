import React from "react";
import CountUp from "react-countup";

interface StatItem {
  id: number;
  label: string;
  value: number;
}

const stats: StatItem[] = [
  { id: 1, label: "Projects Completed", value: 120 },
  { id: 2, label: "Happy Clients", value: 75 },
  { id: 3, label: "Awards Won", value: 15 },
  { id: 4, label: "Years of Experience", value: 10 },
];

const CounterStats: React.FC = () => {
 return (
    <div className="flex justify-center items-center py-16 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.id}>
              <h3 className="text-4xl font-bold text-gray-900">
                <CountUp end={stat.value} duration={2} />
                {stat.id === 2 && "+" /* Optional for certain stats */}
              </h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterStats;
