import React, { FC, Fragment, useCallback, useEffect, useState } from "react";
import { PlugButton } from "@raydeck/useplug";
import background from "./assets/bg.png";
import { ActorSubclass } from "@dfinity/agent";
import { _SERVICE } from "./declarations/heartbeat/heartbeat.did";
import { createActor } from "./declarations/heartbeat";
import { FaGithub } from "react-icons/fa";
import config from "./config.json";
import { ArrowUpIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";
import ModalMD from "./ModalMD";
import raw from "raw.macro";
const markdown = raw("./about.md");

const {
  host,
  canisters: { backend },
} = config[config.mode as "production" | "local"];

const useBackend = () => {
  const [actor, setActor] = useState<ActorSubclass<_SERVICE>>();
  useEffect(() => {
    (async () => {
      const a = await createActor(backend, {
        agentOptions: { host },
      });
      setActor(a);
    })();
  }, []);
  return actor;
};
let timer: NodeJS.Timer;
export const LoggedOut: FC = () => {
  const [newClass, setNewClass] = useState("");
  const [plugNewClass, setPlugNewClass] = useState("opacity-0");
  const [iconNewClass, setIconNewClass] = useState("text-black");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // setNewClass("blur-xl");
      setPlugNewClass("opacity-100");
    }, 2000);
  }, []);

  return (
    <Fragment>
      <div
        className={[
          "h-screen w-screen absolute  bg-cover transition duration-1000 ",
          newClass,
        ].join(" ")}
        style={{ backgroundImage: `url(${background})` }}
        onClick={() => {
          setNewClass("backdrop-blur");
          setPlugNewClass("opacity-100");
        }}
      ></div>

      <div
        className={[
          "h-screen w-screen absolute flex justify-around content-around transition duration-1000 ",
        ].join(" ")}
      >
        <div
          className={[
            "flex flex-col justify-between transition-opacity  duration-1000",
            plugNewClass,
          ].join(" ")}
        >
          <div className="bg-black bg-opacity-50 flex flex-row w-screen justify-between p-4">
            <a
              href="https://github.com/akshay-rakheja/supernova2022"
              className="text-gray-200 hover:text-gray-100 hover:scale-105 transition duration-250"
            >
              <div className="flex flex-row ">
                <FaGithub size={20} />
                <span className="ml-2 font-medium">Fork us on GitHub</span>
              </div>
            </a>
            <div className=" font-bold text-white opacity-50">
              ...or just enjoy the pulses every 10s
            </div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="flex justify-around w-full flex-row">
              <div className="flex">
                <PlugButton dark title="Get Started With Plug" />
              </div>
            </div>
            <div>
              <div className="flex justify-around w-full flex-row">
                <ArrowUpIcon
                  className={[
                    "w-20 h-20 transition duration-1000 ",
                    iconNewClass,
                  ].join(" ")}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-around w-full flex-row"></div>
          <div className="flex justify-around w-full flex-row">
            <div className="flex">
              <button
                className="mb-6 bg-black bg-opacity-80 border-2 border-orange-500 text-md font-medium text-white p-2 rounded-full transition hover:scale-105 transition-duration-250 hover:bg-opacity-60"
                onClick={(event) => {
                  setIsOpen(true);
                  console.log("clicky clicky");
                }}
              >
                <div className="flex flex-row">
                  <QuestionMarkCircleIcon className="h-6 w-6 mr-2" />
                  About This Service
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalMD show={isOpen} setShow={setIsOpen} markdown={markdown} />
    </Fragment>
  );
};

/* This example requires Tailwind CSS v2.0+ */

export default LoggedOut;
