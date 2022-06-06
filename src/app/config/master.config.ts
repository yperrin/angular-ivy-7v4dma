import { MasterModel } from '../models/master.model';

export const offline = false;

export const masters: MasterModel[] = [
  {
    name: 'Commercial Items',
    code: 'commercial-items',
    assetId: '',
    fdmUrl:
      'https://ls-common.{env}.singularity.clarivate.com/fdm-service/v1.76',
    requiredFacts: [],
    requiredIdentifiers: ['corteliisID'],
  },
  {
    name: 'Clinical Trials',
    code: 'clinical-trials',
    assetId: '',
    fdmUrl:
      'https://ls-common.{env}.singularity.clarivate.com/fdm-service/v1.76',
    requiredFacts: [],
    requiredIdentifiers: [],
  },
  {
    name: 'Deals',
    code: 'deals',
    assetId: '',
    fdmUrl:
      'https://ls-common.{env}.singularity.clarivate.com/fdm-service/v1.76',
    requiredFacts: [],
    requiredIdentifiers: [],
  },
  {
    name: 'Drugs',
    code: 'drugs',
    assetId: '',
    fdmUrl:
      'https://ls-common.{env}.singularity.clarivate.com/fdm-service/v1.76',
    requiredFacts: [],
    requiredIdentifiers: [],
  },
  {
    name: 'Organizations',
    code: 'org-master',
    assetId: '',
    fdmUrl:
      'https://org-master-common.{env}.singularity.clarivate.com/fdm-service/v1.76',
    requiredFacts: [],
    requiredIdentifiers: [],
  },
  {
    name: 'Scholarly Person',
    code: 'sp-master',
    assetId: '',
    fdmUrl:
      'https://sp-master-common.{env}.singularity.clarivate.com/fdm-service/v1.76',
    requiredFacts: [],
    requiredIdentifiers: [],
  },
  {
    name: 'Substances',
    code: 'substances',
    assetId: '',
    fdmUrl:
      'https://ls-common.{env}.singularity.clarivate.com/fdm-service/v1.76',
    requiredFacts: [],
    requiredIdentifiers: [],
  },
];
