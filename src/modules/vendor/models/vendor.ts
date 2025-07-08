import { model } from "@medusajs/framework/utils"

const Vendor = model.define("vendor", {
  id: model.id().primaryKey(),
  name: model.text(),
  email: model.text(),
  is_approved: model.boolean().default(false),
})

export default Vendor
export type { Vendor }
