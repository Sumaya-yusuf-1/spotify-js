const sharedAudio = "src/images/Quran Tilawat Status _ Quran Recitation Status _ Quran WhatsApp Status.mp3";
const duration = "0:10";

export const playlists = [
  {
    name: "Liked Songs",
    description: "Your personal collection of favorite tracks.",
    albumImage: "/src/images/istockphoto-1324638796-612x612.jpg",
    songs: [
      { title: "Love Story", duration, audioSrc: sharedAudio },
      { title: "Levitating", duration, audioSrc: sharedAudio },
      { title: "Peaches", duration, audioSrc: sharedAudio },
      { title: "Blinding Lights", duration, audioSrc: sharedAudio },
      { title: "Shape of You", duration, audioSrc: sharedAudio }
    ]
  },
  {
    name: "YOUR TOP 2025",
    description: "The most listened-to songs this year!",
    albumImage: "/src/images/clean-cardboard-cover-7inch-vinyl-260nw-1902775822.webp",
    songs: Array.from({ length: 20 }, (_, i) => ({
      title: `Top Hit ${i + 1}`,
      duration,
      audioSrc: sharedAudio
    }))
  },
  {
    name: "Discover Weekly",
    description: "A fresh selection just for you every week.",
    albumImage: "/src/images/pexels-photo-167092.jpeg",
    songs: Array.from({ length: 15 }, (_, i) => ({
      title: `Discovery ${i + 1}`,
      duration,
      audioSrc: sharedAudio
    }))
  },
  {
    name: "Rock Classics",
    description: "Timeless rock anthems from legendary bands.",
    albumImage: "/src/images/vinyl-record-melting-realistic-composition-large-black-drops-molten-vinyl-drip-off-record-vector-illustration_1284-73264.avif",
    songs: Array.from({ length: 20 }, (_, i) => ({
      title: `Rock Song ${i + 1}`,
      duration,
      audioSrc: sharedAudio
    }))
  },
  {
    name: "Chill Vibes",
    description: "Relaxing and soothing tracks to calm your mind.",
    albumImage: "/src/images/istockphoto-1303857490-640x640.jpg",
    songs: Array.from({ length: 25 }, (_, i) => ({
      title: `Chill Track ${i + 1}`,
      duration,
      audioSrc: sharedAudio
    }))
  }
];