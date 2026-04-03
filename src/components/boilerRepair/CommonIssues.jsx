// components/repair/CommonIssues.jsx
import { AlertTriangle } from "lucide-react";

const issues = [
  "No hot water",
  "Low pressure",
  "Cold radiators",
  "Strange noises",
  "Boiler keeps switching off",
  "Leaking boiler",
];

const CommonIssues = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Common Boiler Problems We Fix
        </h2>

        <p className="text-gray-500 text-base md:text-lg mb-12 max-w-xl mx-auto">
          Not sure what’s wrong? These are the most common issues we repair.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {issues.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 bg-gray-50 p-4 rounded-xl 
                         hover:shadow-md transition duration-200"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full 
                              bg-orange-50 text-orange-600 group-hover:bg-orange-500 
                              group-hover:text-white transition">
                <AlertTriangle size={18} />
              </div>

              {/* Text */}
              <span className="text-gray-700 text-base font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommonIssues;