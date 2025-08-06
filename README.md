# ⏱️ Dailymate – Time Tracking App

A minimal and clean time tracker that helps you log daily activities and hours spent. Built with **React**, **TypeScript**, and **TailwindCSS**, it visualizes your productivity using responsive charts.

---

## ✨ Features

✅ Log activities with hours  
✅ Visual chart display for time spent  
✅ Responsive and mobile-friendly  
✅ Clear "No activity" state UI  
✅ Smooth UI transitions and layout control  

---

## 🧠 What You'll Learn

- State management using `useState`
- Passing props between components
- Conditional rendering (`data.length > 0`)
- Chart integration with dynamic data
- Styling and layout with **Tailwind CSS**
- Folder structure for scalable apps

---

## 🛠 Tech Stack

| Tech            | Purpose                                |
|-----------------|----------------------------------------|
| React + Vite    | Fast and modern frontend setup         |
| TypeScript      | Type-safe components and logic         |
| Tailwind CSS    | Utility-first CSS for rapid styling    |
| React Icons     | Minimal, functional icons              |
| Chart.js        | Data visualization (optional lib)      |

---

## 📁 Folder Structure

```txt
src/
├── components/
│   └── ui/
│       ├── TimeForm.tsx       # Form for user input
│       └── TimeChart.tsx      # Chart to display time data
├── pages/
│   └── Home.tsx               # Main page
├── App.tsx                    # App entry component
└── main.tsx                   # Vite main entry point
