	//var width = window.innerWidth;
	//var height = window.innerHeight;

	var width = 500;
	var height = 500;

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
	camera.position.z = 15;

	var renderer = new THREE.WebGLRenderer( {
		antialias: true
	} );

	renderer.setClearColor("#e5e5e5");
	renderer.setSize(width, height);

	document.getElementsByClassName('image-box')[0].appendChild(renderer.domElement);

	window.addEventListener('resize', () => {
		renderer.setSize(width, height);
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	})

	

	//Now Creating Object
	// var geometry = new THREE.SphereGeometry(1, 40, 40);
	// var material = new THREE.MeshLambertMaterial({color: 0xFF6600} );
	// var mesh = new THREE.Mesh( geometry, material);
	// scene.add(mesh);

	


	//var boxGeometry = new THREE.BoxGeometry(3.4, 2, 1);
	//var boxGeometry = new THREE.BoxGeometry(6, 6, 2);
	//console.log(boxX);
	var boxGeometry = new THREE.BoxGeometry(boxX, boxY, boxZ);
	var boxMaterial = new THREE.MeshLambertMaterial({ color: 0xFFCC00 });
	var box = new THREE.Mesh(boxGeometry, boxMaterial);
	//box.rotation.y = Math.PI * 45 / 180;
	box.rotation.x = 2;
	box.rotation.z = 0.5;
	//box.rotation.y = 1;
	scene.add(box);

	
	//var boxGeometry1 = new THREE.BoxGeometry(3.5, 2.2, 0.01);
	var boxGeometry1 = new THREE.BoxGeometry(boxX, boxY, boxZ);
	
	var boxMaterial1 = new THREE.MeshLambertMaterial({ color: 0xFF6600 });
	var box1 = new THREE.Mesh(boxGeometry1, boxMaterial1);
	//box.rotation.y = Math.PI * 45 / 180;
	box1.rotation.x = 2;
	box1.rotation.z = 0.5;
	box1.position.y = 0.51;
	box1.position.z = 0.08;
	//box1.rotation.y = 1;
	box1.translateZ( -1 );

	scene.add(box1);

	

	var pointLight = new THREE.PointLight(0xffffff, 1, 500);
	pointLight.position.set(10, 30, 20);
	scene.add(pointLight);

	//renderer.render(scene, camera);
	function render() {
        requestAnimationFrame(render); 
        //box1.rotation.x -= 0.01;    
        //box1.rotation.z += 0.05;    
        // box1.rotation.y -= 0.01;    
        // box1.rotation.z += 0.01; 

        renderer.render(scene, camera);
	}
	
var example = document.getElementsByClassName("example");
	document.body.addEventListener('click', () =>  {
		//box1.rotation.x -= 1;    
		
		// box1.rotation.x = 3.1;    
		// box1.rotation.y = 0.06; 
		// box1.rotation.z = 0.06; 
		// box1.position.x = 1;   
		// box1.position.y = 1.9;   
		
		let val = "W: "+ box1.rotation.x + " Z: "+ box1.rotation.z;
		example.innerHTML  = val;
		//console.log(val);


	})


	render();
