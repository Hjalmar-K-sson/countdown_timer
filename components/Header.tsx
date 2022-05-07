import exp from "constants";
import React from "react";

interface msgProps {
    message: string,
}

const Header = ({message}: msgProps) => {
    return (
    <header className="mx-auto mt-2">
      <h1 className="text-2xl mt-8 md:text-4xl font-bold font-koulen text-rose-500 font-bold text-center mx-auto ">
        {message ? message : "WE'RE LAUNCHING SOON"}
      </h1>
    </header>
    )
}

export default Header;