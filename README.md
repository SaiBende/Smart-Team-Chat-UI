# 📱 Smart Chat UI

A modern **React + Vite + Tailwind + shadcn/ui** powered chat application UI.  
It simulates WhatsApp/Slack-like functionality with personal and team chats, threaded conversations, AI placeholders, and a clean, modern design.  

🔗 **Live Demo:** [https://smartchatui.vercel.app/](https://smartchatui.vercel.app/)

---

## 📖 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Next Improvements](#-next-improvements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Features

### 🔹 Sidebar Navigation
- Built with **shadcn/ui Sidebar**.  
- Sections: **Home, Chats, Team Chats, Voice Call, Video Call, Search, Settings**.  
- Personal chats and team chats displayed separately.  
- Active chat is highlighted.  

### 🔹 Chat Window
- **Header**:
  - Personal chats → name + online status.  
  - Team chats → team name + members list.  
- **Actions**: Call, Video Call, Search.  
- **AI Placeholder Buttons**:  
  - 🪄 Summarize Thread → inserts a dummy summary message.  
  - 💬 Smart Reply Suggestion → suggests a quick reply (user must confirm).  
- **Messages**:
  - Scrollable + auto-scroll to last message.  
  - Different styles for “Me” vs others.  
  - Team chats display sender name above messages.  
- **Input Bar**:
  - Emoji 😀, Attach 📎, Mic 🎤 buttons.  
  - Send button only appears when text is entered.  
  - Enter-to-send support.  
  - Sent messages render instantly.  

### 🔹 Chats & Team Chats
- Dummy data for both personal and team chats.  
- Personal chats: `{ id, name, lastMessage, time, img, messages[] }`.  
- Team chats: `{ id, teamName, members[], lastMessage, img, messages[] }`.  
- Group members displayed in header + above their messages.  

### 🔹 New Chat
- Button in sidebar → **“New Chat”**.  
- Start a chat by entering a participant name (and optional first message).  
- Generates placeholder avatar + adds to sidebar.  

### 🔹 New Team
- Button in sidebar → **“New Team”**.  
- Create a team by entering:  
  - Team name  
  - Members (comma-separated)  
- AI Button: **Generate Icebreaker** → inserts a friendly welcome message.  
- Creates a team with identicon avatar + adds to sidebar.  

### 🔹 State Management
- `App.tsx` manages:
  - `chats` (personal chats)  
  - `teams` (team chats)  
  - `activeChat` (selected conversation)  
  - `isNewChat` (`false | "chat" | "team"`)  
- Functions:
  - `handleStartChat` → creates a new personal chat.  
  - `handleStartTeam` → creates a new team chat.  
- Props passed via `AppLayout`.  

---

## 🛠 Tech Stack
- ⚛️ **React (Vite)** – frontend framework  
- 📘 **TypeScript** – typed JavaScript (relaxed rules for Vercel deploy)  
- 🎨 **Tailwind CSS** – styling system  
- 🧩 **shadcn/ui** – UI components (Sidebar, Button, etc.)  
- 🔔 **lucide-react** – icons  

---

## 📂 Project Structure
```

src/
├─ App.tsx              # Main entry
├─ AppLayout.tsx        # Layout wrapper with sidebar + chat window
├─ components/
│   ├─ AppSidebar.tsx    # Sidebar with menu, chats, teams
│   ├─ ChatWindow\.tsx    # Chat thread window
│   ├─ NewChat.tsx       # New chat creation screen
│   ├─ NewTeam.tsx       # New team creation screen
│   └─ ui/               # shadcn/ui components (button, sidebar, etc.)
└─ lib/
└─ data.ts           # Dummy chats & team chats

```
---

## ⚙️ Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/smart-chat-ui.git
   cd smart-chat-ui
`````

2. Install dependencies:

   bash
   npm install
   `````


3. Start the dev server:

   ```bash
   npm run dev
   ```

---

## ▶️ Usage

* Open [http://localhost:5173](http://localhost:5173) in your browser.
* Explore:

  * Sidebar navigation
  * Personal and team chats
  * AI placeholder actions (Summarize & Smart Reply)
  * Create new chats and teams

---

## 🚀 Deployment

* Adjusted `tsconfig.app.json` to disable strict checks (`noImplicitAny`, etc.) for Vercel builds.
* Build command:

  ```bash
  npm run build
  ```
* Deployed on **Vercel** with static hosting.

🔗 **Live App:** [https://smartchatui.vercel.app/](https://smartchatui.vercel.app/)

---

## 🎯 Next Improvements

* 🔔 Notifications for new messages.
* 📌 Pin chats to top.
* 🌙 Dark/Light theme toggle.
* 🗄️ Persist chats in `localStorage` or backend.
* 🤖 Real AI backend for summarization + smart replies.

---

## 🤝 Contributing

Contributions are welcome!

* Fork the repo
* Create a new branch
* Submit a pull request 🚀

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.


