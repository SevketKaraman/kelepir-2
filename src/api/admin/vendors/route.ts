// src/api/admin/vendors/route.ts
import * as dotenv from "dotenv"
dotenv.config()


import { Request, Response } from "express"

export async function POST(req: Request, res: Response) {
  const adminToken = req.headers["x-medusa-access-token"] as string

  console.log("=== TOKEN DEBUG ===")
  console.log("Received token:", adminToken)
  console.log("Expected token:", process.env.MEDUSA_ADMIN_SECRET)
  console.log("Token match:", adminToken === process.env.MEDUSA_ADMIN_SECRET)
  console.log("===================")

  if (adminToken !== process.env.MEDUSA_ADMIN_SECRET) {
    console.log("Token validation failed - returning 401")
    return res.status(401).json({ message: "Unauthorized" })
  }

  const vendorService = (req as any).scope.resolve("vendorService")
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." })
  }

  const vendor = await vendorService.create({
    name,
    email,
    is_approved: false,
  })

  return res.status(200).json({ vendor })
}
export default POST