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
        <SpriteCarousel
          avatarSettings={avatarSettings}
          spriteName="face"
          onAvatarSettingChange={onAvatarSettingChange}
        />
        <SpriteCarousel
          avatarSettings={avatarSettings}
          spriteName="clothes"
          onAvatarSettingChange={onAvatarSettingChange}
        />
        <SpriteCarousel
          avatarSettings={avatarSettings}
          spriteName="eyes"
          onAvatarSettingChange={onAvatarSettingChange}
        />
        <SpriteCarousel
          avatarSettings={avatarSettings}
          spriteName="hair"
          onAvatarSettingChange={onAvatarSettingChange}
        />
        <SpriteCarousel
          avatarSettings={avatarSettings}
          spriteName="mouth"
          onAvatarSettingChange={onAvatarSettingChange}
        />
      </div>
    );
};

export default AvatarGenerator;
