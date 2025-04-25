// db/playlists.js
const playlistsDB = [
    {
      id: 1,
      name: "Chill Hits",
      description: "Relax and vibe with mellow tunes.",
      cover: "src/images/chill.jpg",
      songs: [
        { title: "Ocean Drive", artist: "Duke Dumont" },
        { title: "Sunset Lover", artist: "Petit Biscuit" },
      ],
    },
    {
      id: 2,
      name: "Workout Mix",
      description: "Pump up your workout with high-energy tracks.",
      cover: "src/images/workout.jpg",
      songs: [
        { title: "Stronger", artist: "Kanye West" },
        { title: "Titanium", artist: "David Guetta ft. Sia" },
      ],
    },
    {
      id: 3,
      name: "Top Hits 2025",
      description: "Stay updated with this year's biggest tracks.",
      cover: "src/images/top.jpg",
      songs: [
        { title: "Hit Me Up", artist: "Nova" },
        { title: "Eclipse", artist: "Solar Drift" },
      ],
    }
  ];
  
  export default playlistsDB;