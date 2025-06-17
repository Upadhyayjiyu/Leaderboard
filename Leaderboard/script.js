const players = [
  {
    name: "AceHunter",
    score: 9800,
    winRate: 92,
    avatar: "https://i.pravatar.cc/40?img=10",
    country: "https://flagcdn.com/w40/us.png"
  },
  {
    name: "PixelQueen",
    score: 9120,
    winRate: 87,
    avatar: "https://i.pravatar.cc/40?img=12",
    country: "https://flagcdn.com/w40/gb.png"
  },
  {
    name: "ShadowNinja",
    score: 8850,
    winRate: 90,
    avatar: "https://i.pravatar.cc/40?img=13",
    country: "https://flagcdn.com/w40/jp.png"
  },
  {
    name: "CyberKnight",
    score: 8600,
    winRate: 84,
    avatar: "https://i.pravatar.cc/40?img=14",
    country: "https://flagcdn.com/w40/de.png"
  },
  {
    name: "NovaSniper",
    score: 8350,
    winRate: 88,
    avatar: "https://i.pravatar.cc/40?img=15",
    country: "https://flagcdn.com/w40/fr.png"
  }
];

function displayLeaderboard() {
  const container = document.getElementById("leaderboard-body");
  container.innerHTML = "";

  players.sort((a, b) => b.score - a.score);

  players.forEach((player, index) => {
    const row = document.createElement("div");
    row.className = "player-entry";
    row.innerHTML = `
      <span>${index + 1}</span>
      <div class="player-info">
        <img src="${player.avatar}" alt="${player.name}" />
        <span>${player.name}</span>
      </div>
      <img class="country-flag" src="${player.country}" alt="flag" />
      <span>${player.score}</span>
      <span>${player.winRate}%</span>
    `;
    container.appendChild(row);
  });
}

displayLeaderboard();