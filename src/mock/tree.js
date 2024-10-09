import Mock from 'mockjs';

Mock.mock('/api/tree', 'get', {
  code: 0,
  msg: '',
  'data|100-200': [
    {
      'id|+1': 1,
      name: '@cname',
      'children|0-10': [
        {
          'id|+1': 1,
          name: '@cname',
          'children|0-100': [
            {
              'id|+1': 1,
              name: '@cname',
            },
          ],
        },
      ],
    },
  ],
});
