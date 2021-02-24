// words
const wordLists = [
  [
    "above",
    "across",
    "action",
    "activity",
    "actor",
    "actress",
    "add",
    "address",
    "adult",
    "advice",
    "afraid",
    "after",
    "afternoon",
    "again",
    "age",
    "ago",
    "agree",
    "air",
    "airport",
    "all",
    "also",
    "always",
    "amazing",
    "and",
    "angry",
    "animal",
    "another",
    "answer",
    "any",
    "anyone",
    "anything",
    "apartment",
    "apple",
    "April",
    "area",
    "arm",
    "around",
    "arrive",
    "art",
    "article",
    "artist",
    "as",
    "ask",
    "at",
    "August",
    "aunt",
    "autumn",
    "away",
    "baby",
    "back",
    "bad",
    "bag",
    "ball",
    "banana",
    "band",
    "bank",
    "bath",
    "bathroom",
    "be",
    "beach",
    "beautiful",
    "because",
    "become",
    "bed",
    "bedroom",
    "beer",
    "before",
    "begin",
    "beginning",
    "behind",
    "believe",
    "below",
    "best",
    "better",
    "between",
    "bicycle",
    "big",
    "bike",
    "bill",
    "bird",
    "birthday",
    "black",
    "blog",
    "blonde",
    "blue",
    "boat",
    "body",
    "book",
    "boot",
    "bored",
    "boring",
    "born",
    "both",
    "bottle",
    "box",
    "boy",
    "boyfriend",
    "bread",
    "break",
    "breakfast",
    "bring",
    "brother",
    "brown",
    "build",
    "building",
    "bus",
    "business",
    "busy",
    "but",
    "butter",
    "buy",
    "by",
    "bye",
    "cafe",
    "cake",
    "call",
    "camera",
    "can1",
    "cannot",
    "capital",
    "car",
    "card",
    "career",
    "carrot",
    "carry",
    "cat",
    "CD",
    "cent",
    "centre",
    "century",
    "chair",
    "change",
    "chart",
    "cheap",
    "check",
    "cheese",
    "chicken",
    "child",
    "chocolate",
    "choose",
    "cinema",
    "city",
    "class",
    "classroom",
    "clean",
    "climb",
    "clock",
    "close",
    "clothes",
    "club",
    "coat",
    "coffee",
    "cold",
    "college",
    "colour",
    "come",
    "common",
    "company",
    "compare",
    "complete",
    "computer",
    "concert",
    "conversation",
    "cook",
    "cooking",
    "cool",
    "correct",
    "cost",
    "could",
    "country",
    "course",
    "cousin",
    "cow",
    "cream",
    "create",
    "culture",
    "cup",
    "customer",
    "cut",
    "dad",
    "dance",
    "dancer",
    "dancing",
    "dangerous",
    "dark",
    "date",
    "daughter",
    "day",
    "dear",
    "December",
    "decide",
    "delicious",
    "describe",
    "description",
    "design",
    "desk",
    "detail",
    "dialogue",
    "dictionary",
    "die",
    "diet",
    "difference",
    "different",
    "difficult",
    "dinner",
    "dirty",
    "discuss",
    "dish",
    "doctor",
    "dog",
    "dollar",
    "door",
    "down",
    "downstairs",
    "draw",
    "dress",
    "drink",
    "drive",
    "driver",
    "during",
    "DVD",
    "each",
    "ear",
    "early",
    "east",
    "easy",
    "eat",
    "egg",
    "eight",
    "eleven",
    "email",
    "end",
    "enjoy",
    "enough",
    "euro",
    "even",
    "evening",
    "event",
    "ever",
    "every",
    "everybody",
    "everyone",
    "everything",
    "exam",
    "example",
    "excited",
    "exciting",
    "exercise",
    "expensive",
    "explain",
    "extra",
    "eye",
    "face",
    "fact",
    "fall",
    "false",
    "family",
    "famous",
    "fantastic",
    "far",
    "farm",
    "farmer",
    "fast",
    "fat",
    "father",
    "favourite",
    "February",
    "feel",
    "feeling",
    "festival",
    "few",
    "fifteen",
    "film",
    "final",
    "find",
    "fine",
    "finish",
    "fire",
    "first",
    "fish",
    "five",
    "flight",
    "floor",
    "flower",
    "fly",
    "follow",
    "food",
    "foot",
    "football",
    "for",
    "forget",
    "form",
    "forty",
    "Friday",
    "friend",
    "friendly",
    "from",
    "front",
    "fruit",
    "full",
    "fun",
    "funny",
    "future",
    "game",
    "garden",
    "geography",
    "get",
    "girl",
    "girlfriend",
    "give",
    "glass",
    "go",
    "good",
    "goodbye",
    "grandfather",
    "grandmother",
    "grandparent",
    "great",
    "green",
    "grey",
    "group",
    "grow",
    "guess",
    "guitar",
    "gym",
    "hair",
    "half",
    "hand",
    "happen",
    "happy",
    "hard",
    "hat",
    "hate",
    "have",
    "have",
    "he",
    "head",
    "health",
    "healthy",
    "hear",
    "hello",
    "help",
    "her",
    "here",
    "hey",
    "hi",
    "high",
    "him",
    "his",
    "history",
    "hobby",
    "holiday",
    "home",
    "homework",
    "hope",
    "horse",
    "hospital",
    "hot",
    "hotel",
    "hour",
    "house",
    "how",
    "however",
    "hundred",
    "husband",
    "I",
    "ice",
    "ice",
    "idea",
    "if",
    "imagine",
    "important",
    "improve",
    "in",
    "include",
    "information",
    "interest",
    "interested",
    "interesting",
    "internet",
    "interview",
    "into",
    "introduce",
    "island",
    "it",
    "its",
    "jacket",
    "January",
    "jeans",
    "job",
    "join",
    "journey",
    "juice",
    "July",
    "June",
    "just",
    "keep",
    "key",
    "kilometre",
    "kind",
    "kitchen",
    "know",
    "land",
    "language",
    "large",
    "last1",
    "late",
    "later",
    "laugh",
    "learn",
    "leave",
    "left",
    "leg",
    "lesson",
    "let",
    "letter",
    "library",
    "lie1",
    "life",
    "light",
    "like",
    "like",
    "line",
    "lion",
    "list",
    "listen",
    "little",
    "live1",
    "local",
    "long1",
    "look",
    "lose",
    "lot",
    "love",
    "lunch",
    "machine",
    "magazine",
    "main",
    "make",
    "man",
    "many",
    "map",
    "March",
    "market",
    "married",
    "match",
    "May",
    "maybe",
    "me",
    "meal",
    "mean",
    "meaning",
    "meat",
    "meet",
    "meeting",
    "member",
    "menu",
    "message",
    "metre",
    "midnight",
    "mile",
    "milk",
    "million",
    "miss",
    "mistake",
    "model",
    "modern",
    "moment",
    "Monday",
    "money",
    "month",
    "more",
    "morning",
    "most",
    "mother",
    "mountain",
    "mouse",
    "mouth",
    "move",
    "movie",
    "much",
    "mum",
    "museum",
    "music",
    "must",
    "my",
    "name",
    "natural",
    "near",
    "need",
    "negative",
    "neighbour",
    "never",
    "new",
    "news",
    "newspaper",
    "next",
    "next",
    "nice",
    "night",
    "nine",
    "no",
    "nobody",
    "north",
    "nose",
    "not",
    "note",
    "nothing",
    "November",
    "now",
    "number",
    "nurse",
    "object",
    "o�clock",
    "October",
    "of",
    "off",
    "office",
    "often",
    "oh",
    "OK",
    "old",
    "on",
    "once",
    "one",
    "onion",
    "online",
    "only",
    "open",
    "opinion",
    "opposite",
    "or",
    "orange",
    "order",
    "other",
    "our",
    "out",
    "outside",
    "over",
    "own",
    "page",
    "paint",
    "painting",
    "pair",
    "paper",
    "paragraph",
    "parent",
    "park",
    "part",
    "partner",
    "party",
    "passport",
    "past",
    "pay",
    "pen",
    "pencil",
    "people",
    "pepper",
    "perfect",
    "period",
    "person",
    "personal",
    "phone",
    "photo",
    "photograph",
    "phrase",
    "piano",
    "picture",
    "piece",
    "pig",
    "pink",
    "place",
    "plan",
    "plane",
    "plant",
    "play",
    "player",
    "please",
    "point",
    "police",
    "policeman",
    "pool",
    "poor",
    "popular",
    "positive",
    "possible",
    "post",
    "potato",
    "pound",
    "practice",
    "practise",
    "prefer",
    "prepare",
    "present",
    "pretty",
    "price",
    "probably",
    "problem",
    "product",
    "programme",
    "project",
    "purple",
    "put",
    "quarter",
    "question",
    "quick",
    "quickly",
    "quiet",
    "quite",
    "radio",
    "rain",
    "read",
    "reader",
    "reading",
    "ready",
    "real",
    "really",
    "reason",
    "red",
    "relax",
    "remember",
    "repeat",
    "report",
    "restaurant",
    "result",
    "return",
    "rice",
    "rich",
    "ride",
    "right",
    "river",
    "road",
    "room",
    "routine",
    "rule",
    "run",
    "sad",
    "salad",
    "salt",
    "same",
    "sandwich",
    "Saturday",
    "say",
    "school",
    "science",
    "scientist",
    "sea",
    "second1",
    "section",
    "see",
    "sell",
    "send",
    "sentence",
    "September",
    "seven",
    "she",
    "sheep",
    "shirt",
    "shoe",
    "shop",
    "shopping",
    "short",
    "should",
    "show",
    "shower",
    "sick",
    "similar",
    "sing",
    "singer",
    "sister",
    "sit",
    "situation",
    "six",
    "skirt",
    "sleep",
    "slow",
    "small",
    "snake",
    "snow",
    "so",
    "some",
    "somebody",
    "someone",
    "something",
    "sometimes",
    "son",
    "song",
    "soon",
    "sorry",
    ",",
    "sound",
    "soup",
    "south",
    "space",
    "speak",
    "special",
    "spell",
    "spelling",
    "spend",
    "sport",
    "spring",
    "stand",
    "star",
    "start",
    "statement",
    "station",
    "stay",
    "still",
    "stop",
    "story",
    "street",
    "strong",
    "student",
    "study",
    "style",
    "subject",
    "success",
    "sugar",
    "summer",
    "sun",
    "Sunday",
    "supermarket",
    "sure",
    "sweater",
    "swim",
    "swimming",
    "table",
    "take",
    "talk",
    "tall",
    "taxi",
    "tea",
    "teach",
    "teacher",
    "team",
    "teenager",
    "telephone",
    "television",
    "tell",
    "ten",
    "terrible",
    "test",
    "text",
    "than",
    "thank",
    "thanks",
    "that",
    "the",
    "their",
    "them",
    "then",
    "there",
    "they",
    "thing",
    "think",
    "third",
    "thirteen",
    "thousand",
    "Thursday",
    "ticket",
    "time",
    "tired",
    "title",
    "to",
    "together",
    "toilet",
    "tomato",
    "tomorrow",
    "tonight",
    "too",
    "tooth",
    "topic",
    "tourist",
    "town",
    "traffic",
    "train",
    "travel",
    "tree",
    "trip",
    "trousers",
    "true",
    "try",
    "T-shirt",
    "Tuesday",
    "turn",
    "TV",
    "twelve",
    "two",
    "umbrella",
    "uncle",
    "under",
    "understand",
    "university",
    "until",
    "up",
    "upstairs",
    "us",
    "use",
    "useful",
    "usually",
    "vacation",
    "vegetable",
    "very",
    "video",
    "village",
    "visit",
    "visitor",
    "wait",
    "waiter",
    "wake",
    "walk",
    "wall",
    "want",
    "warm",
    "wash",
    "watch",
    "water",
    "way",
    "we",
    "wear",
    "weather",
    "website",
    "Wednesday",
    "week",
    "weekend",
    "welcome",
    "well",
    "west",
    "what",
    "when",
    "where",
    "which",
    "white",
    "who",
    "why",
    "wife",
    "will",
    "win",
    "window",
    "wine",
    "winter",
    "with",
    "without",
    "woman",
    "wonderful",
    "word",
    "work",
    "worker",
    "world",
    "would",
    "write",
    "writer",
    "writing",
    "wrong",
    "yeah",
    "year",
    "yellow",
    "yes",
    "yesterday",
    "yourself",
    "young",
    "your",
  ],
  [
    "abolish",
    "abortion",
    "absence",
    "absent",
    "absurd",
    "abundance",
    "abuse",
    "academy",
    "accelerate",
    "acceptance",
    "accessible",
    "accomplishment",
    "accordance",
    "accordingly",
    "accountability",
    "accountable",
    "accumulate",
    "accumulation",
    "accusation",
    "accused",
    "acid",
    "acquisition",
    "acre",
    "activation",
    "activist",
    "acute",
    "adaptation",
    "adhere",
    "adjacent",
    "adjustment",
    "administer",
    "administrative",
    "administrator",
    "admission",
    "adolescent",
    "adoption",
    "adverse",
    "advocate",
    "aesthetic",
    "affection",
    "aftermath",
    "aggression",
    "agricultural",
    "aide",
    "albeit",
    "alert",
    "alien",
    "align",
    "alignment",
    "alike",
    "allegation",
    "allege",
    "allegedly",
    "alliance",
    "allocate",
    "allocation",
    "allowance",
    "ally",
    "aluminium",
    "amateur",
    "ambassador",
    "amend",
    "amendment",
    "amid",
    "analogy",
    "anchor",
    "angel",
    "anonymous",
    "apparatus",
    "appealing",
    "appetite",
    "applaud",
    "applicable",
    "appoint",
    "appreciation",
    "arbitrary",
    "architectural",
    "archive",
    "arena",
    "arguably",
    "arm",
    "array",
    "articulate",
    "ash",
    "aspiration",
    "aspire",
    "assassination",
    "assault",
    "assemble",
    "assembly",
    "assert",
    "assertion",
    "assurance",
    "asylum",
    "atrocity",
    "attain",
    "attendance",
    "attorney",
    "attribute",
    "audit",
    "authentic",
    "authorize",
    "auto",
    "autonomy",
    "availability",
    "await",
    "backdrop",
    "backing",
    "backup",
    "bail",
    "ballot",
    "banner",
    "bare",
    "barrel",
    "bass1",
    "bat",
    "battlefield",
    "bay",
    "beam",
    "beast",
    "behalf",
    "beloved",
    "bench",
    "benchmark",
    "beneath",
    "beneficiary",
    "betray",
    "bind",
    "biography",
    "bishop",
    "bizarre",
    "blade",
    "blast",
    "bleed",
    "blend",
    "bless",
    "blessing",
    "boast",
    "bonus",
    "boom",
    "bounce",
    "boundary",
    "bow1",
    "breach",
    "breakdown",
    "breakthrough",
    "breed",
    "broadband",
    "browser",
    "brutal",
    "buck",
    "buddy",
    "buffer",
    "bulk",
    "burden",
    "bureaucracy",
    "burial",
    "burst",
    "cabinet",
    "calculation",
    "canvas",
    "capability",
    "capitalism",
    "capitalist",
    "cargo",
    "carriage",
    "carve",
    "casino",
    "casualty",
    "catalogue",
    "cater",
    "cattle",
    "caution",
    "cautious",
    "cease",
    "cemetery",
    "chamber",
    "chaos",
    "characterize",
    "charm",
    "charter",
    "chronic",
    "chunk",
    "circulate",
    "circulation",
    "citizenship",
    "civic",
    "civilian",
    "clarity",
    "clash",
    "classification",
    "cling",
    "clinical",
    "closure",
    "cluster",
    "coalition",
    "coastal",
    "cocktail",
    "cognitive",
    "coincide",
    "collaborate",
    "collaboration",
    "collective",
    "collision",
    "colonial",
    "columnist",
    "combat",
    "commence",
    "commentary",
    "commentator",
    "commerce",
    "commissioner",
    "commodity",
    "communist",
    "companion",
    "comparable",
    "compassion",
    "compel",
    "compelling",
    "compensate",
    "compensation",
    "competence",
    "competent",
    "compile",
    "complement",
    "complexity",
    "compliance",
    "complication",
    "comply",
    "composition",
    "compromise",
    "compute",
    "conceal",
    "concede",
    "conceive",
    "conception",
    "concession",
    "condemn",
    "confer",
    "confession",
    "configuration",
    "confine",
    "confirmation",
    "confront",
    "confrontation",
    "congratulate",
    "congregation",
    "congressional",
    "conquer",
    "conscience",
    "consciousness",
    "consecutive",
    "consensus",
    "consent",
    "conserve",
    "consistency",
    "consolidate",
    "constituency",
    "constitute",
    "constitution",
    "constitutional",
    "constraint",
    "consultation",
    "contemplate",
    "contempt",
    "contend",
    "contender",
    "content2",
    "contention",
    "continually",
    "contractor",
    "contradiction",
    "contrary",
    "contributor",
    "conversion",
    "convict",
    "conviction",
    "cooperate",
    "cooperative",
    "coordinate",
    "coordination",
    "coordinator",
    "cop",
    "copper",
    "copyright",
    "correction",
    "correlate",
    "correlation",
    "correspond",
    "correspondence",
    "correspondent",
    "corresponding",
    "corrupt",
    "corruption",
    "costly",
    "councillor",
    "counselling",
    "counsellor",
    "counter",
    "counterpart",
    "countless",
    "coup",
    "courtesy",
    "craft",
    "crawl",
    "creator",
    "credibility",
    "credible",
    "creep",
    "critique",
    "crown",
    "crude",
    "crush",
    "crystal",
    "cult",
    "cultivate",
    "curiosity",
    "custody",
    "cutting",
    "cynical",
    "dam",
    "damaging",
    "dawn",
    "debris",
    "debut",
    "decision-making",
    "decisive",
    "declaration",
    "dedicated",
    "dedication",
    "deed",
    "deem",
    "default",
    "defect",
    "defensive",
    "deficiency",
    "deficit",
    "defy",
    "delegate",
    "delegation",
    "delicate",
    "demon",
    "denial",
    "denounce",
    "dense",
    "density",
    "dependence",
    "depict",
    "deploy",
    "deployment",
    "deposit",
    "deprive",
    "deputy",
    "descend",
    "descent",
    "designate",
    "desirable",
    "desktop",
    "destructive",
    "detain",
    "detection",
    "detention",
    "deteriorate",
    "devastate",
    "devil",
    "devise",
    "diagnose",
    "diagnosis",
    "dictate",
    "dictator",
    "differentiate",
    "dignity",
    "dilemma",
    "dimension",
    "diminish",
    "dip",
    "diplomat",
    "diplomatic",
    "directory",
    "disastrous",
    "discard",
    "discharge",
    "disclose",
    "disclosure",
    "discourse",
    "discretion",
    "discrimination",
    "dismissal",
    "displace",
    "disposal",
    "dispose",
    "dispute",
    "disrupt",
    "disruption",
    "dissolve",
    "distinction",
    "distinctive",
    "distort",
    "distress",
    "disturbing",
    "divert",
    "divine",
    "doctrine",
    "documentation",
    "domain",
    "dominance",
    "donor",
    "dose",
    "drain",
    "drift",
    "driving",
    "drown",
    "dual",
    "dub",
    "dumb",
    "duo",
    "dynamic",
    "eager",
    "earnings",
    "ease",
    "echo",
    "ecological",
    "educator",
    "effectiveness",
    "efficiency",
    "ego",
    "elaborate",
    "electoral",
    "elevate",
    "eligible",
    "elite",
    "embark",
    "embarrassment",
    "embassy",
    "embed",
    "embody",
    "emergence",
    "empirical",
    "empower",
    "enact",
    "encompass",
    "encouragement",
    "encouraging",
    "endeavour",
    "endless",
    "endorse",
    "endorsement",
    "endure",
    "enforce",
    "enforcement",
    "engagement",
    "engaging",
    "enquire",
    "enrich",
    "enrol",
    "ensue",
    "enterprise",
    "enthusiast",
    "entitle",
    "entity",
    "epidemic",
    "equality",
    "equation",
    "erect",
    "escalate",
    "essence",
    "establishment",
    "eternal",
    "evacuate",
    "evoke",
    "evolutionary",
    "exaggerate",
    "excellence",
    "exceptional",
    "excess",
    "exclusion",
    "exclusive",
    "exclusively",
    "execute",
    "execution",
    "exert",
    "exile",
    "exit",
    "expenditure",
    "experimental",
    "expire",
    "explicit",
    "explicitly",
    "exploitation",
    "explosive",
    "extract",
    "extremist",
    "facilitate",
    "faction",
    "faculty",
    "fade",
    "fairness",
    "fatal",
    "fate",
    "favourable",
    "feat",
    "feminist",
    "fibre",
    "fierce",
    "film-maker",
    "filter",
    "fine",
    "firearm",
    "fit",
    "fixture",
    "flaw",
    "flawed",
    "flee",
    "fleet",
    "flesh",
    "flexibility",
    "flourish",
    "fluid",
    "footage",
    "foreigner",
    "forge",
    "formula",
    "formulate",
    "forth",
    "forthcoming",
    "foster",
    "fragile",
    "franchise",
    "frankly",
    "frustrated",
    "frustrating",
    "frustration",
    "functional",
    "fundraising",
    "funeral",
    "gallon",
    "gambling",
    "gathering",
    "gaze",
    "gear",
    "generic",
    "genocide",
    "glance",
    "glimpse",
    "glorious",
    "glory",
    "governance",
    "grace",
    "grasp",
    "grave",
    "gravity",
    "grid",
    "grief",
    "grin",
    "grind",
    "grip",
    "gross",
    "guerrilla",
    "guidance",
    "guilt",
    "gut",
    "hail",
    "halfway",
    "halt",
    "handful",
    "handling",
    "handy",
    "harassment",
    "hardware",
    "harmony",
    "harsh",
    "harvest",
    "hatred",
    "haunt",
    "hazard",
    "heighten",
    "heritage",
    "hierarchy",
    "high-profile",
    "hint",
    "homeland",
    "hook",
    "hopeful",
    "horizon",
    "horn",
    "hostage",
    "hostile",
    "hostility",
    "humanitarian",
    "humanity",
    "humble",
    "hydrogen",
    "identification",
    "ideological",
    "ideology",
    "idiot",
    "ignorance",
    "imagery",
    "immense",
    "imminent",
    "implementation",
    "imprison",
    "imprisonment",
    "inability",
    "inadequate",
    "inappropriate",
    "incidence",
    "inclined",
    "inclusion",
    "incur",
    "indicator",
    "indictment",
    "indigenous",
    "induce",
    "indulge",
    "inequality",
    "infamous",
    "infant",
    "infect",
    "inflict",
    "influential",
    "inherent",
    "inhibit",
    "initiate",
    "inject",
    "injection",
    "injustice",
    "inmate",
    "insertion",
    "insider",
    "inspect",
    "inspection",
    "inspiration",
    "instinct",
    "institutional",
    "instruct",
    "instrumental",
    "insufficient",
    "insult",
    "intact",
    "intake",
    "integral",
    "integrated",
    "integration",
    "integrity",
    "intellectual",
    "intensify",
    "intensity",
    "intensive",
    "intent",
    "interactive",
    "interface",
    "interfere",
    "interference",
    "interim",
    "interior",
    "intermediate",
    "intervene",
    "intervention",
    "intimate",
    "intriguing",
    "investigator",
    "invisible",
    "invoke",
    "involvement",
    "ironic",
    "ironically",
    "irony",
    "irrelevant",
    "isolation",
    "judicial",
    "junction",
    "jurisdiction",
    "just",
    "justification",
    "kidnap",
    "kidney",
    "kingdom",
    "lad",
    "landlord",
    "landmark",
    "lap",
    "large-scale",
    "laser",
    "latter",
    "lawn",
    "lawsuit",
    "layout",
    "leak",
    "leap",
    "legacy",
    "legendary",
    "legislation",
    "legislative",
    "legislature",
    "legitimate",
    "lengthy",
    "lesbian",
    "lesser",
    "lethal",
    "liable",
    "liberal",
    "liberation",
    "liberty",
    "license",
    "lifelong",
    "likelihood",
    "limb",
    "linear",
    "line-up",
    "linger",
    "listing",
    "literacy",
    "liver",
    "lobby",
    "log",
    "logic",
    "long-standing",
    "long-time",
    "loom",
    "loop",
    "loyalty",
    "machinery",
    "magical",
    "magistrate",
    "magnetic",
    "magnitude",
    "mainland",
    "mainstream",
    "maintenance",
    "mandate",
    "mandatory",
    "manifest",
    "manipulate",
    "manipulation",
    "manuscript",
    "march",
    "marginal",
    "marine",
    "marketplace",
    "mask",
    "massacre",
    "mathematical",
    "mature",
    "maximize",
    "meaningful",
    "meantime",
    "medieval",
    "meditation",
    "melody",
    "memo",
    "memoir",
    "memorial",
    "mentor",
    "merchant",
    "mercy",
    "mere",
    "merely",
    "merge",
    "merger",
    "merit",
    "methodology",
    "midst",
    "migration",
    "militant",
    "militia",
    "mill",
    "minimal",
    "minimize",
    "mining",
    "ministry",
    "minute2",
    "miracle",
    "misery",
    "misleading",
    "missile",
    "mob",
    "mobility",
    "mobilize",
    "moderate",
    "modification",
    "momentum",
    "monk",
    "monopoly",
    "morality",
    "motive",
    "motorist",
    "municipal",
    "mutual",
    "namely",
    "nationwide",
    "naval",
    "neglect",
    "neighbouring",
    "nest",
    "net",
    "newsletter",
    "niche",
    "noble",
    "nod",
    "nominate",
    "nomination",
    "nominee",
    "nonetheless",
    "non-profit",
    "nonsense",
    "noon",
    "notable",
    "notably",
    "notify",
    "notorious",
    "novel",
    "nursery",
    "objection",
    "oblige",
    "obsess",
    "obsession",
    "occasional",
    "occurrence",
    "odds",
    "offering",
    "offspring",
    "operational",
    "opt",
    "optical",
    "optimism",
    "oral",
    "organizational",
    "orientation",
    "originate",
    "outbreak",
    "outing",
    "outlet",
    "outlook",
    "outrage",
    "outsider",
    "overlook",
    "overly",
    "oversee",
    "overturn",
    "overwhelm",
    "overwhelming",
    "pad",
    "parameter",
    "parental",
    "parish",
    "parliamentary",
    "partial",
    "partially",
    "passing",
    "passive",
    "pastor",
    "patch",
    "patent",
    "pathway",
    "patrol",
    "patron",
    "peak",
    "peasant",
    "peculiar",
    "persist",
    "persistent",
    "personnel",
    "petition",
    "philosopher",
    "philosophical",
    "physician",
    "pioneer",
    "pipeline",
    "pirate",
    "pit",
    "plea",
    "plead",
    "pledge",
    "plug",
    "plunge",
    "pole",
    "poll",
    "pond",
    "pop",
    "portfolio",
    "portray",
    "postpone",
    "post-war",
    "practitioner",
    "preach",
    "precedent",
    "precision",
    "predator",
    "predecessor",
    "predominantly",
    "pregnancy",
    "prejudice",
    "preliminary",
    "premier",
    "premise",
    "premium",
    "prescribe",
    "prescription",
    "presently",
    "preservation",
    "preside",
    "presidency",
    "presidential",
    "prestigious",
    "presumably",
    "presume",
    "prevail",
    "prevalence",
    "prevention",
    "prey",
    "principal",
    "privatization",
    "privilege",
    "probe",
    "problematic",
    "proceedings",
    "proceeds",
    "processing",
    "processor",
    "proclaim",
    "productive",
    "productivity",
    "profitable",
    "profound",
    "projection",
    "prominent",
    "pronounced",
    "propaganda",
    "proposition",
    "prosecute",
    "prosecution",
    "prosecutor",
    "prospective",
    "prosperity",
    "protective",
    "protocol",
    "province",
    "provincial",
    "provision",
    "provoke",
    "psychiatric",
    "pulse",
    "pump",
    "punch",
    "query",
    "quest",
    "quota",
    "radar",
    "radical",
    "rage",
    "raid",
    "rally",
    "ranking",
    "rape",
    "ratio",
    "rational",
    "ray",
    "readily",
    "realization",
    "realm",
    "rear",
    "reassure",
    "reasoning",
    "rebel",
    "rebellion",
    "recipient",
    "reconstruction",
    "recount1",
    "referendum",
    "reflection",
    "reform",
    "refuge",
    "refusal",
    "regain",
    "regardless",
    "regime",
    "regulator",
    "regulatory",
    "rehabilitation",
    "reign",
    "rejection",
    "relevance",
    "reliability",
    "reluctant",
    "remainder",
    "remains",
    "remedy",
    "reminder",
    "removal",
    "render",
    "renew",
    "renowned",
    "rental",
    "replacement",
    "reportedly",
    "representation",
    "reproduce",
    "reproduction",
    "republic",
    "resemble",
    "reside",
    "residence",
    "residential",
    "residue",
    "resignation",
    "resistance",
    "respective",
    "respectively",
    "restoration",
    "restraint",
    "resume",
    "retreat",
    "retrieve",
    "revelation",
    "revenge",
    "reverse",
    "revival",
    "revive",
    "revolutionary",
    "rhetoric",
    "rifle",
    "riot",
    "rip",
    "ritual",
    "robust",
    "rock",
    "rod",
    "rotate",
    "rotation",
    "ruling",
    "rumour",
    "sack",
    "sacred",
    "sacrifice",
    "saint",
    "sake",
    "sanction",
    "say",
    "scattered",
    "sceptical",
    "scope",
    "screw",
    "scrutiny",
    "seal",
    "secular",
    "seemingly",
    "segment",
    "seize",
    "seldom",
    "selective",
    "senator",
    "sensation",
    "sensitivity",
    "sentiment",
    "separation",
    "serial",
    "settlement",
    "set-up",
    "sexuality",
    "shareholder",
    "shatter",
    "shed",
    "sheer",
    "shipping",
    "shoot",
    "shrink",
    "shrug",
    "sigh",
    "simulate",
    "simulation",
    "simultaneously",
    "sin",
    "situated",
    "sketch",
    "skip",
    "slam",
    "slap",
    "slash",
    "slavery",
    "slot",
    "smash",
    "snap",
    "soak",
    "soar",
    "socialist",
    "sole",
    "solely",
    "solicitor",
    "solidarity",
    "solo",
    "sound",
    "sovereignty",
    "spam",
    "span",
    "spare",
    "spark",
    "specialized",
    "specification",
    "specimen",
    "spectacle",
    "spectrum",
    "spell",
    "sphere",
    "spin",
    "spine",
    "spotlight",
    "spouse",
    "spy",
    "squad",
    "squeeze",
    "stab",
    "stability",
    "stabilize",
    "stake",
    "standing",
    "stark",
    "statistical",
    "steer",
    "stem",
    "stereotype",
    "stimulus",
    "stir",
    "storage",
    "straightforward",
    "strain",
    "strand",
    "strategic",
    "striking",
    "strip",
    "strip",
    "strive",
    "structural",
    "stumble",
    "stun",
    "submission",
    "subscriber",
    "subscription",
    "subsidy",
    "substantial",
    "substantially",
    "substitute",
    "substitution",
    "subtle",
    "suburban",
    "succession",
    "successive",
    "successor",
    "suck",
    "sue",
    "suicide",
    "suite",
    "summit",
    "superb",
    "superior",
    "supervise",
    "supervision",
    "supervisor",
    "supplement",
    "supportive",
    "supposedly",
    "suppress",
    "supreme",
    "surge",
    "surgical",
    "surplus",
    "surrender",
    "surveillance",
    "suspension",
    "suspicion",
    "suspicious",
    "sustain",
    "swing",
    "sword",
    "symbolic",
    "syndrome",
    "synthesis",
    "systematic",
    "tackle",
    "tactic",
    "tactical",
    "taxpayer",
    "tempt",
    "tenant",
    "tender",
    "tenure",
    "terminal",
    "terminate",
    "terrain",
    "terrific",
    "testify",
    "testimony",
    "texture",
    "thankfully",
    "theatrical",
    "theology",
    "theoretical",
    "thereafter",
    "thereby",
    "thoughtful",
    "thought-provoking",
    "thread",
    "threshold",
    "thrilled",
    "thrive",
    "tide",
    "tighten",
    "timber",
    "timely",
    "tobacco",
    "tolerance",
    "tolerate",
    "toll",
    "top",
    "torture",
    "toss",
    "total",
    "toxic",
    "trace",
    "trademark",
    "trail",
    "trailer",
    "transaction",
    "transcript",
    "transformation",
    "transit",
    "transmission",
    "transparency",
    "transparent",
    "trauma",
    "treaty",
    "tremendous",
    "tribal",
    "tribunal",
    "tribute",
    "trigger",
    "trio",
    "triumph",
    "trophy",
    "troubled",
    "trustee",
    "tuition",
    "turnout",
    "turnover",
    "twist",
    "undergraduate",
    "underlying",
    "undermine",
    "undoubtedly",
    "unify",
    "unprecedented",
    "unveil",
    "upcoming",
    "upgrade",
    "uphold",
    "utility",
    "utilize",
    "utterly",
    "vacuum",
    "vague",
    "validity",
    "vanish",
    "variable",
    "varied",
    "vein",
    "venture",
    "verbal",
    "verdict",
    "verify",
    "verse",
    "versus",
    "vessel",
    "veteran",
    "viable",
    "vibrant",
    "vice",
    "vicious",
    "villager",
    "violate",
    "violation",
    "virtue",
    "vocal",
    "vow",
    "vulnerability",
    "vulnerable",
    "ward",
    "warehouse",
    "warfare",
    "warrant",
    "warrior",
    "weaken",
    "weave",
    "weed",
    "well",
    "well-being",
    "whatsoever",
    "whereby",
    "whilst",
    "whip",
    "wholly",
    "widen",
    "widow",
    "width",
    "willingness",
    "wipe",
    "wit",
    "withdrawal",
    "workout",
    "worship",
    "worthwhile",
    "worthy",
    "yell",
    "yield",
    "youngster",
  ],
];

