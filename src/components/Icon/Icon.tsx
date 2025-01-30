import React from 'react';

import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';
import {Pressable} from 'react-native';
import {FacebookIcon} from '../../assets/icons/FacebookIcon';
import {GoogleIcon} from '../../assets/icons/GoogleIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    <Pressable hitSlop={10} onPress={onPress}>
      <SVGIcon color={colors[color]} size={size} />
    </Pressable>;
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  EyeOff: EyeOffIcon,
  facebook: FacebookIcon,
  google: GoogleIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
