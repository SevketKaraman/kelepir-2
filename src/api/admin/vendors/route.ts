import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import VendorService from "../../../modules/vendor/service"
import { VENDOR_MODULE } from "../../../modules/vendor"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const adminToken = req.headers["x-medusa-access-token"] as string
  console.log("ENV'DEN GELEN TOKEN:", process.env.MEDUSA_ADMIN_SECRET)


  if (adminToken !== process.env.JWT_SECRET) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const vendorService = req.scope.resolve<VendorService>(VENDOR_MODULE)
  const { name, email } = req.body as { name: string; email: string }

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." })
  }

  try {
    const vendor = await vendorService.create({
      name,
      email,
      is_approved: false,
    })

    return res.status(200).json({ vendor })
  } catch (err) {
    console.error("Vendor create error:", err)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}
