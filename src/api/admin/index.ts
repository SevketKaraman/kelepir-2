import postVendor from "../admin/vendors/post-vendor"

export default async (app) => {
  app.post("/admin/vendors", postVendor)
}
