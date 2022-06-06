import { MasterModel } from "./master.model";

export interface AppModel {
  masters: MasterModel[],
  environments: string[],
  selectedEnvironment?: string,
  selectedMasterName?: string
}
