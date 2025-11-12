# MERN Bug Tracker

A simple MERN application built as a Week 6 assignment to practice **testing** and **debugging**.  
Users can report, view, update, and delete bugs.

## Features
- Report new bugs (title, description)
- View list of bugs
- Update status (open, in-progress, resolved)
- Delete bugs
- Unit & integration tests for backend and frontend
- Error handling and debugging guides

## Project structure
See `backend/` and `frontend/` folders.

## Requirements
- Node >= 14
- npm
- MongoDB (for development) — or use `mongodb-memory-server` for tests

## Setup

### Backend
```bash
cd backend
npm install
# create .env with MONGO_URI
npm run dev
