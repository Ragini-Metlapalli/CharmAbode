function generateBed(scene) {
    // Create the bed
    const bed = new THREE.Group();
    scene.add(bed);

    // Wooden base (depth inside the bed)
    const baseGeometry = new THREE.BoxGeometry(5, 0.4, 8);
    const woodenBaseTexture = new THREE.TextureLoader().load('/static/img/bed.jpeg'); 
    const woodenBaseMaterial = new THREE.MeshStandardMaterial({ map: woodenBaseTexture, roughness: 0.8 });
    const base = new THREE.Mesh(baseGeometry, woodenBaseMaterial);
    bed.add(base);

    // Mattress
    const mattressGeometry = new THREE.BoxGeometry(5, 0.6, 8);
    const whiteMattressTexture = new THREE.TextureLoader().load('/static/img/mattress2.jpg'); 
    const whiteMattressMaterial = new THREE.MeshStandardMaterial({ map: whiteMattressTexture, roughness: 0.5 });
    const mattress = new THREE.Mesh(mattressGeometry, whiteMattressMaterial);
    mattress.position.set(0, 0.3, 0);
    bed.add(mattress);

    // Back Support
    const backSupportGeometry = new THREE.BoxGeometry(5, 2, 0.4);
    const backSupportMaterial = new THREE.MeshStandardMaterial({ map: woodenBaseTexture, roughness: 0.8 });
    const backSupport = new THREE.Mesh(backSupportGeometry, backSupportMaterial);
    backSupport.position.set(0, 1, -4);
    bed.add(backSupport);

    // Legs
    const legGeometry = new THREE.BoxGeometry(0.4, 2, 0.2);
    const legsMaterial = new THREE.MeshStandardMaterial({ map: woodenBaseTexture, roughness: 0.8 });
    const legs = new THREE.Group();

    const leg1 = new THREE.Mesh(legGeometry, legsMaterial);
    leg1.position.set(-2.2, -1, -3.4);
    legs.add(leg1);

    const leg2 = new THREE.Mesh(legGeometry, legsMaterial);
    leg2.position.set(2.2, -1, -3.4);
    legs.add(leg2);

    const leg3 = new THREE.Mesh(legGeometry, legsMaterial);
    leg3.position.set(-2.2, -1, 3.4);
    legs.add(leg3);

    const leg4 = new THREE.Mesh(legGeometry, legsMaterial);
    leg4.position.set(2.2, -1, 3.4);
    legs.add(leg4);

    bed.add(legs);

    // Position the bed in the scene
    bed.position.set(12, -1, -2);
}


// function generateBed(scene){
//     // Create the bed
//     const bed = new THREE.Group();
//     scene.add(bed);

//     // Cot (depth inside the bed)
//     const cotGeometry = new THREE.BoxGeometry(5, 0.4, 8);
//     const textureLoader = new THREE.TextureLoader();
//     const cotTexture = textureLoader.load('/static/img/bed2.jpeg');
//     const cotMaterial = new THREE.MeshStandardMaterial({ map: cotTexture, roughness: 105 });
//    // const cotMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFDD0 }); // Cream color
//     const cot = new THREE.Mesh(cotGeometry, cotMaterial);
//     bed.add(cot);

//      // Back Support
//      const backSupportGeometry = new THREE.BoxGeometry(5, 2, 0.4);
//      const backSupport = new THREE.Mesh(backSupportGeometry, cotMaterial);
//      backSupport.position.set(0, 1, -5.8);
//      bed.add(backSupport);
 
//     // Legs
//     const legGeometry = new THREE.BoxGeometry(0.4, 2, 0.2);
//     const legs = new THREE.Group();

//     const leg1 = new THREE.Mesh(legGeometry, cotMaterial);
//     leg1.position.set(-2.2, -1, -3.4);
//     legs.add(leg1);

//     const leg2 = new THREE.Mesh(legGeometry, cotMaterial);
//     leg2.position.set(2.2, -1, -3.4);
//     legs.add(leg2);

//     const leg3 = new THREE.Mesh(legGeometry, cotMaterial);
//     leg3.position.set(-2.2, -1, 3.4);
//     legs.add(leg3);

//     const leg4 = new THREE.Mesh(legGeometry, cotMaterial);
//     leg4.position.set(2.2, -1, 3.4);
//     legs.add(leg4);

//     bed.add(legs);

//     // Position the bed in the scene 
//     bed.position.set(4, -6, -5); 

// } 
