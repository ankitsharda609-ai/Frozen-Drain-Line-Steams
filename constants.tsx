
import React from 'react';
import { Service, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'drain-steam',
    title: 'Frozen Drain Line Steam',
    description: 'High-pressure professional steam to safely melt ice without damaging your pipes. Safe for PVC and Cast Iron.',
    icon: 'fa-hot-tub'
  },
  {
    id: 'secondary-blockage',
    title: 'Secondary Ice Blockage',
    description: 'Removing complex freezes in vent stacks, condensate lines, and intricate branch systems.',
    icon: 'fa-icicles'
  },
  {
    id: 'sewer-thawing',
    title: 'Sewer Main Thawing',
    description: 'Restoring flow to your main sewer line during extreme ND winters to prevent hazardous basement backups.',
    icon: 'fa-water'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I know if my sewer line is frozen?",
    answer: "Common signs include multiple drains backing up simultaneously, strange gurgling sounds from toilets, or a sudden sewer odor inside your property during sub-zero temperatures."
  },
  {
    question: "Why use steam instead of chemicals or snakes?",
    answer: "Steam is non-toxic and transfers heat evenly, melting solid ice blocks instantly. Chemicals are often ineffective against thick ice, and mechanical snakes can shatter cold, brittle pipes."
  },
  {
    question: "Is steaming safe for PVC pipes?",
    answer: "Yes. Our professional steam equipment is temperature-controlled to melt ice effectively without reaching temperatures that would warp or damage modern plastic piping."
  },
  {
    question: "How long does the thawing process take?",
    answer: "Most residential blockages are cleared within 1 to 3 hours, depending on the severity and depth of the ice. We provide exact estimates upon arrival."
  }
];

export const CONTACT_INFO = {
  phone: "(844) 340-6413",
  address: "100 Sheyenne St, West Fargo, ND 58078",
  businessName: "Frozen Drain Line Steam"
};
