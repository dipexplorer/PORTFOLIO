/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Contribution {
  id: number;
  cid: number;
  repo: string;
  label: string;
  url: string;
  details: string;
}

const REPOS = [
  { owner: "RatLoopz", repo: "sahidawa-india" },
  { owner: "dipexplorer", repo: "gridmind" },
  { owner: "dipexplorer", repo: "LegalHub" },
  { owner: "dipexplorer", repo: "LearnSight" },
  { owner: "dipexplorer", repo: "AADSS" },
  { owner: "dipexplorer", repo: "VideTube" },
];

// No fallback data - strictly dynamic as requested.

export async function fetchGithubContributions(): Promise<Contribution[]> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    "Accept": "application/vnd.github.v3+json",
  };
  
  // Apply token if available to bypass strict rate limits
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const contributions: Contribution[] = [];
  let globalId = 0;

  for (let cid = 0; cid < REPOS.length; cid++) {
    const { owner, repo } = REPOS[cid];
    try {
      // Fetch the 15 most recent commits authored specifically by the user for each repository
      // Using ISR: Cache revalidates every 3600 seconds (1 hour)
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=15&author=dipexplorer`, {
        headers,
        next: { revalidate: 3600 } 
      });

      if (!res.ok) {
        console.warn(`[GitHub API] Failed to fetch commits for ${repo}: ${res.status} ${res.statusText}`);
        continue;
      }

      const commits = await res.json();
      
      const clusterContributions = commits.slice(0, 15).map((commit: any) => {
        const sha = commit.sha.substring(0, 7);
        const messageLines = commit.commit.message.split('\\n');
        const title = messageLines[0]; 
        const body = messageLines.slice(1).join(' ').trim() || "Recent repository commit.";

        return {
          id: globalId++,
          cid: cid,
          repo: `${owner} / ${repo}`,
          label: `[Commit ${sha}] ${title.length > 35 ? title.substring(0, 35) + '...' : title}`,
          url: commit.html_url, // Exact commit URL!
          details: body.length > 80 ? body.substring(0, 80) + "..." : body,
        };
      });

      contributions.push(...clusterContributions);

    } catch (e) {
      console.error(`[GitHub API] Error fetching for ${repo}`, e);
    }
  }

  return contributions;
}
