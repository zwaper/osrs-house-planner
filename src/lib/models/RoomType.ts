import { Door } from './Door';
import type { Hotspot } from './Hotspot';
import { base } from '$app/paths';

function withBase(path: string): string {
	return path.startsWith('/') ? `${base}${path}` : path;
  }


export interface RoomType {
	/** The key used to identify this room type */
	key: string;
	/** The name of the room type */
	name: string;
	/** The cost in gold to build a room of this type */
	cost: number;
	/** The minimum required construction level to build a room of this type */
	minLvl: number;
	/** The locations at which there are door hotspots to connect the room to its neighbours */
	doors: Door[];
	/** The color used for the background of rooms of this type */
	bg: string;
	/** The furniture hotspots that are available for building in this type of room */
	hotspots: Hotspot[];
	/** The foreground color used for the name of the room, defaults to 'white' */
	color?: string;
	/** True if there are stairs present in the room, false (default) otherwise */
	stairs?: boolean;
	/** True if the room is open and does not support building above it, false (default) otherwise */
	open?: boolean;
	/** If present, acts as a whitelist limiting on which floors the room can be built */
	floors?: number[];
}

/**
			{
				name: 'Placeholder',
				options: [
				  { id: 'placeholder', name: 'Placeholder', img: '/icons/placeholder.png' },
				  { id: ' ', name: ' ', img: '/icons/ ' },
				]
			},
 */
			function processStringOptions(options: string[]): { id: string; name: string; img: string }[] {
				return options.map(opt => ({
				  id: opt,
				  name: opt.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
				  img: withBase(`/icons/placeholder.png`) // Use a default icon for string options
				}));
			  }


