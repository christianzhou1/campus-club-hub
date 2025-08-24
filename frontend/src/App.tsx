import { useEffect, useState } from "react";
import "./App.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

import { ClubListView } from "./components/ui/club-list-view";

import { type Club } from "../../shared/types/club.ts";

function App() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/clubs")
      .then((res) => res.json())

      .then((data) => {
        setClubs(data);
        setLoading(false);
        console.log(data);
      })

      .catch((err) => {
        console.error("Error fetching clubs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Loading clubs...</p>;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />

      <ClubListView clubs={clubs} />

      <div className="p-6">
        <h1 className="text-2xl">Campus Clubs</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
