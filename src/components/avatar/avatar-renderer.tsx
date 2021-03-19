import React, {useEffect, useRef} from 'react';
// import AvatarGenerator from "./AvatarGenerator";

import background from './img/male/background1.png'
import clothes from './img/male/clothes1.png'


type Props = {

};

type Coords = {
  x: number,
  y: number,
}


const addLayerToAvatar = (context: CanvasRenderingContext2D, img: string, coords: Coords) => new Promise((resolve, reject) => {
  const image = new Image()
  image.onload = () => {
    context.drawImage(image, coords.x, coords.y)
  }
  image.src = img;
})

const getCoords = (x: number, y: number): Coords => ({x, y})

const createAvatar = async (context: CanvasRenderingContext2D) => {
  await addLayerToAvatar(context, background, getCoords(0, 0))
  await addLayerToAvatar(context, clothes, getCoords(0, 0))
}

const AvatarRenderer: React.FC<Props> = (props: Props): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(
    () => {
      const context = canvasRef?.current?.getContext('2d')
      if (!context) {
        return;
      }

      addLayerToAvatar(context, background, getCoords(0, 0))

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
            ref={canvasRef} />
        </div>
    );
};

export default AvatarRenderer;
