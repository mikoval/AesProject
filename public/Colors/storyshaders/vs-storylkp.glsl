uniform sampler2D t_pos;
varying float w;
uniform vec2  res;
uniform float size;
attribute vec3 vcolor;
varying vec3 color;

void main(){

  vec4 pos = texture2D( t_pos , position.xy);

  if(pos.w == -1.0){
  	color = vcolor;
  }
  if(pos.w == 0.0){
  	color = vec3(1.0, 1.0, 1.0);
  }
  if(pos.w == 1.0){
  	color = vec3(1.0, 0.0, 0.0);
  }
  if(pos.w == 2.0){
  	color = vec3(0.0, 0.0, 1.0);
  }
  
  	
  

  


  gl_PointSize = size;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos.x  , pos.y,pos.z, 1. );


}
