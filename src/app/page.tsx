"use client";
import MenuBar from "./components/MenuBar";
import { useState, useCallback, useEffect } from "react";

export default function Home() {
  const [Tabs, setTabs] = useState<{ id: number; name: string }[]>([]);
  const OpenTab = useCallback(
    ({ id, name }: { id: number; name: string }) => {
      setTabs((currentTabs) => [...currentTabs, { id, name }]);
    },
    [Tabs]
  );
  useEffect(() => {
    Tabs.length !== 0 && console.log(Tabs);
  }, [Tabs]);

  return (
    <>
      <main>
        <p>Hello Space-1</p>
        {Tabs.length !== 0 &&
          Tabs.map((tab, index) => (
            <div className="bg-green-200 m-1 flex flex-row top-0" key={index}>
              {/* Tab content */}
              <p>
                {tab.id} is {tab.name}
              </p>
              <span
                onClick={() => {
                  let newTabs = Tabs.filter(
                    (_, tabIndex) => tabIndex !== index
                  );
                  setTabs(newTabs);
                }}
                className="text-red-800 mx-1"
              >
                X
              </span>
            </div>
          ))}
      </main>
      <MenuBar OpenTab={OpenTab} />
    </>
  );
}