// globals
let time = 0;
let score = 0;
let scores = [];
let words = wordLists[0];
let level;
let isPlaying;

// levels

// DOMs
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const easy = document.querySelector("#easy");
const normal = document.querySelector("#normal");
const hard = document.querySelector("#hard");
const highScore = document.querySelector("#high-score");

// event listeners
//document.addEventListener("DOMContentLoaded", getHighScore);

window.addEventListener("load", getHighScore);
window.addEventListener("load", getLevel);
easy.addEventListener("click", setEasy);
normal.addEventListener("click", setNormal);
hard.addEventListener("click", setHard);
window.addEventListener("load", init);

// init game

function init() {
  console.log("init");
  // get word from json
  getWord(words);
  // start matching on word input
  wordInput.addEventListener("input", startMatch);
  // countdown
  setInterval(countdown, 1000);
  // check game status every 50ms
  setInterval(checkStatus, 50);
}

// start game
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 4;
    getWord(words);
    wordInput.value = "";
    wordInput.style.borderColor = "#0090C6";
    seconds.classList.remove("warn-txt");
    score++;
  }
  scoreDisplay.innerHTML = score;
}
// match current word to required word
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    message.classList.remove("msg-hide");
    message.classList.add("msg-high");

    function fader() {
      setTimeout(function () {
        message.classList.add("msg-hide");
      }, 400);
    }
    fader();
    return true;
  } else {
    message.innerHTML = "&nbsp;";

    return false;
  }
}

