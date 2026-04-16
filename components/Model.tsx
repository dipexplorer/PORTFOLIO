import * as THREE from "three";

import React, { useEffect, useRef } from "react";
// useRef model group ko reference karne ke liye, useEffect animation start karne ke liye.

import { useGLTF, useAnimations } from "@react-three/drei";
// useGLTF model file load karta hai.
// useAnimations model ke andar jo animation clips hain unko access karta hai.

import type { GLTF } from "three-stdlib";
// GLTF ka type import kiya gaya hai, TypeScript help ke liye.

type GLTFResult = GLTF & {
    nodes: Record<string, THREE.Object3D>;
    materials: Record<string, THREE.Material>;
};
// Ye custom type hai. Isse TypeScript ko samajh aata hai ki loaded object me nodes aur materials honge.

type SkinnedMeshNode = THREE.SkinnedMesh & {
    morphTargetDictionary?: Record<string, number>;
    morphTargetInfluences?: number[];
};

const Model = (props: React.ComponentProps<"group">) => {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials, animations } = useGLTF(
        "/models/smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf",
    ) as unknown as GLTFResult;

    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        const firstAction = Object.values(actions).find(Boolean);
        firstAction?.reset().play();
    }, [actions]);

    const meshNode = (name: string) => nodes[name] as THREE.Mesh;
    const skinnedMeshNode = (name: string) => nodes[name] as SkinnedMeshNode;

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group
                            name="GLTF_SceneRootNode"
                            rotation={[Math.PI / 2, 0, 0]}
                        >
                            <group name="pasokon_1">
                                <mesh
                                    name="Object_4"
                                    castShadow
                                    receiveShadow
                                    geometry={meshNode("Object_4").geometry}
                                    material={materials.pasokon}
                                />
                                <mesh
                                    name="Object_5"
                                    castShadow
                                    receiveShadow
                                    geometry={meshNode("Object_5").geometry}
                                    material={materials.terrarium1}
                                />
                            </group>
                            <group
                                name="amelia_37"
                                position={[-0.197, 0.901, 0]}
                                rotation={[0, 0.864, 0]}
                            >
                                <group name="GLTF_created_0">
                                    <primitive
                                        object={nodes.GLTF_created_0_rootJoint}
                                    />
                                    <skinnedMesh
                                        name="Object_10"
                                        geometry={
                                            skinnedMeshNode("Object_10")
                                                .geometry
                                        }
                                        material={materials.terrarium1ame}
                                        skeleton={
                                            skinnedMeshNode("Object_10")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_12"
                                        geometry={
                                            skinnedMeshNode("Object_12")
                                                .geometry
                                        }
                                        material={
                                            materials.terrarium1ameoutline
                                        }
                                        skeleton={
                                            skinnedMeshNode("Object_12")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_14"
                                        geometry={
                                            skinnedMeshNode("Object_14")
                                                .geometry
                                        }
                                        material={materials.terrarium1ame}
                                        skeleton={
                                            skinnedMeshNode("Object_14")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_16"
                                        geometry={
                                            skinnedMeshNode("Object_16")
                                                .geometry
                                        }
                                        material={
                                            materials.terrarium1ameoutline
                                        }
                                        skeleton={
                                            skinnedMeshNode("Object_16")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_18"
                                        geometry={
                                            skinnedMeshNode("Object_18")
                                                .geometry
                                        }
                                        material={materials.terrarium1ame}
                                        skeleton={
                                            skinnedMeshNode("Object_18")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_19"
                                        geometry={
                                            skinnedMeshNode("Object_19")
                                                .geometry
                                        }
                                        material={
                                            materials.terrarium1ameoutline
                                        }
                                        skeleton={
                                            skinnedMeshNode("Object_19")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_21"
                                        geometry={
                                            skinnedMeshNode("Object_21")
                                                .geometry
                                        }
                                        material={
                                            materials.terrarium1ameoutline
                                        }
                                        skeleton={
                                            skinnedMeshNode("Object_21")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_23"
                                        geometry={
                                            skinnedMeshNode("Object_23")
                                                .geometry
                                        }
                                        material={materials.terrarium1ame}
                                        skeleton={
                                            skinnedMeshNode("Object_23")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_25"
                                        geometry={
                                            skinnedMeshNode("Object_25")
                                                .geometry
                                        }
                                        material={materials.terrarium1ame}
                                        skeleton={
                                            skinnedMeshNode("Object_25")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_27"
                                        geometry={
                                            skinnedMeshNode("Object_27")
                                                .geometry
                                        }
                                        material={
                                            materials.terrarium1ameoutline
                                        }
                                        skeleton={
                                            skinnedMeshNode("Object_27")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_29"
                                        geometry={
                                            skinnedMeshNode("Object_29")
                                                .geometry
                                        }
                                        material={materials.terrarium1ame}
                                        skeleton={
                                            skinnedMeshNode("Object_29")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_31"
                                        geometry={
                                            skinnedMeshNode("Object_31")
                                                .geometry
                                        }
                                        material={
                                            materials.terrarium1ameoutline
                                        }
                                        skeleton={
                                            skinnedMeshNode("Object_31")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_33"
                                        geometry={
                                            skinnedMeshNode("Object_33")
                                                .geometry
                                        }
                                        material={materials.terrarium1ame}
                                        skeleton={
                                            skinnedMeshNode("Object_33")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_35"
                                        geometry={
                                            skinnedMeshNode("Object_35")
                                                .geometry
                                        }
                                        material={
                                            materials.terrarium1ameoutline
                                        }
                                        skeleton={
                                            skinnedMeshNode("Object_35")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_37"
                                        geometry={
                                            skinnedMeshNode("Object_37")
                                                .geometry
                                        }
                                        material={materials.terrarium1ame}
                                        skeleton={
                                            skinnedMeshNode("Object_37")
                                                .skeleton
                                        }
                                        morphTargetDictionary={
                                            skinnedMeshNode("Object_37")
                                                .morphTargetDictionary
                                        }
                                        morphTargetInfluences={
                                            skinnedMeshNode("Object_37")
                                                .morphTargetInfluences
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_39"
                                        geometry={
                                            skinnedMeshNode("Object_39")
                                                .geometry
                                        }
                                        material={materials.terrarium1ame}
                                        skeleton={
                                            skinnedMeshNode("Object_39")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_41"
                                        geometry={
                                            skinnedMeshNode("Object_41")
                                                .geometry
                                        }
                                        material={
                                            materials.terrarium1ameoutline
                                        }
                                        skeleton={
                                            skinnedMeshNode("Object_41")
                                                .skeleton
                                        }
                                    />
                                    <group name="armies_21" />
                                    <group name="armies001_22" />
                                    <group name="bode_23" />
                                    <group name="bode001_24" />
                                    <group name="Cylinder003_25" />
                                    <group name="Cylinder004_26" />
                                    <group name="eyea_27" />
                                    <group name="feets_28" />
                                    <group name="feets001_29" />
                                    <group name="guitar_30" />
                                    <group name="guitar001_31" />
                                    <group name="hair_32" />
                                    <group name="hairoutline_33" />
                                    <group name="mouf_34" />
                                    <group name="nogging_35" />
                                    <group name="nogging001_36" />
                                </group>
                            </group>
                            <group
                                name="isopod002_49"
                                position={[0, 0.864, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={0.073}
                            >
                                <group name="GLTF_created_1">
                                    <primitive
                                        object={nodes.GLTF_created_1_rootJoint}
                                    />
                                    <skinnedMesh
                                        name="Object_65"
                                        geometry={
                                            skinnedMeshNode("Object_65")
                                                .geometry
                                        }
                                        material={materials.terrarium1}
                                        skeleton={
                                            skinnedMeshNode("Object_65")
                                                .skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name="Object_67"
                                        geometry={
                                            skinnedMeshNode("Object_67")
                                                .geometry
                                        }
                                        material={
                                            materials.terrarium1ameoutline
                                        }
                                        skeleton={
                                            skinnedMeshNode("Object_67")
                                                .skeleton
                                        }
                                    />
                                    <group name="isopod_47" />
                                    <group name="isopod001_48" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload(
    "/models/smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf",
);

export default Model;
