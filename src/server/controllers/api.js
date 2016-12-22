/**
 * Created by yyj on 19/12/2016.
 */

import Express from 'express';

import jwt from 'jsonwebtoken';

// 引入 User、Recipe Model 方便进行资料库操作
import User from '../models/user';
import Recipe from '../models/recipe';
import config from '../config';

const app = new Express();
const apiRoutes = Express.Router();

// 设定 JSON Web Token 的 secret variable
app.set('superSecret', config.secret); // secret variable

apiRoutes.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email,
  }, (err, user) => {
    if (err) {
      throw err;
    }
    if (!user) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found.',
      });
    } else if (user) {
      if (user.password !== req.body.password) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password.',
        });
      } else {
        const token = jwt.sign(
          { email: user.email },
          app.get('superSecret'),
          {
            expiresIn: 60 * 60 * 24,
          },
        );
        res.json({
          success: true,
          message: 'login success!',
          token,
          userId: user._id,
        });
      }
    }
  });
});

apiRoutes.post('/signup', (req, res) => {
  const admin = new User({
    username: 'yyj',
    email: 'admin@qq.com',
    password: '123456',
    admin: true,
  });
  const sampleRecipe = new Recipe({
    id: '110ec58a-a0f2-4ac4-8393-c866d813b8d1',
    name: '番茄炒蛋',
    description: '番茄炒蛋，一道非常经典的家常菜料理。虽然看似普通，但每个家庭都有属于自己家里的不同味道',
    imagePath: 'https://c1.staticflickr.com/6/5011/5510599760_6668df5a8a_z.jpg',
    steps: ['放入番茄', '打个蛋', '放入少许盐巴', '用心快炒'],
    updatedAt: new Date(),
  });
  admin.save((err) => {
    if (err) {
      throw err;
    }
    sampleRecipe.save((err2) => {
      if (err2) {
        throw err2;
      }
      console.log('User saved successfully');
      res.json({
        success: true,
        message: 'save admin\'s sampleRecipe successfully',
      });
    });
  });
});

// R(Retrieve)
apiRoutes.get('/recipes', (req, res) => {
  Recipe.find({}, (err, recipes) => {
    res.status(200).json(recipes);
  });
});

apiRoutes.use((req, res, next) => {
  const token = req.headers['x-access-token'] || req.body.token || req.query.token;
  if (token) {
    jwt.verify(token, app.get('superSecret'), (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      }
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;
      next();
    });
  } else {
    return res
      .status(403)
      .send({
        success: true,
        message: 'No token provided.',
      });
  }
});

apiRoutes.get('/authenticate', (req, res) => {
  res.json({
    success: true,
    message: 'Enjoy your token!',
  });
});

// C 新增食谱
apiRoutes.post('/recipes', (req, res) => {
  const newRecipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    imagePath: req.body.imagePath,
    steps: ['放入番茄', '打个蛋', '放入少许盐巴', '用心快炒'],
    updatedAt: new Date(),
  });
  newRecipe.save((err) => {
    if (err) throw err;
    console.log('User saved successfully');
    res.json({ success: true });
  });
});

// U 根据 _id（mongodb 的 id）更新食谱
apiRoutes.put('/recipes/:id', (req, res) => {
  Recipe.update({ _id: req.params.id }, {
    name: req.body.name,
    description: req.body.description,
    imagePath: req.body.imagePath,
    steps: ['放入番茄', '打个蛋', '放入少许盐巴', '用心快炒'],
    updatedAt: new Date(),
  }, (err) => {
    if (err) throw err;
    console.log('User updated successfully');
    res.json({ success: true });
  });
});

// D 根据 _id 删除食谱，若成功回传成功讯息
apiRoutes.delete('/recipes/:id', (req, res) => {
  Recipe.remove({ _id: req.params.id }, (err, recipe) => {
    if (err) throw err;
    console.log('remove saved successfully');
    res.json({
      success: true,
      recipe,
    });
  });
});

export default apiRoutes;
