varying float w;
varying vec3 color;
uniform float opacity;
void main(){
	
	vec2 coord = gl_PointCoord - vec2(0.5); 
	if(length(coord) > 0.5)                
	    discard;

	gl_FragColor = vec4(color, opacity);
	
  

}
