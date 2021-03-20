import React, {useEffect, useRef} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {AvatarSettings, Sprites} from "./avatar";
import imgs from './img'

type Props = {
  avatarSettings: AvatarSettings;
  spriteName: keyof Sprites;
  onAvatarSettingChange: (item: keyof Sprites, indexChange: number) => void
};

const SpriteCarousel: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    avatarSettings,
    spriteName,
    onAvatarSettingChange,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(
    () => {
      const context = canvasRef?.current?.getContext('2d')
      if (!context) {
        return;
      }

      context.clearRect(0, 0, 100, 100);

      const image = new Image()
      image.onload = () => {
        context.drawImage(image, 0, 0, 100, 100)
      }
      image.src = imgs.male[spriteName][avatarSettings.sprites[spriteName]];
    },
    [avatarSettings]
  )

  return (
    <div className="sprite-carousel">
      <FaChevronLeft
        onClick={() => onAvatarSettingChange(spriteName, +1)}/>
      <canvas
        ref={canvasRef}
        width={100}
        height={100}
      />
      <FaChevronRight
        onClick={() => onAvatarSettingChange(spriteName, -1)}/>
    </div>
  );
};

export default SpriteCarousel;
