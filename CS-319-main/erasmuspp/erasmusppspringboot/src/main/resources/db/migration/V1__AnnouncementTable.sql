CREATE TABLE announcement (
    id UUID NOT NULL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content VARCHAR(2500) NOT NULL,
    postDate VARCHAR(100) NOT NULL,
    expireDate VARCHAR(100) NOT NULL
);