const express = require('express');
const { route } = require('express/lib/router');

const router = express.Router();

const posts = [{ id: 1, content: 'I know that I know nothing' }];

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return res.status(404).json({ message: 'post not found' });
  }
  res.status(200).json(post);
});

router.get('/', (_req, res) => {
  res.status(200).json({ posts });
})

module.exports = router;
