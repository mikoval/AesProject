varying float w;
uniform float time;
uniform float color;

uniform vec3 points[22];
uniform vec2 res;

uniform float offset;

uniform sampler2D start; 
uniform sampler2D end; 

$rand
mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}
void main(){
	vec2 pixel = gl_FragCoord.xy / res.xy;
	vec4 pos1 = vec4(-10000.0, 0.0, 0.0, 0.0);
	vec4 pos0 = texture2D( start , pixel);
	vec4 pos2 = texture2D( end , pixel);


	float timeP = time;
	
	vec4 pos = pos0;

	bool interpolate = false;
	bool interpolateStart = false;
	

	vec3 axis = vec3(0.0, 0.0, 1.0);
	if(timeP > rand(gl_FragCoord.xy * 2.0) / 1.0){
		timeP = timeP -  rand(gl_FragCoord.xy * 2.0)/1.0;
		float inputTime = 0.0;
		float negInputTime = 0.0;


		vec3 p1 = vec3(0.0); 
		vec3 p2 = vec3(0.0);
		vec3 p3 = vec3(0.0);
		vec3 p4 = vec3(0.0);



		if(   timeP	<= 1.0){
			inputTime = timeP;
			interpolateStart = true;
			negInputTime = 1.0-inputTime;

			p1 = points [0];
			p2 = points [1];
			p3 = points [2];
			p4 = points [3];


		}

		else if (timeP > 1.0 && timeP	<= 2.0){
		    inputTime = (timeP -1.0);
		    negInputTime = 1.0-inputTime;

			p1 = points [0];
			p2 = points [1];
			p3 = points [2];
			p4 = points [3];


		}

		else if (timeP > 2.0 && timeP	<= 3.0){
		    inputTime = (timeP -2.0);
		    negInputTime = 1.0-inputTime;

			p1 = points [3];
			p2 = points [4];
			p3 = points [5];
			p4 = points [6];


		}

		else if (timeP > 3.0 && timeP	<= 4.0){
		    inputTime = (timeP -3.0);
		    negInputTime = 1.0-inputTime;

			p1 = points [6];
			p2 = points [7];
			p3 = points [8];
			p4 = points [9];


		}

		else if (timeP > 4.0 && timeP	<= 5.0){
		    inputTime = (timeP -4.0);
		    negInputTime = 1.0-inputTime;

			p1 = points [9];
			p2 = points [10];
			p3 = points [11];
			p4 = points [12];


		}

		else if (timeP > 5.0 && timeP	<= 6.0){
		    inputTime = (timeP -5.0);
		    negInputTime = 1.0-inputTime;

			p1 = points [12];
			p2 = points [13];
			p3 = points [14];
			p4 = points [15];


		}
		else if (timeP > 6.0 && timeP	<= 7.0){
		    inputTime = (timeP -6.0);
		    negInputTime = 1.0-inputTime;

			p1 = points [15];
			p2 = points [16];
			p3 = points [17];
			p4 = points [18];


		}

		else if (timeP > 7.0 && timeP	<= 8.0){
		    inputTime = (timeP -7.0);
		    negInputTime = 1.0-inputTime;

			p1 = points [18];
			p2 = points [19];
			p3 = points [20];
			p4 = points [21];

		}
		else{

			interpolate = true;
			inputTime = 1.0;


		    negInputTime = 1.0-inputTime;

			
			p1 = points [18];
			p2 = points [19];
			p3 = points [20];
			p4 = points [21];
		}
		
		
		vec3 point = p1 *  pow(negInputTime, 3.0) 
			+ 3.0 * p2 * pow(negInputTime, 2.0) * inputTime 
			+ 3.0 * p3 * pow(negInputTime, 1.0) * pow(inputTime,2.0)
			+ p4 * pow(inputTime,3.0);

		vec3 tangent = p1 * -3.0 * pow(negInputTime, 2.0)
			+ p2 *(3.0*pow(negInputTime,2.0) - 6.0*(negInputTime)*pow(inputTime, 1.0) ) 
			+ p3 *(6.0*pow(negInputTime,1.0) * inputTime - 3.0*pow(inputTime, 2.0) )
			+ 3.0*p4*pow(inputTime, 2.0);


		

		//tangent = vec3(0.0, 1.0, 0.0);
		


		float xOffset = (rand(gl_FragCoord.xy * 3.0) - 0.5) * 5.0;

		float yOffset = (rand(gl_FragCoord.xy * 4.0) - 0.5) * 5.0; 

		float zOffset =  (rand(gl_FragCoord.xy * 5.0) - 0.5) * 5.0;

		
		float angle = timeP * 3.14 * 2.0 * 3.0;

	
		
		if(offset == 0.0){
			pos = vec4(0.0, 0.0, -10.0, 0.0);
		}
		if(offset == 1.0){
			pos = vec4(0.0, 0.0, 10.0, 0.0);
		}
		



		

		mat4 rotation = rotationMatrix(tangent, angle);
		
		pos =  rotation * pos;

		vec4 tmp = vec4(point, 0.0);
		pos += tmp;


		//pos = vec4(point, 0.0);

		pos.x += xOffset;
		pos.y += yOffset;
		pos.z += zOffset;


		
		if(interpolate){

			inputTime = (timeP - 7.0)/ 1.0;
		
			if(inputTime > 1.0){
				inputTime = 1.0;
			}
			negInputTime = 1.0-inputTime;



			vec4 newpos = pos * (negInputTime) + pos2 * (inputTime);

			pos = newpos;
		}

		if(interpolateStart){

			
			
			if(inputTime > 1.0){
				inputTime = 1.0;
			}
			negInputTime = 1.0-inputTime;
			pos  = vec4(p1, 0.0);;

			pos.z += 30.0 + rand(gl_FragCoord.xy) * 10.0 - 5.0;
	



			pos.x += xOffset;
			pos.y += yOffset;
			pos.z += zOffset;


			vec4 newpos = pos0 * (negInputTime) + pos * (inputTime);

			pos = newpos;
		}





	}
	pos.w = color;

	
	gl_FragColor = pos;
	
	
  

}
