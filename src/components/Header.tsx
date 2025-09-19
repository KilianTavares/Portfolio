"use client";
import { use } from "react";
import { useUser } from "@/contexts/userContext/user-provider";

export default function Header() {
  const { userPromise } = useUser();
  const user = use(userPromise); // Suspends until resolved

  return (
    <header className="w-max flex text-white">
      <div>
        <h1 className="text-5xl py-4 mb-8 overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold animate-[typing_1.7s_steps(20)_alternate,blink_0.7s_infinite]">
          {user.name}
        </h1>
      </div>

      <div>
        <p className="text-5xl p-4 mb-8 font-bold opacity-0 animate-[fadeIn_1s_ease-in_1.7s_forwards]">
          {user.profession}
        </p>
      </div>
    </header>
  );
}
