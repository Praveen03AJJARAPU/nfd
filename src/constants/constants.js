export const flex = 'flex items-center';

export const benefits = [
    {
        h1: 'Activities',
        p: 'Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money.',
        img: 'https://www.nfd.gg/_next/image?url=%2Fbenefits%2FactivitiesBenefitOPT.webp&w=1080&q=100' 
    },
    {
        h1: 'Auto-Update feed',
        p: 'All activities will have an “auto update feed”, which will be monitored by the NFD team so that you wont miss important changes or additions to any activity. Stay up to date!',
        img: 'https://www.nfd.gg/_next/image?url=%2Fbenefits%2FfeedBenefitOPT.webp&w=1080&q=100' 
    },
    {
        h1: 'Calendar',
        p: 'We have implemented an internal calendar functionality that will synchronize all your “Activities” in NFD, all their deadlines and important events. You can also add your token',
        img: 'https://www.nfd.gg/_next/image?url=%2Fbenefits%2FcalendarBenefitOPT.webp&w=1080&q=100' 
    },
    {
        h1: 'Aggregator',
        p: 'Create a project card, set up data parsing in just 2 minutes and get only the necessary information concerning any crypto project.',
        img: 'https://www.nfd.gg/_next/image?url=%2Fbenefits%2FaggregatorBenefitOPT.webp&w=1080&q=100' 
    },
    {
        h1: 'Alpha Search',
        p: 'Make your own list of influencers, funds or degen accounts on Twitter and monitor their new subscriptions and where those subscriptions match each other. Be the first to find an alpha.',
        img: 'https://www.nfd.gg/_next/image?url=%2Fbenefits%2FalphaSearchBenefitOPT.webp&w=1080&q=100' 
    },
]

export const stages = [
    {
        arr: [
            {p:'Development', color: 'g'},
            {p:'Activities and Aggregator', color: 'g'},
            {p:'Alpha test', color: 'g'},
            {p:'Alpha search tool', color: 'g'},
            {p:'Beta test', color: 'o'}
        ]

    },
    {
        arr: [
            {p:'ROI scanner', color: 'o'},
            {p:'Aggregator “Summary”', color: 'o'},
            {p:'Twitter Scanner tool', color: 'o'},
            {p:'Whale’s analysis', color: 'w'},
            {p:'Blocks in Aggregator', color: 'o'}
        ]

    },
    {
        arr: [
            {p:'New sections in “Activities”', color: 'g'},
            {p:'Launching NFD DAO', color: 'g'},
            {p:'Expanding the calendar', color: 'g'},
            {p:'Token vesting tool', color: 'g'},
            {p:'NFD labs incubator', color: 'o'}
        ]

    },
    {
        arr: [
            {p:'Crypto arbitrage scanner', color: 'w'},
            {p:'Alpha search AI developing based on data collected', color: 'w'},
            {p:'Adding any services based on NFD DAO votes', color: 'w'},
        ]

    },
    {
        arr: [
            {p:'The launch of Project “X” by NFD labs, which will change the culture of crypto investment', color: 'g'},
        ]

    },

]

export const team = [
    {
        image: '../../images/villiam.webp',
        name: 'William',
        role: 'CTO',
        color: ['pink', 'blue'],
        info: '5+ years in IT, 5 years in crypto. Brought from 0 to successful launch multiple complex projects'
    },
    {
        image: '../../images/leoor.webp',
        name: 'Leo',
        role: 'CEO',
        color: ['red', 'orange'],
        info: 'Experience: 4 years in crypto. Invested in almost all the big projects, that have launched on the market in the last 2 years. Works directly with many crypto incubators and launchpads.'
    },
    {
        image: '../../images/villiam.webp',
        name: 'Vadim',
        color: ['red', 'yellow'],
        role: 'CCO',
        info: 'Experience: In web3 since 2018. Head of content. For more than two years he has been writing for the famous and authoritative communities.'
    },
    {
        image: '../../images/vitale.webp',
        name: 'Vitale',
        color: ['violet', 'blue'],

        role: 'Tema Lead fullstack',
        info: '5+ years in IT, 5 years in crypto. Brought from 0 to successful launch multiple complex projects'
    },
    {
        image: '../../images/nik.webp',
        name: 'Nikita',
        color: ['red', 'pink'],
        role: 'Frontend developer',
        info: 'Experience: 3 years of working with most popular front-end frameworks and libraries including. Loves working with 3d libraries and solving complex problems.'
    },
    {
        image: '../../images/den.webp',
        name: 'Den',
        color: ['cyan', 'pink'],

        role: 'Backend developer',
        info: 'Experience: 4+ years developing complex back-end solutions. JS/TS, Python, Rust, Go.'
    },
]

export const navItems = ['About',
    'Aggregator',
    'Features',
    'Roadmap',
    'Contact us']

export const slideIn = (i) => ({
    hidden : {
        y : 10,
        opacity: 0,
    },
    show : {
        y : 0,
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 + i}
    }
})

export const slideRight = () => ({
    hidden : {
        x : 10,
        opacity: 0,
    },
    show : {
        y : 0,
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.5}
    }
})
