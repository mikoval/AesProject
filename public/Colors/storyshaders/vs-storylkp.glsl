uniform sampler2D t_pos;
varying float w;
uniform vec2  res;
uniform float size;
uniform float t;
attribute vec3 vcolor;
varying vec3 color;

void main(){

  vec4 pos = texture2D( t_pos , position.xy);

  if(pos.w == -2.0){
    color = vec3(1.0, 1.0, 1.0) * (1.0 - t) + vec3(0.0, 0.0, 1.0) * t ;
  }
  if(pos.w == -3.0){
    color = vec3(0.4, 0.3, 0.0) * (1.0 - t) + vec3(1.0, 0.8, 0.0) * t ;
  }


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
  if(pos.w == 3.0){
    color = vec3(0.4, 0.3, 0.0);
  }

  if(pos.w == 4.0){
    color = vec3(0.3, 0.9, 0.3);
  }
  
  
  	
  

  


  gl_PointSize = size;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos.x  , pos.y,pos.z, 1. );


}
