export async function fetchWithRetry(
  username,
  token,
  retries = 3,
  delay = 1000,
) {
  // Construct the GitHub API URL with dynamic username and additional parameters
  const GITHUB_API_URL = `https://api.github.com/search/repositories?q=user:${username}+stars:>1&sort=stars`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Try the fetch operation with Bearer token in headers
      const response = await fetch(GITHUB_API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use the Bearer token for authorization
        },
        mode: "cors",
      });

      // If the fetch succeeds, return the response
      if (response.ok) {
        return response;
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      // Log the attempt and error
      console.error(`Attempt ${attempt} failed: ${error.message}`);

      // If this was the last retry, throw the error
      if (attempt === retries) {
        throw new Error(`Failed after ${retries} attempts: ${error.message}`);
      }

      // Wait for the delay before retrying
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
