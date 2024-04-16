import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");
const JSIcon = require("../assets/icons/JSIcon.png");
const PYIcon = require("../assets/icons/python.png")
const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const WebList = () => (
    <div>
      <a href="https://github.com/Elmeliani-y/Weather_app">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>weather app </p>
        </div>
      </a>
      <a href="https://github.com/Elmeliani-y/kanban-to-do-list">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>kanban style to-do list</p>
        </div>
      </a>
      <a href="https://github.com/Elmeliani-y/E-commerce">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>E-commerce in react</p>
        </div>
      </a>
      <a href="https://github.com/Elmeliani-y/Py-Tube">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={PYIcon}
            alt="PY Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Youtube downloader</p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Web</p>
            </div>
            {showWebList ? <WebList /> : null}
          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a href="https://github.com/Elmeliani-y">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="mailto:youssefelmeliani55@gmail.com">
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
