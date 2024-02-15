const Models = require("../Models/index");
const Short = Models.Short;
const {
  handleError,
  handleCreate,
  handleRedirect,
  handleExpaired,
} = require("../Helpers/HandlerError");
const moment = require("moment");
const shortid = require("shortid");

class ShortController {
  static async createShort(req, res) {
    try {
      const long_url = req.body.long_url;
      const expaired_date = moment().startOf("day").add(5, "years");
      const short_url = shortid.generate();
      await Short.create({
        long_url,
        expaired_date,
        short_url,
      }).then(data=>{
        const result = {
          short_url: `${process.env.URL}/short/${data.short_url}`,
          expaired_date: data.expaired_date,
        };
        handleCreate(res,result);
      })
    } catch (error) {
      handleError(res, error);
    }
  }
  static async redirecturl(req, res) {
    try {
      await Short.findOne({
        where: {
          short_url: req.params.id,
        },
      }).then((data) => {
        const day = moment().format("YYYY-MM-DD");
        if (day <= data.expaired_date){
          handleRedirect(res, data.long_url);
        } else{
          handleExpaired(res)
        }
      });
    } catch (error) {
      handleError(res, error);
    }
  }
}
module.exports = ShortController;
