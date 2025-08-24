import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// import { type Club } from "@shared/types/club";
import { type Club } from "../../shared/types/club.ts";
import { type Event } from "../../shared/types/event.ts";

import { ModeToggle } from "./components/mode-toggle.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

const ClubPage = () => {
  const { id } = useParams<{ id: string }>();
  const [club, setClub] = useState<Club | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // fetch club details
    fetch(`http://localhost:3000/api/clubs/${id}`)
      .then((res) => res.json())
      .then(setClub);

    // fetch events for this club
    fetch(`http://localhost:3000/api/clubs/${id}/events`)
      .then((res) => res.json())
      .then(setEvents);
  }, [id]);

  if (!club) return <p>Loading club...</p>;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div style={{ padding: "1rem" }}>
        <ModeToggle />
        <h1>{club.name}</h1>
        <p>{club.description}</p>
        <h2>Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <strong>{event.title}</strong> -{" "}
              {new Date(event.date).toLocaleDateString()}
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
};

export default ClubPage;
