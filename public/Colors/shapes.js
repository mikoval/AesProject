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
function createRandom(){
	//rebuildScene();
	



	// Create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	var plane =  new THREE.PlaneGeometry( WIDTH/2, HEIGHT/2 );




	createParticles(plane, randomTexture);



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

function createText(font){
	var textOptions = {
	  size: 14,
	  height: 3,
	  weight: 'normal',
	  font: font,
	  style: 'normal',

	  curveSegments: 12,
	  steps: 3
	}

	var text1 = new THREE.TextGeometry( "Computational Aesthetics", textOptions);
	

	createParticles(text1, textTexture1);

	var text2 = new THREE.TextGeometry( "By Mike Koval", textOptions);
	

	createParticles(text2, textTexture2);


}


function createBunny(){
	
		var loader = new THREE.OBJLoader();

		// load a resource
		loader.load(
			// resource URL
			'objs/bunny.obj',
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
function createRobot(){
	
		var loader = new THREE.OBJLoader();

		// load a resource
		loader.load(
			// resource URL
			'objs/robot.obj',
			// Function when resource is loaded
			function ( object ) {

				console.log(object);

				var combined = new THREE.Geometry();

				object.traverse(function (child) {
			        if (child instanceof THREE.Mesh) {
			           
			        	var geometry = new THREE.Geometry().fromBufferGeometry( child.geometry  );
			            THREE.GeometryUtils.merge( combined, geometry  );
			        }
			    });
				

				for(var i = 0; i < combined.vertices.length; i++){
					combined.vertices[i].x /= 10;
					combined.vertices[i].y /= 10;
					combined.vertices[i].z /= 10;
				}
				

				
				

				
				
				createParticles(combined, robotTexture);
				startAnimation();

			}
		);
}
function createHouse(){
	
		var loader = new THREE.OBJLoader();

		// load a resource
		loader.load(
			// resource URL
			'objs/house.obj',
			// Function when resource is loaded
			function ( object ) {

				console.log(object);

				var combined = new THREE.Geometry();

				object.traverse(function (child) {
			        if (child instanceof THREE.Mesh) {
			           
			        	var geometry = new THREE.Geometry().fromBufferGeometry( child.geometry  );
			            THREE.GeometryUtils.merge( combined, geometry  );
			        }
			    });
				

				for(var i = 0; i < combined.vertices.length; i++){
					combined.vertices[i].x *= 20;
					combined.vertices[i].y *= 20;
					combined.vertices[i].z *= 20;
				}
				
				createParticles(combined, houseTexture);

			}
		);
}
function createGift(){
	
		var loader = new THREE.OBJLoader();

		// load a resource
		loader.load(
			// resource URL
			'objs/gift.obj',
			// Function when resource is loaded
			function ( object ) {

				console.log(object);

				var combined = new THREE.Geometry();

				object.traverse(function (child) {
			        if (child instanceof THREE.Mesh) {
			           
			        	var geometry = new THREE.Geometry().fromBufferGeometry( child.geometry  );
			            THREE.GeometryUtils.merge( combined, geometry  );
			        }
			    });
				

				for(var i = 0; i < combined.vertices.length; i++){
					combined.vertices[i].x /= 40;
					combined.vertices[i].y /= 40;
					combined.vertices[i].z /= 40;
				}
				
				createParticles(combined, giftTexture);

			}
		);
}
function createHuman(){
	
		var loader = new THREE.OBJLoader();

		// load a resource
		loader.load(
			// resource URL
			'objs/human.obj',
			// Function when resource is loaded
			function ( object ) {

				console.log(object);

				var combined = new THREE.Geometry();

				object.traverse(function (child) {
			        if (child instanceof THREE.Mesh) {
			           
			        	var geometry = new THREE.Geometry().fromBufferGeometry( child.geometry  );
			            THREE.GeometryUtils.merge( combined, geometry  );
			        }
			    });
				

				for(var i = 0; i < combined.vertices.length; i++){
					combined.vertices[i].x *= 8;
					combined.vertices[i].y *= 8;
					combined.vertices[i].z *= 8;
				}
				
				createParticles(combined, humanTexture);

			}
		);
}
function createWatch(){
	
		var loader = new THREE.OBJLoader();

		// load a resource
		loader.load(
			// resource URL
			'objs/watch.obj',
			// Function when resource is loaded
			function ( object ) {

				console.log(object);

				var combined = new THREE.Geometry();

				object.traverse(function (child) {
			        if (child instanceof THREE.Mesh) {
			           
			        	var geometry = new THREE.Geometry().fromBufferGeometry( child.geometry  );
			            THREE.GeometryUtils.merge( combined, geometry  );
			        }
			    });
				

				for(var i = 0; i < combined.vertices.length; i++){
					combined.vertices[i].x *= 30;
					combined.vertices[i].y *= 30;
					combined.vertices[i].z *= 30;
				}
				
				createParticles(combined, watchTexture);

			}
		);
}
function createThreePiece(){
	
		var loader = new THREE.OBJLoader();

		// load a resource
		loader.load(
			// resource URL
			'objs/cup.obj',
			// Function when resource is loaded
			function ( object ) {
		
				var tmpPenGeo = new THREE.Geometry().fromBufferGeometry( object.children[0].geometry );
				for(var i = 0; i < tmpPenGeo.vertices.length; i++){
							
							

							tmpPenGeo.vertices[i].y /= 2;
							tmpPenGeo.vertices[i].x /= 2;
							
							tmpPenGeo.vertices[i].z /= 2;

							tmpPenGeo.vertices[i].y += 50;
							tmpPenGeo.vertices[i].x += 70;
						}
				var loader = new THREE.OBJLoader();

				// load a resource
				loader.load(
					// resource URL
					'objs/Phone.obj',  
					
					// Function when resource is loaded
					function ( object ) {
						var tmpPhoneGeo = new THREE.Geometry().fromBufferGeometry( object.children[0].geometry );

					
						

						for(var i = 0; i < tmpPhoneGeo.vertices.length; i++){
							
							
							tmpPhoneGeo.vertices[i].y /= 2;
							tmpPhoneGeo.vertices[i].x /= 2;
							
							tmpPhoneGeo.vertices[i].z /= 2;
							tmpPhoneGeo.vertices[i].y -= 70;
						}
						
						var loader = new THREE.OBJLoader();

						// load a resource
						loader.load(
							// resource URL
							'objs/Whisk.obj',
							// Function when resource is loaded
							function ( object ) {
								var tmpBoxGeo =  new THREE.Geometry().fromBufferGeometry( object.children[0].geometry );

					
						

								for(var i = 0; i < tmpBoxGeo.vertices.length; i++){
									
									
									tmpBoxGeo.vertices[i].y *= 3;
									tmpBoxGeo.vertices[i].x *= 3;
									
									tmpBoxGeo.vertices[i].z *= 3;

									tmpBoxGeo.vertices[i].y += 50;
									tmpBoxGeo.vertices[i].x -= 70;
								}
								createParticlesRandom([tmpPenGeo, tmpPhoneGeo, tmpBoxGeo], threePieceTexture);
							})



						
								
					}
				);
				
			}
		);
}
function createHeart(){
	
		var loader = new THREE.OBJLoader();

		// load a resource
		loader.load(
			// resource URL
			'objs/Heart.obj',
			// Function when resource is loaded
			function ( object ) {
				
				var geometry = new THREE.Geometry().fromBufferGeometry( object.children[0].geometry );

				for(var i = 0; i < geometry.vertices.length; i++){
					geometry.vertices[i].y -= 150;

					geometry.vertices[i].y /= 2;
					geometry.vertices[i].x /= 2;
					
					geometry.vertices[i].z /= 2;
				}
				

				createParticles(geometry, heartTexture);
			}
		);
}
function createMonkey(){
	
		var loader = new THREE.OBJLoader();


		// load a resource
		loader.load(
			// resource URL
			'objs/suzanne.obj',
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
			'objs/Statue.obj',
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
	var avgX = 0;
	var avgY = 0;
	for ( var i = 0; i < SIZE*SIZE; i ++ ) {
		avgX  += particleGeometry.vertices[i].x;
		avgY  += particleGeometry.vertices[i].y;
	}
	avgX /= SIZE*SIZE;
	avgY /= SIZE*SIZE;
	


	var dataColor = new Float32Array( SIZE*SIZE * 4 );

	for ( var i = 0; i < SIZE*SIZE; i ++ ) {



	    dataColor[ i * 4 ]     = randomPoints[i].x - avgX;
	    dataColor[ i * 4 + 1 ] = randomPoints[i].y - avgY;
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
function createParticlesRandom(arr,  texture){




	var particleGeometry = new THREE.Geometry();



	var randomPoints1 = THREE.GeometryUtils.randomPointsInGeometry( arr[0], SIZE*SIZE)

	var points = [];

	for(var i= 0 ; i < arr.length; i++){
		var p = THREE.GeometryUtils.randomPointsInGeometry( arr[i], SIZE*SIZE)

		points.push(p);

	}
	


	particleGeometry.vertices = randomPoints1;
	for(var i = 0; i < particleGeometry.vertices.length; i++){
		var rand = Math.floor(Math.random() * points.length ) ;
		

		particleGeometry.vertices[i] = points[rand][i];
		particleGeometry.vertices[i].w = rand;


		
		
	}
	particleGeometry.vertices = randomPoints1;

	for(var i = 0; i < particleGeometry.vertices.length; i++){
		var c = Math.floor(Math.random() * ramp.length);
		r = ramp[c].r;
		g = ramp[c].g;
		b = ramp[c].b;
		particleGeometry.colors.push(new THREE.Color(r, g, b))
	}
	var avgX = 0;
	var avgY = 0;
	for ( var i = 0; i < SIZE*SIZE; i ++ ) {
		avgX  += particleGeometry.vertices[i].x;
		avgY  += particleGeometry.vertices[i].y;
	}
	avgX /= SIZE*SIZE;
	avgY /= SIZE*SIZE;
	


	var dataColor = new Float32Array( SIZE*SIZE * 4 );

	for ( var i = 0; i < SIZE*SIZE; i ++ ) {



	    dataColor[ i * 4 ]     = particleGeometry.vertices[i].x - avgX;
	    dataColor[ i * 4 + 1 ] = particleGeometry.vertices[i].y - avgY;
	    dataColor[ i * 4 + 2 ] = particleGeometry.vertices[i].z;
	    dataColor[ i * 4 + 3 ] = particleGeometry.vertices[i].w;



	}


	posText = new THREE.DataTexture( dataColor, SIZE, SIZE, THREE.RGBAFormat, THREE.FloatType, );
	posText.needsUpdate = true;

			material = new THREE.MeshBasicMaterial({map: posText})
         	

            mesh = new THREE.Mesh(plane, material)
            imgscene = new THREE.Scene()

            imgscene.add(mesh);
            
            renderer.render(imgscene,cameraOrtho, texture);
        

}

