/**
 * @module creatine.tmx
 **/

(function() {
  "use strict";

  /**
   * ImageLayer represents an image layer on TMX map.
   *
   * @class ImageLayer
   * @param {creatine.tmx.Map} map The map object.
   * @param {Object} data The data object (from tmx format).
   * @extends createjs.Bitmap
   * @constructor
  **/
  var ImageLayer = function(map, data) {
    /**
     * Reference to the TMX map.
     * @property map
     * @type {creatine.tmx.Map}
     * @readonly
    **/
    this.map = null;

    /**
     * The path for the image.
     * @property imagePath
     * @type {String}
     * @readonly
    **/
    this.imagePath = null;

    /**
     * The name of the layer.
     * @property name
     * @type {String}
     * @readonly
    **/
    this.name = null;

    /**
     * The amount of tiles in x axis. Not really useful here.
     * @property width
     * @type {Integer}
     * @readonly
    **/
    this.width = null;

    /**
     * The amount of tiles in y axis. Not really useful here.
     * @property y
     * @type {Integer}
     * @readonly
    **/
    this.height = null;

    this._initialize(map, data);
  }
  var p = createjs.extend(ImageLayer, createjs.Bitmap);

  /**
   * Initialization method.
   * @method _initialize
   * @param {creatine.tmx.Map} map The map object.
   * @param {Object} data The data object (from tmx format).
   * @private
  **/
  p._initialize = function(map, data) {
    if (!map) return;

    this.Bitmap_constructor(data['image']||null);

    this.map       = map;
    this.name      = data['name'];
    this.imagePath = data['image'];
    this.x         = data['x'];
    this.y         = data['y'];
    this.width     = data['width'];
    this.height    = data['height'];
    this.visible   = data['visible'];
    this.alpha     = data['opacity'];
  }

  creatine.tmx.ImageLayer = createjs.promote(ImageLayer, "Bitmap");
}());