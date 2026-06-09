# Todo App

A fast, accessible, and user-friendly todo list web application built with React, TypeScript, Vite, and Redux Toolkit. The app supports multiple task lists, quick task creation, emoji/icon selection for lists, scheduled tasks via a time picker, and a clean responsive UI.

Live demo

- Try the app in action: '[To do App](https://todo-app-production-7f13.up.railway.app/)'

Key features

- **Multi-list support:** Create and manage multiple task lists (projects/categories).
- **Add & remove tasks:** Quickly add tasks with a dedicated form and remove items or entire lists.
- **Icons & emojis:** Choose icons or emojis to visually identify lists.
- **Time picker:** Assign times to tasks when scheduling is needed.
- **State management:** Uses Redux Toolkit for predictable state and easy extension.
- **TypeScript & Vite:** Built with TypeScript for type safety and Vite for fast development builds.

Project structure

- `src/components/` — Reusable UI components (tasks, lists, forms, inputs).
- `src/redux/` — Redux store and slices for tasks and lists.
- `src/pages/` — Route-level pages such as the dashboard and tasks view.

Getting started

1. Install dependencies:

```
npm install
```

2. Run the development server:

```
npm run dev
```
