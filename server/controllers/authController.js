const router = require("express").Router();

router.post("/register", async (req, res) => {
  const data = req.body;
  const { avatarImg } = req.body;
  try {
    if (avatarImg) {
      const upload = await cloudinary.v2.uploader.upload(avatarImg, {
        fetch_format: "auto",
      });
      data.avatarImg = upload.url;
      data.imageId = upload.public_id;
    }
    const user = await register(data);
    res.cookie("auth", user.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
  res.end();
});
module.exports = router;
