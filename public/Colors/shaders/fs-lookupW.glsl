varying float w;
varying vec3 color;
void main(){
	
	vec2 coord = gl_PointCoord - vec2(0.5); 
	if(length(coord) > 0.5)                
	    discard;

	gl_FragColor = vec4(color, 1.);
	
  

}
