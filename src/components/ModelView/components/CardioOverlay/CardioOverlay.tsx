export const CardioOverlay: React.FC = () => {
    const offsetY = -100 / 100;

    return (
        <>
            <mesh position={[0, offsetY, 0]}>
                <ringGeometry args={[195 / 100, 200 / 100, 64]} />
                <meshBasicMaterial color="red" />
            </mesh>

            <mesh position={[0, offsetY, 0]}>
                <circleGeometry args={[20 / 100, 64]} />
                <meshBasicMaterial color="blue" />
            </mesh>
        </>
    );
};