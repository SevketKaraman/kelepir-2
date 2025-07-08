import { MedusaService } from "@medusajs/framework/utils"
import Vendor from "./models/vendor"

class VendorModuleService extends MedusaService({
  Vendor,
}) {
  async create(data: { name: string; email: string; is_approved?: boolean }) {
    return await this.create("vendor", data)
  }

  async list() {
    return await this.list("vendor")
  }

  async retrieve(id: string) {
    return await this.retrieve("vendor", id)
  }

  async update(id: string, data: { name?: string; email?: string; is_approved?: boolean }) {
    return await this.update("vendor", id, data)
  }

  async approve(id: string) {
    return await this.update("vendor", id, { is_approved: true })
  }
}

export default VendorModuleService