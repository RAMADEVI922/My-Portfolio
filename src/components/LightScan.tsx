const LightScan = () => {
  return (
    <div className="pointer-events-none fixed left-[8%] top-0 z-10 hidden h-full w-px md:block">
      <div className="absolute h-40 w-px animate-light-scan bg-gradient-to-b from-transparent via-primary/40 to-transparent blur-sm" />
    </div>
  );
};

export default LightScan;
