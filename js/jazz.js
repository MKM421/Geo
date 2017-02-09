// create a scene
var scene = new THREE.Scene();
// create a camera
var camera = new THREE. PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// set the camera position (zoom level)
camera.position.z = 40;
// // instantiate a WebGL renderer
var renderer = new THREE.WebGLRenderer();
// set the scene size to be equal to users width & height
renderer.setSize(window.innerWidth, window.innerHeight);
// append scene renderer to body element
document.body.appendChild(renderer.domElement);

// 1st sphere
this.points = new THREE.Object3D();
this.points.name = "cloud";
var pyGeo = new THREE.IcosahedronGeometry(15,4);
var pyMat = new THREE.MeshPhongMaterial({
	color:0xffffff,
	shininess:100,
	specular:0xffffff,
	shading:THREE.FlatShading,
	wireframe:true
});
var py = new THREE.Points(pyGeo, pyMat);
scene.add(py);


this.points = new THREE.Object3D();
this.points.name = "cloud";
var py2Geo = new THREE.IcosahedronGeometry(3,2);
var py2 = new THREE.Points(py2Geo, pyMat);
scene.add(py2);

this.points = new THREE.Object3D();
this.points.name = "cloud";
var py3Geo = new THREE.IcosahedronGeometry(1,2);
var py3 = new THREE.Points(py3Geo, pyMat);
scene.add(py3);


// add lighting
//var light = new THREE.AmbientLight( 0x404040 ); // soft white light
//scene.add( light );


// LIGHTS

var ambientLight, hemisphereLight, shadowLight;

function createLights() {

  hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)

  ambientLight = new THREE.AmbientLight(0xdc8874, .5);

  shadowLight = new THREE.DirectionalLight(0xffffff, .9);
  shadowLight.position.set(150, 350, 350);
  shadowLight.castShadow = true;
  shadowLight.shadow.camera.left = -400;
  shadowLight.shadow.camera.right = 400;
  shadowLight.shadow.camera.top = 400;
  shadowLight.shadow.camera.bottom = -400;
  shadowLight.shadow.camera.near = 1;
  shadowLight.shadow.camera.far = 1000;
  shadowLight.shadow.mapSize.width = 4096;
  shadowLight.shadow.mapSize.height = 4096;

  var ch = new THREE.CameraHelper(shadowLight.shadow.camera);

  //scene.add(ch);
  scene.add(hemisphereLight);
  scene.add(shadowLight);
  scene.add(ambientLight);

}
createLights();
// click to drag object
var orbit = new THREE.OrbitControls( camera, renderer.domElement );
orbit.enableZoom = true;


// create a function that renders everything repeatedly
function animation() {
	requestAnimationFrame(animation);
	renderer.render(scene,camera);
	//shape.rotation.x += Math.PI/180;
	//shape.rotation.y += Math.PI/180;

	py.rotation.x += Math.PI/360;
	py.rotation.y += Math.PI/360;
	py2.rotation.x += Math.PI/144;
	py2.rotation.z += Math.PI/144;
	py3.rotation.x += Math.PI/144;
	py3.rotation.z += Math.PI/144;



	//shape.rotation.x += 0.0009;
	//shape.rotation.y += 0.0009;

}
// run it
animation();


//
/*
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
*/
//jQuery timer
/*
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('#time');
    startTimer(fiveMinutes, display);
});
*/
