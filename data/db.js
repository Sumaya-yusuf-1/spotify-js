export const playlists = [
  {
    name: "Liked Songs",
    description: "Your personal collection of favorite tracks.",
    albumImage: "/src/images/istockphoto-1324638796-612x612.jpg",
    songs: [
      { title: "Love Story", duration: "3:55", audioSrc: "src/audios/love_story.mp3" },
      { title: "Levitating", duration: "3:24", audioSrc: "src/audios/levitating.mp3" },
      { title: "Peaches", duration: "3:10", audioSrc: "src/audios/peaches.mp3" },
      { title: "Blinding Lights", duration: "3:20", audioSrc: "src/audios/blinding_lights.mp3" },
      { title: "Shape of You", duration: "3:50", audioSrc: "src/audios/shape_of_you.mp3" }
    ]
  },
  {
    name: "YOUR TOP 2025",
    description: "The most listened-to songs this year!",
    albumImage: "/src/images/clean-cardboard-cover-7inch-vinyl-260nw-1902775822.webp",
    songs: Array.from({ length: 20 }, (_, i) => ({
      title: `Top Hit ${i + 1}`,
      duration: `3:${(30 + i) % 60}`.padStart(4, "0"),
      audioSrc: `src/audios/top_hit_${i + 1}.mp3`
    }))
  },
  {
    name: "Discover Weekly",
    description: "A fresh selection just for you every week.",
    albumImage: "/src/images/pexels-photo-167092.jpeg",
    songs: Array.from({ length: 15 }, (_, i) => ({
      title: `Discovery ${i + 1}`,
      duration: `3:${(10 + i * 2) % 60}`.padStart(4, "0"),
      audioSrc: `src/audios/discovery_${i + 1}.mp3`
    }))
  },
  {
    name: "Rock Classics",
    description: "Timeless rock anthems from legendary bands.",
    albumImage: "/src/images/vinyl-record-melting-realistic-composition-large-black-drops-molten-vinyl-drip-off-record-vector-illustration_1284-73264.avif",
    songs: Array.from({ length: 20 }, (_, i) => ({
      title: `Rock Song ${i + 1}`,
      duration: `4:${(15 + i * 3) % 60}`.padStart(4, "0"),
      audioSrc: `src/audios/rock_${i + 1}.mp3`
    }))
  },
  {
    name: "Chill Vibes",
    description: "Relaxing and soothing tracks to calm your mind.",
    albumImage: "/src/images/istockphoto-1303857490-640x640.jpg",
    songs: Array.from({ length: 25 }, (_, i) => ({
      title: `Chill Track ${i + 1}`,
      duration: `3:${(33 + i * 2) % 60}`.padStart(4, "0"),
      audioSrc: `src/audios/chill_${i + 1}.mp3`
    }))
  }
];