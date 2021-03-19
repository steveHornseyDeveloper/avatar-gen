import React from 'react';
import AvatarRenderer from "./avatar-renderer";
import AvatarGenerator from "./avatar-generator";
import './avatar.scss'

type Props = {

};

const Avatar: React.FC<Props> = (props: Props): JSX.Element => {
    // const {
    //
    // } = props;

    return (
      <div className="avatar">
        <div className="avatar-renderer">
          <AvatarRenderer />
        </div>
        <div className="avatar-generator">
          <AvatarGenerator />
        </div>
      </div>
    );
};

export default Avatar;
