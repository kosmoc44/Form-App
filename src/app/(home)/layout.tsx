import LandingHeader from "@/components/LandingHeader/LandingHeader";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingHeader />
      {children}
    </>
  );
}

export default HomeLayout;
