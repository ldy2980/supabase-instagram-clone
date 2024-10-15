import LogoutButton from "components/logout-button";

export const metadata = {
  title: "InstaClone",
  description: "Instagram clone",
};

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="font-bold text-xl">Welcome {"USER"}</h1>
      <LogoutButton />
    </main>
  );
}
