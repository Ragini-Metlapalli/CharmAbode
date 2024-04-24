function generateTable() {
    // Create the table
    table = new THREE.Group();
    scene.add(table);
    //materials
    const textureLoader = new THREE.TextureLoader();
    const woodTexture = textureLoader.load('/static/img/table.jpeg');
    const woodMaterial = new THREE.MeshStandardMaterial({ map: woodTexture, roughness: 105 });

    // Surface (plane)
    const surfaceGeometry = new THREE.BoxGeometry(4, 0.2, 2);
    //const surfaceMaterial = new THREE.MeshBasicMaterial({ color: 0x654321 }); // Brown color
    const surface = new THREE.Mesh(surfaceGeometry, woodMaterial);
    table.add(surface);

    // Legs
    const legGeometry = new THREE.BoxGeometry(0.2, 1.8, 0.2);
    const legs = new THREE.Group();

    const leg1 = new THREE.Mesh(legGeometry, woodMaterial);
    leg1.position.set(-1.8, -0.9, -0.9);
    legs.add(leg1);

    const leg2 = new THREE.Mesh(legGeometry, woodMaterial);
    leg2.position.set(1.8, -0.9, -0.9);
    legs.add(leg2);

    const leg3 = new THREE.Mesh(legGeometry, woodMaterial);
    leg3.position.set(-1.8, -0.9, 0.9);
    legs.add(leg3);

    const leg4 = new THREE.Mesh(legGeometry, woodMaterial);
    leg4.position.set(1.8, -0.9, 0.9);
    legs.add(leg4);

    table.add(legs);

    // Position the table in the scene
    table.position.set(12, 1, -2);
  } 