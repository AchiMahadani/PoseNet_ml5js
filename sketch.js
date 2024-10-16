let capture;
let posenet;
let poses = []; // To store all detected poses
let cricketer_img;
let specs, smoke;

function setup() {
    createCanvas(800, 1000);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses);

    cricketer_img = loadImage('images/Mahi.png');
    specs = loadImage('images/spects.png');
    smoke = loadImage('images/cigar.png');
}

function receivedPoses(results) {
    poses = results; 
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {
    // Draw the video capture feed
    image(capture, 0, 0);
    fill(255, 0, 0);

    // Loop through all the detected poses
    for (let i = 0; i < poses.length; i++) {
        let singlePose = poses[i].pose;
        let skeleton = poses[i].skeleton;


        for (let j = 0; j < singlePose.keypoints.length; j++) {
            let keypoint = singlePose.keypoints[j].position;
            if (keypoint) {
                ellipse(keypoint.x, keypoint.y, 20);
            }
        }

        
        stroke(255, 255, 255);
        strokeWeight(5);
        if (skeleton && skeleton.length > 0) {
            for (let k = 0; k < skeleton.length; k++) {
                let partA = skeleton[k][0].position;
                let partB = skeleton[k][1].position;

                if (partA && partB) {
                    line(partA.x, partA.y, partB.x, partB.y);
                }
            }
        }

        
        let nose = singlePose.keypoints.find(kp => kp.part === 'nose');
        if (nose) {
            image(specs, nose.position.x - 35, nose.position.y - 50, 80, 80); // Specs
            image(smoke, nose.position.x - 35, nose.position.y + 10, 40, 40); // Smoke
        }
    }
}
