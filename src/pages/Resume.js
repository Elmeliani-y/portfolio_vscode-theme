import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />
              • <span className="text-blue_vs">lycée abdellah ben brahim</span>
              <br />
              •{" "}
              <span className="italic text-lightblue_vs">
                baccaleauréat sience physique et chimie biof
              </span>
              <br />
              •{" "}
              <span className="text-brown_vs">
                Sept 2021 - jun 2022
              </span>
            </code>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4"></div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />
              • <span className="text-blue_vs">ISTA NTIC SYBA</span>
              <br />
              •{" "}
              <span className="italic text-lightblue_vs">
                technicien specilisée en developpement digitale option web fullstack
              </span>
              <br />
              •{" "}
              <span className="text-brown_vs">
                Sept 2022 - en cours
              </span>
            </code>
          </div>
        </div>
        {/* Additional education entries can be added in a similar structure */}
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Langages : JavaScript (React, Node.js), PHP, Python, C
              <br />• Frameworks : Laravel, Express.js
              <br />• Front-end : HTML, CSS, Bootstrap, Tailwind
              <br />• Base de données : MySQL, MongoDB
              <br />• CMS : WordPress
              <br />• Architecture : Microservices
              <br />• Outils : Git, Webpack
              <br />• Duis ut congue dui.
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
