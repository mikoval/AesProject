
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
	    
		particlesMat1.uniforms.t_pos.value = particlePositions;


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
	    
		particlesMat2.uniforms.t_pos.value = particlePositions3;

		particlesMat1.uniforms.size.value = 2.0;
		particlesMat2.uniforms.size.value = 2.0;
		particlesMat1.transparent = true;
		particlesMat2.transparent = true;
		object3.visible = false;
		object4.visible = false;
		


	}
	else if ( time >= 1 && time <= 1.5){

	}
	else if(time < 2.5 && time > 1.5){
		
		
		
		var inputTime = (time-1.5)  * 2;

		//first
		intMaterial.uniforms.start.value = textTexture1;
		intMaterial.uniforms.end.value = threePieceTexture;
		intMaterial.uniforms.time.value = inputTime/2.0;
		intMaterial.uniforms.color.value = -2;


		renderer.render(intScene, cameraOrtho, particlePositions2);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;
	    particlesMat1.uniforms.t.value = inputTime/2.0;

	    particlesMat1.uniforms.t_pos.value = particlePositions;

	    //second
	    fallRandMaterial.uniforms.start.value = textTexture2;
	    fallRandMaterial.uniforms.time.value = inputTime * 1.5;
		renderer.render(fallRandScene, cameraOrtho, particlePositions3);
		var t = particlePositions3;
	    particlePositions3 = particlePositions4;
	    particlePositions4 = t;

	    particlesMat2.uniforms.t_pos.value = particlePositions3;


	    if(time < 2.0){
	    	object1.position.y = 30*(1-(inputTime )) + 0 * (inputTime   );
			object1.position.x = 0.0;
	    }
	    

		

	    

	}
	else if(time < 3.0 && time > 2.5){
		
		axis = new THREE.Vector3(0,0,1);
		rotateAroundWorldAxis(object1, axis, 2 * Math.PI   * 4 *  dt ) ;


		object2.position.y = 0;
		object2.position.x = 0;
	}
	else if(time < 3.5 && time > 3.0){
		var inputTime = (time-3.0)   * 2;
		axis = new THREE.Vector3(0,0,1);
		rotateAroundWorldAxis(object1, axis, 2 * Math.PI   * 4 *  dt ) ;
		intMaterial.uniforms.start.value = threePieceTexture;
		intMaterial.uniforms.end.value = sphereTexture;
		intMaterial.uniforms.color.value = 2;

		intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions2);

	    var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;
	    
		particlesMat1.uniforms.t_pos.value = particlePositions;


	
	}
	else if(time < 4.0 && time > 3.5){
		var inputTime = (time-3.5)   * 2;
		axis = new THREE.Vector3(0,0,1);
		rotateAroundWorldAxis(object1, axis, 2 * Math.PI   * 4 *  dt ) ;
		intMaterial.uniforms.start.value = sphereTexture;
		intMaterial.uniforms.end.value = robotTexture;
		intMaterial.uniforms.color.value = 2;

		intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions2);

	    var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;
	    
		particlesMat1.uniforms.t_pos.value = particlePositions;


	
	}
	else if(time < 4.5 && time > 4.0){
		axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object1, axis, 2 * Math.PI   * 4 *  dt ) ;


	


	
	}
	else if(time < 5.0 && time > 4.5){
		var inputTime = (time-4.5)   * 4;


		axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object1, axis, 2 * Math.PI   * 4 *  dt ) ;


		//second
	    fallRandMaterial.uniforms.start.value = robotTexture;
	    fallRandMaterial.uniforms.time.value = inputTime ;
	    fallRandMaterial.uniforms.color.value = 2 ;
		renderer.render(fallRandScene, cameraOrtho, particlePositions);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;

	    particlesMat1.uniforms.t_pos.value = particlePositions;


	
	}	
	else if(time < 5.5 && time > 5.0){
		var inputTime = (time-5.0) * 2.0

		

		//second
	    intMaterial.uniforms.start.value = emptyTexture;
	    intMaterial.uniforms.end.value = houseTexture ;
	    intMaterial.uniforms.color.value = 3 ;
	    intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;

	    particlesMat1.uniforms.t_pos.value = particlePositions;


	
	}	
	else if(time < 6.0 && time > 5.5){
		var inputTime = (time-5.5) * 2.0

		

		//second
	    intMaterial.uniforms.start.value = houseTexture;
	    intMaterial.uniforms.end.value = emptyTexture ;
	    intMaterial.uniforms.color.value = 3 ;
	    intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;

	    particlesMat1.uniforms.t_pos.value = particlePositions;


	
	}	
	else if(time < 7.0 && time > 6.0){
		var inputTime = (time-6.0) * 2.0

		

		//second
	    intMaterial.uniforms.start.value = emptyTexture;
	    intMaterial.uniforms.end.value =  cubeTexture;
	    intMaterial.uniforms.color.value = -3 ;
	    intMaterial.uniforms.time.value = inputTime;

		renderer.render(intScene, cameraOrtho, particlePositions);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;

	    particlesMat1.uniforms.t_pos.value = particlePositions;
	    particlesMat1.uniforms.t.value = inputTime;

	    //second
	    intMaterial.uniforms.start.value = emptyTexture;
	    intMaterial.uniforms.end.value =  watchTexture;
	    intMaterial.uniforms.color.value = 2 ;
	    intMaterial.uniforms.time.value = inputTime;

		renderer.render(intScene, cameraOrtho, particlePositions3);
		var t = particlePositions3;
	    particlePositions3 = particlePositions4;
	    particlePositions4 = t;

	    particlesMat2.uniforms.t_pos.value = particlePositions3;


	    if(time < 6.2){
	    	axis = new THREE.Vector3(1,0,0);
			rotateAroundWorldAxis(object2, axis, 2 * Math.PI   * 4 *  dt ) ;
	    }
	    else if(time <6.3){
	    	axis = new THREE.Vector3(1,1,0);
			rotateAroundWorldAxis(object2, axis, 2 * Math.PI   * 4 *  dt ) ;
	    }
	    else if(time <6.5){
	    	axis = new THREE.Vector3(0,1,0);
			rotateAroundWorldAxis(object2, axis, 2 * Math.PI   * 4 *  dt ) ;
	    }
	    else if(time <7.0){
	    	axis = new THREE.Vector3(0,1,1);
			rotateAroundWorldAxis(object2, axis, 2 * Math.PI   * 4 *  dt ) ;
	    }
	    axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object1, axis, 2 * Math.PI   * 1*  dt ) ;
	    


	
	}

	else if(time < 7.5 && time > 7.0){
		var inputTime = (time-7.0) * 2.0

		

		//second
	    intMaterial.uniforms.start.value = cubeTexture;
	    intMaterial.uniforms.end.value = emptyTexture ;
	    intMaterial.uniforms.color.value = -3 ;
	    intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;

	    particlesMat1.uniforms.t_pos.value = particlePositions;
	    particlesMat1.uniforms.t.value = 1.0;


	    //second
	    intMaterial.uniforms.start.value = watchTexture;
	    intMaterial.uniforms.end.value = emptyTexture ;
	    intMaterial.uniforms.color.value = 2 ;
	    intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions3);
		var t = particlePositions3;
	    particlePositions3 = particlePositions4;
	    particlePositions4 = t;

	    particlesMat2.uniforms.t_pos.value = particlePositions3;

	    axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object1, axis, 2 * Math.PI   * 1*  dt ) ;
		rotateAroundWorldAxis(object2, axis, 2 * Math.PI   * 1*  dt ) ;
	
	}
	else if(time < 11.5 && time > 7.5){
		var inputTime = (time-7.5) / 4.0 * 10.0;

		

		//second
	    bezierMaterial.uniforms.points.value = [
	    	new THREE.Vector3(-299,0,0),
	    	new THREE.Vector3(-100,50,0),
	    	new THREE.Vector3(-50,50,0),
	    	new THREE.Vector3(0,-50,0),

	    	new THREE.Vector3(50,-150,0),
	    	new THREE.Vector3(50,-30,0),
	    	new THREE.Vector3(20,40,0),

	    	new THREE.Vector3(-10,110,0),
	    	new THREE.Vector3(90,80,0),
	    	new THREE.Vector3(90,0,0),

	    	new THREE.Vector3(90,-80,0),
	    	new THREE.Vector3(120,-40,0),
	    	new THREE.Vector3(100,0,0),

	    	new THREE.Vector3(80,40,0),
	    	new THREE.Vector3(20,-20,0),
	    	new THREE.Vector3(0,0,0),

	    	new THREE.Vector3(-20,20,0),
	    	new THREE.Vector3(-120,70,0),
	    	new THREE.Vector3(-120,0,0),

	    	new THREE.Vector3(-120,-70,0),
	    	new THREE.Vector3(0,70,0),
	    	new THREE.Vector3(0,0,0),

	    ];


	    bezierMaterial.uniforms.color.value = 2 ;
	    bezierMaterial.uniforms.time.value = inputTime ;

	    bezierMaterial.uniforms.end.value = robotTexture ;

		renderer.render(bezierScene, cameraOrtho, particlePositions);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;

	    particlesMat1.uniforms.t_pos.value = particlePositions;
	

	    //second
	    bezierMaterial.uniforms.points.value = [
	    	new THREE.Vector3(299,0,0),
	    	new THREE.Vector3(100,50,0),
	    	new THREE.Vector3(50,50,0),
	    	new THREE.Vector3(0,-50,0),

	    	new THREE.Vector3(-50,-150,0),
	    	new THREE.Vector3(0,-30,0),
	    	new THREE.Vector3(20,40,0),

	    	new THREE.Vector3(40,110,0),
	    	new THREE.Vector3(90,80,0),
	    	new THREE.Vector3(90,0,0),

	    	new THREE.Vector3(90,-80,0),
	    	new THREE.Vector3(50,30,0),
	    	new THREE.Vector3(-30,70,0),

	    	new THREE.Vector3(-80,100,0),
	    	new THREE.Vector3(-40,70,0),
	    	new THREE.Vector3(0,0,0),

	    	new THREE.Vector3(40,-70,0),
	    	new THREE.Vector3(120,-70,0),
	    	new THREE.Vector3(120,0,0),

	    	new THREE.Vector3(120,70,0),
	    	new THREE.Vector3(0,70,0),
	    	new THREE.Vector3(0,0,0)



	    ];


	    bezierMaterial.uniforms.color.value = 1;
	    bezierMaterial.uniforms.time.value = inputTime ;
	    bezierMaterial.uniforms.end.value = humanTexture ;
		renderer.render(bezierScene, cameraOrtho, particlePositions3);
		var t = particlePositions3;
	    particlePositions3 = particlePositions4;
	    particlePositions4 = t;

	    particlesMat2.uniforms.t_pos.value = particlePositions3;


	    object1.position.x = 50;
	    object2.position.x = -50;
	    object1.position.y = 0;
	    object2.position.y = 0;

	    object1.rotation.x = 0;
	    object1.rotation.y = 0;
	    object1.rotation.z = 0;

	    object2.rotation.x = 0;
	    object2.rotation.y = 0;
	    object2.rotation.z = 0;

	    //object1.position.x = -100;

	    if(time > 11.0){
	    	axis = new THREE.Vector3(0,1,0);
			rotateAroundWorldAxis(object1, axis, 2 * Math.PI   * 4 *  dt ) ;
			rotateAroundWorldAxis(object2, axis, -2 * Math.PI   * 4 *  dt ) ;
	    }
	
	}
	else if(time < 12.0 && time > 11.5){
		var inputTime = (time-11.5) * 2.0

		

		//second
	    intMaterial.uniforms.start.value = robotTexture;
	    intMaterial.uniforms.end.value =  emptyTexture;
	    intMaterial.uniforms.color.value = 2 ;
	    intMaterial.uniforms.time.value = inputTime;
	    object1.position.x = 50 * (1-inputTime) + 0 * (inputTime);
	    object2.position.x = -50 * (1-inputTime) + 0 * (inputTime);

	    renderer.render(intScene, cameraOrtho, particlePositions);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;

	    particlesMat1.uniforms.t_pos.value = particlePositions;
	  

	    //second
	    intMaterial.uniforms.start.value = humanTexture;
	    intMaterial.uniforms.end.value = emptyTexture ;
	    intMaterial.uniforms.color.value = 1 ;
	    intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions3);
		var t = particlePositions3;
	    particlePositions3 = particlePositions4;
	    particlePositions4 = t;

	    particlesMat2.uniforms.t_pos.value = particlePositions3;

		axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object1, axis, 2 * Math.PI   * 4 *  dt ) ;
		rotateAroundWorldAxis(object2, axis, -2 * Math.PI   * 4 *  dt ) ;



	}

	else if(time < 12.5 && time > 12.0){
		var inputTime = (time-12) * 2.0;

		
		logSpiralMaterial.uniforms.color.value = 1;

		logSpiralMaterial.uniforms.time.value = inputTime;
		logSpiralMaterial.uniforms.offset.value = 0.0;
		renderer.render(logSpiralScene, cameraOrtho, particlePositions2);

	    var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;
	    
		particlesMat1.uniforms.t_pos.value = particlePositions;


		//second set of particles

		logSpiralMaterial.uniforms.color.value = 2
		logSpiralMaterial.uniforms.time.value = inputTime;
		logSpiralMaterial.uniforms.offset.value = 1.0;
		renderer.render(logSpiralScene, cameraOrtho, particlePositions4);

	    var t = particlePositions3;
	    particlePosition3 = particlePositions4;
	    particlePositions4 = t;
	    
		particlesMat2.uniforms.t_pos.value = particlePositions3;
		particlesMat1.uniforms.size.value = 1.0;
		particlesMat2.uniforms.size.value = 1.0;

		object1.rotation.x = 0;
		object1.rotation.y = 0;
		object1.rotation.z = 0;
		object2.rotation.x = 0;
		object2.rotation.y = 0;
		object2.rotation.z = 0;


	}
	

	if(time < 13.0 && time > 12.5){
		var inputTime = (time-12.5)  * 2.0;

		

		//second
	    intMaterial.uniforms.start.value = emptyTexture;
	    intMaterial.uniforms.end.value =  robotTexture;
	    intMaterial.uniforms.color.value = 2 ;
	    intMaterial.uniforms.time.value = inputTime;
	  

	    renderer.render(intScene, cameraOrtho, particlePositions);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;

	    particlesMat1.uniforms.t_pos.value = particlePositions;
	  

	    //second
	    intMaterial.uniforms.start.value = emptyTexture;
	    intMaterial.uniforms.end.value = cubeTexture ;
	    intMaterial.uniforms.color.value = 3 ;
	    intMaterial.uniforms.time.value = inputTime;
		renderer.render(intScene, cameraOrtho, particlePositions3);
		var t = particlePositions3;
	    particlePositions3 = particlePositions4;
	    particlePositions4 = t;

	    particlesMat2.uniforms.t_pos.value = particlePositions3;

		axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object1, axis, 2 * Math.PI   * 4 *  dt ) ;
		rotateAroundWorldAxis(object2, axis, 2 * Math.PI   * 4 *  dt ) ;

		
		object2.scale.x = 1.5 ;
		object2.scale.y = 1.5 ;
		object2.scale.z = 1.5 ;

		particlesMat1.uniforms.size.value = 2.0;
		particlesMat2.uniforms.size.value = 2.0;

		

	}
	else if(time < 14.0 && time > 13.0){

		var inputTime = (time-13.0) * 1.0;

		
		object1.scale.x = 1 * (1 - inputTime) + 0.2 * (inputTime);
		object1.scale.y = 1 * (1 - inputTime) + 0.2 * (inputTime);
		object1.scale.z = 1 * (1 - inputTime) + 0.2 * (inputTime);
		object2.scale.x = 1.5 * (1 - inputTime) + 0.4 * (inputTime);
		object2.scale.y = 1.5 * (1 - inputTime) + 0.4 * (inputTime);
		object2.scale.z = 1.5 * (1 - inputTime) + 0.4 * (inputTime);

		

		axis = new THREE.Vector3(0,1,0);
		


		object1.position.x = 0 * (1-inputTime) + -100 * (inputTime);
		object1.position.y = 0 * (1-inputTime) + -100 * (inputTime);

		object2.position.x = 0 * (1-inputTime) + -100 * (inputTime);
		object2.position.y = 0 * (1-inputTime) + -100 * (inputTime);
		

		object1.rotation.y += dt * 3.14 * 4 * 2;





	}
	
	if(time < 14.5 && time > 12.5){
		var inputTime = (time-12.5) / 2.0 *  10.0;

		
		

		

		//second
	    bezierMaterial.uniforms.points.value = [
	    	new THREE.Vector3(-299,0,0),
	    	new THREE.Vector3(-100,50,0),
	    	new THREE.Vector3(-50,50,0),
	    	new THREE.Vector3(0,-50,0),

	    	new THREE.Vector3(50,-150,0),
	    	new THREE.Vector3(50,-30,0),
	    	new THREE.Vector3(20,40,0),

	    	new THREE.Vector3(-10,110,0),
	    	new THREE.Vector3(90,80,0),
	    	new THREE.Vector3(90,0,0),

	    	new THREE.Vector3(90,-80,0),
	    	new THREE.Vector3(120,-40,0),
	    	new THREE.Vector3(100,0,0),

	    	new THREE.Vector3(80,40,0),
	    	new THREE.Vector3(20,-20,0),
	    	new THREE.Vector3(0,0,0),

	    	new THREE.Vector3(-20,20,0),
	    	new THREE.Vector3(40,70,0),
	    	new THREE.Vector3(80,0,0),

	    	new THREE.Vector3(120,-70,0),
	    	new THREE.Vector3(80,-150,0),
	    	new THREE.Vector3(0,-300,0),

	    ];


	    bezierMaterial.uniforms.color.value = 1;
	    bezierMaterial.uniforms.time.value = inputTime ;
	    bezierMaterial.uniforms.end.value = emptyTexture ;
		renderer.render(bezierScene, cameraOrtho, particlePositions5);
		var t = particlePositions5;
	    particlePositions5 = particlePositions6;
	    particlePositions6 = t;

	    particlesMat3.uniforms.t_pos.value = particlePositions5;
	    particlesMat4.uniforms.t_pos.value = emptyTexture;
	    object3.visible = true;
	    object4.visible = false;

	    if(inputTime > 7.5){
	    	object3.visible = false;
	    }
	    
		




	}
	if(time < 15.5 && time > 14.5){
		object3.visible = true;
	    object4.visible = true;
		var inputTime = (time-14.5) *3;

		spiralUpMaterial.uniforms.time.value = inputTime;
		spiralUpMaterial.uniforms.end.value = heartTexture;
		spiralUpMaterial.uniforms.color.value = 1.0;
		spiralUpMaterial.uniforms.offset.value = 0.0;
		renderer.render(spiralUpScene, cameraOrtho, particlePositions6);
		var t = particlePositions5;
	    particlePositions5 = particlePositions6;
	    particlePositions6 = t;


	    particlesMat3.uniforms.t_pos.value = particlePositions5;


	    spiralUpMaterial.uniforms.time.value = inputTime;
		spiralUpMaterial.uniforms.end.value = sphereTexture;
		spiralUpMaterial.uniforms.color.value = 4.0;
		spiralUpMaterial.uniforms.offset.value = 1.0;
		renderer.render(spiralUpScene, cameraOrtho, particlePositions8);
		var t = particlePositions7;
	    particlePositions7 = particlePositions8;
	    particlePositions8 = t;


	    particlesMat4.uniforms.t_pos.value = particlePositions7;



	    axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object3, axis, Math.PI / 180);
		rotateAroundWorldAxis(object4, axis, Math.PI / 180);
	
	
	  	

	    particlesMat3.uniforms.size.value = 2.0;
		particlesMat4.uniforms.size.value = 2.0;

	}
	

	if(time < 17.0 && time > 16.0){
		 //second
		 var inputTime = (time-16) * 2;
	    fallRandMaterial.uniforms.start.value = sphereTexture;
	    fallRandMaterial.uniforms.time.value = inputTime;
	    fallRandMaterial.uniforms.color.value = 4.0;
		renderer.render(fallRandScene, cameraOrtho, particlePositions7);
		var t = particlePositions7;
	    particlePositions7 = particlePositions8;
	    particlePositions8 = t;



	    particlesMat4.uniforms.t_pos.value = particlePositions7;


	    fallRandMaterial.uniforms.start.value = cubeTexture;
	    fallRandMaterial.uniforms.time.value = inputTime;
	    fallRandMaterial.uniforms.color.value = 3 ;
		renderer.render(fallRandScene, cameraOrtho, particlePositions3);
		var t = particlePositions3;
	    particlePositions3 = particlePositions4;
	    particlePositions4 = t;


	    particlesMat2.uniforms.t_pos.value = particlePositions3;


	}
	if(time < 18.0 && time > 17.0){
		 //second
		 var inputTime = (time-17) ;
	    

		
		object1.scale.x = 1 * ( inputTime) + 0.2 * (1-inputTime);
		object1.scale.y = 1 * (inputTime) + 0.2 * (1-inputTime);
		object1.scale.z = 1 * ( inputTime) + 0.2 * (1 - inputTime);


		


		


		object1.position.x = -50 * (inputTime) + -100 * (1-inputTime);
		object1.position.y = 0 * (inputTime) + -100 * (1-inputTime);

		object3.position.x = 50 * (inputTime) + 0 * (1-inputTime);
	

		object2.position.x = 0;
		object2.position.y = 0 ;
			




		//second
	    intMaterial.uniforms.start.value = heartTexture;
	    intMaterial.uniforms.end.value =  humanTexture;
	    intMaterial.uniforms.color.value = 1 ;
	    intMaterial.uniforms.time.value = inputTime;
	    
	    renderer.render(intScene, cameraOrtho, particlePositions6);
		var t = particlePositions5;
	    particlePositions5 = particlePositions6;
	    particlePositions6 = t;


	}
	
	if(time < 19 && time > 14.0){
		object1.rotation.y += dt * 3.14 *  4* 2;
		

	}
	if(time > 13.5 && time < 14.0){
		object3.rotation.z = 0;
		object3.rotation.x = 0;
		object3.rotation.y = 0;

		object4.rotation.z = 0;
		object4.rotation.x = 0;
		object4.rotation.y = 0;


		object1.rotation.z = 0;
		object1.rotation.x = 0;
		object1.rotation.y = 0;
	}
	if(time < 19 && time > 14.0){
		axis = new THREE.Vector3(0,1,0);
		rotateAroundWorldAxis(object3, axis, Math.PI  * 4  * dt);
		rotateAroundWorldAxis(object4, axis, Math.PI  * 4  * dt);
	

		

	}
	

	if(time < 22 && time > 19){
		object3.rotation.z = 0;
		object3.rotation.x = 0;
		object3.rotation.y = 0;

		object4.rotation.z = 0;
		object4.rotation.x = 0;
		object4.rotation.y = 0;


		object1.rotation.z = 0;
		object1.rotation.x = 0;
		object1.rotation.y = 0;

		var inputTime = (time-19) / 3 * 10 ;

		if(inputTime <= 1.0){
			object3.position.x = 0 * (inputTime) + 50 * (1-inputTime);
			object1.position.x = 0 * (inputTime) - 50 * (1-inputTime);

		}



		//second
	    bezierSpiralMaterial.uniforms.points.value = [
	    	new THREE.Vector3(0,0,0),
	    	new THREE.Vector3(30,50,0),
	    	new THREE.Vector3(50,50,0),
	    	new THREE.Vector3(50,0,0),

	    	new THREE.Vector3(50,-50,0),
	    	new THREE.Vector3(0,-80,0),
	    	new THREE.Vector3(-50,-70,0),

	    	new THREE.Vector3(-40,-60,0),
	    	new THREE.Vector3(-80,-30,0),
	    	new THREE.Vector3(-120,0,0),

	    	new THREE.Vector3(-140,30,0),
	    	new THREE.Vector3(-50,40,0),
	    	new THREE.Vector3(0 ,30,0),

	    	new THREE.Vector3(50,20,0),
	    	new THREE.Vector3(20,-20,0),
	    	new THREE.Vector3(0,-50,0),

	    	new THREE.Vector3(-20,-80,0),
	    	new THREE.Vector3(-60,-40,0),
	    	new THREE.Vector3(-40,0,0),

	    	new THREE.Vector3(-20,40,0),
	    	new THREE.Vector3(20,30,0),
	    	new THREE.Vector3(0,0,0),

	    ];


	    bezierSpiralMaterial.uniforms.color.value = 1;
	    bezierSpiralMaterial.uniforms.offset.value = 0;
	    bezierSpiralMaterial.uniforms.time.value = inputTime ;

	    bezierSpiralMaterial.uniforms.start.value = humanTexture ;
	    bezierSpiralMaterial.uniforms.end.value = emptyTexture ;

		renderer.render(bezierSpiralScene, cameraOrtho, particlePositions5);
		var t = particlePositions5;
	    particlePositions5 = particlePositions6;
	    particlePositions6 = t;
	    particlesMat3.uniforms.t_pos.value = particlePositions5;


	    bezierSpiralMaterial.uniforms.color.value = 2;
	    bezierSpiralMaterial.uniforms.offset.value = 1;
	    bezierSpiralMaterial.uniforms.time.value = inputTime ;
	    bezierSpiralMaterial.uniforms.start.value = robotTexture ;
	    bezierSpiralMaterial.uniforms.end.value = robotTexture ;

		renderer.render(bezierSpiralScene, cameraOrtho, particlePositions);
		var t = particlePositions;
	    particlePositions = particlePositions2;
	    particlePositions2 = t;
	    particlesMat1.uniforms.t_pos.value = particlePositions;
	}


	
	
	renderer.render(scene, camera);
}