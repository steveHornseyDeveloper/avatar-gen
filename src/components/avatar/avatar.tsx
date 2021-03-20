import React, {useState} from 'react';
import AvatarRenderer from "./avatar-renderer";
import AvatarGenerator from "./avatar-generator";
import './avatar.scss'


type Props = {

};

export type AvatarSettings = {
  gender: 'male' | 'female';
  background: number;
  face: number;
  clothes: number;
  eyes: number;
  hair: number;
  mouth: number;
}

const initialAvatar: AvatarSettings = {
  gender: 'male',
  background: 0,
  face: 0,
  clothes: 0,
  eyes: 0,
  hair: 0,
  mouth: 0,
}

const Avatar: React.FC<Props> = (props: Props): JSX.Element => {
    const [avatarSetting] = useState(initialAvatar)
    // const {
    //
    // } = props;

    return (
      <div className="avatar">
        <div className="avatar-renderer">
          <AvatarRenderer avatarSettings={avatarSetting} />
        </div>
        <div className="avatar-generator">
          <AvatarGenerator />
        </div>
      </div>
    );
};

export default Avatar;
