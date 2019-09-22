class Github {
  constructor() {
    this.client_id = "390ce69e2c998c7b695d";
    this.client_secret = "61d57ce67e0756dc1c5d0c691271e6e5220ffe7d";
    this.repo_count = 5;
    this.repo_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repo = await repoResponse.json();
    return {
      profile,
      repo
    };
  }
}
