import type { ImageMetadata } from 'astro';
import kkomarov from '../assets/img/team/kkomarov.jpg';
import mfilatov from '../assets/img/team/mfilatov.png';
import skmin from '../assets/img/team/skmin.jpg';

export interface Member {
  name: string;
  email: string;
  photo: ImageMetadata;
  alt: string;
  link?: { href: string; label: string };
}

const nbsp = ' ';

export const team: Member[] = [
  {
    name: ['Dr.', 'Konstantin', 'Komarov'].join(nbsp),
    email: 'constlike_at_gmail.com',
    photo: kkomarov,
    alt: 'Konstantin Komarov',
  },
  {
    name: ['Dr.', 'Michael', 'Filatov'].join(nbsp),
    email: 'mike.filatov_at_gmail.com',
    photo: mfilatov,
    alt: 'Michael Filatov',
    link: { href: 'https://fimich-git.github.io/', label: 'Personal website' },
  },
  {
    name: ['Prof.', 'Seung', 'Kyu', 'Min'].join(nbsp),
    email: 'skmin_at_unist.ac.kr',
    photo: skmin,
    alt: 'Seung Kyu Min',
    link: { href: 'https://skmin.unist.ac.kr/members', label: 'Group website' },
  },
];
