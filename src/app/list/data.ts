type blueprint = { appearances: string[], name: string, description: string, gender: string | null, race: string | null, id: string }

export type TZelda = blueprint;

type ListBaseBlueprint = {
    id: string;
    name: string
}

type ListShapeModel<TData> = Extract<TData, ListBaseBlueprint>;

export type ListShape<TData> = Required<ListShapeModel<TData>>;

export const ob: TZelda[] = [
    {
        appearances: [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c5',
        ],
        'name': 'Anjean',
        'description': 'Anjean  is a character in Spirit Tracks. She is a member of the Lokomo people and the protector of the Tower of Spirits, the central hub of the Spirit Tracks, whose goal is to prevent the evil Malladus from breaking free of his imprisonment. Anjean provides the Spirit Train, which Link and Princess Zelda use along their quest. Anjean was also a very close friend with Tetra after she met her shortly after the feisty pirate arrived to the land that would become the next Hyrule. As a result of their strong friendship, Anjean gave Tetra the sacred instrument known as the Spirit Flute, but only under the condition that she and her descendants would use it to protect the land. ',
        gender: 'Female',
        race: 'Lokomo',
        'id': '5f6d186f246bd9a0809d6115',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c0',
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2b9',
        ],
        'name': 'Animal Companion',
        'description': 'The Animal Companions are three characters in Oracle of Seasons and Oracle of Ages: Ricky, Moosh, and Dimitri. They become Link\'s Mounts when he needs their special abilities to traverse certain terrain. ',
        gender: null,
        race: null,
        'id': '5f6d186f246bd9a0809d6116',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9',
        ],
        'name': 'Ancient Oven',
        'description': 'The Ancient Oven is a character in Breath of the Wild. ',
        'gender': null,
        'race': null,
        'id': '5f6d186f246bd9a0809d6117',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c3',
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2b9',
        ],
        'name': 'Angler Fish',
        'description': 'The Angler Fish is a recurring Boss in The Legend of Zelda series. ',
        'gender': null,
        'race': null,
        'id': '5f6d186f246bd9a0809d6118',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c5',
        ],
        'name': 'Carben',
        'description': 'Carben is a character from Spirit Tracks. He is a member of the Lokomo race and Guardian of the Ocean Realm who resides in the Ocean Sanctuary. Like the rest of the Lokomo people, Carben possesses a sacred instrument, his being the flute, which generates energy to power the Spirit Tracks when played with another sacred instrument. Carben also has the ability to communicate with birds. ',
        'gender': 'Male',
        'race': 'Lokomo',
        'id': '5f6d186f246bd9a0809d611a',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9',
        ],
        'name': 'Anche',
        'description': 'Anche is a character in Breath of the Wild. ',
        'gender': null,
        'race': 'Gerudo',
        'id': '5f6d186f246bd9a0809d6119',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9',
        ],
        'name': 'Cara',
        'description': 'Cara is a character in Breath of the Wild. ',
        'gender': 'Female',
        'race': 'Gerudo',
        'id': '5f6d186f246bd9a0809d611b',
    },
    {
        'appearances': [],
        'name': 'Captain Krin',
        'description': 'Captain Krin is a character featured in the The Legend of Zelda comics by Valiant Comics published by Valiant Comics. He is the soldier captain at the North Castle who will do anything to protect both the palace and the king. ',
        'gender': null,
        'race': 'Hylian',
        'id': '5f6d186f246bd9a0809d611d',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2cd',
        ],
        'name': 'Captain Stalfos',
        'description': 'Captain Stalfos is a boss in Freshly-Picked Tingle\'s Rosy Rupeeland. He is the leader of the group of Pirates. In order for Tingle to join the pirate crew, he has to be dead. If he wants to survive, he must defeat the captain in a sword duel. If Tingle succeeds in this task, he will be given the Bone Ocarina, which may be used at any pier to call the pirate ship. ',
        'gender': null,
        'race': 'Pirate',
        'id': '5f6d186f246bd9a0809d611c',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2bc',
        ],
        'name': 'Captain Keeta',
        'description': 'Captain Keeta, also known as Skull Keeta, is a mini-boss in Majora\'s Mask. ',
        'gender': null,
        'race': null,
        'id': '5f6d186f246bd9a0809d611e',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c6',
        ],
        'name': 'Caprice',
        'description': 'Caprice is a character in The Minish Cap. ',
        'gender': null,
        'race': null,
        'id': '5f6d186f246bd9a0809d611f',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9',
        ],
        'name': 'Champion',
        'description': 'The Champions are a team of five chosen from the five races of Hyrule to battle against Calamity Ganon. Led by Princess Zelda with the Champion hero chosen by the sword that seals the darkness at her side, the other four Champions were tasked with piloting the Divine Beasts and providing back-up as Link and Zelda face the Calamity head-on in an attempted to seal it away. ',
        'gender': null,
        'race': null,
        'id': '5f6d186f246bd9a0809d6124',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9',
        ],
        'name': 'Flaxel',
        'description': 'Flaxel is a character in Breath of the Wild. ',
        'gender': 'Female',
        'race': 'Hylian',
        'id': '5f6d186f246bd9a0809d6129',
    },
    {
        'appearances': [],
        'name': 'Farore',
        'description': 'Farore is the name of two different people in the Zelda universe: ',
        'gender': null,
        'race': null,
        'id': '5f6d186f246bd9a0809d612e',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2bc',
        ],
        'name': 'Grog',
        'description': 'Grog is a character in Majora\'s Mask. ',
        'gender': 'Male',
        'race': 'Hylian',
        'id': '5f6d186f246bd9a0809d6133',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9',
        ],
        'name': 'Straia',
        'description': 'Straia is a character in Breath of the Wild. ',
        'gender': null,
        'race': 'Hylian',
        'id': '5f6d186f246bd9a0809d6138',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9',
        ],
        'name': 'Malena',
        'description': 'Malena is a character in Breath of the Wild. ',
        'gender': 'Female',
        'race': 'Gerudo',
        'id': '5f6d186f246bd9a0809d613d',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2bf',
        ],
        'name': 'Makar',
        'description': 'Makar is a character in The Wind Waker. ',
        'gender': 'Male',
        'race': 'Korok',
        'id': '5f6d186f246bd9a0809d6142',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2bd',
        ],
        'name': 'Magician',
        'description': 'The Magician is a character in The Adventure of Link. ',
        'gender': null,
        'race': null,
        'id': '5f6d186f246bd9a0809d6147',
    },
    {
        'appearances': [
            'https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c8',
        ],
        'name': 'Mallara',
        'description': 'Mallara is a character in Skyward Sword. ',
        'gender': 'Female',
        'race': 'Hylian',
        'id': '5f6d186f246bd9a0809d614c',
    },
];
