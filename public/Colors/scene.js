function initScene(){
	WIDTH = 400;
	HEIGHT = 300;

	// Set some camera attributes.
	const VIEW_ANGLE = 45;
	const ASPECT = WIDTH / HEIGHT;
	const NEAR = 0.01;
	const FAR = 100000;
	size = 2;
	opacity = 0.3;
	SIZE = 100;
	obj = "sphere";
	numPoints = SIZE*SIZE;
	ramp = createRandomRamp();
	time = 0;
	dt = 0.003;

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

	

	// Start the renderer.
	renderer.setSize(WIDTH, HEIGHT);

	document.body.appendChild( renderer.domElement );
	var element = renderer.domElement;
	element.style.width = "100%"
	element.style.height = "100%"



	initTextures();
	
	requestAnimationFrame(update);
}
function initTextures(){
	scene = new THREE.Scene();
	plane = new THREE.PlaneBufferGeometry( SIZE, SIZE );

	cameraOrtho = new THREE.OrthographicCamera( SIZE / - 2, SIZE / 2, SIZE / 2, SIZE / - 2, .001, 1000 );
    cameraOrtho.position.z = 10;

	// Add the camera to the scene.
	scene.add(camera);
	particlePositions = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	particlePositions2 = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});

	sphereTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	cubeTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	torusTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	bunnyTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	monkeyTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	statueTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	createSphere();
	createCube();
	createTorus();
	createBunny();
	createMonkey();
	createStatue();
	textures = [];
	textures.push(sphereTexture);
	textures.push(cubeTexture);
	textures.push(torusTexture);
	textures.push(bunnyTexture); 
	textures.push(monkeyTexture);
	textures.push(statueTexture);
	console.log(opacity);

	var geo = createLookupGeometry( SIZE );

     
      particalesMat = new THREE.ShaderMaterial({
        uniforms: {
          t_pos: { type: "t", value: sphereTexture },
          res:{type:"v2", value: new THREE.Vector2(SIZE, SIZE)},
          size: {type:"f", value: size},
          opacity: {type:"f", value: opacity},
        },
        vertexShader: shaders.vs.lookup,
        fragmentShader: shaders.fs.lookup,
        blending: THREE.AdditiveBlending,
  		transparent: true,
  		

      });
      
        intScene = new THREE.Scene();

        intMaterial = new THREE.ShaderMaterial( {
            uniforms: {
             start: { type: "t", value: sphereTexture },
             end: { type: "t", value: cubeTexture },
             time : {type: 'f',value:0},
             res:{type:"v2", value: new THREE.Vector2(SIZE, SIZE)},

            },
           
            fragmentShader: shaders.fs.int,
        } );
        intObject = new THREE.Mesh( plane, intMaterial );

        intScene.add(intObject);
      

      particles = new THREE.Points( geo , particalesMat );
      particles.position.z = -300;
      object = particles;
     // particles.frustumCulled = false;

      scene.add( particles );

     reload();




  
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

	time += dt;
	// Draw!
	


	if(time > 2){
		time = 0;
		intMaterial.uniforms.start.value = intMaterial.uniforms.end.value;
		var next =  Math.floor(Math.random() * textures.length);
		console.log(next);
		intMaterial.uniforms.end.value = textures[next];
	}
	intMaterial.uniforms.time.value = time;

	renderer.render(intScene, cameraOrtho, particlePositions2);

        var t = particlePositions;
        particlePositions = particlePositions2;
        particlePositions2 = t;
    
	particalesMat.uniforms.t_pos.value = particlePositions;
	//renderer.render(intScene, cameraOrtho);
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
function createLookupGeometry( size ){        
        
    var geo = new THREE.BufferGeometry();
    var positions = new Float32Array(  size * size * 3 );

    for ( var i = 0, j = 0, l = positions.length / 3; i < l; i ++, j += 3 ) {

      positions[ j     ] = ( i % size ) / size  ;
      positions[ j + 1 ] = Math.floor( i / size ) / size ;

    
    }
    var colors = new Float32Array(  size * size * 3 );

    for ( var i = 0, j = 0, l = positions.length / 3; i < l; i ++, j += 3 ) {
      var cind = Math.floor((Math.random() * ramp.length));

      var c = ramp[cind];
      colors[ j     ] = c.r;
      colors[ j + 1 ] = c.g;
      colors[ j + 2 ] = c.b;

    
    }
   // console.log(positions)
    var colA = new THREE.BufferAttribute( colors , 3 );
    geo.addAttribute( 'vcolor', colA );

    var posA = new THREE.BufferAttribute( positions , 3 );
    geo.addAttribute( 'position', posA );
    

    return geo;
    
 }


var shaders = new ShaderLoader( './shaders' );



shaders.load( 'vs-lookupW'  , 'lookup' , 'vertex'     );
shaders.load( 'fs-lookupW'  , 'lookup' , 'fragment'   );
shaders.load( 'fs-int'  , 'int' , 'fragment'   );

shaders.shaderSetLoaded = function(){

	initScene();

}


