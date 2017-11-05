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
	vec4 pos1 = vec4(0.0, -200.0, 0.0, 0.0);
	vec4 pos2 = vec4(0.0, 0.0, 0.0, 0.0);
	vec4 pos3 = texture2D( end , pixel);
	
	float timeP = time;
	
	vec4 pos = pos1;
	if(timeP > rand(gl_FragCoord.xy * 2.0)){
		timeP = timeP -  rand(gl_FragCoord.xy * 2.0);
		
		float angle = timeP * 3.14 * 2.0 * 3.0;
		pos = pos1 * (1.0-timeP) + pos2 * timeP;

		if(offset == 0.0){
			pos.z = 30.0 + rand(gl_FragCoord.xy) * 10.0 - 5.0;
		}
		if(offset == 1.0){
			pos.z = -30.0 - rand(gl_FragCoord.xy) * 10.0 - 5.0;
		}
		
		pos.y =  pos.y + rand(gl_FragCoord.xy*3.0) * 20.0 - 10.0;

		mat4 rotation = rotationMatrix(vec3(0.0, 1.0, 0.0), angle);
		pos =  rotation * pos;

		if(timeP > 1.0){
			timeP = timeP - 1.0;
			if(timeP > 1.0){
				timeP = 1.0;
			}
			pos = pos * (1.0 - timeP) + pos3 * timeP;
		}
		
		

		

	}
	pos.w = color;
	gl_FragColor = pos;
	
	
  

}
