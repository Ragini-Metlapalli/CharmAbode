function generateChair() {
    // Create the chair
    chair = new THREE.Group();
    scene.add(chair);

    // Seat
    const seatGeometry = new THREE.BoxGeometry(2, 0.2, 2);
    //const seatMaterial = new THREE.MeshBasicMaterial({ color: 0x654321 }); // Brown color
    const textureLoader = new THREE.TextureLoader();
    const woodTexture = textureLoader.load('/static/img/table.jpeg');
    const seatMaterial = new THREE.MeshStandardMaterial({ map: woodTexture, roughness: 105 });

    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    chair.add(seat);

    // Back support
    const backSupportGeometry = new THREE.BoxGeometry(2, 2, 0.2);
    const backSupport = new THREE.Mesh(backSupportGeometry, seatMaterial);
    backSupport.position.set(0, 1, -1);
    chair.add(backSupport);

    // Legs
    const clegGeometry = new THREE.BoxGeometry(0.2, 1.6, 0.2);
    const chairLegs = new THREE.Group();

    const chairLeg1 = new THREE.Mesh(clegGeometry, seatMaterial);
    chairLeg1.position.set(-0.9, -0.8, -0.9);
    chairLegs.add(chairLeg1);

    const chairLeg2 = new THREE.Mesh(clegGeometry, seatMaterial);
    chairLeg2.position.set(0.9, -0.8, -0.9);
    chairLegs.add(chairLeg2);

    const chairLeg3 = new THREE.Mesh(clegGeometry, seatMaterial);
    chairLeg3.position.set(-0.9, -0.8, 0.9);
    chairLegs.add(chairLeg3);

    const chairLeg4 = new THREE.Mesh(clegGeometry, seatMaterial);
    chairLeg4.position.set(0.9, -0.8, 0.9);
    chairLegs.add(chairLeg4);

    chair.add(chairLegs);

    // Position the chair in the scene
    chair.position.set(12, 1, -2);
  }