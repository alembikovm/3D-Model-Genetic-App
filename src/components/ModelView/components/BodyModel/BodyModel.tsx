import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

interface BodyModelProps {
    zoomLevel: number;
    isCardioSelected: boolean;
}

export const BodyModel: React.FC<BodyModelProps> = ({ zoomLevel, isCardioSelected }) => {
    const groupRef = useRef<THREE.Group>(null);
    const [model, setModel] = useState<THREE.Group | null>(null);
    const materialRef = useRef<THREE.Material | null>(null);

    const prevZoomLevel = useRef(zoomLevel);

    useEffect(() => {
        const loader = new OBJLoader();
        loader.load(
            "/src/assets/body.obj",
            (obj: any) => {
                obj.traverse((child: THREE.Mesh) => {
                    if (child.isMesh) {
                        const mesh = child as THREE.Mesh;
                        const material = new THREE.MeshStandardMaterial({
                            color: new THREE.Color(0xf1c6d3),
                            wireframe: true,
                            transparent: true,
                            opacity: isCardioSelected ? 0.5 : 1,
                        });
                        mesh.material = material;
                        materialRef.current = material;
                    }
                });
                setModel(obj);
            },
            (xhr: { loaded: number; total: number; }) => console.log(`Loading model: ${(xhr.loaded / xhr.total) * 100}%`),
            (error: any) => console.error("Error loading model:", error)
        );
    }, [isCardioSelected]);

    useFrame(() => {
        if (groupRef.current) {
            const scale = THREE.MathUtils.lerp(prevZoomLevel.current * 0.05, zoomLevel * 0.05, 0.1);
            groupRef.current.scale.set(scale, scale, scale);
            prevZoomLevel.current = zoomLevel;

            const positionY = THREE.MathUtils.lerp(groupRef.current.position.y, -2 + (zoomLevel - 1) * -4, 0.1);
            const positionZ = THREE.MathUtils.lerp(groupRef.current.position.z, 0.1, 0.1);

            groupRef.current.position.set(0, positionY, positionZ);

            if (materialRef.current) {
                const targetOpacity = isCardioSelected ? 0.5 : 1;
                materialRef.current.opacity = THREE.MathUtils.lerp(
                    materialRef.current.opacity,
                    targetOpacity,
                    0.1
                );
            }
        }
    });

    return (
        <group ref={groupRef}>
            {model && <primitive object={model} />}
        </group>
    );
};