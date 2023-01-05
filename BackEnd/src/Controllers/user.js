const { connection } = require("../config/dbConfig");
const getUser1 = (req, res) => {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM `profile` WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.length != 0) {
        res.json(results);
      } else {
        console.log(results);
        res.json({ message: "Not Matched" });
      }
    }
  );
};
const putUser = (req, res) => {
  let id = req.params.id;
  let firstname = req.body.FirstName;
  let lastname = req.body.LastName;
  let displayname = req.body.DisplayName;
  let mail = req.body.Mail;
  let phone = req.body.Phone;
  let location = req.body.Location;
  let data = [firstname, lastname, displayname, mail, phone, location, id];

  connection.query(
    "UPDATE profile  SET FirstName=?,LastName=?,DisplayName=?, Mail=?, Phone=?, Location=? WHERE id=?",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.affectedRows >= 1) {
        res.status(200).json({
          message: "Sucessfully Updated",
        });
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};

module.exports = {
  putUser,
  getUser1,
};
