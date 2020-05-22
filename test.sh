## GET
curl http://localhost:5000/api/v1/products 
echo ''
echo ''

## POST
curl -X POST http://localhost:5000/api/v1/products -H 'Content-Type: application/json' --data '{"name":"prod from post"}'
echo ''
echo ''

## UPDATE
curl -X PUT http://localhost:5000/api/v1/products/1 -H 'Content-Type: application/json' --data '{"name":"update porduct"}'
echo ''
echo ''

## DELETE
curl -X DELETE http://localhost:5000/api/v1/products/1
echo ''
echo ''

## GET
curl http://localhost:5000/api/v1/products 
echo ''
echo ''

