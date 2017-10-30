function createSphere(){
	rebuildScene();
	

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


	createParticles(sphereGeo);



}
function createCube(){
	rebuildScene();
	



	// Create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	var cube =  new THREE.BoxGeometry( 100, 100, 100, 20, 20, 20 );




	createParticles(cube);



}
function createTorus(){
	rebuildScene();
	



	// Create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	var torus =  new THREE.TorusGeometry( 60, 20, 16, 100 );




	createParticles(torus);

	
}
function createBunny(){
		rebuildScene();
	
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
				
				createParticles(geometry);
			}
		);
}
function createMonkey(){
	rebuildScene();
	
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
				
				createParticles(geometry);
			}
		);
}
function createStatue(){
	rebuildScene();
	
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
				
				createParticles(geometry);
			}
		);

}
function createParticles(geo){

	//This will add a starfield to the background of a scene
	var particleGeometry = new THREE.Geometry();

	

	var randomPoints = THREE.GeometryUtils.randomPointsInGeometry( geo, numPoints)

	particleGeometry.vertices = randomPoints;

	for(var i = 0; i < particleGeometry.vertices.length; i++){
		var c = Math.floor(Math.random() * ramp.length);
		r = ramp[c].r;
		g = ramp[c].g;
		b = ramp[c].b;
		particleGeometry.colors.push(new THREE.Color(r, g, b))
	}


	var particleMaterial = new THREE.PointsMaterial( { 
		size: size,
		
		//blending: THREE.AdditiveBlending,
		transparent: true
   } );
	particleMaterial.vertexColors = true;
	var particles = new THREE.Points(particleGeometry, particleMaterial );

	particles.position.z = -300;


	particles.sortParticles = true;
	object = particles;
	scene.add( particles );
}
