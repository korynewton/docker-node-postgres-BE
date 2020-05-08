const router = require('express').Router();
const { getById } = require('../../db/models/tikTokModel');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const post = await getById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
