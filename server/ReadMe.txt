# initialize the server side
yarn init

#push the schema to atlas mongodb
npx prisma db push

npx prisma generate


# to run / start the server
yarn run start