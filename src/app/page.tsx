"use client";
import MenuBar from "./components/MenuBar";
import { useState, useCallback, useEffect } from "react";
import Tab from "./components/Tab";

export default function Home() {
  const [maxZindex, setMaxZindex] = useState<number>(1);
  const [Tabs, setTabs] = useState<
    { id: number; name: string; zindex: number }[]
  >([]);
  const [idCounter, setIdCounter] = useState<number>(0);

  const OpenTab = useCallback(
    ({ name }: { name: string }) => {
      setTabs((currentTabs) => [
        ...currentTabs,
        { id: idCounter, name, zindex: maxZindex },
      ]);
      setIdCounter(idCounter + 1);
      setMaxZindex(Math.max(...Tabs.map((t) => t.zindex), maxZindex) + 1);
    },
    [Tabs, idCounter, maxZindex]
  );

  useEffect(() => {
    if (Tabs.length === 0) {
      setIdCounter(0);
      setMaxZindex(1);
    }
  }, [Tabs]);

  return (
    <>
      <main>
        {Tabs.map((tab) => (
          <Tab key={tab.id} tab={tab} setTabs={setTabs} Tabs={Tabs}>
            <p>This is a code =P My id is the $ above!!!</p>
          </Tab>
        ))}
      </main>
      <MenuBar OpenTab={OpenTab} />
    </>
  );
}
