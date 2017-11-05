varying float w;
uniform float time;
uniform float color;
uniform float offset;
uniform sampler2D start; 
uniform sampler2D end; 
uniform vec2 res; 

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
	vec4 pos1 = vec4(0.0, 0.0, 0.0, 0.0);

	float timeP = time;
	
	vec4 pos = pos1;

	

	vec3 axis = vec3(0.0, 0.0, 1.0);
	if(timeP > rand(gl_FragCoord.xy * 2.0) / 12.0){
		timeP = timeP -  rand(gl_FragCoord.xy * 2.0)/12.0;
		

		float dist = timeP * (400.0 + rand(gl_FragCoord.xy * 3.0) * 50.0 - 25.0) ;

		if(offset == 0.0){
			pos.x = dist * sin(timeP * 3.14 * 24.0);  
			pos.y = dist * cos(timeP * 3.14 * 24.0); 
		}
		if(offset == 1.0){
			pos.x = dist * sin(timeP * 3.14 * 24.0 + 3.14);  
			pos.y = dist * cos(timeP * 3.14 * 24.0 + 3.14); 
		}

		 


		

		

	}
	pos.w = color;
	gl_FragColor = pos;
	
	
  

}
