
function story(time){
	
	if(time < 1){
		// first set of particles
		intMaterial.uniforms.start.value = randomTexture;
		intMaterial.uniforms.end.value = textTexture1;
		intMaterial.uniforms.color.value = 0;

		var inputTime = time / 1;
		intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions2);

	    var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;
	    
		particalesMat1.uniforms.t_pos.value = particlePositions;


		//second set of particles
		intMaterial.uniforms.start.value = randomTexture;
		intMaterial.uniforms.end.value = textTexture2;
		intMaterial.uniforms.color.value = 0;
		var inputTime = time / 1;
		intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions4);

	    var t = particlePositions3;
	    particlePosition3 = particlePositions4;
	    particlePositions4 = t;
	    
		particalesMat2.uniforms.t_pos.value = particlePositions3;

		particalesMat1.uniforms.size.value = 1.0;
		particalesMat2.uniforms.size.value = 1.0;
		particalesMat1.transparent = false;
		particalesMat2.transparent = false;
		


	}
	else if ( time >= 1 && time <= 2.0){

	}
	else if(time < 3&& time > 2){
		
		
		
		var inputTime = (time-2)  * 2;

		//first
		fallRandMaterial.uniforms.start.value = textTexture1;
		fallRandMaterial.uniforms.time.value = inputTime;
		renderer.render(fallRandScene, cameraOrtho, particlePositions2);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;

	    particalesMat1.uniforms.t_pos.value = particlePositions;

	    //second
	    fallRandMaterial.uniforms.start.value = textTexture2;
	    fallRandMaterial.uniforms.time.value = inputTime;
		renderer.render(fallRandScene, cameraOrtho, particlePositions3);
		var t = particlePositions3;
	    particlePositions3 = particlePositions4;
	    particlePositions4 = t;

	    particalesMat2.uniforms.t_pos.value = particlePositions3;

	    

	}

	else if(time < 4&& time > 3){
		particalesMat1.transparent = true;
		particalesMat2.transparent = true;
		object1.position.y = 0;
		object2.position.y = 0;

		
		var inputTime = (time-3) * 3 ;

		//first
	
		spiralUpMaterial.uniforms.time.value = inputTime;
		spiralUpMaterial.uniforms.end.value = heartTexture;
		spiralUpMaterial.uniforms.color.value = 1.0;
		spiralUpMaterial.uniforms.offset.value = 0.0;
		renderer.render(spiralUpScene, cameraOrtho, particlePositions2);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;


	    particalesMat1.uniforms.t_pos.value = particlePositions;


	    spiralUpMaterial.uniforms.time.value = inputTime;
		spiralUpMaterial.uniforms.end.value = cubeTexture;
		spiralUpMaterial.uniforms.color.value = 2.0;
		spiralUpMaterial.uniforms.offset.value = 1.0;
		renderer.render(spiralUpScene, cameraOrtho, particlePositions4);
		var t = particlePositions3;
	    particlePositions3 = particlePositions4;
	    particlePositions4 = t;


	    particalesMat2.uniforms.t_pos.value = particlePositions3;



	    axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object1, axis, Math.PI / 180);
		rotateAroundWorldAxis(object2, axis, Math.PI / 180);
	
	
	  	

	    particalesMat1.uniforms.size.value = 2.0;
		particalesMat2.uniforms.size.value = 2.0;

	    

	}
	else if(time <= 5&& time > 4){
		axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object1, axis, Math.PI / 180);
		rotateAroundWorldAxis(object2, axis, Math.PI / 180);
	}
	else if(time < 6 && time >= 5){
		object1.position.y = 0;
		object2.position.y = 0;
		var inputTime = (time-5) /1;

		intMaterial.uniforms.start.value = heartTexture;
		intMaterial.uniforms.end.value = emptyTexture;
		intMaterial.uniforms.color.value = 1;

		intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions2);

	    var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;
	    
		particalesMat1.uniforms.t_pos.value = particlePositions;


		//second set of particles
		intMaterial.uniforms.start.value = cubeTexture;
		intMaterial.uniforms.end.value = emptyTexture;
		intMaterial.uniforms.color.value = 2;
		intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions4);

	    var t = particlePositions3;
	    particlePosition3 = particlePositions4;
	    particlePositions4 = t;
	    
		particalesMat2.uniforms.t_pos.value = particlePositions3;
		axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object1, axis, Math.PI / 180);
		rotateAroundWorldAxis(object2, axis, Math.PI / 180);
	}

	else if(time < 8&& time > 6){
		var inputTime = (time-6) * 1.0;

		
		logSpiralMaterial.uniforms.color.value = 1;

		logSpiralMaterial.uniforms.time.value = inputTime;
		logSpiralMaterial.uniforms.offset.value = 0.0;
		renderer.render(logSpiralScene, cameraOrtho, particlePositions2);

	    var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;
	    
		particalesMat1.uniforms.t_pos.value = particlePositions;


		//second set of particles

		logSpiralMaterial.uniforms.color.value = 2;
		logSpiralMaterial.uniforms.time.value = inputTime;
		logSpiralMaterial.uniforms.offset.value = 1.0;
		renderer.render(logSpiralScene, cameraOrtho, particlePositions4);

	    var t = particlePositions3;
	    particlePosition3 = particlePositions4;
	    particlePositions4 = t;
	    
		particalesMat2.uniforms.t_pos.value = particlePositions3;
		particalesMat1.uniforms.size.value = 1.0;
		particalesMat2.uniforms.size.value = 1.0;

		object1.rotation.x = 0;
		object1.rotation.y = 0;
		object1.rotation.z = 0;
		object2.rotation.x = 0;
		object2.rotation.y = 0;
		object2.rotation.z = 0;
	}


	



	
	
	renderer.render(scene, camera);
}