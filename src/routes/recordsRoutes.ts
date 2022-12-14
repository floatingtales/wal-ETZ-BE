import express, { Router } from "express";
import multer from "multer";
import BaseRoutes from "./baseRoutes";
// Set the name of the upload directory here
const multerUpload = multer!({ dest: "uploads/" });

const router: Router = express.Router();

export default class RecordsRoutes extends BaseRoutes {
  routes() {
    /* auth routes */
    router.use(this.JWTMiddleware);
    router.post("/newRecord", this.controller.newRecord.bind(this.controller));
    router.put("/editRecord", this.controller.editRecord.bind(this.controller));
    router.put(
      "/deleteRecord",
      this.controller.deleteRecord.bind(this.controller)
    );
    router.post(
      "/addReceiptS3",
      multerUpload.single("file"),
      this.controller.addReceiptS3.bind(this.controller)
    );
    return router;
  }
}
