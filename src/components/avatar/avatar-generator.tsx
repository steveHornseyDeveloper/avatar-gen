import React from 'react';
import {AvatarSettings, Sprites} from "./avatar";
import SpriteCarousel from "./sprite-carousel";

type Props = {
  avatarSettings: AvatarSettings
  onAvatarSettingChange: (item: keyof Sprites, indexChange: number) => void
};

const AvatarGenerator: React.FC<Props> = (props: Props): JSX.Element => {
    const {
      avatarSettings,
      onAvatarSettingChange,
    } = props;

    return (
      <div>
        <SpriteCarousel
          avatarSettings={avatarSettings}
          spriteName="background"
          onAvatarSettingChange={onAvatarSettingChange}
        />
      </div>
    );
};

export default AvatarGenerator;
