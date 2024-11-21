import type { StaticImageData } from 'next/image';

export interface SvitlanaProjectsImagesType {
  src: string | StaticImageData;
  name: string;
  link: string;
}

export interface ProjectsImagesProps {
  images: SvitlanaProjectsImagesType[];
}
