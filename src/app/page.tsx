"use client";
import MenuBar from "./components/MenuBar";
import { useState, useCallback, useEffect } from "react";
import Tab from "./components/Tab";

export default function Home() {
  const [Tabs, setTabs] = useState<{ id: number; name: string }[]>([]);
  // const [ErrTabs, setErrTabs] = useState<{ id: number; name: string }[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const OpenTab = useCallback(
    ({ name }: { name: string }) => {
      setTabs((currentTabs) => [...currentTabs, { id: idCounter, name }]);
      setIdCounter(idCounter + 1);
    },
    [Tabs, idCounter]
  );

  return (
    <>
      <main>
        {/* Makes an array of current oppened apps. */}
        {Tabs.length !== 0 &&
          Tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              //Pass the tab to use its attributes
              tab={tab}
              // Pass setTabs to be able to close any tab by removing it from the array
              setTabs={setTabs}
              //Pass the Tabs array
              Tabs={Tabs}
            >
              {/* Content marked as a child for Tab component */}
              <p>This is a code =P My id is the $ above!!!</p>
            </Tab>
          ))}
      </main>
      {/* Function is called when is pressed on an app */}
      <MenuBar OpenTab={OpenTab} />
    </>
  );
}
