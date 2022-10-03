//Mesh
//Class representing triangular polygon mesh based objects. Also serves as a base for other classes such as SkinnedMesh.

//Code Example
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

//Constructor
//Mesh( geometry : BufferGeometry, material : Material )
//geometry — (optional) an instance of BufferGeometry. Default is a new BufferGeometry.
//material — (optional) a single or an array of Material. Default is a new MeshBasicMaterial
//
//Properties
//See the base Object3D class for common properties.
//
//.geometry : BufferGeometry
//An instance of BufferGeometry (or derived classes), defining the object's structure.
//
//.isMesh : Boolean
//Read-only flag to check if a given object is of type Mesh.
//
//.material : Material
//An instance of material derived from the Material base class or an array of materials, defining the object's appearance. Default is a MeshBasicMaterial.
//
//.morphTargetInfluences : Array
//An array of weights typically from 0-1 that specify how much of the morph is applied. Undefined by default, but reset to a blank array by updateMorphTargets.
//
//.morphTargetDictionary : Object
//A dictionary of morphTargets based on the morphTarget.name property. Undefined by default, but rebuilt updateMorphTargets.
//
//Methods
//See the base Object3D class for common methods.
//
//.clone () : Mesh
//Returns a clone of this Mesh object and its descendants.
//
//.raycast ( raycaster : Raycaster, intersects : Array ) : undefined
//Get intersections between a casted ray and this mesh. Raycaster.intersectObject will call this method, but the results are not ordered.
//
//.updateMorphTargets () : undefined
//Updates the morphTargets to have no influence on the object. Resets the morphTargetInfluences and morphTargetDictionary properties.