# TinyFlix Video Platform

A React-based video streaming application with features like video playback, search, bookmarks, and comments.

## Overview

TinyFlix is a video streaming platform that allows users to:
- Browse and search for videos
- Play videos with custom controls
- Add bookmarks at specific timestamps
- Comment on videos and reply to comments
- Filter and sort videos by various criteria

## Features

- **Video Playback**: Custom video player with play/pause, volume control, and playback rate adjustment
- **Search & Filter**: Search by title, description, or tags; filter by recency or popularity
- **Bookmarks**: Save timestamps in videos for quick navigation
- **Comments**: Add comments and replies with timestamps
- **User Preferences**: Customize autoplay, video quality, and subtitles
- **Accessibility**: Keyboard navigation and screen reader support
- **Error Handling**: Graceful handling of network errors and invalid inputs

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone [repository-url]
   cd tinyflix-app
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
tinyflix-app/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # React components
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Testing

This project is designed for QA testing. Candidates should:

1. Identify bugs and issues
2. Create a comprehensive test plan
3. Implement automated tests
4. Evaluate accessibility
5. Analyze performance

See `CANDIDATE_INSTRUCTIONS.md` for detailed testing instructions.

## Evaluation

Submissions will be evaluated based on:

- Test coverage
- Bug identification
- Documentation
- Problem-solving
- Code quality

See `EVALUATION_GUIDE.md` for detailed evaluation criteria.

## License

This project is for assessment purposes only.
