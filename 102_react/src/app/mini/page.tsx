"use client";
import TicTacToe from "@/components/mini/TicTacToe";
import { ReactElement } from "react";
type COMPONENT_ARR = [
  {
    name: string;
    component: ReactElement;
  }
];

export default function Home() {
  const componentArr: COMPONENT_ARR = [
    {
      name: "tictactoe",
      component: <TicTacToe />,
    },
  ];
  return (
    <div className="min-h-screen w-full">
      {componentArr.map((item, idx) => {
        return (
          <div
            className="h-screen flex justify-center items-center w-full text-black"
            key={item.name + "a" + idx}
          >
            {item.component}
          </div>
        );
      })}
    </div>
  );
}
