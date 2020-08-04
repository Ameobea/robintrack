(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  // symbols:

  (lib.BG = function () {
    this.initialize(img.BG);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 300, 600); // helper functions:

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

  (lib.Tween17 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('rgba(229,176,68,0.349)')
      .s()
      .p(
        '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'
      );

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-26.6, -725.9, 53.2, 1451.9);

  (lib.Tween16 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.9);

  (lib.Tween15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.8);

  (lib.Tween14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.9);

  (lib.Tween13 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.8);

  (lib.Tween12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween11 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.8);

  (lib.Tween9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.8);

  (lib.Tween8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.8);

  (lib.Tween7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.9);

  (lib.Tween4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

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

  (lib.Symbol8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(['#E5B044', 'rgba(229,176,68,0)'], [0, 1], 0, 0, 0, 0, 0, 102.8)
      .s()
      .p('ArRLSQkrksAAmmQAAmlErksQEskrGlAAQGmAAEsErQErEsAAGlQAAGmkrEsQksErmmAAQmlAAkskrg');
    this.shape.setTransform(102.1, 102.1);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 204.1, 204.1);

  (lib.Symbol5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        ['rgba(255,255,255,0)', 'rgba(255,255,255,0.49)', '#FFFFFF', 'rgba(255,255,255,0.443)', 'rgba(255,255,255,0)'],
        [0, 0.427, 0.486, 0.549, 1],
        -0.1,
        69.5,
        -0.1,
        -69.4
      )
      .s()
      .p('Az/K3IAA1tMAn+AAAIAAVtg');
    this.shape.setTransform(128, 69.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 255.9, 139);

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

  (lib.Symbol7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_4 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      'APFI0Ii5hrIAAk1IDgAAIAADgIEIAAIAAunIDgAAIAAP8Ii6BrgAhbItIAAxgIJdAAIC6BrIAAFgIiLBQIAAADICLBPIAAGHIi6BsgACDFsIFZAAIAAkjIlZAAgACDh2IFZAAIAAj9IlZAAgAw0ItIAAxgIJfAAIC6BrIAAFgIiMBQIAAADICMBPIAAGHIi6BsgAtTFsIFXAAIAAkjIlXAAgAtTh2IFXAAIAAj9IlXAAgA3TItIAAxgIDfAAIAARgg'
    );
    mask.setTransform(128.7, 75.8);

    // Layer_3
    this.instance = new lib.Symbol26();
    this.instance.parent = this;
    this.instance.setTransform(-162.5, 76.4, 1.688, 2.064, 0, 39.9, 0, 55.5, 38.4);
    this.instance.alpha = 0.301;
    this.instance.compositeOperation = 'lighter';

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 416.9 }, 179, cjs.Ease.quintInOut).wait(1));

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AiIHDIiUhVIAAj3IC0AAIAACzIDRAAIAArsIC0AAIAAMwIiUBVg');
    this.shape.setTransform(242.3, 75.8, 1.25, 1.25);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#E5B044')
      .s()
      .p('Ak8HAIAAt/IHkAAICVBWIAAEZIhvBAIAAADIBvA/IAAE4IiVBWgAiJEmIETAAIAAjpIkTAAgAiJhbIETAAIAAjKIkTAAg');
    this.shape_1.setTransform(159.1, 75.4, 1.25, 1.25);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f('#E5B044')
      .s()
      .p('Ak8HAIAAt/IHlAAICUBWIAAEZIhwBAIAAADIBwA/IAAE4IiUBWgAiIEmIERAAIAAjpIkRAAgAiIhbIERAAIAAjKIkRAAg');
    this.shape_2.setTransform(60.7, 75.4, 1.25, 1.25);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#E5B044').s().p('AhZHAIAAt/ICzAAIAAN/g');
    this.shape_3.setTransform(-9.3, 75.4, 1.25, 1.25);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(180)
    );

    // Layer_1
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f('#E5B044')
      .s()
      .p(
        'AFlMEIg9g9IpQAAIg8A9IsuAAIgdgdIhVAAIAAgIIBYAAIAdAdIMoAAIA8g8IJWAAIA9A8IMnAAIAdgdIBZAAIAAAIIhVAAIgeAdgAkqq/Ig9g9IsoAAIgdAeIhbAAIAAgHIBYAAIAdgeIMuAAIA8A8IJQAAIA9g8IMtAAIAeAeIBXAAIAAAHIhbAAIgdgeIsnAAIg9A9gAkZrhIgXgXIJhAAIgXAXg'
      );
    this.shape_4.setTransform(128.8, 77.2);

    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(180));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-20.5, 0, 298.5, 154.4);

  (lib.Symbol4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      'EgCmAiNQgIgIgBgMIACgJIiMhOIgDADQgIAGgLABQgMAAgJgIQgJgJAAgMQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgNIABgJIiMhOIgDADQgIAHgLAAQgMAAgJgIQgIgIgBgMQAAgHADgGQACgFAFgFQAGgFAHgBIgDieQgHgCgHgGQgJgIAAgMQAAgNAKgKQAIgHALAAQALAAAJAHICLhTIgBgJQAAgGACgGQADgGAEgEQAGgFAHgCIgCieQgIgBgHgGQgJgJAAgMIABgIIiMhOIgCACQgIAHgLABQgNAAgIgJQgJgJAAgLQAAgHACgGQADgGAFgEQAGgFAHgBIgDihQgIgCgHgGQgJgIAAgNIACgIIiMhOIgDADQgIAIgLAAQgMAAgJgJQgJgIAAgMQAAgGACgGQADgGAFgEQAGgFAHgCIgDieQgKgBgJgIQgIgIAAgMQAAgOAJgJQAIgHALAAQAMgBAJAJIABABICOhUIgCgKQAAgNAKgIQAIgIALAAQAMgBAJAJQAJAJAAAMIgBAJICNBOIABgBQAIgHALAAQAMgBAJAJQAJAIAAANQAAANgKAIQgFAGgIABIADCgQAIABAGAHQAJAIAAAMQABAFgCAEICNBOIACgDQAIgGALgBQAMAAAJAIIAEAFICHhQIgCgJQAAgOAJgIQAGgGAHgBIgDifQgIgBgFgHQgJgIAAgMQgBgHADgFQACgHAFgDQAIgIAKAAQAMAAAIAIICLhUIgBgDQAAgNAKgJQAGgFAHgBIgDihQgIgCgGgGQgJgJAAgMIABgIIiKhOIgFAFQgIAHgLAAQgLABgIgJQgJgJAAgMQgBgNAKgJQAGgFAGgCIgCiiQgHgBgHgHQgJgIAAgMQAAgGADgHQACgFAFgFQAIgGAKgBQAMAAAJAIIABACICJhTQgBgEAAgFQAAgHACgFQADgGAEgEQAGgFAHgCIgCieQgIgCgHgGQgJgIAAgNIACgJIiOhPIgBABQgIAIgKAAQgMgBgJgHQgJgJAAgMQAAgHACgGQADgFAFgEQAGgFAHgCIgDibQgIgBgGgHQgJgIAAgMQAAgFABgEIiOhPIgBAAQgIAIgLAAQgMAAgJgIQgJgIAAgMQAAgOAKgJQAGgFAHgCIgDidQgIgBgGgHQgJgIAAgMQAAgHACgFQADgGAFgFQAIgHALAAQAMgBAIAJIABABICKhSIgBgJQgBgGADgHQADgFAEgFQAGgFAHgBIgDieQgIgBgGgGQgJgIAAgNIABgIIiMhOIgCACQgIAHgLAAQgMAAgJgIQgJgIAAgMQAAgOAKgJQAGgFAGgBIgCieQgIgBgHgHQgJgJAAgLIACgJIiOhPIgBAAQgIAIgLAAQgMAAgJgJQgJgIAAgMQAAgGADgGQACgGAFgEQAGgFAHgCIgDiZQgIgBgGgGQgJgKAAgLQAAgNAJgKQAIgGAMgBQALAAAIAGICMhTIgCgJQAAgHADgGQACgFAFgFQAIgHALAAQAMgBAJAJQAJAIAAANIgBAJICPBPQAIgHAKAAQAMgBAJAJQAIAJAAAMQAAAGgCAGQgCAFgFAFQgFAFgHACIACCZQAIACAHAGQAHAIABAMIgBAJICNBPIABAAQAIgIALAAQAMAAAIAHICKhTIAAgCQAAgNAKgJQAGgFAHgCIgDilQgIgBgHgHQgIgIgBgMQAAgGADgGQACgGAFgEQAIgIALAAQAMAAAJAIIABACICKhTIgCgJQAAgGACgGQADgFAFgFQAIgHALgBQAMABAJAIQAIAIABAMIgBAJICMBOIACgCQAIgHALAAQAMgBAJAJQAJAIAAAMQAAAOgKAIQgGAFgHACIADCeQAIABAGAHQAJAHAAANQAAAGgCAGQgDAGgEAEQgJAHgLAAQgLABgJgIIiLBTIACAKQAAANgKAJQgGAFgHACIADCdQAIABAGAGQAJAJAAAMIAAAGICLBOIACgDQAJgGALgBQAMAAAIAJQAJAIAAAMQAAAGgCAGQgDAGgEAEQgGAFgHACIACCgQAJACAGAGQAIAJABAMQAAAMgKAKQgIAHgLAAQgMABgJgJIgBgBIiJBSIABAJQAAAHgCAGQgDAFgFAFQgFAFgHACIACCdQAJABAGAGQAIAJABAMQAAAGgDAGQgCAGgFAFQgIAGgLABQgLAAgJgIIiMBUQACAEAAAFQAAANgKAJQgFAFgIACIADCaQAIACAHAGQAIAIAAANIgBAJICOBPIABgBQAIgHALgBQAMAAAJAJQAIAIABANQAAAMgKAJQgGAGgHABIADCeQAIABAGAGQAJAJAAAMQAAANgKAKQgIAHgLAAQgMAAgIgIIgBgBIiKBSQABAEAAAFQABANgKAJQgGAFgHACIACCdQAJACAGAGQAJAJAAAMQAAAEgBAFICOBPIAAgBQAJgHAKAAQANgBAIAJQAJAIAAAMQAAAOgKAIQgFAGgHABIACCaQALAAAJAIQAJAJAAAMQAAANgKAKQgIAHgLAAQgMAAgJgIIgBgBIiOBVIABAJQAAANgKAJQgFAFgIACIADCdQAIACAHAGQAIAIAAAMQABAHgDAFQgCAHgFAEQgJAHgKAAQgMABgJgJIgBgBIiKBSQACAFAAAFQAAAGgDAGQgCAFgFAEQgFAGgIABIADCbQAIACAGAGQAJAIAAAMIgBAJICMBPIADgDQAIgIALABQAMgBAIAJQAJAIAAAMQAAAOgJAIQgGAGgHABIACCeQAJABAGAGQAJAJAAAMQAAAFgBAEICNBPIABgBQAJgHAKAAQAMgBAJAJQAJAJAAAMQAAANgKAIQgFAGgIACIADCdQAJABAGAHQAIAIABANQAAAGgDAFQgCAGgFAEQgIAIgLAAQgMAAgJgIIgBgBIiJBSIABAJQAAAGgDAGQgCAGgFAFQgIAHgLAAQgMAAgJgJQgJgIAAgMIACgJIiMhOIgDADQgIAHgLAAQgMABgJgJQgJgIAAgNQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgMIABgKIiMhNIgDACQgIAHgLABQgMAAgJgJIAAgBIiJBTIABAIQABAOgKAJQgGAFgHACIADCbQAIABAGAGQAJAJAAAMIgBAJICLBNIACgCQAIgHALgBQAMAAAJAJQAJAJAAALQAAAOgKAJQgFAFgIACIADCfQAJACAGAGQAJAIAAANQAAAHgCAGQgDAFgFAEQgIAIgLAAQgNAAgIgIIgBgBIiIBSIABAJQAAAGgDAGQgCAGgFAEQgIAIgLgBQgMAAgJgIgAk3cuIABAJQAAANgJAKQgGAFgHABIACCeQAJABAGAGQAIAJABAMQAAAFgCAEICNBOIACgCQAIgIALAAQAMAAAJAJIABAAICIhSIgCgJQAAgNAKgKQAGgFAIgCIgDifQgIgCgHgGQgIgJgBgLIACgKIiLhNIgDACQgIAHgLABQgLAAgJgIgAn6XsQADAFAAAGQAAAGgDAGQgDAFgEAFQgGAFgHACIACCdQAJACAGAGQAJAIAAANQAAAEgBAFICMBNIACgCQAJgIAKAAQANAAAIAIICLhTQgCgFAAgEQAAgNAKgKQAGgFAHgBIgDibQgIgCgGgFQgJgJAAgNIABgIIiOhPIgBABQgIAGgLABQgMAAgIgJIgBAAgAD4XiIABAIQABAOgKAJQgGAFgHACIADCdQAIACAGAGQAIAIABAMIgBAJICMBOIACgCQAIgHALAAQAMgBAJAJIABABICKhSIgCgJQAAgHACgGQADgGAFgEQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgMQAAgHACgFIiNhOIgDACQgIAIgLgBQgMABgIgIgAiIXcIACABICIhSIgBgJQgBgOAKgJQAGgFAHgBIgDihQgHgBgHgGQgIgJAAgMIAAgDIiPhQQgHAGgKAAQgNAAgIgIIgBgBIiKBTIACAIQAAANgKAKQgFAFgIABIADCeQAIABAGAHQAJAIAAAMIgBAJICOBPIABAAQAIgIALAAIABAAQALAAAIAIgAA4SkIAAADQAAANgKAKQgGAEgHACIADChQAIABAGAGQAJAIAAANIgBAJICMBOIACgDQAJgHAKgBQANABAIAHICLhTQgCgEAAgFQAAgOAKgJQAGgEAHgCIgDieQgIgBgGgHQgJgHAAgNIABgJIiMhOIgCADQgJAHgLAAQgJAAgIgFgAoDNiIABAHQAAAOgKAJQgFAFgIACIADCgQAIACAHAGQAIAJAAALQABAGgCAFICMBNIADgDQAIgHALAAQAMAAAJAIIABABICJhSIgBgJQAAgOAKgJQAGgFAGgBIgCigQgIgBgHgHQgJgIAAgMIACgJIiNhOIgCACQgIAIgLAAQgNAAgIgJIgBAAgAiJNhIAAAEQAAANgKAJQgFAFgIACIADCfQAIACAGAGQAJAJAAAMIgBAJICLBNIADgCQAIgIALAAQAMAAAJAIIABABICJhSQgBgEAAgFQgBgGADgGQADgFAEgFQAHgFAGgCIgCiaQgIgCgHgGQgJgIAAgMIABgIIiMhOIgCACQgIAHgLAAQgMABgIgJIgBgBgArJIgIABAJQAAAGgCAGQgDAFgFAFQgEAEgFACIADCgQAIACAHAFQAIAJAAAMIAAAIICMBOIACgCQAIgIALAAQAMAAAJAIIABABICJhSIgBgIQAAgNAJgJQAGgFAIgCIgDigQgIgBgHgGQgJgJAAgLQAAgHACgFIiMhOIgDADQgIAHgLAAQgMAAgJgIIgBgBgAArIYQACAFAAAGQAAANgKAJQgFAFgHACIACCfQAIABAHAHQAIAIABAMIgBAIICLBOIADgDQAIgHALgBQAMAAAJAJIABABICJhTIgBgJQAAgNAKgIQAFgGAIgBIgDieQgIgBgHgGQgIgJgBgMIACgJIiKhNIgFAEQgIAIgLAAQgMAAgJgIIgEgFgAGdIIIABABICPhVQgCgEAAgFQAAgGADgGQACgGAFgEIAIgFIgDidQgIgBgGgHQgJgIAAgMQAAgGACgFIiNhPIgDADQgIAHgLAAQgLAAgJgHIiLBTQABAFAAAFQABAMgKAJQgGAGgHACIADCgQAIACAGAGQAJAIAAANIAAADICNBOIAAAAQAIgIALAAQAMAAAJAIgAAhhvIACAJQAAANgKAJQgGAFgHACIADCiQAIACAGAGQAJAIAAAMIAAAHICLBOIACgDQAJgIALAAQALAAAJAIICLhTQgCgEAAgGQAAgNAKgIQAGgGAHgBIgCieQgIgBgHgHQgJgIAAgMIABgJIiLhNIgDADQgJAGgLABQgMAAgIgIIgBgBgADYm3IACAJQAAAGgDAHQgCAFgFAFQgFAFgIABIADCfQAIACAGAFQAJAJAAAMIAAAIICLBOIADgCQAIgIALAAQAMAAAIAJIABABICKhTQgBgEAAgFQgBgGADgHQACgFAFgFQAGgEAHgCIgCidQgIgCgHgGQgJgJAAgMQAAgGACgFIiNhOIgCACQgIAHgLABQgLAAgJgIgAAXr3IABAJQAAAHgCAFQgDAGgFAEQgFAFgHACIACCaQAIACAHAHQAIAIABAMQAAAGgCAFICNBOIACgCQAIgHALgBQAMAAAIAIICMhTIgCgJQAAgHACgGQADgFAFgFQAGgFAGgBIgCibQgIgBgHgHQgIgIgBgMIACgJIiOhPIgBAAQgIAIgLAAQgLAAgJgIgAiqw6QABAEAAAFQABANgKAJQgGAFgHACIACCdQAJACAGAGQAJAIAAANQAAAFgCAGICNBOIACgDQAIgGALAAQALgBAIAHICMhTIgCgJQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgJAAgMIABgIIiMhOIgDACQgHAIgLAAQgMAAgIgIIgBgCgAGIsIIABABICLhTQgDgGAAgGQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgJAAgLIABgJIiMhOIgDACQgIAHgLAAQgMAAgJgIIAAgBIiKBTIABAIQABAOgKAJQgGAFgHABIACCeQAIABAHAHQAJAIAAAMIgBAJICOBPIAAAAQAIgIALAAQAMAAAJAJgAAM2BIACAKQAAAMgKAKQgFAFgHACIACCcQAIACAGAGQAJAJAAAMIgBAJICMBOIACgCQAIgIAMAAQAMAAAIAIIABABICKhSIgCgJQAAgOAKgJQAGgFAHgBIgCieQgIgBgHgHQgJgIAAgMIABgJIiLhOIgDADQgIAHgLAAQgNABgIgJIgBgBgAGF2HIABAJQABAGgDAGQgDAFgEAFQgGAFgHACIACCeQAJABAGAGQAJAJAAAMIgBAJICMBNIACgCQAJgHAKgBQAMAAAJAJIABABICKhTQgCgEAAgFQAAgNAKgIQAGgGAHgBIgDihQgIgBgGgHQgJgIAAgMIABgJIiLhNIgEAEQgIAIgLAAQgMAAgIgIIgBgBgAi07BIABAJQAAANgKAJQgGAFgHACIADCdQAIACAGAGQAJAJAAAMIgBAJICNBNIACgCQAIgIALAAQALAAAIAIICLhTIgBgHQAAgGACgFQADgGAEgFQAGgFAHgCIgCidQgIgCgHgGQgJgJAAgMQAAgGACgFIiMhOIgCADQgIAGgLABQgMAAgIgHgADC7KQADAFAAAGQAAAOgKAJQgFAFgIABIADCeQAIACAGAGQAJAIAAAMIAAAHICNBOIABgBQAIgHALAAQAMAAAIAHICLhTIgBgGQgBgNAKgKQAHgEAHgCIgDidQgIgCgHgGQgJgIAAgMQAAgFABgEIiJhNIgFAFQgIAIgLAAQgMAAgJgIIgFgHgEgF4ggEQADAGAAAHQAAAGgCAGQgDAGgEAEQgGAFgHACIACCZQAJABAGAHQAIAIABAMQAAAGgCAGICNBOIACgCQAIgIALAAQAMAAAIAIICMhUIgCgJQAAgNAKgJQAGgFAHgCIgDiZQgIgCgGgGQgJgIAAgMQAAgHACgGIiNhPIgDADQgIAHgLABQgMAAgJgJIgBgBgAI17ZIABABICKhTQgCgFAAgGQgBgOAKgJQAGgEAHgCIgCieQgIgBgHgHQgIgIgBgMIACgJIiNhOIgCADQgIAHgLAAQgMABgJgJIgBgBIiJBSIABAJQAAANgKAJQgFAGgIABIADCkQAIACAHAHQAIAIABAMIAAACICMBOIABAAQAIgHALAAIABAAQAMAAAIAIg'
    );
    mask.setTransform(77.1, 219.8);

    // Layer_3
    this.instance = new lib.Symbol5('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(119.9, 492.3, 1, 1, -34, 0, 0, 127.9, 69.5);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 59.9, y: -102.7 }, 599).wait(1));

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('rgba(229,175,69,0.298)')
      .s()
      .p(
        'EgCmAiNQgIgIgBgMIACgJIiMhOIgDADQgIAGgLABQgMAAgJgIQgJgJAAgMQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgNIABgJIiMhOIgDADQgIAHgLAAQgMAAgJgIQgIgIgBgMQAAgHADgGQACgFAFgFQAGgFAHgBIgDieQgHgCgHgGQgJgIAAgMQAAgNAKgKQAIgHALAAQALAAAJAHICLhTIgBgJQAAgGACgGQADgGAEgEQAGgFAHgCIgCieQgIgBgHgGQgJgJAAgMIABgIIiMhOIgCACQgIAHgLABQgNAAgIgJQgJgJAAgLQAAgHACgGQADgGAFgEQAGgFAHgBIgDihQgIgCgHgGQgJgIAAgNIACgIIiMhOIgDADQgIAIgLAAQgMAAgJgJQgJgIAAgMQAAgGACgGQADgGAFgEQAGgFAHgCIgDieQgKgBgJgIQgIgIAAgMQAAgOAJgJQAIgHALAAQAMgBAJAJIABABICOhUIgCgKQAAgNAKgIQAIgIALAAQAMgBAJAJQAJAJAAAMIgBAJICNBOIABgBQAIgHALAAQAMgBAJAJQAJAIAAANQAAANgKAIQgFAGgIABIADCgQAIABAGAHQAJAIAAAMQABAFgCAEICNBOIACgDQAIgGALgBQAMAAAJAIIAEAFICHhQIgCgJQAAgOAJgIQAGgGAHgBIgDifQgIgBgFgHQgJgIAAgMQgBgHADgFQACgHAFgDQAIgIAKAAQAMAAAIAIICLhUIgBgDQAAgNAKgJQAGgFAHgBIgDihQgIgCgGgGQgJgJAAgMIABgIIiKhOIgFAFQgIAHgLAAQgLABgIgJQgJgJAAgMQgBgNAKgJQAGgFAGgCIgCiiQgHgBgHgHQgJgIAAgMQAAgGADgHQACgFAFgFQAIgGAKgBQAMAAAJAIIABACICJhTQgBgEAAgFQAAgHACgFQADgGAEgEQAGgFAHgCIgCieQgIgCgHgGQgJgIAAgNIACgJIiOhPIgBABQgIAIgKAAQgMgBgJgHQgJgJAAgMQAAgHACgGQADgFAFgEQAGgFAHgCIgDibQgIgBgGgHQgJgIAAgMQAAgFABgEIiOhPIgBAAQgIAIgLAAQgMAAgJgIQgJgIAAgMQAAgOAKgJQAGgFAHgCIgDidQgIgBgGgHQgJgIAAgMQAAgHACgFQADgGAFgFQAIgHALAAQAMgBAIAJIABABICKhSIgBgJQgBgGADgHQADgFAEgFQAGgFAHgBIgDieQgIgBgGgGQgJgIAAgNIABgIIiMhOIgCACQgIAHgLAAQgMAAgJgIQgJgIAAgMQAAgOAKgJQAGgFAGgBIgCieQgIgBgHgHQgJgJAAgLIACgJIiOhPIgBAAQgIAIgLAAQgMAAgJgJQgJgIAAgMQAAgGADgGQACgGAFgEQAGgFAHgCIgDiZQgIgBgGgGQgJgKAAgLQAAgNAJgKQAIgGAMgBQALAAAIAGICMhTIgCgJQAAgHADgGQACgFAFgFQAIgHALAAQAMgBAJAJQAJAIAAANIgBAJICPBPQAIgHAKAAQAMgBAJAJQAIAJAAAMQAAAGgCAGQgCAFgFAFQgFAFgHACIACCZQAIACAHAGQAHAIABAMIgBAJICNBPIABAAQAIgIALAAQAMAAAIAHICKhTIAAgCQAAgNAKgJQAGgFAHgCIgDilQgIgBgHgHQgIgIgBgMQAAgGADgGQACgGAFgEQAIgIALAAQAMAAAJAIIABACICKhTIgCgJQAAgGACgGQADgFAFgFQAIgHALgBQAMABAJAIQAIAIABAMIgBAJICMBOIACgCQAIgHALAAQAMgBAJAJQAJAIAAAMQAAAOgKAIQgGAFgHACIADCeQAIABAGAHQAJAHAAANQAAAGgCAGQgDAGgEAEQgJAHgLAAQgLABgJgIIiLBTIACAKQAAANgKAJQgGAFgHACIADCdQAIABAGAGQAJAJAAAMIAAAGICLBOIACgDQAJgGALgBQAMAAAIAJQAJAIAAAMQAAAGgCAGQgDAGgEAEQgGAFgHACIACCgQAJACAGAGQAIAJABAMQAAAMgKAKQgIAHgLAAQgMABgJgJIgBgBIiJBSIABAJQAAAHgCAGQgDAFgFAFQgFAFgHACIACCdQAJABAGAGQAIAJABAMQAAAGgDAGQgCAGgFAFQgIAGgLABQgLAAgJgIIiMBUQACAEAAAFQAAANgKAJQgFAFgIACIADCaQAIACAHAGQAIAIAAANIgBAJICOBPIABgBQAIgHALgBQAMAAAJAJQAIAIABANQAAAMgKAJQgGAGgHABIADCeQAIABAGAGQAJAJAAAMQAAANgKAKQgIAHgLAAQgMAAgIgIIgBgBIiKBSQABAEAAAFQABANgKAJQgGAFgHACIACCdQAJACAGAGQAJAJAAAMQAAAEgBAFICOBPIAAgBQAJgHAKAAQANgBAIAJQAJAIAAAMQAAAOgKAIQgFAGgHABIACCaQALAAAJAIQAJAJAAAMQAAANgKAKQgIAHgLAAQgMAAgJgIIgBgBIiOBVIABAJQAAANgKAJQgFAFgIACIADCdQAIACAHAGQAIAIAAAMQABAHgDAFQgCAHgFAEQgJAHgKAAQgMABgJgJIgBgBIiKBSQACAFAAAFQAAAGgDAGQgCAFgFAEQgFAGgIABIADCbQAIACAGAGQAJAIAAAMIgBAJICMBPIADgDQAIgIALABQAMgBAIAJQAJAIAAAMQAAAOgJAIQgGAGgHABIACCeQAJABAGAGQAJAJAAAMQAAAFgBAEICNBPIABgBQAJgHAKAAQAMgBAJAJQAJAJAAAMQAAANgKAIQgFAGgIACIADCdQAJABAGAHQAIAIABANQAAAGgDAFQgCAGgFAEQgIAIgLAAQgMAAgJgIIgBgBIiJBSIABAJQAAAGgDAGQgCAGgFAFQgIAHgLAAQgMAAgJgJQgJgIAAgMIACgJIiMhOIgDADQgIAHgLAAQgMABgJgJQgJgIAAgNQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgMIABgKIiMhNIgDACQgIAHgLABQgMAAgJgJIAAgBIiJBTIABAIQABAOgKAJQgGAFgHACIADCbQAIABAGAGQAJAJAAAMIgBAJICLBNIACgCQAIgHALgBQAMAAAJAJQAJAJAAALQAAAOgKAJQgFAFgIACIADCfQAJACAGAGQAJAIAAANQAAAHgCAGQgDAFgFAEQgIAIgLAAQgNAAgIgIIgBgBIiIBSIABAJQAAAGgDAGQgCAGgFAEQgIAIgLgBQgMAAgJgIgAk3cuIABAJQAAANgJAKQgGAFgHABIACCeQAJABAGAGQAIAJABAMQAAAFgCAEICNBOIACgCQAIgIALAAQAMAAAJAJIABAAICIhSIgCgJQAAgNAKgKQAGgFAIgCIgDifQgIgCgHgGQgIgJgBgLIACgKIiLhNIgDACQgIAHgLABQgLAAgJgIgAn6XsQADAFAAAGQAAAGgDAGQgDAFgEAFQgGAFgHACIACCdQAJACAGAGQAJAIAAANQAAAEgBAFICMBNIACgCQAJgIAKAAQANAAAIAIICLhTQgCgFAAgEQAAgNAKgKQAGgFAHgBIgDibQgIgCgGgFQgJgJAAgNIABgIIiOhPIgBABQgIAGgLABQgMAAgIgJIgBAAgAD4XiIABAIQABAOgKAJQgGAFgHACIADCdQAIACAGAGQAIAIABAMIgBAJICMBOIACgCQAIgHALAAQAMgBAJAJIABABICKhSIgCgJQAAgHACgGQADgGAFgEQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgMQAAgHACgFIiNhOIgDACQgIAIgLgBQgMABgIgIgAiIXcIACABICIhSIgBgJQgBgOAKgJQAGgFAHgBIgDihQgHgBgHgGQgIgJAAgMIAAgDIiPhQQgHAGgKAAQgNAAgIgIIgBgBIiKBTIACAIQAAANgKAKQgFAFgIABIADCeQAIABAGAHQAJAIAAAMIgBAJICOBPIABAAQAIgIALAAIABAAQALAAAIAIgAA4SkIAAADQAAANgKAKQgGAEgHACIADChQAIABAGAGQAJAIAAANIgBAJICMBOIACgDQAJgHAKgBQANABAIAHICLhTQgCgEAAgFQAAgOAKgJQAGgEAHgCIgDieQgIgBgGgHQgJgHAAgNIABgJIiMhOIgCADQgJAHgLAAQgJAAgIgFgAoDNiIABAHQAAAOgKAJQgFAFgIACIADCgQAIACAHAGQAIAJAAALQABAGgCAFICMBNIADgDQAIgHALAAQAMAAAJAIIABABICJhSIgBgJQAAgOAKgJQAGgFAGgBIgCigQgIgBgHgHQgJgIAAgMIACgJIiNhOIgCACQgIAIgLAAQgNAAgIgJIgBAAgAiJNhIAAAEQAAANgKAJQgFAFgIACIADCfQAIACAGAGQAJAJAAAMIgBAJICLBNIADgCQAIgIALAAQAMAAAJAIIABABICJhSQgBgEAAgFQgBgGADgGQADgFAEgFQAHgFAGgCIgCiaQgIgCgHgGQgJgIAAgMIABgIIiMhOIgCACQgIAHgLAAQgMABgIgJIgBgBgArJIgIABAJQAAAGgCAGQgDAFgFAFQgEAEgFACIADCgQAIACAHAFQAIAJAAAMIAAAIICMBOIACgCQAIgIALAAQAMAAAJAIIABABICJhSIgBgIQAAgNAJgJQAGgFAIgCIgDigQgIgBgHgGQgJgJAAgLQAAgHACgFIiMhOIgDADQgIAHgLAAQgMAAgJgIIgBgBgAArIYQACAFAAAGQAAANgKAJQgFAFgHACIACCfQAIABAHAHQAIAIABAMIgBAIICLBOIADgDQAIgHALgBQAMAAAJAJIABABICJhTIgBgJQAAgNAKgIQAFgGAIgBIgDieQgIgBgHgGQgIgJgBgMIACgJIiKhNIgFAEQgIAIgLAAQgMAAgJgIIgEgFgAGdIIIABABICPhVQgCgEAAgFQAAgGADgGQACgGAFgEIAIgFIgDidQgIgBgGgHQgJgIAAgMQAAgGACgFIiNhPIgDADQgIAHgLAAQgLAAgJgHIiLBTQABAFAAAFQABAMgKAJQgGAGgHACIADCgQAIACAGAGQAJAIAAANIAAADICNBOIAAAAQAIgIALAAQAMAAAJAIgAAhhvIACAJQAAANgKAJQgGAFgHACIADCiQAIACAGAGQAJAIAAAMIAAAHICLBOIACgDQAJgIALAAQALAAAJAIICLhTQgCgEAAgGQAAgNAKgIQAGgGAHgBIgCieQgIgBgHgHQgJgIAAgMIABgJIiLhNIgDADQgJAGgLABQgMAAgIgIIgBgBgADYm3IACAJQAAAGgDAHQgCAFgFAFQgFAFgIABIADCfQAIACAGAFQAJAJAAAMIAAAIICLBOIADgCQAIgIALAAQAMAAAIAJIABABICKhTQgBgEAAgFQgBgGADgHQACgFAFgFQAGgEAHgCIgCidQgIgCgHgGQgJgJAAgMQAAgGACgFIiNhOIgCACQgIAHgLABQgLAAgJgIgAAXr3IABAJQAAAHgCAFQgDAGgFAEQgFAFgHACIACCaQAIACAHAHQAIAIABAMQAAAGgCAFICNBOIACgCQAIgHALgBQAMAAAIAIICMhTIgCgJQAAgHACgGQADgFAFgFQAGgFAGgBIgCibQgIgBgHgHQgIgIgBgMIACgJIiOhPIgBAAQgIAIgLAAQgLAAgJgIgAiqw6QABAEAAAFQABANgKAJQgGAFgHACIACCdQAJACAGAGQAJAIAAANQAAAFgCAGICNBOIACgDQAIgGALAAQALgBAIAHICMhTIgCgJQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgJAAgMIABgIIiMhOIgDACQgHAIgLAAQgMAAgIgIIgBgCgAGIsIIABABICLhTQgDgGAAgGQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgJAAgLIABgJIiMhOIgDACQgIAHgLAAQgMAAgJgIIAAgBIiKBTIABAIQABAOgKAJQgGAFgHABIACCeQAIABAHAHQAJAIAAAMIgBAJICOBPIAAAAQAIgIALAAQAMAAAJAJgAAM2BIACAKQAAAMgKAKQgFAFgHACIACCcQAIACAGAGQAJAJAAAMIgBAJICMBOIACgCQAIgIAMAAQAMAAAIAIIABABICKhSIgCgJQAAgOAKgJQAGgFAHgBIgCieQgIgBgHgHQgJgIAAgMIABgJIiLhOIgDADQgIAHgLAAQgNABgIgJIgBgBgAGF2HIABAJQABAGgDAGQgDAFgEAFQgGAFgHACIACCeQAJABAGAGQAJAJAAAMIgBAJICMBNIACgCQAJgHAKgBQAMAAAJAJIABABICKhTQgCgEAAgFQAAgNAKgIQAGgGAHgBIgDihQgIgBgGgHQgJgIAAgMIABgJIiLhNIgEAEQgIAIgLAAQgMAAgIgIIgBgBgAi07BIABAJQAAANgKAJQgGAFgHACIADCdQAIACAGAGQAJAJAAAMIgBAJICNBNIACgCQAIgIALAAQALAAAIAIICLhTIgBgHQAAgGACgFQADgGAEgFQAGgFAHgCIgCidQgIgCgHgGQgJgJAAgMQAAgGACgFIiMhOIgCADQgIAGgLABQgMAAgIgHgADC7KQADAFAAAGQAAAOgKAJQgFAFgIABIADCeQAIACAGAGQAJAIAAAMIAAAHICNBOIABgBQAIgHALAAQAMAAAIAHICLhTIgBgGQgBgNAKgKQAHgEAHgCIgDidQgIgCgHgGQgJgIAAgMQAAgFABgEIiJhNIgFAFQgIAIgLAAQgMAAgJgIIgFgHgEgF4ggEQADAGAAAHQAAAGgCAGQgDAGgEAEQgGAFgHACIACCZQAJABAGAHQAIAIABAMQAAAGgCAGICNBOIACgCQAIgIALAAQAMAAAIAIICMhUIgCgJQAAgNAKgJQAGgFAHgCIgDiZQgIgCgGgGQgJgIAAgMQAAgHACgGIiNhPIgDADQgIAHgLABQgMAAgJgJIgBgBgAI17ZIABABICKhTQgCgFAAgGQgBgOAKgJQAGgEAHgCIgCieQgIgBgHgHQgIgIgBgMIACgJIiNhOIgCADQgIAHgLAAQgMABgJgJIgBgBIiJBSIABAJQAAANgKAJQgFAGgIABIADCkQAIACAHAHQAIAIABAMIAAACICMBOIABAAQAIgHALAAIABAAQAMAAAIAIg'
      );
    this.shape.setTransform(77.1, 219.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 154.2, 439.5);

  (lib.Symbol3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween17('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(26.6, 725.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ y: 242 }, 1199).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 53.2, 1451.9);

  (lib.Symbol2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance = new lib.Tween1('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(15.7, 3.9);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(137).to({ _off: false }, 0).to({ alpha: 1 }, 9).to({ alpha: 0 }, 10).wait(1)
    );

    // Layer_3
    this.instance_1 = new lib.Tween2('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(9.8, 3.9);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(127)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(10)
    );

    // Layer_4
    this.instance_2 = new lib.Tween3('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(18.6, 0.9);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(117)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(20)
    );

    // Layer_5
    this.instance_3 = new lib.Tween4('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(6.8, 0.9);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(108)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(29)
    );

    // Layer_6
    this.instance_4 = new lib.Tween5('synched', 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(3.9, 3.8);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(99)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(38)
    );

    // Layer_7
    this.instance_5 = new lib.Tween6('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(18.6, 3.9);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(90)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(47)
    );

    // Layer_8
    this.instance_6 = new lib.Tween7('synched', 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(9.8, 0.9);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(81)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(56)
    );

    // Layer_9
    this.instance_7 = new lib.Tween8('synched', 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(21.6, 0.9);
    this.instance_7.alpha = 0;
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(72)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(65)
    );

    // Layer_10
    this.instance_8 = new lib.Tween9('synched', 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(12.8, 3.9);
    this.instance_8.alpha = 0;
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(63)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(74)
    );

    // Layer_11
    this.instance_9 = new lib.Tween10('synched', 0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(0.9, 0.9);
    this.instance_9.alpha = 0;
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(54)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(83)
    );

    // Layer_12
    this.instance_10 = new lib.Tween11('synched', 0);
    this.instance_10.parent = this;
    this.instance_10.setTransform(15.7, 0.9);
    this.instance_10.alpha = 0;
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(45)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(92)
    );

    // Layer_13
    this.instance_11 = new lib.Tween12('synched', 0);
    this.instance_11.parent = this;
    this.instance_11.setTransform(6.8, 3.9);
    this.instance_11.alpha = 0;
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(36)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(101)
    );

    // Layer_14
    this.instance_12 = new lib.Tween13('synched', 0);
    this.instance_12.parent = this;
    this.instance_12.setTransform(21.6, 3.9);
    this.instance_12.alpha = 0;
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(27)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(110)
    );

    // Layer_15
    this.instance_13 = new lib.Tween14('synched', 0);
    this.instance_13.parent = this;
    this.instance_13.setTransform(3.9, 0.9);
    this.instance_13.alpha = 0;
    this.instance_13._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(18)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(119)
    );

    // Layer_16
    this.instance_14 = new lib.Tween15('synched', 0);
    this.instance_14.parent = this;
    this.instance_14.setTransform(12.8, 0.9);
    this.instance_14.alpha = 0;
    this.instance_14._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(128)
    );

    // Layer_17
    this.instance_15 = new lib.Tween16('synched', 0);
    this.instance_15.parent = this;
    this.instance_15.setTransform(0.9, 3.8);
    this.instance_15.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_15).to({ alpha: 1 }, 9).to({ alpha: 0 }, 10).to({ _off: true }, 1).wait(137)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 2.9, 1.8, 1.9);

  (lib.Symbol1copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#E5B044')
      .s()
      .p(
        'ABWCqQAogVAagjIABgBIAbAVIgGgGIAUAOIgBABQgiAugzAZgAiPDCQgtgjgZgyIAsgXQATAoAlAaIABABIgdAqgABxiYIgCgDIARgRIAMgWIACACIABAAQAuAhAZAzIgtAXQgUgogkgbgAjBiNIAAgBQAjguAygZIAXAsQgpAVgbAkg'
      );
    this.shape.setTransform(3.9, 3.9, 0.112, 0.112);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#E5B044')
      .s()
      .p(
        'AgvFcQhDgJg6ghQg7ghgqg1IAngfQAkAtAyAcQAzAdA5AIIgGAxgABqEaQA2gUArgnQAqgnAZg0IAtAWQgdA9gxAtQgyAtg/AYgAldACQAAgXADgYQAMhQArhBIAqAbQglA4gKBEQgDAVAAAUQAAAYAFAcIgyAJQgFgcAAghgAERh5QgYg1gpgoIAigkQAxAvAcA9QAcA9ADBDIgyADQgDg6gYg0gAikkyQAxgaA2gKQA3gKA2AIQAXADAWAGIgNAwQgZgGgOgBQgugHgvAIQgvAJgqAWg'
      );
    this.shape_1.setTransform(3.9, 3.9, 0.112, 0.112);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(157)
    );

    // Symbol 2
    this.instance = new lib.Symbol2('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(21.8, 4.2, 1, 1, 180, 0, 0, 11.2, 2.4);
    this.instance.alpha = 0.5;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(157));

    // Symbol 2
    this.instance_1 = new lib.Symbol2('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(21.8, 4.3, 1, 1, 0, 0, 180, 11.2, 2.4);
    this.instance_1.alpha = 0.5;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(157));

    // Symbol 2
    this.instance_2 = new lib.Symbol2('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(21.7, 4.3, 1, 1, 0, 0, 0, 11.2, 2.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(157));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 33, 7.8);

  (lib.Symbol1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#E5B044')
      .s()
      .p(
        'AhdCIQAggDAdgRQAdgRASgbQAdgoAAgxQAAgmgRghQgRghgdgWIgCgBIAcgpIABABQAoAcAYAtQAWAtAAAxQAABCgnA0QgYAkgmAWQglAWgrAFg'
      );
    this.shape.setTransform(5.4, 4.2, 0.132, 0.132);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#E5B044')
      .s()
      .p(
        'AgjEnQhXgLhCg3IAggmQA2AtBJAJQAdAEAagDIAFAxQgPACgQAAQgTAAgQgCgAAzDyQAwgKApgdQAqgcAagqIAqAbQggAygxAiQgyAig6ANgAkSBxQgWg2AAg7IAAgDIAyAAIAAADQAAAxASAtQATAsAiAjIgjAkQgqgqgWg2gADdBvQATgnAFgqQACgPAAgPQAAgngNgoIAvgQQAQAuAAAxQAAAUgCAQQgHA1gXAsgAkmgiIAAgBQAIg8AdgzQAdg0AwgkIAfAnQgoAfgYAqQgZArgGAygACni1QglgigugQIARgvQA3AUAsAoQAtApAZA2IguAVQgUgtglgigAibj8QArgaAygLQAxgLAxAGQAUADAPAEIgMAwQgIgCgVgDQhWgKhIAtg'
      );
    this.shape_1.setTransform(3.9, 3.9, 0.132, 0.132);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(157)
    );

    // Symbol 2
    this.instance = new lib.Symbol2('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(21.8, 4.2, 1, 1, 180, 0, 0, 11.2, 2.4);
    this.instance.alpha = 0.5;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(157));

    // Symbol 2
    this.instance_1 = new lib.Symbol2('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(21.8, 4.3, 1, 1, 0, 0, 180, 11.2, 2.4);
    this.instance_1.alpha = 0.5;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(157));

    // Symbol 2
    this.instance_2 = new lib.Symbol2('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(21.7, 4.3, 1, 1, 0, 0, 0, 11.2, 2.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(157));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 33, 7.9);

  (lib.Symbol50 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol49();
    this.instance.parent = this;
    this.instance.setTransform(119.5, 60.2, 1, 1, 0, 0, 0, 125, 59.6);

    this.shape = new cjs.Shape();
    this.shape.graphics.f('#993399').s().p('EgrIAx2MAAAhjrMBWRAAAMAAABjrg');
    this.shape.setTransform(124.3, -167.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance }] }, 1)
        .to({ state: [] }, 1)
        .to({ state: [{ t: this.shape }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  // stage content:
  (lib._300x250 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Handle Clicks
    this.on('click', function () {
      window.open('https://bit.ly/2ED6hzA', '_blank');
    });

    // timeline functions:
    this.frame_1799 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(1799).call(this.frame_1799).wait(1));

    // logo
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AIsCCIAAkDIAJAAIAAEDgAFkBGIAAiMICOAAIAAAXIh3AAIAABfIB3AAIAAAWgADRBGQgNAAgKgHIgGgFIgBAAIgBgBIgEgGQgHgJAAgNIAAg6QAAgRAMgMQAMgMARAAIA7AAQANAAAKAHIAGAFIABABIAEAGQAIAKAAAMIAAAMIgXAAIAAgBIgBAAIAAgLQAAgHgEgGIgBAAIAAAAQgFgFgIAAIg6AAQgIAAgGAFQgFAGAAAHIAAA7QgBAHAGAFIAAABQAGAFAHAAIA7AAQAIAAAFgGQAGgFgBgIIAAgLIAXAAIAAAAIABAAIAAAMQgBARgLALQgMAMgSAAgAhbBGIgOgdIguAAIgXgXIA6AAIgihFIg7B5IgYAAIBEiMIAdAAIBECMgAk0BGIAAiMIAXAAIAACMgAnxBGIAAiMICOAAIAAAXIh3AAIAAB1gAqtBGIAAiMICNAAIAAAXIh3AAIAABfIB3AAIAAAWgAtqBGIAAhpIAWAXIAAA8IBOAAQAIAAAFgFQAFgGAAgHIAAg7QAAgIgFgFQgFgFgIAAIhkAAIgWgXIB6AAIALACQANAEAIALQAJALAAANIAAA7QAAARgMALQgMAMgRAAgABYBGIhXhzIAABzIgVAAIAAiMIAfAAIBWBzIAAhzIAXAAIAACMgANiAeQgFAAgEgEQgFgEAAgGIAAgBIAJAAIAAABQAAAEAFAAIASAAQADAAAAgEQAAgEgDAAIgSAAQgHAAgDgEQgEgEAAgEQAAgGAFgDQAEgFAFAAIASAAQAFAAAEAFQAEAEAAAFIAAAAIgKAAIAAAAQAAgEgDAAIgSAAQgFAAAAAEQAAADAFAAIASAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAgAMMAeIAAg7IA8AAIAAALIgxAAIAAAwgALWAeIAAgwIgYAAIAAgLIA7AAIAAALIgYAAIAAAwgAJwAeIAAg7IA8AAIAAALIgyAAIAAAlIAyAAIAAALgAm7ALIgWgVIBlAAIAAAVgAGaALIgWgVIABAAIgBgBIBkAAIAAAWgAp4ALIgVgVIBkAAIAAAVgAMjAFIgKgJIAsAAIAAAJgAKGAFIgKgJIArAAIAAAJg'
      );
    this.shape.setTransform(150, 23.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1800));

    // Symbol 50
    this.instance = new lib.Symbol50();
    this.instance.parent = this;
    this.instance.setTransform(146.7, 231.8, 0.579, 0.579, 0, 0, 0, 118.4, 59.8);
    new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol50(), 3);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1800));

    // Text
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AIKBlIgggTIAAiiIAggUIBRAAIAiAUIAAAoIgpAAIAAgaIhCAAIAACFIBCAAIAAgaIApAAIAAApIgiATgAAZBlIghgTIAAiiIAhgUIBYAAIAhAUIAACiIghATgAAgBDIBKAAIAAiFIhKAAgAqrBlIghgTIAAiiIAhgUIBZAAIAiAUIAACiIgiATgAqkBDIBLAAIAAiFIhLAAgAyMBlIgigTIAAi0IAoAAIAACiIBMAAIAAiiIAnAAIAAC0IggATgA01BlIgggTIAAg2IAoAAIAAAnIAuAAIAAilIAoAAIAAC0IghATgATbBkIAAjGIB7AAIAAAiIhSAAIAAAtIBBAAIAAAhIhBAAIAABWgARmBkIAAikIg2AAIAAgiICUAAIAAAiIg1AAIAACkgAOtBkIAAjGIB3AAIAAAiIhQAAIAAAtIA/AAIAAAhIg/AAIAAAzIBQAAIAAAjgAMYBkIAAhWIhNAAIAABWIgoAAIAAjGIAoAAIAABPIBNAAIAAhPIApAAIAADGgAFVBkIAAjGIB3AAIAAAiIhQAAIAAAtIA/AAIAAAhIg/AAIAAAzIBQAAIAAAjgADfBkIAAikIg2AAIAAgiICUAAIAAAiIg2AAIAACkgAhZBkIAAjGIApAAIAADGgAkPBkIAAjGIBsAAIAiATIAAA/IgZANIAAACIAZAMIAABGIgiATgAjnBBIA9AAIAAgzIg9AAgAjngTIA9AAIAAgtIg9AAgAmcBkIgqhLIgZAAIAABLIgoAAIAAjGIBrAAIAhATIAABUIghAUIArBLgAnfgIIA9AAIAAg4Ig9AAgAsdBkIAAjGIAoAAIAADGgAtrBkIhXiAIAACAIgoAAIAAjGIAmAAIBWB/IAAh/IAoAAIAADGg'
      );
    this.shape_1.setTransform(150, 174);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1800));

    // button
    this.instance_1 = new lib.Symbol27('single', 89);
    this.instance_1.parent = this;
    this.instance_1.setTransform(150.1, 215.7, 0.579, 0.579, 0, 0, 0, 121.2, 31.6);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1800));

    // disclosure
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgCADIgBgDIABgCQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABACIgBADIgDABIgCgBg'
      );
    this.shape_2.setTransform(295, 246.3);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgNATQgGgFABgMIAAgDQAAgIACgFQADgFAFgDQAEgDAFAAQAIAAAFAFQAFAEABAIIgHAAQgBgGgDgDQgCgDgGABQgGAAgDAEQgEAFAAAJIAAADQAAAJAEAFQADAFAGgBQAFAAADgCQADgDABgGIAHAAQgBAJgFAEQgFAEgIAAQgJAAgFgHg'
      );
    this.shape_3.setTransform(291.8, 244.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AgOAZIAAgyIAGAAIAAAtIAXAAIAAAFg');
    this.shape_4.setTransform(287.7, 244.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AgOAZIAAgyIAGAAIAAAtIAXAAIAAAFg');
    this.shape_5.setTransform(283.9, 244.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AgEAGQAEgEAAgEIAAgGIAFAAIAAAFIgCAGQgBAEgCACg');
    this.shape_6.setTransform(279.2, 246.7);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAHAAQAAADACADQADACADgBQADAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgCIgHgDIgFgDQgBgBAAgEQAAgEAEgDQAEgDAFgBQAGABAFADQADADAAAGIgGAAQAAgEgDgBQgCgCgDAAQgCAAgDABQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAIAGACIAIACIAEAEQACABAAADQAAAGgEACQgFADgFABQgFAAgDgCg'
      );
    this.shape_7.setTransform(276.9, 244.7);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAOQgFgEAAgJIAAgBQAAgFACgEQACgFAEgCQAEgCADgBQAIAAAEAGQAEAFAAAIIAAACIgZAAQABAGADADQADADAEAAQADAAACgBIAFgEIAEAEQgFAGgKABQgGgBgFgFgAgFgLQgDAEAAAEIASAAIAAAAQgBgFgCgDQgCgCgFAAQgCAAgDACg'
      );
    this.shape_8.setTransform(273.2, 244.7);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAOQgFgEAAgKIAAAAQAAgFACgFQACgEAEgCQAEgCAEgBQAHAAADAFQAEADABAGIgGAAQgBgDgCgDQgCgCgEAAQgEAAgDADQgCAEAAAGIAAABQAAAGACAEQADADAEAAQAEABACgCQACgDABgDIAGAAQAAAEgCADIgFAEQgEACgEAAQgHgBgEgFg'
      );
    this.shape_9.setTransform(269.4, 244.7);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_10.setTransform(266.7, 244);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AgBATIgOglIAGAAIAJAcIAJgcIAHAAIgOAlg');
    this.shape_11.setTransform(264.1, 244.7);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AgIATIAAgkIAGAAIABAEQABgFAHAAIACAAIAAAGIgDAAQgGAAgBAFIAAAag');
    this.shape_12.setTransform(261.4, 244.7);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAOQgFgEAAgJIAAgBQAAgFACgEQACgFAEgCQAEgCADgBQAIAAAEAGQAEAFAAAIIAAACIgZAAQABAGADADQADADAEAAQADAAACgBIAFgEIAEAEQgFAGgKABQgGgBgFgFgAgFgLQgDAEAAAEIASAAIAAAAQgBgFgCgDQgCgCgFAAQgCAAgDACg'
      );
    this.shape_13.setTransform(258.2, 244.7);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgIAYQgFgCgCgEQgCgDAAgEIAGAAQAAAEAEADQADACAFAAQAFAAADgCQADgBAAgEQAAgEgDgCIgJgEQgIgCgEgDQgEgEAAgFQAAgGAFgEQAFgEAGAAQAGAAAEACQAEACACADQACAEAAAEIgGAAQAAgEgDgDQgDgDgGABQgEAAgCABQgDADAAAEQAAADADACQACACAGACQAGACADABQAEACACADQABADAAAEQAAAGgEAEQgFADgIAAQgEAAgFgCg'
      );
    this.shape_14.setTransform(254.1, 244.1);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgLAWQgEgFAAgJIAAAAQAAgIAEgGQAEgFAHAAQAGAAADAEIAAgTIAHAAIAAA0IgGAAIAAgDQgEAEgGAAQgHAAgEgFgAgGgCQgCADAAAHQAAAGACAEQADADADAAQAHABACgGIAAgQQgCgGgGAAQgEAAgDAEg'
      );
    this.shape_15.setTransform(248.2, 244);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f('#FFFFFF')
      .s()
      .p('AAIATIAAgYQAAgEgBgCQgCgCgEAAQgCAAgDACIgDAEIAAAaIgHAAIAAgkIAGAAIAAAEQAFgFAGAAQAMAAAAANIAAAYg');
    this.shape_16.setTransform(244.3, 244.7);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f('#FFFFFF')
      .s()
      .p('AgKAQQgDgEgBgGIAAgYIAGAAIAAAXQAAAJAIgBQAGABACgGIAAgaIAHAAIAAAkIgGAAIgBgDQgDAEgGAAQgHAAgCgDg');
    this.shape_17.setTransform(240.4, 244.8);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f('#FFFFFF').s().p('AgPAZIAAgyIAfAAIAAAGIgYAAIAAASIAUAAIAAAEIgUAAIAAAWg');
    this.shape_18.setTransform(236.7, 244.1);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAOQgFgEAAgJIAAgBQAAgFACgEQACgFAEgCQAEgCADgBQAIAAAEAGQAEAFAAAIIAAACIgZAAQABAGADADQADADAEAAQADAAACgBIAFgEIAEAEQgFAGgKABQgGgBgFgFgAgFgLQgDAEAAAEIASAAIAAAAQgBgFgCgDQgCgCgFAAQgCAAgDACg'
      );
    this.shape_19.setTransform(230.9, 244.7);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgLAWQgEgFAAgJIAAAAQAAgIAEgGQAEgFAHAAQAGAAADAEIAAgTIAHAAIAAA0IgGAAIAAgDQgEAEgGAAQgHAAgEgFgAgGgCQgCADAAAHQAAAGACAEQADADADAAQAHABACgGIAAgQQgCgGgGAAQgEAAgDAEg'
      );
    this.shape_20.setTransform(226.9, 244);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_21.setTransform(224.1, 244);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAGAAQABADACADQADACACgBQAEAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAABgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHgCIgHgDIgEgDQgCgBAAgEQAAgEAEgDQAEgDAFgBQAGABAEADQAFADAAAGIgHAAQAAgEgCgBQgCgCgEAAQgCAAgDABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABABABQAAAAAAABQAAAAABAAQAAABAAAAIAGACIAIACIAFAEQABABAAADQAAAGgEACQgFADgGABQgDAAgEgCg'
      );
    this.shape_22.setTransform(221.5, 244.7);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAOQgFgEAAgJIAAgBQAAgFACgEQACgFAEgCQAEgCADgBQAIAAAEAGQAEAFAAAIIAAACIgZAAQABAGADADQADADAEAAQADAAACgBIAFgEIAEAEQgFAGgKABQgGgBgFgFgAgFgLQgDAEAAAEIASAAIAAAAQgBgFgCgDQgCgCgFAAQgCAAgDACg'
      );
    this.shape_23.setTransform(217.8, 244.7);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f('#FFFFFF').s().p('AgIATIAAgkIAGAAIAAAEQADgFAFAAIADAAIAAAGIgDAAQgGAAgCAFIAAAag');
    this.shape_24.setTransform(214.9, 244.7);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgLAOQgFgFAAgJQAAgFACgEQACgFAEgCQAEgCAEgBQAIABAFAFQAEAFAAAIIAAAAQAAAGgCAFQgCAEgEACQgEACgFABQgHgBgEgFgAgHgKQgDAFAAAFQAAAHADAEQADADAEAAQAFAAADgDQADgFAAgGQAAgFgDgFQgDgDgFAAQgEAAgDADg'
      );
    this.shape_25.setTransform(211.4, 244.7);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f('#FFFFFF').s().p('AgPAZIAAgyIAfAAIAAAGIgYAAIAAASIAUAAIAAAEIgUAAIAAAWg');
    this.shape_26.setTransform(207.6, 244.1);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f('#FFFFFF')
      .s()
      .p('AgKAaIgDAAIAAgFIACAAIAFgBIADgFIABgEIgNgkIAHAAIAIAbIAJgbIAHAAIgPAqQgDAJgHAAg');
    this.shape_27.setTransform(200.3, 245.5);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgJAWIAAAEIgGAAIAAg0IAHAAIAAAUQADgFAGAAQAHAAAEAFQAEAGAAAIIAAAAQAAAJgEAFQgEAFgHAAQgGAAgEgFgAgIAAIAAAQQADAGAFgBQAEAAADgDQADgEgBgGQABgIgDgCQgDgEgEAAQgGABgCAFg'
      );
    this.shape_28.setTransform(196.7, 244);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgLAWQgEgFAAgJIAAAAQAAgIAEgGQAEgFAHAAQAGAAADAEIAAgTIAHAAIAAA0IgGAAIAAgDQgEAEgGAAQgHAAgEgFgAgGgCQgCADAAAHQAAAGACAEQADADADAAQAHABACgGIAAgQQgCgGgGAAQgEAAgDAEg'
      );
    this.shape_29.setTransform(190.8, 244);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAOQgFgEAAgJIAAgBQAAgFACgEQACgFAEgCQAEgCADgBQAIAAAEAGQAEAFAAAIIAAACIgZAAQABAGADADQADADAEAAQADAAACgBIAFgEIAEAEQgFAGgKABQgGgBgFgFgAgFgLQgDAEAAAEIASAAIAAAAQgBgFgCgDQgCgCgFAAQgCAAgDACg'
      );
    this.shape_30.setTransform(187, 244.7);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f('#FFFFFF')
      .s()
      .p('AAAAVQgDgCAAgFIAAgWIgGAAIAAgFIAGAAIAAgKIAGAAIAAAKIAHAAIAAAFIgHAAIAAAWIABADIADABIADAAIAAAFIgFABQgEAAgBgDg');
    this.shape_31.setTransform(183.8, 244.3);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f('#FFFFFF')
      .s()
      .p('AgLAQQgDgEAAgGIAAgYIAGAAIAAAXQABAJAGgBQAHABACgGIAAgaIAHAAIAAAkIgGAAIgBgDQgDAEgHAAQgFAAgEgDg');
    this.shape_32.setTransform(180.8, 244.8);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgJAWIAAAEIgGAAIAAg0IAHAAIAAAUQADgFAGAAQAHAAAEAFQAEAGAAAIIAAAAQAAAJgEAFQgEAFgHAAQgGAAgEgFgAgIAAIAAAQQACAGAGgBQAEAAADgDQADgEAAgGQAAgIgDgCQgCgEgFAAQgGABgCAFg'
      );
    this.shape_33.setTransform(177, 244);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_34.setTransform(174, 244);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f('#FFFFFF').s().p('AgIATIAAgkIAGAAIAAAEQADgFAGAAIACAAIAAAGIgDAAQgGAAgCAFIAAAag');
    this.shape_35.setTransform(172.2, 244.7);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f('#FFFFFF')
      .s()
      .p('AAAAVQgDgCAAgFIAAgWIgGAAIAAgFIAGAAIAAgKIAGAAIAAAKIAHAAIAAAFIgHAAIAAAWIABADIADABIADAAIAAAFIgFABQgEAAgBgDg');
    this.shape_36.setTransform(169.5, 244.3);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAHAAQAAADACADQADACADgBQADAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgCIgHgDIgFgDQgBgBAAgEQAAgEAEgDQAEgDAFgBQAGABAFADQADADAAAGIgGAAQAAgEgDgBQgCgCgDAAQgCAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABABAAIAFACIAIACIAEAEQACABAAADQAAAGgEACQgFADgFABQgFAAgDgCg'
      );
    this.shape_37.setTransform(166.6, 244.7);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_38.setTransform(163.9, 244);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgRAZIAAgyIAOAAQAGAAAFAEQAFADADAFQACAGAAAGIAAACQAAAIgCAFQgDAFgFAEQgFACgGAAgAgLAUIAHAAQAHAAAEgFQAFgEAAgKIAAgCQAAgIgEgFQgEgEgHgBIgIAAg'
      );
    this.shape_39.setTransform(160.8, 244.1);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgCADIgBgDIABgCQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABACIgBADIgDABIgCgBg'
      );
    this.shape_40.setTransform(155.7, 246.3);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAOQgFgEAAgJIAAgBQAAgFACgEQACgFAEgCQAEgCADgBQAIAAAEAGQAEAFAAAIIAAACIgZAAQABAGADADQADADAEAAQADAAACgBIAFgEIAEAEQgFAGgKABQgGgBgFgFgAgFgLQgDAEAAAEIASAAIAAAAQgBgFgCgDQgCgCgFAAQgCAAgDACg'
      );
    this.shape_41.setTransform(152.9, 244.7);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f('#FFFFFF').s().p('AgCAbIAAg1IAFAAIAAA1g');
    this.shape_42.setTransform(150.1, 243.9);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgJAWIAAAEIgGAAIAAg0IAHAAIAAAUQADgFAGAAQAHAAAEAFQAEAGAAAIIAAAAQAAAJgEAFQgEAFgHAAQgGAAgEgFgAgIAAIAAAQQACAGAGgBQAEAAADgDQACgEABgGQgBgIgCgCQgCgEgFAAQgGABgCAFg'
      );
    this.shape_43.setTransform(147.4, 244);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_44.setTransform(144.4, 244);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAHAAQAAADACADQADACADgBQADAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgCIgHgDIgFgDQgBgBAAgEQAAgEAEgDQAEgDAFgBQAGABAFADQADADAAAGIgGAAQAAgEgDgBQgCgCgDAAQgCAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABABAAIAFACIAIACIAEAEQACABAAADQAAAGgEACQgEADgGABQgFAAgDgCg'
      );
    this.shape_45.setTransform(141.8, 244.7);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAGAAQAAADADADQACACADgBQAEAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgCIgHgDIgEgDQgCgBAAgEQAAgEAEgDQAEgDAFgBQAGABAFADQADADAAAGIgGAAQAAgEgDgBQgCgCgDAAQgCAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABABAAIAFACIAIACIAFAEQABABAAADQAAAGgEACQgEADgHABQgEAAgDgCg'
      );
    this.shape_46.setTransform(138.1, 244.7);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgLAOQgFgFAAgJQAAgFACgEQACgFAEgCQAEgCAEgBQAIABAFAFQAEAFAAAIIAAAAQAAAGgCAFQgCAEgEACQgEACgFABQgHgBgEgFgAgHgKQgDAFAAAFQAAAHADAEQADADAEAAQAFAAADgDQADgFAAgGQAAgFgDgFQgDgDgFAAQgEAAgDADg'
      );
    this.shape_47.setTransform(134.2, 244.7);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgPAaIAAgzIAGAAIAAAFQAEgGAGAAQAHAAAEAGQAEAFAAAJIAAAAQAAAIgEAFQgEAFgHABQgFgBgEgEIAAASgAgIgPIAAARQACAGAGgBQAEAAACgDQAEgEAAgGQAAgGgEgFQgCgDgEAAQgFAAgDAFg'
      );
    this.shape_48.setTransform(130.3, 245.4);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAGAAQAAADADADQACACADgBQAEAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgCIgHgDIgFgDQgBgBAAgEQAAgEAEgDQAEgDAFgBQAGABAFADQADADABAGIgHAAQAAgEgDgBQgCgCgDAAQgCAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABABAAIAFACIAIACIAFAEQABABAAADQAAAGgEACQgEADgHABQgEAAgDgCg'
      );
    this.shape_49.setTransform(124.6, 244.7);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_50.setTransform(121.9, 244);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAGAAQABADACADQADACACgBQAEAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHgCIgHgDIgEgDQgCgBAAgEQAAgEAEgDQAEgDAFgBQAHABADADQAEADABAGIgHAAQAAgEgCgBQgDgCgDAAQgDAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABABABQAAAAAAABQAAAAABAAQAAABAAAAIAGACIAIACIAEAEQACABAAADQAAAGgEACQgFADgGABQgDAAgEgCg'
      );
    this.shape_51.setTransform(117.4, 244.7);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAGAAQAAADADADQACACADgBQAEAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgCIgHgDIgFgDQgBgBAAgEQAAgEAEgDQAEgDAFgBQAGABAFADQADADAAAGIgGAAQAAgEgDgBQgCgCgDAAQgCAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABABAAIAFACIAIACIAFAEQABABAAADQAAAGgEACQgEADgHABQgEAAgDgCg'
      );
    this.shape_52.setTransform(113.8, 244.7);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgLAOQgFgFAAgJQAAgFACgEQACgFAEgCQAEgCAEgBQAIABAFAFQAEAFAAAIIAAAAQAAAGgCAFQgCAEgEACQgEACgFABQgHgBgEgFgAgHgKQgDAFAAAFQAAAHADAEQADADAEAAQAFAAADgDQADgFAAgGQAAgFgDgFQgDgDgFAAQgEAAgDADg'
      );
    this.shape_53.setTransform(109.8, 244.7);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f('#FFFFFF').s().p('AgCAbIAAg1IAFAAIAAA1g');
    this.shape_54.setTransform(107, 243.9);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics.f('#FFFFFF').s().p('AgCAbIAAg1IAFAAIAAA1g');
    this.shape_55.setTransform(103.5, 243.9);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgLAQQgEgCABgGQgBgFAFgDQAEgDAIAAIAFAAIAAgDQAAgDgCgCQgBgCgEAAQgDAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgGAAQAAgCACgCQACgDAEgCQADgBADgBQAGABAFADQADADAAAGIAAAQQAAAFABADIAAABIgHAAIAAgEQgFAFgFAAQgGgBgDgDgAgIAHQAAADACADQACABADAAQACAAADgBQACgCABgDIAAgIIgEAAQgLABAAAGg'
      );
    this.shape_56.setTransform(100.7, 244.7);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgPAaIAAgzIAGAAIAAAFQAEgGAGAAQAHAAAEAGQAEAFAAAJIAAAAQAAAIgEAFQgEAFgHABQgFgBgEgEIAAASgAgIgPIAAARQACAGAGgBQAEAAACgDQAEgEAAgGQAAgGgEgFQgCgDgEAAQgFAAgDAFg'
      );
    this.shape_57.setTransform(96.9, 245.4);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_58.setTransform(93.9, 244);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAOQgFgEAAgKIAAAAQAAgFACgFQADgEADgCQAEgCAEgBQAGAAAFAFQAEADAAAGIgGAAQAAgDgDgDQgDgCgDAAQgEAAgCADQgEAEAAAGIAAABQAAAGAEAEQACADAEAAQADABADgCQADgDAAgDIAGAAQAAAEgCADIgGAEQgDACgEAAQgHgBgEgFg'
      );
    this.shape_59.setTransform(91.3, 244.7);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f('#FFFFFF')
      .s()
      .p('AAIATIAAgYQAAgEgBgCQgCgCgEAAQgCAAgDACQgCACgBACIAAAaIgHAAIAAgkIAGAAIAAAEQAFgFAGAAQAMAAAAANIAAAYg');
    this.shape_60.setTransform(87.4, 244.7);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_61.setTransform(84.6, 244);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics.f('#FFFFFF').s().p('AgIATIAAgkIAGAAIAAAEQADgFAFAAIADAAIAAAGIgDAAQgGAAgCAFIAAAag');
    this.shape_62.setTransform(82.7, 244.7);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgRAZIAAgyIARAAQAJAAAEAFQAFAEAAAHQAAAHgEADQgFAFgJAAIgLAAIAAATgAgLAAIALAAQAGAAADgBQACgDAAgFQAAgEgCgDQgDgCgFgBIgMAAg'
      );
    this.shape_63.setTransform(79.2, 244.1);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgCADIgBgDIABgCQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABACIgBADIgDABIgCgBg'
      );
    this.shape_64.setTransform(74.1, 246.3);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics.f('#FFFFFF').s().p('AAIAbIgMgSIgEAEIAAAOIgGAAIAAg1IAGAAIAAAgIADgFIALgLIAIAAIgOAPIAPAWg');
    this.shape_65.setTransform(71.7, 243.9);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAGAAQAAADADADQACACADgBQAEAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHgCIgHgDIgEgDQgCgBAAgEQAAgEAEgDQAEgDAFgBQAGABAEADQAFADAAAGIgHAAQAAgEgCgBQgCgCgEAAQgCAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAFACIAIACIAFAEQABABAAADQAAAGgEACQgEADgHABQgEAAgDgCg'
      );
    this.shape_66.setTransform(67.8, 244.7);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_67.setTransform(65.1, 244);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics.f('#FFFFFF').s().p('AgIATIAAgkIAGAAIAAAEQADgFAFAAIADAAIAAAGIgDAAQgGAAgCAFIAAAag');
    this.shape_68.setTransform(63.2, 244.7);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAHAAQgBADADADQACACAEgBQADAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgCIgHgDIgFgDQgBgBAAgEQAAgEAEgDQAEgDAFgBQAHABAEADQADADAAAGIgGAAQAAgEgDgBQgCgCgDAAQgDAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAIAGACIAIACIAEAEQACABAAADQAAAGgEACQgFADgFABQgEAAgEgCg'
      );
    this.shape_69.setTransform(58.3, 244.7);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAOQgFgEAAgJIAAgBQAAgFACgEQACgFAEgCQAEgCADgBQAIAAAEAGQAEAFAAAIIAAACIgZAAQABAGADADQADADAEAAQADAAACgBIAFgEIAEAEQgFAGgKABQgGgBgFgFgAgFgLQgDAEAAAEIASAAIAAAAQgBgFgCgDQgCgCgFAAQgCAAgDACg'
      );
    this.shape_70.setTransform(54.6, 244.7);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics.f('#FFFFFF').s().p('AgBATIgOglIAGAAIAJAcIAJgcIAHAAIgOAlg');
    this.shape_71.setTransform(50.9, 244.7);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics.f('#FFFFFF').s().p('AgCAbIAAg1IAFAAIAAA1g');
    this.shape_72.setTransform(48.4, 243.9);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgLAOQgFgFAAgJQAAgFACgEQACgFAEgCQAEgCAEgBQAIABAFAFQAEAFAAAIIAAAAQAAAGgCAFQgCAEgEACQgEACgFABQgHgBgEgFgAgHgKQgDAFAAAFQAAAHADAEQADADAEAAQAFAAADgDQADgFAAgGQAAgFgDgFQgDgDgFAAQgEAAgDADg'
      );
    this.shape_73.setTransform(45.4, 244.7);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics.f('#FFFFFF').s().p('AgBATIgOglIAGAAIAJAcIAJgcIAHAAIgOAlg');
    this.shape_74.setTransform(41.7, 244.7);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f('#FFFFFF')
      .s()
      .p('AAIATIAAgYQAAgEgBgCQgCgCgEAAQgCAAgDACIgDAEIAAAaIgHAAIAAgkIAGAAIAAAEQAFgFAGAAQAMAAAAANIAAAYg');
    this.shape_75.setTransform(38, 244.7);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_76.setTransform(35.2, 244);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHAZQgEgCgCgDIADgEQAFAFAFAAQAEAAADgCQACgDAAgFIAAgDQgDAEgGAAQgHAAgEgFQgEgFAAgIQAAgJAEgFQAEgGAHAAQAGAAAEAFIAAgEIAGAAIAAAkQAAAHgEAEQgFAFgHAAQgDAAgEgCgAgGgRQgCAEAAAHQAAAGACADQADAEAEAAQAGAAACgGIAAgQQgCgFgGAAQgEAAgDADg'
      );
    this.shape_77.setTransform(30.5, 245.4);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f('#FFFFFF')
      .s()
      .p('AAIATIAAgYQAAgEgBgCQgCgCgEAAQgCAAgDACQgCACgBACIAAAaIgHAAIAAgkIAGAAIAAAEQAFgFAGAAQAMAAAAANIAAAYg');
    this.shape_78.setTransform(26.6, 244.7);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics.f('#FFFFFF').s().p('AgCAaIAAglIAFAAIAAAlgAgCgSIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg');
    this.shape_79.setTransform(23.8, 244);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f('#FFFFFF')
      .s()
      .p('AAAAVQgDgCAAgFIAAgWIgGAAIAAgFIAGAAIAAgKIAGAAIAAAKIAHAAIAAAFIgHAAIAAAWIABADIADABIADAAIAAAFIgFABQgEAAgBgDg');
    this.shape_80.setTransform(21.7, 244.3);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgHASQgDgBgCgDQgCgEAAgDIAGAAQAAADADADQACACADgBQAEAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgCIgHgDIgFgDQgBgBAAgEQAAgEAEgDQAEgDAFgBQAGABAFADQAEADgBAGIgGAAQAAgEgCgBQgDgCgDAAQgCAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABABAAIAFACIAIACIAFAEQABABAAADQAAAGgEACQgEADgHABQgEAAgDgCg'
      );
    this.shape_81.setTransform(18.8, 244.7);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAOQgFgEAAgJIAAgBQAAgFACgEQACgFAEgCQAEgCADgBQAIAAAEAGQAEAFAAAIIAAACIgZAAQABAGADADQADADAEAAQADAAACgBIAFgEIAEAEQgFAGgKABQgGgBgFgFgAgFgLQgDAEAAAEIASAAIAAAAQgBgFgCgDQgCgCgFAAQgCAAgDACg'
      );
    this.shape_82.setTransform(15.1, 244.7);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics.f('#FFFFFF').s().p('AgBATIgOglIAGAAIAJAcIAJgcIAHAAIgOAlg');
    this.shape_83.setTransform(11.5, 244.7);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f('#FFFFFF')
      .s()
      .p('AAIATIAAgYQAAgEgBgCQgCgCgEAAQgCAAgDACQgCACgBACIAAAaIgHAAIAAgkIAGAAIAAAEQAFgFAGAAQAMAAAAANIAAAYg');
    this.shape_84.setTransform(7.8, 244.7);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics.f('#FFFFFF').s().p('AgCAZIAAgyIAFAAIAAAyg');
    this.shape_85.setTransform(4.9, 244.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_85 },
            { t: this.shape_84 },
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
          ],
        })
        .wait(1800)
    );

    // IBBJ
    this.instance_2 = new lib.Symbol7('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(150, 98.4, 0.714, 0.714, 0, 0, 0, 128.8, 77.3);

    this.instance_3 = new lib.Symbol8('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(150, 96, 1.05, 0.714, 0, 0, 0, 102, 102.2);
    this.instance_3.alpha = 0.422;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }] })
        .wait(1800)
    );

    // bg_animation
    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics.f('#E5B044').s().p('AjvAeIAAg8IHfAAIAAADIAAABIAAACInaAAIAAA2g');
    this.shape_86.setTransform(125.7, 59.5, 0.714, 0.714);

    this.instance_4 = new lib.Symbol1copy('synched', 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(159.2, 57.5, 0.893, 0.893, 0, 0, 0, 16.6, 4);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics.f('#E5B044').s().p('AhWAeIAAg7IAFAAIAAA2ICjAAIAAg2IAFAAIAAA7g');
    this.shape_87.setTransform(77.6, 134.7, 0.714, 0.714);

    this.instance_5 = new lib.Symbol1('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(83.3, 114.8, 0.893, 0.893, -90, 0, 0, 16.4, 4);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics.f('#E5B044').s().p('AgpAeIAAg7IBSAAIAAACIAAABIAAABIhMAAIAAA3g');
    this.shape_88.setTransform(217.9, 80.2, 0.714, 0.714);

    this.instance_6 = new lib.Symbol1copy('synched', 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(215.2, 99, 0.893, 0.893, 90, 0, 0, 16.6, 3.9);

    this.instance_7 = new lib.Symbol1('synched', 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(188.6, 144.3, 0.893, 0.893, 0, 0, 0, 16.6, 4);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics.f('#E5B044').s().p('AjfAnIAAgwIG7AAIAAgdIAEAAIAAAhIm7AAIAAAsg');
    this.shape_89.setTransform(197.1, 136.1, 0.893, 0.893);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_89 },
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.shape_88 },
            { t: this.instance_5 },
            { t: this.shape_87 },
            { t: this.instance_4 },
            { t: this.shape_86 },
          ],
        })
        .wait(1800)
    );

    // Cells
    this.instance_8 = new lib.Symbol4('synched', 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(240.1, -90.2, 0.714, 0.714, 0, 0, 0, 77.2, 219.6);

    this.instance_9 = new lib.Symbol4('synched', 0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(249.1, 252, 0.714, 0.714, 0, 0, 0, 77.2, 219.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_9 }, { t: this.instance_8 }] })
        .wait(1800)
    );

    // DNA
    this.instance_10 = new lib.Symbol3('synched', 0);
    this.instance_10.parent = this;
    this.instance_10.setTransform(24.5, 284.1, 0.714, 0.714, 0, 0, 0, 26.7, 483.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1800));

    // BG
    this.instance_11 = new lib.BG();
    this.instance_11.parent = this;
    this.instance_11.setTransform(204, -125, 0.714, 0.714);

    this.instance_12 = new lib.BG();
    this.instance_12.parent = this;
    this.instance_12.setTransform(-9, -125, 0.714, 0.714);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_12 }, { t: this.instance_11 }] })
        .wait(1800)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(140.4, -122, 428, 1222.4);
  // library properties:
  lib.properties = {
    id: '72DC4EBEC57E46858DB6AB3DAB4EAEE2',
    width: 300,
    height: 250,
    fps: 60,
    color: '#000026',
    opacity: 1.0,
    manifest: [{ src: 'images/BG.jpg', id: 'BG' }],
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
  an.compositions['72DC4EBEC57E46858DB6AB3DAB4EAEE2'] = {
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
