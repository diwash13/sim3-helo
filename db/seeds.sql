create table users (
    id serial primary key,
    username varchar(200),
    password varchar(200),
    profile_pic text
    
);

create table posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer references users(id)
)




insert into posts (title, img, content)
values ('vacation', 'https://s-ec.bstatic.com/images/hotel/max1024x768/132/132680097.jpg', 'Plan your vacation to the Maldives with Emirates Vacations with our great value and luxury vacation packages.')


