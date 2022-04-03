import { Canvas } from '@react-three/fiber'

import React, { Suspense } from 'react';

import Character from '../../components/Character/Character'
import { OrbitControls } from '@react-three/drei'

import './Play.scss'

const Play = () => {
	return (
		<div className="Play">
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Suspense fallback={null}>
					<Character scale={[2, 2, 2]} />
					<OrbitControls />
				</Suspense>
				
			</Canvas>
		</div>
	)
}

export default Play
