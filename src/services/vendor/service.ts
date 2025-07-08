import { Lifetime } from "awilix"
import { VendorRepository } from "../../repositories/vendor"
import Vendor, { Vendor as VendorType } from "../../modules/vendor/models/vendor"
import { Repository } from "typeorm"

class VendorService {
  static LIFE_TIME = Lifetime.SCOPED

  protected vendorRepository_: Repository<VendorType>

  constructor(container) {
    this.vendorRepository_ = VendorRepository(container.manager)
  }

  async create(data: Partial<VendorType>): Promise<VendorType>  {
    const vendor = this.vendorRepository_.create(data)
    return await this.vendorRepository_.save(vendor)
  }

  async list(): Promise<VendorType[]> {
    return await this.vendorRepository_.find()
  }

  async approve(vendorId: string): Promise<void> {
    await this.vendorRepository_.update({ id: vendorId }, { is_approved: true })
  }
}

export default VendorService

