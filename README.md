# Movement Task


[![Actions Status](https://github.com/brown-ccv/task-movement/workflows/Test%2C%20Build%2C%20and%20Package/badge.svg)](https://github.com/brown-ccv/task-movement/actions)
[![Actions Status](https://github.com/brown-ccv/task-movement/workflows/Build%20at%20home%20version%20%28Windows%29/badge.svg)](https://github.com/brown-ccv/task-movement/actions)  


This repo contains the Movement task. It is a [jspsych](https://www.jspsych.org/) task built with React and Electron. This task uses the [Honeycomb](https://github.com/brown-ccv/honeycomb) template.

## Getting Started

1. Clone this repo onto your computer
```
git clone https://github.com/brown-ccv/task-movement.git
```
2. Change directory into the new folder
```
cd task-movement
```
3. Install the dependencies
```
npm install 
```
4. Run the task in dev mode - this should launch an electron window with the task with the inspector open to the console and will hot-reload when changes are made to the app
```
npm run dev
```
5. Check out the data - the data is saved throughout the task to the users's app directory.  This is logged at the beginning of the task wherever you ran `npm run dev`.
