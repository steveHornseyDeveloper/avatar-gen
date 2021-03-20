import React, {useEffect, useRef} from 'react';

import background from './img/male/background1.png'
import face from './img/male/face4.png'
import clothes from './img/male/clothes24.png'
import eyes from './img/male/eye16.png'
import hair from './img/male/hair23.png'
import mouth from './img/male/mouth24.png'


type Props = {

};

type Coords = {
  x: number,
  y: number,
}


const addLayerToAvatar = (canvas: HTMLCanvasElement | null, img: string, coords: Coords) => new Promise<void>((resolve) => {
  const context = canvas?.getContext('2d')
  if (!context) {
    return;
  }

  const image = new Image()
  image.onload = () => {
    context.drawImage(image, coords.x, coords.y)
    resolve();
  }
  image.src = img;
})

const getCoords = (x: number, y: number): Coords => ({x, y})

const AvatarRenderer: React.FC<Props> = (props: Props): JSX.Element => {
  const backgroundRef = useRef<HTMLCanvasElement>(null)
  const clothesRef = useRef<HTMLCanvasElement>(null)

  const createAvatar = async () => { // context: CanvasRenderingContext2D
    await addLayerToAvatar(backgroundRef.current, background, getCoords(0, 0))
    await addLayerToAvatar(backgroundRef.current, face, getCoords(0, 0))
    await addLayerToAvatar(backgroundRef.current, clothes, getCoords(0, 0))
    await addLayerToAvatar(backgroundRef.current, eyes, getCoords(0, 0))
    await addLayerToAvatar(backgroundRef.current, hair, getCoords(0, 0))
    await addLayerToAvatar(backgroundRef.current, mouth, getCoords(0, 0))
  }

  useEffect(
    () => {
      // const context = canvasRef?.current?.getContext('2d')
      // if (!context) {
      //   return;
      // }

      createAvatar()

      // context?.drawImage(image, 0, 0)
    },
    []
    )

    return (
        <div>
          <canvas
            id="avatar"
            width="400"
            height="400"
            ref={backgroundRef} />
        </div>
    );
};

export default AvatarRenderer;
