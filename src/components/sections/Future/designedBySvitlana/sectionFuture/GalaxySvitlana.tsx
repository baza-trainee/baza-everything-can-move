import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Galaxy from '../../common/Galaxy';

function GalaxySvitlana() {
  return (
    <div className="absolute bottom-0 right-[-10%] h-[110%] w-[110%] 2xl:right-0 2xl:w-[55%]">
      <Canvas camera={{ position: [0, 10, 0], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 10, 0]} intensity={1.8} />
        <Galaxy
          radius={3.5}
          colors={{ insideColor: '#ffa575', outsideColor: '#311599' }}
          size={0.05}
          spinMultiplier={2.3}
          range={0.8}
          rangeY={0.8}
        />
        <OrbitControls enableDamping={true} />
      </Canvas>
    </div>
  );
}

export default GalaxySvitlana;
