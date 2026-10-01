import { Navbar as NavbarClient } from "./NavbarClient";

export async function Navbar() {
  let starCount: number | null = null;

  try {
    const response = await fetch(
      "https://api.github.com/repos/Saurabh-2607/GreatUI",
      {
        next: { revalidate: 60 },
      },
    );

    if (response.ok) {
      const data = await response.json();
      if (data && typeof data.stargazers_count === "number") {
        starCount = data.stargazers_count;
      }
    }
  } catch {}

  return <NavbarClient starCount={starCount} />;
}

export default Navbar;
