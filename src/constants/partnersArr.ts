import { ICONS_PARTNERS } from './icons/iconsSrc';

export interface Partner {
  Icon: React.FC;
  name: string;
}
export type PartnersArrProps = Partner[];

export const PARTNERS_ARR: PartnersArrProps = [
  {
    name: 'Partner 1',
    Icon: ICONS_PARTNERS.PARTNER_1,
  },
  {
    name: 'Partner 2',
    Icon: ICONS_PARTNERS.PARTNER_2,
  },
  {
    name: 'Partner 3',
    Icon: ICONS_PARTNERS.PARTNER_3,
  },
  {
    name: 'Partner 4',
    Icon: ICONS_PARTNERS.PARTNER_4,
  },
  {
    name: 'Partner 5',
    Icon: ICONS_PARTNERS.PARTNER_5,
  },
  {
    name: 'Partner 6',
    Icon: ICONS_PARTNERS.PARTNER_6,
  },
  {
    name: 'Partner 7',
    Icon: ICONS_PARTNERS.PARTNER_7,
  },
  {
    name: 'Partner 8',
    Icon: ICONS_PARTNERS.PARTNER_8,
  },
  {
    name: 'Partner 9',
    Icon: ICONS_PARTNERS.PARTNER_9,
  },
  {
    name: 'Partner 10',
    Icon: ICONS_PARTNERS.PARTNER_10,
  },
];
