// let scene, camera, renderer, room;


// // Add these global variables to track mouse interaction
// let isDragging = false;
// let previousMousePosition = {
//     x: 0,
//     y: 0
// };

// // Add an event listener to handle mouse down
// document.addEventListener('mousedown', onMouseDown, false);
// document.addEventListener('mouseup', onMouseUp, false);
// document.addEventListener('mousemove', onMouseMove, false);

// // Handle mouse down event
// function onMouseDown(event) {
//     const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//     const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

//     // Raycast to check if the user clicked on the room
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2(mouseX, mouseY);
//     raycaster.setFromCamera(mouse, camera);

//     const intersects = raycaster.intersectObject(room, true);
//     if (intersects.length > 0) {
//         isDragging = true;
//         previousMousePosition = {
//             x: mouseX,
//             y: mouseY
//         };
//     }
// }

// // Handle mouse up event
// function onMouseUp() {
//     isDragging = false;
// }

// // Handle mouse move event
// function onMouseMove(event) {
//     if (isDragging) {
//         const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//         const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

//         const deltaRotationQuaternion = new THREE.Quaternion()
//             .setFromEuler(
//                 new THREE.Euler(
//                     (mouseY - previousMousePosition.y) * Math.PI,
//                     (mouseX - previousMousePosition.x) * Math.PI,
//                     0,
//                     'XYZ'
//                 )
//             );

//         room.quaternion.multiplyQuaternions(deltaRotationQuaternion, room.quaternion);
//         previousMousePosition = {
//             x: mouseX,
//             y: mouseY
//         };
//     }
// }

// function init() {
//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set(5, 5, 5);
//     camera.lookAt(0, 0, 0);

//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Add ambient light
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(0, 1, 0);
//     scene.add(directionalLight);
// }

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// function generateRoom() {
//     // Remove existing room
//     if (room) {
//         scene.remove(room);
//     }

//     const roomWidth = parseFloat(document.getElementById("roomWidth").value);
//     const roomHeight = parseFloat(document.getElementById("roomHeight").value);
//     const roomDepth = parseFloat(document.getElementById("roomDepth").value);

//     room = createRoom(roomWidth, roomHeight, roomDepth);
//     scene.add(room);
// }

// function createRoom(width, height, depth) {
//     const halfWidth = width / 2;
//     const halfHeight = height / 2;
//     const halfDepth = depth / 2;

//     // Create individual wall geometries
//     const backWallGeometry = new THREE.BoxGeometry(width, height, 0.1);
//     const leftWallGeometry = new THREE.BoxGeometry(0.1, height, depth);

//     // Set positions for the individual walls
//     backWallGeometry.attributes.position = createWallPositionAttribute(backWallGeometry, 0, 0, -halfDepth + 0.05);
//     leftWallGeometry.attributes.position = createWallPositionAttribute(leftWallGeometry, -halfWidth + 0.05, 0, 0);

//     // Combine individual wall geometries into a group
//     const roomGroup = new THREE.Group();
//     roomGroup.add(createOpenTopFrontRoom(width, height, depth)); 

//     const wallMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0090 });
//     const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xFFFFFF }); 

//     roomGroup.add(new THREE.Mesh(backWallGeometry, new THREE.MeshPhongMaterial({ color: 0xFF0090 })));
//     roomGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(backWallGeometry), edgeMaterial));

//     roomGroup.add(new THREE.Mesh(leftWallGeometry, new THREE.MeshPhongMaterial({ color: 0xFF0090 })));
//     roomGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(leftWallGeometry), edgeMaterial));

//      return roomGroup;
// }

// function createWallPositionAttribute(geometry, x, y, z) {
//     const positionAttribute = geometry.getAttribute('position');
//     const positions = positionAttribute.array;
//     const numVertices = positions.length / 3;
    
//     for (let i = 0; i < numVertices; i++) {
//         const vertexIndex = i * 3;
//         positions[vertexIndex] += x;
//         positions[vertexIndex + 1] += y;
//         positions[vertexIndex + 2] += z;
//     }
    
//     return new THREE.BufferAttribute(positions, 3);
// }

// function createOpenTopFrontRoom(width, height, depth) {
//     const roomGeometry = new THREE.BoxGeometry(width, height, depth);

//     // Set the top and front faces to have no vertices, creating an open top and front
//     const halfWidth = width / 2;
//     const halfHeight = height / 2;
//     const halfDepth = depth / 2;

//     for (let i = 0; i < roomGeometry.attributes.position.array.length; i += 3) {
//         const x = roomGeometry.attributes.position.array[i];
//         const y = roomGeometry.attributes.position.array[i + 1];
//         const z = roomGeometry.attributes.position.array[i + 2];

//         if (x === -halfWidth || x === halfWidth || z === -halfDepth) {
//             roomGeometry.attributes.position.array[i + 1] = -halfHeight; // Set the top and front vertices to the bottom of the room
//         }
//     }

//     roomGeometry.computeVertexNormals(); // Recalculate normals to ensure proper shading

//     return new THREE.Mesh(roomGeometry, new THREE.MeshPhongMaterial({ color: 0xFF0090 }));
// }




// window.generateRoom = generateRoom
// init();
// animate();
// // window.generateRoom = generateRoom

function generateRoom(scene) {
    // Create the room
    const room = new THREE.Group();
    room.userData.type = 'room';
    scene.add(room);

    // Floor
    const floorGeometry = new THREE.BoxGeometry(18, 0.1, 7); 
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCCCC }); 
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    room.add(floor);

    // Walls
    const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xEEEEEE }); 

    const wall1Geometry = new THREE.BoxGeometry(0.1, 5, 7);
    const wall1 = new THREE.Mesh(wall1Geometry, wallMaterial);
    wall1.position.set(-8.95, 2.5, 0); 
    room.add(wall1);

    const wall3Geometry = new THREE.BoxGeometry(18, 5, 0.1); 
    const wall3 = new THREE.Mesh(wall3Geometry, wallMaterial);
    wall3.position.set(0, 2.5, -3.45);
    room.add(wall3);
    room.position.set(5, -3, 0);
}