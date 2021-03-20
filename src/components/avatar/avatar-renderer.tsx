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


const addLayerToAvatar = (context: CanvasRenderingContext2D, img: string, coords: Coords) => new Promise<void>((resolve) => {
  const image = new Image()
  image.onload = () => {
    context.drawImage(image, coords.x, coords.y)
    resolve();
  }
  image.src = img;
})

const getCoords = (x: number, y: number): Coords => ({x, y})
const createAvatar = async (context: CanvasRenderingContext2D) => {
  await addLayerToAvatar(context, background, getCoords(0, 0))
  await addLayerToAvatar(context, face, getCoords(0, 0))
  await addLayerToAvatar(context, clothes, getCoords(0, 0))
  await addLayerToAvatar(context, eyes, getCoords(0, 0))
  await addLayerToAvatar(context, hair, getCoords(0, 0))
  await addLayerToAvatar(context, mouth, getCoords(0, 0))
}


const AvatarRenderer: React.FC<Props> = (props: Props): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(
    () => {
      const context = canvasRef?.current?.getContext('2d')
      if (!context) {
        return;
      }

      createAvatar(context)
    },
    []
    )

    return (
        <div>
          <canvas
            id="avatar"
            width="400"
            height="400"
            ref={canvasRef} />
        </div>
    );
};

export default AvatarRenderer;
