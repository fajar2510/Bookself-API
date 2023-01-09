const {
  tambahBuku,
  tampilSemuaBuku,
  tampilBukuId,
  editBukuId,
  hapusBukuId,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: tambahBuku,
  },
  {
    method: 'GET',
    path: '/books',
    handler: tampilSemuaBuku,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: tampilBukuId,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBukuId,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: hapusBukuId,
  },
  {
    method: 'GET',
    path: '/',
    handler: tampilSemuaBuku,
  },
];

module.exports = routes;
