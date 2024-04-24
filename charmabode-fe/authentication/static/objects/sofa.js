function generateSofa(scene){
    const sofa = new THREE.Group();
    scene.add(sofa);


    // Seat
    const textureLoader = new THREE.TextureLoader();
    const sofaTexture = textureLoader.load('/static/img/sofa.jpeg');
    const sofaMaterial = new THREE.MeshStandardMaterial({ map: sofaTexture, roughness: 105 });
    const seatGeometry = new THREE.BoxGeometry(7, 0.4, 2);
    // const seatMaterial = new THREE.MeshBasicMaterial({ color: 0x996633 }); // Brown color
    const seat = new THREE.Mesh(seatGeometry, sofaMaterial);
    sofa.add(seat);


    // Back support
    const backSupportGeometry = new THREE.BoxGeometry(6, 3, 0.4);
    //materials - textures
    const backTexture = textureLoader.load('/static/img/sofa.jpeg');
    const backSupportMaterial = new THREE.MeshStandardMaterial({ map: backTexture, roughness: 105 });
    // const backSupportMaterial = new THREE.MeshBasicMaterial({ color: 0x996633 }); // Brown color
    const backSupport = new THREE.Mesh(backSupportGeometry, backSupportMaterial);
    backSupport.position.set(0, 1, -1);
    sofa.add(backSupport);

    // Armrests
    const armrestGeometry = new THREE.BoxGeometry(0.4, 3, 0.4);
   // const armrestMaterial = new THREE.MeshBasicMaterial({ color: 0x5C4033 }); // Green color
    
   //textured materials
    const armrestTexture = textureLoader.load('/static/img/sofa2.jpeg');
    const armrestMaterial = new THREE.MeshStandardMaterial({ map: armrestTexture, roughness: 105 });

    const leftArmrest = new THREE.Mesh(armrestGeometry, armrestMaterial);
    leftArmrest.position.set(-3.3, 1, -1);
    sofa.add(leftArmrest);

    const rightArmrest = new THREE.Mesh(armrestGeometry, armrestMaterial);
    rightArmrest.position.set(3.3, 1, -1);
    sofa.add(rightArmrest);

    // lines and borders
    //const line = new THREE.BoxGeometry
    const linegeometry = new THREE.BoxGeometry(0.08, 3, 0.4);
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x5C4033 }); // Green color

    const line1 = new THREE.Mesh(linegeometry, lineMaterial);
    line1.position.set(-1.3, 1, -1);
    sofa.add(line1);

    const line2 = new THREE.Mesh(linegeometry, lineMaterial);
    line2.position.set(1.3, 1, -1);
    sofa.add(line2);

    const seat_lines = new THREE.BoxGeometry(0.08, 0, 2);
    const seat_lines_material = new THREE.MeshBasicMaterial({ color: 0x5C4033 }); // Green color

    const line3 = new THREE.Mesh(seat_lines, seat_lines_material);
    line3.position.set(1.15, 0.4, 1.1); // Adjusted position near the left edge of the seat
    sofa.add(line3);

    const line4 = new THREE.Mesh(seat_lines, seat_lines_material);
    line4.position.set(-1.15, 0.4, 1.1); // Adjusted position near the right edge of the seat
    sofa.add(line4);

    const Armrests_seat = new THREE.BoxGeometry(0.4, 0.4, 2);

    const armrest_seat_Texture = textureLoader.load('/static/img/sofa2.jpeg');
    const Armrests_seat_material = new THREE.MeshStandardMaterial({ map: armrest_seat_Texture, roughness: 105 });
   // const Armrests_seat_material = new THREE.MeshBasicMaterial({ color: 0x5C4033 }); // Green color

    const arm1 = new THREE.Mesh(Armrests_seat, Armrests_seat_material);
    arm1.position.set(3.1, 0.4, 0.5); // Adjusted position near the left edge of the seat
    sofa.add(arm1);

    const arm2 = new THREE.Mesh(Armrests_seat, Armrests_seat_material);
    arm2.position.set(-3.1, 0.4, 0.5); // Adjusted position near the right edge of the seat
    sofa.add(arm2);

    const legGeometry = new THREE.BoxGeometry(0.4, 1.5, 0.5);

    const legTexture = textureLoader.load('/static/img/sofa2.jpeg');
    const legMaterial = new THREE.MeshStandardMaterial({ map: legTexture, roughness: 105 });
    //const legMaterial = new THREE.MeshBasicMaterial({ color: 0x5C4033 }); // Brown color
    const sofaLegs = new THREE.Group();

    const sofaLeg1 = new THREE.Mesh(legGeometry, legMaterial);
    sofaLeg1.position.set(-3, -0.6, -1);
    sofaLegs.add(sofaLeg1);

    const sofaLeg2 = new THREE.Mesh(legGeometry, legMaterial);
    sofaLeg2.position.set(3, -0.6, -1);
    sofaLegs.add(sofaLeg2);

    const sofaLeg3 = new THREE.Mesh(legGeometry, legMaterial);
    sofaLeg3.position.set(-3.25, -0.6, 0.95);
    sofaLegs.add(sofaLeg3);

    const sofaLeg4 = new THREE.Mesh(legGeometry, legMaterial);  
    sofaLeg4.position.set(3.25, -0.6, 0.95);
    sofaLegs.add(sofaLeg4);

    sofa.add(sofaLegs);

    // Position the sofa in the scene
     sofa.position.set(12, 1, -2);
}