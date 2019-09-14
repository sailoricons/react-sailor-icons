/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

type Icon = ComponentType<Props>;
export const Anchor: Icon;
export const Bell: Icon;
export const Boat: Icon;
export const Bookmarks: Icon;
export const ChevronDown: Icon;
export const ChevronUp: Icon;
export const Close: Icon;
export const CompasNavigation: Icon;
export const CourseDown: Icon;
export const CourseUp: Icon;
export const Done: Icon;
export const Download: Icon;
export const Faq: Icon;
export const File: Icon;
export const Flag: Icon;
export const Folder: Icon;
export const Heart: Icon;
export const Help: Icon;
export const Link: Icon;
export const Location: Icon;
export const Lock: Icon;
export const Mark: Icon;
export const MastMenu: Icon;
export const Menu: Icon;
export const Message: Icon;
export const Minus: Icon;
export const OptionsBox: Icon;
export const Options: Icon;
export const Plus: Icon;
export const Profile: Icon;
export const Profiles: Icon;
export const ReFind: Icon;
export const Refresh: Icon;
export const Resize: Icon;
export const RudderControls: Icon;
export const SailMenu: Icon;
export const Search: Icon;
export const Settings: Icon;
export const SoundOff: Icon;
export const SoundOn: Icon;
export const Star: Icon;
export const Voice: Icon;
