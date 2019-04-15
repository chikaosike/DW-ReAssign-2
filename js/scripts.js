window.onload = init;

function init() {
    var scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20);
    camera.position.set(-1.8, 0.9, 10);

    var renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    renderer.setSize(window.innderWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);

    var loader = new THREE.GLTFLoader();

    loader.load(
        'content/stone-pipe.gltf',
        function (gltf) {

            scene.add(gltf.scene);


            render();

        },
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        function (error) {

            console.log('An error happened');

        }
    );

    var render = function () {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
}
