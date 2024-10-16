# PoseNet ml5.js Project

This project implements **PoseNet** using the **ml5.js** library for real-time human pose estimation. PoseNet is a machine learning model which allows for the estimation of human poses from image or video feeds. In this project, we use PoseNet to detect multiple people in a video stream, track their keypoints, and apply custom visual effects like glasses and smoke on detected keypoints.

## Features
- **Real-time Pose Detection:** Uses a webcam or video feed to detect human poses in real-time.
- **Multiple People Detection:** The project supports detecting multiple people simultaneously.
- **Custom Visual Effects:** Applies effects (e.g., specs and smoke) to the detected nose keypoint of each person.
- **Skeleton and Keypoints Visualization:** Visualizes the skeleton and keypoints (e.g., nose, eyes, arms) for each person.

## Technologies Used
- **[ml5.js](https://ml5js.org/):** A friendly wrapper for TensorFlow.js that simplifies the use of machine learning models in the browser.
- **[p5.js](https://p5js.org/):** A JavaScript library for creative coding, used here to handle the canvas and graphics.
- **PoseNet Model:** Pre-trained PoseNet model provided by TensorFlow.js, used via ml5.js.

## Demo
Check out a live demo of the project here:  
👉 [PoseNet ml5.js Demo](https://achimahadani.github.io/PoseNet_ml5js/)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)

## Getting Started

### Prerequisites
To run this project locally, you will need:
- A modern web browser
- A webcam (optional but recommended for live pose detection)

### Usage
-Basic Instructions
-Once the project is running in your browser:

-Allow webcam access if prompted.
-The PoseNet model will load, and the camera feed will appear on the canvas.
-PoseNet will start detecting keypoints and drawing them on the canvas in real-time.
-Glasses and smoke effects will be applied to the nose keypoint for each detected person.

### Customization
-You can modify the visual effects applied to the keypoints:

1.Specs and Smoke Images:
-Replace the images/spects.png and images/cigar.png files with your custom images.
2.Effect Positioning:
-Adjust the position and size of the specs or other custom images by modifying the X and Y offsets in the draw() function in sketch.js.



