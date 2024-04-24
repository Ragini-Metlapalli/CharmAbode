function generateCupboard(){
     // Create the cupboard
     const cupboard = new THREE.Group();
     scene.add(cupboard);
 
    ///materials
    const textureLoader = new THREE.TextureLoader();
    const woodTexture = textureLoader.load('/static/img/cupboard.jpeg');
    const woodMaterial = new THREE.MeshStandardMaterial({ map: woodTexture, roughness: 105 });

   // Cupboard body
     const bodyGeometry = new THREE.BoxGeometry(4, 6, 2);
    // const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); // SaddleBrown color
     const body = new THREE.Mesh(bodyGeometry, woodMaterial);
     cupboard.add(body);
 

 
    // Handles
     const handleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 16);
     const handleMaterial = new THREE.MeshBasicMaterial({ color: 0xD3D3D3 }); // LightGray color
     const handles = new THREE.Group();
 
     const handle1 = new THREE.Mesh(handleGeometry, handleMaterial);
     handle1.position.set(-1, 0, 1);
     handles.add(handle1);
 
     const handle2 = new THREE.Mesh(handleGeometry, handleMaterial);
     handle2.position.set(1, 0 , 1);
     handles.add(handle2);
 
     cupboard.add(handles);

    // Cupboard door line
    const lineGeometry = new THREE.BoxGeometry(0.05, 6, 0.05);
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black color
    const line = new THREE.Mesh(lineGeometry, lineMaterial);
    line.position.set(0, 0, 1);
    cupboard.add(line);

    // Front border lines
    const borderGeometry1 = new THREE.BoxGeometry(4.1, 0.05, 0.05);
    const borderMaterial1 = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black color
    const frontBorders1 = new THREE.Group();

    const topBorder = new THREE.Mesh(borderGeometry1, borderMaterial1);
    topBorder.position.set(0, 2.95, 1.05);
    frontBorders1.add(topBorder);

    const bottomBorder = new THREE.Mesh(borderGeometry1, borderMaterial1);
    bottomBorder.position.set(0, -2.95, 1.05);
    frontBorders1.add(bottomBorder);

    cupboard.add(frontBorders1);

   const borderGeometry2 = new THREE.BoxGeometry(6, 0.05, 0.05);
    const borderMaterial2 = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black color
    const frontBorders2 = new THREE.Group();


   const leftBorder = new THREE.Mesh(borderGeometry2, borderMaterial2);
    leftBorder.position.set(-2.05, 0, 1.05);
    leftBorder.rotation.z = Math.PI / 2;
    frontBorders2.add(leftBorder);

    const rightBorder = new THREE.Mesh(borderGeometry2, borderMaterial2);
    rightBorder.position.set(2.05, 0, 1.05);
    rightBorder.rotation.z = Math.PI / 2;
    frontBorders2.add(rightBorder);

    cupboard.add(frontBorders2);

    // Position the cupboard in the scene
     cupboard.position.set(12, 1, -2);
}