// get a word function
function getWord(words) {
  // gen random index
  const randIndex = Math.floor(Math.random() * words.length);
  // output word
  currentWord.innerHTML = words[randIndex];
}

// timer
function countdown() {
  // make sure time hasnt run out
  if (time >= 1) {
    time--;
    if (time == 0) {
      isPlaying = false;
    }
  }
  // display time
  timeDisplay.innerHTML = time;
  seconds.innerHTML = time;
}

// check game status
function checkStatus() {
  if (!isPlaying && time === 0 && score > 0) {
    saveHighScore(score);
    saveLevel(level);
    message.classList.remove("msg-high");
    message.classList.remove("msg-hide");
    message.classList.add("msg-red");
    wordInput.style.borderColor = "#F14C4F";
    seconds.classList.add("warn-txt");
    message.innerHTML = "GAME OVER";
    score = 0;
  }
}
// save highscore to local storage
function saveHighScore(s) {
  // check for high score
  if (!localStorage.getItem("scores")) {
    scores = [s];
    highScore.innerHTML = scores;
  } else if (scores[0] > s) {
    scores = JSON.parse(localStorage.getItem("scores"));
  } else {
    scores.splice(0, 1, s);
    highScore.innerHTML = scores;
  }
  localStorage.setItem("scores", JSON.stringify(scores));
}

