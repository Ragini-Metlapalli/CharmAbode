function generateStool(scene){
    const stool = new THREE.Group();
    scene.add(stool);

    // Create stool geometry
const seatGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.05, 30);
const legGeometry = new THREE.BoxGeometry(0.05, 0.7, 0.1);

// Create stool materials
const woodMaterial = new THREE.MeshStandardMaterial({ color: 0x5C4033 });
const metalMaterial = new THREE.MeshStandardMaterial({ color: 0x5C4033 });

// Create stool mesh
const seat = new THREE.Mesh(seatGeometry, woodMaterial);
stool.add(seat);
const legs = new THREE.Group();
const leg1 = new THREE.Mesh(legGeometry, metalMaterial);
const leg2 = new THREE.Mesh(legGeometry, metalMaterial);
const leg3 = new THREE.Mesh(legGeometry, metalMaterial);
const leg4 = new THREE.Mesh(legGeometry, metalMaterial);

//Adjust leg positions to make them slanted
leg1.position.set(-0.190, -0.35, 0.2);
leg2.position.set(0.190, -0.35, 0.2);
leg3.position.set(-0.175, -0.35, -0.2);
leg4.position.set(0.175, -0.35, -0.2);

// Rotate the legs for slant
leg1.rotation.x = -Math.PI / 8;
leg2.rotation.x = -Math.PI / 8;
leg3.rotation.x = -Math.PI / 8;
leg4.rotation.x = -Math.PI / 8;

legs.add(leg1, leg2, leg3, leg4);
stool.add(legs);

stool.position.set(12, 1, -2);
}