export const dummyChats = [
  {
    id: 1,
    name: "Alice Johnson",
    lastMessage: "Cool! Let's share with the team",
    time: "10:18 AM",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    messages: [
      { from: "Alice", text: "Hey! Did you check the new design?", time: "10:15 AM" },
      { from: "Me", text: "Yes, looks amazing 👌", time: "10:17 AM" },
      { from: "Alice", text: "Cool! Let's share with the team", time: "10:18 AM" },
      { from: "Me", text: "Sure, I’ll prepare a quick deck 📑", time: "10:19 AM" },
      { from: "Alice", text: "Awesome, send it before lunch.", time: "10:20 AM" },
      { from: "Alice", text: "Hey! Did you check the new design?", time: "10:15 AM" },
      { from: "Me", text: "Yes, looks amazing 👌", time: "10:17 AM" },
      { from: "Alice", text: "Cool! Let's share with the team", time: "10:18 AM" },
      { from: "Me", text: "Sure, I’ll prepare a quick deck 📑", time: "10:19 AM" },
      { from: "Alice", text: "Awesome, send it before lunch.", time: "10:20 AM" },
    ],
  },
  {
    id: 2,
    name: "Rahul Sharma",
    lastMessage: "Cool, I’ll push to GitHub.",
    time: "10:05 AM",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    messages: [
      { from: "Rahul", text: "I’ll update the docs by evening.", time: "09:45 AM" },
      { from: "Me", text: "Thanks Rahul 👍", time: "09:50 AM" },
      { from: "Me", text: "Also, make sure to add screenshots.", time: "09:55 AM" },
      { from: "Rahul", text: "Good point, I’ll add them too.", time: "10:00 AM" },
      { from: "Rahul", text: "Cool, I’ll push to GitHub.", time: "10:05 AM" },
    ],
  },
  {
    id: 3,
    name: "Emily Carter",
    lastMessage: "Thanks! I’ll update the calendar invite.",
    time: "Yesterday",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    messages: [
      { from: "Emily", text: "Meeting postponed to tomorrow 🚀", time: "Yesterday 2:00 PM" },
      { from: "Me", text: "Got it, thanks!", time: "Yesterday 2:05 PM" },
      { from: "Me", text: "Is it same time?", time: "Yesterday 2:06 PM" },
      { from: "Emily", text: "Yes, 11 AM sharp.", time: "Yesterday 2:10 PM" },
      { from: "Emily", text: "Thanks! I’ll update the calendar invite.", time: "Yesterday 2:12 PM" },
    ],
  },
  {
    id: 4,
    name: "David Lee",
    lastMessage: "Will do, thanks 🙌",
    time: "Yesterday",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    messages: [
      { from: "David", text: "Got it, thanks for the update!", time: "Yesterday 4:00 PM" },
      { from: "Me", text: "Anytime, buddy!", time: "Yesterday 4:02 PM" },
      { from: "Me", text: "Don’t forget to ping Mark too.", time: "Yesterday 4:05 PM" },
      { from: "David", text: "Right, will do, thanks 🙌", time: "Yesterday 4:06 PM" },
    ],
  },
  {
    id: 5,
    name: "Sophia Patel",
    lastMessage: "Great, see you then!",
    time: "Mon",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    messages: [
      { from: "Sophia", text: "Let’s catch up on call later.", time: "Mon 11:00 AM" },
      { from: "Me", text: "Sure, just ping me 📞", time: "Mon 11:05 AM" },
      { from: "Me", text: "Evening works better for me.", time: "Mon 11:06 AM" },
      { from: "Sophia", text: "Perfect, 6 PM?", time: "Mon 11:08 AM" },
      { from: "Me", text: "Yes, that works.", time: "Mon 11:10 AM" },
      { from: "Sophia", text: "Great, see you then!", time: "Mon 11:12 AM" },
    ],
  }
]


export const dummyTeamChats = [
  
  {
    id: 2,
    teamName: "Design Team",
    members: ["Alice", "Rahul", "Sophia", "Me"],
    lastMessage: "Let’s finalize the Figma screens 🎨",
    time: "Today",
    img: "https://api.dicebear.com/7.x/identicon/svg?seed=design",
    messages: [
      { from: "Alice", text: "Let’s finalize the Figma screens 🎨", time: "10:00 AM" },
      { from: "Rahul", text: "I’ll prepare the color palette 🌈", time: "10:02 AM" },
      { from: "Sophia", text: "I’ll do typography research 🔠", time: "10:05 AM" },
      { from: "Me", text: "Nice! I’ll organize in Notion 📋", time: "10:07 AM" },
    ],
  },
  {
    id: 3,
    teamName: "Dev Team",
    members: ["Michael", "Laura", "Amit", "Me"],
    lastMessage: "Backend API deployed 🚀",
    time: "Yesterday",
    img: "https://api.dicebear.com/7.x/identicon/svg?seed=devteam",
    messages: [
      { from: "Michael", text: "Backend API deployed 🚀", time: "5:00 PM" },
      { from: "Laura", text: "Testing payments integration 💳", time: "5:05 PM" },
      { from: "Amit", text: "Started fixing UI bugs 🐞", time: "5:07 PM" },
      { from: "Me", text: "Awesome, I’ll test it all 🙌", time: "5:10 PM" },
    ],
  },
]
