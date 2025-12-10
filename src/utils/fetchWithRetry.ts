export async function fetchWithRetry(
  username: string,
  token: string,
  retries = 3,
  delay = 1000,
): Promise<Response> {
  const GITHUB_API_URL = `https://api.github.com/search/repositories?q=user:${username}+stars:>1&sort=stars&order=desc&per_page=10`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(GITHUB_API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
      });

      if (response.ok) {
        return response;
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);

      console.error(`Attempt ${attempt} failed: ${errorMessage}`);

      if (attempt === retries) {
        throw new Error(`Failed after ${retries} attempts: ${errorMessage}`);
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  // This line is unreachable but added to satisfy TS about all code paths returning.
  throw new Error(
    "Unexpected error: retries loop exited without returning or throwing.",
  );
}
