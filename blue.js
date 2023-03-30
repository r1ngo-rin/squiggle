<script src="processing-1.3.6.min.js"></script>
<script type="text/processing" data-processing-target="processing-canvas">

  void setup() {
  size(500, 400);
  background(10, 80, 100);
}

void draw() {
  stroke(255, 0 + 0.8*mouseY, 255);
  
fill(2, 0 + 0.8*mouseX, 255);
  ellipse(mouseX, mouseY, 70 + .3*mouseX, 70 + 0.3*mouseY);
  

}
</script>
<canvas id="processing-canvas"> </canvas>
