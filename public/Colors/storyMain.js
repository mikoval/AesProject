function initScene(){
	WIDTH = 800;
	HEIGHT = 600;

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
	random = true;
	start = undefined;

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
	time = 0;
	scene = new THREE.Scene();
	plane = new THREE.PlaneBufferGeometry( SIZE, SIZE );

	cameraOrtho = new THREE.OrthographicCamera( SIZE / - 2, SIZE / 2, SIZE / 2, SIZE / - 2, .001, 1000 );
    cameraOrtho.position.z = 10;

	// Add the camera to the scene.
	scene.add(camera);
	particlePositions = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	particlePositions2 = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	particlePositions3 = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	particlePositions4 = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	tmp = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});

	sphereTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	cubeTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	randomTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	torusTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	bunnyTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	monkeyTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});

	heartTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	statueTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	textTexture1 = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	textTexture2 = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});
	emptyTexture = new THREE.WebGLRenderTarget( SIZE , SIZE, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter,type: THREE.FloatType, format: THREE.RGBAFormat});

	createSphere();
	createRandom();
	createCube();
	createTorus();
	createHeart();
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

	

	var geo = createLookupGeometry( SIZE );

     
      particalesMat1 = new THREE.ShaderMaterial({
        uniforms: {
          t_pos: { type: "t", value: sphereTexture },
          res:{type:"v2", value: new THREE.Vector2(SIZE, SIZE)},
          size: {type:"f", value: size},
          opacity: {type:"f", value: opacity},
        },
        vertexShader: shaders.vs.storylkp,
        fragmentShader: shaders.fs.storylkp,
        blending: THREE.AdditiveBlending,
  		transparent: true,


      });
      particalesMat2 = new THREE.ShaderMaterial({
        uniforms: {
          t_pos: { type: "t", value: sphereTexture },
          res:{type:"v2", value: new THREE.Vector2(SIZE, SIZE)},
          size: {type:"f", value: size},
          opacity: {type:"f", value: opacity},
        },
        vertexShader: shaders.vs.storylkp,
        fragmentShader: shaders.fs.storylkp,
        blending: THREE.AdditiveBlending,
  		transparent: true,
      });
      	
        intScene = new THREE.Scene();

        intMaterial = new THREE.ShaderMaterial( {
            uniforms: {
             start: { type: "t", value: sphereTexture },
             end: { type: "t", value:  sphereTexture },
             time : {type: 'f',value:0},
             color : {type: 'f',value:0},
             res:{type:"v2", value: new THREE.Vector2(SIZE, SIZE)},

            },
           
            fragmentShader: shaders.fs.int,
        } );
        intObject = new THREE.Mesh( plane, intMaterial );

        intScene.add(intObject);
      
      	fallRandScene = new THREE.Scene();

        fallRandMaterial = new THREE.ShaderMaterial( {
            uniforms: {
             start: { type: "t", value: sphereTexture },
             time : {type: 'f',value:0},
             color : {type: 'f',value:0},
             res:{type:"v2", value: new THREE.Vector2(SIZE, SIZE)},

            },
           
            fragmentShader: shaders.fs.fallRand,
        } );
        fallRandObject = new THREE.Mesh( plane, fallRandMaterial );

        fallRandScene.add(fallRandObject);

        spiralUpScene = new THREE.Scene();

        spiralUpMaterial = new THREE.ShaderMaterial( {
            uniforms: {
             start: { type: "t", value: sphereTexture },
             end: { type: "t", value:  sphereTexture },
             time : {type: 'f',value:0},
             color : {type: 'f',value:0},
             offset : {type: 'f',value:0},
             res:{type:"v2", value: new THREE.Vector2(SIZE, SIZE)},

            },
           
            fragmentShader: shaders.fs.spiralUp,
        } );
        spiralUpObject = new THREE.Mesh( plane, spiralUpMaterial );

        spiralUpScene.add(spiralUpObject);

        logSpiralScene = new THREE.Scene();

        logSpiralMaterial = new THREE.ShaderMaterial( {
            uniforms: {
             time : {type: 'f',value:0},
             color : {type: 'f',value:0},
             offset : {type: 'f',value:0},
             res:{type:"v2", value: new THREE.Vector2(SIZE, SIZE)},

            },
           
            fragmentShader: shaders.fs.logSpiral,
        } );
        logSpiralObject = new THREE.Mesh( plane, logSpiralMaterial );

        logSpiralScene.add(logSpiralObject);
      

      particles1 = new THREE.Points( geo , particalesMat1 );
      particles2 = new THREE.Points( geo , particalesMat2 );
      particles1.position.z = -300;
      particles1.position.y =30;
      particles2.position.z = -300;
      particles2.position.y =-30;
      object1 = particles1;
      object2 = particles2;
     // particles.frustumCulled = false;

      scene.add( particles1 );
      scene.add( particles2 );

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

	story(time);

	
  	  	
  

  // Schedule the next frame.
  requestAnimationFrame(update);
}
function setInt(text){
	time = 0;
	material = new THREE.MeshBasicMaterial({map: particlePositions})
         	

    mesh = new THREE.Mesh(plane, material)
    imgscene = new THREE.Scene()

    imgscene.add(mesh);
    
    renderer.render(imgscene,cameraOrtho, tmp);


	intMaterial.uniforms.start.value =tmp;


	intMaterial.uniforms.end.value = text;
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


var shaders = new ShaderLoader( './storyshaders' );
var fontLoader = new THREE.FontLoader();



shaders.load( 'vs-storylkp'  , 'storylkp' , 'vertex'     );
shaders.load( 'fs-storylkp'  , 'storylkp' , 'fragment'   );
shaders.load( 'fs-int'  , 'int' , 'fragment'   );
shaders.load( 'fs-fallRand'  , 'fallRand' , 'fragment'   );
shaders.load( 'fs-spiralUp'  , 'spiralUp' , 'fragment'   );
shaders.load( 'fs-logSpiral'  , 'logSpiral' , 'fragment'   );

shaders.shaderSetLoaded = function(){

	initScene();
	fontLoader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

    	createText(font);
    
	  

	  



	} );


}


