export default ({
  OpenTab,
}: {
  // Req args
  OpenTab: (tab: { name: string }) => void;
}) => {
  return (
    <footer className="flex flex-row w-screen h-[5vh] absolute bottom-0 bg-gray-600/30 backdrop-blur-sm z-[9999]">
      {/* Array with apps name */}
      {["C#", "C++"].map((e, index) => (
        <p
          key={index}
          className="px-1"
          // When app is activated, OpenTab will be called with some data. (Don't use id only if you need app Menu Bar ID)
          onClick={() => OpenTab({ name: e })}
        >
          {/* Menu Bar content. Add images/text/icons */}
          {e}-{index}
        </p>
      ))}
    </footer>
  );
};
