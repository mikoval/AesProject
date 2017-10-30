function initSCene(){
	const WIDTH = 400;
	const HEIGHT = 300;

	// Set some camera attributes.
	const VIEW_ANGLE = 45;
	const ASPECT = WIDTH / HEIGHT;
	const NEAR = 0.01;
	const FAR = 100000;
	size = 4;
	obj = "sphere";
	numPoints = 10000;
	ramp = createRandomRamp();

	// Get the DOM element to attach to


	// Create a WebGL renderer, camera
	// and a scene
	renderer = new THREE.WebGLRenderer();
	camera =
	    new THREE.PerspectiveCamera(
	        VIEW_ANGLE,
	        ASPECT,
	        NEAR,
	        FAR
	    );

	scene = new THREE.Scene();

	// Add the camera to the scene.
	scene.add(camera);

	// Start the renderer.
	renderer.setSize(WIDTH, HEIGHT);

	document.body.appendChild( renderer.domElement );
	var element = renderer.domElement;
	element.style.width = "100%"
	element.style.height = "100%"

	// create the sphere's material


	  // create a point light
	pointLight =
	  new THREE.PointLight(0xFFFFFF);

	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);
	

}
function rebuildScene(){
	scene = new THREE.Scene();

	scene.add(camera);
	scene.add(pointLight);
}


function rotateAroundWorldAxis(object, axis, radians) {
    rotWorldMatrix = new THREE.Matrix4();
    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);

    // old code for Three.JS pre r54:
    //  rotWorldMatrix.multiply(object.matrix);
    // new code for Three.JS r55+:
    rotWorldMatrix.multiply(object.matrix);                // pre-multiply

    object.matrix = rotWorldMatrix;

    // old code for Three.js pre r49:
    // object.rotation.getRotationFromMatrix(object.matrix, object.scale);
    // old code for Three.js pre r59:
    // object.rotation.setEulerFromRotationMatrix(object.matrix);
    // code for r59+:
    object.rotation.setFromRotationMatrix(object.matrix);
}
function reload(){
  if(obj == "cube"){createCube();}
  if(obj == "sphere"){createSphere();}
  if(obj == "torus"){createTorus();}
  if(obj == "bunny"){createBunny();}
  if(obj == "monkey"){createMonkey();}
  if(obj == "statue"){createStatue();}
}
var axis = undefined;
var object = undefined;
function update () {
  // Draw!
  renderer.render(scene, camera);
  
  var change = Math.random();
  if(change < 0.01 || axis == undefined){
  	axis = new THREE.Vector3(Math.random() - 0.5,Math.random()-0.5,Math.random()-0.5);
  }
  if(object != undefined){
  	  	rotateAroundWorldAxis(object, axis, Math.PI / 180);

  }

  // Schedule the next frame.
  requestAnimationFrame(update);
}

// Schedule the first frame.
initSCene();
reload();
requestAnimationFrame(update);