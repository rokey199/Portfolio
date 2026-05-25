import { Canvas } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={2} />

        <Float speed={2} rotationIntensity={2}>
          <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#38BDF8" />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  )
}