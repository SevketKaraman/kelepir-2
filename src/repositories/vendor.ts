import { DataSource } from "typeorm"
import { Vendor } from "../modules/vender"

export const VendorRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(Vendor)
}
