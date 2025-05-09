export interface FurnitureType {
	key: string;
	name: string;
	minLvl: number;
	exp: number;
	materials: { [key: string]: number };
}

export const FURNITURE_TYPES: FurnitureType[] = [
	{
		key: 'exit_portal',
		name: 'Exit Portal',
		minLvl: 1,
		exp: 100,
		materials: {
			iron_bar: 10
		}
	},
	{
		key: 'decorative_rock',
		name: 'Decorative Rock',
		minLvl: 5,
		exp: 100,
		materials: {
			limestone_brick: 5
		}
	},
	{
		key: 'pond',
		name: 'Pond',
		minLvl: 10,
		exp: 100,
		materials: {
			soft_clay: 10
		}
	},
	{
		key: 'imp_statue',
		name: 'Imp Statue',
		minLvl: 15,
		exp: 150,
		materials: {
			limestone_brick: 5,
			soft_clay: 5
		}
	},
	{
		key: 'dungeon_entrance',
		name: 'Dungeon Entrance',
		minLvl: 70,
		exp: 500,
		materials: {
			marble_block: 1
		}
	},
	{
		key: 'plant',
		name: 'Plant',
		minLvl: 1,
		exp: 31,
		materials: {
			bagged_plant_1: 1
		}
	},
	{
		key: 'small_fern',
		name: 'Small Fern',
		minLvl: 6,
		exp: 70,
		materials: {
			bagged_plant_2: 1
		}
	},
	{
		key: 'fern',
		name: 'Fern',
		minLvl: 12,
		exp: 100,
		materials: {
			bagged_plant_3: 1
		}
	},
	{
		key: 'dock_leaf',
		name: 'Dock Leaf',
		minLvl: 1,
		exp: 31,
		materials: {
			bagged_plant_1: 1
		}
	},
	{
		key: 'thistle',
		name: 'Thistle',
		minLvl: 6,
		exp: 70,
		materials: {
			bagged_plant_2: 1
		}
	},
	{
		key: 'reeds',
		name: 'Reeds',
		minLvl: 12,
		exp: 100,
		materials: {
			bagged_plant_3: 1
		}
	},
	/** Superior Garden Start*/
		/** Fence Space */
	{
		key: 'redwood_fence',
		name: 'Redwood Fence',
		minLvl: 75,
		exp: 240,
		materials: {
			redwood_logs: 10,
			steel_bar: 2
		}
	},
	{
		key: 'marble_wall',
		name: 'Marble Wall',
		minLvl: 79,
		exp: 4000,
		materials: {
			marble_block: 8,
		}
	},
	{
		key: 'obsidian_fence',
		name: 'Obsidian Fence',
		minLvl: 83,
		exp: 2741,
		materials: {
			toktz_mej_tal: 10,
			tzhaar_ket_om: 2,
			toktz_xil_ul: 25
		}
	},
		/** Pool Space */
	{
		key: 'restoration_pool',
		name: 'Restoration pool',
		minLvl: 65,
		exp: 706,
		materials: {
			limestone_brick: 5,
			bucket_of_water: 5,
			soul_rune: 1000,
			body_rune: 1000
		}
	},
	{
		key: 'revitalisation_pool',
		name: 'Revitalisation pool',
		minLvl: 70,
		exp: 850,
		materials: {
			restoration_pool: 1,
			stamina_potion_4_unnoted: 10
		}
	},
	{
		key: 'rejuvenation_pool',
		name: 'Rejuvenation pool',
		minLvl: 80,
		exp: 900,
		materials: {
			revitalisation_pool: 1,
			prayer_potion_4_unnoted: 10
		}
	},
	{
		key: 'fancy_rejuvenation_pool',
		name: 'Fancy rejuvenation pool',
		minLvl: 85,
		exp: 1950,
		materials: {
			rejuvenation_pool: 1,
			super_restore_4_unnoted: 10,
			marble_block: 2
		}
	},
	{
		key: 'ornate_rejuvenation_pool',
		name: 'Ornate rejuvenation pool',
		minLvl: 90,
		exp: 3107,
		materials: {
			fancy_rejuvenation_pool: 1,
			anti_venom_4_unnoted: 10,
			gold_leaf: 5,
			blood_rune: 1000
		}
	},
		/** Teleport Space */
	{
		key: 'spirit_tree',
		name: 'Spirit tree',
		minLvl: 75,
		exp: 350,
		materials: {
			spirit_sapling: 1,
		}
	},
	{
		key: 'obelisk',
		name: 'Obelisk',
		minLvl: 80,
		exp: 3000,
		materials: {
			ancient_crystal: 4,
			marble_block: 4
		}
	},
	{
		key: 'fairy_ring',
		name: 'Fairy ring',
		minLvl: 85,
		exp: 535,
		materials: {
			mushroom: 10,
			fairy_enchantment: 1,
		}
	},
	{
		key: 'spirit_tree_fairy_ring',
		name: 'Spirit tree & Fairy ring',
		minLvl: 95,
		exp: 885,
		materials: {
			spirit_sapling: 1,
			mushroom: 10,
			fairy_enchantment: 1
		}
	},
	/** Theme */
	{
		key: 'zen_theme',
		name: 'Zen theme',
		minLvl: 65,
		exp: 474,
		materials: {
			bucket_of_sand: 6,
			pink_dye: 1,
			bagged_nice_tree: 1
		}
	},
	{
		key: 'otherworldly_theme',
		name: 'Otherworldly theme',
		minLvl: 75,
		exp: 316,
		materials: {
			supercompost: 8,
			blue_dye: 1,
			mushroom: 4,
			magic_secateurs: 1
		}
	},
	{
		key: 'volcanic_theme',
		name: 'Volcanic theme',
		minLvl: 85,
		exp: 4464,
		materials: {
			granite_5kg: 2,
			onyx: 6,
			fire_rune: 1000,
			lava_rune: 2000
		}
	},
		/** topiary */
		{
			key: 'topiary_bush',
			name: 'Topiary bush',
			minLvl: 65,
			exp: 141,
			materials: {
				topiary_hedge_bagged: 6
			}
		},
		/** seating */
		{
			key: 'teak_garden_bench',
			name: 'Teak garden bench',
			minLvl: 66,
			exp: 540,
			materials: {
				teak_planks: 6
			}
		},
		{
			key: 'gnome_bench',
			name: 'Gnome bench',
			minLvl: 77,
			exp: 840,
			materials: {
				mahogany_planks: 6
			}
		},
		{
			key: 'marble_decorative_bench',
			name: 'Marble decorative bench',
			minLvl: 88,
			exp: 3000,
			materials: {
				marble_block: 6
			}
		},
		{
			key: 'obsidian_decorative_bench',
			name: 'Obsidian decorative bench',
			minLvl: 98,
			exp: 2331,
			materials: {
				marble_block: 3,
				onyx: 1,
				fire_rune: 250,
				lava_rune: 500
			}
		},
		/** Superior Garden End */

		/** Achievement gallery Start */
		/** Adventure Log */
		{
			key: 'mahogany_adventure_log',
			name: 'Mahogany adventure log',
			minLvl: 83,
			exp: 504,
			materials: {
				mahogany_plank: 3,
				papyrus: 2,
				enchanted_gem: 1
			}
		},
		{
			key: 'gilded_adventure_log',
			name: 'Gilded adventure log',
			minLvl: 88,
			exp: 1100,
			materials: {
				mahogany_plank: 3,
				gold_leaf: 2,
				enchanted_gem: 1
			}
		},
		{
			key: 'marble_adventure_log',
			name: 'Marble adventure log',
			minLvl: 93,
			exp: 1160,
			materials: {
				marble_block: 2,
				limestone_brick: 4,
				enchanted_gem: 1
			}
		},
		/** Altar */
		{
			key: 'ancient_altar',
			name: 'Ancient altar',
			minLvl: 80,
			exp: 1490,
			materials: {
				limestone_brick: 10,
				magic_stone: 1,
				ancient_signet: 1,
				pharaohs_sceptre: 1
			}
		},
		{
			key: 'lunar_altar',
			name: 'Lunar altar',
			minLvl: 80,
			exp: 1957,
			materials: {
				limestone_brick: 10,
				magic_stone: 1,
				lunar_signet: 1,
				astral_rune: 10000
			}
		},
		{
			key: 'dark_altar',
			name: 'Dark altar',
			minLvl: 80,
			exp: 3888,
			materials: {
				limestone_brick: 10,
				magic_stone: 1,
				arceuus_signet: 1,
				blood_rune: 5000,
				soul_rune: 5000
			}
		},
		{
			key: 'occult_altar',
			name: 'Occult altar',
			minLvl: 90,
			exp: 3445,
			materials: {
				Materials_for_the_other_two_altars_the_player_hasnt_built_excluding_the_magic_stone_and_limestone_bricks: 0,
			}
		},
		/** Boss lair */
		{
			key: 'boss_lair_display',
			name: 'Boss lair display',
			minLvl: 87,
			exp: 1483,
			materials: {
				steel_bar: 4,
				molten_glass: 5,
				mahogany_plank: 10,
			}
		},	
		/** Display */
		{
			key: 'mounted_emblem',
			name: 'Mounted emblem',
			minLvl: 80,
			exp: 5300,
			materials: {
				marble_block: 1,
				gold_leaf: 1,
				decorative_emblem: 1,
			}
		},	
		{
			key: 'mounted_coins',
			name: 'Mounted coins',
			minLvl: 80,
			exp: 800,
			materials: {
				marble_block: 1,
				gold_leaf: 1,
				coins: 100000000,
			}
		},
		{
			key: 'cape_hanger',
			name: 'Cape hanger',
			minLvl: 80,
			exp: 800,
			materials: {
				marble_block: 1,
				gold_leaf: 1,
			}
		},		
		/** Jewellery Box */
		{
			key: 'basic_jewellery_box',
			name: 'Basic jewellery box',
			minLvl: 81,
			exp: 605,
			materials: {
				bolt_of_cloth: 1,
				steel_bar: 1,
				games_necklace_8: 3,
				ring_of_dueling_8: 3
			}
		},	
		{
			key: 'fancy_jewellery_box',
			name: 'Fancy jewellery box',
			minLvl: 86,
			exp: 1350,
			materials: {
				basic_jewellery_box: 1,
				gold_leaf: 1,
				skills_necklace_4: 5,
				combat_bracelet_4: 5
			}
		},
		{
			key: 'ornate_jewellery_box',
			name: 'Ornate jewellery box',
			minLvl: 91,
			exp: 2680,
			materials: {
				fancy_jewellery_box: 1,
				gold_leaf: 2,
				amulet_of_glory_4: 8,
				ring_of_wealth_5: 8
			}
		},
		/** Quest list */
		{
			key: 'quest_list',
			name: 'Quest list',
			minLvl: 80,
			exp: 310,
			materials: {
				papyrus: 10,
				gold_leaf: 1,
			}
		},	
		/** Achievement gallery END */

		/** Bedroom START */
		/** Bed */
		{
			key: 'wooden_bed',
			name: 'Wooden bed',
			minLvl: 20,
			exp: 117,
			materials: {
				plank: 3,
				nails: 3,
				bolt_of_cloth: 2
			}
		},	
		{
			key: 'oak_bed',
			name: 'Oak bed',
			minLvl: 30,
			exp: 210,
			materials: {
				oak_plank: 3,
				bolt_of_cloth: 2
			}
		},
		{
			key: 'large_oak_bed',
			name: 'Large oak bed',
			minLvl: 34,
			exp: 330,
			materials: {
				oak_plank: 5,
				bolt_of_cloth: 2
			}
		},
		{
			key: 'teak_bed',
			name: 'Teak bed',
			minLvl: 40,
			exp: 300,
			materials: {
				teak_plank: 3,
				bolt_of_cloth: 2
			}
		},
		{
			key: 'large_teak_bed',
			name: 'Large teak bed',
			minLvl: 45,
			exp: 480,
			materials: {
				teak_plank: 5,
				bolt_of_cloth: 2
			}
		},
		{
			key: '4_poster',
			name: '4-poster',
			minLvl: 53,
			exp: 450,
			materials: {
				mahogany_plank: 3,
				bolt_of_cloth: 2
			}
		},
		{
			key: 'gilded_4_poster',
			name: 'Gilded 4-poster',
			minLvl: 60,
			exp: 1330,
			materials: {
				mahogany_plank: 5,
				bolt_of_cloth: 2,
				gold_leaf: 2
			}
		},
		/** Corner */
		{
			key: 'oak_clock',
			name: 'Oak clock',
			minLvl: 25,
			exp: 142,
			materials: {
				oak_plank: 2,
				clockwork: 1
			}
		},
		{
			key: 'teak_clock',
			name: 'Teak clock',
			minLvl: 55,
			exp: 202,
			materials: {
				teak_plank: 2,
				clockwork: 1
			}
		},
		{
			key: 'servants_money_bag',
			name: 'Servants Money Bag',
			minLvl: 58,
			exp: 595,
			materials: {
				mahogany_plank: 2,
				bolt_of_cloth: 1,
				gold_leaf: 1
			}
		},
		{
			key: 'gilded_clock',
			name: 'Gilded clock',
			minLvl: 85,
			exp: 602,
			materials: {
				mahogany_plank: 2,
				clockwork: 1,
				gold_leaf: 1
			}
		},
];	

const map: Map<string, FurnitureType> = new Map();
for (const type of FURNITURE_TYPES) {
	if (map.has(type.key)) {
		throw new Error(`Duplicate furniture type ${type.key}`);
	}
	map.set(type.key, type);
}

export const getFurnitureTypeByKey = (key: string | null): FurnitureType | null => {
    if (!key) return null;
    
    // Check if it exists in our map first
    const type = map.get(key);
    if (type) {
        return type;
    }
    
    // Create a basic furniture type for unknown keys
    return {
        key,
        name: key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        minLvl: 1,
        exp: 0,
        materials: {}
    };
};
