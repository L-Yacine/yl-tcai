const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-gradient-to-l from-[#202f3a]  to-[#0c3656] overflow-auto">
      <div className="w-full h-full max-w-screen-xl mx-auto">{children}</div>
    </main>
  );
};

export default LandingLayout;
