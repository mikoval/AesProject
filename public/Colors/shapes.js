function createSphere(){
	//rebuildScene();
	

	const RADIUS = 50;
	const SEGMENTS = 32;
	const RINGS = 32;


	// Create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	var sphereGeo = 
	  new THREE.SphereGeometry(
	    RADIUS,
	    SEGMENTS,
	    RINGS);


	createParticles(sphereGeo, sphereTexture);



}
function createCube(){
	//rebuildScene();
	



	// Create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	var cube =  new THREE.BoxGeometry( 100, 100, 100, 20, 20, 20 );




	createParticles(cube, cubeTexture);



}
function createTorus(){

	



	// Create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	var torus =  new THREE.TorusGeometry( 60, 20, 16, 100 );




	createParticles(torus, torusTexture);

	
}
function createBunny(){
	
		var loader = new THREE.OBJLoader();

		// load a resource
		loader.load(
			// resource URL
			'bunny.obj',
			// Function when resource is loaded
			function ( object ) {
				
				var geometry = new THREE.Geometry().fromBufferGeometry( object.children[0].geometry );

				for(var i = 0; i < geometry.vertices.length; i++){
					geometry.vertices[i].x *= 40;
					geometry.vertices[i].y *= 40;
					geometry.vertices[i].z *= 40;
				}
				
				createParticles(geometry, bunnyTexture);
			}
		);
}
function createMonkey(){
	
		var loader = new THREE.OBJLoader();


		// load a resource
		loader.load(
			// resource URL
			'suzanne.obj',
			// Function when resource is loaded
			function ( object ) {
				object.position.z = -10;
			
				var geometry = new THREE.Geometry().fromBufferGeometry( object.children[0].geometry );
				console.log(geometry);
				for(var i = 0; i < geometry.vertices.length; i++){
					geometry.vertices[i].x *= 40;
					geometry.vertices[i].y *= 40;
					geometry.vertices[i].z *= 40;
				}
				
				createParticles(geometry, monkeyTexture);
			}
		);
}
function createStatue(){
	
		var loader = new THREE.OBJLoader();


		// load a resource
		loader.load(
			// resource URL
			'Statue.obj',
			// Function when resource is loaded
			function ( object ) {
			
		
				var geometry = new THREE.Geometry().fromBufferGeometry( object.children[0].geometry );
				console.log(geometry);
				for(var i = 0; i < geometry.vertices.length; i++){
					geometry.vertices[i].x *= 40;
					geometry.vertices[i].y *= 40;
					geometry.vertices[i].z *= 40;
					geometry.vertices[i].y -=30;
				}
				
				createParticles(geometry, statueTexture);
			}
		);

}
function createParticles(geo, texture){




	var particleGeometry = new THREE.Geometry();



	

	var randomPoints = THREE.GeometryUtils.randomPointsInGeometry( geo, SIZE*SIZE)

	particleGeometry.vertices = randomPoints;

	for(var i = 0; i < particleGeometry.vertices.length; i++){
		var c = Math.floor(Math.random() * ramp.length);
		r = ramp[c].r;
		g = ramp[c].g;
		b = ramp[c].b;
		particleGeometry.colors.push(new THREE.Color(r, g, b))
	}


	var dataColor = new Float32Array( SIZE*SIZE * 4 );

	for ( var i = 0; i < SIZE*SIZE; i ++ ) {



	    dataColor[ i * 4 ]     = randomPoints[i].x;
	    dataColor[ i * 4 + 1 ] = randomPoints[i].y;
	    dataColor[ i * 4 + 2 ] = randomPoints[i].z;

	}


	posText = new THREE.DataTexture( dataColor, SIZE, SIZE, THREE.RGBAFormat, THREE.FloatType, );
	posText.needsUpdate = true;

			material = new THREE.MeshBasicMaterial({map: posText})
         	

            mesh = new THREE.Mesh(plane, material)
            imgscene = new THREE.Scene()

            imgscene.add(mesh);
            
            renderer.render(imgscene,cameraOrtho, texture);
        

}
