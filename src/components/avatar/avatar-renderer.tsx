import React, {useEffect, useRef} from 'react';

import imgs from './img'
import {AvatarSettings} from "./avatar";

type Props = {
  avatarSettings: AvatarSettings
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
const createAvatar = async (context: CanvasRenderingContext2D, avatarSettings: AvatarSettings) => {
  await addLayerToAvatar(context, imgs[avatarSettings.gender].backgrounds[avatarSettings.background], getCoords(0, 0))
  await addLayerToAvatar(context, imgs[avatarSettings.gender].faces[avatarSettings.face], getCoords(0, 0))
  await addLayerToAvatar(context, imgs[avatarSettings.gender].clothes[avatarSettings.clothes], getCoords(0, 0))
  await addLayerToAvatar(context, imgs[avatarSettings.gender].eyes[avatarSettings.eyes], getCoords(0, 0))
  await addLayerToAvatar(context, imgs[avatarSettings.gender].hair[avatarSettings.hair], getCoords(0, 0))
  await addLayerToAvatar(context, imgs[avatarSettings.gender].mouths[avatarSettings.mouth], getCoords(0, 0))
}


const AvatarRenderer: React.FC<Props> = (props: Props): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(
    () => {
      const context = canvasRef?.current?.getContext('2d')
      if (!context) {
        return;
      }

      createAvatar(context, props.avatarSettings)
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
