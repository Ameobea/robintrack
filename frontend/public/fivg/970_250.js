(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  // symbols:

  (lib.BG2 = function () {
    this.initialize(img.BG2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 300, 500);

  (lib.Cloud = function () {
    this.initialize(img.Cloud);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 174, 185);

  (lib.Doctor = function () {
    this.initialize(img.Doctor);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 226, 222);

  (lib.Earthjpgcopy = function () {
    this.initialize(img.Earthjpgcopy);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 570, 182);

  (lib.Plane = function () {
    this.initialize(img.Plane);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 196, 286);

  (lib.Satellite = function () {
    this.initialize(img.Satellite);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 217, 118);

  (lib.Stars = function () {
    this.initialize(img.Stars);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 300, 313);

  (lib.Town = function () {
    this.initialize(img.Town);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 970, 250); // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.Tween33 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(['rgba(255,255,255,0.498)', '#FFFFFF', 'rgba(255,255,255,0.498)'], [0, 0.494, 1], -112.1, 0, 112.1, 0)
      .s()
      .p('AxgAFIAAgJMAjBAAAIAAAJg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-112.1, -0.5, 224.3, 1);

  (lib.Tween32 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s('rgba(255,255,255,0.498)')
      .ss(1, 1, 1)
      .p('AAgAAQAAANgJAJQgKAKgNAAQgMAAgJgKQgKgJAAgNQAAgMAKgKQAJgJAMAAQANAAAKAJQAJAKAAAMg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4.1, -4.1, 8.4, 8.4);

  (lib.Tween31 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s('rgba(255,255,255,0.498)')
      .ss(1, 1, 1)
      .p('AAgAAQAAANgJAKQgKAJgNAAQgMAAgKgJQgJgKAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4.2, -4.2, 8.4, 8.4);

  (lib.Tween30 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('rgba(17,22,35,0.898)').s().p('EgXbAu4MAAAhdvMAu3AAAMAAABdvg');
    this.shape.setTransform(300.1, 182, 3.254, 0.426);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-187.9, 54.1, 976.2, 255.9);

  (lib.Tween29 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#DDA53B')
      .s()
      .p('AgFAGQgCgDAAgDQAAgDACgCQACgCADAAQAEAAACACQACACABADQgBADgCADQgCACgEAAQgDAAgCgCg');
    this.shape.setTransform(234.9, 206.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgaBBQgNgIgGgOQgHgPAAgSIAAgSQAAgTAHgPQAGgOANgIQAMgIAPAAQAXAAAOAMQANAMACAWIgMAAQgFgkgjAAQgSAAgLAOQgMAPAAAaIAAAQQAAAZALAOQAMAPASAAQASAAAKgJQAKgJACgSIAMAAQgDAWgNAMQgOAMgWAAQgPAAgMgIg'
      );
    this.shape_1.setTransform(226.2, 200.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#DDA53B').s().p('AgoBHIAAiNIAMAAIAACDIBFAAIAAAKg');
    this.shape_2.setTransform(215.1, 200.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#DDA53B').s().p('AgoBHIAAiNIAMAAIAACDIBFAAIAAAKg');
    this.shape_3.setTransform(204.6, 200.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#DDA53B').s().p('AgJARQAIgMABgLIAAgPIAKAAIAAAMQAAATgMANg');
    this.shape_4.setTransform(191.6, 207.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgbAuQgMgJAAgOIAMAAQAAAKAJAGQAHAGAMAAQAMAAAIgGQAHgFAAgIQABgJgIgFQgGgFgPgDQgNgDgHgDQgIgEgEgGQgDgFAAgIQAAgNAKgIQAKgIAPAAQASAAALAJQAKAJAAAOIgLAAQAAgKgIgGQgIgGgMAAQgKAAgHAFQgHAFAAAJQAAAHAGAFQAGAEAOAEQAQADAHADQAIAFAEAFQADAGAAAIQAAAOgLAIQgLAIgRAAQgRAAgLgJg'
      );
    this.shape_5.setTransform(184.9, 201.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgTAwQgLgHgHgLQgFgMgBgPIAAgDQAAgPAGgNQAGgMALgHQAKgHALAAQATAAAMANQALANAAAXIAAAGIhKAAIAAACQAAASALAMQAKAMAOAAQAJAAAIgEQAHgDAFgIIAIAGQgNATgYAAQgNAAgKgHgAgTgiQgKAJgBARIA+AAIAAgCQgBgPgIgJQgIgKgOAAQgLAAgJAKg'
      );
    this.shape_6.setTransform(174.9, 201.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgdAoQgNgOAAgZIAAgCQAAgQAFgMQAGgMALgGQAKgHAMAAQARAAAMAKQALALABARIgLAAQgBgNgIgHQgIgIgNAAQgPAAgIAMQgJALAAAVIAAACQAAAUAJAMQAIALAQAAQALAAAJgHQAIgHABgLIALAAQgBAKgFAIQgGAIgJAEQgJAFgKAAQgUAAgMgPg'
      );
    this.shape_7.setTransform(164.5, 201.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhpIALAAIAABpgAgFg6QgCgCAAgDQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgDAAgCgCg');
    this.shape_8.setTransform(157.1, 200);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#DDA53B').s().p('AgEA1IgnhpIALAAIAgBZIAghZIANAAIgoBpg');
    this.shape_9.setTransform(150.1, 201.9);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#DDA53B').s().p('AgYA2IAAhpIAMAAIAAARQAJgTAUAAIAIABIgBALIgIgBQgLAAgGAHQgIAGgDALIAABIg');
    this.shape_10.setTransform(142.5, 201.8);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgTAwQgMgHgFgLQgHgMAAgPIAAgDQABgPAFgNQAGgMAKgHQALgHALAAQATAAAMANQAMANAAAXIAAAGIhLAAIAAACQAAASAKAMQALAMAOAAQAJAAAHgEQAIgDAGgIIAHAGQgNATgZAAQgMAAgKgHgAgTgiQgKAJgCARIA+AAIAAgCQAAgPgIgJQgIgKgOAAQgMAAgIAKg'
      );
    this.shape_11.setTransform(133.5, 201.9);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgYBDQgNgFgGgJQgHgKAAgNIAMAAQAAAQALAIQAMAJARAAQARAAAKgIQAKgHAAgMQAAgMgIgGQgJgIgVgGQgWgFgKgHQgPgLAAgQQAAgQAOgLQANgKAVAAQAOAAAKAFQAMAGAGAJQAGALAAALIgMAAQAAgOgKgJQgKgJgQAAQgQAAgJAIQgKAGAAANQAAAKAJAHQAIAHASAFQAUAFAJAFQAKAFAFAJQAFAHAAALQAAARgNAKQgOAKgWAAQgOAAgMgGg'
      );
    this.shape_12.setTransform(122.4, 200.1);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgeA9QgMgOAAgZIAAgCQAAgYAMgOQAKgOAUAAQAUgBALASIAAg8IAMAAIAACVIgLAAIgBgOQgLAQgVAAQgSAAgLgPgAgVgLQgIALAAAWQAAAVAIALQAHAMAOAAQAWAAAJgTIAAgxQgJgVgWABQgNAAgIALg'
      );
    this.shape_13.setTransform(105.8, 199.8);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AAdA2IAAhFQgBgOgGgHQgFgHgNAAQgLAAgHAHQgJAHgEALIAABIIgMAAIAAhpIALAAIABASQAFgKAJgFQAKgFAJAAQARAAAIAKQAJAJAAATIAABFg'
      );
    this.shape_14.setTransform(95.1, 201.8);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f('#DDA53B')
      .s()
      .p('AgeAsQgJgKAAgTIAAhEIAMAAIAABCQAAAfAYAAQAZAAAGgVIAAhMIAMAAIAABpIgLAAIgBgOQgKAQgWAAQgRAAgJgKg');
    this.shape_15.setTransform(84.1, 202);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#DDA53B').s().p('AgrBHIAAiNIBXAAIAAAKIhLAAIAAA3IBCAAIAAAJIhCAAIAABDg');
    this.shape_16.setTransform(73.6, 200.1);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgTAwQgMgHgFgLQgHgMAAgPIAAgDQABgPAFgNQAGgMAKgHQALgHALAAQATAAAMANQAMANAAAXIAAAGIhLAAIAAACQAAASAKAMQALAMAOAAQAJAAAHgEQAIgDAGgIIAHAGQgNATgZAAQgMAAgKgHgAgTgiQgKAJgCARIA+AAIAAgCQAAgPgIgJQgIgKgOAAQgMAAgIAKg'
      );
    this.shape_17.setTransform(57.5, 201.9);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgeA9QgMgOAAgZIAAgCQAAgYAMgOQAKgOAUAAQAUgBALASIAAg8IAMAAIAACVIgLAAIgBgOQgLAQgVAAQgSAAgLgPgAgVgLQgIALAAAWQAAAVAIALQAHAMAOAAQAWAAAJgTIAAgxQgJgVgWABQgNAAgIALg'
      );
    this.shape_18.setTransform(46.4, 199.8);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhpIALAAIAABpgAgFg6QgCgCAAgDQAAgDACgDQADgCACAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgCAAgDgCg');
    this.shape_19.setTransform(38.9, 200);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgbAuQgMgJAAgOIAMAAQAAAKAJAGQAHAGAMAAQAMAAAIgGQAHgFAAgIQABgJgIgFQgGgFgPgDQgNgDgHgDQgIgEgEgGQgDgFgBgIQAAgNALgIQAKgIAPAAQASAAALAJQALAJgBAOIgLAAQAAgKgIgGQgIgGgMAAQgKAAgHAFQgHAFAAAJQAAAHAGAFQAGAEAOAEQAQADAHADQAIAFADAFQAEAGAAAIQAAAOgLAIQgKAIgSAAQgRAAgLgJg'
      );
    this.shape_20.setTransform(31.6, 201.9);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgUAwQgKgHgHgLQgFgMAAgPIAAgDQgBgPAGgNQAGgMALgHQAKgHAMAAQATAAALANQALANAAAXIAAAGIhKAAIAAACQAAASALAMQAKAMAOAAQAJAAAIgEQAHgDAFgIIAIAGQgNATgYAAQgNAAgLgHgAgUgiQgJAJgBARIA+AAIAAgCQgBgPgIgJQgIgKgNAAQgMAAgKAKg'
      );
    this.shape_21.setTransform(21.5, 201.9);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f('#DDA53B').s().p('AgYA2IAAhpIAMAAIAAARQAJgTAUAAIAIABIgBALIgIgBQgLAAgGAHQgIAGgDALIAABIg');
    this.shape_22.setTransform(13.5, 201.8);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AghAoQgNgPAAgYIAAgCQAAgPAGgMQAFgMAMgHQAKgHANAAQAVAAANAPQANAPAAAYIAAACQAAAPgGAMQgFAMgMAHQgKAHgOAAQgUAAgNgPgAgYggQgLANAAATIAAACQAAATALAMQAJAMAPAAQAQAAAJgMQAKgMAAgUIAAgCQABgMgFgKQgEgKgJgFQgHgGgLAAQgPAAgJAMg'
      );
    this.shape_23.setTransform(4, 201.9);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f('#DDA53B').s().p('AgrBHIAAiNIBXAAIAAAKIhLAAIAAA3IBCAAIAAAJIhCAAIAABDg');
    this.shape_24.setTransform(-6.7, 200.1);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f('#DDA53B')
      .s()
      .p('AgmBJIAAgKIAHABQAIAAAFgFQAGgEADgKIAFgPIgnhnIAMAAIAgBXIAfhXIAMAAIgsB6IgCAGQgIATgTAAIgJgBg');
    this.shape_25.setTransform(-22.5, 204.1);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgeA7IgBAPIgLAAIAAiVIAMAAIAAA8QALgSAVABQATgBALAOQALAPAAAZIAAABQAAAZgLAOQgLAPgTAAQgVAAgLgRgAgSgRQgIAFgEALIAAAvQAJAUAVAAQAPAAAIgLQAIgMAAgXQAAgUgIgLQgIgLgPAAQgKAAgIAFg'
      );
    this.shape_26.setTransform(-32.5, 199.8);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgeA9QgLgOAAgZIAAgCQgBgYALgOQAMgOASAAQAVgBALASIAAg8IALAAIAACVIgLAAIAAgOQgLAQgVAAQgSAAgLgPgAgWgLQgHALgBAWQABAVAHALQAJAMAOAAQAVAAAJgTIAAgxQgJgVgVABQgOAAgJALg'
      );
    this.shape_27.setTransform(-48.9, 199.8);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgUAwQgKgHgHgLQgFgMAAgPIAAgDQgBgPAGgNQAGgMAKgHQALgHAMAAQASAAAMANQAMANgBAXIAAAGIhKAAIAAACQAAASAKAMQAKAMAPAAQAJAAAIgEQAHgDAFgIIAIAGQgNATgZAAQgMAAgLgHgAgUgiQgIAJgDARIA+AAIAAgCQAAgPgIgJQgIgKgNAAQgMAAgKAKg'
      );
    this.shape_28.setTransform(-59.3, 201.9);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgBA8QgGgHAAgNIAAhGIgTAAIAAgJIATAAIAAgbIALAAIAAAbIAWAAIAAAJIgWAAIAABGQAAAIADAFQADAEAIAAIAJgBIAAAKQgEABgIAAQgMAAgEgHg'
      );
    this.shape_29.setTransform(-68, 200.7);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f('#DDA53B')
      .s()
      .p('AgeAsQgJgKAAgTIAAhEIAMAAIAABCQAAAfAYAAQAZAAAGgVIAAhMIAMAAIAABpIgLAAIgBgOQgKAQgWAAQgRAAgJgKg');
    this.shape_30.setTransform(-76.4, 202);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgeA7IgBAPIgLAAIAAiVIAMAAIAAA8QALgSAVABQATgBALAOQALAPAAAZIAAABQAAAZgLAOQgLAPgTAAQgVAAgLgRgAgSgRQgIAFgEALIAAAvQAJAUAVAAQAPAAAIgLQAIgMAAgXQAAgUgIgLQgIgLgPAAQgKAAgIAFg'
      );
    this.shape_31.setTransform(-87.2, 199.8);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhpIALAAIAABpgAgFg6QgCgCAAgDQAAgDACgDQADgCACAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgCAAgDgCg');
    this.shape_32.setTransform(-95.1, 200);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f('#DDA53B').s().p('AgYA2IAAhpIAMAAIAAARQAJgTAUAAIAIABIgBALIgIgBQgLAAgGAHQgIAGgDALIAABIg');
    this.shape_33.setTransform(-100.1, 201.8);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgCA8QgFgHAAgNIAAhGIgUAAIAAgJIAUAAIAAgbIALAAIAAAbIAWAAIAAAJIgWAAIAABGQAAAIADAFQADAEAHAAIAKgBIABAKQgFABgIAAQgMAAgFgHg'
      );
    this.shape_34.setTransform(-107.5, 200.7);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgbAuQgMgJAAgOIAMAAQAAAKAJAGQAHAGAMAAQAMAAAIgGQAHgFAAgIQABgJgIgFQgGgFgPgDQgNgDgHgDQgIgEgEgGQgDgFgBgIQAAgNALgIQAKgIAPAAQASAAALAJQALAJgBAOIgLAAQAAgKgIgGQgIgGgMAAQgKAAgHAFQgHAFAAAJQAAAHAGAFQAGAEAOAEQAQADAHADQAIAFADAFQAEAGAAAIQAAAOgLAIQgKAIgSAAQgRAAgLgJg'
      );
    this.shape_35.setTransform(-115.6, 201.9);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhpIALAAIAABpgAgFg6QgCgCAAgDQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgDAAgCgCg');
    this.shape_36.setTransform(-122.8, 200);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgxBHIAAiNIAnAAQARAAAOAIQAOAIAHAOQAIAPAAATIAAANQAAATgIAOQgHAPgOAIQgOAIgRAAgAglA9IAbAAQAVAAAOgPQANgPAAgaIAAgLQAAgZgNgOQgNgPgVAAIgcAAg'
      );
    this.shape_37.setTransform(-131.3, 200.1);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f('#DDA53B')
      .s()
      .p('AgFAFQgCgCAAgDQAAgCACgDQACgCADAAQAEAAACACQACADAAACQAAADgCACQgCADgEAAQgDAAgCgDg');
    this.shape_38.setTransform(277.2, 177.1);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgUAwQgKgHgHgLQgFgMAAgPIAAgDQgBgPAGgNQAGgMALgHQAKgHAMAAQATAAALANQALANAAAXIAAAGIhKAAIAAACQAAASALAMQAKAMAOAAQAJAAAIgEQAHgDAFgIIAIAGQgNATgYAAQgNAAgLgHgAgUgiQgJAJgBARIA+AAIAAgCQgBgPgIgJQgIgKgNAAQgMAAgKAKg'
      );
    this.shape_39.setTransform(269.9, 172.5);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f('#DDA53B').s().p('AgFBLIAAiVIALAAIAACVg');
    this.shape_40.setTransform(262.5, 170.3);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgeA8IgBAOIgLAAIAAiVIAMAAIAAA7QALgQAVAAQATAAALANQALAPAAAZIAAABQAAAZgLAOQgLAPgTAAQgVAAgLgQgAgSgRQgIAFgEALIAAAvQAJAUAVAAQAPAAAIgMQAIgLAAgXQAAgUgIgLQgIgLgPAAQgKgBgIAGg'
      );
    this.shape_41.setTransform(254.9, 170.4);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhoIALAAIAABogAgFg6QgCgCAAgDQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgDAAgCgCg');
    this.shape_42.setTransform(247, 170.6);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgbAuQgMgJAAgOIAMAAQABAKAIAGQAHAGANAAQAMAAAHgGQAHgFABgIQAAgJgIgFQgGgFgOgDQgNgDgJgDQgHgEgEgGQgEgFABgIQAAgNAKgIQALgIAPAAQASAAAKAJQAKAJAAAOIgLAAQAAgKgIgGQgHgGgMAAQgLAAgHAFQgHAFAAAJQAAAHAGAFQAGAEAOAEQAQADAHADQAIAFAEAFQADAGAAAIQAAAOgKAIQgMAIgQAAQgSAAgLgJg'
      );
    this.shape_43.setTransform(239.6, 172.5);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgcAuQgLgJAAgOIALAAQACAKAHAGQAIAGANAAQAMAAAHgGQAIgFAAgIQgBgJgGgFQgIgFgNgDQgNgDgJgDQgHgEgEgGQgEgFAAgIQAAgNALgIQAKgIAQAAQARAAALAJQALAJAAAOIgMAAQAAgKgIgGQgIgGgLAAQgLAAgHAFQgHAFAAAJQAAAHAGAFQAFAEAPAEQAPADAIADQAIAFAEAFQADAGAAAIQAAAOgKAIQgMAIgQAAQgSAAgMgJg'
      );
    this.shape_44.setTransform(229.5, 172.5);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AghAoQgNgPAAgYIAAgCQAAgPAFgMQAHgMAKgHQALgHANAAQAVAAANAPQANAPAAAYIAAACQAAAPgGAMQgFAMgMAHQgKAHgOAAQgUAAgNgPgAgYggQgLANABATIAAACQgBATALAMQAJAMAPAAQAQAAAKgMQAJgMABgUIAAgCQAAgMgFgKQgFgKgHgFQgJgGgKAAQgPAAgJAMg'
      );
    this.shape_45.setTransform(218.9, 172.5);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgpBKIAAiRIAKAAIABAPQAMgRAUAAQATAAALAOQAKAPAAAZIAAABQAAAYgKAPQgLAOgSAAQgVAAgMgPIAAA2gAgSg6QgHAGgFAJIAAAyQAFAJAIAFQAHAEAKAAQAPAAAIgLQAIgMAAgWQAAgTgJgMQgHgMgPAAQgKAAgIAFg'
      );
    this.shape_46.setTransform(208, 174.4);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgcAuQgLgJAAgOIALAAQABAKAIAGQAIAGAMAAQAMAAAIgGQAIgFgBgIQAAgJgGgFQgIgFgOgDQgNgDgHgDQgIgEgEgGQgDgFgBgIQAAgNALgIQALgIAOAAQATAAAKAJQALAJAAAOIgMAAQAAgKgIgGQgIgGgMAAQgKAAgHAFQgHAFAAAJQAAAHAGAFQAGAEAOAEQAQADAHADQAIAFADAFQAEAGAAAIQAAAOgLAIQgKAIgSAAQgRAAgMgJg'
      );
    this.shape_47.setTransform(192.3, 172.5);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhoIALAAIAABogAgFg6QgCgCAAgDQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgDAAgCgCg');
    this.shape_48.setTransform(185.1, 170.6);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgcAuQgLgJAAgOIALAAQACAKAHAGQAIAGANAAQAMAAAHgGQAIgFAAgIQAAgJgHgFQgIgFgNgDQgNgDgJgDQgHgEgEgGQgDgFAAgIQgBgNALgIQAKgIAQAAQASAAAKAJQAKAJAAAOIgLAAQAAgKgIgGQgHgGgMAAQgLAAgHAFQgHAFAAAJQAAAHAGAFQAFAEAPAEQAPADAIADQAIAFAEAFQADAGAAAIQAAAOgKAIQgMAIgQAAQgSAAgMgJg'
      );
    this.shape_49.setTransform(172.9, 172.5);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgcAuQgLgJAAgOIALAAQACAKAHAGQAIAGANAAQALAAAIgGQAIgFAAgIQgBgJgGgFQgIgFgOgDQgMgDgJgDQgHgEgEgGQgEgFAAgIQAAgNALgIQALgIAOAAQATAAAKAJQALAJAAAOIgMAAQAAgKgIgGQgHgGgNAAQgKAAgHAFQgHAFAAAJQAAAHAGAFQAFAEAPAEQAPADAIADQAIAFADAFQAEAGAAAIQAAAOgKAIQgLAIgRAAQgSAAgMgJg'
      );
    this.shape_50.setTransform(162.8, 172.5);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AghAoQgNgPAAgYIAAgCQAAgPAGgMQAFgMAMgHQAKgHANAAQAVAAANAPQANAPAAAYIAAACQAAAPgGAMQgFAMgMAHQgKAHgOAAQgUAAgNgPgAgYggQgKANAAATIAAACQAAATAKAMQAJAMAPAAQAQAAAJgMQALgMAAgUIAAgCQAAgMgFgKQgFgKgHgFQgJgGgKAAQgPAAgJAMg'
      );
    this.shape_51.setTransform(152.2, 172.5);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f('#DDA53B').s().p('AgFBLIAAiVIALAAIAACVg');
    this.shape_52.setTransform(144.4, 170.3);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics.f('#DDA53B').s().p('AgFBLIAAiVIALAAIAACVg');
    this.shape_53.setTransform(135.1, 170.3);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AggAuQgJgIAAgNQAAgQAMgJQANgIAWAAIAVAAIAAgMQAAgLgHgGQgHgHgNAAQgLAAgIAGQgIAGAAAJIgMAAQAAgMAMgKQALgJARAAQARAAALAJQAKAJAAAQIAAAxQAAAPADAIIAAABIgMAAQgCgFgBgKQgGAIgJAEQgKAFgJAAQgQAAgJgJgAgUAHQgKAGAAALQAAAJAHAFQAGAGALAAQALAAAJgFQAJgGAEgJIAAgYIgVAAQgQABgKAGg'
      );
    this.shape_54.setTransform(127.4, 172.5);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgqBKIAAiRIALAAIABAPQAMgRAUAAQATAAALAOQALAPAAAZIAAABQAAAYgLAPQgLAOgTAAQgUAAgMgPIAAA2gAgSg6QgHAGgFAJIAAAyQAFAJAIAFQAHAEAKAAQAOAAAJgLQAIgMAAgWQAAgTgJgMQgHgMgPAAQgKAAgIAFg'
      );
    this.shape_55.setTransform(116.9, 174.4);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhoIALAAIAABogAgFg6QgCgCAAgDQAAgEACgCQADgCACAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgCAAgDgCg');
    this.shape_56.setTransform(108.9, 170.6);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgeAoQgMgOAAgZIAAgCQAAgQAGgMQAFgMAKgGQALgHAMAAQASAAALAKQALALABARIgMAAQAAgNgIgHQgJgIgMAAQgPAAgJAMQgIALAAAVIAAACQAAAUAIAMQAKALAOAAQAMAAAJgHQAIgHAAgLIAMAAQAAAKgGAIQgGAIgJAEQgJAFgLAAQgTAAgNgPg'
      );
    this.shape_57.setTransform(101.6, 172.5);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AAdA2IAAhFQgBgOgFgHQgGgHgNAAQgLAAgHAHQgJAHgEALIAABIIgMAAIAAhpIALAAIABASQAFgKAJgFQAKgFAJAAQARAAAIAKQAJAJAAATIAABFg'
      );
    this.shape_58.setTransform(90.9, 172.4);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhoIALAAIAABogAgFg6QgCgCAAgDQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgDAAgCgCg');
    this.shape_59.setTransform(83.2, 170.6);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics.f('#DDA53B').s().p('AgYA2IAAhpIAMAAIAAARQAJgTAUAAIAIABIgBALIgIgBQgLAAgGAHQgIAGgDALIAABIg');
    this.shape_60.setTransform(78.2, 172.4);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgvBHIAAiNIAvAAQAWAAANALQANAMAAATQAAAVgMAKQgNAKgXAAIgjAAIAAA6gAgjADIAjAAQASAAAJgIQAJgHAAgQQAAgPgJgIQgJgJgRAAIgkAAg'
      );
    this.shape_61.setTransform(68.6, 170.7);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f('#DDA53B')
      .s()
      .p('AgFAFQgCgCgBgDQABgCACgDQACgCADAAQAEAAACACQADADgBACQABADgDACQgCADgEAAQgDAAgCgDg');
    this.shape_62.setTransform(54.6, 177.1);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics.f('#DDA53B').s().p('AAbBLIgqg1IgNAMIAAApIgMAAIAAiVIAMAAIAABfIALgMIAogmIAOAAIgsArIAwA9g');
    this.shape_63.setTransform(48.2, 170.3);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgcAuQgLgJAAgOIALAAQABAKAIAGQAIAGAMAAQAMAAAIgGQAIgFgBgIQAAgJgGgFQgIgFgOgDQgNgDgHgDQgIgEgEgGQgDgFgBgIQAAgNALgIQALgIAOAAQATAAAKAJQALAJAAAOIgMAAQAAgKgIgGQgIgGgMAAQgKAAgHAFQgHAFAAAJQAAAHAGAFQAGAEAOAEQAQADAHADQAIAFADAFQAEAGAAAIQAAAOgLAIQgKAIgSAAQgRAAgMgJg'
      );
    this.shape_64.setTransform(37.5, 172.5);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhoIALAAIAABogAgFg6QgCgCAAgDQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgDAAgCgCg');
    this.shape_65.setTransform(30.3, 170.6);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics.f('#DDA53B').s().p('AgYA2IAAhpIAMAAIAAARQAJgTAUAAIAIABIgBALIgIgBQgLAAgGAHQgIAGgDALIAABIg');
    this.shape_66.setTransform(25.3, 172.4);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgbAuQgMgJAAgOIAMAAQAAAKAIAGQAIAGAMAAQAMAAAIgGQAIgFgBgIQAAgJgGgFQgIgFgOgDQgNgDgHgDQgIgEgEgGQgDgFgBgIQAAgNALgIQALgIAOAAQATAAAKAJQALAJAAAOIgMAAQAAgKgIgGQgIgGgMAAQgKAAgHAFQgHAFAAAJQAAAHAGAFQAGAEAOAEQAQADAHADQAIAFADAFQAEAGAAAIQAAAOgLAIQgKAIgSAAQgRAAgLgJg'
      );
    this.shape_67.setTransform(11.4, 172.5);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgUAwQgLgHgGgLQgFgMAAgPIAAgDQgBgPAGgNQAGgMAKgHQALgHAMAAQASAAAMANQALANAAAXIAAAGIhKAAIAAACQAAASAKAMQALAMAOAAQAJAAAIgEQAHgDAFgIIAIAGQgNATgYAAQgNAAgLgHgAgUgiQgIAJgDARIA/AAIAAgCQgBgPgIgJQgIgKgNAAQgMAAgKAKg'
      );
    this.shape_68.setTransform(1.4, 172.5);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics.f('#DDA53B').s().p('AgEA1IgnhpIALAAIAgBZIAghZIANAAIgoBpg');
    this.shape_69.setTransform(-8.7, 172.5);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics.f('#DDA53B').s().p('AgFBLIAAiVIALAAIAACVg');
    this.shape_70.setTransform(-15.7, 170.3);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AghAoQgNgPAAgYIAAgCQAAgPAFgMQAHgMAKgHQALgHANAAQAVAAANAPQANAPAAAYIAAACQAAAPgGAMQgGAMgKAHQgLAHgOAAQgUAAgNgPgAgZggQgKANABATIAAACQgBATAKAMQAKAMAPAAQAQAAAKgMQAJgMABgUIAAgCQgBgMgEgKQgFgKgHgFQgJgGgKAAQgPAAgKAMg'
      );
    this.shape_71.setTransform(-23.5, 172.5);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics.f('#DDA53B').s().p('AgDA1IgphpIANAAIAfBZIAhhZIALAAIgnBpg');
    this.shape_72.setTransform(-33.9, 172.5);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AAdA2IAAhFQgBgOgFgHQgHgHgMAAQgLAAgHAHQgJAHgEALIAABIIgMAAIAAhpIALAAIABASQAFgKAKgFQAJgFAJAAQARAAAJAKQAIAJAAATIAABFg'
      );
    this.shape_73.setTransform(-44.2, 172.4);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhoIALAAIAABogAgFg6QgCgCAAgDQAAgEACgCQADgCACAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgCAAgDgCg');
    this.shape_74.setTransform(-51.9, 170.6);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgTBGQgLgFgGgIIAHgHQANAPAQAAQAOAAAJgJQAHgIABgQIAAgNQgLAQgVAAQgSAAgLgPQgMgPAAgXIAAgCQAAgZAMgOQAKgPAUAAQAUAAALARIABgPIALAAIAABnQgBAUgKAMQgMAMgUAAQgJAAgKgFgAgVg0QgIALAAAXQAAATAIAMQAHAMAOAAQAWAAAJgUIAAgwQgEgKgIgFQgIgGgLAAQgNAAgIAMg'
      );
    this.shape_75.setTransform(-64.7, 174.5);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AAdA2IAAhFQgBgOgGgHQgFgHgOAAQgKAAgHAHQgJAHgEALIAABIIgMAAIAAhpIALAAIABASQAFgKAJgFQAKgFAJAAQARAAAIAKQAJAJAAATIAABFg'
      );
    this.shape_76.setTransform(-75.5, 172.4);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f('#DDA53B')
      .s()
      .p('AgFBIIAAhoIALAAIAABogAgFg6QgCgCAAgDQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgDAAgCgCg');
    this.shape_77.setTransform(-83.2, 170.6);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgCA8QgFgHAAgNIAAhGIgTAAIAAgJIATAAIAAgbIALAAIAAAbIAWAAIAAAJIgWAAIAABGQAAAIADAFQADAEAIAAIAJgBIABAKQgFABgIAAQgMAAgFgHg'
      );
    this.shape_78.setTransform(-88.9, 171.2);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgcAuQgLgJAAgOIALAAQACAKAHAGQAIAGAMAAQANAAAHgGQAIgFgBgIQAAgJgGgFQgIgFgOgDQgNgDgHgDQgIgEgEgGQgDgFgBgIQAAgNALgIQALgIAOAAQATAAAKAJQALAJAAAOIgMAAQAAgKgIgGQgIgGgMAAQgKAAgHAFQgHAFAAAJQAAAHAGAFQAFAEAPAEQAPADAIADQAIAFADAFQAEAGAAAIQAAAOgKAIQgLAIgSAAQgRAAgMgJg'
      );
    this.shape_79.setTransform(-96.9, 172.5);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AgUAwQgKgHgHgLQgFgMAAgPIAAgDQgBgPAGgNQAGgMAKgHQALgHAMAAQASAAAMANQAMANgBAXIAAAGIhKAAIAAACQAAASAKAMQAKAMAPAAQAJAAAIgEQAHgDAFgIIAIAGQgNATgZAAQgMAAgLgHgAgUgiQgIAJgDARIA+AAIAAgCQAAgPgIgJQgIgKgNAAQgMAAgKAKg'
      );
    this.shape_80.setTransform(-107, 172.5);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics.f('#DDA53B').s().p('AgEA1IgohpIAMAAIAgBZIAhhZIAMAAIgoBpg');
    this.shape_81.setTransform(-117, 172.5);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f('#DDA53B')
      .s()
      .p(
        'AAcA2IAAhFQAAgOgFgHQgHgHgNAAQgJAAgJAHQgIAHgEALIAABIIgMAAIAAhpIAMAAIAAASQAGgKAJgFQAIgFAKAAQARAAAJAKQAIAJAAATIAABFg'
      );
    this.shape_82.setTransform(-127.3, 172.4);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics.f('#DDA53B').s().p('AgFBHIAAiNIALAAIAACNg');
    this.shape_83.setTransform(-135.4, 170.7);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-140.1, 157.2, 997.3, 56.9);

  (lib.Tween28 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#DDA53B').ss(1, 1, 1).p('Ay5k6MAlzAAAIAAJ1MglzAAAg');

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('rgba(221,165,59,0.4)').s().p('Ay5E7IAAp1MAlzAAAIAAJ1g');

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-122, -32.5, 244.1, 65);

  (lib.Tween27 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(['#DDA53B', '#DDA53B', 'rgba(221,165,59,0)'], [0, 0.655, 1], -245.2, 0, 245.3, 0)
      .s()
      .p('EgtGAJiINkzDMBMpAAAItjTDg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-288.6, -61, 577.3, 122);

  (lib.Tween26 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AhsC3IAAltIDZAAIAAA+IiRAAIAABUIBxAAIAAA+IhxAAIAABfICRAAIAAA+g');
    this.shape.setTransform(34.2, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('ABHC3IAAidIiOAAIAACdIhKAAIAAltIBKAAIAACSICOAAIAAiSIBKAAIAAFtg');
    this.shape_1.setTransform(1.1, 0);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AgjC3IAAkvIhkAAIAAg+IEPAAIAAA+IhkAAIAAEvg');
    this.shape_2.setTransform(-31.4, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-45, -18.3, 90.2, 36.6);

  (lib.Tween25 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AgkC3IAAkvIhjAAIAAg+IEPAAIAAA+IhkAAIAAEvg');
    this.shape.setTransform(52.6, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AhEC6Ig8gjIAAhHIBIAAIAAAqIBvAAIAAhaIh2AAIg9ghIAAiVIA9gjICEAAIA8AjIAABFIhKAAIAAgpIhqAAIAABYIB4AAIA8AiIAACXIg8Ajg'
      );
    this.shape_1.setTransform(21.7, 0);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f('#FFFFFF')
      .s()
      .p('AA6C3IhNiJIguAAIAACJIhJAAIAAltIDGAAIA8AiIAACeIg8AkIBPCJgAhBgRIBvAAIAAhnIhvAAg');
    this.shape_2.setTransform(-10.4, 0);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('AgjC3IAAltIBHAAIAAFtg');
    this.shape_3.setTransform(-35.6, 0);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AhvC3IAAltIDfAAIAAA+IiVAAIAABUIB1AAIAAA+Ih1AAIAACdg');
    this.shape_4.setTransform(-54.9, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-66.1, -18.6, 132.3, 37.2);

  (lib.Tween24 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#DDA53B')
      .s()
      .p('AhzEhIheg2IAAnVIBeg2IDnAAIBeA2IAAB1IhyAAIAAhKIi/AAIAAF9IC/AAIAAhqIhfAAIAAhfIDRAAIAAD2IheA2g');
    this.shape.setTransform(25.2, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#DDA53B')
      .s()
      .p('AhmEfIhfg2IAAh1IBzAAIAABIIClAAIAAirIkGAAIAAkvIFwAAIAABhIj/AAIAABuICqAAIBeA2IAAECIheA2g');
    this.shape_1.setTransform(-26.4, 0.3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-46.2, -28.9, 92.5, 57.9);

  (lib.Tween23 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#DDA53B').s().p('AitEdIAAo5IFcAAIAABhIjpAAIAACDIC5AAIAABiIi5AAIAADzg');
    this.shape.setTransform(43.5, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#DDA53B').s().p('Ag3EdIAAnYIibAAIAAhhIGmAAIAABhIibAAIAAHYg');
    this.shape_1.setTransform(-1.9, 0);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#DDA53B').s().p('AiqEdIAAo5IFVAAIAABhIjiAAIAACDICxAAIAABiIixAAIAACSIDiAAIAABhg');
    this.shape_2.setTransform(-43.7, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-60.8, -28.4, 121.8, 57);

  (lib.Tween22 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#000000')
      .s()
      .p(
        'EgTFAtOQo0jvmymzQmzmyjuo0Qj3pHAAp/QAAp+D3pHQDuo0GzmyQGymzI0juQJHj3J+AAQJ+AAJID3QIzDuGzGzQGzGyDuI0QD3JHAAJ+QAAJ/j3JHQjuI0mzGyQmzGzozDvQpHD2p/AAQp+AApHj2g'
      );
    this.shape.setTransform(-1, 168);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-315, -146, 628, 628);

  (lib.Tween18 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.Doctor, null, new cjs.Matrix2D(1, 0, 0, 1, -55.1, -145.9))
      .s()
      .p(
        'AiyF0IgUgFIgKgFIgogFIgKgFIgUgFIgCgDIgNgFIgPgHIgPgIIgPgHIgKgIIgHgHIgFgIIgFgHIgDgIIgFgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIADgHIAFgIIACgHIAFgIIADgHIAFgIIAFgHIAHgIIADgHIAFgIIAMgHIAPgIIANgHIAHgIIAPgHIAKgIIAKgHIAPgIIAIgHIAHgIIADgHIAFgIIAAgBIAHgEQAagPARgeQAQgbA4gpQAZgSA1ghQATgNAbgkIAlgxIBfhuQAOgRAegTQAngMAagGQAbgFAAAOQAAAPABAEQABAFgVAGQgUAHA6AHQgwABAGAEIANAHIAHAIIAPAHIAPAIIAFAHIAFAIIAIAHIAFAIIACAHIAFAHIADAIIACAHIAFAIIADAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIgDAIIgFAHIgCAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIgFAIIgDAHIgCAIIAAAHIAAAIIAAAHIgDAIIgFAHIgCAIIAAAHIgDAHIgFAHIgCAIIAAAHIgDAIIgFAHIgCAIIgDAHIgFAIIgCAHIgFAIIgIAHIgPAIIgKAHIgHAIIgIAHIgPAIIgKAHIgHAIIgGAGIgDgOQgFgKgZAOQgVALgXATQgMALgeAWQgbAVgLAQQgMARgkASIg/AeQgdAQgQANQgPAMgTAXQgJAMgeAFIgPgHg'
      );
    this.shape.setTransform(0, -1);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-37.3, -38.8, 74.8, 75.8);

  (lib.Tween17 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.Doctor, null, new cjs.Matrix2D(1, 0, 0, 1, -22.4, -117.7))
      .s()
      .p(
        'AAeKZQhFAAgkgeQgRgNgLgXIgTgsQgIgSADgLQAFgTAAgFQAAgRgEgMQgCgIgJgWQgHgPAAgcIAAgxQAAiXADgtQADgegBhPQAAhJgCgOIAAglQgBgdgFgNQgFgLABgZQACghgCgNIgKiCQACgVgLAAQgJAAgNgHQgPgJAAgIQAAgQAegbQANgLADgHQAFgKgMgCQgMgDgFgFIgMgPQgMgQA/gJQA2gJAbACQARABABgHQAAgDgKgTQgLgXgegmQgTgZgHgSQgJgVALgFQAMgFAQAMQAQAMAhAnQAgAmAlBFQAlBBAMApQARA4gtB/QgKAdgFAxQgGA5AEA7QAFBKAVCXIAMBZQAHAjAMAFQAJADANgDIAEACIANAIIAHAHIAIAIIAHAHIAKAIIAKAHIADAIIAFAHIACAIIAFAHIADAIIAAAHIAAAIIAAAHIAAAIIACAHIADAIIgDAHIgCAIIAAAHIAAAIIAAAHIgDAIIgFAHIgCAIIAAAHIAAAIIAAAHIgFAIIgDAHIgCAIIAAAHQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABAAIATgHQARgHgUANQgTAMAMgEIAEgBIARgGQAggNgpAWIgDABQABABAAABQAAAAAAABQABAAAAAAQAAAAAAAAIABAAQAPgRgEAOQgEANgVAvQhQAFgHACIgJAEIgtAAg'
      );
    this.shape.setTransform(5, 51, 1, 1, 0, 0, 0, 5, 51);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-20.8, -66.5, 41.7, 133.1);

  (lib.Tween16 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(['rgba(16,22,35,0)', '#101623', '#101623'], [0, 0.482, 1], 971.5, 0.2, -970.5, 0.2)
      .s()
      .p('EiXtAu4MAAAhdvMEvbAAAMAAABdvg');
    this.shape.setTransform(283.2, 0);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-687.7, -300, 1942, 600);

  (lib.Tween15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('rgba(221,165,59,0.498)').s().p('Aj6GbIACs1IHzAAIAACEIlXAAIgBDIIEQAAIAACDIkQABIAAFlg');
    this.shape.setTransform(-85.3, 5.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('rgba(221,165,59,0.498)').s().p('AhNmZICbAAIAAMzIibAAg');
    this.shape_1.setTransform(-44.3, 5.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('rgba(221,165,59,0.498)').s().p('Al6mZICdAAIDfJ8IDdp8ICdAAIkiMyIivAAg');
    this.shape_2.setTransform(8.6, 5.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f('rgba(221,165,59,0.498)')
      .s()
      .p('AkpFSIgCqjICGhMIFIAAICFBMIABChIiaAAIgBhqIkdAAIABI0IEeAAIAAikIiIAAIAAiCIEigBIACFdIiFBOIlKAAg');
    this.shape_3.setTransform(82.5, 5.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-110.4, -35.9, 222.8, 82.9);

  (lib.Tween14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p('AmJmjICzAAIDYJoIDVpnIAuAAIAHgBIB+AAIkpNGIi9AAgAhVGZICvAAIEisyIidAAIjdJ8Ijfp8IieAAg');
    this.shape.setTransform(9.1, 5.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AkzFXIgCqtICNhRIFPAAICLBRIACCwIivAAIgBhqIkJAAIACIgIEJAAIAAiQIiHAAIAAiWIE1gBIACFtIiMBSIlPAAgAkqlRIABKjICGBMIFKAAICFhOIgCldIkiABIAACCICIAAIAACkIkdAAIgCo0IEdAAIABBqICaAAIgBihIiEhMIlJAAg'
      );
    this.shape_1.setTransform(82.9, 5.3);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AhXmjICvAAIAANHIivAAgAhNGaICbAAIAAszIibAAg');
    this.shape_2.setTransform(-43.8, 5.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p('AkCmkIIHAAIAACYIlXAAIgBC0IERAAIAACYIkRAAIAAFlIixAAgAj6GbICdAAIAAllIEQAAIAAiEIkQAAIABjIIFXAAIAAiEInzAAg');
    this.shape_3.setTransform(-84.8, 5.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-110.9, -37.1, 224.8, 84.9);

  (lib.Tween12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AgNAGIgMgLIAzAAIAAALg');
    this.shape.setTransform(-8.9, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AgjAkIAAhHIBGAAIAAANIg5AAIAAAtIA5AAIAAANg');
    this.shape_1.setTransform(-9.4, 0);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AgNAGIgMgLIAzAAIAAALg');
    this.shape_2.setTransform(9.9, 0);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('AgjAkIAAhHIBHAAIAAANIg6AAIAAA6g');
    this.shape_3.setTransform(9.4, 0);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAbQgGAAgFgFQgFgFABgHIAAgBIALAAIAAABQAAAFAEAAIAVAAQAEAAAAgFQAAgEgEAAIgVAAQgHAAgFgGQgDgEAAgFQgBgHAFgFQAFgFAGAAIAVAAQAGAAAEAFQAFAFABAHIAAABIgMAAIAAgBQAAgFgEAAIgVAAQgEAAAAAFQAAAEAEAAIAVAAQAGAAAFAFQAFAEAAAGQgBAHgFAFQgEAFgGAAg'
      );
    this.shape_4.setTransform(17.1, 0.9);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AgFAkIAAg6IgeAAIAAgNIBHAAIAAANIgeAAIAAA6g');

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-12.9, -3.5, 32.7, 7.2);

  (lib.Tween11 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AgNAGIgMgLIAzAAIAAALg');
    this.shape.setTransform(-8.8, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AgjAkIAAhHIBHAAIAAANIg6AAIAAAtIA6AAIAAANg');
    this.shape_1.setTransform(-9.4, 0);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AgNAGIgMgLIAzAAIAAALg');
    this.shape_2.setTransform(9.9, 0);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('AgjAkIAAhHIBHAAIAAANIg6AAIAAA6g');
    this.shape_3.setTransform(9.4, 0);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AgFAkIAAg6IgeAAIAAgNIBHAAIAAANIgeAAIAAA6g');

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-12.9, -3.5, 26, 7.2);

  (lib.Tween10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AgECcIAAk3IAJAAIAAE3g');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.5, -15.5, 1.1, 31.1);

  (lib.Tween9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AgECcIAAk3IAJAAIAAE3g');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.5, -15.5, 1.1, 31.1);

  (lib.Tween8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p('Ag3CdIg0geIAAg/IA/AAIAAAoIBaAAIAAheIiQAAIAAimIDKAAIAAA2IiLAAIAAA8IBcAAIAzAdIAACMIgzAeg');
    this.shape.setTransform(-13, 0.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#FFFFFF')
      .s()
      .p('Ag+CeIgzgeIAAj/IAzgeIB9AAIA0AeIAAA/Ig/AAIAAgoIhnAAIAADRIBnAAIAAg6IgzAAIAAg0IByAAIAACFIg0Aeg');
    this.shape_1.setTransform(12.4, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-23.8, -15.7, 47.7, 31.6);

  (lib.Tween7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AgeCcIAAk3IA9AAIAAE3g');
    this.shape.setTransform(-12.5, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'Ag5CeIg0geIAAg7IA+AAIAAAkIBfAAIAAhNIhlAAIgzgdIAAh+IAzgeIBwAAIAzAeIAAA7Ig+AAIAAgkIhaAAIAABLIBlAAIAzAdIAACAIgzAeg'
      );
    this.shape_1.setTransform(4.7, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-15.6, -15.7, 31.4, 31.6);

  (lib.Tween6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p('AAxCcIhBh2IgnAAIAAB2Ig+AAIAAk3ICnAAIA0AeIAACGIg0AdIBEB2gAg3gOIBeAAIAAhXIheAAg');
    this.shape.setTransform(56.6, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AhcCcIAAk3IC5AAIAAA2Ih7AAIAABHIBgAAIAAA0IhgAAIAABQIB7AAIAAA2g');
    this.shape_1.setTransform(33.6, 0);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AgeCcIAAkBIhUAAIAAg2IDlAAIAAA2IhTAAIAAEBg');
    this.shape_2.setTransform(11.8, 0);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'Ag6CeIgzgeIAAg7IA+AAIAAAkIBfAAIAAhNIhlAAIg0gdIAAh+IA0geIBwAAIAzAeIAAA7Ig+AAIAAgkIhaAAIAABLIBlAAIAzAdIAACAIgzAeg'
      );
    this.shape_3.setTransform(-11.7, 0);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AheCcIAAk3IC+AAIAAA2IiBAAIAABHIBmAAIAAA0IhmAAIAACGg');
    this.shape_4.setTransform(-58.8, 0);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('ABSCcIgYhEIhzAAIgYBEIg9AAIBvk3IA/AAIBwE3gAAnAjIgmhvIgBAAIgmBvIBNAAg');
    this.shape_5.setTransform(-37.1, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-68.3, -15.7, 136.7, 31.6);

  (lib.Tween5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#DDA53B').s().p('AylAKIAAgTMAlLAAAIAAATg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-119, -1, 238, 2);

  (lib.Tween4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#DDA53B').s().p('AylAKIAAgTMAlLAAAIAAATg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-119, -1, 238, 2);

  (lib.Tween3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#DDA53B').s().p('AylAKIAAgTMAlLAAAIAAATg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-119, -1, 238, 2);

  (lib.Tween1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Town();
    this.instance.parent = this;
    this.instance.setTransform(-485, -125);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-485, -125, 970, 250);

  (lib.Symbol48 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(['#FFFFFF', 'rgba(255,255,255,0)'], [0, 1], 0, 0, 0, 0, 0, 50.7)
      .s()
      .p('AlgFhQiTiSAAjPQAAjOCTiSQCSiTDOAAQDPAACSCTQCTCSAADOQAADPiTCSQiSCTjPAAQjOAAiSiTg');
    this.shape.setTransform(50, 50);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0, 0, 100, 100), null);

  (lib.Symbol45 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#FFFFFF').ss(1, 1, 1).p('Ay5k6MAlzAAAIAAJ1MglzAAAg');
    this.shape.setTransform(121, 31.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(-1, -1, 244.1, 65), null);

  (lib.Symbol43 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(['rgba(9,15,29,0)', '#090F1D'], [0, 0.718], 0.1, -90.6, 0.1, 90.4)
      .s()
      .p('A3bOJIAA8RMAu3AAAIAAcRg');
    this.shape.setTransform(0, 209.5);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(247).to({ _off: false }, 0).to({ _off: true }, 196).wait(457)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol30 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(['#EAF4F4', 'rgba(75,255,255,0)'], [0.078, 1], 0, 0, 0, 0, 0, 16.7)
      .s()
      .p('AhyBzQgwgvAAhEQAAhDAwgvQAvgwBDAAQBEAAAvAwQAwAvgBBDQABBEgwAvQgvAwhEgBQhDABgvgwg');
    this.shape.setTransform(16.3, 16.3);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0, 0, 32.5, 32.5), null);

  (lib.Symbol26 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(['rgba(255,255,255,0)', '#FFFFFF', 'rgba(255,255,255,0)'], [0, 0.655, 1], -55.5, 0, 55.5, 0)
      .s()
      .p('AoqGBIAAsBIRVAAIAAMBg');
    this.shape.setTransform(55.5, 38.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0, 0, 111, 77), null);

  (lib.Symbol24 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      'AicJLIAEgxIAHhWIAFg/IAHhTIAFg7IAFhCIAAgEIgbgTIgEABIgEAAIgBgDIgBgEIgVgTIgWgUQgegdgUghQgJgNgFgMQgGgOgDgNIgCgNQAAgHABgHQADgSAQgLQANgIAPgDIAOgBIANgCIADAAIADAAQACgEgBgDIgDgFQgGgGgHgEIgNgIIhGgnIhGgmIgEgDQgFgDgBgCQAAgCAFgFIAHgJIgHgEIgKAKIgGAFQgBABgGgDIi7hKQgCgBgCgDIAKgNIAAAAIgCABIgBABIgJAJQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBABIgFAAIh5ggIgagHIgDAAIgCgBQgEgBAAgCQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAABgBIAIgKIApgsIAFgGImFjOQACgCADABIADACIBEAkIE7CnIADgDIADgDIAUgUIATgVQADgDAEgBQADgBADABICXAfIAFABQACACABADIgKALIABABIACgBIABgBIAFgEIADgEQACgDADgBQADgBADACIAZAJIAZAJICIAwQAGACABADQAAACgFAEIgGAHIABABIAAAAIAGAFIALgNIADgDIAFACIAgARICFBGIAIAEIAAgRIAAgPIgBggIAAg/IgBggIgBheIAAggIgBggIAAgPIAAgPIACgBIABADIAAADIAEFSIAAAGIAjASIgCgLQgDgLAAgIQAAgIADgKIAPAAIAQABIACgFIAAgFIAAgFIAAgFQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAFgBIAAAAIABgBIgBgDIgBgCIgKgVIgCgDQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgBgBIgBgCIgEgIQgGAAgDgBQgFgDgBgGIACgEIAEgEIACgCIACAAIAIgBIAIAAIABAEIACADQABAEgDAEIAEAEIAFAEIA1AlIADACIgEgHQgEgLAFgKQAGgKALgBQAGgBAGAEQAGAEACAGIAFAIIAIADQAGgEACgIIAKgeQACgHAAgEQAAgGgEgFIAAgCIABgDIAFAIIACAEQACACgBADIACACIACACIAEAFQACADgCADQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgFQgDADgDAKQgEAKgBAIIAMAAQABgDACgBQAEgBADABIACAAIACgBQAFgBAEABQAFABADADIACABIACAAIABgBIABgCIAAgFIABgEQAEgNAMAGIACABQAGADABAEQABADgCAGIAHgEIAFgEIgCgGIANgOIAAgBIABAAIAJgBIAJAAIAFADIADAGIgIAKIACAEQACAFgFAEIgIAGIgFADIgGAEIACADIADAGQAAADgCACQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBABIgDADIgBAEIgDAJIAGAMIAFAEIACgFIARABIARABIADACIAEADIACgFIALAAIALAAIAMACIALABIAAADIAAACIAAAEIACADQACAEgBAFQAAADgDAFIgBAEIgDAEIgFAAIgDAFIgYAAIABAJIAEAJIAFAHIAGAFQADADAGAAIAJACIgCABIAAAAIgWgBQgMgBgIgFIgPgGIgNgGIgIgDIAAAGQgBAEAFACIAPAHIAnARIAGADIAHABQAFAAACAHIAGgHIAQABIAFADIAEAFIgJAOIgYAAIgDgCIgEgDIgDgDIgBgEIhdgLIAAAGIAAADQAAAQgHAJQgJAKgSACIgDABIgEAAQgBAFABAJIgBANQgJAEgKABQgKABgLgCIADAHIgFAGIgCADIgGABIgKAAIgFAIIABABIAAABIA4AhIADABIAEABIACABIACABQAEAEAGADIANAFIAxhEID7CBQAHADABACQAAACgEAGIgHAKIAKAFIAIgLQADgFABAAQACgBAFACIEOBtQAHADACACQAAACgEAHIgHAJIAAABIgBABIAMAFIAIgMQAEgGACAAQABAAAGADIEZCjIAAAGIAAABIgBAAIhdCrIgCADIgCAEIgEgCIgDgCIi3huIhjg8IgEgCQgCgCAAgDIAKgTIgKgHIgPAVIgGgCIizhQIgtgUIgtgTIgIgEIgEgEIADgEIADgGIAGgIIgJgHIgHALIgEAGIgDACIgDAAIgIgEIjziGQgGgDAAgCQgBgCAFgFIAthAIACgDIACgEIgTgIIgHgEIgDgCIgCgCIgYgLIgEgCIgFgCIgEgCIgJgEIgIgFIgEgCIgDgBIAAAEIgBADIgBAJQAAAEADAEQADAEAAAGIgCAaIgBAFIgCADIgQAYQgDAEgGADIgHAEIgIAEIAFAHQARAaAJAUIAGARQADAJABAJQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQACADAAAEIgBAHIgCAFIAAAFQgEAMgGAKQgLAOgPACQgPADgPAAQgMAAgLgDIgZgGQgmgMgpgYIgEgCQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAABIgYEmIgGBBIgDAwgALRElIANAFIAKgPIAIgPIgLgHgAGqChIgBADIAJAFIATgdIgIgFgAgkjEIgBABIgnAwIgCADIgBADQgBAFADAEIAGAGQAFAEAEgBQAFAAAEgHIACgDIADgEIgDgGIAFgCIADgCQAFgCADgFIAHgLQAAgDAAgJIAAgEIAAgEQgBgEgBgDQgCgCgEgCgADXifQAFACAeAFQAdAFADgBQgPgIgVgIQgUgIgFAAgAgZi0IABAJIAKgMIgEgFIgGAAIgBAIgAlFkEQgIAJgCAEIAGAFIAVgYIgFgFQgEACgIAJgAA2kCIAHAAIACAHQADgCAAgBIAEgHIgmgKIACAEIACAEQACADADABQADABADAAIADAAIAEAAgAAGkPIAGAGIAFAEQADACADAAQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIACgBIACgDIADAAIAAgBQgKgMgFgDQgEgCgMgBQABAEADADgAgHkFIAMABQgCgGgDgDQgCgEgFgBgAA/kXIADAGQACAEAEACIAAgGQABgEgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEABgAA2kXIAIAFQgBgEgCgBIgFgBgABTkiQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABIADAFIAFgIIgFABgABSkmIAFAAIAEgBIgHgEgADCk2IgGAFIAMAAIACgHIgCAAQgDAAgDACgAoWlKIgDADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIALgNIgBgBIgGAHg'
    );
    mask.setTransform(108.5, 58.6);

    // Satellite.jpg
    this.instance = new lib.Satellite();
    this.instance.parent = this;

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 217, 117.3);

  (lib.Symbol22 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Stars();
    this.instance.parent = this;
    this.instance.setTransform(-300, 0);

    this.instance_1 = new lib.Stars();
    this.instance_1.parent = this;
    this.instance_1.setTransform(300, 0);

    this.instance_2 = new lib.Stars();
    this.instance_2.parent = this;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-300, 0, 900, 313), null);

  (lib.Symbol20 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#2876B2')
      .s()
      .p(
        'EgTFAtOQo0jvmymzQmzmyjuo0Qj3pHAAp/QAAp+D3pHQDuo0GzmyQGymzI0juQJHj3J+AAQJ+AAJID3QIzDuGzGzQGzGyDuI0QD3JHAAJ+QAAJ/j3JHQjuI0mzGyQmzGzozDvQpHD2p/AAQp+AApHj2g'
      );
    this.shape.setTransform(173.1, 320.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-140.9, 6.6, 628, 628), null);

  (lib.Symbol15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.BG2();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0, 0, 300, 500), null);

  (lib.Symbol7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(['#DDA53B', 'rgba(221,165,59,0)'], [0, 1], 0, 0, 0, 0, 0, 28)
      .s()
      .p('AjCDDQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABRBQQBQBRAABxQAAByhQBRQhRBQhyAAQhxAAhRhQg');
    this.shape.setTransform(27.5, 27.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0, 0, 55, 55), null);

  (lib.Symbol6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p('AmJmjICzAAIDYJoIDVpnIAuAAIAHgBIB+AAIkpNGIi9AAgAhVGZICvAAIEisyIidAAIjdJ8Ijfp8IieAAg');
    this.shape.setTransform(120, 80.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AkzFXIgCqtICNhRIFPAAICLBRIACCwIivAAIgBhqIkJAAIACIgIEJAAIAAiQIiHAAIAAiWIE1gBIACFtIiMBSIlPAAgAkqlRIABKjICGBMIFKAAICFhOIgCldIkiABIAACCICIAAIAACkIkdAAIgCo0IEdAAIABBqICaAAIgBihIiEhMIlJAAg'
      );
    this.shape_1.setTransform(193.9, 80);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AhXmjICvAAIAANHIivAAgAhNGaICbAAIAAszIibAAg');
    this.shape_2.setTransform(67.1, 80.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p('AkCmkIIHAAIAACYIlXAAIgBC0IERAAIAACYIkRAAIAAFlIixAAgAj6GbICdAAIAAllIEQAAIAAiEIkQAAIABjIIFXAAIAAiEInzAAg');
    this.shape_3.setTransform(26.1, 80.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0, 37.6, 224.8, 84.9), null);

  (lib.Symbol5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'Al1GjIinABIAAqGIkSABIAACJICDgBIAAgBIAGABIAFAAIAAABIBcAQIAACDIhnAEIAAAAIiDAAIgBEtIiDA3IAAACIgEAAIgGACIAAgCIinAAIACtKIH+AAIAAgEIAGAEIAEAAIAAAEIA9AuIAAgyICxAAIAAAFIAvA+IAALLIgvA2IAAAEIgDAAIgHAIgAxZGbICdAAIAAlmIERAAIAAiEIiDABIAAAAIgKAAIAAAAIgrAAIAGAAIhfAAIABi/IgBgBIAAgIIABAAIAAgCIAHACIFRAAIAAiFIn0AAgAoSGaICdgBIAAs0IidAAgAuyGYIB5gzIABkmIh6AAgAlrGRIAlgsIAArEIglgxgAqgA1IBSgEIAAhxIhSgOgAuyhYIB6AAIAAiKIh5gogAsxjrIEQAAIg+ghIk3AAgApZkUIA9AgIAAhyIg9gvgAGuEpIgCpNIBNg0IAAgBIAEgCIAGgFIAAABICChLIFQAAICMBRIABCwIgEAAIiiAdIiOAAIgGABIAAhcIiAAAIACHRIB/AAIAAhtIh0gNIgBiCIB5gHIAAAAIE1gBIACFuIiLBRIlRABgAIElTIABKiICHBNIFJgBICFhOIgCldIkhABIAACDICIgBIAAClIgGgBIkZABIgBo1IEXAAIAHgCIABBsICaAAIgBigIiFhNIlKAAgAG2kfIACJCIBDAnIgCqWgAKqD0IAAAaIDngBIhjgZgAO1EMIAAiPIh+ABIAAAAIgEAAIAABtICCAhgAK+gJIABBwIBuAMIAAiCgANeiWIBcAAIBpgTIhqAAgAMyjpIAABSICCgbIgBhegAKojxICEAAIBrghIjvAAgAk9mlICzAAIDMJEICzoCIAug+IABgDIAuAAIAGAAIB+AAIkpNGIi8AAgAgJGYICvgBIEisxIidAAIjdJ7Ijfp8IidAAgAD+leIi3INIAHATIDJpEg'
      );
    this.shape.setTransform(112.4, 79.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 37.1, 224.8, 85.4);

  (lib.Symbol2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Cloud();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0, 0, 174, 185), null);

  (lib.Group_9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('rgba(0,255,253,0.498)')
      .s()
      .p(
        'AGmKZIgBgBIjvjKIgCgCIgBgCIBAhUIAJgQQAbgsASgtQAmhcAGhfQAHhjgchSQgchWg+g7Qg9g6hQgSQhKgShNAPQhIAOhAAkQg4Aeg1AvQhTBLg5BqQgpBLgTBVQgLArgFBAIgDAmQgDAAgCgmQgBg7AKgzQAPhYAohQQA4hvBVhQQA1gzA8ghQBEgnBMgQQBXgTBPATQBbAVBFA/QBFBAAhBgQAeBZgFBrQgGBngoBiQgUAxgcAuIgKASIgnA1IgBACIACABICvCUIADgDIA/hPIAXgiIAWgjQAshMAdhKQAVg1AShIQANg1AIhMQAGg4gEhGQgDg+gOg+QgQg+gXg2QgYg1glgyQhEhchrg3QhlgzhvgEQhmgFhnAgIgwAQQggAMgOAHQgnAQgvAcQhSAyhBA7Qh1BshQCJQg7BnglBzQgWBJgMBLIgJA0QgDAAADg1QAEhDAWhVQAgh3A7hqQBNiPB4hyQCYiPC5g6QBvgjBsAEQB4ADBtA3QB0A6BLBlQAqA4AYA3QAbA6AQBCQAeB/gNCKQgMCHgzCDQggBSgsBKIgXAlIgYAjIhiB4g'
      );
    this.shape.setTransform(71.9, 64.3);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0.8, -2.3, 142.2, 133.2), null);

  (lib.ClipGroup_13 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AhXCbIAAk1ICuAAIAAE1g');
    mask.setTransform(8.8, 15.5);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#00DEFD')
      .s()
      .p(
        'AA/CZIAAgSIANACIAAgTIALABIAAAYIgKgBIAAANgAApCXIAAgSIAOABIABATgAAUCUIAAgSIAOACIAAASgAAACSIAAgSIANABIAAASgAgUCPIAAgSIAOACIAAASgAgoCNIAAgSIAOACIAAARgAg7CKIAAgRIAMABIAAASgAhUCHIAAgdIAKABIAAAMIAIABIAAARgABMBpIgBgYIALABIABAYgAhUBeIAAgXIAJABIAAAYgABLBEIAAgYIALABIAAAYgAhVA8IAAgXIAKABIAAAXgABLAfIAAgYIALABIAAAYgAhVAZIAAgXIAJABIABAXgABLgFIgBgYIALAAIAAAZgAhVgIIgBgXIAKAAIAAAXgABKgpIAAgZIALAAIAAAZgAhWgrIAAgXIAKAAIAAAYgAhWhOIAAgXIAJABIAAAXgABKhOIAAgZIAKAAIABAZgAhXhwIAAgXIAKAAIAAAXgABKhzIAAgUIgOgBIgBgSIAPAAIAAAOIAKAAIAAAZgAAmiIIAAgSIAPAAIAAASgAASiIIAAgSIANAAIAAASgAgCiIIAAgSIANAAIAAASgAgXiJIAAgRIAOAAIAAASgAgqiJIAAgRIANAAIAAARgAg+iJIAAgRIANAAIAAARgAhRiJIAAgRIAMAAIAAARg'
      );
    this.shape.setTransform(8.8, 15.5);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0, 0, 17.5, 31.1), null);

  (lib.ClipGroup_12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AknG4IAAtvIJPAAIAANvg');
    mask.setTransform(29.6, 44);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#00DEFD').s().p('AknBYIB5mbIElh0ICxGAIioHRIklAeg');
    this.shape.setTransform(29.6, 44);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0, 0, 59.2, 87.9), null);

  (lib.ClipGroup_11 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AifEJIAAoRIE/AAIAAIRg');
    mask.setTransform(16, 26.5);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#00DEFD').s().p('AhXDTIhIj6IBEjhIClAWIBWENIhTDugAiCgnIBCDkIB8ApIBHjLIhPjzIh7gRg');
    this.shape.setTransform(16, 26.5);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0, 0, 32, 53), null);

  (lib.ClipGroup_10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AlmI8IAAx3ILNAAIAAR3g');
    mask.setTransform(35.9, 57.2);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#00DEFD').s().p('AjQHZIiWn5ICLnoIFfgzIDjJKIjWItgAjSntIiFHOICPHfIFNBZIDHoMIjSomg');
    this.shape.setTransform(35.9, 57.2);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0, 0, 71.8, 114.5), null);

  (lib.ClipGroup_9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AiWDSIAAmjIEtAAIAAGjg');
    mask.setTransform(15.1, 21);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#00DEFD').s().p('AhOCiIhIjLIBEioICVAdIBUDYIhQCug');
    this.shape.setTransform(15.1, 21);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0, 0, 30.2, 42), null);

  (lib.ClipGroup_8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AjaFsIAArXIG1AAIAALXg');
    mask.setTransform(21.9, 36.4);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#00DEFD').s().p('Ah4FeIhilEIBblSIDagzICAFiIgBABIh3F0gAh5kxIhZFLIBgE8IDPAOIB1ltIh9lYg');
    this.shape.setTransform(21.9, 36.4);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0, 0, 43.8, 72.7), null);

  (lib.ClipGroup_7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AkyG1IAAtpIJlAAIAANpg');
    mask.setTransform(30.7, 43.7);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#00DEFD')
      .s()
      .p(
        'AByAiIAAgUIASADIAAAWgABYAdIgBgVIASAEIAAAVgAA9AXIAAgUIASADIAAAVgAAkARIAAgTIARADIAAAUgAAKAMIAAgTIARAEIAAASgAgOAGIAAgSIAQADIAAATgAglABIgBgTIARAEIAAATgAg+gDIAAgTIAQACIABAUgAhVgJIAAgTIAPADIAAAUgAhsgNIAAgTIAPADIABATgAiDgTIAAgTIAPAEIAAATg'
      );
    this.shape.setTransform(28.4, 83.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#00DEFD').s().p('AgCALIgFgQIAIgHIADAGIAEABIAAASg');
    this.shape_1.setTransform(13.7, 79.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f('#00DEFD')
      .s()
      .p(
        'AAuCbIAJgHIAIAWIgKAIgAAiB5IAKgHIAIAWIgKAIgAAXBYIAKgIIAHAXIgJAHgAAMA3IAKgIIAHAWIgJAIgAABAWIAKgIIAHAWIgJAIgAgJgKIAJgHIAHAUIgIAIgAgTgqIAJgIIAHAWIgJAIgAgehKIAJgIIAHAVIgJAIgAgphqIAJgIIAHAVIgJAIgAgziJIAJgJIAHAWIgJAIgAg+ipIAJgIIAHAVIgJAIg'
      );
    this.shape_2.setTransform(7.1, 60.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#00DEFD').s().p('AgGAAIAEgOIAJAKIgCAEIACAHIgIAIg');
    this.shape_3.setTransform(0.7, 40.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f('#00DEFD')
      .s()
      .p(
        'Ag6ChIAGgUIAJAJIgGAUgAgxCDIAHgUIAJAKIgGATgAgnBlIAHgUIAJAKIgGAUgAgdBHIAHgVIAJAJIgGAVgAgTAoIAHgUIAJAJIgGAUgAgJAKIAHgVIAJAKIgHAUgAABgVIAGgUIAKAJIgHAUgAALg0IAHgVIAJAJIgHAVgAAVhUIAHgVIAKAJIgHAVgAAghzIAHgWIAJAJIgHAWgAAqiUIAHgVIAKAJIgHAVg'
      );
    this.shape_4.setTransform(6.7, 22.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#00DEFD').s().p('AgHAEIAFgPIAKgBIAAASIgEAAIgCAHg');
    this.shape_5.setTransform(12.8, 3.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f('#00DEFD')
      .s()
      .p(
        'AiDABIAPgBIABATIgPABgAhsAAIAPgBIABASIgQABgAhVgCIAQgBIAAASIgQABgAg+gEIAQgBIABATIgQABgAgmgGIAQgBIABATIgRABgAgNgHIAPgCIAAATIgPABgAAKgJIARgCIAAAUIgRABgAAjgLIARgCIABAUIgRABgAA9gNIARgCIAAAUIgRABgABXgPIASgCIAAAUIgSABgABxgRIASgCIABAUIgSABg'
      );
    this.shape_6.setTransform(27.5, 2.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#00DEFD').s().p('AgEAIIgFAAIAAgUIAMgBIAHAQIgLALg');
    this.shape_7.setTransform(42.6, 1.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f('#00DEFD')
      .s()
      .p(
        'AA+CvIAOgLIAKAZIgNALgAAvCJIANgLIAKAZIgNALgAAfBjIAOgLIAKAaIgNAKgAAQA+IANgLIAKAZIgNAKgAABAZIANgLIAKAZIgNALgAgNgLIANgKIAJAXIgMALgAgbgvIAMgKIAKAYIgNALgAgqhTIANgKIAJAYIgMALgAg4h2IAMgLIAKAYIgNALgAhHiZIANgMIAJAYIgMAMgAhVi8IAMgLIAKAXIgNALg'
      );
    this.shape_8.setTransform(51.5, 22.9);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#00DEFD').s().p('AgKAHIADgHIgDgHIANgKIAIARIgIASg');
    this.shape_9.setTransform(60.3, 45);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f('#00DEFD')
      .s()
      .p(
        'AhRCwIAJgVIAMANIgJAWgAhECQIAJgWIANANIgJAWgAg2BvIAJgXIANANIgJAXgAgoBNIAJgWIANANIgJAWgAgaArIAJgWIANANIgJAWgAgMAJIAJgVIAMAMIgJAWgAABgYIAJgXIANANIgJAXgAAPg7IAKgXIANANIgKAXgAAdheIAKgXIAOAMIgKAYgAAsiBIAKgYIANAMIgKAYgAA7ilIAKgYIANAMIgKAYg'
      );
    this.shape_10.setTransform(51.9, 65.8);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#00DEFD').s().p('AgJAMIAAgVIAFACIADgGIALAMIgHAPg');
    this.shape_11.setTransform(43.5, 86);

    var maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
    ];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0, 0, 61.4, 87.4), null);

  (lib.ClipGroup_6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AjAEPIAAodIGBAAIAAIdg');
    mask.setTransform(19.3, 27.1);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#00DEFD').s().p('AhnDwIhZkCIBUj3IC/gFIBuEVIhoEIg');
    this.shape.setTransform(19.3, 27.1);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0, 0, 38.6, 54.3), null);

  (lib.ClipGroup_5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AnEIXIAAwtIOJAAIAAQtg');
    mask.setTransform(45.3, 53.5);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#00DEFD').s().p('AkHH+Ii9nFIC0nkIG/hrIEWH/IkKIugAj+mXIisHQIC0GuIGhAXID/oUIkInkg');
    this.shape.setTransform(45.3, 53.5);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0, 0, 90.5, 107), null);

  (lib.ClipGroup_4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AlCFmIAArLIKFAAIAALLg');
    mask.setTransform(32.3, 35.8);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#00DEFD')
      .s()
      .p(
        'AhGFmQgFAAgDgEQgDgEAAgGQABgGAEgEQAEgEAGAAIADAAQAGAAADAEQADAEgBAGQgBANgLABgAgrFhQgDgDAAgGQAAgGAEgFQAEgEAFgBIAEAAQAFgBAEAEQAEADgBAGQAAAGgDAFQgEAEgFABIgBAAIgEABIgBAAQgFAAgDgEgAhmFkIgDgBQgFAAgDgFQgCgFABgFQABgGAFgEQAEgDAFAAIAEABQAFABACAEQADAFgBAFQgDALgJACgAgGFcQgEgDgBgGQAAgGADgFQAEgFAEgBIAEgBQAFgBAFADQAEADAAAGQABAFgDAGQgEAFgFABIgFABIgBAAIgBAAQgEAAgCgCgAiHFdIgEgBQgEgCgCgFQgCgFACgFQACgGAEgDQAFgDAEACIAEABQAEABACAFQADAFgCAFQgCAJgJACgAAdFSQgEgDgBgFQgBgGADgFQADgGAGgCIADgBQAGgCAFADQAEACABAGQABAFgDAGQgDAFgFACIgHADIgCAAQgDAAgDgCgAinFRIgDgBQgEgCgCgFQgBgGACgFQACgFAFgDQAFgCAEACIADABQAFACABAFQACAGgCAFQgDAHgIACIgGgBgAA8E8QgCgFADgGQACgGAGgDIADgCQAGgCAFACQAFABACAGQACAFgDAGQgCAGgGADIgIADIgCAAQgJAAgCgIgAjEFCIgDgCQgEgCgBgGQgBgFADgFQADgGAEgBQAFgCAEACIADACQAEADABAFQABAGgDAFQgDAGgGABIgCAAQgCAAgDgBgAjfEvIgDgDQgDgDAAgFQgBgGADgFQAEgEAEgBQAFgCAEADIACADQAEADAAAFQABAGgDAFQgEAFgFABIgCAAQgDAAgDgCgABfEqQgCgGACgGQACgGAFgDIAEgCQAFgEAFABQAGACACAFQADAFgCAGQgCAGgFADIgEADIgGACIgCAAQgHAAgEgGgAj3EYIgCgDQgEgDABgGQAAgGADgEQAEgEAFgBQAEAAAEADIACADQADADAAAGQAAAFgDAFQgEAEgEABIgCAAQgEAAgDgDgACCETQgDgFABgGQABgGAFgEIAEgDQAFgEAFAAQAGAAADAFQADAFgBAGQgBAHgFAEIgEADQgEADgDAAIgDAAQgGAAgDgFgAkMD+IgCgDQgDgEABgGQABgFAEgEQAEgEAEAAQAFAAADAEIACADQACAEAAAFQgBAGgEAEQgCADgEABIgCAAQgFAAgDgEgACiD4QgDgFABgGQAAgGAFgFIADgDQAFgFAGAAQAGAAADAEQAEAEgBAHQAAAGgFAFIgEADQgDAEgFABIgDAAQgFAAgEgEgAkeDhIgBgDQgCgFABgFQABgGAEgDQAEgEAFABQAEABACAEIACADQADAEgCAGQgBAGgEADQgDADgDAAIgCAAQgFAAgDgFgADBDZQgEgEAAgGQAAgGAEgGIADgDQAEgFAGgBQAGgBAFADQAEAEAAAGQAAAHgEAFIgEADQgDAFgHABIgDABQgEAAgDgDgAksDCIgBgEQgCgFACgFQABgGAFgDQAEgDAEACQAEABACAFIACADQACAFgCAFQgCAGgEADIgFACIgDAAQgFAAgCgGgADdC2QgFgDAAgGQgBgGAEgGIACgEQAEgFAGgCQAGgCAFADQAFADABAGQAAAHgDAFIgDAEQgEAHgIABIgCAAQgEAAgDgCgAk3CgIgBgEQgBgFACgFQACgFAFgDQAEgCAEACQAEABACAFIAAAEQACAFgCAFQgDAGgEACIgDABIgDABQgGAAgCgIgAD2CRQgFgDgCgFQgBgGADgGIADgFQADgGAGgCQAGgDAFADQAFACACAGQABAGgDAGIgDAEQgEAIgIACIgDAAIgFgBgAk+B9IgBgEQAAgGACgFQADgFAEgCQAFgCAEADQAEADAAAFIABADQABAGgDAFQgDAFgEACIgCAAIgDAAQgHAAgBgIgAELBpQgFgCgCgFQgCgGACgGIACgFQADgGAGgDQAGgEAFACQAFACADAFQACAGgDAGIgCAFQgEAKgJABIgDABIgEgBgAk/BgQgDgDAAgFIAAgEQgBgGAEgFQADgEAEgCQAFgBADADQAEADAAAFIAAAEQAAAGgDAEQgDAFgEACIgBAAIgCAAQgDAAgDgCgAEdA/QgGgBgDgFQgDgFACgHIACgEQACgHAFgEQAGgDAGAAQAGABACAFQADAFgCAHIgBAFQgDALgLACgAk/A7QgEgEABgFIAAgEQAAgGAEgEQADgFAFAAQAEgBADADQAEAEgBAFIAAAEQAAAFgDAFQgEAEgEABIgBAAIgCAAQgDAAgCgCgAk9AVQgCgEAAgGIABgEQABgFADgEQAEgEAFAAQAEAAADAEQADADgBAFIgBAEQgBAMgKACIgCAAIgBAAQgEAAgCgDgAEgAPQgDgEABgHIABgEQABgGAGgFQAFgEAGAAQAGAAAEAEQADAFgBAGIgBAFQgDAMgMADIgDAAQgHAAgDgFgAk3gQQgCgFABgFIABgFQABgFAFgEQAEgEAEABQAFAAACAFQACAEgBAGIgBAEQgDAKgIACIgDAAQgFAAgCgEgAEogaQgEgEABgGIAAgFQABgHAEgFQAFgFAGgBQAHAAAEAEQAEAEgBAGIAAAFQgBAGgEAFQgFAFgFABIgCABIgCAAQgFAAgDgEgAkngxQgEgBgCgFQgCgFACgFIABgEQACgGAEgDQAFgDAEABQAEABACAFQACAEgCAGIgBAEQgDAIgIADIgCAAIgCAAgAkbhWQgEgCgBgFQgBgFACgFIACgEQACgGAFgDQAEgCAEABQAEACACAFQABAFgDAGIgBAEQgDAHgHACIgCAAIgEAAgAkLh6QgEgCgBgGQAAgFACgFIADgFQACgFAFgCQAFgCAEACQAEADAAAFQABAFgDAFIgCAEQgEAHgFABIgDABIgEgBgAj4idQgEgDAAgGQAAgFADgFIADgEQADgFAFgCQAFgBADACQAEADAAAGQAAAFgDAFIgDAEQgDAFgFACIgDAAIgFgBgAjii/QgDgDAAgGQABgGADgFIADgDQAEgFAEgBQAFgBADAEQAEADgBAGQAAAFgEAFIgDAEQgCADgFACIgDABQgEAAgCgDgAjJjeQgDgEABgGQABgGAEgEIADgEQAEgEAFgBQAFAAACAEQADAEgBAGQgBAGgEAEIgDADQgEAEgDABIgDAAQgEAAgCgDgAiuj8QgCgEABgGQACgGAEgEIADgDQAFgEAEAAQAFABADAEQACAFgCAGQgBAGgFAEIgDACIgFAEIgEAAQgFAAgCgFgAiQkWQgCgFACgFQACgGAEgEIAEgDQAFgDAFABQAEABACAFQACAFgCAGQgCAFgFAEIgIAFIgEAAQgFAAgCgGgAhxktQgBgFACgGQADgGAFgDIAEgCQAFgDAEABQAFACABAFQABAGgCAFQgDAGgFADIgHAEIgEABQgGAAgCgIgAhLk5QgEgDAAgFQgBgFADgGQADgGAFgCIAEgCQAGgCAEACQAEACAAAGQABAGgDAFQgDAGgGACIgDACIgCABIgDAAQgDAAgCgBgAgplHQgEgDAAgGQAAgGAEgGQADgFAGgCIAEgBQAFgCAEADQAEADAAAGQAAAGgEAFQgEAGgFABIgEACIgEAAQgDAAgCgBg'
      );
    this.shape.setTransform(32.3, 35.8);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0, 0, 64.7, 71.6), null);

  (lib.ClipGroup_3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AuRPxIAA/hIciAAIAAfhg');
    mask.setTransform(91.4, 100.9);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#00DEFD')
      .s()
      .p(
        'AjGJIIAjgFIAZGsIgDABIg1ABgAi+JPIAEGaQAVAAATgBIgYmcgAjuPwQgWgBgZgDIgFgBIAmmhIAjAAIgSGmgAj0JSIglGSIAnAEIARmWgAiOI/IAjgJIBHGsIgEABIgzAIIgEAAgAiGJFIAuGdIArgGIhEmcgAlLPlQgSgDgagHIgEgBIBNmUIAdADIAEAAIg6GdgAlyPUQAXAGANACIA4mLIgSgCgAhXIvIADgBQAQgFAMgGIAEgBIB4GlIgDACQgcAJgZAFIgFABgAhNI0IBaGbIAtgNIhzmWgAmiPPQgUgGgVgJIgDgBIBvmEIAEABQAMAEALACIAFABIhfGNgAnFO6QARAHARAFIBal9IgQgEgAgfIYIADgBIAfgRICsGZIgEACIg1AVIgFACgAgWIcICNGSIAtgTIilmKgAocObICPlxIAaALIAFABIiBF7gAoROXIAeAPIB6lrIgPgGgAo8OHIgigXIgDgCICrlaIAXAOIAEABIieFmgApXNrIAbATICXlXIgOgIgAAWH6IAjgWIDgGEIgDACIg2AdIgDACgAAhH9IC/GBIAvgZIjal2gAqeM8IgCgDIDDlBIAWARIADACIi3FPgAqWM4IAZAVICvk/IgNgKgABMHVIADgCIAdgYIEWFoIgDACQgZATgcARIgCADgABXHXIDyFqIAuggIkMlbgAq6MfQgNgNgPgRIgCgDIDZkmIADADIARARIACACIjOE1gArNL+IAVAYIDFknIgMgLgACAGpIACgDIAbgbIADADIFIFBIgEADQgWAUgcAXIgDADgACLGpIElFMIAsgmIk/k5gAsJK+IDrkLIARAXIADACIjiEZgAr+K+IASAaIDXkMIgKgMgACwF3IAZgeIABgDIF8EYIgCADIgvAyIgDADgAC6F2IFXElIAqgsIlvkOgAscKeQgMgVgIgPIgBgDID5jsIAPAZIACACIjzD8gAsnJ5IAPAcIDmjwIgIgNgAtCJVQgHgOgJgYIgBgCIEGjOIAMAbIABADIkADdgAtJIvIAMAeIDzjSIgGgPgADbFAIAZglIGqDmIgCADQgcAmgPASIgCADgADmE9IGGD4IAmgyImcjdgAttHgIgBgCIEQitIAKAfIkLC9gAtkHhIAKAgID9i0IgFgQgAECEDIATgjIABgEIHVCsIgDAEQgMAXgZAnIgBACgAEND/IGyDDQARgaAPgcInEimQgHAOgHALgAt3G4IgJgqIgBgDIEXiLIAGAeIACADIkUCcgAt4GQIAHAhIEGiUIgFgRgAuHFkIgFgrIgBgDIEchpIAEAiIkaB6gAuEE8IAEAiIEKh0IgCgSgAEjDDIABgEIAPghIABgDIH4BrIgDAFQgNAfgSAjIgBADgAEuC+IHXCIQAOgbANgfInohogAuRDfIEehGIABAiIkdBYgAuIDlIAAAjIEOhSIgBgTgAE9CAIACgEQAFgRAFgSIABgDIITAoIgBAFQgKAfgOAmIgBADgAFIB6IH2BIQAMggAJgdIoDgmgAFRA8IAAgFIAHgjIABgDIImgeIAAAFQgJAqgHAbIgBADgAFgAZIgFAbIINAEIAOg8gAFggwIAAgEIIwhlIAAAFQgDAngEAfIAAADIotBCgAFngtIgCAbIIchAQAFghABgcgAFgh1IgBgDIIwiqIAAAFIACA+IAAAJIowCIgAFnhyIACAaIIgiEIgBg8gAFYi3IgBgDIIljsIABAFQAGAcAFAlIABADIosDMgAFgi1IAEAZIIcjGIgKg5gAFRjWQgEgPgFgQIgBgDIIRkpIACAFQAJAZAKAjIABADIodELgAFQj0IAHAXIIOkEQgFgUgMgggAEvkxIH1lfIACAEQAQAdAMAZIABADIoEFFgAE5kuQAEAIAFANIH3k9QgJgUgOgbgAEjlIIgRgaIgBgCIHQmOIADADQAVAbAOAUIACADInlF4gAEbljIAMATIHXluIgegpgADsmSIGnmzIADADQARAPAXAYIADADIm9GigAD3mRIAOAQIGxmXQgUgVgPgNgADCm4IF4nPIACABQAbARATAPIAEADImRHDgADNm5IAQAOIGFm3QgUgPgSgMgACvnFIgYgPIgDgCIFFnjIADABQAXAKAaANIAEACIlgHcgACenZIASALIFVnOIgqgUgABmnrIgFgCIESnuIACABQAZAGAbAJIAFABIksHrgABtnxIASAIIEjncIgsgNgAjTuMIAOgHIACGuIgMAEgAiculIACgBIA5gWIgrHGIgDABIghAJgAiUugIgTGpIAUgFIApm0IgqAQgAAsn8IDdnxIACABQAYACAeAFIAFABIj4HxgAA4oBIATAFIDvniIgtgGgAg2vKIADgBIAzgOIAGgBIhbHaIgCAAQgPACgNADIgGABgAgvvEIhAHAIATgDIBZnIQgWAEgWAHgAAWn/IgagDIgGgBICnnsIADAAIA2gBIAGAAIjDHxgACjvnIiiHdIATACIC8ngIgMAAIghABgAhBoCIBznhIA+gJIiNHpIgDAAIgbABgAA5vcIhwHRIAUAAICJnYg'
      );
    this.shape.setTransform(91.4, 100.9);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0, 0, 182.7, 201.8), null);

  (lib.ClipGroup_2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('Ai4ETIAAolIFxAAIAAIlg');
    mask.setTransform(18.5, 27.5);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#00DEFD')
      .s()
      .p(
        'AgpETQgHAAABgLQACgKAHAAIACAAQACAAACADQADADgBAFQgCAJgFABgAgZEQQgCgDAAgEQAAgFACgDQACgEAEAAIACgBQAHgBAAALQAAAKgHACIgDAAIgBABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBgAg7ERIgCAAQgHgCACgKQACgLAHABIACABQAHABgCALQgBAIgGABgAgHEFQgBgKAIgDIABAAQADgBADACQADADgBAEQACALgJACIgCABIAAAAIAAAAQgHAAAAgJgAhRELQgFgDACgLQABgEADgCQADgCACABIACABQADABABADQABAEgBAFQgBAGgFACgAAQEFQgCgCgBgEQgBgLAHgDIACgBQADgCADACQADACAAAFQABAEgCAEQgCAEgDACIgCABIgCAAIgBABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAhhECIgBgBQgGgEADgKQADgJAHADIABABQADACAAAEQABAEgBAEQgCAGgEABIgBAAIgDgBgAAiD1QgCgLAGgEIADgCQAHgEADAKQAAAEgBAEQgCAEgDACIgCACIgCABIgCAAQgEAAgBgGgAhyD2IgBgCQgGgEAEgKQACgEADgBQADgBACACIABABQADACABAEQAAAFgCADQgBAFgEABIgBAAIgEgBgAA2DnQgDgKAGgFIADgCQADgDADABQADABABAEQABAEAAAFQgCAEgDADIgCACIgDABIgCAAQgEAAgBgFgAiBDnIgCgCQgEgGAEgJQACgDADgBQADgBACACIACACQAFAGgFAJQgCADgDABIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgABJDWQgDgIAGgIIACgCQAHgHAEAJQACADgBAFQgBAFgCADIgDACIgEACIgBAAQgEAAgCgEgAiPDVIgBgDQgEgGAEgIQACgEAEAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAIABACQAFAIgFAHIgEAEIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAgABcDCQgFgIAGgIIADgCQACgEADAAQAEAAACADQAFAIgHAIIgCADIgEADIgCAAQgDAAgCgDgAiaDAIgCgCQgDgIAFgHQAFgHAFAHIAAADQAFAHgGAHIgEADIgBAAQgDAAgBgDgABtCrQgFgHAFgJIACgCQADgEADgBQAEgBACADQACADAAAFQAAAFgCADIgCADQgCAEgDAAIgDABQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBgAikCpIgBgCQgCgEABgEQAAgEADgDQADgCACAAQADABABADIABADQAEAHgGAHIgEACIgBAAQgDAAgBgEgAitCRIAAgDQgDgJAGgGQAGgEADAIIAAADQAEAJgHAFIgDABIgBABQgDAAgCgFgAB9CSQgCgCAAgFQAAgFACgEIABgDQACgEAEgBQADgCACADQAHAFgGALIgBADQgDAFgDAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAizB2IgBgDQgBgKAHgEQAAAAABAAQAAgBABAAQABAAAAABQABAAAAAAQADACAAAEIABACQACAKgGAEIgCABIgBAAQgFAAgBgGgACMB2QgEgCAAgEQgBgFACgEIABgDQAFgKAHADQACACABAFQABAEgBAFIgCADQgDAGgEABIgCAAIgCgBgAi2BaIgBgDQgBgKAHgDQACgBADACQACACAAAEIAAADQABAKgGADIgBAAIgCABQgEAAAAgIgACYBZQgDgCgCgEQgBgEACgFIABgDQABgFAEgCQADgCADABQAIACgEAMIgBAEQgDAHgFABIgCAAIgBAAgAi2BEQgCgCAAgEIAAgNQAAgLAGgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACACAAAFIAAALQAAAKgHADIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAChA6QgCgBgCgEQgCgEABgFIACgDQAAgFAEgDQADgDADABQAIABgDAMIgBAEQgCAIgGACgAi1AeQgCgDAAgEIAAgEQABgKAGgBQAIgBgCALIAAADQgBAKgGABIgBAAIAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAgACjANIAAgDQABgFADgDQADgDADABQAEAAACACQACAEgBAFIAAADQgCAKgHABIgCABQgIgBACgMgAi0gGIABgEQACgKAGAAQAGABgBAKIgBADQgBAIgFABIgBABQgHgBABgJgACpgIQgCgDAAgFIAAgEQAAgFADgDQADgEAEgBQADAAACADQACADAAAFIgBAEQgBAKgGACIgCAAIgBAAQgDAAgBgCgAiqgYQgDgBgBgEQgBgDABgEIABgEQACgKAHACQACABABADQABAEgBAEIgBADQgBAHgFACgACqgoQgCgCAAgFIAAgEQAAgEACgEQADgFAEgBQADgBACADQADACAAAFIAAAEQAAAFgDAEQgCAEgDABIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAijg1QgHgCADgLIACgDQADgLAGAEQAFACgCALIgBADQgCAFgFACIgBABIgBgBgACnhNIAAgDQgCgLAJgFQADgBADACQADACAAAFIAAADQACAMgJADIAAABIgCAAQgGAAgBgIgAibhRQgGgEAFgKIABgDQABgEADgCQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQADACAAAEQABAEgCAEIgBADQgCAFgEABIgCABIgCgBgACjhqIAAgDQgBgEACgFQACgEADgDQAEgCADACQACABABAEIABAEQACALgJAFIgCAAIgCABQgFAAgBgHgAiQhsQgFgFAEgKIABgCQAFgKAFAFQAFAFgFAKIgBACQgCAFgDABIgCAAIgCgBgACdiFIgBgDQgBgEABgFQACgFADgCQADgDAEABQADABABAEIABADQADAKgIAGIgDACIgDAAQgDAAgCgFgAiEiGQgCgDAAgEQABgEABgEIACgDQAFgIAFAFQAEAGgEAJIgCADQgCAEgDAAIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAgACVieIgCgDQgBgEABgEQABgFADgDQADgEAEABQADAAABAEIABADQACAEgBAEQgBAFgDADIgEADIgCAAQgEAAgBgEgAh2ifQgEgHAGgIIABgCQADgEADAAQADAAABADQAFAGgHAJIgBACQgCADgCABIgCAAQgCAAgCgDgACKi1IgCgCQgEgIAHgJQAGgIAGAHIABADQAEAHgGAKIgFADIgCABQgDAAgCgEgAhmi1QgEgIAGgHIACgDQACgDAEAAQADAAABAEQADAJgGAGIgBACIgEADIgCAAQgDAAgBgDgAhWjJQgDgKAIgGIABgCQAGgGAEAIQADAJgHAHIgFAEIgBAAQgEAAgCgEgAB9jJIgBgCQgCgCAAgFQAAgFADgEQACgEAEgBQADgBACADIACACQACADAAAFQgBAFgDAEQgCAEgCAAIgDABQgCAAgCgDgAhDjbQgDgJAHgGIADgCQACgDADACQADABAAAEQADAJgHAGIgCACIgCABIgCAAQgEAAgBgFgABujaIgBgBQgGgFAFgLQADgEADgCQADgBADACIACACQAGAGgGAKQgDAEgDACIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgwjrQgBgEACgEQACgEADgCIACgCQADgCACACQADACAAAEQACAKgHAFIgCABIgCABIgCAAQgEAAgBgHgABfjnIgDgBQgGgFAFgLQACgEADgCQADgCADACIACABQAHAEgFAMQgDAFgEABIgCABIgCgBgAgajwQgCgCAAgFQgBgKAIgEIACgBQADgBACACQADACAAAFQAAAKgHAEIgCABIgCAAIgEgBgABNjxIgCgBQgHgEAEgLQACgEADgDQAEgCACABIACABQAHAEgEALQgDAGgEACIgCAAIgCAAgAgGj5QgCgCAAgFQABgLAHgCIABgBQAIgBAAAKQgCALgGACIgBABIgBAAIgBABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBgAA7j4IgCgBQgDAAgBgEQgBgEABgFQADgLAHABIACABQADABACAEQAAADgBAFQgBAHgGADgAANj+QgBgDAAgEQABgFACgEQACgDADgBIADAAQADAAACADQACADgBAFQgBAJgHACIgDABIgBAAQgCAAgCgDgAAlj8QgDAAgBgDQgBgEABgEQAAgFADgDQADgEADABIACAAQAIAAgCAMQgCAIgGACIgDABg'
      );
    this.shape.setTransform(18.5, 27.5);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0, 0, 37, 55.1), null);

  (lib.ClipGroup_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AjYFxIAArhIGwAAIAALhg');
    mask.setTransform(21.7, 36.9);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#00DEFD').s().p('Ah2EgIhildIBbkzIDWATIB/GDIh3FLg');
    this.shape.setTransform(21.7, 36.9);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0, 0, 43.3, 73.8), null);

  (lib.LearnMore = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AIQBJQgSgTAAgdIAAgEQAAgTAHgPQAIgPAOgJQAOgIASAAQAbgBAQASQAPAQAAAfIAAAOIhTAAQABANAJAIQAIAIAOAAQAUAAALgPIARATQgHALgOAHQgNAGgRAAQgdAAgSgRgAIqgKQgGAHgCAMIAxAAIAAgCQAAgMgHgFQgGgHgLAAQgKAAgHAHgAEmBIQgQgTAAgfIAAgCQAAgTAHgOQAIgPAOgJQAOgIATAAQAagBARARQARAQACAcIAAAIQAAAegRATQgRASgcAAQgdAAgRgSgAFAgHQgHAJAAAVQAAASAHALQAHAJANABQANAAAHgKQAHgKAAgWQAAgSgHgJQgHgKgNAAQgNAAgHAKgAlhBPQgNgMAAgQQAAgVAQgMQAPgLAdAAIARAAIAAgHQAAgJgFgFQgFgGgKABQgJAAgFADQgFAFAAAHIgjAAQAAgLAHgKQAHgKANgFQANgGAQABQAYAAAPAMQAOAMAAAVIAAA5QAAATAFAJIAAADIgjAAQgDgFgBgHQgNAOgUAAQgTAAgNgLgAlLAuIAAACQAAAHAFAEQAEAEAJAAQAHAAAHgDQAGgDAEgGIAAgXIgOAAQgaAAgCASgAniBJQgSgTAAgdIAAgEQAAgTAHgPQAIgPAOgJQAOgIASAAQAbgBAQASQAPAQAAAfIAAAOIhTAAQABANAJAIQAIAIAOAAQAUAAALgPIARATQgHALgOAHQgNAGgRAAQgdAAgSgRgAnIgKQgGAHgCAMIAxAAIAAgCQAAgMgHgFQgGgHgLAAQgKAAgHAHgAGoBYIAAiDIAhAAIABAQQALgTASABQAGgBAFACIAAAiIgNgBQgUAAgGAMIAABXgADZBYIADiEIgwCEIgYAAIgwiEIADCEIgkAAIAAixIAvAAIAuCAIAtiAIAwAAIAACxgAg7BYIAAhVQAAgKgEgFQgFgFgMAAQgOAAgIAMIAABdIgjAAIAAiDIAhAAIABAPQAPgRAXAAQAVAAAKAMQAKAMABAXIAABWgAjjBYIAAiDIAhAAIABAQQALgTASABQAGgBAFACIAAAiIgNgBQgUAAgGAMIAABXgAp0BYIAAixIAkAAIAACTIBOAAIAAAeg'
      );
    this.shape.setTransform(58.9, 10.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.LearnMore, new cjs.Rectangle(-4, 1.8, 125.9, 18), null);

  (lib.Tween8copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p('Ag3CdIg0geIAAg/IA/AAIAAAoIBaAAIAAheIiQAAIAAimIDKAAIAAA2IiLAAIAAA8IBcAAIAzAdIAACMIgzAeg');
    this.shape.setTransform(-13, 0.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#FFFFFF')
      .s()
      .p('Ag+CeIgzgeIAAj/IAzgeIB9AAIA0AeIAAA/Ig/AAIAAgoIhnAAIAADRIBnAAIAAg6IgzAAIAAg0IByAAIAACFIg0Aeg');
    this.shape_1.setTransform(12.4, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-23.8, -15.7, 47.7, 31.6);

  (lib.Tween8_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f('#FFFFFF')
      .s()
      .p('Ag3CdIg0geIAAg/IA/AAIAAAoIBaAAIAAheIiQAAIAAimIDKAAIAAA2IiLAAIAAA8IBcAAIAzAdIAACMIgzAeg');
    this.shape_2.setTransform(-13, 0.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p('Ag+CeIgzgeIAAj/IAzgeIB9AAIA0AeIAAA/Ig/AAIAAgoIhnAAIAADRIBnAAIAAg6IgzAAIAAg0IByAAIAACFIg0Aeg');
    this.shape_3.setTransform(12.4, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-23.8, -15.7, 47.7, 31.6);

  (lib.Tween7copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AgeCcIAAk3IA9AAIAAE3g');
    this.shape.setTransform(-12.5, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'Ag5CeIg0geIAAg7IA+AAIAAAkIBfAAIAAhNIhlAAIgzgdIAAh+IAzgeIBwAAIAzAeIAAA7Ig+AAIAAgkIhaAAIAABLIBlAAIAzAdIAACAIgzAeg'
      );
    this.shape_1.setTransform(4.7, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-15.6, -15.7, 31.4, 31.6);

  (lib.Tween7_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AgeCcIAAk3IA9AAIAAE3g');
    this.shape_2.setTransform(-12.5, 0);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'Ag5CeIg0geIAAg7IA+AAIAAAkIBfAAIAAhNIhlAAIgzgdIAAh+IAzgeIBwAAIAzAeIAAA7Ig+AAIAAgkIhaAAIAABLIBlAAIAzAdIAACAIgzAeg'
      );
    this.shape_3.setTransform(4.7, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-15.6, -15.7, 31.4, 31.6);

  (lib.Tween6copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AEXCcIAAk3IC6AAIAAA2Ih8AAIAABHIBhAAIAAA0IhhAAIAABQIB8AAIAAA2gAC/CcIhDh2IgnAAIAAB2Ig+AAIAAk3ICpAAIAzAeIAACGIgzAdIBDB2gABVgOIBgAAIAAhXIhgAAgAi1CcIAAk3IC5AAIAAA2Ih7AAIAABHIBhAAIAAA0IhhAAIAABQIB7AAIAAA2gAkYCcIAAiGIh6AAIAACGIg+AAIAAk3IA+AAIAAB9IB6AAIAAh9IA+AAIAAE3g'
      );
    this.shape.setTransform(0, 0.3);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-46.5, -15.2, 93, 31.2);

  (lib.Tween6_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AtICeIgzgeIAAg7IA+AAIAAAkIBgAAIAAhNIhmAAIg0gdIAAh+IA0geIBwAAIA0AeIAAA7Ig+AAIAAgjIhcAAIAABKIBmAAIA0AdIAACAIg0AegAM4CcIhDh2IgnAAIAAB2Ig+AAIAAk3ICpAAIAzAeIAACGIgzAdIBDB2gALOgOIBgAAIAAhXIhgAAgAHECcIAAk3IC6AAIAAA2Ih8AAIAABHIBhAAIAAA0IhhAAIAABQIB8AAIAAA2gAEnCcIAAkBIhUAAIAAg2IDnAAIAAA2IhUAAIAAEBgACWCcIhDh2IgnAAIAAB2Ig9AAIAAk3ICoAAIAzAeIAACGIgzAdIBDB2gAAsgOIBgAAIAAhXIhgAAgAhUCcIgXhDIh1AAIgXBDIg+AAIBwk3IBAAAIBvE3gAh+AjIgnhvIgBAAIgnBvIBPAAgAl1CcIAAjNIgBAAIhGDNIg7AAIhHjPIgBAAIAADPIg8AAIAAk3IBTAAIBODkIABAAIBOjkIBSAAIAAE3g'
      );
    this.shape_6.setTransform(0, 0.3);

    this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-89.2, -33.9, 200.2, 68.9);

  (lib.Tween5copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#DDA53B').s().p('AylAKIAAgTMAlLAAAIAAATg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-119, -1, 238, 2);

  (lib.Tween5_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#DDA53B').s().p('AylAKIAAgTMAlLAAAIAAATg');

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-119, -1, 238, 2);

  (lib.Tween4copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#DDA53B').s().p('AylAKIAAgTMAlLAAAIAAATg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-119, -1, 238, 2);

  (lib.Tween4_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#DDA53B').s().p('AylAKIAAgTMAlLAAAIAAATg');

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-119, -1, 238, 2);

  (lib.Tween3copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#DDA53B').s().p('AylAKIAAgTMAlLAAAIAAATg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-119, -1, 238, 2);

  (lib.Tween3_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#DDA53B').s().p('AylAKIAAgTMAlLAAAIAAATg');

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-119, -1, 238, 2);

  (lib.Symbol7_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .rf(['#DDA53B', 'rgba(221,165,59,0)'], [0, 1], 0, 0, 0, 0, 0, 28)
      .s()
      .p('AjCDDQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABRBQQBQBRAABxQAAByhQBRQhRBQhyAAQhxAAhRhQg');
    this.shape_1.setTransform(27.5, 27.5);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol7_1, new cjs.Rectangle(0, 0, 55, 55), null);

  (lib.Symbol1copy11 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgiBVQgUAAgPgPQgPgOAAgVIAAhGQAAgTAPgPQAPgOAUAAIBGAAQAUAAAOAOQAOAPAAATIAAAOIgbAAIAAgOQAAgIgGgHQgGgGgJAAIhGAAQgKAAgGAGQgHAHAAAIIAABGQAAAKAHAGQAGAHAKAAIBGAAQAJAAAGgHQAGgGAAgKIAAgNIAbAAIAAANQAAAVgOAOQgOAPgUAAg'
      );
    this.shape.setTransform(8.5, 8.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 16.9, 16.9);

  (lib.Symbol1copy10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AggANIgbgZIB3AAIAAAZg');
    this.shape.setTransform(9.8, 8.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AhTBVIAAioICoAAIAAAbIiOAAIAAByICOAAIAAAbg');
    this.shape_1.setTransform(8.5, 8.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 16.9, 16.9);

  (lib.Symbol1copy8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('ABHBVIgRgkIg3AAIgbgbIBFAAIgphTIhGCSIgcAAIBRioIAjAAIBRCog');
    this.shape.setTransform(9.9, 8.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 19.9, 16.9);

  (lib.Symbol1copy7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AAuBUIhniKIAACKIgaAAIAAinIAlAAIBnCKIAAiKIAbAAIAACng');
    this.shape.setTransform(8.4, 8.4);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 16.9, 16.9);

  (lib.Symbol1copy6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AgMBVIAAioIAZAAIAACog');
    this.shape.setTransform(1.3, 8.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2.7, 16.9);

  (lib.Symbol1copy5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AggANIgbgZIB3AAIAAAZg');
    this.shape.setTransform(9.8, 8.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AhUBVIAAioICoAAIAAAbIiNAAIAACNg');
    this.shape_1.setTransform(8.5, 8.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 16.9, 16.9);

  (lib.Symbol1copy3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AhGBVIAAh+IAbAbIAABIIBbAAQAKAAAGgHQAHgHAAgJIAAhGQAAgJgHgGQgGgGgKAAIh2AAIgbgbICRAAIAOABQAPAFALANQAJANABAQIAABGQAAAVgPAOQgOAPgVAAg'
      );
    this.shape.setTransform(9.8, 8.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 19.5, 16.9);

  (lib.Symbol1copy2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AhTBVIAAioICnAAIAAAbIiNAAIAAByICNAAIAAAbg');
    this.shape.setTransform(8.4, 10);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AghANIgagZIB3AAIAAAZg');
    this.shape_1.setTransform(9.8, 10);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 1.6, 16.9, 16.9);

  (lib.Tween21 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol22();
    this.instance.parent = this;
    this.instance.setTransform(0, -313, 1, 1, 0, 0, 0, 150, 156.5);
    this.instance.compositeOperation = 'lighter';

    this.instance_1 = new lib.Symbol22();
    this.instance_1.parent = this;
    this.instance_1.setTransform(0, 313, 1, 1, 0, 0, 0, 150, 156.5);
    this.instance_1.compositeOperation = 'lighter';

    this.instance_2 = new lib.Symbol22();
    this.instance_2.parent = this;
    this.instance_2.setTransform(0, 0, 1, 1, 0, 0, 0, 150, 156.5);
    this.instance_2.compositeOperation = 'lighter';

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-450, -469.5, 900, 939);

  (lib.Tween13 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol7();
    this.instance.parent = this;
    this.instance.setTransform(0.7, 1.3, 6.415, 6.415, 0, 0, 0, 27.6, 27.7);
    this.instance.alpha = 0.43;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-176.4, -176.4, 352.9, 352.9);

  (lib.Tween2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Symbol 6
    this.instance = new lib.Symbol6();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 1, 1, 0, 0, 0, 111.3, 74.5);
    this.instance.alpha = 0;
    this.instance.filters = [new cjs.BlurFilter(4, 4, 3)];
    this.instance.cache(-2, 36, 229, 89);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ alpha: 1 }, 99, cjs.Ease.get(-1)).wait(1));

    // Layer_3
    this.instance_1 = new lib.Tween14('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ alpha: 1 }, 99, cjs.Ease.get(-1)).wait(1));

    // Layer_4
    this.instance_2 = new lib.Tween15('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ alpha: 1 }, 99, cjs.Ease.get(-1)).wait(1));

    // Symbol 5
    this.instance_3 = new lib.Symbol5('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(0.1, 0.5, 1, 1, 0, 0, 0, 111.4, 75);
    this.instance_3.alpha = 0.398;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-123.3, -48.9, 255, 114);

  (lib.Symbol63 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween23('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(428.1, 201.4, 5, 5);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(21)
        .to({ _off: false }, 0)
        .to({ scaleX: 1.15, scaleY: 1.15, x: 192.4, y: 90.7, alpha: 1 }, 19)
        .to({ scaleX: 1, scaleY: 1, x: 183.3, y: 86.4 }, 60, cjs.Ease.get(1))
        .wait(51)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol62 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween24('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(-257.2, 201.4, 5, 5);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(18)
        .to({ _off: false }, 0)
        .to({ scaleX: 1.15, scaleY: 1.15, x: 34.8, y: 90.7, alpha: 1 }, 19)
        .to({ scaleX: 1, scaleY: 1, x: 46.2, y: 86.4 }, 60, cjs.Ease.get(1))
        .wait(54)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol61 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween26('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(-254.4, -137.6, 5, 5);
    this.instance.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ scaleX: 1.15, scaleY: 1.15, x: 35.5, y: 12.7, alpha: 1 }, 19)
        .to({ scaleX: 1, scaleY: 1, x: 46.8, y: 18.6 }, 60, cjs.Ease.get(1))
        .wait(72)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-479.7, -229.1, 450.8, 183);

  (lib.Symbol54 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween16('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(0.1, -904.9, 1.991, 0.5, 90, 0, 0, 0.1, -0.1);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(932).to({ _off: false }, 0).to({ y: 2879.8 }, 30, cjs.Ease.get(-1)).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol53 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.Symbol24('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(67.5, -155.8, 0.998, 0.998, -19.1, 0, 0, 95.7, 71.9);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(443)
        .to({ _off: false }, 0)
        .to(
          {
            regY: 71.8,
            scaleX: 1,
            scaleY: 1,
            rotation: -71.9,
            guide: {
              path: [67.4, -155.7, 35, -157.9, 0, -157.9, -136, -157.9, -232.2, -125.2, -253, -118.1, -269.3, -110.5],
            },
          },
          393
        )
        .wait(127)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol49 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Symbol 45
    this.instance = new lib.Symbol45();
    this.instance.parent = this;
    this.instance.setTransform(127.8, 31.5, 1, 1, 0, 0, 0, 121, 31.5);
    this.instance.filters = [new cjs.BlurFilter(10, 10, 3)];
    this.instance.cache(-3, -3, 248, 69);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Symbol 45
    this.instance_1 = new lib.Symbol45();
    this.instance_1.parent = this;
    this.instance_1.setTransform(127.8, 31.5, 1, 1, 0, 0, 0, 121, 31.5);
    this.instance_1.filters = [new cjs.BlurFilter(5, 5, 3)];
    this.instance_1.cache(-3, -3, 248, 69);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    // Layer_5
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#FFFFFF').ss(1, 1, 1).p('Ay5k6MAlzAAAIAAJ1MglzAAAg');
    this.shape.setTransform(127.8, 31.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_6 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('Ay5E7IAAp1MAlzAAAIAAJ1g');
    mask.setTransform(129.1, 31.5);

    // Symbol 48
    this.instance_2 = new lib.Symbol48();
    this.instance_2.parent = this;
    this.instance_2.setTransform(124.7, 69.9, 2.488, 1, 0, 0, 0, 50.1, 50);
    this.instance_2.alpha = 0.238;
    this.instance_2.compositeOperation = 'lighter';

    var maskedShapeInstanceList = [this.instance_2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(-7.7, -14.5, 275, 95), null);

  (lib.Symbol42 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween16('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(113.9, 0);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(89)
        .to({ _off: false }, 0)
        .to({ x: -1824.3 }, 20)
        .to({ _off: true }, 119)
        .wait(1)
        .to({ _off: false, rotation: 180, x: 1650.3 }, 0)
        .to({ x: -285.9 }, 18, cjs.Ease.get(-1))
        .to({ _off: true }, 1)
        .wait(168)
        .to({ _off: false, x: 1658.3 }, 0)
        .to({ x: -289.9 }, 26, cjs.Ease.get(-1))
        .to({ scaleX: 0.29, scaleY: 1.74, rotation: 90, x: -75, y: 70.3 }, 1)
        .to({ scaleX: 0.25, scaleY: 1.78, x: -63, y: -438.1 }, 74)
        .wait(446)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol41 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween2('synched', 0, false);
    this.instance.parent = this;
    this.instance.setTransform(-1.3, -62.9, 0.75, 0.75);
    this.instance.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ scaleX: 1, scaleY: 1, x: -1.7, y: -65.6, alpha: 1, startPosition: 89 }, 89, cjs.Ease.get(1))
        .to({ y: -66.1, startPosition: 99 }, 158, cjs.Ease.quadInOut)
        .to({ startPosition: 99 }, 382)
        .to({ alpha: 0 }, 50, cjs.Ease.get(-1))
        .to({ _off: true }, 18)
        .wait(266)
    );

    // Layer 1
    this.instance_1 = new lib.Tween13('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-1.5, -71.5);
    this.instance_1.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({ y: -74.2, alpha: 1 }, 89, cjs.Ease.get(-1))
        .to({ y: -71.7 }, 158, cjs.Ease.quadInOut)
        .to({ startPosition: 0 }, 382)
        .to({ scaleX: 0.1, scaleY: 0.1, alpha: 0 }, 50, cjs.Ease.get(-1))
        .to({ _off: true }, 18)
        .wait(266)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-177.9, -247.9, 352.9, 352.9);

  (lib.Symbol33 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween1('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(0, -48);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(89)
        .to({ _off: false }, 0)
        .to({ y: 0.6 }, 80)
        .to({ y: 48 }, 78)
        .to({ _off: true }, 1)
        .wait(652)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol32 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance = new lib.Tween31('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(118.9, 3.2);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 3.2 }, 49, cjs.Ease.cubicInOut).wait(1));

    // Layer_3
    this.instance_1 = new lib.Tween32('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(118.9, 3.2);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ x: 234.6 }, 49, cjs.Ease.cubicInOut).wait(1));

    // Layer_4
    this.instance_2 = new lib.Tween33('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(119.4, 3.2, 0.025, 1);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2).to({ regX: 0.4, scaleX: 1 }, 49, cjs.Ease.cubicInOut).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(114.7, -1, 8.4, 8.4);

  (lib.Symbol29 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_48 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(1));

    // Investing involves risk. Proncipal loss is possible.  The fund is distributed  by Quasar Distributors LLC.
    this.instance = new lib.Tween29('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(159.4, 322.4);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ x: 149.4, alpha: 1 }, 39, cjs.Ease.get(1))
        .wait(1)
    );

    // Layer_3
    this.instance_1 = new lib.Tween30('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(150, 300);
    this.instance_1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ alpha: 1 }, 39, cjs.Ease.get(1)).wait(10));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-37.9, 354.1, 976.2, 255.9);

  (lib.Symbol28 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'ADMAtQgGgEgFgIQgDgIAAgJIAAgDQAAgKADgHQAFgIAGgFQAHgEAIAAQAMAAAIAIQAHAJAAAOIAAAEIgwAAIAAACQgBAMAHAHQAGAIALAAQAGAAAEgDQAFgCAEgEIAFADQgJAMgQAAQgIABgIgFgADMgIQgFAGgBAKIAoAAIAAgBQABgJgGgGQgFgHgJAAQgIAAgHAHgAgQAsQgGgGAAgIQAAgKAIgGQAIgGAPAAIANAAIAAgIQAAgGgEgEQgFgFgJAAQgGAAgFAFQgGADAAAHIgIgBQAAgIAIgGQAHgGALAAQALAAAHAGQAHAGAAAJIAAAhQAAAJACAFIAAABIgIAAQgBgDgBgHQgEAGgGACQgGADgGAAQgKAAgGgFgAgIASQgGAEgBAHQABAGAEADQAEAFAGAAQAIAAAFgEQAGgEADgGIAAgPIgNAAQgKAAgHAEgAhuAoQgIgKAAgPIAAgDQAAgKAEgHQADgHAGgFQAIgEAIAAQAMAAAHAHQAHAGABAKIgHAAQgBgGgGgFQgEgGgJAAQgKAAgGAIQgFAHgBANIAAACQABANAFAIQAGAHALAAQAHAAAFgFQAGgEABgHIAHAAQAAAGgEAFQgEAGgGACQgGADgGAAQgOABgIgKgAiwAsQgHgHAAgIIAHAAQABAHAFADQAGAEAIAAQAIAAAFgEQAEgDAAgGQABgFgFgEQgEgDgKgCQgJgCgFgDQgFgCgCgDQgDgEAAgEQAAgJAHgFQAHgFAKAAQAMAAAHAGQAHAFAAAKIgIAAQAAgHgFgDQgFgFgIAAQgHAAgEAEQgFADAAAGQAAADAEADQAEAEAJACQALACAFADQAEADADADQACAEAAAFQAAAJgHAFQgHAGgLgBQgMAAgIgFgAEFAwIAAhDIAIAAIAAAKQAFgMAOAAIAFABIgBAHIgEgBQgHAAgGAFQgEADgCAHIAAAvgACnAwIAAguQAAgHgDgFQgEgEgKgBQgIABgFAFQgGAFgBAGIAAAuIgHAAIAAguQAAgHgEgFQgEgEgJgBQgHABgFAEQgGAEgCAHIAAAvIgIAAIAAhDIAIAAIAAALQAEgGAFgEQAGgDAIAAQAPAAAFAOQADgHAHgDQAGgEAIAAQAVAAABAXIAAAugAAzAwIAAhDIAHAAIAABDgAgvAwIAAhhIAIAAIAABhgAjPAwIAAhDIAHAAIAABDgAkkAwIAAhcIAaAAQALABAJAFQAKAFAFAJQAEAKAAANIAAAHQAAAMgEAKQgFAJgKAGQgIAFgMAAgAkcAqIASAAQAOAAAJgLQAJgJAAgQIAAgHQAAgRgJgJQgJgKgOAAIgSAAgAAzgkQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAABQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAjPgkQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAg'
      );
    this.shape.setTransform(151.4, 584.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('rgba(255,255,255,0.498)')
      .s()
      .p(
        'AklA+IAAgHIJIAAIAAAHgADNAhQgGgFgFgHQgDgIAAgKIAAgCQAAgJADgIQAFgIAGgFQAHgEAIAAQAMAAAIAIQAHAJAAAPIAAADIgwAAIAAABQgBAMAHAIQAGAIALAAQAGAAAEgDQAFgCAEgFIAFAEQgJAMgQAAQgIAAgIgEgADNgUQgFAGgBAKIAoAAIAAAAQABgKgGgHQgFgGgJAAQgIAAgHAHgAgPAfQgGgFAAgIQAAgKAIgGQAIgFAPAAIANAAIAAgIQAAgHgEgFQgFgEgJAAQgGAAgFAEQgGAEAAAGIgIAAQAAgIAIgGQAHgGALAAQALAAAHAGQAHAFAAALIAAAfQAAAKACAFIAAABIgIAAQgBgDgBgHQgEAFgGADQgGADgHAAQgJAAgGgGgAgHAGQgGAEgBAHQABAGAEADQAEAEAGAAQAIAAAFgDQAGgEADgGIAAgPIgNAAQgKAAgHAEgAhtAcQgIgKAAgQIAAgCQAAgJAEgIQADgIAGgEQAIgEAIAAQAMAAAHAHQAHAGABALIgHAAQgBgIgGgFQgEgFgJAAQgKAAgGAIQgFAHgBANIAAACQABANAFAHQAGAIALAAQAHAAAFgFQAGgEABgHIAHAAQAAAGgEAFQgEAFgGADQgGADgGAAQgOAAgIgJgAivAfQgHgGAAgIIAHAAQABAGAFAEQAGAEAIAAQAIAAAFgEQAEgDAAgGQABgFgFgEQgEgDgKgCQgJgCgFgCQgFgCgCgEQgDgDAAgFQAAgJAHgFQAHgFAKAAQAMAAAHAGQAHAFAAAJIgIAAQAAgGgFgEQgFgEgIAAQgHAAgEAEQgFADAAAFQAAAFAEADQAEADAJACQALACAEACQAFADADAEQACAEAAAFQAAAJgHAFQgHAFgLAAQgMAAgIgGgAEGAkIAAhEIAIAAIAAALQAFgMAOAAIAFABIgBAHIgEgBQgHAAgGAEQgEAEgCAIIAAAugACoAkIAAgtQAAgJgDgEQgEgFgKAAQgIABgFAFQgGAFgBAHIAAAtIgHAAIAAgtQAAgJgEgEQgEgFgJAAQgHAAgFAFQgGAEgCAIIAAAuIgIAAIAAhEIAIAAIAAALQAEgGAFgDQAGgDAIAAQAPAAAFANQADgGAHgEQAGgDAIAAQAVAAABAYIAAAtgAA0AkIAAhEIAHAAIAABEgAguAkIAAhhIAIAAIAABhgAjOAkIAAhEIAHAAIAABEgAkjAkIAAhcIAaAAQALAAAJAGQAKAFAFAJQAEAKAAAMIAAAJQAAALgEAKQgFAJgKAGQgIAFgMAAgAkbAdIASAAQAOAAAJgKQAJgJAAgQIAAgIQAAgQgJgJQgJgKgOAAIgSAAgAA0gwQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAjOgwQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg'
      );
    this.shape_1.setTransform(151.3, 585.3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .wait(3)
    );

    // Layer_1
    this.instance = new lib.Symbol29();
    this.instance.parent = this;
    this.instance.setTransform(150, 300, 1, 1, 0, 0, 0, 150, 300);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('rgba(17,22,35,0.898)').s().p('AnQClIAAlJIOhAAIAAFJg');
    this.shape_2.setTransform(148.5, 584.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 2)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(122.1, 579.1, 58.6, 9.9);

  (lib.Symbol27 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Learn More
    this.instance = new lib.LearnMore();
    this.instance.parent = this;
    this.instance.setTransform(121.3, 38.4, 1, 1, 0, 0, 0, 58.3, 9);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(29)
        .to({ _off: false }, 0)
        .to({ y: 28.4, alpha: 1 }, 30, cjs.Ease.get(1))
        .wait(31)
    );

    // Layer_4 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('A0MFVIAAqpMAoZAAAIAAKpg');
    mask.setTransform(121.1, 29.4);

    // Layer_5
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#DDA53B').ss(1, 1, 1).p('Ay5AAMAlzAAA');
    this.shape.setTransform(121, 63.3);
    this.shape._off = true;

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(19).to({ _off: false }, 0).to({ _off: true }, 40).wait(31));

    // Layer_3
    this.instance_1 = new lib.Tween28('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(121, 93.8, 0, 1);

    var maskedShapeInstanceList = [this.instance_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({ scaleX: 1 }, 19, cjs.Ease.cubicInOut)
        .to({ y: 31.5 }, 20, cjs.Ease.cubicInOut)
        .wait(51)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(120, 61.3, 2.1, 2.3);

  (lib.Symbol23 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween21('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(150, 156.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ y: 469.5 }, 599).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-300, -313, 900, 939);

  (lib.Symbol19 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p(
      'EgTGAtSQozjumzmzQmymyjuo0Qj3pHAAp/QAAp+D3pHQDuozGymzQGzmzIzjuQJIj3J+AAQJ+AAJID3QI0DuGzGzQGyGzDuIzQD3JHAAJ+QAAJ/j3JHQjuI0myGyQmzGzo0DuQpHD3p/AAQp+AApIj3g'
    );
    var mask_graphics_179 = new cjs.Graphics().p(
      'EgTGAtSQozjumzmzQmymyjuo0Qj3pHAAp/QAAp+D3pHQDuozGymzQGzmzIzjuQJIj3J+AAQJ+AAJID3QI0DuGzGzQGyGzDuIzQD3JHAAJ+QAAJ/j3JHQjuI0myGyQmzGzo0DuQpHD3p/AAQp+AApIj3g'
    );

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: 163.1, y: 314.5 })
        .wait(174)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(5)
        .to({ graphics: mask_graphics_179, x: 163.1, y: 314.5 })
        .wait(1)
    );

    // Earth.jpg
    this.instance = new lib.Earthjpgcopy();
    this.instance.parent = this;
    this.instance.setTransform(-122, 0);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ _off: true }, 174).wait(5).to({ _off: false }, 0).wait(1));

    // Layer_1
    this.instance_1 = new lib.Symbol20();
    this.instance_1.parent = this;
    this.instance_1.setTransform(162.1, 162.2, 1, 1, 0, 0, 0, 172.5, 145.2);
    this.instance_1.alpha = 0;
    this.instance_1.filters = [new cjs.BlurFilter(46, 46, 3)];
    this.instance_1.cache(-143, 5, 632, 632);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({ y: 112.2, alpha: 1 }, 59)
        .to({ _off: true }, 115)
        .wait(5)
        .to({ _off: false }, 0)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-275.4, -100.4, 882, 883);

  (lib.Symbol18 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween7('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(347.2, 15.8);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(4)
        .to({ _off: false }, 0)
        .to({ x: 77.2, alpha: 1 }, 39, cjs.Ease.cubicInOut)
        .to({ startPosition: 0 }, 56)
        .to({ startPosition: 0 }, 5)
        .to({ x: -194.8, alpha: 0 }, 40)
        .wait(6)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol17 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween6('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(442.6, 15.8);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ x: 172.6, alpha: 1 }, 39, cjs.Ease.cubicInOut)
        .to({ startPosition: 0 }, 51)
        .to({ startPosition: 0 }, 8)
        .to({ x: -99.4, alpha: 0 }, 40)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol16 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween8('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(296.9, 15.8);
    this.instance.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ x: 26.9, alpha: 1 }, 39, cjs.Ease.cubicInOut)
        .to({ startPosition: 0 }, 60)
        .to({ x: -245.1, alpha: 0 }, 40)
        .wait(11)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(273.1, 0, 47.6, 31.6);

  (lib.Symbol11copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AylAeIAAg7MAlLAAAIAAA7g');
    mask.setTransform(119, 3);

    // Layer_3
    this.instance = new lib.Tween3('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(119, 3, 1, 3);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 390 }, 39).to({ _off: true }, 8).wait(1));

    // Layer_4
    this.instance_1 = new lib.Tween4('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(119, 3);

    var maskedShapeInstanceList = [this.instance_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).to({ startPosition: 0 }, 4).to({ x: 390 }, 39).to({ _off: true }, 4).wait(1)
    );

    // Layer_5
    this.instance_2 = new lib.Tween5('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(119, 1);

    var maskedShapeInstanceList = [this.instance_2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ startPosition: 0 }, 8).to({ x: 390 }, 39).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 238, 6);

  (lib.Symbol11 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AylAeIAAg7MAlLAAAIAAA7g');
    mask.setTransform(119, 3);

    // Layer_3
    this.instance = new lib.Tween3('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(390, 3, 1, 3);
    this.instance._off = true;

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(8).to({ _off: false }, 0).to({ x: 119 }, 39, cjs.Ease.cubicInOut).wait(1)
    );

    // Layer_4
    this.instance_1 = new lib.Tween4('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(390, 3);
    this.instance_1._off = true;

    var maskedShapeInstanceList = [this.instance_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).wait(4).to({ _off: false }, 0).to({ x: 119 }, 39, cjs.Ease.cubicInOut).wait(5)
    );

    // Layer_5
    this.instance_2 = new lib.Tween5('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(390, 1);

    var maskedShapeInstanceList = [this.instance_2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ x: 119 }, 39, cjs.Ease.cubicInOut).wait(9));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance = new lib.Symbol18('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(18, 18, 1, 1, 0, 0, 0, 18, 18);

    this.instance_1 = new lib.Symbol17('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(21.2, 21.2, 1, 1, 0, 0, 0, 21.2, 21.2);

    this.instance_2 = new lib.Symbol16('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(18.8, 18.8, 1, 1, 0, 0, 0, 18.8, 18.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] })
        .wait(150)
    );

    // Layer_12
    this.instance_3 = new lib.Symbol11('synched', 0, false);
    this.instance_3.parent = this;
    this.instance_3.setTransform(122, 47.7, 1, 1, 0, 0, 0, 119, 3);

    this.instance_4 = new lib.Symbol11copy('synched', 0, false);
    this.instance_4.parent = this;
    this.instance_4.setTransform(122, 47.7, 1, 1, 0, 0, 180, 119, 3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_3 }] })
        .to({ state: [{ t: this.instance_4 }] }, 99)
        .wait(51)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(273.1, 0, 47.6, 31.6);

  (lib.Symbol8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Symbol 7
    this.instance = new lib.Symbol7();
    this.instance.parent = this;
    this.instance.setTransform(177.5, 255.5, 0.3, 1.585, 0, 0, 0, 27.9, 27.5);
    this.instance.alpha = 0.75;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ scaleY: 3.08, y: 124.5 }, 0)
        .wait(2)
        .to({ scaleY: 1.17, y: 22.2 }, 0)
        .to({ _off: true }, 2)
        .wait(16)
    );

    // Symbol 7
    this.instance_1 = new lib.Symbol7();
    this.instance_1.parent = this;
    this.instance_1.setTransform(212, 241.7, 0.3, 1.185, 0, 0, 0, 27.9, 27.5);
    this.instance_1.alpha = 0.43;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(2)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ y: 131.7 }, 0)
        .wait(2)
        .to({ y: 61.7 }, 0)
        .to({ _off: true }, 2)
        .wait(15)
    );

    // Symbol 7
    this.instance_2 = new lib.Symbol7();
    this.instance_2.parent = this;
    this.instance_2.setTransform(187.5, 241.7, 0.3, 1.185, 0, 0, 0, 27.9, 27.5);
    this.instance_2.alpha = 0.43;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(3)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ y: 141.7 }, 0)
        .wait(2)
        .to({ y: 11.7 }, 0)
        .to({ _off: true }, 2)
        .wait(14)
    );

    // Symbol 7
    this.instance_3 = new lib.Symbol7_1();
    this.instance_3.parent = this;
    this.instance_3.setTransform(166, 269.5, 0.3, 1.185, 0, 0, 0, 27.9, 27.5);
    this.instance_3.alpha = 0.43;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(4)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ y: 139.5 }, 0)
        .wait(2)
        .to({ y: 69.5 }, 0)
        .to({ _off: true }, 2)
        .wait(13)
    );

    // Symbol 7
    this.instance_4 = new lib.Symbol7();
    this.instance_4.parent = this;
    this.instance_4.setTransform(18.3, 272, 0.3, 1.185, 0, 0, 0, 27.9, 27.5);
    this.instance_4.alpha = 0.43;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(5)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ y: 142 }, 0)
        .wait(2)
        .to({ y: 62 }, 0)
        .to({ _off: true }, 2)
        .wait(12)
    );

    // Symbol 7
    this.instance_5 = new lib.Symbol7_1();
    this.instance_5.parent = this;
    this.instance_5.setTransform(51.3, 269.5, 0.3, 1.185, 0, 0, 0, 27.9, 27.5);
    this.instance_5.alpha = 0.43;
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(6)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ y: 169.5 }, 0)
        .wait(2)
        .to({ y: 89.5 }, 0)
        .to({ _off: true }, 2)
        .wait(11)
    );

    // Symbol 7
    this.instance_6 = new lib.Symbol7_1();
    this.instance_6.parent = this;
    this.instance_6.setTransform(34.8, 311.7, 0.3, 1.331, 0, 0, 0, 27.9, 27.5);
    this.instance_6.alpha = 0.75;
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(7)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ scaleY: 3.08, y: 173.6 }, 0)
        .wait(2)
        .to({ scaleY: 1.09, y: 49.2 }, 0)
        .to({ _off: true }, 2)
        .wait(10)
    );

    // Symbol 7
    this.instance_7 = new lib.Symbol7_1();
    this.instance_7.parent = this;
    this.instance_7.setTransform(202.9, 308.9, 0.3, 1.565, 0, 0, 0, 27.9, 27.5);
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(8)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ scaleY: 4.22, y: 125.7 }, 0)
        .wait(2)
        .to({ scaleY: 1.35, y: 46.9 }, 0)
        .to({ _off: true }, 2)
        .wait(9)
    );

    // Symbol 7
    this.instance_8 = new lib.Symbol7_1();
    this.instance_8.parent = this;
    this.instance_8.setTransform(51.3, 237.8, 0.3, 1.185, 0, 0, 0, 27.9, 27.5);
    this.instance_8.alpha = 0.43;
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(9)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ y: 127.8 }, 0)
        .wait(2)
        .to({ y: 37.8 }, 0)
        .to({ _off: true }, 2)
        .wait(8)
    );

    // Symbol 7
    this.instance_9 = new lib.Symbol7_1();
    this.instance_9.parent = this;
    this.instance_9.setTransform(228.5, 313, 0.3, 1.057, 0, 0, 0, 27.9, 27.5);
    this.instance_9.alpha = 0.75;
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(10)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ scaleY: 3.08, y: 217.5 }, 0)
        .wait(2)
        .to({ scaleY: 1.1, y: 103.1 }, 0)
        .to({ _off: true }, 2)
        .wait(7)
    );

    // Symbol 7
    this.instance_10 = new lib.Symbol7_1();
    this.instance_10.parent = this;
    this.instance_10.setTransform(108.9, 321.8, 0.3, 1.419, 0, 0, 0, 27.9, 27.5);
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(11)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ scaleY: 4.22, y: 194.7 }, 0)
        .wait(2)
        .to({ scaleY: 1.13, y: 39.9 }, 0)
        .to({ _off: true }, 2)
        .wait(6)
    );

    // Symbol 7
    this.instance_11 = new lib.Symbol7();
    this.instance_11.parent = this;
    this.instance_11.setTransform(148.5, 334.6, 0.3, 1.185, 0, 0, 0, 27.9, 27.5);
    this.instance_11.alpha = 0.43;
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(12)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ y: 204.6 }, 0)
        .wait(2)
        .to({ y: 52.6 }, 0)
        .to({ _off: true }, 2)
        .wait(5)
    );

    // Symbol 7
    this.instance_12 = new lib.Symbol7();
    this.instance_12.parent = this;
    this.instance_12.setTransform(228.5, 227.6, 0.3, 3.075, 0, 0, 0, 27.9, 27.5);
    this.instance_12.alpha = 0.75;
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(13)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ scaleY: 1.47, y: 223.8 }, 0)
        .wait(2)
        .to({ scaleY: 1.22, y: -11.2 }, 0)
        .to({ _off: true }, 2)
        .wait(4)
    );

    // Symbol 7
    this.instance_13 = new lib.Symbol7();
    this.instance_13.parent = this;
    this.instance_13.setTransform(120.5, 213.9, 0.3, 1.84, 0, 0, 0, 27.9, 27.5);
    this.instance_13.alpha = 0.75;
    this.instance_13._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(14)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ scaleY: 3.08, y: 119.7 }, 0)
        .wait(2)
        .to({ scaleY: 1.46, y: 35.4 }, 0)
        .to({ _off: true }, 2)
        .wait(3)
    );

    // Symbol 7
    this.instance_14 = new lib.Symbol7();
    this.instance_14.parent = this;
    this.instance_14.setTransform(79.4, 264.7, 0.3, 1.585, 0, 0, 0, 27.9, 27.5);
    this.instance_14.alpha = 0.75;
    this.instance_14._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(15)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ scaleY: 3.08, y: 173.6 }, 0)
        .wait(2)
        .to({ scaleY: 1.57, y: 62.2 }, 0)
        .to({ _off: true }, 2)
        .wait(2)
    );

    // Symbol 7
    this.instance_15 = new lib.Symbol7();
    this.instance_15.parent = this;
    this.instance_15.setTransform(147.4, 319.7, 0.3, 1.871, 0, 0, 0, 27.9, 27.5);
    this.instance_15._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .wait(16)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ scaleY: 4.22, y: 205 }, 0)
        .wait(2)
        .to({ scaleY: 1.98, y: 83.7 }, 0)
        .to({ _off: true }, 2)
        .wait(1)
    );

    // Symbol 7
    this.instance_16 = new lib.Symbol7();
    this.instance_16.parent = this;
    this.instance_16.setTransform(8.4, 268.2, 0.3, 1.599, 0, 0, 0, 27.9, 27.5);
    this.instance_16._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_16)
        .wait(17)
        .to({ _off: false }, 0)
        .wait(2)
        .to({ scaleY: 4.22, y: 116 }, 0)
        .wait(2)
        .to({ scaleY: 1.6, y: 44 }, 0)
        .wait(2)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Symbol 2
    this.instance = new lib.Symbol2();
    this.instance.parent = this;
    this.instance.setTransform(566, 36.4, 1.683, 1.683, 135, 0, 0, 87.1, 92.5);
    this.instance.alpha = 0.578;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(29).to({ _off: false }, 0).to({ y: 1330.7 }, 19).to({ _off: true }, 1).wait(11)
    );

    // Symbol 2
    this.instance_1 = new lib.Symbol2();
    this.instance_1.parent = this;
    this.instance_1.setTransform(322, -296.7, 2.265, 2.265, 0, 0, 0, 87.2, 92.4);
    this.instance_1.alpha = 0.578;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).wait(29).to({ _off: false }, 0).to({ y: 997.7 }, 19).to({ _off: true }, 1).wait(11)
    );

    // Symbol 2
    this.instance_2 = new lib.Symbol2();
    this.instance_2.parent = this;
    this.instance_2.setTransform(301.6, 41, 1.683, 1.683, -135, 0, 0, 87.1, 92.5);
    this.instance_2.alpha = 0.578;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ y: 1503.4 }, 19).to({ _off: true }, 1).wait(40));

    // Symbol 2
    this.instance_3 = new lib.Symbol2();
    this.instance_3.parent = this;
    this.instance_3.setTransform(634.6, -203, 2.265, 2.265, 90, 0, 0, 87.2, 92.4);
    this.instance_3.alpha = 0.578;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ y: 1259.4 }, 19).to({ _off: true }, 1).wait(40));

    // Symbol 2
    this.instance_4 = new lib.Symbol2();
    this.instance_4.parent = this;
    this.instance_4.setTransform(244.6, -431, 2.805, 2.805, 0, 0, 0, 87.2, 92.4);
    this.instance_4.alpha = 0.578;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).to({ y: 1031.4 }, 19).to({ _off: true }, 1).wait(40));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -690.1, 843.9, 944.9);

  (lib.Symbol1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      'AgJWWIAJi0IgdAAQgOAAgOgLQgMgKAAgJQAAgIgLg9QgMg+gHgdQgGgZgNgZIgLgUIAAC0IhQAAIAAA8IkEAAQg4gTgSg5IgGg2IFUlAIAAj6IqKAAIgoAyIhGAAIAAgUIAUgeIAAkiIgKAAQgHAAgCgIQgBgEAAgSQAAgNAKgEIAKgDIAAjvQAAgQALgbQALgbAIAAQAKAAAAAUIAACfIAeAoIAADIIDSiWIAAg8QAAgXAQg1QAQg1AIAAQAGAAADAZIABAYIAABQIAUgUIAAhtIAKAAQAMAHAFAWQADAKAAAKIAAAoIAKAAIAKgeIAAgdIAGgUQAIgUAGAAQAKAAAAAUIAAAxIB4hZIAAigQAFgoAKguQAUhdAZgfQATANARBQQAJAoAFAlIAABkIAogKIAAhaIAyh4IBGlUQAPiRAZieQAyk+AxhFQA+A4A3GTQAcDJAPC+IBaEEIAABkIAJALQAMANATAGQAAglAZh0IAZhrQAyBFAPCeQAHBOgCBBIBuBPIAegxIAUAKIAABZIAeAUIAKAAIAKgyIAAgUIAUgnIAKAAIAKAdIAKCMIDSC0IAAi0IAeg8IAAhtIAehQIAKAKIAKJ/IAKAAIAAAoIgUAKIgoAAIgogyIqUAAIAADwIFUFAIAAA8Ig8BGIkOAAIgKg8IhGAAIgKi+QAAgIgKALQgKAJAAAIIgFAaQgFAXAAALQAAAKgFAeQgFAeAAAKQAAALgFAcIgFAfQAAAKgoAeIgUAAIAAC0g'
    );
    mask.setTransform(98, 143);

    // Plane.jpg
    this.instance = new lib.Plane();
    this.instance.parent = this;

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer_1
    this.instance_1 = new lib.Symbol7_1();
    this.instance_1.parent = this;
    this.instance_1.setTransform(98.6, 269, 0.484, 2.595, 0, 0, 0, 27.9, 27.6);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(1, 1, 195, 339.1);

  (lib.Scheme = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol15();
    this.instance.parent = this;
    this.instance.setTransform(0, -50, 0.9, 0.9, 0, 0, 0, 150, 250);
    this.instance.alpha = 0.5;
    this.instance.compositeOperation = 'lighter';
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(247)
        .to({ _off: false }, 0)
        .to({ scaleX: 1, scaleY: 1 }, 91, cjs.Ease.get(1))
        .to({ _off: true }, 105)
        .wait(457)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.ClipGroup = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_4
    this.instance = new lib.Symbol30();
    this.instance.parent = this;
    this.instance.setTransform(32.7, 33.9, 2.136, 2.436, 0, -6.7, -22.4, 16.1, 16.4);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-3.8, -19.1, 73.4, 105.2), null);

  (lib.Group_13 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_1();
    this.instance.parent = this;
    this.instance.setTransform(21.7, 36.9, 1, 1, 0, 0, 0, 21.7, 36.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0, 0, 43.3, 73.8), null);

  (lib.Group_12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_2();
    this.instance.parent = this;
    this.instance.setTransform(18.5, 27.5, 1, 1, 0, 0, 0, 18.5, 27.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0, 0, 37, 55.1), null);

  (lib.Group_11 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_3();
    this.instance.parent = this;
    this.instance.setTransform(91.4, 100.9, 1, 1, 0, 0, 0, 91.4, 100.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0, 0, 182.7, 201.8), null);

  (lib.Group_10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_4();
    this.instance.parent = this;
    this.instance.setTransform(32.3, 35.8, 1, 1, 0, 0, 0, 32.3, 35.8);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0, 0, 64.7, 71.6), null);

  (lib.Group_8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_5();
    this.instance.parent = this;
    this.instance.setTransform(45.2, 53.5, 1, 1, 0, 0, 0, 45.2, 53.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0, 0, 90.5, 107), null);

  (lib.Group_7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_6();
    this.instance.parent = this;
    this.instance.setTransform(19.3, 27.1, 1, 1, 0, 0, 0, 19.3, 27.1);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0, 0, 38.6, 54.3), null);

  (lib.Group_6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_7();
    this.instance.parent = this;
    this.instance.setTransform(30.7, 43.7, 1, 1, 0, 0, 0, 30.7, 43.7);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0, 0, 61.4, 87.4), null);

  (lib.Group_5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_8();
    this.instance.parent = this;
    this.instance.setTransform(21.9, 36.4, 1, 1, 0, 0, 0, 21.9, 36.4);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0, 0, 43.8, 72.7), null);

  (lib.Group_4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_9();
    this.instance.parent = this;
    this.instance.setTransform(15.1, 21, 1, 1, 0, 0, 0, 15.1, 21);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0, 0, 30.2, 42), null);

  (lib.Group_3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_10();
    this.instance.parent = this;
    this.instance.setTransform(35.9, 57.2, 1, 1, 0, 0, 0, 35.9, 57.2);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0, 0, 71.8, 114.5), null);

  (lib.Group_2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_11();
    this.instance.parent = this;
    this.instance.setTransform(16, 26.4, 1, 1, 0, 0, 0, 16, 26.4);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0, 0, 32, 53), null);

  (lib.Group_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_12();
    this.instance.parent = this;
    this.instance.setTransform(29.6, 44, 1, 1, 0, 0, 0, 29.6, 44);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0, 0, 59.2, 87.9), null);

  (lib.Group = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup_13();
    this.instance.parent = this;
    this.instance.setTransform(8.8, 15.5, 1, 1, 0, 0, 0, 8.8, 15.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0, 0, 17.5, 31.1), null);

  (lib.ClipGroup_14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_3
    this.instance_1 = new lib.Group();
    this.instance_1.parent = this;
    this.instance_1.setTransform(34.3, 220.4, 1, 1, 0, 0, 0, 8.8, 15.5);
    this.instance_1.alpha = 0.648;

    this.instance_2 = new lib.Group_2();
    this.instance_2.parent = this;
    this.instance_2.setTransform(21.9, 259.4, 1, 1, 0, 0, 0, 16, 26.4);
    this.instance_2.alpha = 0.309;

    this.instance_3 = new lib.Group_3();
    this.instance_3.parent = this;
    this.instance_3.setTransform(39.8, 222, 1, 1, 0, 0, 0, 35.9, 57.2);
    this.instance_3.alpha = 0.309;

    this.instance_4 = new lib.Group_5();
    this.instance_4.parent = this;
    this.instance_4.setTransform(21.9, 183.4, 1, 1, 0, 0, 0, 21.9, 36.4);
    this.instance_4.alpha = 0.43;

    this.instance_5 = new lib.Group_6();
    this.instance_5.parent = this;
    this.instance_5.setTransform(65.7, 225.1, 1, 1, 0, 0, 0, 30.7, 43.7);
    this.instance_5.alpha = 0.309;

    this.instance_6 = new lib.Group_8();
    this.instance_6.parent = this;
    this.instance_6.setTransform(125.4, 171.3, 1, 1, 0, 0, 0, 45.2, 53.5);
    this.instance_6.alpha = 0.309;

    this.instance_7 = new lib.Group_9();
    this.instance_7.parent = this;
    this.instance_7.setTransform(193.9, 89.5, 1, 1, 0, 0, 0, 71.5, 67);

    this.instance_8 = new lib.Group_10();
    this.instance_8.parent = this;
    this.instance_8.setTransform(182.9, 108.3, 1, 1, 0, 0, 0, 32.3, 35.8);
    this.instance_8.alpha = 0.648;

    this.instance_9 = new lib.Group_11();
    this.instance_9.parent = this;
    this.instance_9.setTransform(201.1, 100.9, 1, 1, 0, 0, 0, 91.4, 100.9);
    this.instance_9.alpha = 0.5;

    this.instance_10 = new lib.Group_12();
    this.instance_10.parent = this;
    this.instance_10.setTransform(85.9, 109, 1, 1, 0, 0, 0, 18.5, 27.5);
    this.instance_10.alpha = 0.512;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_10 },
            { t: this.instance_9 },
            { t: this.instance_8 },
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
          ],
        })
        .wait(143)
    );

    // <Group>_1
    this.instance_11 = new lib.Group_1();
    this.instance_11.parent = this;
    this.instance_11.setTransform(46.1, 276.9, 0.2, 0.2, 0, 0, 180, 29.5, 44.2);
    this.instance_11.alpha = 0.301;
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(63)
        .to({ _off: false }, 0)
        .to({ regX: 29.6, regY: 44, scaleX: 1, scaleY: 1, y: 277 }, 39)
        .to({ alpha: 0 }, 40)
        .wait(1)
    );

    // <Group>_4
    this.instance_12 = new lib.Group_4();
    this.instance_12.parent = this;
    this.instance_12.setTransform(95.2, 273.3, 0.2, 0.2, 0, 0, 0, 15.2, 21.2);
    this.instance_12.alpha = 0.512;
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(54)
        .to({ _off: false }, 0)
        .to({ regX: 15.1, regY: 21, scaleX: 1, scaleY: 1, x: 95.3 }, 39)
        .to({ alpha: 0 }, 40)
        .to({ _off: true }, 1)
        .wait(9)
    );

    // <Group>_7
    this.instance_13 = new lib.Group_7();
    this.instance_13.parent = this;
    this.instance_13.setTransform(70.8, 108.6, 0.2, 0.2, 0, 0, 0, 19.5, 27.2);
    this.instance_13.alpha = 0.309;
    this.instance_13._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(45)
        .to({ _off: false }, 0)
        .to({ regX: 19.3, regY: 27.1, scaleX: 1, scaleY: 1 }, 39)
        .to({ alpha: 0 }, 40)
        .to({ _off: true }, 1)
        .wait(18)
    );

    // <Group>_13
    this.instance_14 = new lib.Group_13();
    this.instance_14.parent = this;
    this.instance_14.setTransform(138.7, 242.3, 0.2, 0.2, 0, 0, 0, 22, 37);
    this.instance_14.alpha = 0.309;
    this.instance_14._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(36)
        .to({ _off: false }, 0)
        .to({ regX: 21.7, regY: 36.9, scaleX: 1, scaleY: 1, y: 242.4 }, 39)
        .to({ alpha: 0 }, 40)
        .to({ _off: true }, 1)
        .wait(27)
    );

    // <Group>_1
    this.instance_15 = new lib.Group_1();
    this.instance_15.parent = this;
    this.instance_15.setTransform(63.2, 134.2, 0.2, 0.2, 0, 0, 0, 29.8, 44.2);
    this.instance_15.alpha = 0.301;
    this.instance_15._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .wait(27)
        .to({ _off: false }, 0)
        .to({ regX: 29.6, regY: 44, scaleX: 1, scaleY: 1, y: 134.3 }, 39)
        .to({ alpha: 0 }, 40)
        .to({ _off: true }, 1)
        .wait(36)
    );

    // <Group>_4
    this.instance_16 = new lib.Group_4();
    this.instance_16.parent = this;
    this.instance_16.setTransform(83.2, 281.1, 0.2, 0.2, 0, 0, 0, 15.2, 21);
    this.instance_16.alpha = 0.512;
    this.instance_16._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_16)
        .wait(18)
        .to({ _off: false }, 0)
        .to({ regX: 15.1, scaleX: 1, scaleY: 1 }, 39)
        .to({ alpha: 0 }, 40)
        .to({ _off: true }, 1)
        .wait(45)
    );

    // <Group>_7
    this.instance_17 = new lib.Group_7();
    this.instance_17.parent = this;
    this.instance_17.setTransform(63.3, 223.9, 0.2, 0.2, 0, 0, 0, 19.5, 27.2);
    this.instance_17.alpha = 0.309;
    this.instance_17._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_17)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ regX: 19.3, regY: 27.1, scaleX: 1, scaleY: 1 }, 39)
        .to({ alpha: 0 }, 40)
        .to({ _off: true }, 1)
        .wait(54)
    );

    // <Group>_13
    this.instance_18 = new lib.Group_13();
    this.instance_18.parent = this;
    this.instance_18.setTransform(23.3, 260.5, 0.2, 0.2, 0, 0, 0, 21.8, 37);
    this.instance_18.alpha = 0.309;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_18)
        .to({ regX: 21.7, regY: 36.9, scaleX: 1, scaleY: 1, x: 23.4, y: 260.6 }, 39)
        .to({ alpha: 0 }, 40)
        .to({ _off: true }, 1)
        .wait(63)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 292.4, 285.9);

  (lib.FIVG = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      'AK2HDIiVhVIAAraICVhWIFnAAICSBWIAAC3IiwAAIAAhyIksAAIAAJSIEsAAIAAilIiSAAIAAiWIFCAAIAAF+IiSBVgAgSG9Ik8t3IC1AAIDpKdIACAAIDoqdIC0AAIk8N3gApAG9IAAt3ICyAAIAAN3gAyuG9IAAt3IIhAAIAACYIlvAAIAADKIElAAIAACZIklAAIAAF8g'
    );
    mask.setTransform(120.5, 45);

    // Layer_3
    this.instance = new lib.Symbol26();
    this.instance.parent = this;
    this.instance.setTransform(-131.4, 44.8, 1.688, 2.064, 0, 39.9, 0, 55.5, 38.4);
    this.instance.alpha = 0.301;
    this.instance.compositeOperation = 'lighter';

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 361.5 }, 99, cjs.Ease.get(-1)).wait(1));

    // Layer_4
    this.instance_1 = new lib.Tween27('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-288, 45);

    var maskedShapeInstanceList = [this.instance_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ x: 193.2 }, 99, cjs.Ease.get(1)).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0.7, 0, 239.8, 90.1);

  (lib.Symbol18copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween7copy('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(347.2, 15.8);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(4)
        .to({ _off: false }, 0)
        .to({ x: 77.2, alpha: 1 }, 39, cjs.Ease.cubicInOut)
        .to({ startPosition: 0 }, 56)
        .to({ startPosition: 0 }, 5)
        .to({ x: -194.8, alpha: 0 }, 40)
        .wait(6)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol18_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance_1 = new lib.Tween7_1('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(347.2, 15.8);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(4)
        .to({ _off: false }, 0)
        .to({ x: 77.2, alpha: 1 }, 39, cjs.Ease.cubicInOut)
        .to({ startPosition: 0 }, 56)
        .to({ startPosition: 0 }, 5)
        .to({ x: -194.8, alpha: 0 }, 40)
        .wait(6)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol17copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween6copy('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(442.6, 15.8);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ x: 172.6, alpha: 1 }, 39, cjs.Ease.cubicInOut)
        .to({ startPosition: 0 }, 51)
        .to({ startPosition: 0 }, 8)
        .to({ x: -99.4, alpha: 0 }, 40)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol17_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance_1 = new lib.Tween6_1('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(442.6, 15.8);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ x: 172.6, alpha: 1 }, 39, cjs.Ease.cubicInOut)
        .to({ startPosition: 0 }, 51)
        .to({ startPosition: 0 }, 8)
        .to({ x: -99.4, alpha: 0 }, 40)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol16copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween8copy('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(296.9, 15.8);
    this.instance.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ x: 26.9, alpha: 1 }, 39, cjs.Ease.cubicInOut)
        .to({ startPosition: 0 }, 60)
        .to({ x: -245.1, alpha: 0 }, 40)
        .wait(11)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(273.1, 0, 47.6, 31.6);

  (lib.Symbol16_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance_1 = new lib.Tween8_1('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(296.9, 15.8);
    this.instance_1.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({ x: 26.9, alpha: 1 }, 39, cjs.Ease.cubicInOut)
        .to({ startPosition: 0 }, 60)
        .to({ x: -245.1, alpha: 0 }, 40)
        .wait(11)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(273.1, 0, 47.6, 31.6);

  (lib.Symbol11copy3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p('AylAeIAAg7MAlLAAAIAAA7g');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: 119, y: 3 })
        .wait(43)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(5)
    );

    // Layer_3
    this.instance = new lib.Tween3copy('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(119, 3, 1, 3);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 390 }, 39).to({ _off: true }, 4).wait(5));

    // Layer_4
    this.instance_1 = new lib.Tween4copy('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(119, 3);

    var maskedShapeInstanceList = [this.instance_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ startPosition: 0 }, 4).to({ _off: true }, 39).wait(5));

    // Layer_5
    this.instance_2 = new lib.Tween5copy('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(119, 1);

    var maskedShapeInstanceList = [this.instance_2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ startPosition: 0 }, 8).to({ _off: true }, 35).wait(5));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 238, 6);

  (lib.Symbol11copy2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AylAeIAAg7MAlLAAAIAAA7g');
    mask.setTransform(119, 3);

    // Layer_3
    this.instance = new lib.Tween3copy('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(390, 3, 1, 3);
    this.instance._off = true;

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(8).to({ _off: false }, 0).to({ x: 119 }, 39, cjs.Ease.cubicInOut).wait(1)
    );

    // Layer_4
    this.instance_1 = new lib.Tween4copy('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(390, 3);
    this.instance_1._off = true;

    var maskedShapeInstanceList = [this.instance_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).wait(4).to({ _off: false }, 0).to({ x: 119 }, 39, cjs.Ease.cubicInOut).wait(5)
    );

    // Layer_5
    this.instance_2 = new lib.Tween5copy('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(390, 1);

    var maskedShapeInstanceList = [this.instance_2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ x: 119 }, 39, cjs.Ease.cubicInOut).wait(9));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol11copy_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    mask_1.graphics.p('AylAeIAAg7MAlLAAAIAAA7g');
    mask_1.setTransform(119, 3);

    // Layer_3
    this.instance_3 = new lib.Tween3_1('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(119, 3, 1, 3);

    var maskedShapeInstanceList = [this.instance_3];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ x: 390 }, 39).to({ _off: true }, 8).wait(1));

    // Layer_4
    this.instance_4 = new lib.Tween4_1('synched', 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(119, 3);

    var maskedShapeInstanceList = [this.instance_4];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4).to({ startPosition: 0 }, 4).to({ x: 390 }, 39).to({ _off: true }, 4).wait(1)
    );

    // Layer_5
    this.instance_5 = new lib.Tween5_1('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(119, 1);

    var maskedShapeInstanceList = [this.instance_5];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_5).to({ startPosition: 0 }, 8).to({ x: 390 }, 39).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 238, 6);

  (lib.Symbol11_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    mask_1.graphics.p('AylAeIAAg7MAlLAAAIAAA7g');
    mask_1.setTransform(119, 3);

    // Layer_3
    this.instance_3 = new lib.Tween3_1('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(390, 3, 1, 3);
    this.instance_3._off = true;

    var maskedShapeInstanceList = [this.instance_3];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3).wait(8).to({ _off: false }, 0).to({ x: 119 }, 39, cjs.Ease.cubicInOut).wait(1)
    );

    // Layer_4
    this.instance_4 = new lib.Tween4_1('synched', 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(390, 3);
    this.instance_4._off = true;

    var maskedShapeInstanceList = [this.instance_4];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4).wait(4).to({ _off: false }, 0).to({ x: 119 }, 39, cjs.Ease.cubicInOut).wait(5)
    );

    // Layer_5
    this.instance_5 = new lib.Tween5_1('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(390, 1);

    var maskedShapeInstanceList = [this.instance_5];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_5).to({ x: 119 }, 39, cjs.Ease.cubicInOut).wait(9));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol9copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance = new lib.Symbol18copy('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(21.5, 15, 1.232, 1.232, 0, 0, 0, 18, 18);

    this.instance_1 = new lib.Symbol17copy('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-2.7, 18.8, 1.232, 1.232, 0, 0, 0, 21.2, 21.2);

    this.instance_2 = new lib.Symbol16copy('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(22.5, 16, 1.232, 1.232, 0, 0, 0, 18.8, 18.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] })
        .wait(150)
    );

    // Layer_12
    this.instance_3 = new lib.Symbol11copy2('synched', 0, false);
    this.instance_3.parent = this;
    this.instance_3.setTransform(122, 47.7, 1, 1, 0, 0, 0, 119, 3);

    this.instance_4 = new lib.Symbol11copy3('synched', 0, false);
    this.instance_4.parent = this;
    this.instance_4.setTransform(122, 47.7, 1, 1, 0, 0, 180, 119, 3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_3 }] })
        .to({ state: [{ t: this.instance_4 }] }, 99)
        .wait(51)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(335.7, -7.2, 58.7, 38.9);

  (lib.Symbol9_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance_5 = new lib.Symbol18_1('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(15.9, 20, 0.856, 0.856, 0, 0, 0, 18, 18);

    this.instance_6 = new lib.Symbol17_1('synched', 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(35.1, 22.8, 0.856, 0.856, 0, 0, 0, 21.2, 21.2);

    this.instance_7 = new lib.Symbol16_1('synched', 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(16.6, 20.7, 0.856, 0.856, 0, 0, 0, 18.8, 18.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_7 }, { t: this.instance_6 }, { t: this.instance_5 }] })
        .wait(150)
    );

    // Layer_12
    this.instance_8 = new lib.Symbol11_1('synched', 0, false);
    this.instance_8.parent = this;
    this.instance_8.setTransform(122, 47.7, 1, 1, 0, 0, 0, 119, 3);

    this.instance_9 = new lib.Symbol11copy_1('synched', 0, false);
    this.instance_9.parent = this;
    this.instance_9.setTransform(122, 47.7, 1, 1, 0, 0, 180, 119, 3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_8 }] })
        .to({ state: [{ t: this.instance_9 }] }, 99)
        .wait(51)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(234.2, 4.6, 40.8, 27);

  (lib.Symbol2copy9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_1 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_2 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_3 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_4 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_5 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_6 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_7 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_8 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_9 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDxg');
    var mask_graphics_10 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_11 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_12 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_13 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_14 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_15 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_16 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_17 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_18 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_19 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_20 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_21 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_22 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDwg');
    var mask_graphics_23 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_24 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_25 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_26 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_27 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_28 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_29 = new cjs.Graphics().p('AjwAAIDwjwIDwDwIjwDxg');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: 22, y: -2 })
        .wait(1)
        .to({ graphics: mask_graphics_1, x: 21.7, y: -1.8 })
        .wait(1)
        .to({ graphics: mask_graphics_2, x: 21.4, y: -1.6 })
        .wait(1)
        .to({ graphics: mask_graphics_3, x: 21.1, y: -1.4 })
        .wait(1)
        .to({ graphics: mask_graphics_4, x: 20.8, y: -1.2 })
        .wait(1)
        .to({ graphics: mask_graphics_5, x: 20.5, y: -1 })
        .wait(1)
        .to({ graphics: mask_graphics_6, x: 20.2, y: -0.8 })
        .wait(1)
        .to({ graphics: mask_graphics_7, x: 19.9, y: -0.6 })
        .wait(1)
        .to({ graphics: mask_graphics_8, x: 19.6, y: -0.3 })
        .wait(1)
        .to({ graphics: mask_graphics_9, x: 19.3, y: -0.1 })
        .wait(1)
        .to({ graphics: mask_graphics_10, x: 19, y: 0.1 })
        .wait(1)
        .to({ graphics: mask_graphics_11, x: 18.7, y: 0.3 })
        .wait(1)
        .to({ graphics: mask_graphics_12, x: 18.4, y: 0.5 })
        .wait(1)
        .to({ graphics: mask_graphics_13, x: 18.1, y: 0.7 })
        .wait(1)
        .to({ graphics: mask_graphics_14, x: 17.8, y: 0.9 })
        .wait(1)
        .to({ graphics: mask_graphics_15, x: 17.5, y: 1.1 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: 17.2, y: 1.3 })
        .wait(1)
        .to({ graphics: mask_graphics_17, x: 16.9, y: 1.5 })
        .wait(1)
        .to({ graphics: mask_graphics_18, x: 16.6, y: 1.7 })
        .wait(1)
        .to({ graphics: mask_graphics_19, x: 16.3, y: 1.9 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: 16, y: 2.1 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: 15.7, y: 2.3 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: 15.4, y: 2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: 15.1, y: 2.8 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: 14.8, y: 3 })
        .wait(1)
        .to({ graphics: mask_graphics_25, x: 14.5, y: 3.2 })
        .wait(1)
        .to({ graphics: mask_graphics_26, x: 14.2, y: 3.4 })
        .wait(1)
        .to({ graphics: mask_graphics_27, x: 13.9, y: 3.6 })
        .wait(1)
        .to({ graphics: mask_graphics_28, x: 13.6, y: 3.8 })
        .wait(1)
        .to({ graphics: mask_graphics_29, x: 13.3, y: 4 })
        .wait(1)
    );

    // Layer_1
    this.instance = new lib.Symbol1copy11('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(0, 15.4, 1, 1, 0, 0, 0, 9.8, 8.4);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 9.8, y: 8.4 }, 29, cjs.Ease.cubicInOut).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2, 7, 9.1, 15.1);

  (lib.Symbol2copy8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_1 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_2 = new cjs.Graphics().p('AjvAAIDvjvIDxDvIjxDwg');
    var mask_graphics_3 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_4 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_5 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_6 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_7 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_8 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_9 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_10 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_11 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_12 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_13 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_14 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_15 = new cjs.Graphics().p('AjvAAIDvjwIDxDwIjxDxg');
    var mask_graphics_16 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_17 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_18 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_19 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_20 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_21 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_22 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_23 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_24 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_25 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDwg');
    var mask_graphics_26 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDxg');
    var mask_graphics_27 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDwg');
    var mask_graphics_28 = new cjs.Graphics().p('AjvAAIDvjvIDxDvIjxDxg');
    var mask_graphics_29 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDwg');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: -4, y: 19.9 })
        .wait(1)
        .to({ graphics: mask_graphics_1, x: -3.7, y: 19.6 })
        .wait(1)
        .to({ graphics: mask_graphics_2, x: -3.3, y: 19.3 })
        .wait(1)
        .to({ graphics: mask_graphics_3, x: -3, y: 19.1 })
        .wait(1)
        .to({ graphics: mask_graphics_4, x: -2.6, y: 18.8 })
        .wait(1)
        .to({ graphics: mask_graphics_5, x: -2.2, y: 18.5 })
        .wait(1)
        .to({ graphics: mask_graphics_6, x: -1.9, y: 18.2 })
        .wait(1)
        .to({ graphics: mask_graphics_7, x: -1.5, y: 18 })
        .wait(1)
        .to({ graphics: mask_graphics_8, x: -1.2, y: 17.7 })
        .wait(1)
        .to({ graphics: mask_graphics_9, x: -0.8, y: 17.4 })
        .wait(1)
        .to({ graphics: mask_graphics_10, x: -0.4, y: 17.1 })
        .wait(1)
        .to({ graphics: mask_graphics_11, x: -0.1, y: 16.9 })
        .wait(1)
        .to({ graphics: mask_graphics_12, x: 0.3, y: 16.6 })
        .wait(1)
        .to({ graphics: mask_graphics_13, x: 0.6, y: 16.3 })
        .wait(1)
        .to({ graphics: mask_graphics_14, x: 1, y: 16 })
        .wait(1)
        .to({ graphics: mask_graphics_15, x: 1.4, y: 15.8 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: 1.7, y: 15.5 })
        .wait(1)
        .to({ graphics: mask_graphics_17, x: 2.1, y: 15.2 })
        .wait(1)
        .to({ graphics: mask_graphics_18, x: 2.4, y: 14.9 })
        .wait(1)
        .to({ graphics: mask_graphics_19, x: 2.8, y: 14.7 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: 3.2, y: 14.4 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: 3.5, y: 14.1 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: 3.9, y: 13.8 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: 4.2, y: 13.6 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: 4.6, y: 13.3 })
        .wait(1)
        .to({ graphics: mask_graphics_25, x: 5, y: 13 })
        .wait(1)
        .to({ graphics: mask_graphics_26, x: 5.3, y: 12.7 })
        .wait(1)
        .to({ graphics: mask_graphics_27, x: 5.7, y: 12.5 })
        .wait(1)
        .to({ graphics: mask_graphics_28, x: 6, y: 12.2 })
        .wait(1)
        .to({ graphics: mask_graphics_29, x: 6.4, y: 11.9 })
        .wait(1)
    );

    // Layer_1
    this.instance = new lib.Symbol1copy10('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(18.2, 2.2, 1, 1, 0, 0, 0, 9.8, 8.4);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 9.8, y: 8.4 }, 29).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(8.4, -4.1, 11.7, 14.8);

  (lib.Symbol2copy6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_1 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_2 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_3 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_4 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_5 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_6 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_7 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_8 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_9 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDxg');
    var mask_graphics_10 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_11 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_12 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_13 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_14 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_15 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_16 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_17 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_18 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_19 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_20 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_21 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_22 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDwg');
    var mask_graphics_23 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_24 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_25 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_26 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_27 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_28 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_29 = new cjs.Graphics().p('AjwAAIDwjwIDwDwIjwDxg');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: 22, y: -2 })
        .wait(1)
        .to({ graphics: mask_graphics_1, x: 21.7, y: -1.8 })
        .wait(1)
        .to({ graphics: mask_graphics_2, x: 21.4, y: -1.6 })
        .wait(1)
        .to({ graphics: mask_graphics_3, x: 21.1, y: -1.4 })
        .wait(1)
        .to({ graphics: mask_graphics_4, x: 20.8, y: -1.2 })
        .wait(1)
        .to({ graphics: mask_graphics_5, x: 20.5, y: -1 })
        .wait(1)
        .to({ graphics: mask_graphics_6, x: 20.2, y: -0.8 })
        .wait(1)
        .to({ graphics: mask_graphics_7, x: 19.9, y: -0.6 })
        .wait(1)
        .to({ graphics: mask_graphics_8, x: 19.6, y: -0.3 })
        .wait(1)
        .to({ graphics: mask_graphics_9, x: 19.3, y: -0.1 })
        .wait(1)
        .to({ graphics: mask_graphics_10, x: 19, y: 0.1 })
        .wait(1)
        .to({ graphics: mask_graphics_11, x: 18.7, y: 0.3 })
        .wait(1)
        .to({ graphics: mask_graphics_12, x: 18.4, y: 0.5 })
        .wait(1)
        .to({ graphics: mask_graphics_13, x: 18.1, y: 0.7 })
        .wait(1)
        .to({ graphics: mask_graphics_14, x: 17.8, y: 0.9 })
        .wait(1)
        .to({ graphics: mask_graphics_15, x: 17.5, y: 1.1 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: 17.2, y: 1.3 })
        .wait(1)
        .to({ graphics: mask_graphics_17, x: 16.9, y: 1.5 })
        .wait(1)
        .to({ graphics: mask_graphics_18, x: 16.6, y: 1.7 })
        .wait(1)
        .to({ graphics: mask_graphics_19, x: 16.3, y: 1.9 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: 16, y: 2.1 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: 15.7, y: 2.3 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: 15.4, y: 2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: 15.1, y: 2.8 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: 14.8, y: 3 })
        .wait(1)
        .to({ graphics: mask_graphics_25, x: 14.5, y: 3.2 })
        .wait(1)
        .to({ graphics: mask_graphics_26, x: 14.2, y: 3.4 })
        .wait(1)
        .to({ graphics: mask_graphics_27, x: 13.9, y: 3.6 })
        .wait(1)
        .to({ graphics: mask_graphics_28, x: 13.6, y: 3.8 })
        .wait(1)
        .to({ graphics: mask_graphics_29, x: 13.3, y: 4 })
        .wait(1)
    );

    // Layer_1
    this.instance = new lib.Symbol1copy8('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(0, 15.4, 1, 1, 0, 0, 0, 9.8, 8.4);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 9.8, y: 8.4 }, 29, cjs.Ease.cubicInOut).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2, 7, 12.1, 15.1);

  (lib.Symbol2copy5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_1 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_2 = new cjs.Graphics().p('AjvAAIDvjvIDxDvIjxDwg');
    var mask_graphics_3 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_4 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_5 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_6 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_7 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_8 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_9 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_10 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_11 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_12 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_13 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_14 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_15 = new cjs.Graphics().p('AjvAAIDvjwIDxDwIjxDxg');
    var mask_graphics_16 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_17 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_18 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_19 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_20 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_21 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_22 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_23 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_24 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_25 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDwg');
    var mask_graphics_26 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDxg');
    var mask_graphics_27 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDwg');
    var mask_graphics_28 = new cjs.Graphics().p('AjvAAIDvjvIDxDvIjxDxg');
    var mask_graphics_29 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDwg');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: -4, y: 19.9 })
        .wait(1)
        .to({ graphics: mask_graphics_1, x: -3.7, y: 19.6 })
        .wait(1)
        .to({ graphics: mask_graphics_2, x: -3.3, y: 19.3 })
        .wait(1)
        .to({ graphics: mask_graphics_3, x: -3, y: 19.1 })
        .wait(1)
        .to({ graphics: mask_graphics_4, x: -2.6, y: 18.8 })
        .wait(1)
        .to({ graphics: mask_graphics_5, x: -2.2, y: 18.5 })
        .wait(1)
        .to({ graphics: mask_graphics_6, x: -1.9, y: 18.2 })
        .wait(1)
        .to({ graphics: mask_graphics_7, x: -1.5, y: 18 })
        .wait(1)
        .to({ graphics: mask_graphics_8, x: -1.2, y: 17.7 })
        .wait(1)
        .to({ graphics: mask_graphics_9, x: -0.8, y: 17.4 })
        .wait(1)
        .to({ graphics: mask_graphics_10, x: -0.4, y: 17.1 })
        .wait(1)
        .to({ graphics: mask_graphics_11, x: -0.1, y: 16.9 })
        .wait(1)
        .to({ graphics: mask_graphics_12, x: 0.3, y: 16.6 })
        .wait(1)
        .to({ graphics: mask_graphics_13, x: 0.6, y: 16.3 })
        .wait(1)
        .to({ graphics: mask_graphics_14, x: 1, y: 16 })
        .wait(1)
        .to({ graphics: mask_graphics_15, x: 1.4, y: 15.8 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: 1.7, y: 15.5 })
        .wait(1)
        .to({ graphics: mask_graphics_17, x: 2.1, y: 15.2 })
        .wait(1)
        .to({ graphics: mask_graphics_18, x: 2.4, y: 14.9 })
        .wait(1)
        .to({ graphics: mask_graphics_19, x: 2.8, y: 14.7 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: 3.2, y: 14.4 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: 3.5, y: 14.1 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: 3.9, y: 13.8 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: 4.2, y: 13.6 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: 4.6, y: 13.3 })
        .wait(1)
        .to({ graphics: mask_graphics_25, x: 5, y: 13 })
        .wait(1)
        .to({ graphics: mask_graphics_26, x: 5.3, y: 12.7 })
        .wait(1)
        .to({ graphics: mask_graphics_27, x: 5.7, y: 12.5 })
        .wait(1)
        .to({ graphics: mask_graphics_28, x: 6, y: 12.2 })
        .wait(1)
        .to({ graphics: mask_graphics_29, x: 6.4, y: 11.9 })
        .wait(1)
    );

    // Layer_1
    this.instance = new lib.Symbol1copy7('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(18.2, 2.2, 1, 1, 0, 0, 0, 9.8, 8.4);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 9.8, y: 8.4 }, 29).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(8.4, -4.1, 11.7, 14.8);

  (lib.Symbol2copy4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_1 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_2 = new cjs.Graphics().p('AjvAAIDvjvIDxDvIjxDwg');
    var mask_graphics_3 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_4 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_5 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_6 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_7 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_8 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_9 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_10 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_11 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_12 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_13 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_14 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_15 = new cjs.Graphics().p('AjvAAIDvjwIDxDwIjxDxg');
    var mask_graphics_16 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_17 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_18 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_19 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_20 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_21 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_22 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_23 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_24 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_25 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDwg');
    var mask_graphics_26 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDxg');
    var mask_graphics_27 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDwg');
    var mask_graphics_28 = new cjs.Graphics().p('AjvAAIDvjvIDxDvIjxDxg');
    var mask_graphics_29 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDwg');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: -4, y: 19.9 })
        .wait(1)
        .to({ graphics: mask_graphics_1, x: -3.7, y: 19.6 })
        .wait(1)
        .to({ graphics: mask_graphics_2, x: -3.3, y: 19.3 })
        .wait(1)
        .to({ graphics: mask_graphics_3, x: -3, y: 19.1 })
        .wait(1)
        .to({ graphics: mask_graphics_4, x: -2.6, y: 18.8 })
        .wait(1)
        .to({ graphics: mask_graphics_5, x: -2.2, y: 18.5 })
        .wait(1)
        .to({ graphics: mask_graphics_6, x: -1.9, y: 18.2 })
        .wait(1)
        .to({ graphics: mask_graphics_7, x: -1.5, y: 18 })
        .wait(1)
        .to({ graphics: mask_graphics_8, x: -1.2, y: 17.7 })
        .wait(1)
        .to({ graphics: mask_graphics_9, x: -0.8, y: 17.4 })
        .wait(1)
        .to({ graphics: mask_graphics_10, x: -0.4, y: 17.1 })
        .wait(1)
        .to({ graphics: mask_graphics_11, x: -0.1, y: 16.9 })
        .wait(1)
        .to({ graphics: mask_graphics_12, x: 0.3, y: 16.6 })
        .wait(1)
        .to({ graphics: mask_graphics_13, x: 0.6, y: 16.3 })
        .wait(1)
        .to({ graphics: mask_graphics_14, x: 1, y: 16 })
        .wait(1)
        .to({ graphics: mask_graphics_15, x: 1.4, y: 15.8 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: 1.7, y: 15.5 })
        .wait(1)
        .to({ graphics: mask_graphics_17, x: 2.1, y: 15.2 })
        .wait(1)
        .to({ graphics: mask_graphics_18, x: 2.4, y: 14.9 })
        .wait(1)
        .to({ graphics: mask_graphics_19, x: 2.8, y: 14.7 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: 3.2, y: 14.4 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: 3.5, y: 14.1 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: 3.9, y: 13.8 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: 4.2, y: 13.6 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: 4.6, y: 13.3 })
        .wait(1)
        .to({ graphics: mask_graphics_25, x: 5, y: 13 })
        .wait(1)
        .to({ graphics: mask_graphics_26, x: 5.3, y: 12.7 })
        .wait(1)
        .to({ graphics: mask_graphics_27, x: 5.7, y: 12.5 })
        .wait(1)
        .to({ graphics: mask_graphics_28, x: 6, y: 12.2 })
        .wait(1)
        .to({ graphics: mask_graphics_29, x: 6.4, y: 11.9 })
        .wait(1)
    );

    // Layer_1
    this.instance = new lib.Symbol1copy6('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(18.2, 2.2, 1, 1, 0, 0, 0, 9.8, 8.4);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 9.8, y: 8.4 }, 29).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(8.4, -4.1, 2.7, 14.8);

  (lib.Symbol2copy3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_1 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_2 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_3 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_4 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_5 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_6 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_7 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_8 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_9 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDxg');
    var mask_graphics_10 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_11 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_12 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_13 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_14 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_15 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_16 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_17 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_18 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_19 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_20 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_21 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_22 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDwg');
    var mask_graphics_23 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_24 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_25 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_26 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_27 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_28 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_29 = new cjs.Graphics().p('AjwAAIDwjwIDwDwIjwDxg');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: 22, y: -2 })
        .wait(1)
        .to({ graphics: mask_graphics_1, x: 21.7, y: -1.8 })
        .wait(1)
        .to({ graphics: mask_graphics_2, x: 21.4, y: -1.6 })
        .wait(1)
        .to({ graphics: mask_graphics_3, x: 21.1, y: -1.4 })
        .wait(1)
        .to({ graphics: mask_graphics_4, x: 20.8, y: -1.2 })
        .wait(1)
        .to({ graphics: mask_graphics_5, x: 20.5, y: -1 })
        .wait(1)
        .to({ graphics: mask_graphics_6, x: 20.2, y: -0.8 })
        .wait(1)
        .to({ graphics: mask_graphics_7, x: 19.9, y: -0.6 })
        .wait(1)
        .to({ graphics: mask_graphics_8, x: 19.6, y: -0.3 })
        .wait(1)
        .to({ graphics: mask_graphics_9, x: 19.3, y: -0.1 })
        .wait(1)
        .to({ graphics: mask_graphics_10, x: 19, y: 0.1 })
        .wait(1)
        .to({ graphics: mask_graphics_11, x: 18.7, y: 0.3 })
        .wait(1)
        .to({ graphics: mask_graphics_12, x: 18.4, y: 0.5 })
        .wait(1)
        .to({ graphics: mask_graphics_13, x: 18.1, y: 0.7 })
        .wait(1)
        .to({ graphics: mask_graphics_14, x: 17.8, y: 0.9 })
        .wait(1)
        .to({ graphics: mask_graphics_15, x: 17.5, y: 1.1 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: 17.2, y: 1.3 })
        .wait(1)
        .to({ graphics: mask_graphics_17, x: 16.9, y: 1.5 })
        .wait(1)
        .to({ graphics: mask_graphics_18, x: 16.6, y: 1.7 })
        .wait(1)
        .to({ graphics: mask_graphics_19, x: 16.3, y: 1.9 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: 16, y: 2.1 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: 15.7, y: 2.3 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: 15.4, y: 2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: 15.1, y: 2.8 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: 14.8, y: 3 })
        .wait(1)
        .to({ graphics: mask_graphics_25, x: 14.5, y: 3.2 })
        .wait(1)
        .to({ graphics: mask_graphics_26, x: 14.2, y: 3.4 })
        .wait(1)
        .to({ graphics: mask_graphics_27, x: 13.9, y: 3.6 })
        .wait(1)
        .to({ graphics: mask_graphics_28, x: 13.6, y: 3.8 })
        .wait(1)
        .to({ graphics: mask_graphics_29, x: 13.3, y: 4 })
        .wait(1)
    );

    // Layer_1
    this.instance = new lib.Symbol1copy5('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(0, 15.4, 1, 1, 0, 0, 0, 9.8, 8.4);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 9.8, y: 8.4 }, 29, cjs.Ease.cubicInOut).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2, 7, 9.1, 15.1);

  (lib.Symbol2copy2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_1 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_2 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_3 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_4 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_5 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_6 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_7 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_8 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_9 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDxg');
    var mask_graphics_10 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_11 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_12 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_13 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_14 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_15 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_16 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_17 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_18 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_19 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_20 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_21 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_22 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDwg');
    var mask_graphics_23 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_24 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_25 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_26 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_27 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_28 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_29 = new cjs.Graphics().p('AjwAAIDwjwIDwDwIjwDxg');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: 22, y: -2 })
        .wait(1)
        .to({ graphics: mask_graphics_1, x: 21.7, y: -1.8 })
        .wait(1)
        .to({ graphics: mask_graphics_2, x: 21.4, y: -1.6 })
        .wait(1)
        .to({ graphics: mask_graphics_3, x: 21.1, y: -1.4 })
        .wait(1)
        .to({ graphics: mask_graphics_4, x: 20.8, y: -1.2 })
        .wait(1)
        .to({ graphics: mask_graphics_5, x: 20.5, y: -1 })
        .wait(1)
        .to({ graphics: mask_graphics_6, x: 20.2, y: -0.8 })
        .wait(1)
        .to({ graphics: mask_graphics_7, x: 19.9, y: -0.6 })
        .wait(1)
        .to({ graphics: mask_graphics_8, x: 19.6, y: -0.3 })
        .wait(1)
        .to({ graphics: mask_graphics_9, x: 19.3, y: -0.1 })
        .wait(1)
        .to({ graphics: mask_graphics_10, x: 19, y: 0.1 })
        .wait(1)
        .to({ graphics: mask_graphics_11, x: 18.7, y: 0.3 })
        .wait(1)
        .to({ graphics: mask_graphics_12, x: 18.4, y: 0.5 })
        .wait(1)
        .to({ graphics: mask_graphics_13, x: 18.1, y: 0.7 })
        .wait(1)
        .to({ graphics: mask_graphics_14, x: 17.8, y: 0.9 })
        .wait(1)
        .to({ graphics: mask_graphics_15, x: 17.5, y: 1.1 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: 17.2, y: 1.3 })
        .wait(1)
        .to({ graphics: mask_graphics_17, x: 16.9, y: 1.5 })
        .wait(1)
        .to({ graphics: mask_graphics_18, x: 16.6, y: 1.7 })
        .wait(1)
        .to({ graphics: mask_graphics_19, x: 16.3, y: 1.9 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: 16, y: 2.1 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: 15.7, y: 2.3 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: 15.4, y: 2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: 15.1, y: 2.8 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: 14.8, y: 3 })
        .wait(1)
        .to({ graphics: mask_graphics_25, x: 14.5, y: 3.2 })
        .wait(1)
        .to({ graphics: mask_graphics_26, x: 14.2, y: 3.4 })
        .wait(1)
        .to({ graphics: mask_graphics_27, x: 13.9, y: 3.6 })
        .wait(1)
        .to({ graphics: mask_graphics_28, x: 13.6, y: 3.8 })
        .wait(1)
        .to({ graphics: mask_graphics_29, x: 13.3, y: 4 })
        .wait(1)
    );

    // Layer_1
    this.instance = new lib.Symbol1copy3('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(0, 15.4, 1, 1, 0, 0, 0, 9.8, 8.4);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 9.8, y: 8.4 }, 29, cjs.Ease.cubicInOut).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2, 7, 11.7, 15.1);

  (lib.Symbol2copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_1 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_2 = new cjs.Graphics().p('AjvAAIDvjvIDxDvIjxDwg');
    var mask_graphics_3 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_4 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_5 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_6 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_7 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_8 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_9 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_10 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_11 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_12 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_13 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_14 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_15 = new cjs.Graphics().p('AjvAAIDvjwIDxDwIjxDxg');
    var mask_graphics_16 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_17 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_18 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_19 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDxg');
    var mask_graphics_20 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_21 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_22 = new cjs.Graphics().p('AjwAAIDwjvIDxDvIjxDwg');
    var mask_graphics_23 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDxg');
    var mask_graphics_24 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDwg');
    var mask_graphics_25 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDwg');
    var mask_graphics_26 = new cjs.Graphics().p('AjvAAIDvjvIDwDvIjwDxg');
    var mask_graphics_27 = new cjs.Graphics().p('AjwAAIDwjwIDxDwIjxDwg');
    var mask_graphics_28 = new cjs.Graphics().p('AjvAAIDvjvIDxDvIjxDxg');
    var mask_graphics_29 = new cjs.Graphics().p('AjvAAIDvjwIDwDwIjwDwg');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: -4, y: 19.9 })
        .wait(1)
        .to({ graphics: mask_graphics_1, x: -3.7, y: 19.6 })
        .wait(1)
        .to({ graphics: mask_graphics_2, x: -3.3, y: 19.3 })
        .wait(1)
        .to({ graphics: mask_graphics_3, x: -3, y: 19.1 })
        .wait(1)
        .to({ graphics: mask_graphics_4, x: -2.6, y: 18.8 })
        .wait(1)
        .to({ graphics: mask_graphics_5, x: -2.2, y: 18.5 })
        .wait(1)
        .to({ graphics: mask_graphics_6, x: -1.9, y: 18.2 })
        .wait(1)
        .to({ graphics: mask_graphics_7, x: -1.5, y: 18 })
        .wait(1)
        .to({ graphics: mask_graphics_8, x: -1.2, y: 17.7 })
        .wait(1)
        .to({ graphics: mask_graphics_9, x: -0.8, y: 17.4 })
        .wait(1)
        .to({ graphics: mask_graphics_10, x: -0.4, y: 17.1 })
        .wait(1)
        .to({ graphics: mask_graphics_11, x: -0.1, y: 16.9 })
        .wait(1)
        .to({ graphics: mask_graphics_12, x: 0.3, y: 16.6 })
        .wait(1)
        .to({ graphics: mask_graphics_13, x: 0.6, y: 16.3 })
        .wait(1)
        .to({ graphics: mask_graphics_14, x: 1, y: 16 })
        .wait(1)
        .to({ graphics: mask_graphics_15, x: 1.4, y: 15.8 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: 1.7, y: 15.5 })
        .wait(1)
        .to({ graphics: mask_graphics_17, x: 2.1, y: 15.2 })
        .wait(1)
        .to({ graphics: mask_graphics_18, x: 2.4, y: 14.9 })
        .wait(1)
        .to({ graphics: mask_graphics_19, x: 2.8, y: 14.7 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: 3.2, y: 14.4 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: 3.5, y: 14.1 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: 3.9, y: 13.8 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: 4.2, y: 13.6 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: 4.6, y: 13.3 })
        .wait(1)
        .to({ graphics: mask_graphics_25, x: 5, y: 13 })
        .wait(1)
        .to({ graphics: mask_graphics_26, x: 5.3, y: 12.7 })
        .wait(1)
        .to({ graphics: mask_graphics_27, x: 5.7, y: 12.5 })
        .wait(1)
        .to({ graphics: mask_graphics_28, x: 6, y: 12.2 })
        .wait(1)
        .to({ graphics: mask_graphics_29, x: 6.4, y: 11.9 })
        .wait(1)
    );

    // Layer_1
    this.instance = new lib.Symbol1copy2('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(18.2, 2.2, 1, 1, 0, 0, 0, 9.8, 8.4);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 9.8, y: 8.4 }, 29).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(8.4, -4.1, 11.7, 16.4);

  (lib.Symbol = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween25('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(390.6, -137.6, 5, 5);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(2)
        .to({ _off: false }, 0)
        .to({ scaleX: 1.15, scaleY: 1.15, x: 183.8, y: 12.7, alpha: 1 }, 19)
        .to({ scaleX: 1, scaleY: 1, x: 175.8, y: 18.6 }, 60, cjs.Ease.get(1))
        .wait(70)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol59 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol32('synched', 0, false);
    this.instance.parent = this;
    this.instance.setTransform(0.8, -20, 1, 1, 0, 0, 0, 118.9, 3.2);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(689).to({ _off: false }, 0).wait(274));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol57 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.FIVG('synched', 0, false);
    this.instance.parent = this;
    this.instance.setTransform(-0.5, -96, 1, 1, 0, 0, 0, 120.5, 45);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(669).to({ _off: false }, 0).wait(294));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol52 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance = new lib.Tween22('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(-1.9, 301.2);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(443)
        .to({ _off: false }, 0)
        .to({ x: 0, y: 221.2, alpha: 0 }, 179, cjs.Ease.get(1))
        .wait(341)
    );

    // Layer_1
    this.instance_1 = new lib.Symbol19('synched', 0, false);
    this.instance_1.parent = this;
    this.instance_1.setTransform(0.6, 243, 1, 1, 0, 0, 0, 165, 88);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(443)
        .to({ _off: false }, 0)
        .to({ y: 163, startPosition: 179 }, 174, cjs.Ease.get(1))
        .to({ startPosition: 179 }, 39, cjs.Ease.get(-1))
        .to({ scaleX: 2.5, scaleY: 2.5, x: 0.7, y: 555, alpha: 0 }, 60, cjs.Ease.get(-1))
        .wait(247)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol51 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol23('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(0, -143.5, 1, 1, 0, 0, 0, 150, 156.5);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(443)
        .to({ _off: false }, 0)
        .to({ alpha: 1, startPosition: 174 }, 174, cjs.Ease.get(1))
        .wait(346)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol50 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol49();
    this.instance.parent = this;
    this.instance.setTransform(119.5, 60.2, 1, 1, 0, 0, 0, 125, 59.6);

    this.shape = new cjs.Shape();
    this.shape.graphics.f('#993399').s().p('EhN9AteMAAAha7MCb7AAAMAAABa7g');
    this.shape.setTransform(427.7, -195.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance }] }, 1)
        .to({ state: [{ t: this.shape }] }, 2)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol39 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol9copy('synched', 0, false);
    this.instance.parent = this;
    this.instance.setTransform(0, 216.4, 1, 1, 0, 0, 0, 122, 25.4);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(470)
        .to({ _off: false }, 0)
        .wait(82)
        .to({ mode: 'single', startPosition: 80 }, 0)
        .wait(94)
        .to({ mode: 'synched', startPosition: 99, loop: false }, 0)
        .to({ alpha: 0, startPosition: 141 }, 42)
        .to({ _off: true }, 1)
        .wait(211)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol38 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol9_1('synched', 0, false);
    this.instance.parent = this;
    this.instance.setTransform(0, 216.4, 1, 1, 0, 0, 0, 122, 25.4);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(282)
        .to({ _off: false }, 0)
        .wait(80)
        .to({ mode: 'single', startPosition: 80 }, 0)
        .wait(54)
        .to({ mode: 'synched', startPosition: 99, loop: false }, 0)
        .wait(484)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol37 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol9('synched', 0, false);
    this.instance.parent = this;
    this.instance.setTransform(0, 216.4, 1, 1, 0, 0, 0, 122, 25.4);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(69)
        .to({ _off: false }, 0)
        .wait(80)
        .to({ mode: 'single', startPosition: 80 }, 0)
        .wait(80)
        .to({ mode: 'synched', startPosition: 99, loop: false }, 0)
        .wait(671)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol36 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol8('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(3.6, 167.8, 1, 1.37, 180, 0, 0, 118.3, 160.5);
    this.instance.alpha = 0.25;

    this.instance_1 = new lib.Symbol8('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-2.1, 16.2, 1, 1, 0, 0, 0, 118.3, 160.5);
    this.instance_1.alpha = 0.5;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 89)
        .to({ state: [] }, 159)
        .wait(652)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol35 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol4('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(0, 3.5, 1, 1, 0, 0, 0, 421.9, 472.4);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(89).to({ _off: false }, 0).to({ _off: true }, 159).wait(652)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol34 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol1('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(-0.4, -539, 1, 1, 0, 0, 0, 98, 143);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(89)
        .to({ _off: false }, 0)
        .to({ y: 113.2 }, 131)
        .wait(1)
        .to({ regY: 170, scaleX: 1, scaleY: 1.01, rotation: -0.1, x: -2, y: 142.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.01, scaleY: 1.02, rotation: -0.3, x: -3.7, y: 145.7 }, 0)
        .wait(1)
        .to({ scaleX: 1.01, scaleY: 1.04, rotation: -0.4, x: -5.4, y: 148.7 }, 0)
        .wait(1)
        .to({ scaleX: 1.02, scaleY: 1.05, rotation: -0.6, x: -7.3, y: 151.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.02, scaleY: 1.07, rotation: -0.7, x: -9.3, y: 155.2 }, 0)
        .wait(1)
        .to({ scaleX: 1.03, scaleY: 1.08, rotation: -0.9, x: -11.4, y: 158.6 }, 0)
        .wait(1)
        .to({ scaleX: 1.03, scaleY: 1.1, rotation: -1.1, x: -13.6, y: 162.3 }, 0)
        .wait(1)
        .to({ scaleX: 1.04, scaleY: 1.12, rotation: -1.3, x: -15.9, y: 166.2 }, 0)
        .wait(1)
        .to({ scaleX: 1.04, scaleY: 1.13, rotation: -1.5, x: -18.3, y: 170.2 }, 0)
        .wait(1)
        .to({ scaleX: 1.05, scaleY: 1.15, rotation: -1.7, x: -20.8, y: 174.4 }, 0)
        .wait(1)
        .to({ scaleX: 1.06, scaleY: 1.17, rotation: -1.9, x: -23.3, y: 178.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.06, scaleY: 1.19, rotation: -2.1, x: -26, y: 183.3 }, 0)
        .wait(1)
        .to({ scaleX: 1.07, scaleY: 1.21, rotation: -2.4, x: -28.8, y: 188.1 }, 0)
        .wait(1)
        .to({ scaleX: 1.08, scaleY: 1.24, rotation: -2.6, x: -31.6, y: 192.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.08, scaleY: 1.26, rotation: -2.9, x: -34.7, y: 198 }, 0)
        .wait(1)
        .to({ scaleX: 1.09, scaleY: 1.28, rotation: -3.1, x: -37.7, y: 203.2 }, 0)
        .wait(1)
        .to({ scaleX: 1.1, scaleY: 1.31, rotation: -3.4, x: -40.9, y: 208.6 }, 0)
        .wait(1)
        .to({ scaleX: 1.11, scaleY: 1.33, rotation: -3.7, x: -44.1, y: 214.2 }, 0)
        .wait(1)
        .to({ scaleX: 1.11, scaleY: 1.36, rotation: -3.9, x: -47.5, y: 219.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.12, scaleY: 1.38, rotation: -4.2, x: -51, y: 225.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.13, scaleY: 1.41, rotation: -4.5, x: -54.5, y: 231.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.14, scaleY: 1.44, rotation: -4.9, x: -58.2, y: 238.2 }, 0)
        .wait(1)
        .to({ scaleX: 1.15, scaleY: 1.47, rotation: -5.2, x: -61.9, y: 244.6 }, 0)
        .wait(1)
        .to({ scaleX: 1.16, scaleY: 1.5, rotation: -5.5, x: -65.7, y: 251.2 }, 0)
        .wait(1)
        .to({ scaleX: 1.17, scaleY: 1.53, rotation: -5.8, x: -69.6, y: 258 }, 0)
        .wait(1)
        .to({ scaleX: 1.18, scaleY: 1.56, rotation: -6.2, x: -73.6, y: 264.9 }, 0)
        .wait(1)
        .to({ regY: 143, scaleX: 1.19, scaleY: 1.59, rotation: -6.5, x: -82.5, y: 229.5 }, 0)
        .to({ _off: true }, 1)
        .wait(652)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol25 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_6
    this.instance = new lib.Symbol63('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(15.8, 15.5, 1, 1, 0, 0, 0, 15.6, 15.6);

    this.instance_1 = new lib.Symbol62('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(17.5, 17.7, 1, 1, 0, 0, 0, 17.5, 17.5);

    this.instance_2 = new lib.Symbol('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(-355.4, 118.6, 1.598, 1.598, 0, 0, 0, 37.5, 37.5);

    this.instance_3 = new lib.Symbol61('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-393.8, 80.5, 1.598, 1.598, 0, 0, 0, 13.8, 13.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] })
        .wait(151)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1182.3, -307.6, 720.2, 292.4);

  (lib.Symbol3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.ClipGroup();
    this.instance.parent = this;
    this.instance.setTransform(24.5, 25.1, 0.51, 0.75, 27.7, 0, 0, 34.6, 34.4);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(85)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 32.9, regY: 33.4, scaleX: 0.63, scaleY: 0.93, x: 24, y: 23.8, alpha: 0.249 }, 0)
        .wait(1)
        .to({ scaleX: 0.75, scaleY: 1.11, x: 23.8, y: 23.6, alpha: 0.496 }, 0)
        .wait(1)
        .to({ scaleX: 0.87, scaleY: 1.28, rotation: 27.6, y: 23.4, alpha: 0.74 }, 0)
        .wait(1)
        .to({ regX: 34.6, regY: 34.4, scaleX: 0.99, scaleY: 1.45, x: 24.5, y: 25.2, alpha: 0.98 }, 0)
        .wait(1)
        .to({ regX: 32.9, regY: 33.4, scaleX: 0.98, scaleY: 1.44, x: 23.7, y: 23.2, alpha: 0.975 }, 0)
        .wait(1)
        .to({ scaleX: 0.97, scaleY: 1.43, alpha: 0.97 }, 0)
        .wait(1)
        .to({ scaleX: 0.97, scaleY: 1.42, y: 23.3, alpha: 0.964 }, 0)
        .wait(1)
        .to({ scaleX: 0.96, scaleY: 1.41, y: 23.2, alpha: 0.959 }, 0)
        .wait(1)
        .to({ scaleX: 0.95, scaleY: 1.4, y: 23.3, alpha: 0.954 }, 0)
        .wait(1)
        .to({ scaleX: 0.95, scaleY: 1.39, alpha: 0.949 }, 0)
        .wait(1)
        .to({ scaleX: 0.94, scaleY: 1.38, alpha: 0.944 }, 0)
        .wait(1)
        .to({ scaleX: 0.93, scaleY: 1.37, alpha: 0.939 }, 0)
        .wait(1)
        .to({ scaleX: 0.93, scaleY: 1.36, alpha: 0.934 }, 0)
        .wait(1)
        .to({ scaleX: 0.92, scaleY: 1.35, alpha: 0.929 }, 0)
        .wait(1)
        .to({ scaleX: 0.91, scaleY: 1.34, y: 23.4, alpha: 0.924 }, 0)
        .wait(1)
        .to({ scaleX: 0.91, scaleY: 1.33, x: 23.8, alpha: 0.919 }, 0)
        .wait(1)
        .to({ scaleX: 0.9, scaleY: 1.32, alpha: 0.915 }, 0)
        .wait(1)
        .to({ scaleX: 0.89, scaleY: 1.32, alpha: 0.91 }, 0)
        .wait(1)
        .to({ scaleX: 0.89, scaleY: 1.31, x: 23.7, alpha: 0.906 }, 0)
        .wait(1)
        .to({ scaleX: 0.88, scaleY: 1.3, alpha: 0.901 }, 0)
        .wait(1)
        .to({ scaleX: 0.88, scaleY: 1.29, x: 23.8, alpha: 0.897 }, 0)
        .wait(1)
        .to({ scaleX: 0.87, scaleY: 1.28, alpha: 0.892 }, 0)
        .wait(1)
        .to({ scaleX: 0.87, scaleY: 1.27, alpha: 0.888 }, 0)
        .wait(1)
        .to({ scaleX: 0.86, scaleY: 1.26, alpha: 0.884 }, 0)
        .wait(1)
        .to({ scaleX: 0.85, scaleY: 1.25, y: 23.5, alpha: 0.88 }, 0)
        .wait(1)
        .to({ scaleX: 0.85, scaleY: 1.25, rotation: 27.7, x: 23.7, y: 23.4, alpha: 0.876 }, 0)
        .wait(1)
        .to({ scaleX: 0.84, scaleY: 1.24, x: 23.8, alpha: 0.872 }, 0)
        .wait(1)
        .to({ scaleX: 0.84, scaleY: 1.23, y: 23.5, alpha: 0.868 }, 0)
        .wait(1)
        .to({ scaleX: 0.83, scaleY: 1.22, alpha: 0.864 }, 0)
        .wait(1)
        .to({ scaleX: 0.83, scaleY: 1.22, alpha: 0.86 }, 0)
        .wait(1)
        .to({ scaleX: 0.82, scaleY: 1.21, alpha: 0.856 }, 0)
        .wait(1)
        .to({ scaleX: 0.82, scaleY: 1.2, alpha: 0.852 }, 0)
        .wait(1)
        .to({ scaleX: 0.81, scaleY: 1.19, alpha: 0.849 }, 0)
        .wait(1)
        .to({ scaleX: 0.81, scaleY: 1.19, y: 23.6, alpha: 0.845 }, 0)
        .wait(1)
        .to({ scaleX: 0.8, scaleY: 1.18, y: 23.5, alpha: 0.842 }, 0)
        .wait(1)
        .to({ scaleX: 0.8, scaleY: 1.17, alpha: 0.838 }, 0)
        .wait(1)
        .to({ scaleX: 0.79, scaleY: 1.17, alpha: 0.835 }, 0)
        .wait(1)
        .to({ scaleX: 0.79, scaleY: 1.16, y: 23.6, alpha: 0.832 }, 0)
        .wait(1)
        .to({ scaleX: 0.79, scaleY: 1.15, x: 23.9, alpha: 0.828 }, 0)
        .wait(1)
        .to({ scaleX: 0.78, scaleY: 1.15, x: 23.8, alpha: 0.825 }, 0)
        .wait(1)
        .to({ scaleX: 0.78, scaleY: 1.14, x: 23.9, alpha: 0.822 }, 0)
        .wait(1)
        .to({ scaleX: 0.77, scaleY: 1.14, x: 23.8, alpha: 0.819 }, 0)
        .wait(1)
        .to({ scaleX: 0.77, scaleY: 1.13, alpha: 0.816 }, 0)
        .wait(1)
        .to({ scaleX: 0.77, scaleY: 1.12, x: 23.9, alpha: 0.813 }, 0)
        .wait(1)
        .to({ scaleX: 0.76, scaleY: 1.12, x: 23.8, alpha: 0.81 }, 0)
        .wait(1)
        .to({ scaleX: 0.76, scaleY: 1.11, y: 23.7, alpha: 0.808 }, 0)
        .wait(1)
        .to({ scaleX: 0.75, scaleY: 1.11, y: 23.6, alpha: 0.805 }, 0)
        .wait(1)
        .to({ scaleX: 0.75, scaleY: 1.1, x: 23.9, alpha: 0.802 }, 0)
        .wait(1)
        .to({ scaleX: 0.75, scaleY: 1.1, x: 23.8, alpha: 0.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.74, scaleY: 1.09, x: 23.9, alpha: 0.797 }, 0)
        .wait(1)
        .to({ scaleX: 0.74, scaleY: 1.09, x: 23.8, alpha: 0.795 }, 0)
        .wait(1)
        .to({ scaleX: 0.74, scaleY: 1.08, x: 23.9, alpha: 0.792 }, 0)
        .wait(1)
        .to({ scaleX: 0.73, scaleY: 1.08, alpha: 0.79 }, 0)
        .wait(1)
        .to({ scaleX: 0.73, scaleY: 1.07, alpha: 0.788 }, 0)
        .wait(1)
        .to({ scaleX: 0.73, scaleY: 1.07, y: 23.7, alpha: 0.786 }, 0)
        .wait(1)
        .to({ scaleX: 0.73, scaleY: 1.07, x: 23.8, alpha: 0.783 }, 0)
        .wait(1)
        .to({ scaleX: 0.72, scaleY: 1.06, x: 23.9, alpha: 0.781 }, 0)
        .wait(1)
        .to({ scaleX: 0.72, scaleY: 1.06, alpha: 0.779 }, 0)
        .wait(1)
        .to({ scaleX: 0.72, scaleY: 1.05, y: 23.6, alpha: 0.777 }, 0)
        .wait(1)
        .to({ scaleX: 0.72, scaleY: 1.05, y: 23.7, alpha: 0.776 }, 0)
        .wait(1)
        .to({ scaleX: 0.71, scaleY: 1.05, alpha: 0.774 }, 0)
        .wait(1)
        .to({ scaleX: 0.71, scaleY: 1.04, alpha: 0.772 }, 0)
        .wait(1)
        .to({ scaleX: 0.71, scaleY: 1.04, alpha: 0.77 }, 0)
        .wait(1)
        .to({ scaleX: 0.71, scaleY: 1.04, alpha: 0.769 }, 0)
        .wait(1)
        .to({ scaleX: 0.7, scaleY: 1.03, alpha: 0.767 }, 0)
        .wait(1)
        .to({ scaleX: 0.7, scaleY: 1.03, alpha: 0.766 }, 0)
        .wait(1)
        .to({ scaleX: 0.7, scaleY: 1.03, alpha: 0.764 }, 0)
        .wait(1)
        .to({ scaleX: 0.7, scaleY: 1.03, x: 23.8, alpha: 0.763 }, 0)
        .wait(1)
        .to({ scaleX: 0.7, scaleY: 1.02, x: 23.9, alpha: 0.762 }, 0)
        .wait(1)
        .to({ scaleX: 0.69, scaleY: 1.02, alpha: 0.761 }, 0)
        .wait(1)
        .to({ scaleX: 0.69, scaleY: 1.02, alpha: 0.759 }, 0)
        .wait(1)
        .to({ scaleX: 0.69, scaleY: 1.02, alpha: 0.758 }, 0)
        .wait(1)
        .to({ scaleX: 0.69, scaleY: 1.01, alpha: 0.757 }, 0)
        .wait(1)
        .to({ scaleX: 0.69, scaleY: 1.01, y: 23.8, alpha: 0.756 }, 0)
        .wait(1)
        .to({ scaleX: 0.69, scaleY: 1.01, y: 23.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.69, scaleY: 1.01, alpha: 0.755 }, 0)
        .wait(1)
        .to({ scaleX: 0.69, scaleY: 1.01, y: 23.8, alpha: 0.754 }, 0)
        .wait(1)
        .to({ scaleX: 0.69, scaleY: 1.01, alpha: 0.753 }, 0)
        .wait(1)
        .to({ scaleX: 0.68, scaleY: 1, y: 23.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.68, scaleY: 1, y: 23.8, alpha: 0.752 }, 0)
        .wait(1)
        .to({ scaleX: 0.68, scaleY: 1, y: 23.7 }, 0)
        .wait(1)
        .to({ scaleY: 1, y: 23.8, alpha: 0.751 }, 0)
        .wait(1)
        .to({ scaleX: 0.68 }, 0)
        .wait(1)
        .to({ scaleY: 1, y: 23.7 }, 0)
        .wait(1)
        .to({ alpha: 0.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.68, scaleY: 1 }, 0)
        .wait(2)
        .to({ regX: 34.5, regY: 34.5, x: 24.4, y: 25.1 }, 0)
        .to({ _off: true }, 23)
        .wait(3)
    );

    // Layer 1
    this.instance_1 = new lib.ClipGroup_14();
    this.instance_1.parent = this;
    this.instance_1.setTransform(23.3, 24, 0.502, 0.502, 0, 0, 0, 186.8, 102.6);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({ _off: true }, 157).wait(3));

    // Layer_5
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.Doctor, null, new cjs.Matrix2D(1, 0, 0, 1, -149.2, -111))
      .s()
      .p(
        'ArmRAQANgPAQgwQAOgsADgZQACgRAPgsQAPguACgPQADgUgMgyIgQg7IgIg6QgGg0gFgUQgFgRgDgnIgDgdIABgCIACgIIAAgHIAAgIIgCgHIgDgIIgCgHIgDgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAFgHIADgIIACgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIADgIIAFgHIACgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIADgIIAFgHIACgIIAAgHIADgIIAFgHIACgIIAAgHIAAgIIAAgHIAAgIIAAgHIADgIIAFgHIACgIIAAgHIAAgIIgCgHIgFgIIgDgHIAAgIIgCgGIgFgIIgFgHIgDgIIAAgBIABgBQAHgEAAgHIgCgMIgDgLQgCgFABgEQACgFAIgCQALgDAFgEQAHgEAGgBIAPgBQAJgCAIgFIANgKIANgIQAHgDALgCQATgCAdgIQARgDAiAFQAQACAXgCQAYgCAIgGQAHgEANgEIAXgHQAJgEATgCIAigEQARgDAEgCIANgLQAPgNARgLIAigbQAKgJABgaQAHgwgBgHQgBgEgLAAIgYAAIgmgCQgMAAgLgIQgLgIgDgJQgGgYAAgZQAAgLgCgPIgEgYQgCgNgFgRQgGgTgGgGQgEgGgDgLQgCgNgCgDQgFgJgpgBQgfACgTgBQgMgBgKgGIgOgKQgGgDgGgBIgPgFIgRgIQgIgFgNgCQgNgCgEgFQgFgGgFgFQgMgLgFg3QgBgMABgVIACgcIACg4IACgWQAFgaAJgTQAJgUASgKQAIgGARgEQAKgDAegCQAggDAZAAIBjAAQAMAAALgFQAJgDAEgFQAJgMADgIQAEgHADgIQADgHALgMQAHgJALgJQAIgHAMgMQAHgGAYgOQAUgLAFgCQAMgFAQgNQAHgFgBgDIgBgGQACgGAhgFQANgCAYADQAWADAJAFQAMAFAVAQQAUAMATAKQAHAEAPAOIASASQAFAEAKABIAUADQAIADANALIAWATQAcATANAaIAFAOQACAGAGAJQAGAKALAGIANAJQAHAHABAbQAAAIAEAVQAEARgCAHQgBAHgGAGIgJAKQgEAFACAEQAAADAGAJIAIAPQAFAHAHAGQAIAGAFAHIANAQQAJAKAJASQADAHABAOIAAAVQAAAIgEAhQAAAJgUAYIgJAMQgEAGgFAEQgKAKgkAGQgHABgLgBQgKAAgFACQgKAEgOAZQgDAFgPAPQgPAPgCAEIgIAPQgDAJABAKQABANACAFQACAGAHAJIANAOIAPAOQALAKAKAPQACADABAEIABAOQABAGAFAGQAGAGABAEQADAIAIARQAFAKAJAjQABAHgBAJQAAAGAFAKQAGANAPAPIAcAZIAaAYQAOAMANAHQAjATAbAMQAWAKASAQQARANADABIATAFIAhAKQAdAKAgAqQAKANAYAqQALAQAUAoQADAFABAKQACALACAGIALAaQAHAQAAAGQABAJAJASQADAGAAAOIAAAVQABAFgBARQAAAQACAGQAKAeAFALQACAFAIAfQACAHAAANQAAANADAIQAFAPAFAcQAFAPAFAWQAGAagCAfQAAAMgFAgQgBAFgFAMQgGAMgCAJIgEARIgGAPQgCAIgJAPQgIAPgBAEQgCAKgMAbQgDAIACAGIAKASIALAUQAEAIAHAGQAPAOACAUQABAWgFANQgCAGgLAKQgLAKgCAHQgDAIAHAGIANAMQAFAGAAAIIAAARQAAANgMASg'
      );
    this.shape.setTransform(160.3, 88);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(39).to({ _off: true }, 157).wait(3));

    // Layer_7
    this.instance_2 = new lib.Tween17('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(58, 155.3, 1, 1, 7.7, 0, 0, 3.1, 54.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(39)
        .to({ startPosition: 0 }, 0)
        .to({ regX: 3, rotation: 0, x: 38.4, y: 142.8 }, 59, cjs.Ease.cubicInOut)
        .to({ _off: true }, 98)
        .wait(3)
    );

    // Layer_6
    this.instance_3 = new lib.Tween18('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(99.9, 98.5, 1, 1, -22.7, 0, 0, 30.5, -18.4);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(39)
        .to({ startPosition: 0 }, 0)
        .to({ regX: 30.4, rotation: 0, x: 99.8 }, 59, cjs.Ease.cubicInOut)
        .to({ _off: true }, 98)
        .wait(3)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-70.4, -27.5, 305, 224.3);

  (lib.ClipGroup_15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_18
    this.instance_19 = new lib.Symbol2copy8('synched', 0, false);
    this.instance_19.parent = this;
    this.instance_19.setTransform(160.1, 15.5, 1, 1, 0, 0, 0, 9.8, 8.4);
    this.instance_19._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(21).to({ _off: false }, 0).wait(99));

    // Layer_19
    this.instance_20 = new lib.Symbol2copy9('synched', 0, false);
    this.instance_20.parent = this;
    this.instance_20.setTransform(137.4, 15.5, 1, 1, 0, 0, 0, 9.8, 8.4);
    this.instance_20._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(18).to({ _off: false }, 0).wait(102));

    // Layer_20
    this.instance_21 = new lib.Symbol2copy5('synched', 0, false);
    this.instance_21.parent = this;
    this.instance_21.setTransform(114.9, 15.5, 1, 1, 0, 0, 0, 9.8, 8.4);
    this.instance_21._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(15).to({ _off: false }, 0).wait(105));

    // Layer_21
    this.instance_22 = new lib.Symbol2copy6('synched', 0, false);
    this.instance_22.parent = this;
    this.instance_22.setTransform(89.3, 15.5, 1, 1, 0, 0, 0, 9.8, 8.4);
    this.instance_22._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(12).to({ _off: false }, 0).wait(108));

    // Layer_22
    this.instance_23 = new lib.Symbol2copy4('synched', 0, false);
    this.instance_23.parent = this;
    this.instance_23.setTransform(80.4, 15.5, 1, 1, 0, 0, 0, 9.8, 8.4);
    this.instance_23._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9).to({ _off: false }, 0).wait(111));

    // Layer_23
    this.instance_24 = new lib.Symbol2copy3('synched', 0, false);
    this.instance_24.parent = this;
    this.instance_24.setTransform(57.8, 15.5, 1, 1, 0, 0, 0, 9.8, 8.4);
    this.instance_24._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(6).to({ _off: false }, 0).wait(114));

    // Layer_24
    this.instance_25 = new lib.Symbol2copy('synched', 0, false);
    this.instance_25.parent = this;
    this.instance_25.setTransform(35.1, 14, 1, 1, 0, 0, 0, 9.8, 8.4);
    this.instance_25._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(3).to({ _off: false }, 0).wait(117));

    // Layer_25
    this.instance_26 = new lib.Symbol2copy2('synched', 0, false);
    this.instance_26.parent = this;
    this.instance_26.setTransform(9.8, 15.5, 1, 1, 0, 0, 0, 9.8, 8.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(120));

    // Layer_5
    this.instance_27 = new lib.Tween11('synched', 0);
    this.instance_27.parent = this;
    this.instance_27.setTransform(195.4, 15.6);
    this.instance_27.alpha = 0;
    this.instance_27._off = true;

    this.instance_28 = new lib.Tween12('synched', 0);
    this.instance_28.parent = this;
    this.instance_28.setTransform(195.4, 15.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance_27 }] }, 69)
        .to({ state: [{ t: this.instance_28 }] }, 50)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_27)
        .wait(69)
        .to({ _off: false }, 0)
        .to({ _off: true, alpha: 1 }, 50, cjs.Ease.get(1))
        .wait(1)
    );

    // Layer_6
    this.instance_29 = new lib.Tween9('synched', 0);
    this.instance_29.parent = this;
    this.instance_29.setTransform(174.8, 15.6, 1, 0.016);
    this.instance_29._off = true;

    this.instance_30 = new lib.Tween10('synched', 0);
    this.instance_30.parent = this;
    this.instance_30.setTransform(174.8, 15.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance_29 }] }, 39)
        .to({ state: [{ t: this.instance_30 }] }, 40)
        .wait(41)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_29)
        .wait(39)
        .to({ _off: false }, 0)
        .to({ _off: true, scaleY: 1 }, 40, cjs.Ease.cubicInOut)
        .wait(41)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2, 7.1, 169.3, 22);

  (lib.Doctor_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol3('synched', 0, false);
    this.instance.parent = this;
    this.instance.setTransform(39.5, 198.5, 1, 1, 0, 0, 0, 113, 111);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(247)
        .to({ _off: false }, 0)
        .to({ y: 158.5, startPosition: 151 }, 151, cjs.Ease.get(1))
        .to({ _off: true }, 45)
        .wait(457)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol60 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_247 = new cjs.Graphics().p('A5tCzILMrLILMLLIrMLMg');
    var mask_graphics_248 = new cjs.Graphics().p('A6sB0INKtIINJNIItJNKg');
    var mask_graphics_249 = new cjs.Graphics().p('A7qA2IPFvEIPFPEIvFPGg');
    var mask_graphics_250 = new cjs.Graphics().p('A8oAAIRAw/IQ/Q/Iw/RAg');
    var mask_graphics_251 = new cjs.Graphics().p('A9lAAIS5y4IS5S4Iy5S5g');
    var mask_graphics_252 = new cjs.Graphics().p('A+iAAIUy0wIUwUwI0wUxg');
    var mask_graphics_253 = new cjs.Graphics().p('A/dAAIWo2nIWmWnI2mWog');
    var mask_graphics_254 = new cjs.Graphics().p('EggYAAAIYd4cIYcYcI4cYdg');
    var mask_graphics_255 = new cjs.Graphics().p('EghTAAAIaR6QIaQaQI6QaRg');
    var mask_graphics_256 = new cjs.Graphics().p('EgiMAAAIcD8CIcCcCI8CcDg');
    var mask_graphics_257 = new cjs.Graphics().p('EgjFAAAId09zId0dzI90d0g');
    var mask_graphics_258 = new cjs.Graphics().p('Egj9AAAIfk/jIfjfjI/jfkg');
    var mask_graphics_259 = new cjs.Graphics().p('Egk1AAAMAhSghRMAhSAhRMghSAhSg');
    var mask_graphics_260 = new cjs.Graphics().p('EglsAAAMAi/gi+MAi/Ai+Mgi/Ai/g');
    var mask_graphics_261 = new cjs.Graphics().p('EgmiAAAMAkrgkqMAkqAkqMgkqAkrg');
    var mask_graphics_262 = new cjs.Graphics().p('EgnYAAAMAmWgmUMAmUAmUMgmUAmVg');
    var mask_graphics_263 = new cjs.Graphics().p('EgoMAAAMAn+gn9MAn9An9Mgn9An+g');
    var mask_graphics_264 = new cjs.Graphics().p('EgplAAAMAplgplMApmAplMgpmApmg');
    var mask_graphics_265 = new cjs.Graphics().p('EgrLAAAMArLgrLMArMArLMgrMArMg');
    var mask_graphics_266 = new cjs.Graphics().p('EgsvAAAMAsvgsvMAswAsvMgswAswg');
    var mask_graphics_267 = new cjs.Graphics().p('EguTAAAMAuTguTMAuUAuTMguUAuUg');
    var mask_graphics_268 = new cjs.Graphics().p('Egv1AAAMAv1gv1MAv2Av1Mgv2Av2g');
    var mask_graphics_269 = new cjs.Graphics().p('EgxVAAAMAxVgxVMAxWAxVMgxWAxWg');
    var mask_graphics_270 = new cjs.Graphics().p('Egy1AAAMAy1gy1MAy2Ay1Mgy2Ay2g');
    var mask_graphics_271 = new cjs.Graphics().p('Eg0SAAAMA0Sg0SMA0TA0SMg0TA0Tg');
    var mask_graphics_272 = new cjs.Graphics().p('Eg1vAAAMA1vg1vMA1wA1vMg1wA1wg');
    var mask_graphics_273 = new cjs.Graphics().p('Eg3KAAAMA3Kg3KMA3LA3KMg3LA3Lg');
    var mask_graphics_274 = new cjs.Graphics().p('Eg4kAAAMA4kg4kMA4lA4kMg4lA4lg');
    var mask_graphics_275 = new cjs.Graphics().p('Eg58AAAMA58g58MA59A58Mg59A59g');
    var mask_graphics_276 = new cjs.Graphics().p('Eg7TAAAMA7Tg7TMA7UA7TMg7UA7Ug');
    var mask_graphics_277 = new cjs.Graphics().p('Eg8pAAAMA8pg8pMA8qA8pMg8qA8qg');
    var mask_graphics_278 = new cjs.Graphics().p('Eg99AAAMA99g99MA9+A99Mg9+A9+g');
    var mask_graphics_279 = new cjs.Graphics().p('Eg/QAAAMA/Qg/QMA/RA/QMg/RA/Rg');
    var mask_graphics_280 = new cjs.Graphics().p('EhAiAAAMBAihAiMBAjBAiMhAjBAjg');
    var mask_graphics_281 = new cjs.Graphics().p('EhByAAAMBByhByMBBzBByMhBzBBzg');
    var mask_graphics_282 = new cjs.Graphics().p('EhDBAAAMBDBhDBMBDCBDBMhDCBDCg');
    var mask_graphics_283 = new cjs.Graphics().p('EhEOAAAMBEOhEOMBEPBEOMhEPBEPg');
    var mask_graphics_284 = new cjs.Graphics().p('EhFaAAAMBFahFaMBFbBFaMhFbBFbg');
    var mask_graphics_285 = new cjs.Graphics().p('EhGlAAAMBGlhGlMBGmBGlMhGmBGmg');
    var mask_graphics_286 = new cjs.Graphics().p('EhHuAAAMBHuhHuMBHvBHuMhHvBHvg');
    var mask_graphics_287 = new cjs.Graphics().p('EhI2AAAMBI2hI2MBI3BI2MhI3BI3g');
    var mask_graphics_288 = new cjs.Graphics().p('EhJ9AAAMBJ9hJ9MBJ+BJ9MhJ+BJ+g');
    var mask_graphics_289 = new cjs.Graphics().p('EhLCAAAMBLChLCMBLDBLCMhLDBLDg');
    var mask_graphics_290 = new cjs.Graphics().p('EhMGAAAMBMGhMGMBMHBMGMhMHBMHg');
    var mask_graphics_291 = new cjs.Graphics().p('EhNIAAAMBNIhNIMBNJBNIMhNJBNJg');
    var mask_graphics_292 = new cjs.Graphics().p('EhOJAAAMBOJhOJMBOKBOJMhOKBOKg');
    var mask_graphics_293 = new cjs.Graphics().p('EhPJAAAMBPJhPJMBPKBPJMhPKBPKg');
    var mask_graphics_294 = new cjs.Graphics().p('EhQIAAAMBQIhQIMBQJBQIMhQJBQJg');
    var mask_graphics_295 = new cjs.Graphics().p('EhRFAAAMBRFhRFMBRGBRFMhRGBRGg');
    var mask_graphics_296 = new cjs.Graphics().p('EhSAAAAMBSAhSAMBSBBSAMhSBBSBg');
    var mask_graphics_297 = new cjs.Graphics().p('EhS6AAAMBS6hS6MBS7BS6MhS7BS7g');
    var mask_graphics_298 = new cjs.Graphics().p('EhTzAAAMBTzhTzMBT0BTzMhT0BT0g');
    var mask_graphics_299 = new cjs.Graphics().p('EhUrAAAMBUrhUrMBUsBUrMhUsBUsg');
    var mask_graphics_300 = new cjs.Graphics().p('EhVhAAAMBVhhVhMBViBVhMhViBVig');
    var mask_graphics_301 = new cjs.Graphics().p('EhWWAAAMBWWhWWMBWXBWWMhWXBWXg');
    var mask_graphics_302 = new cjs.Graphics().p('EhXJAAAMBXJhXJMBXKBXJMhXKBXKg');
    var mask_graphics_303 = new cjs.Graphics().p('EhX7AAAMBX7hX7MBX8BX7MhX8BX8g');
    var mask_graphics_304 = new cjs.Graphics().p('EhYsAAAMBYshYsMBYtBYsMhYtBYtg');
    var mask_graphics_305 = new cjs.Graphics().p('EhZbAAAMBZbhZbMBZcBZbMhZcBZcg');
    var mask_graphics_306 = new cjs.Graphics().p('EhaJAAAMBaJhaJMBaKBaJMhaKBaKg');
    var mask_graphics_307 = new cjs.Graphics().p('Eha2AAAMBa2ha2MBa3Ba2Mha3Ba3g');
    var mask_graphics_308 = new cjs.Graphics().p('EhbhAAAMBbhhbhMBbiBbhMhbiBbig');
    var mask_graphics_309 = new cjs.Graphics().p('EhcKAAAMBcKhcKMBcLBcKMhcLBcLg');
    var mask_graphics_310 = new cjs.Graphics().p('EhczAAAMBczhczMBc0BczMhc0Bc0g');
    var mask_graphics_311 = new cjs.Graphics().p('EhdaAAAMBdahdaMBdbBdaMhdbBdbg');
    var mask_graphics_312 = new cjs.Graphics().p('EheAAAAMBeAheAMBeBBeAMheBBeBg');
    var mask_graphics_313 = new cjs.Graphics().p('EhekAAAMBekhekMBelBekMhelBelg');
    var mask_graphics_314 = new cjs.Graphics().p('EhfHAAAMBfHhfHMBfIBfHMhfIBfIg');
    var mask_graphics_315 = new cjs.Graphics().p('EhfpAAAMBfphfpMBfqBfpMhfqBfqg');
    var mask_graphics_316 = new cjs.Graphics().p('EhgJAAAMBgJhgJMBgKBgJMhgKBgKg');
    var mask_graphics_317 = new cjs.Graphics().p('EhgoAAAMBgohgoMBgpBgoMhgpBgpg');
    var mask_graphics_318 = new cjs.Graphics().p('EhhFAAAMBhFhhFMBhGBhFMhhGBhGg');
    var mask_graphics_319 = new cjs.Graphics().p('EhhhAAAMBhhhhhMBhiBhhMhhiBhig');
    var mask_graphics_320 = new cjs.Graphics().p('Ehh8AAAMBh8hh8MBh9Bh8Mhh9Bh9g');
    var mask_graphics_321 = new cjs.Graphics().p('EhiVAAAMBiVhiVMBiWBiVMhiWBiWg');
    var mask_graphics_322 = new cjs.Graphics().p('EhitAAAMBithitMBiuBitMhiuBiug');
    var mask_graphics_323 = new cjs.Graphics().p('EhjEAAAMBjEhjEMBjFBjEMhjFBjFg');
    var mask_graphics_324 = new cjs.Graphics().p('EhjZAAAMBjZhjZMBjaBjZMhjaBjag');
    var mask_graphics_325 = new cjs.Graphics().p('EhjtAAAMBjthjtMBjuBjtMhjuBjug');
    var mask_graphics_326 = new cjs.Graphics().p('Ehj/AAAMBj/hj/MBkABj/MhkABkAg');
    var mask_graphics_327 = new cjs.Graphics().p('EhkRAAAMBkRhkRMBkSBkRMhkSBkSg');
    var mask_graphics_328 = new cjs.Graphics().p('EhkgAAAMBkghkgMBkhBkgMhkhBkhg');
    var mask_graphics_329 = new cjs.Graphics().p('EhkvAAAMBkvhkvMBkwBkvMhkwBkwg');
    var mask_graphics_330 = new cjs.Graphics().p('Ehk8AAAMBk8hk8MBk9Bk8Mhk9Bk9g');
    var mask_graphics_331 = new cjs.Graphics().p('EhlHAAAMBlHhlHMBlIBlHMhlIBlIg');
    var mask_graphics_332 = new cjs.Graphics().p('EhlSAAAMBlShlSMBlTBlSMhlTBlTg');
    var mask_graphics_333 = new cjs.Graphics().p('EhlbAAAMBlbhlbMBlcBlbMhlcBlcg');
    var mask_graphics_334 = new cjs.Graphics().p('EhliAAAMBlihliMBljBliMhljBljg');
    var mask_graphics_335 = new cjs.Graphics().p('EhloAAAMBlohloMBlpBloMhlpBlpg');
    var mask_graphics_336 = new cjs.Graphics().p('EhltAAAMBlthltMBluBltMhluBlug');
    var mask_graphics_337 = new cjs.Graphics().p('EhlxAAAMBlxhlxMBlyBlxMhlyBlyg');
    var mask_graphics_338 = new cjs.Graphics().p('EhlzAAAMBlzhlzMBl0BlzMhl0Bl0g');
    var mask_graphics_339 = new cjs.Graphics().p('EhlzAAAMBlzhlzMBl0BlzMhl0Bl0g');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(247)
        .to({ graphics: mask_graphics_247, x: -164.6, y: 89.5 })
        .wait(1)
        .to({ graphics: mask_graphics_248, x: -170.9, y: 95.8 })
        .wait(1)
        .to({ graphics: mask_graphics_249, x: -177.1, y: 102 })
        .wait(1)
        .to({ graphics: mask_graphics_250, x: -183.3, y: 107.4 })
        .wait(1)
        .to({ graphics: mask_graphics_251, x: -189.4, y: 107.4 })
        .wait(1)
        .to({ graphics: mask_graphics_252, x: -195.5, y: 107.3 })
        .wait(1)
        .to({ graphics: mask_graphics_253, x: -201.4, y: 107.3 })
        .wait(1)
        .to({ graphics: mask_graphics_254, x: -207.3, y: 107.3 })
        .wait(1)
        .to({ graphics: mask_graphics_255, x: -213.2, y: 107.3 })
        .wait(1)
        .to({ graphics: mask_graphics_256, x: -218.9, y: 107.3 })
        .wait(1)
        .to({ graphics: mask_graphics_257, x: -224.6, y: 107.2 })
        .wait(1)
        .to({ graphics: mask_graphics_258, x: -230.2, y: 107.2 })
        .wait(1)
        .to({ graphics: mask_graphics_259, x: -235.8, y: 107.2 })
        .wait(1)
        .to({ graphics: mask_graphics_260, x: -241.3, y: 107.2 })
        .wait(1)
        .to({ graphics: mask_graphics_261, x: -246.7, y: 107.2 })
        .wait(1)
        .to({ graphics: mask_graphics_262, x: -252.1, y: 107.1 })
        .wait(1)
        .to({ graphics: mask_graphics_263, x: -257.3, y: 107.1 })
        .wait(1)
        .to({ graphics: mask_graphics_264, x: -258.9, y: 107.1 })
        .wait(1)
        .to({ graphics: mask_graphics_265, x: -259, y: 107.1 })
        .wait(1)
        .to({ graphics: mask_graphics_266, x: -259.1, y: 107.1 })
        .wait(1)
        .to({ graphics: mask_graphics_267, x: -259.2, y: 107.1 })
        .wait(1)
        .to({ graphics: mask_graphics_268, x: -259.2, y: 107 })
        .wait(1)
        .to({ graphics: mask_graphics_269, x: -259.3, y: 107 })
        .wait(1)
        .to({ graphics: mask_graphics_270, x: -259.4, y: 107 })
        .wait(1)
        .to({ graphics: mask_graphics_271, x: -259.4, y: 107 })
        .wait(1)
        .to({ graphics: mask_graphics_272, x: -259.5, y: 107 })
        .wait(1)
        .to({ graphics: mask_graphics_273, x: -259.6, y: 107 })
        .wait(1)
        .to({ graphics: mask_graphics_274, x: -259.6, y: 106.9 })
        .wait(1)
        .to({ graphics: mask_graphics_275, x: -259.7, y: 106.9 })
        .wait(1)
        .to({ graphics: mask_graphics_276, x: -259.8, y: 106.9 })
        .wait(1)
        .to({ graphics: mask_graphics_277, x: -259.8, y: 106.9 })
        .wait(1)
        .to({ graphics: mask_graphics_278, x: -259.9, y: 106.9 })
        .wait(1)
        .to({ graphics: mask_graphics_279, x: -259.9, y: 106.9 })
        .wait(1)
        .to({ graphics: mask_graphics_280, x: -260, y: 106.9 })
        .wait(1)
        .to({ graphics: mask_graphics_281, x: -260.1, y: 106.8 })
        .wait(1)
        .to({ graphics: mask_graphics_282, x: -260.1, y: 106.8 })
        .wait(1)
        .to({ graphics: mask_graphics_283, x: -260.2, y: 106.8 })
        .wait(1)
        .to({ graphics: mask_graphics_284, x: -260.2, y: 106.8 })
        .wait(1)
        .to({ graphics: mask_graphics_285, x: -260.3, y: 106.8 })
        .wait(1)
        .to({ graphics: mask_graphics_286, x: -260.3, y: 106.8 })
        .wait(1)
        .to({ graphics: mask_graphics_287, x: -260.4, y: 106.8 })
        .wait(1)
        .to({ graphics: mask_graphics_288, x: -260.4, y: 106.7 })
        .wait(1)
        .to({ graphics: mask_graphics_289, x: -260.5, y: 106.7 })
        .wait(1)
        .to({ graphics: mask_graphics_290, x: -260.5, y: 106.7 })
        .wait(1)
        .to({ graphics: mask_graphics_291, x: -260.6, y: 106.7 })
        .wait(1)
        .to({ graphics: mask_graphics_292, x: -260.6, y: 106.7 })
        .wait(1)
        .to({ graphics: mask_graphics_293, x: -260.7, y: 106.7 })
        .wait(1)
        .to({ graphics: mask_graphics_294, x: -260.7, y: 106.7 })
        .wait(1)
        .to({ graphics: mask_graphics_295, x: -260.8, y: 106.7 })
        .wait(1)
        .to({ graphics: mask_graphics_296, x: -260.8, y: 106.7 })
        .wait(1)
        .to({ graphics: mask_graphics_297, x: -260.9, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_298, x: -260.9, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_299, x: -260.9, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_300, x: -261, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_301, x: -261, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_302, x: -261, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_303, x: -261.1, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_304, x: -261.1, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_305, x: -261.2, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_306, x: -261.2, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_307, x: -261.2, y: 106.6 })
        .wait(1)
        .to({ graphics: mask_graphics_308, x: -261.2, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_309, x: -261.3, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_310, x: -261.3, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_311, x: -261.3, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_312, x: -261.4, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_313, x: -261.4, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_314, x: -261.4, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_315, x: -261.4, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_316, x: -261.5, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_317, x: -261.5, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_318, x: -261.5, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_319, x: -261.5, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_320, x: -261.5, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_321, x: -261.6, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_322, x: -261.6, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_323, x: -261.6, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_324, x: -261.6, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_325, x: -261.6, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_326, x: -261.6, y: 106.5 })
        .wait(1)
        .to({ graphics: mask_graphics_327, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_328, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_329, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_330, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_331, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_332, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_333, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_334, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_335, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_336, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_337, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_338, x: -261.7, y: 106.4 })
        .wait(1)
        .to({ graphics: mask_graphics_339, x: -260.3, y: 108.7 })
        .wait(104)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(520)
    );

    // Gr
    this.instance = new lib.Symbol43('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(-77.8, -7.4, 2.329, 1.126, -13, 0, 0, 17.9, 17.9);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(963));

    // Doctor
    this.instance_1 = new lib.Doctor_1('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(15, 15, 1, 1, 0, 0, 0, 15, 15);

    var maskedShapeInstanceList = [this.instance_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(963));

    // Scheme
    this.instance_2 = new lib.Scheme('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(-328.5, 86.5, 1, 1, 0, 90, -90, 13.5, 13.5);

    var maskedShapeInstanceList = [this.instance_2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(963));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol58 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol25('synched', 0, false);
    this.instance.parent = this;
    this.instance.setTransform(0.3, 66, 1, 1, 0, 0, 0, 122, 57.6);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(699).to({ _off: false }, 0).wait(264));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol56 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol50();
    this.instance.parent = this;
    this.instance.setTransform(-4.3, 238.8, 1, 1, 0, 0, 0, 118.3, 59.6);
    this.instance._off = true;
    new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol50(), 3);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(779).to({ _off: false }, 0).wait(184));

    // Learn More
    this.instance_1 = new lib.Symbol27('synched', 0, false);
    this.instance_1.parent = this;
    this.instance_1.setTransform(0, 211.1, 1, 1, 0, 0, 0, 121, 31.5);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(719).to({ _off: false }, 0).wait(244));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  (lib.Symbol40 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Txt3
    this.instance = new lib.Symbol39('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(22.1, 14.9, 1, 1, 0, 0, 0, 23.5, 15);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(900));

    // Txt2
    this.instance_1 = new lib.Symbol38('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(19.6, 14, 1, 1, 0, 0, 0, 20, 14);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(900));

    // Txt1
    this.instance_2 = new lib.Symbol37('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(26.5, 26.5, 1, 1, 0, 0, 0, 26.5, 26.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(900));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  // stage content:
  (lib._970_250 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Handle Clicks
    this.on('click', function (evt) {
      if (evt.target instanceof lib.Symbol28) {
        // Click on Disclaimer
        return;
      }

      window.open('https://bit.ly/3gagMbP', '_blank');
    });

    // timeline functions:
    this.frame_1799 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(1799).call(this.frame_1799).wait(1));

    // Out
    this.instance = new lib.Symbol54('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(529.4, -198.6, 3.403, 0.137, 0, 0, 0, 17.2, 163.2);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1800));

    // Logo
    this.instance_1 = new lib.ClipGroup_15('synched', 0, false);
    this.instance_1.parent = this;
    this.instance_1.setTransform(187.2, 55.5, 1.359, 1.359, 0, 0, 0, 104.2, 15.7);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1800));

    // Disclaimer
    this.instance_2 = new lib.Symbol28();
    this.instance_2.parent = this;
    this.instance_2.setTransform(186.1, -54, 1, 1, 0, 0, 0, 150, 300);
    new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol28(), 3);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1800));

    // Line
    this.instance_3 = new lib.Symbol59('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(659.9, 184.7, 1, 1, 0, 0, 0, 13, 17.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1800));

    // TheFirst
    this.instance_4 = new lib.Symbol58('synched', 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(835.4, 134.5, 0.828, 0.828, 0, 0, 0, 12, 18.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1800));

    // FIVG
    this.instance_5 = new lib.Symbol57('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(661.1, 187.2, 1, 1, 0, 0, 0, 12, 12);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1800));

    // Button
    this.instance_6 = new lib.Symbol56('synched', 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(205.9, -55.8, 1, 1, 0, 0, 0, 13, 13);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1800));

    // 5G
    this.instance_7 = new lib.Symbol41('synched', 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(520.3, 207.6, 1.078, 1.078, 0, 0, 0, 12.6, 12.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1800));

    // Txt
    this.instance_8 = new lib.Symbol40('synched', 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(209.2, -92, 1.2, 1.2, 0, 0, 0, 15, 15);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1800));

    // Gradient
    this.instance_9 = new lib.Symbol42('synched', 0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(596.5, 146.5, 1, 1, 0, 0, 0, 21.5, 21.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1800));

    // Layer_9
    this.instance_10 = new lib.Symbol53('synched', 0);
    this.instance_10.parent = this;
    this.instance_10.setTransform(639.1, 281.4, 1, 1, 38.9, 0, 0, 26.1, 26);

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1800));

    // Earth
    this.instance_11 = new lib.Symbol52('synched', 0);
    this.instance_11.parent = this;
    this.instance_11.setTransform(507, 7, 1, 1, 0, 0, 0, 12, 12);

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1800));

    // Stars
    this.instance_12 = new lib.Symbol51('synched', 0);
    this.instance_12.parent = this;
    this.instance_12.setTransform(502.1, 140.1, 1.082, 1.082, 0, 0, 0, 15.2, 15.2);

    this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1800));

    // Layer_1
    this.instance_13 = new lib.Symbol60('synched', 0);
    this.instance_13.parent = this;
    this.instance_13.setTransform(811, 36.6, 1, 1, 0, 0, 0, 19.5, 19.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1800));

    // Lights
    this.instance_14 = new lib.Symbol36('synched', 0);
    this.instance_14.parent = this;
    this.instance_14.setTransform(550.5, 173.6, 1, 1, 0, 0, 0, 25.5, 25.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1800));

    // Clouds
    this.instance_15 = new lib.Symbol35('synched', 0);
    this.instance_15.parent = this;
    this.instance_15.setTransform(636.5, 148.6, 1, 1, 0, 0, 0, 21.5, 21.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1800));

    // Plane
    this.instance_16 = new lib.Symbol34('synched', 0);
    this.instance_16.parent = this;
    this.instance_16.setTransform(831, 147, 1, 1, 0, 0, 0, 22, 22);

    this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1800));

    // Town
    this.instance_17 = new lib.Symbol33('synched', 0);
    this.instance_17.parent = this;
    this.instance_17.setTransform(503.5, 155, 1, 1.516, 0, 0, 0, 18.5, 18.7);

    this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1800));

    // BG
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#101623').s().p('EhLxATiMAAAgnDMCXjAAAMAAAAnDg');
    this.shape.setTransform(485, 125);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1800));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(483.1, 51.9, 976.2, 380.4);
  // library properties:
  lib.properties = {
    id: 'EC91F313F269401DB7AF44B7DDC9ED1E',
    width: 970,
    height: 250,
    fps: 60,
    color: '#000000',
    opacity: 1.0,
    manifest: [
      { src: 'images/BG2.jpg', id: 'BG2' },
      { src: 'images/Cloud.png', id: 'Cloud' },
      { src: 'images/Doctor.jpg', id: 'Doctor' },
      { src: 'images/Earthjpgcopy.jpg', id: 'Earthjpgcopy' },
      { src: 'images/Plane.jpg', id: 'Plane' },
      { src: 'images/Satellite.jpg', id: 'Satellite' },
      { src: 'images/Stars.jpg', id: 'Stars' },
      { src: 'images/Town.jpg', id: 'Town' },
    ],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['EC91F313F269401DB7AF44B7DDC9ED1E'] = {
    getStage: function () {
      return exportRoot.getStage();
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