export const ROOM_TYPES: RoomType[] = [
	{ /** Garden */
		key: 'garden',
		name: 'Garden',
		cost: 1000,
		minLvl: 1,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#034a03',
		hotspots: [
			{
				name: 'Centrepiece',
				options: [
				  { id: 'exit_portal', name: 'Exit Portal', img: withBase('/icons/garden/Exit_portal_icon.png') },
				  { id: 'decorative_rock', name: 'Decorative Rock', img: withBase('/icons/garden/Decorative_rock_icon.png') },
				  { id: 'pond', name: 'Pond', img: withBase('/icons/garden/Pond_icon.png') },
				  { id: 'imp_statue', name: 'Imp Statue', img: withBase('/icons/garden/Imp_statue_icon.png') },
				  { id: 'dungeon_entrance', name: 'Dungeon Entrance', img: withBase('/icons/garden/Dungeon_entrance_icon.png') }
				]
			},
			{
				name: 'Tree',
				options: [
					{ id: 'tree', name: 'Tree', img: '/icons/garden/Tree_Construction_icon.png' },
					{ id: 'nice_tree', name: 'Nice Tree', img: '/icons/garden/Nice_tree_icon.png' },
					{ id: 'oak_tree', name: 'Oak Tree', img: '/icons/garden/Oak_tree_icon.png' },
					{ id: 'willow_tree', name: 'Willow_tree', img: '/icons/garden/Willow_tree_Construction_icon.png' },
					{ id: 'maple_tree', name: 'Maple Tree', img: '/icons/garden/Maple_tree_Construction_icon.png' },
					{ id: 'yew_tree', name: 'Yew Tree', img: '/icons/garden/Yew_tree_Construction_icon.png' },
					{ id: 'magic_tree', name: 'Magic Tree', img: '/icons/garden/Magic_tree_Construction_icon.png' },
				]
			},
			{
				name: 'Big Tree',
				options: [
					{ id: 'tree', name: 'Tree', img: '/icons/garden/Tree_Construction_icon.png' },
					{ id: 'nice_tree', name: 'Nice Tree', img: '/icons/garden/Nice_tree_icon.png' },
					{ id: 'oak_tree', name: 'Oak Tree', img: '/icons/garden/Oak_tree_icon.png' },
					{ id: 'willow_tree', name: 'Willow_tree', img: '/icons/garden/Willow_tree_Construction_icon.png' },
					{ id: 'maple_tree', name: 'Maple Tree', img: '/icons/garden/Maple_tree_Construction_icon.png' },
					{ id: 'yew_tree', name: 'Yew Tree', img: '/icons/garden/Yew_tree_Construction_icon.png' },
					{ id: 'magic_tree', name: 'Magic Tree', img: '/icons/garden/Magic_tree_Construction_icon.png' },
				]
			},
			{
				name: 'Small Plant 1',
				options: [
					{ id: 'plant', name: 'Plant', img: '/icons/garden/Plant_icon.png' },
					{ id: 'small_fern', name: 'Small Fern', img: '/icons/garden/Small_fern_icon.png' },
					{ id: 'fern', name: 'Fern', img: '/icons/garden/Fern_small_plant_icon.png' },
				]
			},
			{
				name: 'Small Plant 2',
				options: [
					{ id: 'dock_leaf', name: 'Dock Leaf', img: '/icons/garden/Dock_leaf_icon.png' },
					{ id: 'thistle', name: 'Thistle', img: '/icons/garden/Thistle_icon.png' },
					{ id: 'reeds', name: 'Reeds', img: '/icons/garden/Reeds_icon.png' },
				]
			},
			{
				name: 'Big Plant 1',
				options: [
					{ id: 'pumpkin', name: 'Pumpkin', img: '/icons/garden/Pumpkin_icon.png' },
					{ id: 'beehive_1', name: 'Beehive (Style 1)', img: '/icons/garden/Beehive_style_1_icon.png' },
					{ id: 'beehive_2', name: 'Beehive (Style 2)', img: '/icons/garden/Beehive_style_2_icon.png' },
					{ id: 'big_fern', name: 'Fern', img: '/icons/garden/Fern_big_plant_icon.png' },
					{ id: 'bush', name: 'Big Bush', img: '/icons/garden/Bush_icon.png' },
					{ id: 'tall_plant', name: 'Tall Plant', img: '/icons/garden/Tall_plant_icon.png' },
				]
			},
			{
				name: 'Big Plant 2',
				options: [
					{ id: 'pumpkin', name: 'Pumpkin', img: '/icons/garden/Pumpkin_icon.png' },
					{ id: 'beehive_1', name: 'Beehive (Style 1)', img: '/icons/garden/Beehive_style_1_icon.png' },
					{ id: 'beehive_2', name: 'Beehive (Style 2)', img: '/icons/garden/Beehive_style_2_icon.png' },
					{ id: 'short_plant', name: 'Short Plant', img: '/icons/garden/Short_plant_icon.png' },
					{ id: 'large_leaf_bush', name: 'Large Leaf Bush', img: '/icons/garden/Large_leaf_bush_icon.png' },
					{ id: 'huge_plant', name: 'Huge Plant', img: '/icons/garden/Huge_plant_icon.png' },
				]
			},
			{
				name: 'Tip jar',
				options: [
					{ id: 'tip_jar', name: 'Tip Jar', img: '/icons/garden/Tip_jar_icon.png' }
				]
			}
		],
		open: true,
		floors: [0]
	},
	{ /** Parlour */
		key: 'parlour',
		name: 'Parlour',
		cost: 1000,
		minLvl: 1,
		doors: [Door.East, Door.South, Door.West],
		bg: '#424242',
		hotspots: [
			{
				name: 'Bookcase',
				options: [
					{ id: 'wooden_bookcase', name: 'Wooden Bookcase', img: '/icons/parlour/Wooden_bookcase_icon.png' },
					{ id: 'oak_bookcase', name: 'Oak Bookcase', img: '/icons/parlour/Oak_bookcase_icon.png' },
					{ id: 'mahogany_bookcase', name: 'Mahogany Bookcase', img: '/icons/parlour/Mahogany_bookcase_icon.png' },
				]
			},
			{
				name: 'Chairs',
				options: [
					{ id: 'crude_wooden_chair', name: 'Crude Wooden Chair', img: '/icons/parlour/Crude_wooden_chair_icon.png' },
					{ id: 'wooden_chair', name: 'Wooden Chair', img: '/icons/parlour/Wooden_chair_icon.png' },
					{ id: 'rocking_chair', name: 'Rocking Char', img: '/icons/parlour/Rocking_chair_icon.png' },
					{ id: 'oak_chair', name: 'Oak Chair', img: '/icons/parlour/Oak_chair_icon.png' },
					{ id: 'oak_armchair', name: 'Oak Armchair', img: '/icons/parlour/Oak_armchair_icon.png' },
					{ id: 'teak_armchair', name: 'Teak Armchair', img: '/icons/parlour/Teak_armchair_icon.png' },
					{ id: 'mahogany_armchair', name: 'Mahogany Armchair', img: '/icons/parlour/Mahogany_armchair_icon.png' },
				]
			},
			{
				name: 'Curtains',
				options: [
					{ id: 'torn_curtains', name: 'Torn Curtains', img: '/icons/parlour/Torn_curtains_icon.png' },
					{ id: 'curtains', name: 'Curtains', img: '/icons/parlour/Curtains_icon.png' },
					{ id: 'opulent_curtains', name: 'Opulent Curtains', img: '/icons/parlour/Opulent_curtains_icon.png' },
					{ id: 'raging_echoes_curtains', name: 'Raging Echoes Curtains', img: '/icons/parlour/Raging_echoes_curtains_icon.png' },
				]
			},
			{
				name: 'Fireplace',
				options: [
					{ id: 'clay_fireplace', name: 'Clay Fireplace', img: '/icons/parlour/Clay_fireplace_icon.png' },
					{ id: 'stone_fireplace', name: 'Stone Fireplace', img: '/icons/parlour/Stone_fireplace_icon.png' },
					{ id: 'marble_fireplace', name: 'Marble Fireplace', img: '/icons/parlour/Marble_fireplace_icon.png' },
				]
			},
			{
				name: 'Rug',
				options: [
					{ id: 'brown_rug', name: 'Brown Rug', img: '/icons/parlour/Brown_rug_icon.png' },
					{ id: 'rug', name: 'Rug', img: '/icons/parlour/Rug_icon.png' },
					{ id: 'deadman_rug', name: 'Deadman Rug', img: '/icons/parlour/Deadman_rug_icon.png' },
					{ id: 'opulent_rug', name: 'Opulent Rug', img: '/icons/parlour/Opulent_rug_icon.png' },
					{ id: 'raging_echoes_rug', name: 'Raging Echoes Rug', img: '/icons/parlour/Raging_echoes_rug_icon.png' },
				]
			},
		]
	},
	{ /** Kitchen */
		key: 'kitchen',
		name: 'Kitchen',
		cost: 5000,
		minLvl: 5,
		doors: [Door.East, Door.South],
		bg: '#542808',
		hotspots: [
			{
				name: 'Barrel',
				options: [
				  { id: 'beer_barrel', name: 'Beer Barrel', img: '/icons/kitchen/Beer_barrel_icon.png' },
				  { id: 'cider_barrel', name: 'Cider Barrel', img: '/icons/kitchen/Cider_barrel_icon.png' },
				  { id: 'asgarnian_ale', name: 'Asgarnian Ale', img: '/icons/kitchen/Asgarnian_ale_barrel_icon.png' },
				  { id: 'greenmans_ale', name: 'Greenman\'s Ale', img: '/icons/kitchen/Greenmans_ale_barrel_icon.png' },
				  { id: 'dragon_bitter', name: 'Dragon Bitter', img: '/icons/kitchen/Dragon_bitter_barrel_icon.png' },
				  { id: 'chefs_delight', name: 'Chef\'s Delight', img: '/icons/kitchen/Chefs_delight_barrel_icon.png' },
				]
			},
			{
				name: 'Cat Basket',
				options: [
				  { id: 'cat_blanket', name: 'Cat Blanket', img: '/icons/kitchen/Cat_blanket_icon.png' },
				  { id: 'cat_basket', name: 'Cat Basket', img: '/icons/kitchen/Cat_basket_icon.png' },
				  { id: 'cushioned_basket', name: 'Cushioned Basket', img: '/icons/kitchen/Cushioned_basket_icon.png' },
				]
			},
			{
				name: 'Larder',
				options: [
				  { id: 'wooden_larder', name: 'Wooden Larder', img: '/icons/kitchen/Wooden_larder_icon.png' },
				  { id: 'oak_larder', name: 'Oak Larder', img: '/icons/kitchen/Oak_larder_icon.png' },
				  { id: 'teak_larder', name: 'Teak Larder', img: '/icons/kitchen/Teak_larder_icon.png' },
				]
			},
			{
				name: 'Shelf',
				options: [
				  { id: 'wooden_shelves_1', name: 'Wooden Shelves 1', img: '/icons/kitchen/Wooden_shelves_1_icon.png' },
				  { id: 'wooden_shelves_2', name: 'Wooden Shelves 2', img: '/icons/kitchen/Wooden_shelves_2_icon.png' },
				  { id: 'wooden_shelves_3', name: 'Wooden Shelves 3', img: '/icons/kitchen/Wooden_shelves_3_icon.png' },
				  { id: 'oak_shelves_1', name: 'Oak Shelves 1', img: '/icons/kitchen/Oak_shelves_1_icon.png' },
				  { id: 'oak_shelves_2', name: 'Oak Shelves 2', img: '/icons/kitchen/Oak_shelves_2_icon.png' },
				  { id: 'teak_shelves_1', name: 'Teak Shelves 1', img: '/icons/kitchen/Teak_shelves_1_icon.png' },
				  { id: 'teak_shelves_2', name: 'Teak Shelves 2', img: '/icons/kitchen/Teak_shelves_2_icon.png' },
				]
			},
			{
				name: 'Sink',
				options: [
				  { id: 'pump_and_drain', name: 'Pump and Drain', img: '/icons/kitchen/Pump_and_drain_icon.png' },
				  { id: 'pump_and_tub', name: 'Pump and Tub', img: '/icons/kitchen/Pump_and_tub_icon.png' },
				  { id: 'sink', name: 'Sink', img: '/icons/kitchen/Sink_icon.png' },
				  { id: 'gold_sink', name: 'Gold Sink', img: '/icons/kitchen/Gold_sink_icon.png' },
				]
			},
			{
				name: 'Spice Rack',
				options: [
				  { id: 'spice_rack', name: 'Spice Rack', img: '/icons/kitchen/Spice_rack_icon.png' },
				]
			},
			{
				name: 'Stove',
				options: [
				  { id: 'firepit', name: 'Firepit', img: '/icons/kitchen/Firepit_icon.png' },
				  { id: 'firepit_with_hook', name: 'Firepit With Hook', img: '/icons/kitchen/Firepit_with_hook_icon.png' },
				  { id: 'firepit_with_pot', name: 'Firepit With Pot', img: '/icons/kitchen/Firepit_with_pot_icon.png' },
				  { id: 'small_oven', name: 'Small Oven', img: '/icons/kitchen/Small_oven_icon.png' },
				  { id: 'large_oven', name: 'Large Oven', img: '/icons/kitchen/Large_oven_icon.png' },
				  { id: 'steel_range', name: 'Steel Range', img: '/icons/kitchen/Steel_range_icon.png' },
				  { id: 'fancy_range', name: 'Fancy Range', img: '/icons/kitchen/Fancy_range_icon.png' },
				]
			},
			{
				name: 'Table',
				options: [
				  { id: 'kitchen_table', name: 'Kitchen Table', img: '/icons/kitchen/Kitchen_table_icon.png' },
				  { id: 'oak_table', name: 'Oak Table', img: '/icons/kitchen/Oak_kitchen_table_icon.png' },
				  { id: 'teak_table', name: 'Teak Table', img: '/icons/kitchen/Teak_kitchen_table_icon.png' },
				]
			},
		]
	},
	{
		key: 'dining_room',
		name: 'Dining Room',
		cost: 5000,
		minLvl: 10,
		doors: [Door.East, Door.South, Door.West],
		bg: '#424242',
		hotspots: []
	},
	{
		key: 'workshop',
		name: 'Workshop',
		cost: 10000,
		minLvl: 15,
		doors: [Door.North, Door.South],
		bg: '#542808',
		hotspots: []
	},
	{ /**Bedroom */
		key: 'bedroom',
		name: 'Bedroom',
		cost: 10000,
		minLvl: 20,
		doors: [Door.East, Door.South],
		bg: '#424242',
		hotspots: [
			{
				name: 'Bed',
				options: [
				  { id: 'wooden_bed', name: 'Wooden Bed', img: '/icons/bedroom/Wooden_bed_icon.png' },
				  { id: 'oak_bed', name: 'Oak Bed', img: '/icons/bedroom/Oak_bed_icon.png' },
				  { id: 'large_oak_bed', name: 'Large Oak Bed', img: '/icons/bedroom/Large_oak_bed_icon.png' },
				  { id: 'teak_bed', name: 'Teak Bed', img: '/icons/bedroom/Teak_bed_icon.png' },
				  { id: 'large_teak_bed', name: 'Large Teak Bed', img: '/icons/bedroom/Large_teak_bed_icon.png' },
				  { id: '4_poster', name: '4-Poster', img: '/icons/bedroom/4-poster_icon.png' },
				  { id: 'gilded_4_poster', name: 'Gilded 4-Poster', img: '/icons/bedroom/Gilded_4-poster_icon.png' },
				]
			},
			{
				name: 'Corner',
				options: [
					{ id: 'oak_clock', name: 'Oak Clock', img: '/icons/bedroom/Oak_clock_icon.png' },
					{ id: 'teak_clock', name: 'Teak Clock', img: '/icons/bedroom/Teak_clock_icon.png' },
					{ id: 'servants_money_bag', name: 'Servant\'s Money Bag', img: '/icons/bedroom/Servants_money_bag_icon.png' },
					{ id: 'gilded_clock', name: 'Gilded Clock', img: '/icons/bedroom/Gilded_clock_icon.png' },
				  ]
			},
			{
				name: 'Curtains',
				options: [
					{ id: 'torn_curtains', name: 'Torn Curtains', img: '/icons/parlour/Torn_curtains_icon.png' },
					{ id: 'curtains', name: 'Curtains', img: '/icons/parlour/Curtains_icon.png' },
					{ id: 'opulent_curtains', name: 'Opulent Curtains', img: '/icons/parlour/Opulent_curtains_icon.png' },
					{ id: 'raging_echoes_curtains', name: 'Raging Echoes Curtains', img: '/icons/parlour/Raging_echoes_curtains_icon.png' },
				]
			},
			{
				name: 'Dresser',
				options: [
					{ id: 'shaving_stand', name: 'Shaving Stand', img: '/icons/bedroom/Shaving_stand_icon.png' },
					{ id: 'oak_shaving_stand', name: 'Oak Shaving Stand', img: '/icons/bedroom/Oak_shaving_stand_icon.png' },
					{ id: 'oak_dresser', name: 'Oak Dresser', img: '/icons/bedroom/Oak_dresser_icon.png' },
					{ id: 'teak_dresser', name: 'Teak Dresser', img: '/icons/bedroom/Teak_dresser_icon.png' },
					{ id: 'fancy_teak_dresser', name: 'Fancy Teak Dresser', img: '/icons/bedroom/Fancy_teak_dresser_icon.png' },
					{ id: 'mahogany_dresser', name: 'Mahogany Dresser', img: '/icons/bedroom/Mahogany_dresser_icon.png' },
					{ id: 'Gilded_dresser', name: 'Gilded Dresser', img: '/icons/bedroom/Gilded_dresser_icon.png' },
				  ]
			},
			{
				name: 'Fireplace',
				options: [
					{ id: 'clay_fireplace', name: 'Clay Fireplace', img: '/icons/parlour/Clay_fireplace_icon.png' },
					{ id: 'stone_fireplace', name: 'Stone Fireplace', img: '/icons/parlour/Stone_fireplace_icon.png' },
					{ id: 'marble_fireplace', name: 'Marble Fireplace', img: '/icons/parlour/Marble_fireplace_icon.png' },
				]
			},
			{
				name: 'Rug',
				options: [
					{ id: 'brown_rug', name: 'Brown Rug', img: '/icons/parlour/Brown_rug_icon.png' },
					{ id: 'rug', name: 'Rug', img: '/icons/parlour/Rug_icon.png' },
					{ id: 'deadman_rug', name: 'Deadman Rug', img: '/icons/parlour/Deadman_rug_icon.png' },
					{ id: 'opulent_rug', name: 'Opulent Rug', img: '/icons/parlour/Opulent_rug_icon.png' },
					{ id: 'raging_echoes_rug', name: 'Raging Echoes Rug', img: '/icons/parlour/Raging_echoes_rug_icon.png' },
				]
			},
			{
				name: 'Wardrobe',
				options: [
					{ id: 'shoe_box', name: 'Shoe Box', img: '/icons/bedroom/Shoe_box_icon.png' },
					{ id: 'oak_drawer', name: 'Oak Drawers', img: '/icons/bedroom/Oak_drawers_icon.png' },
					{ id: 'oak_wardrobe', name: 'Oak Wardrobe', img: '/icons/bedroom/Oak_wardrobe_icon.png' },
					{ id: 'teak_drawer', name: 'Teak Drawers', img: '/icons/bedroom/Teak_drawers_icon.png' },
					{ id: 'teak_wardrobe', name: 'Teak Wardrobe', img: '/icons/bedroom/Teak_wardrobe_icon.png' },
					{ id: 'mahogany_wardrobe', name: 'Mahogany Wardrobe', img: '/icons/bedroom/Mahogany_wardrobe_icon.png' },
					{ id: 'gilded_wardrobe', name: 'Gilded Wardrobe', img: '/icons/bedroom/Gilded_wardrobe_icon.png' },
				  ]
			},
		]
	},
	{
		key: 'skill_hall',
		name: 'Skill Hall',
		cost: 15000,
		minLvl: 25,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#3f0569',
		hotspots: [],
		stairs: true
	},
	{
		key: 'league_hall',
		name: 'Leauge Hall',
		cost: 15000,
		minLvl: 27,
		doors: [ Door.East, Door.West],
		bg: '#3f0569',
		hotspots: [],
		stairs: true
	},
	{
		key: 'games_room',
		name: 'Games Room',
		cost: 25000,
		minLvl: 30,
		doors: [Door.East, Door.South, Door.West],
		bg: '#731e4c',
		hotspots: []
	},
	{
		key: 'combat_room',
		name: 'Combat Room',
		cost: 25000,
		minLvl: 30,
		doors: [Door.East, Door.South, Door.West],
		bg: '#731e4c',
		hotspots: []
	},
	{
		key: 'quest_hall',
		name: 'Quest Hall',
		cost: 25000,
		minLvl: 32,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#3f0569',
		hotspots: [],
		stairs: true
	},
	{
		key: 'menagerie',
		name: 'Menagerie',
		cost: 30000,
		minLvl: 37,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#034a03',
		hotspots: [],
		open: true,
		floors: [0]
	},
	{
		key: 'study',
		name: 'Study',
		cost: 50000,
		minLvl: 40,
		doors: [Door.East, Door.South, Door.West],
		bg: '#542808',
		hotspots: []
	},
	{
		key: 'costume_room',
		name: 'Costume Room',
		cost: 50000,
		minLvl: 42,
		doors: [Door.South],
		bg: '#731e4c',
		hotspots: []
	},
	{
		key: 'chapel',
		name: 'Chapel',
		cost: 50000,
		minLvl: 45,
		doors: [Door.East, Door.South],
		bg: '#542808',
		hotspots: []
	},
	{
		key: 'portal_chamber',
		name: 'Portal Chamber',
		cost: 100000,
		minLvl: 50,
		doors: [Door.South],
		bg: '#542808',
		hotspots: []
	},
	{
		key: 'formal_garden',
		name: 'Formal Garden',
		cost: 75000,
		minLvl: 55,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#034a03',
		hotspots: [],
		open: true,
		floors: [0]
	},
	{
		key: 'throne_room',
		name: 'Throne Room',
		cost: 150000,
		minLvl: 60,
		doors: [Door.South],
		bg: '#040459',
		hotspots: [],
		floors: [0]
	},
	{
		key: 'superior_garden',
		name: 'Superior Garden',
		cost: 75000,
		minLvl: 65,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#034a03',
		hotspots: [
			{
				name: 'Fence space',
				options: [
				  { id: 'redwood_fence', name: 'Redwood fence', img: '/icons/Redwood_fence_icon.png' },
				  { id: 'marble_wall', name: 'Marble wall', img: '/icons/marble_wall.png' },
				  { id: 'obsidian_fence', name: 'Obsidian fence', img: '/icons/obsidian_fence.png' }
				]
			},
			{
				name: 'Pool space',
				options: ['restoration_pool', 'revitalisation_pool', 'rejuvenation_pool', 'fancy_rejuvenation_pool', 'ornate_rejuvenation_pool']
			},
			{
				name: 'Teleport Space',
				options: ['spirit_tree', 'obelisk', 'fairy_ring', 'spirit_tree_fairy_ring']
			},
			{
				name: 'Theme',
				options: ['zen_theme', 'otherworldly_theme', 'volcanic_theme']
			},
			{
				name: 'Topiary space',
				options: ['topiary_bush']
			},
			{
				name: 'Seating space',
				options: ['teak_garden_bench', 'gnome_bench', 'marble_decorative_bench', 'obsidian_decorative_bench']
			}
		],
		floors: [0]
	},
	{
		key: 'oubliette',
		name: 'Oubliette',
		cost: 150000,
		minLvl: 65,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#800303',
		hotspots: [],
		floors: [-1]
	},
	{
		key: 'dungeon_corridor',
		name: 'Dungeon Corridor',
		cost: 7500,
		minLvl: 70,
		doors: [Door.North, Door.South],
		bg: '#800303',
		hotspots: [],
		floors: [-1]
	},
	{
		key: 'dungeon_junction',
		name: 'Dungeon Junction',
		cost: 7500,
		minLvl: 70,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#800303',
		hotspots: [],
		floors: [-1]
	},
	{
		key: 'dungeon_stairs',
		name: 'Dungeon Stairs',
		cost: 7500,
		minLvl: 70,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#800303',
		hotspots: [],
		stairs: true,
		floors: [-1]
	},
	{
		key: 'dungeon_pit',
		name: 'Dungeon Pit',
		cost: 10000,
		minLvl: 70,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#800303',
		hotspots: [],
		floors: [-1]
	},
	{
		key: 'treasure_room',
		name: 'Treasure Room',
		cost: 250000,
		minLvl: 75,
		doors: [Door.South],
		bg: '#800303',
		hotspots: [],
		floors: [-1]
	},
	{
		key: 'portal_nexus',
		name: 'Portal nexus',
		cost: 200000,
		minLvl: 72,
		doors: [Door.North, Door.East, Door.South, Door.West],
		bg: '#542808',
		hotspots: [],
		floors: [0]
	},
	{
		key: 'achievement_gallery',
		name: 'Achievement gallery',
		cost: 200000,
		minLvl: 80,
		doors: [Door.North, Door.South],
		bg: '#3f0569',
		hotspots: [
			{
				name: 'Adventure log',
				options: ['mahogany_adventure_log', 'gilded_adventure_log', 'marble_adventure_log']
			},
			{
				name: 'Altar',
				options: ['ancient_altar', 'lunar_altar', 'dark_altar', 'occult_altar']
			},
			{
				name: 'Boss lair',
				options: ['boss_lair_display']
			},
			{
				name: 'Display',
				options: ['mounted_emblem', 'mounted_coins', 'cape_hanger']
			},
			{
				name: 'Jewellery box',
				options: ['basic_jewellery_box', 'fancy_jewellery_box', 'ornate_jewellery_box']
			},
			{
				name: 'Quest list',
				options: ['quest_list']
			}
		],
		floors: [0]
	},
];

const map: Map<string, RoomType> = new Map();
for (const type of ROOM_TYPES) {
	if (map.has(type.key)) {
		throw new Error(`Duplicate room type ${type.key}`);
	}
	map.set(type.key, type);
}

export const getRoomTypeByKey = (key: string): RoomType => {
	const type = map.get(key);
	if (!type) {
		throw new Error(`Unknown room type ${key}`);
	}
	return type;
};
