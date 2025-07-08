import { DataSource } from "typeorm"
import { Vendor } from "../modules/vendor/models/vendor"

export const VendorRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(Vendor)
}
