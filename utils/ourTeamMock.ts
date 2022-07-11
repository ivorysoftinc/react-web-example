import { OurTeamPhotos } from './constants';

export interface IOurTeam {
  id: number;
  name: string;
  position: string;
  hasEmail: boolean;
  img: string;
  email?: string;
  motto: string;
  isMottoOnLeftSide?: boolean;
  shortName?: string;
  isMirroredView?: boolean;
}

export const OurTeamMock: IOurTeam[] = [
  {
    id: 1,
    name: 'Artem Tkachuk',
    position: 'CEO',
    hasEmail: true,
    img: OurTeamPhotos.ARTEM,
    email: 'artem@ivorysoft.co',
    motto: 'Create with HEART build with MIND',
  },
  {
    id: 2,
    name: 'Victoria Hrabliauskaite',
    position: 'COO',
    hasEmail: true,
    email: 'viktoriia@ivorysoft.co',
    motto: 'Those who cannot change their minds cannot change anything',
    isMottoOnLeftSide: true,
    isMirroredView: true,
    img: OurTeamPhotos.VIKA,
  },
  {
    id: 3,
    name: 'Ruslan G.',
    position: 'CTO',
    hasEmail: false,
    motto: 'In order to be irreplaceable one must always be different',
    img: OurTeamPhotos.RUSLAN,
  },
  {
    id: 4,
    name: 'Denys P.',
    position: 'Mentor & Software Developer',
    hasEmail: false,
    motto: 'Everybody’s a gangster until a gangster walks in the room',
    img: OurTeamPhotos.DENYS,
  },
  {
    id: 10,
    name: 'Denys D.',
    position: 'Mentor & Software Developer',
    hasEmail: false,
    motto: 'A dream becomes a goal when action is taken toward its achievement',
    img: OurTeamPhotos.DENYS_2,
  },
  {
    id: 5,
    name: 'Lisa T.',
    position: 'UI/UX Designer',
    hasEmail: false,
    motto: `Fake it till you Make it`,
    img: OurTeamPhotos.LISA,
  },
  {
    id: 6,
    name: 'Oleksandra T.',
    position: 'PM Officer',
    hasEmail: false,
    motto: 'Only onward and upward',
    shortName: 'Allie',
    img: OurTeamPhotos.SASHA,
  },
  {
    id: 7,
    name: 'Kate S.',
    position: 'Business Development Officer',
    hasEmail: true,
    email: 'kate.samchuk@ivorysoft.co',
    motto: 'Dreams don’t work unless you do',
    img: OurTeamPhotos.KATE,
  },
  {
    id: 8,
    name: 'Maria D.',
    position: 'People Operation Manager',
    hasEmail: true,
    email: 'maria.dubik@ivorysoft.co',
    motto: 'Fortune favors the brave',
    img: OurTeamPhotos.MARIA,
  },
];
