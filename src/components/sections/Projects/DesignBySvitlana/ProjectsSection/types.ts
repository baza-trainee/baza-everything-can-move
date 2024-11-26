import type { StaticImageData } from 'next/image';

export interface SvitlanaProjectsImagesType {
  src: string | StaticImageData;
  name: string;
  link?: string;
  top?: number;
  left?: number;
}

export interface ProjectsImagesProps {
  images: SvitlanaProjectsImagesType[];
}
