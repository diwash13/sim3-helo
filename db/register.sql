insert into users (username, password, profile_pic)
values (${username}, ${password}, 'https://www.usanetwork.com/sites/usanetwork/files/Psych_16x9_FeaturedPromo_2560x1440.png')

returning id, username, profile_pic