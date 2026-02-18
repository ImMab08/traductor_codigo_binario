export type IconProps = React.SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
};

export interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}