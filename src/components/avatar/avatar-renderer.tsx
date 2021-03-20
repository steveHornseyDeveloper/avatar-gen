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
  await addLayerToAvatar(context, imgs.male.background[avatarSettings.sprites.background], getCoords(0, 0))
  await addLayerToAvatar(context, imgs.male.face[avatarSettings.sprites.face], getCoords(0, 0))
  await addLayerToAvatar(context, imgs.male.clothes[avatarSettings.sprites.clothes], getCoords(0, 0))
  await addLayerToAvatar(context, imgs.male.eyes[avatarSettings.sprites.eyes], getCoords(0, 0))
  await addLayerToAvatar(context, imgs.male.hair[avatarSettings.sprites.hair], getCoords(0, 0))
  await addLayerToAvatar(context, imgs.male.mouth[avatarSettings.sprites.mouth], getCoords(0, 0))
}


const AvatarRenderer: React.FC<Props> = (props: Props): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const {
    avatarSettings
  } = props;

  useEffect(
    () => {
      const context = canvasRef?.current?.getContext('2d')
      if (!context) {
        return;
      }

      context.clearRect(0, 0, 400, 400);

      createAvatar(context, props.avatarSettings)
    },
    [avatarSettings]
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
