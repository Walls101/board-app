export interface Game {
    active: boolean;
    amazon_rank: number;
    artists: string[];
    average_learning_complexity: number;
    average_strategy_complexity: number;
    average_user_rating: number;
    categories: { id: string }[];
    comment_count: number;
    commentary: string;
    description: string;
    description_preview: string;
    designers: { id: string }[];
    developers: string[];
    discount: string;
    edit_url: string;
    faq: string;
    handle: string;
    historical_low_prices: { __type: string; iso: Date }[]
    id: string;
    image_url: string;
    images: { large: string, medium: string, original: string, small: string, thumb: string }
    is_historical_low: false
    links: number;
    listing_clicks: number;
    lists: number;
    matches_specs: any;
    max_players: number;
    max_playtime: number;
    mechanics: { id: string }[];
    mentions: number;
    min_age: number;
    min_players: number;
    min_playtime: number;
    msrp: number;
    msrp_text: string;
    msrps: { country: string; price: number }[];
    name: string;
    names: any[];
    num_distributors: number;
    num_user_complexity_votes: number;
    num_user_ratings: number;
    official_url: string;
    plays: number;
    price: string;
    price_au: string;
    price_ca: string;
    price_text: string;
    price_uk: string;
    primary_designer: { id: string; name: string; url: string; };
    primary_publisher: { id: string, name: string, url: string; };
    publisher: string;
    publishers: { id: string; }[];
    rank: number;
    related_to: any[];
    rules_url: string;
    size_depth: number;
    size_height: number;
    size_units: string;
    sku: string;
    specs: any[];
    tags: string[];
    thumb_url: string;
    trending_rank: number;
    type: string;
    upc: string;
    url: string;
    visits: number;
    weight_amount: number;
    weight_units: string;
    year_published: number;
  } 

  //Continue at Import HttpClient