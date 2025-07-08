import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { VENDOR_MODULE } from "../../../modules/vendor"
import VendorModuleService from "../../../modules/vendor/service"

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  try {
    const vendorService: VendorModuleService = req.scope.resolve(VENDOR_MODULE)
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({ 
        message: "Name and email are required." 
      })
    }

    const vendor = await vendorService.create({
      name,
      email,
      is_approved: false,
    })

    return res.status(201).json({ vendor })
  } catch (error) {
    console.error("Error creating vendor:", error)
    return res.status(500).json({ 
      message: "Internal server error" 
    })
  }
}

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  try {
    const vendorService: VendorModuleService = req.scope.resolve(VENDOR_MODULE)
    const vendors = await vendorService.list()

    return res.status(200).json({ vendors })
  } catch (error) {
    console.error("Error listing vendors:", error)
    return res.status(500).json({ 
      message: "Internal server error" 
    })
  }
}