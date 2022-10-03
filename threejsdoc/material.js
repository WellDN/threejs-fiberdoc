//Material
//Abstract base class for materials.
//
//Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
//
//The following properties and methods are inherited by all other material types (although they may have different defaults).
//
//Constructor
//Material()
//This creates a generic material.
//
//Properties
//.alphaTest : Float
//Sets the alpha value to be used when running an alpha test. The material will not be rendered if the opacity is lower than this value. Default is 0.
//
//.alphaToCoverage : Float
//Enables alpha to coverage. Can only be used with MSAA-enabled contexts (meaning when the renderer was created with antialias parameter set to true). Default is false.
//
//.blendDst : Integer
//Blending destination. Default is OneMinusSrcAlphaFactor. See the destination factors constants for all possible values.
//The material's blending must be set to CustomBlending for this to have any effect.
//
//.blendDstAlpha : Integer
//The transparency of the .blendDst. Uses .blendDst value if null. Default is null.
//
//.blendEquation : Integer
//Blending equation to use when applying blending. Default is AddEquation. See the blending equation constants for all possible values.
//The material's blending must be set to CustomBlending for this to have any effect.
//
//.blendEquationAlpha : Integer
//The transparency of the .blendEquation. Uses .blendEquation value if null. Default is null.
//
//.blending : Blending
//Which blending to use when displaying objects with this material.
//This must be set to CustomBlending to use custom blendSrc, blendDst or blendEquation.
//See the blending mode constants for all possible values. Default is NormalBlending.
//
//.blendSrc : Integer
//Blending source. Default is SrcAlphaFactor. See the source factors constants for all possible values.
//The material's blending must be set to CustomBlending for this to have any effect.
//
//.blendSrcAlpha : Integer
//The transparency of the .blendSrc. Uses .blendSrc value if null. Default is null.
//
//.clipIntersection : Boolean
//Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union. Default is false.
//
//.clippingPlanes : Array
//User-defined clipping planes specified as THREE.Plane objects in world space. These planes apply to the objects this material is attached to. Points in space whose signed distance to the plane is negative are clipped (not rendered). This requires WebGLRenderer.localClippingEnabled to be true. See the WebGL / clipping /intersection example. Default is null.
//
//.clipShadows : Boolean
//Defines whether to clip shadows according to the clipping planes specified on this material. Default is false.
//
//.colorWrite : Boolean
//Whether to render the material's color. This can be used in conjunction with a mesh's renderOrder property to create invisible objects that occlude other objects. Default is true.
//
//.defines : Object
//Custom defines to be injected into the shader. These are passed in form of an object literal, with key/value pairs. { MY_CUSTOM_DEFINE: '' , PI2: Math.PI * 2 }. The pairs are defined in both vertex and fragment shaders. Default is undefined.
//
//.depthFunc : Integer
//Which depth function to use. Default is LessEqualDepth. See the depth mode constants for all possible values.
//
//.depthTest : Boolean
//Whether to have depth test enabled when rendering this material. Default is true.
//
//.depthWrite : Boolean
//Whether rendering this material has any effect on the depth buffer. Default is true.
//
//When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
//
//.isMaterial : Boolean
//Read-only flag to check if a given object is of type Material.
//
//.stencilWrite : Boolean
//Whether stencil operations are performed against the stencil buffer. In order to perform writes or comparisons against the stencil buffer this value must be true. Default is false.
//
//.stencilWriteMask : Integer
//The bit mask to use when writing to the stencil buffer. Default is 0xFF.
//
//.stencilFunc : Integer
//The stencil comparison function to use. Default is AlwaysStencilFunc. See stencil function constants for all possible values.
//
//.stencilRef : Integer
//The value to use when performing stencil comparisons or stencil operations. Default is 0.
//
//.stencilFuncMask : Integer
//The bit mask to use when comparing against the stencil buffer. Default is 0xFF.
//
//.stencilFail : Integer
//Which stencil operation to perform when the comparison function returns false. Default is KeepStencilOp. See the stencil operations constants for all possible values.
//
//.stencilZFail : Integer
//Which stencil operation to perform when the comparison function returns true but the depth test fails. Default is KeepStencilOp. See the stencil operations constants for all possible values.
//
//.stencilZPass : Integer
//Which stencil operation to perform when the comparison function returns true and the depth test passes. Default is KeepStencilOp. See the stencil operations constants for all possible values.
//
//.id : Integer
//Unique number for this material instance.
//
//.name : String
//Optional name of the object (doesn't need to be unique). Default is an empty string.
//
//.needsUpdate : Boolean
//Specifies that the material needs to be recompiled.
//
//.opacity : Float
//Float in the range of 0.0 - 1.0 indicating how transparent the material is. A value of 0.0 indicates fully transparent, 1.0 is fully opaque.
//If the material's transparent property is not set to true, the material will remain fully opaque and this value will only affect its color.
//Default is 1.0.
//
//.polygonOffset : Boolean
//Whether to use polygon offset. Default is false. This corresponds to the GL_POLYGON_OFFSET_FILL WebGL feature.
//
//.polygonOffsetFactor : Integer
//Sets the polygon offset factor. Default is 0.
//
//.polygonOffsetUnits : Integer
//Sets the polygon offset units. Default is 0.
//
//.precision : String
//Override the renderer's default precision for this material. Can be "highp", "mediump" or "lowp". Default is null.
//
//.premultipliedAlpha : Boolean
//Whether to premultiply the alpha (transparency) value. See WebGL / Materials / Physical / Transmission for an example of the difference. Default is false.
//
//.dithering : Boolean
//Whether to apply dithering to the color to remove the appearance of banding. Default is false.
//
//.shadowSide : Integer
//Defines which side of faces cast shadows. When set, can be THREE.FrontSide, THREE.BackSide, or THREE.DoubleSide. Default is null.
//If null, the side casting shadows is determined as follows:
//Material.side	Side casting shadows
//THREE.FrontSide	back side
//THREE.BackSide	front side
//THREE.DoubleSide	both sides
//.side : Integer
//Defines which side of faces will be rendered - front, back or both. Default is THREE.FrontSide. Other options are THREE.BackSide and THREE.DoubleSide.
//
//.toneMapped : Boolean
//Defines whether this material is tone mapped according to the renderer's toneMapping setting. Default is true.
//
//.transparent : Boolean
//Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.
//When set to true, the extent to which the material is transparent is controlled by setting its opacity property.
//Default is false.
//
//.type : String
//Value is the string 'Material'. This shouldn't be changed, and can be used to find all objects of this type in a scene.
//
//.uuid : String
//UUID of this material instance. This gets automatically assigned, so this shouldn't be edited.
//
//.version : Integer
//This starts at 0 and counts how many times .needsUpdate is set to true.
//
//.vertexColors : Boolean
//Defines whether vertex coloring is used. Default is false.
//
//.visible : Boolean
//Defines whether this material is visible. Default is true.
//
//.userData : Object
//An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
//
//Methods
//EventDispatcher methods are available on this class.
//
//.clone ( ) : Material
//Return a new material with the same parameters as this material.
//
//.copy ( material : material ) : this
//Copy the parameters from the passed material into this material.
//
//.dispose () : undefined
//Frees the GPU-related resources allocated by this instance. Call this method whenever this instance is no longer used in your app.
//
//Material textures must be be disposed of by the dispose() method of Texture.
//
//.onBeforeCompile ( shader : Shader, renderer : WebGLRenderer ) : undefined
//An optional callback that is executed immediately before the shader program is compiled. This function is called with the shader source code as a parameter. Useful for the modification of built-in materials.
//
//Unlike properties, the callback is not supported by .clone(), .copy() and .toJSON().
//
//.customProgramCacheKey () : String
//In case onBeforeCompile is used, this callback can be used to identify values of settings used in onBeforeCompile, so three.js can reuse a cached shader or recompile the shader for this material as needed.
//
//For example, if onBeforeCompile contains a conditional statement like:
if ( black ) {
//
	shader.fragmentShader = shader.fragmentShader.replace('gl_FragColor = vec4(1)', 'gl_FragColor = vec4(0)')
}
    //
//then customProgramCacheKey should be set like this:

material.customProgramCacheKey = function() {
//
	return black ? '1' : '0';
//
}
//Unlike properties, the callback is not supported by .clone(), .copy() and .toJSON().
//
//.setValues ( values : Object ) : undefined
//values -- a container with parameters.
//Sets the properties based on the values.
//
//.toJSON ( meta : Object ) : Object
//meta -- object containing metadata such as textures or images for the material.
//Convert the material to three.js JSON Object/Scene format.