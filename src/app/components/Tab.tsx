import { useState, MouseEvent, DragEvent } from "react";

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
    x: 0,
    y: 0,
  });

  const onDrag = (event: DragEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      draggable
      onDrag={onDrag}
      onDragEnd={onDrag}
      className="bg-green-200 m-1 flex flex-row top-0"
      key={tab.id}
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%,-50%)",
      }}
    >
      {/* Tab content */}
      <p>
        {tab.id} is {tab.name}
      </p>
      <span
        onClick={(event: MouseEvent<HTMLSpanElement>) => {
          event.preventDefault();
          let newTabs = Tabs.filter(
            (_: any, tabIndex: number) => tabIndex !== index
          );
          setTabs(newTabs);
        }}
        className="text-red-800 mx-1"
      >
        X
      </span>
    </div>
  );
};
