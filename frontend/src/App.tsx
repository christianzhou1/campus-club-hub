import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

interface Club {
  id: number;
  name: string;
  description: string;
}

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
      <div className="p-6">
        <h1 className="text-2xl">Campus Clubs</h1>
        <ul className="space-y-3">
          {clubs.map((club) => (
            <li key={club.id}>
              <Link to={`/clubs/${club.id}`}>
                <strong>{club.name}</strong>
              </Link>
              := {club.description}
            </li>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
}

export default App;
