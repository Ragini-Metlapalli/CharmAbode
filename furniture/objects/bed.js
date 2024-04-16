function generateBed(scene){
    // Create the bed
    const bed = new THREE.Group();
    scene.add(bed);

    // Cot (depth inside the bed)
    const cotGeometry = new THREE.BoxGeometry(5, 0.4, 8);
    const cotTexture = new THREE.TextureLoader().load('bed2.jpeg');
    const cotMaterial = new THREE.MeshStandardMaterial({ map: cotTexture, roughness: 105 });
   // const cotMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFDD0 }); // Cream color
    const cot = new THREE.Mesh(cotGeometry, cotMaterial);
    bed.add(cot);

     // Back Support
     const backSupportGeometry = new THREE.BoxGeometry(5, 2, 0.4);
     const backSupport = new THREE.Mesh(backSupportGeometry, cotMaterial);
     backSupport.position.set(0, 1, -5.8);
     bed.add(backSupport);
 
    // Legs
    const legGeometry = new THREE.BoxGeometry(0.4, 2, 0.2);
    const legs = new THREE.Group();

    const leg1 = new THREE.Mesh(legGeometry, cotMaterial);
    leg1.position.set(-2.2, -1, -3.4);
    legs.add(leg1);

    const leg2 = new THREE.Mesh(legGeometry, cotMaterial);
    leg2.position.set(2.2, -1, -3.4);
    legs.add(leg2);

    const leg3 = new THREE.Mesh(legGeometry, cotMaterial);
    leg3.position.set(-2.2, -1, 3.4);
    legs.add(leg3);

    const leg4 = new THREE.Mesh(legGeometry, cotMaterial);
    leg4.position.set(2.2, -1, 3.4);
    legs.add(leg4);

    bed.add(legs);

    // Position the bed in the scene 
    bed.position.set(4, -6, -5); 

} 
