import { useEffect, useState } from 'react';

interface CounterStat {
  value: number;
  label: string;
  suffix?: string;
}

export function ImpactCounter() {
  const [isVisible, setIsVisible] = useState(false);

  // Stats matching the reference image
  const targetStats: CounterStat[] = [
    {
      value: 5000,
      label: 'Women & Girls Reached',
      suffix: '+',
    },
    {
      value: 1200,
      label: 'Girls Kept in School',
      suffix: '+',
    },
    {
      value: 800,
      label: 'Businesses Launched',
      suffix: '+',
    },
    {
      value: 300,
      label: 'Change Champions Trained',
      suffix: '+',
    },
  ];

  const [stats, setStats] = useState<CounterStat[]>(
    targetStats.map((stat) => ({ ...stat, value: 0 }))
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = targetStats.map((targetStat, index) => {
      const increment = targetStat.value / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetStat.value) {
          currentValue = targetStat.value;
          clearInterval(intervals[index]);
        }

        setStats((prevStats) =>
          prevStats.map((stat, idx) =>
            idx === index ? { ...stat, value: Math.floor(currentValue) } : stat
          )
        );
      }, stepDuration);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <div className="w-full">
      {/* Impact Stats - Exact match to reference image */}
      <div className="bg-accent py-20 px-8">
        <div className="grid grid-cols-2 gap-x-32 gap-y-20 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              {/* Large Number */}
              <div className="text-6xl md:text-7xl font-extrabold text-white mb-3">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              {/* Label - uppercase with spacing */}
              <div className="text-sm font-semibold text-white uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
