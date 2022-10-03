//Camera

//Abstract base class for cameras. This class should always be inherited when you build a new camera.

//Constructor

Camera()
//Creates a new Camera. Note that this class is not intended to be called directly; you probably want a PerspectiveCamera or OrthographicCamera instead.

//Properties

//See the base Object3D class for common properties.

isCamera : Boolean

//Read-only flag to check if a given object is of type Camera.

layers : Layers

//The layers that the camera is a member of. This is an inherited property from Object3D.

//Objects must share at least one layer with the camera to be seen when the camera's viewpoint is rendered.

matrixWorldInverse : Matrix4

//This is the inverse of matrixWorld. MatrixWorld contains the Matrix which has the world transform of the Camera.

projectionMatrix : Matrix4

//This is the matrix which contains the projection.


projectionMatrixInverse : Matrix4

//The inverse of projectionMatrix.

//Methods

//See the base Object3D class for common methods.

clone ( ) /*: Camera*/
//Return a new camera with the same properties as this one.

copy ( source /*: Camera*/, recursive /*: Boolean*/ ) //: this
//Copy the properties from the source camera into this one.

getWorldDirection ( target /*: Vector3 */) //: Vector3
//target — the result will be copied into this Vector3.

//Returns a Vector3 representing the world space direction in which the camera is looking. (Note: A camera looks down its local, negative z-axis).