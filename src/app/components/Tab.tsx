import { useState, MouseEvent, DragEvent, TouchEventHandler } from "react";

export default ({
  children,
  tab,
  index,
  setTabs,
  Tabs,
}: {
  children: React.ReactNode;
  tab: { id: number; name: string };
  index: number;
  setTabs: (tabs: { id: number; name: string }[]) => void;
  Tabs: any;
}) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 10,
    y: 10,
  });
  const [size, setSize] = useState<{ w: number; h: number }>({
    w: 200,
    h: 100,
  });
  const onDrag = (event: DragEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div
      draggable
      onDrag={onDrag}
      onDragEnd={onDrag}
      className="m-1 flex flex-col bg-gray-300 border-2 border-black"
      key={tab.id}
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.w}px`,
        height: `${size.h}px`,
        transform: "translate(-50%,-50%)",
      }}
    >
      {/* Tab content */}
      <div className="w-full bg-gray-400 text-black">
        <p>
          ${tab.id} {tab.name}
        </p>
        <span
          onClick={(event: MouseEvent<HTMLSpanElement>) => {
            event.preventDefault();
            let newTabs = Tabs.filter(
              (_: any, tabIndex: number) => tabIndex !== index
            );
            setTabs(newTabs);
          }}
          className="text-red-800"
        >
          X
        </span>
      </div>
      {children}
    </div>
  );
};
