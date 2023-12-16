import { useState, MouseEvent, DragEvent, useRef } from "react";

export default ({
  children,
  tab,
  setTabs,
  Tabs,
}: {
  children: React.ReactNode;
  tab: { id: number; name: string; zindex: number };
  setTabs: (tab: { id: number; name: string; zindex: number }[]) => void;
  Tabs: { id: number; name: string; zindex: number }[];
}) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 10,
    y: 10,
  });
  const [offset, setOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    setOffset({ x: event.clientX - position.x, y: event.clientY - position.y });

    const newTabs = Tabs.map((tabItem) => {
      if (tabItem.id === tab.id) {
        const newZindex =
          Math.max(...Tabs.map((t) => t.zindex), tabItem.zindex) + 1;
        return {
          ...tabItem,
          zindex: tabItem.zindex === newZindex ? tabItem.zindex : newZindex,
        };
      }
      return tabItem;
    });

    setTabs(newTabs);

    const img = new Image();
    event.dataTransfer.setDragImage(img, 0, 0);
  };

  const onDrag = (event: DragEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX - offset.x, y: event.clientY - offset.y });
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDrag}
      className="m-1 flex flex-col bg-gray-300 border-2 border-black resize"
      key={tab.id}
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `40vw`,
        height: `30vh`,
        transform: "translate(-50%,-50%)",
        zIndex: tab.zindex,
      }}
    >
      <div className="flex flex-row justify-between w-full bg-gray-400 text-black">
        <p>
          ${tab.id} {tab.name}
        </p>
        <span
          onClick={(event: MouseEvent<HTMLSpanElement>) => {
            event.preventDefault();
            const newTabs = Tabs.filter((tabItem) => tabItem.id !== tab.id);
            setTabs(newTabs);
          }}
          className="text-red-800 p-1"
        >
          X
        </span>
      </div>
      {children}
    </div>
  );
};
