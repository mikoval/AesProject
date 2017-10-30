uniform sampler2D t_pos;
varying float w;
uniform vec2  res;
uniform float size;
attribute vec3 vcolor;
varying vec3 color;
void main(){

  vec4 pos = texture2D( t_pos , position.xy);
  color = vcolor;


  gl_PointSize = size;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos.x  , pos.y,pos.z, 1. );


}
