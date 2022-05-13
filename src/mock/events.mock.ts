
import evn1 from "../assert/eventNews/evn1.jpg";
import evn2 from "../assert/eventNews/evn2.jpg";
import evn3 from "../assert/eventNews/evn3.jpg";
import evn4 from "../assert/eventNews/evn4.jpg";

//event1
import evn1img1 from "../assert/eventNews/event1/img1.png";
import evn1img2 from "../assert/eventNews/event1/img2.png";
import evn1img3 from "../assert/eventNews/event1/img3.png";
import evn1img4 from "../assert/eventNews/event1/img4.png";
//event2
import evn2img1 from "../assert/eventNews/event2/img1.png";
import evn2img2 from "../assert/eventNews/event2/img2.png";
import evn2img3 from "../assert/eventNews/event2/img3.png";
import evn2img4 from "../assert/eventNews/event2/img4.png";
//event3
import evn3img4 from "../assert/eventNews/event3/img1.png";
//event4
import evn4img1 from "../assert/eventNews/event4/img1.png";
import evn4img2 from "../assert/eventNews/event4/img2.png";

export const eventsMockData = [
    {
        id: 1,
        img: evn1,
        title: 'Wembley SSE Arena Musical Concert - Super Singer 2014, 21st Century Fox’s STAR India Network',
        details: 'This event in conducted by Vijay TV - India, 21st Century Fox’s STAR India Network 10,000 Audience – Most of them are retailers',
        more: {
            title: 'Wembley SSE Arena Musical Concert - Super Singer 2014, 21st Century Fox’s STAR India Network',
            bulletList: [
                { item: '10000 number of audience & most of them are retailers' },
                { item: 'Ayapa was one of the main sponsors' },
                { item: 'Ayapa sponsored tickets for its top 250 retailers covering all the retailer base' },
                { item: 'Conducted by Vijay TV, one of the star group members in UK' },
                { item: 'Star Vijay viewers are wider range of ethnic minority and most of them are retailers' },
            ],
            gallery: [
                {
                    img: evn1img1
                },
                {
                    img: evn1img2
                },
                {
                    img: evn1img3
                },
                {
                    img: evn1img4
                },
            ]
        }
    },
    {
        id: 2,
        img: evn2,
        title: 'Footbal Tournament 2015 - Valvai Welfare Association, UK',
        details: '7,000 Audience – Most of them are ethnic minorities. Ayapa is one of the main sponsors',
        more: {
            title: 'Footbal Tournament 2015 - Valvai Welfare Association, UK',
            bulletList: [
                { item: 'Valvai is a charity organisation' },
                { item: 'Ayapa was one of the main sponsors for their annual program in UK' },
                { item: 'Around 7000 number of participants, most of them are ethnic minority' },
            ],
            gallery: [
                {
                    img: evn2img1
                },
                {
                    img: evn2img2
                },
                {
                    img: evn2img3
                },
                {
                    img: evn2img4
                },
            ]
        }
    },

    {
        id: 3,
        img: evn3,
        title: 'Community Cricket League - Skyrose, UK',
        details: 'One of the UK’s Community Cricket leagues mainly sponsored by AYAPA 18 matches throughout the year and around 500 Audience per match',
        more: {
            title: 'Community Cricket League - Skyrose, UK',
            bulletList: [
                { item: 'One of the UK’s Tamil cricket leagues' },
                { item: 'Ayapa is the main sponsors of Skyrose criket club' },
                { item: 'Around 500 viewers per match' },
            ],
            gallery: [
                {
                    img: evn3img4
                }
            ]
        }
    },
    {
        id: 4,
        img: evn4,
        title: 'Community Football Club - Sunrise, UK',
        details: 'One of the European Community Football Club mainly sponsored by AYAPA 20 tournaments throughout the years and around 1500 viewers for each single tournament',
        more: {
            title: 'Community Football Club - Sunrise, UK',
            bulletList: [
                { item: 'Sunrise is one of the European Tamil Football club' },
                { item: 'Ayapa is the main sponsor of sunrise football club' },
                { item: 'Around 20 tournaments through out the years' },
                { item: 'Different matches for different age groups' },
                { item: 'Around 1500 viewers for every single tournaments' },
                { item: 'Competing teams are from all around Europe' }
            ],
            gallery: [
                {
                    img: evn4img1
                },
                {
                    img: evn4img2
                }
            ]
        }
    },
];