import { Moon, Sun } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <ToggleGroup type="single">
      <ToggleGroupItem
        value="light"
        area-label="Toggle light mode"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:-rotate-90" />
      </ToggleGroupItem>

      <ToggleGroupItem
        value="dark"
        area-label="Toggle dark mode"
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
