varying float w;
uniform float time;
uniform sampler2D start; 
uniform vec2 res; 

$rand
void main(){
	vec2 pixel = gl_FragCoord.xy / res.xy;
	vec4 pos1 = texture2D( start , pixel);
	float timeP = time;
	if(timeP >= 1.01){
		timeP = 1.0;
	}
	float r = rand(gl_FragCoord.xy);
	vec4 pos = pos1;
	if(time > r){
		float time2 = time - r;
		time2 = time2 * time2;
		
		pos.y = pos.y - 1000.0 * time2;
	}
	gl_FragColor = pos;
	
  

}
