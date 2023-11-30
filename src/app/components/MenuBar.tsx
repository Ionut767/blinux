export default ({
  OpenTab,
}: {
  OpenTab: (tab: { id: number; name: string }) => void;
}) => {
  return (
    <footer className="flex flex-row w-screen h-[5vh] absolute bottom-0 bg-gray-600/30 backdrop-blur-sm">
      {["C#", "C++"].map((e, index) => (
        <p
          key={index}
          className="px-1"
          onClick={() => OpenTab({ id: index, name: e })}
        >
          {/* Menu Bar content */}
          {e}-{index}
        </p>
      ))}
    </footer>
  );
};
