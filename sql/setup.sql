-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

drop table if exists games;

create table games(
    id bigint generated always as identity,
    title varchar not null,
    release_year int not null,
    genre varchar not null,
    main_developer varchar not null,
    open_world boolean not null
);

insert into games (title, release_year, genre, main_developer, open_world) values
('Warframe', 2013, 'RPG', 'Digital Extremes', true),
('Borderlands 2', 2012, 'RPG', 'Gearbox Software', true),
('Call of Duty: World at War', 2008, 'FPS', 'Treyarch', false),
('The Elder Scrolls V: Skyrim', 2011, 'RPG', 'Bethesda', true),
('Alien: Isolation', 2014, 'Survival Horror', 'Creative Assembly', false),
('Gran Turismo 7', 2022, 'Racing', 'Polyphony Digital', false),
('Phasmophobia', 2020, 'Survival Horror', 'Kinetic Games', false),
('GTFO', 2021, 'Action-Adventure Horror', '10 Chambers', false),
('Rocket League', 2015, 'Sports', 'Psyonix', false),
('Fall Guys', 2020, 'Platform Battle Royale', 'Mediatonic', false);