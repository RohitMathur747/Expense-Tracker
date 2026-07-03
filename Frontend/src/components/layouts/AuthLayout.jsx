import React from "react";
import CARD_2 from "../../assets/images/chart.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="w-full md:w-[50vw] min-h-screen px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker </h2>
        {children}
      </div>

      <div className="hidden md:flex md:w-[50vw] min-h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5"></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] right-[10%]"></div>
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5"></div>

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Taracking Your Expenses and Income"
            values="430,000"
            color="bg-primary"
          />

          <img
            src={CARD_2}
            alt="card"
            className="w-80 h-80 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, values, color }) => {
  return (
    <div
      className={`w-150 h-20 flex items-center gap-4 p-4 rounded-lg ${color} mt-[40px]`}
    >
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="text-sm text-white">{label}</p>
        <p className="text-lg font-semibold text-white">{values}</p>
      </div>
    </div>
  );
};
