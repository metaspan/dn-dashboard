export const telemetryNameMap: Record<string, Record<string, string>> = {
  // mapping "DN identify" to "telemetry node name"
  kusama: {
  //   '♞GameTheory♜/01': 'GameTheory-01',
  //   'LuckyFriday.io/🍀 KSM 09 🍀': '🍀LuckyFriday-KSM-09🍀',
  //   '🍁 High/Stake 🥩/HEL1': '🍁 HIGH/STAKE 🥩 | HEL1-KSM',
  //   '🍁 High/Stake 🥩/ZRH1': '🍁 HIGH/STAKE 🥩 | ZRH1-KSM',
  //   '🍯 HoneyStake.xyz 🍯/💰 Earn Bonus Rewards! 💰 1': '🍯 HoneyStake·xyz 🍯 | 💰 Earn Bonus Rewards! 💰 | 1',
  //   '🍯 HoneyStake.xyz 🍯/💰 Earn Bonus Rewards! 💰 2': '🍯 HoneyStake·xyz 🍯 | 💰 Earn Bonus Rewards! 💰 | 2',
  //   'Masternode24🔱': '🔱-Masternode24-🔱',
  //   '🕴TUXEDO🕴': '🕴️ TUXEDO 🕴️',
  //   '🕴TUXEDO🕴/Black': '🕴️ TUXEDO--Black 🕴️',
  //   '🧊 Iceberg Nodes 🧊/DN1': '🧊 Iceberg Nodes 🧊 | DN1',
  //   '🧊 Iceberg Nodes 🧊/DN2': '🧊 Iceberg Nodes 🧊 | DN2',
  //   '🛡 DWELLIR KSM 🛡': '🛡 DWELLIR KSM 🛡',
  //   '🛸 Zooper Corp 🛸': '🛸 Zooper Corp 🛸',
  //   'Amforc/10': 'Amforc 10',
  //   'Amforc/12': 'Amforc 12',
  //   'APERTURE MINING 🎂': 'Aperture Mining 🎂 0',
  //   'APERTURE MINING 🎂/02': 'Aperture Mining 🎂 2',
  //   'ARKAWA': 'arkawa',
  //   'Basilea': 'basilea/1',
  //   'Bestvalidator | Zurich': 'BestValidator-kusama1',
  //   'Bestvalidator | Zurich/k2': 'BestValidator-kusama2',
  //   'Block And White': 'BlockAndWhite',
  //   'Blockseeker.io': 'blockseeker_io',
  //   'Blockseeker.io/sentinel': 'blockseeker_io_sentinel',
  //   '🐟Bluefin Tuna🐟': 'Bluefin_Tuna',
  //   '🐟Bluefin Tuna🐟/🌊Adriatic🌊': 'Bluefin_Tuna2',
  //   'Brightlystake': 'Brightlystake',
  //   'Brightlystake/01': 'Brightlystake_01',
  //   'BUENO VALIDATORO': 'Bueno Validatoro k1',
  //   'Chris-Staking': 'Chris Staking/k1',
  //   'Chris-Staking/k2': 'Chris Staking/k2',
  //   'ComputeCrypto.com/1': 'COMPUTECRYPTO',
  //   'ComputeCrypto.com/2': 'COMPUTECRYPTO2',
  //   'COSMOON/2': 'Cosmoon2',
  //   'CroutonDigital': 'CroutonDigital-1',
  //   'CroutonDigital/02': 'CroutonDigital-2',
  //   'dakkk': 'dakkk',
  //   'deigenvektor.io': 'deigenvektor',
  //   'deigenvektor.io/deigenvektor.io/2': 'deigenvektor/2',
  //   'DomiNodes': 'DomiNodes-Alpha',
  //   'DomiNodes/2': 'DomiNodes-Bravo',
  //   'dotvalidators.com': 'dotvalidators-A',
  //   'DOZENODES.COM': 'DOZENODES',
  //   'Ech0.re/01': 'EchoStake-KSM-01',
  //   'Encointer/KV1': 'Encointer/KV1',
  //   'Encointer/KV2': 'Encointer/KV2',
  //   'Eric/BladeRunner': 'BladeRunner',
  //   'Eric/BladeRunner2': 'BladeRunner2',
  //   'Exotic Stake/02': 'ExoticStake-k2',
  //   'Exotic Stake/03': 'ExoticStake-k3',
  //   'FARADAY': 'Faraday/1',
  //   'Frog🐸': 'frogstakingnode#fksm#01',
  //   'Frog🐸/02': 'frogstakingnode#fksm#02',
  //   'GATOTECH/UK2': 'GATOTECH😸KSM_2',
  //   'GoOpen': 'GoOpen',
  //   'Grimface': 'grimface',
  //   '🏔 HELIKON 🏔/BELIEVE': 'helikon-kusama-believe',
  //   '🏔 HELIKON 🏔/CHARLOTTE': 'helikon-kusama-charlotte',
  //   'hirish': 'hirish',
  //   'hirish/HIRISH 2': 'hirish_2',
  //   'Hsinchu': 'Hsinchu',
  //   'HYPERSPEED/[1]⏩': 'HYPERSPEED_1',
  //   'INFRASTRUCTURE CORPORATION': 'INFRASTRUCTURE CORPORATION',
  //   'INFRASTRUCTURE CORPORATION/01': 'INFRASTRUCTURE CORPORATION/01',
  //   'Kuzo/Kuzo Stash 01': 'kuzo',
  //   'lada': 'lada',
  //   'LEGEND/3': 'LEGEND-3',
  //   'LEGEND/4': 'LEGEND-4',
  //   'Legos/X': 'legos-x',
  //   'MarketAcross-BlockBuilders': 'MARKETACROSS-BLOCKBUILDERS',
  //   'Melange': 'Melange',
  //   'Merkletribe/KAZAKI': 'MerkleTribe Ξ Kazaki',
  //   'METASPAN': 'METASPAN',
  //   'METASPAN/03': 'METASPAN/03',
  //   'Mile/Charlie': 'Mile-Charlie',
  //   'Mile/Echo': 'Mile-Echo',
  //   'nokogirisrv': 'Nokogirisrv',
  //   'nokogirisrv/nokogirisrv-2': 'Nokogirisrv-2',
  //   'openbitlab': 'openbitlab',
  //   'ParaNodes.io/1KV - 01🚀 ': 'Para-KSM1-Validator',
  //   'ParaNodes.io/1KV - 02🚀 ': 'Para-KSM2-Validator',
  //   'pathrocknetwork/pathrocknetwork2': 'PathrockNetwork-2',
  //   'PDP_Validator': 'PDP_Validator',
  //   'PDP_Validator/PDP_Validator': 'PDP_Validator2',
  //   'PERMANENCE DAO/LOVELACE': 'permanence-dao-ksm-val-lovelace',
  //   'Polkadot_Poland_Validator': 'PolkadotPoland',
  //   'PowerLabs': 'PowerLabs',
  //   'POWERSTAKE KUSAMA': 'Powerstake-k1',
  //   'SafeStake.IO/01': 'SafeStake_IO_KSM01',
  //   'SAXEMBERG/SAXEMBERG 5': 'Saxemberg5',
  //   'SAXEMBERG/SAXEMBERG 6': 'Saxemberg6',
  //   'Simply Staking': 'Simply Staking',
  //   'Simply Staking/2': 'Simply Staking 2',
  //   'Spice': 'Spice',
  //   'Stakely.io/stash': 'Stakely',
  //   'Staker Space/2': 'Staker Space [2]',
  //   'Staker Space/5': 'Staker Space [5]',
  //   'Titan Nodes': 'Titan Nodes',
  //   'Uno Staking/01': 'Uno Staking 1',
  //   'ValidOrange/KSM3': 'validorange-ksm3',
  //   'ValidOrange/KSM4': 'validorange-ksm4',
  //   'VISIONSTAKE 👁‍🗨': 'VisionStake-KSM',
  //   'VISIONSTAKE 👁‍🗨/02': 'VisionStake-KSM-2',
  //   'VLADIMIR': 'VLADIMIR ',
  //   'wdmaster': 'wdmaster',
  //   'WinterStamp/Avalanche': 'WinterStamp/Avalanche',
  //   'WinterStamp/Blizzard': 'WinterStamp/Blizzard',
  //   'XUAN_2': 'XUAN_LOW_COMMISSION_NODE_2',
  //   'Zetetic Validator': 'Zetetic Validator',
  },
  polkadot: {
  //   '🏔 HELIKON 🏔/ISTANBUL': '⛰ HELIKON ⛰ ISTANBUL',
  //   '🌌 Novasama 🌌/Turing': '🌌Novasama🌌/Turing',
  //   'LuckyFriday.io/🍀 DOT 03 🍀': '🍀LuckyFriday-DOT-03🍀',
  //   '🍁 High/Stake 🥩/HEL1': '🍁 HIGH/STAKE 🥩 | HEL1-DOT',
  //   '🏢 MIDL.dev/[1]': '🏢 MIDL_dev_1',
  //   '🕴TUXEDO🕴': '🕴TUXEDO🕴',
  //   '🧊 Iceberg Nodes 🧊/DN1': '🧊 Iceberg Nodes 🧊 | DN1',
  //   '🛡 DWELLIR DOT 🛡': '🛡 DWELLIR DOT 🛡',
  //   '🛸 Zooper Corp 🛸': '🛸 Zooper Corp 🛸',
  //   'Amforc/4': 'Amforc 4',
  //   'BESTVALIDATOR | ZURICH/p1': 'BestValidator-polkadot1',
  //   'Blockseeker.io': 'blockseeker_io',
  //   'BUENO VALIDATORO/p1': 'Bueno Validatoro p1',
  //   'Chris-Staking/p1': 'Chris Staking/p1',
  //   'COSMOON': 'COSMOON',
  //   'CroutonDigital-1': 'CroutonDigital-1',
  //   'dakkk': 'dakkk',
  //   'deigenvektor.io': 'deigenvektor',
  //   'ECH0.RE/01': 'EchoStake-DOT-01',
  //   'Encointer/PV1': 'ENCOINTER/PV1',
  //   'Eric/BladeRunner': 'BladeRunner',
  //   'GoOpen': 'GoOpen',
  //   'hirish': 'hirish',
  //   'Hsinchu': 'Hsinchu',
  //   'HYPERSPEED/DOT[1]⏩': 'HYPERSPEED_DOT1',
  //   'INFRASTRUCTURE CORPORATION': 'INFRASTRUCTURE CORPORATION',
  //   'Khastor/DN1': 'Khastor-KDN01',
  //   'lada': 'lada',
  //   'LEGEND/3': 'LEGEND-3',
  //   'MarketAcross-BB': 'MarketAcross-BB',
  //   'Melange': 'Melange',
  //   'Merkletribe/BAYAKA': 'MerkleTribe Ξ Bayaka',
  //   'METASPAN (also try POOL #18)': 'METASPAN (also try POOL #18)',
  //   'Mile🌍/Charlie': 'Mile-Charlie',
  //   'openbitlab': 'openbitlab',
  //   'Paramito/DN': 'Paramito-DOT-DN',
  //   'PDP_Validator': 'PDP_Validator',
  //   'PERMANENCE DAO/TURING': 'permanence-dao-dot-val-turing',
  //   'POWERSTAKE POLKADOT/P1': 'Powerstake-p1',
  //   'prematurata': 'prematurata',
  //   'ROTKO.NET/dot01': 'Rotko Networks - dot01 Validator',
  //   'Ruby-Node💎': 'Ruby',
  //   'SAXEMBERG/SAXEMBERG 3': 'Saxemberg3',
  //   'Stakeflow/2': 'Stakeflow/2',
  //   'Staker Space/4': 'Staker Space [4]',
  //   'Staking4All 🥩': 'Staking4All 1KVP',
  //   'STEAKCHEF/p1': 'SteakChef-p1',
  //   'SUNSHINEAUTOSDOT': 'SunshineAutosDot',
  //   'Titan Nodes': 'Titan Nodes',
  //   'Uno Staking': 'Uno Staking',
  //   'UTSA': 'utsa',
  //   'VISIONSTAKE 👁‍🗨': 'VisionStake-DOT-1',
  //   'VLADIMIRPRO': 'VLADIMIRPRO',
  //   'WinterStamp/Storm': 'WinterStamp/Storm',
  //   'XUAN': 'XUAN_NODE',
  //   'Zetetic Validator/01': 'Zetetic Validator 1',
  },
};
