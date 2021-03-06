CREATE TABLE users (
  UserId SERIAL Primary Key,,
  admin Int,
  name varchar(512),
  authId varchar(50),
  img text,
  firstName varchar(200),
  lastName varchar(200),
  phoneNumber varchar(100),
  email text,
  streetAddress varchar(250),
  extraAddressInfo varchar(250),
  city varchar(100),
  state varchar(50),
  zip Int
)


CREATE TABLE Parts (
  partid SERIAL PRIMARY KEY,
  model text,
  Name varchar(512),
  Category varchar(50),
  Price Float(2),
  Quantity Int,
  Description text,
  Img text,
  Specials Int
)

CREATE TABLE Orders (
  OrderId SERIAL PRIMARY KEY,
  UserId Int REFERENCES Users(UserId),
  PartId Int REFERENCES Parts(PartId),
  total int
)

CREATE TABLE cart (
  CartNum SERIAL PRIMARY KEY,
  user_Id Int REFERENCES Users(UserId),
  part_Id Int REFERENCES Parts(PartId),
  quantity Int
)

