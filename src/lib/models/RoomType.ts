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
				  { id: 'placeholder', name: 'Placeholder', img: withBase('/icons/placeholder.png') },
				  { id: ' ', name: ' ', img: withBase('/icons/ ') },
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
					{ id: 'tree', name: 'Tree', img: withBase('/icons/garden/Tree_Construction_icon.png') },
					{ id: 'nice_tree', name: 'Nice Tree', img: withBase('/icons/garden/Nice_tree_icon.png') },
					{ id: 'oak_tree', name: 'Oak Tree', img: withBase('/icons/garden/Oak_tree_icon.png') },
					{ id: 'willow_tree', name: 'Willow_tree', img: withBase('/icons/garden/Willow_tree_Construction_icon.png') },
					{ id: 'maple_tree', name: 'Maple Tree', img: withBase('/icons/garden/Maple_tree_Construction_icon.png') },
					{ id: 'yew_tree', name: 'Yew Tree', img: withBase('/icons/garden/Yew_tree_Construction_icon.png') },
					{ id: 'magic_tree', name: 'Magic Tree', img: withBase('/icons/garden/Magic_tree_Construction_icon.png') },
				]
			},
			{
				name: 'Big Tree',
				options: [
					{ id: 'tree', name: 'Tree', img: withBase('/icons/garden/Tree_Construction_icon.png') },
					{ id: 'nice_tree', name: 'Nice Tree', img: withBase('/icons/garden/Nice_tree_icon.png') },
					{ id: 'oak_tree', name: 'Oak Tree', img: withBase('/icons/garden/Oak_tree_icon.png') },
					{ id: 'willow_tree', name: 'Willow_tree', img: withBase('/icons/garden/Willow_tree_Construction_icon.png') },
					{ id: 'maple_tree', name: 'Maple Tree', img: withBase('/icons/garden/Maple_tree_Construction_icon.png') },
					{ id: 'yew_tree', name: 'Yew Tree', img: withBase('/icons/garden/Yew_tree_Construction_icon.png') },
					{ id: 'magic_tree', name: 'Magic Tree', img: withBase('/icons/garden/Magic_tree_Construction_icon.png') },
				]
			},
			{
				name: 'Small Plant 1',
				options: [
					{ id: 'plant', name: 'Plant', img: withBase('/icons/garden/Plant_icon.png') },
					{ id: 'small_fern', name: 'Small Fern', img: withBase('/icons/garden/Small_fern_icon.png') },
					{ id: 'fern', name: 'Fern', img: withBase('/icons/garden/Fern_small_plant_icon.png') },
				]
			},
			{
				name: 'Small Plant 2',
				options: [
					{ id: 'dock_leaf', name: 'Dock Leaf', img: withBase('/icons/garden/Dock_leaf_icon.png') },
					{ id: 'thistle', name: 'Thistle', img: withBase('/icons/garden/Thistle_icon.png') },
					{ id: 'reeds', name: 'Reeds', img: withBase('/icons/garden/Reeds_icon.png') },
				]
			},
			{
				name: 'Big Plant 1',
				options: [
					{ id: 'pumpkin', name: 'Pumpkin', img: withBase('/icons/garden/Pumpkin_icon.png') },
					{ id: 'beehive_1', name: 'Beehive (Style 1)', img: withBase('/icons/garden/Beehive_style_1_icon.png') },
					{ id: 'beehive_2', name: 'Beehive (Style 2)', img: withBase('/icons/garden/Beehive_style_2_icon.png') },
					{ id: 'big_fern', name: 'Fern', img: withBase('/icons/garden/Fern_big_plant_icon.png') },
					{ id: 'bush', name: 'Big Bush', img: withBase('/icons/garden/Bush_icon.png') },
					{ id: 'tall_plant', name: 'Tall Plant', img: withBase('/icons/garden/Tall_plant_icon.png') },
				]
			},
			{
				name: 'Big Plant 2',
				options: [
					{ id: 'pumpkin', name: 'Pumpkin', img: withBase('/icons/garden/Pumpkin_icon.png') },
					{ id: 'beehive_1', name: 'Beehive (Style 1)', img: withBase('/icons/garden/Beehive_style_1_icon.png') },
					{ id: 'beehive_2', name: 'Beehive (Style 2)', img: withBase('/icons/garden/Beehive_style_2_icon.png') },
					{ id: 'short_plant', name: 'Short Plant', img: withBase('/icons/garden/Short_plant_icon.png') },
					{ id: 'large_leaf_bush', name: 'Large Leaf Bush', img: withBase('/icons/garden/Large_leaf_bush_icon.png') },
					{ id: 'huge_plant', name: 'Huge Plant', img: withBase('/icons/garden/Huge_plant_icon.png') },
				]
			},
			{
				name: 'Tip jar',
				options: [
					{ id: 'tip_jar', name: 'Tip Jar', img: withBase('/icons/garden/Tip_jar_icon.png') }
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
					{ id: 'wooden_bookcase', name: 'Wooden Bookcase', img: withBase('/icons/parlour/Wooden_bookcase_icon.png') },
					{ id: 'oak_bookcase', name: 'Oak Bookcase', img: withBase('/icons/parlour/Oak_bookcase_icon.png') },
					{ id: 'mahogany_bookcase', name: 'Mahogany Bookcase', img: withBase('/icons/parlour/Mahogany_bookcase_icon.png') },
				]
			},
			{
				name: 'Chairs',
				options: [
					{ id: 'crude_wooden_chair', name: 'Crude Wooden Chair', img: withBase('/icons/parlour/Crude_wooden_chair_icon.png') },
					{ id: 'wooden_chair', name: 'Wooden Chair', img: withBase('/icons/parlour/Wooden_chair_icon.png') },
					{ id: 'rocking_chair', name: 'Rocking Char', img: withBase('/icons/parlour/Rocking_chair_icon.png') },
					{ id: 'oak_chair', name: 'Oak Chair', img: withBase('/icons/parlour/Oak_chair_icon.png') },
					{ id: 'oak_armchair', name: 'Oak Armchair', img: withBase('/icons/parlour/Oak_armchair_icon.png') },
					{ id: 'teak_armchair', name: 'Teak Armchair', img: withBase('/icons/parlour/Teak_armchair_icon.png') },
					{ id: 'mahogany_armchair', name: 'Mahogany Armchair', img: withBase('/icons/parlour/Mahogany_armchair_icon.png') },
				]
			},
			{
				name: 'Curtains',
				options: [
					{ id: 'torn_curtains', name: 'Torn Curtains', img: withBase('/icons/parlour/Torn_curtains_icon.png') },
					{ id: 'curtains', name: 'Curtains', img: withBase('/icons/parlour/Curtains_icon.png') },
					{ id: 'opulent_curtains', name: 'Opulent Curtains', img: withBase('/icons/parlour/Opulent_curtains_icon.png') },
					{ id: 'raging_echoes_curtains', name: 'Raging Echoes Curtains', img: withBase('/icons/parlour/Raging_echoes_curtains_icon.png') },
				]
			},
			{
				name: 'Fireplace',
				options: [
					{ id: 'clay_fireplace', name: 'Clay Fireplace', img: withBase('/icons/parlour/Clay_fireplace_icon.png') },
					{ id: 'stone_fireplace', name: 'Stone Fireplace', img: withBase('/icons/parlour/Stone_fireplace_icon.png') },
					{ id: 'marble_fireplace', name: 'Marble Fireplace', img: withBase('/icons/parlour/Marble_fireplace_icon.png') },
				]
			},
			{
				name: 'Rug',
				options: [
					{ id: 'brown_rug', name: 'Brown Rug', img: withBase('/icons/parlour/Brown_rug_icon.png') },
					{ id: 'rug', name: 'Rug', img: withBase('/icons/parlour/Rug_icon.png') },
					{ id: 'deadman_rug', name: 'Deadman Rug', img: withBase('/icons/parlour/Deadman_rug_icon.png') },
					{ id: 'opulent_rug', name: 'Opulent Rug', img: withBase('/icons/parlour/Opulent_rug_icon.png') },
					{ id: 'raging_echoes_rug', name: 'Raging Echoes Rug', img: withBase('/icons/parlour/Raging_echoes_rug_icon.png') },
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
				  { id: 'beer_barrel', name: 'Beer Barrel', img: withBase('/icons/kitchen/Beer_barrel_icon.png') },
				  { id: 'cider_barrel', name: 'Cider Barrel', img: withBase('/icons/kitchen/Cider_barrel_icon.png') },
				  { id: 'asgarnian_ale', name: 'Asgarnian Ale', img: withBase('/icons/kitchen/Asgarnian_ale_barrel_icon.png') },
				  { id: 'greenmans_ale', name: 'Greenman\'s Ale', img: withBase('/icons/kitchen/Greenmans_ale_barrel_icon.png') },
				  { id: 'dragon_bitter', name: 'Dragon Bitter', img: withBase('/icons/kitchen/Dragon_bitter_barrel_icon.png') },
				  { id: 'chefs_delight', name: 'Chef\'s Delight', img: withBase('/icons/kitchen/Chefs_delight_barrel_icon.png') },
				]
			},
			{
				name: 'Cat Basket',
				options: [
				  { id: 'cat_blanket', name: 'Cat Blanket', img: withBase('/icons/kitchen/Cat_blanket_icon.png') },
				  { id: 'cat_basket', name: 'Cat Basket', img: withBase('/icons/kitchen/Cat_basket_icon.png') },
				  { id: 'cushioned_basket', name: 'Cushioned Basket', img: withBase('/icons/kitchen/Cushioned_basket_icon.png') },
				]
			},
			{
				name: 'Larder',
				options: [
				  { id: 'wooden_larder', name: 'Wooden Larder', img: withBase('/icons/kitchen/Wooden_larder_icon.png') },
				  { id: 'oak_larder', name: 'Oak Larder', img: withBase('/icons/kitchen/Oak_larder_icon.png') },
				  { id: 'teak_larder', name: 'Teak Larder', img: withBase('/icons/kitchen/Teak_larder_icon.png') },
				]
			},
			{
				name: 'Shelf',
				options: [
				  { id: 'wooden_shelves_1', name: 'Wooden Shelves 1', img: withBase('/icons/kitchen/Wooden_shelves_1_icon.png') },
				  { id: 'wooden_shelves_2', name: 'Wooden Shelves 2', img: withBase('/icons/kitchen/Wooden_shelves_2_icon.png') },
				  { id: 'wooden_shelves_3', name: 'Wooden Shelves 3', img: withBase('/icons/kitchen/Wooden_shelves_3_icon.png') },
				  { id: 'oak_shelves_1', name: 'Oak Shelves 1', img: withBase('/icons/kitchen/Oak_shelves_1_icon.png') },
				  { id: 'oak_shelves_2', name: 'Oak Shelves 2', img: withBase('/icons/kitchen/Oak_shelves_2_icon.png') },
				  { id: 'teak_shelves_1', name: 'Teak Shelves 1', img: withBase('/icons/kitchen/Teak_shelves_1_icon.png') },
				  { id: 'teak_shelves_2', name: 'Teak Shelves 2', img: withBase('/icons/kitchen/Teak_shelves_2_icon.png') },
				]
			},
			{
				name: 'Sink',
				options: [
				  { id: 'pump_and_drain', name: 'Pump and Drain', img: withBase('/icons/kitchen/Pump_and_drain_icon.png') },
				  { id: 'pump_and_tub', name: 'Pump and Tub', img: withBase('/icons/kitchen/Pump_and_tub_icon.png') },
				  { id: 'sink', name: 'Sink', img: withBase('/icons/kitchen/Sink_icon.png') },
				  { id: 'gold_sink', name: 'Gold Sink', img: withBase('/icons/kitchen/Gold_sink_icon.png') },
				]
			},
			{
				name: 'Spice Rack',
				options: [
				  { id: 'spice_rack', name: 'Spice Rack', img: withBase('/icons/kitchen/Spice_rack_icon.png') },
				]
			},
			{
				name: 'Stove',
				options: [
				  { id: 'firepit', name: 'Firepit', img: withBase('/icons/kitchen/Firepit_icon.png') },
				  { id: 'firepit_with_hook', name: 'Firepit With Hook', img: withBase('/icons/kitchen/Firepit_with_hook_icon.png') },
				  { id: 'firepit_with_pot', name: 'Firepit With Pot', img: withBase('/icons/kitchen/Firepit_with_pot_icon.png') },
				  { id: 'small_oven', name: 'Small Oven', img: withBase('/icons/kitchen/Small_oven_icon.png') },
				  { id: 'large_oven', name: 'Large Oven', img: withBase('/icons/kitchen/Large_oven_icon.png') },
				  { id: 'steel_range', name: 'Steel Range', img: withBase('/icons/kitchen/Steel_range_icon.png') },
				  { id: 'fancy_range', name: 'Fancy Range', img: withBase('/icons/kitchen/Fancy_range_icon.png') },
				]
			},
			{
				name: 'Table',
				options: [
				  { id: 'kitchen_table', name: 'Kitchen Table', img: withBase('/icons/kitchen/Kitchen_table_icon.png') },
				  { id: 'oak_table', name: 'Oak Table', img: withBase('/icons/kitchen/Oak_kitchen_table_icon.png') },
				  { id: 'teak_table', name: 'Teak Table', img: withBase('/icons/kitchen/Teak_kitchen_table_icon.png') },
				]
			},
		]
	},
	{ /** Dining Room */
		key: 'dining_room',
		name: 'Dining Room',
		cost: 5000,
		minLvl: 10,
		doors: [Door.East, Door.South, Door.West],
		bg: '#424242',
		hotspots: [
			{
				name: 'Bell Pull',
				options: [
				  { id: 'rope_bell_pull', name: 'Rope Bell-Pull', img: withBase('/icons/dining/rope_bell-pull_icon.png') },
				  { id: 'bell_pull', name: 'Bell-Pull', img: withBase('/icons/dining/bell-pull_icon.png') },
				  { id: 'posh_bell_pull', name: 'Posh Bell-Pull', img: withBase('/icons/dining/bell-pull_icon.png') },
				]
			},
			{
				name: 'Curtains',
				options: [
					{ id: 'torn_curtains', name: 'Torn Curtains', img: withBase('/icons/parlour/Torn_curtains_icon.png') },
					{ id: 'curtains', name: 'Curtains', img: withBase('/icons/parlour/Curtains_icon.png') },
					{ id: 'opulent_curtains', name: 'Opulent Curtains', img: withBase('/icons/parlour/Opulent_curtains_icon.png') },
					{ id: 'raging_echoes_curtains', name: 'Raging Echoes Curtains', img: withBase('/icons/parlour/Raging_echoes_curtains_icon.png') },
				]
			},
			{
				name: 'Decoration',
				options: [
				  { id: 'oak_wall_decoration', name: 'Oak Wall Decoration', img: withBase('/icons/dining/oak_wall_decoration_icon.png') },
				  { id: 'teak_wall_decoration', name: 'Teak Wall Decoration', img: withBase('/icons/dining/teak_wall_decoration_icon.png') },
				  { id: 'gilded_wall_decoration', name: 'Gilded Wall Decoration', img: withBase('/icons/dining/gilded_wall_decoration_icon.png') },
				]
			},
			{
				name: 'Fireplace',
				options: [
					{ id: 'clay_fireplace', name: 'Clay Fireplace', img: withBase('/icons/parlour/Clay_fireplace_icon.png') },
					{ id: 'stone_fireplace', name: 'Stone Fireplace', img: withBase('/icons/parlour/Stone_fireplace_icon.png') },
					{ id: 'marble_fireplace', name: 'Marble Fireplace', img: withBase('/icons/parlour/Marble_fireplace_icon.png') },
				]
			},
			{
				name: 'Seating',
				options: [
				  { id: 'wooden_bench', name: 'Wooden Bench', img: withBase('/icons/dining/wooden_bench_icon.png') },
				  { id: 'oak_bench', name: 'Oak Bench', img: withBase('/icons/dining/oak_bench_icon.png') },
				  { id: 'carved_oak_bench', name: 'Carved Oak Bench', img: withBase('/icons/dining/carved_oak Bench') },
				  { id: 'teak_dining_bench', name: 'Teak Dining Bench', img: withBase('/icons/dining/teak_dining_bench_icon.png') },
				  { id: 'carved_teak_bench', name: 'Carved Teak Bench', img: withBase('/icons/dining/carved_teak_bench_icon.png') },
				  { id: 'mahogany_bench', name: 'Mahogany Bench', img: withBase('/icons/dining/mahogany_bench_icon.png') },
				  { id: 'gilded_bench', name: 'Gilded Bench', img: withBase('/icons/dining/gilded_bench_icon.png') },
				]
			},
			{
				name: 'Table',
				options: [
				  { id: 'wood_dining_table', name: 'Wood Dining Table', img: withBase('/icons/dining/wood_dining_table_icon.png') },
				  { id: 'oak_dining_table', name: 'Oak Dining Table', img: withBase('/icons/dining/oak_dining_table_icon.png') },
				  { id: 'carved_oak_table', name: 'Carved Oak Table', img: withBase('/icons/dining/carved_oak_table_icon.png') },
				  { id: 'teak_table', name: 'Teak Table', img: withBase('/icons/dining/teak_table_icon.png') },
				  { id: 'carved_teak_table', name: 'Carved Teak Table', img: withBase('/icons/dining/carved_teak_table_icon.png') },
				  { id: 'mahogany_table', name: 'Mahogany Table', img: withBase('/icons/dining/mahogany_table_icon.png') },
				  { id: 'opulent_table', name: 'Opulent Table', img: withBase('/icons/dining/opulent_table_icon.png') },
				]
			},
		]
	},
	{ /** Workshop */
		key: 'workshop',
		name: 'Workshop',
		cost: 10000,
		minLvl: 15,
		doors: [Door.North, Door.South],
		bg: '#542808',
		hotspots: [
			{
				name: 'Clockmaking',
				options: [
				  { id: 'crafting_table_1', name: 'Crafting Table 1', img: withBase('/icons/workshop/crafting_table_icon.png') },
				  { id: 'crafting_table_2', name: 'Crafting Table 2', img: withBase('/icons/workshop/crafting_table_icon.png') },
				  { id: 'crafting_table_3', name: 'Crafting Table 3', img: withBase('/icons/workshop/crafting_table_icon.png') },
				  { id: 'crafting_table_4', name: 'Crafting Table 4', img: withBase('/icons/workshop/crafting_table_4_icon.png') },
				]
			},
			{
				name: 'Heraldry',
				options: [
				  { id: 'pluming_stand', name: 'Pluming Stand', img: withBase('/icons/workshop/pluming_stand_icon.png') },
				  { id: 'shield_easel', name: 'Shield Easel', img: withBase('/icons/workshop/shield_easel_icon.png') },
				  { id: 'banner_easel', name: 'Banner Easel', img: withBase('/icons/workshop/banner_easel_icon.png') },
				]
			},
			{
				name: 'Repair',
				options: [
					{ id: 'repair_bench', name: 'Repair Bench', img: withBase('/icons/workshop/repair_bench_icon.png') },
					{ id: 'whetstone', name: 'Whetstone', img: withBase('/icons/workshop/whetstone_icon.png') },
					{ id: 'armour_stand', name: 'Armour Stand', img: withBase('/icons/workshop/armour_stand_icon.png') },
				]
			},
			{
				name: 'Tool',
				options: [
				  { id: 'tool_store_1', name: 'Tool Store 1', img: withBase('/icons/workshop/tool_store_1_icon.png') },
				  { id: 'tool_store_2', name: 'Tool Store 2', img: withBase('/icons/workshop/tool_store_2_icon.png') },
				  { id: 'tool_store_3', name: 'Tool Store 3', img: withBase('/icons/workshop/tool_store_3_icon.png') },
				  { id: 'tool_store_4', name: 'Tool Store 4', img: withBase('/icons/workshop/tool_store_4_icon.png') },
				  { id: 'tool_store_5', name: 'Tool Store 5', img: withBase('/icons/workshop/tool_store_5_icon.png') },
				]
			},
			{
				name: 'Workbench',
				options: [
				  { id: 'wooden_workbench', name: 'Wooden Workbench', img: withBase('/icons/workshop/wooden_workbench_icon.png') },
				  { id: 'oak_workbench', name: 'Oak Workbench', img: withBase('/icons/workshop/oak_workbench_icon.png') },
				  { id: 'steel_framed_workbench', name: 'Steel Framed Workbench', img: withBase('/icons/workshop/steel_framed_workbench_icon.png') },
				  { id: 'bench_with_vice', name: 'Bench With Vice', img: withBase('/icons/workshop/bench_with_vice_icon.png') },
				  { id: 'bench_with_lathe', name: 'Bench With Lathe', img: withBase('/icons/workshop/bench_with_lathe_icon.png') },
				]
			},
		]
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
				  { id: 'wooden_bed', name: 'Wooden Bed', img: withBase('/icons/bedroom/Wooden_bed_icon.png') },
				  { id: 'oak_bed', name: 'Oak Bed', img: withBase('/icons/bedroom/Oak_bed_icon.png') },
				  { id: 'large_oak_bed', name: 'Large Oak Bed', img: withBase('/icons/bedroom/Large_oak_bed_icon.png') },
				  { id: 'teak_bed', name: 'Teak Bed', img: withBase('/icons/bedroom/Teak_bed_icon.png') },
				  { id: 'large_teak_bed', name: 'Large Teak Bed', img: withBase('/icons/bedroom/Large_teak_bed_icon.png') },
				  { id: '4_poster', name: '4-Poster', img: withBase('/icons/bedroom/4-poster_icon.png') },
				  { id: 'gilded_4_poster', name: 'Gilded 4-Poster', img: withBase('/icons/bedroom/Gilded_4-poster_icon.png') },
				]
			},
			{
				name: 'Corner',
				options: [
					{ id: 'oak_clock', name: 'Oak Clock', img: withBase('/icons/bedroom/Oak_clock_icon.png') },
					{ id: 'teak_clock', name: 'Teak Clock', img: withBase('/icons/bedroom/Teak_clock_icon.png') },
					{ id: 'servants_money_bag', name: 'Servant\'s Money Bag', img: withBase('/icons/bedroom/Servants_money_bag_icon.png') },
					{ id: 'gilded_clock', name: 'Gilded Clock', img: withBase('/icons/bedroom/Gilded_clock_icon.png') },
				  ]
			},
			{
				name: 'Curtains',
				options: [
					{ id: 'torn_curtains', name: 'Torn Curtains', img: withBase('/icons/parlour/Torn_curtains_icon.png') },
					{ id: 'curtains', name: 'Curtains', img: withBase('/icons/parlour/Curtains_icon.png') },
					{ id: 'opulent_curtains', name: 'Opulent Curtains', img: withBase('/icons/parlour/Opulent_curtains_icon.png') },
					{ id: 'raging_echoes_curtains', name: 'Raging Echoes Curtains', img: withBase('/icons/parlour/Raging_echoes_curtains_icon.png') },
				]
			},
			{
				name: 'Dresser',
				options: [
					{ id: 'shaving_stand', name: 'Shaving Stand', img: withBase('/icons/bedroom/Shaving_stand_icon.png') },
					{ id: 'oak_shaving_stand', name: 'Oak Shaving Stand', img: withBase('/icons/bedroom/Oak_shaving_stand_icon.png') },
					{ id: 'oak_dresser', name: 'Oak Dresser', img: withBase('/icons/bedroom/Oak_dresser_icon.png') },
					{ id: 'teak_dresser', name: 'Teak Dresser', img: withBase('/icons/bedroom/Teak_dresser_icon.png') },
					{ id: 'fancy_teak_dresser', name: 'Fancy Teak Dresser', img: withBase('/icons/bedroom/Fancy_teak_dresser_icon.png') },
					{ id: 'mahogany_dresser', name: 'Mahogany Dresser', img: withBase('/icons/bedroom/Mahogany_dresser_icon.png') },
					{ id: 'Gilded_dresser', name: 'Gilded Dresser', img: withBase('/icons/bedroom/Gilded_dresser_icon.png') },
				  ]
			},
			{
				name: 'Fireplace',
				options: [
					{ id: 'clay_fireplace', name: 'Clay Fireplace', img: withBase('/icons/parlour/Clay_fireplace_icon.png') },
					{ id: 'stone_fireplace', name: 'Stone Fireplace', img: withBase('/icons/parlour/Stone_fireplace_icon.png') },
					{ id: 'marble_fireplace', name: 'Marble Fireplace', img: withBase('/icons/parlour/Marble_fireplace_icon.png') },
				]
			},
			{
				name: 'Rug',
				options: [
					{ id: 'brown_rug', name: 'Brown Rug', img: withBase('/icons/parlour/Brown_rug_icon.png') },
					{ id: 'rug', name: 'Rug', img: withBase('/icons/parlour/Rug_icon.png') },
					{ id: 'deadman_rug', name: 'Deadman Rug', img: withBase('/icons/parlour/Deadman_rug_icon.png') },
					{ id: 'opulent_rug', name: 'Opulent Rug', img: withBase('/icons/parlour/Opulent_rug_icon.png') },
					{ id: 'raging_echoes_rug', name: 'Raging Echoes Rug', img: withBase('/icons/parlour/Raging_echoes_rug_icon.png') },
				]
			},
			{
				name: 'Wardrobe',
				options: [
					{ id: 'shoe_box', name: 'Shoe Box', img: withBase('/icons/bedroom/Shoe_box_icon.png') },
					{ id: 'oak_drawer', name: 'Oak Drawers', img: withBase('/icons/bedroom/Oak_drawers_icon.png') },
					{ id: 'oak_wardrobe', name: 'Oak Wardrobe', img: withBase('/icons/bedroom/Oak_wardrobe_icon.png') },
					{ id: 'teak_drawer', name: 'Teak Drawers', img: withBase('/icons/bedroom/Teak_drawers_icon.png') },
					{ id: 'teak_wardrobe', name: 'Teak Wardrobe', img: withBase('/icons/bedroom/Teak_wardrobe_icon.png') },
					{ id: 'mahogany_wardrobe', name: 'Mahogany Wardrobe', img: withBase('/icons/bedroom/Mahogany_wardrobe_icon.png') },
					{ id: 'gilded_wardrobe', name: 'Gilded Wardrobe', img: withBase('/icons/bedroom/Gilded_wardrobe_icon.png') },
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