// recall from local storage
function getHighScore() {
  saveHigh = 0;
  if (!localStorage.getItem("scores")) {
    saveHigh = [];
  } else {
    saveHigh = JSON.parse(localStorage.getItem("scores"));
    highScore.innerHTML = saveHigh;
  }
}

// save difficulty to local storage
function saveLevel(s) {
  // check for last
  if (!localStorage.getItem("level")) {
    level = s;
    curLevel.innerHTML = level;
  } else {
    curLevel.innerHTML = level;
  }
  localStorage.setItem("level", JSON.stringify(level));
}

// recall from local storage
function getLevel() {
  if (!localStorage.getItem("level")) {
    level = "low";
  } else if (JSON.parse(localStorage.getItem("level")) == "low") {
    level = "low";
    curLevel.innerHTML = level;
    setEasy();
  } else if (JSON.parse(localStorage.getItem("level")) == "med") {
    level = "med";
    curLevel.innerHTML = level;
    setNormal();
  } else {
    level = JSON.parse(localStorage.getItem("level"));
    curLevel.innerHTML = level;
    setHard();
  }
}

// difficulty
function setEasy() {
  wordInput.type = "text";
  words = wordLists[0];
  level = "low";
  saveLevel(level);
}

function setNormal() {
  level = "med";
  wordInput.type = "password";
  words = wordLists[0];
  saveLevel(level);
}

function setHard() {
  level = "high";
  wordInput.type = "password";
  words = wordLists[1];
  saveLevel(level);
}
