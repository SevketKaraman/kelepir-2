import { asClass } from "awilix"
import VendorService from "../../services/vendor-service"

const loaders = {
  vendorService: asClass(VendorService).scoped(),
}

export default loaders
