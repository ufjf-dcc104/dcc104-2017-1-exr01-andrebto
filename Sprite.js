function Sprite() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.w = 0;
  this.h = 0;
  this.color = "blue";
}


Sprite.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.w, this.h);
  ctx.strokeStyle = this.color;
  ctx.strokeRect(this.x, this.y, this.w, this.h);
}


Sprite.prototype.mover = function (dt) {
  this.vx = this.vx + this.ax*dt;
  this.vy = this.vy + (this.ay+60)*dt;
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
};

Sprite.prototype.collide = function (r2) {
	if(((this.x+this.w < r2.x) || (this.x > r2.x+r2.w)) || ((this.y+this.h < r2.y) || (this.y > r2.y+r2.h)))
		return false;
	else
		return true;
};
