import atlanta1 from './atlanta-park.jpeg';
import atlanta2 from './atlanta-aquarium.jpeg';
import atlanta3 from './atlanta-coffee.jpeg';
import atlanta4 from './atlanta-cnn.webp';
import atlanta5 from './atlanta-restaurant.jpeg';

import chicago1 from './chicago-park.jpeg';
import chicago2 from './chicago-museum.webp';
import chicago3 from './chicago-coffee.jpeg';
import chicago4 from './chicago-skydeck.webp';
import chicago5 from './chicago-restaurant.webp';

import dc1 from './dc-park.jpeg';
import dc2 from './dc-museum.jpeg';
import dc3 from './dc-coffee.jpeg';
import dc4 from './dc-georgetown.jpeg';
import dc5 from './dc-restaurant.jpeg';

import lv1 from './lv-strip.jpeg';
import lv2 from './lv-nelson.jpeg';
import lv3 from './lv-coffee.jpeg';
import lv4 from './lv-show.jpeg';
import lv5 from './dc-restaurant.jpeg';

import nyc1 from './nyc-park.jpeg';
import nyc2 from './nyc-museum.jpeg';
import nyc3 from './nyc-coffee.webp';
import nyc4 from './nyc-liberty.webp';
import nyc5 from './nyc-restaurant.jpeg';

import sf1 from './sf-park.webp';
import sf2 from './sf-museum.jpeg';
import sf3 from './sf-coffee.webp';
import sf4 from './sf-enterntainment.jpeg';
import sf5 from './sf-restaurant.webp';
import './App.css';

