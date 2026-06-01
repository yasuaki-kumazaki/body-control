# Body Control
A personal mobile app for tracking calisthenics skill progression and workout sessions. Built as a practical project to develop mobile development skills with React Native and AI integration.

## Features
- Skill progression system — goal-driven training with structured step ladders (e.g. band-assisted pull-ups → negative pull-ups → full pull-ups)
- AI-powered planning — integrated LLM via OpenRouter API to generate and modify workout plans conversationally
- Session logging — log sets and reps per workout, with previous session values shown inline for comparison
- Progress tracking — line graph and table views showing performance trends per exercise over time
- Smart suggestions — automatic alternative exercise recommendations when reps fall below threshold
- Multi-plan support — create multiple training plans, one active at a time

## Tech stack

- React Native + Expo
- TypeScript
- React Navigation
- AsyncStorage
- react-native-svg
- OpenRouter API (LLM integration)

## Motivation
Built to solve a real personal problem — fitness advice from AI assistants lives in chat and disappears. This app keeps the plan, the progression, and the history in one place, with Claude available inside the app to update the plan without re-explaining context every time.
