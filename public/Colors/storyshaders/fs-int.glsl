varying float w;
uniform float time;
uniform float color;
uniform sampler2D start; 
uniform sampler2D end; 
uniform vec2 res; 
void main(){
	vec2 pixel = gl_FragCoord.xy / res.xy;
	vec4 pos1 = texture2D( start , pixel);
	vec4 pos2 = texture2D( end , pixel);
	float timeP = time;
	if(timeP >= 1.01){
		timeP = 1.0;
	}



	vec4 pos = pos1 * (1.0 - timeP) + pos2 * timeP;

	pos.w = color;

	gl_FragColor = pos;
	
  

}
