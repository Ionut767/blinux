"use client";
import MenuBar from "./components/MenuBar";
import { useState, useCallback, useEffect } from "react";
import Tab from "./components/Tab";

export default function Home() {
  const [Tabs, setTabs] = useState<{ id: number; name: string }[]>([]);
  const [ErrTabs, setErrTabs] = useState<{ id: number; name: string }[]>([]);
  const OpenTab = useCallback(
    ({ id, name }: { id: number; name: string }) => {
      setTabs((currentTabs) => [...currentTabs, { id, name }]);
    },
    [Tabs]
  );

  return (
    <>
      <main>
        {Tabs.length !== 0 &&
          Tabs.map((tab, index) => (
            <Tab
              key={index}
              tab={tab}
              index={index}
              setTabs={setTabs}
              Tabs={Tabs}
            >
              <p>This is a code =P</p>
            </Tab>
          ))}
      </main>
      <MenuBar OpenTab={OpenTab} />
    </>
  );
}
