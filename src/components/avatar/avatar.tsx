import React, {useState} from 'react';
import AvatarRenderer from "./avatar-renderer";
import AvatarGenerator from "./avatar-generator";
import imgs from './img';
import './avatar.scss'

type Props = {

};

const genders = ['male', 'female'];
export type AvatarSettings = {
  gender: number;
  sprites: Sprites
}

export type Sprites = {
  background: number;
  face: number;
  clothes: number;
  eyes: number;
  hair: number;
  mouth: number;
}

const initialAvatar: AvatarSettings = {
  gender: 0,
  sprites: {
    background: 0,
    face: 0,
    clothes: 0,
    eyes: 0,
    hair: 0,
    mouth: 0,
  }
}

const getNewIndex = (lengthOfOptions: number, currentIndex: number, indexChange: number) => {
  // If I was smart I could do this in a single line.
  const newIndex = currentIndex + indexChange;

  if (newIndex === -1) {
    return lengthOfOptions -1;
  }

  if (newIndex > lengthOfOptions) {
    return 0;
  }

  return newIndex;
}

const Avatar: React.FC<Props> = (props: Props): JSX.Element => {
    const [avatarSetting, setAvatarSettings] = useState(initialAvatar)

    const handleAvatarSettingChange = (item: keyof Sprites, indexChange: number) => {
      setAvatarSettings({
        ...avatarSetting,
        sprites: {
          ...avatarSetting.sprites,
          [item]: getNewIndex(imgs.male[item].length, avatarSetting.sprites[item], indexChange)
        }
      })
    }

    return (
      <div className="avatar">
        <div className="avatar-renderer">
          <AvatarRenderer avatarSettings={avatarSetting} />
        </div>
        <div className="avatar-generator">
          <AvatarGenerator
            avatarSettings={avatarSetting}
            onAvatarSettingChange={handleAvatarSettingChange}
          />
        </div>
      </div>
    );
};

export default Avatar;
