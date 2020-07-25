class Paper{
constructor(){
var options={
'restitution':0.8,
'friction':0.3,
'density':0.1,
}
ellipse(10,10,300,0);



}


}
function keyPressed(){
if(keyCode===UP_Arrow){
    MediaStreamTrackEvent.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}}