export const data = [
    {
        id: 1,
        cityName: 'New York',
        info: [
            {
                image: <img className='data-image' src={nyc1} alt='nyc-park'/>,
                imageName: `Central Park`,
                address: `From North 110th Street to 59th Street, and from 8th Avenue to 5th Ave`,
                description: `It is an 882-acre green space surrounded on all sides by skyscrapers, which makes it so unique. There are tons of things to see and you could definitely spend a few days fully exploring the park, but this is a great itinerary for anyone visiting NYC for the first time!`
            },
            {
                image: <img className='data-image' src={nyc2} alt='nyc-museum'/>,
                imageName: `MoMA`,
                address: `11 W 53rd St, New York, NY 10019`,
                description: `One of the NYC Activities that is an absolute must-do is taking a Tour of NYC's Museum of Modern Art (MoMA). The Museum of Modern Art attracts visitors from around the world, and has displayed one of the best collections of modern art on the planet since 1929.`
            },
            {
                image: <img className='data-image' src={nyc3} alt='nyc-coffee'/>,
                imageName: `Birch Coffee`,
                address: `984 6th Ave, New York, NY 10018 (between 36th & 37th)`,
                description: `Birch Coffee serves up steaming hot cups of small batch, manually roasted in Long Island City, coffee.`
            },
            {
                image: <img className='data-image' src={nyc4} alt='nyc-liberty'/>,
                imageName: `Ellis Island and the Statue of Liberty`,
                address: `Ellis Island`,
                description: `Visiting Ellis Island and the Statue of Liberty is an inspiring, striking experience. As dual symbols of freedom and hope, these incredible monuments and their museums give proof to the story of immigration and recognize the human spirit of our nation’s ideals.`
            },
            {
                image: <img className='data-image' src={nyc5} alt='nyc-restaurant'/>,
                imageName: 'Central Park',
                address: 'From North 110th Street to 59th Street, and from 8th Avenue to 5th Ave',
                description: 'It is an 882-acre green space surrounded on all sides by skyscrapers, which makes it so unique. There are tons of things to see and you could definitely spend a few days fully exploring the park, but this is a great itinerary for anyone visiting NYC for the first time!'
            }
        ],
    },

    {
        id: 2,
        cityName: 'Washington DC',
        info: [ 
            {
                image: <img className='data-image' src={dc1} alt='dc-park'/>,
                imageName: `Dumbarton Oaks`,
                address: `1703 32nd Street, NW Washington, DC 20007`,
                description: `Dumbarton Oaks Park is a classical and elegant manor in Washington. Its fame has grown since the representatives of the United States, Britain and the Soviet Union discussed and drafted the UN Charter in 1944. Now it has become an art gallery, which contains some artworks from the Roman period and Byzantium.`
            },
            {
                image: <img className='data-image' src={dc2} alt='dc-museum'/>,
                imageName: `National Postal Museum`,
                address: `2 Massachusetts Ave NE, Washington, DC 20002`,
                description: `The Smithsonian Institution's National Postal Museum welcomes you into the world of the mail and stamp collecting, and lets you experience how letters travel, who delivers them, and how the postal system has touched the lives of so many people all over the world.`
            },
            {
                image: <img className='data-image' src={dc3} alt='dc-coffee'/>,
                imageName: `For Five Coffee DC`,
                address: `2000 L St NW, Washington, DC 20036`,
                description: `Perfect, freshly roasted coffee`
            },
            {
                image: <img className='data-image' src={dc4} alt='dc-georgetown'/>,
                imageName: `Georgetown DC`,
                address: ``,
                description: `Georgetown University is probably the most famous part of this area, but even if you are not a student, this is a must-visit place in Washington D.C. There are so many fashionable shops, tasty restaurants, beautiful parks, and historic homes to discover.`
            },
            {
                image: <img className='data-image' src={dc5} alt='dc-restaurant'/>,
                imageName: `Pinstripes`,
                address: `1064 Wisconsin Ave NW, Washington, DC 20007`,
                description: `Extraordinary dining & entertainment experience full of fun with bowling, bocce and more`
            },
        ]
    },

    {
        id: 3,
        cityName: 'Chicago',
        info: [ 
            {
                image: <img className='data-image' src={chicago1} alt='chicago-park'/>,
                imageName: `Jackson Park`,
                address: `6401 S Stony Is Ave, Chicago, IL 60637`,
                description: `The Jackson Park is one of the most prominent parks in Chicago. Jackson Park owes its popularity to a unique Japanese garden- the Osaka Garden and its main attraction is the spring time, during late April to early May when one can witness the season of Cherry blossoms. Apart from this garden, the 600-acre park, offers numerous facilities like golf, baseball, basketball, a huge playground, a fitness center and a tennis court.`
            },
            {
                image: <img className='data-image' src={chicago2} alt='chicago-museum'/>,
                imageName: `The Museum of Illusions`,
                address: `25 E Washington St, Chicago, IL 60602`,
                description: `The Museum of Illusions is a unique and exciting museum offering the opportunity to interact with and immerse oneself in over 80 fascinating exclusionary exhibits. MOI was designed with two aims: to educate and to entertain.`
            },
            {
                image: <img className='data-image' src={chicago3} alt='chicago-coffee'/>,
                imageName: `HERO Coffee Bar`,
                address: `22 E Jackson Blvd, Chicago, IL 60604`,
                description: `Cute place, good coffee`
            },
            {
                image: <img className='data-image' src={chicago4} alt='chicago-skydeck'/>,
                imageName: `Skydeck`,
                address: `233 S Wacker Dr, Chicago, IL 60606`,
                description: `Skydeck offers an unforgettable view of the Windy City from 1,353 feet in the air, but you shouldn't just take our word for it: Skydeck Chicago's reviews attest to the unforgettable nature of the experience.`
            },
            {
                image: <img className='data-image' src={chicago5} alt='chicago-restaurant'/>,
                imageName: `Bartoli's Pizzeria`,
                address: `1955 W Addison St, Chicago, IL 60613`,
                description: `Bartoli's has one of the best deep-dish pizzas in Chicago.`
            },
        ]
    },

    {
        id: 4,
        cityName: 'Las Vegas',
        info: [ 
            {
                image: <img className='data-image' src={lv1} alt='lv-strip'/>,
                imageName: `Las Vegas Boulevard`,
                address: `South Las Vegas Boulevard`,
                description: `Known as one of the most famous streets in the world, Las Vegas Boulevard is always buzzing. Home to many hotels like the Bellagio, Caesars Palace and the Stratosphere, the Strip also offers endless food and drink options, not to mention a chance to catch a musical show.`
            },
            {
                image: <img className='data-image' src={lv2} alt='lv-nelson'/>,
                imageName: `Nelson Ghost Town`,
                address: `Nelson Cutoff Rd, Searchlight, NV 89046`,
                description: `Nelson Ghost Town is a mix between a junkyard, outdoor art display, and burning man tribute. It's very popular among photographers and videographers because it looks like a movie set, except it's the real deal (minus the planes).`
            },
            {
                image: <img className='data-image' src={lv3} alt='lv-coffee'/>,
                imageName: `Bad Owl Coffee`,
                address: `300 S. 4th St. #007 Las Vegas, NV 89101`,
                description: `Espresso Patronum! If you're craving some magical adventures right about now, look no further than this cute spot. Bad Owl Coffee Roasters in Las Vegas will transport you to Diagon Alley for a truly Harry Potter-esque experience. Now you can sip all things butterbeer while feeling like you're about to catch the Hogwarts Express when you visit.`
            },
            {
                image: <img className='data-image' src={lv4} alt='lv-show'/>,
                imageName: `Mystère, Cirque du Soleil`,
                address: `3300 S Las Vegas Blvd, Las Vegas, NV 89109`,
                description: `High-Energy Acrobatics & Dramatic Dance, Set To The Thunderous Rhythms Of The Taiko Drums. An Intense Sensory Experience Features Evocative Dance, Colorful Costumes & Vivid Lighting.`
            },
            {
                image: <img className='data-image' src={lv5} alt='lv-restaurant'/>,
                imageName: `Ellis Island Barbeque`,
                address: `4178 Koval Ln, Las Vegas, NV 89109`,
                description: `This is one of those great just off strip casinos and restaurants that's worth visiting every trip to Vegas.`
            },
        ]
    },

    {
        id: 5,
        cityName: 'San Francisco',
        info: [ 
            {
                image: <img className='data-image' src={sf1} alt='sf-park'/>,
                imageName: `Golden Gate Park`,
                address: ``,
                description: `The rumors are true. Golden Gate Park is as fantastic as they say. Explore this iconic park's 1,017 acres, from bucolic lakes and meadows to vibrant activity destinations. Golden Gate Park has something for everyone.`
            },
            {
                image: <img className='data-image' src={sf2} alt='sf-museum'/>,
                imageName: `Exploratorium`,
                address: `Pier 15 Embarcadero at, Green St, San Francisco, CA 94111`,
                description: `The Exploratorium in San Francisco is a wonderful hands-on science and human perception museum. This engaging SF attraction offers more than 600 interactive exhibits where you can learn about everything from light and sound to human emotions and perceptions.`
            },
            {
                image: <img className='data-image' src={sf3} alt='sf-coffee'/>,
                imageName: `Sextant Coffee Roasters`,
                address: `1415 Folsom St, San Francisco, CA 94103`,
                description: `The place is modern, very clean and casual. Very comfortable atmosphere. Staff is extremely knowledgeable and very skilled. The coffee is to kill for. `
            },
            {
                image: <img className='data-image' src={sf4} alt='sf-alcatraz'/>,
                imageName: `Alcatraz`,
                address: `San Francisco, CA 94133`,
                description: `The infamous prison was home to only the most notorious criminals. Now, it's San Francisco's most popular attraction and part of one of the most visited national parks in the country.`
            },
            {
                image: <img className='data-image' src={sf5} alt='sf-restaurant'/>,
                imageName: `Cala`,
                address: `149 Fell St, San Francisco, CA 94102`,
                description: `Cala offers decent Mexican cousin. At CALA's price point you expect nothing but the best and you will not be disappointed.`
            },
        ]
    },

    {
        id: 6,
        cityName: 'Atlanta',
        info: [ 
            {
                image: <img className='data-image' src={atlanta1} alt='atlanta-park'/>,
                imageName: `Piedmont Park`,
                address: `1320 Monroe Dr NE, Atlanta, GA 30306`,
                description: `It has a great atmosphere, great vibe, it's vibrant. Great views and easy access to the Beltline where you can walk to bars / restaurants. It is a place one must visit when in Atlanta.`
            },
            {
                image: <img className='data-image' src={atlanta2} alt='atlanta-aquarium'/>,
                imageName: `Georgia Aquarium`,
                address: `225 Baker St NW, Atlanta, GA 30313`,
                description: `One of the best aquariums in the United States. It’s the world’s largest aquarium, holding 10,000,000 gallons of water. It’s also one of the busiest, with huge crowds gathering on a daily basis. The Aquarium includes a variety of exhibits and touts itself as having a greater variety of marine life than any other aquarium in the world.`
            },
            {
                image: <img className='data-image' src={atlanta3} alt='atlanta-coffee'/>,
                imageName: `Belux Coffee Roasters`,
                address: `430 McGinnis Ferry Rd #101B, Alpharetta, GA 30005`,
                description: `Belux Coffee Roasters is a small coffee shop and micro-batch roaster. The packaging and interior design at Belux Coffee Roasters is gorgeous. The coffee is amazing`
            },
            {
                image: <img className='data-image' src={atlanta4} alt='atlanta-cnn'/>,
                imageName: `CNN Studio Tours`,
                address: `190 Marietta St NW, Atlanta, GA 30303`,
                description: `Journey into the heart of CNN Worldwide and get an up-close look at global news in the making! Inside CNN is a 55 minute guided walking tour with exclusive views of Atlanta's CNN studios and an exciting glimpse of news and broadcasting in action from the world headquarters of the Worldwide Leader in News.`
            },
            {
                image: <img className='data-image' src={atlanta5} alt='atlanta-restaurant'/>,
                imageName: `D.B.A. Barbeque`,
                address: `1190 North Highland Avenue Northeast, Atlanta, GA 30306`,
                description: `D.B.A. Barbecue is a family-owned restaurant that offers food inspired by Southern comfort and mixed with a twinge of Creole flair. The menu has a range of meats, sides, and drinks to satisfy any barbecue craving visitors may have. `
            },
        ]
    }
]