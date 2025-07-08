import postVendor from "./vendors/route"

export default async (app) => {
  app.post("/admin/vendors", postVendor)
}
