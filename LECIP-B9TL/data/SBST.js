EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 2
        },
        destination: {
            align: "left,bottom",
            margin: {
                bottom: {
                    "$destinationFont === 'LECIP-6:3'": 3,
                    "$destinationFont === 'LECIP-6:4'": 3,
                    "$destinationFont === 'LECIP-7:5'": 2,
                    "$destinationFont === 'LECIP-10'": 0
                },
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                top: {
                    "$destinationFont === 'LECIP-6:3'": 2,
                    "$destinationFont === 'LECIP-6:4'": 2,
                    "else": 1
                }
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    logo: {
        logo: {
            align: "centre-x",
            image: "$image"
        },

        text: "$text"
    },
    logoSvc: {
        logo: {
            align: "left",
            image: "$image",
        },
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 2
        },

        text: "$destination"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    }
}

EDSData.SBST = {
    4: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "4",
                destination: "TAMP INT-CHANGI NTH WAY",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES AVE 7",
                    "FLORA DR",
                    "CHANGI NORTH WAY",
                    "FLORA RD",
                    "TAMPINES AVE 7"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    5: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "5",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPP CHANGI RD EAST",
                    "BEDOK RESERVIOR RD",
                    "THOMSON RD",
                    "SCOTTS RD",
                    "TIONG BAHRU RD",
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "5",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TIONG BAHRU RD",
                    "SCOTTS RD",
                    "THOMSON RD",
                    "BEDOK RESERVIOR RD",
                    "UPP CHANGI RD EAST"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    7: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "7",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI RD",
                    "GUILLEMARD RD",
                    "NORTH BRIDGE RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD",
                    "ULU PANDAN RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "7",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ULU PANDAN RD",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "VICTORIA ST",
                    "GUILLEMARD RD",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    8: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "8",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 7, 2, 1",
                    "BEDOK RESERVIOR RD",
                    "UBI AVE 2",
                    'PAYA LEBAR RD',
                    'MACPHERSON RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "8",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MACPHERSON RD",
                    'PAYA LEBAR RD',
                    'UBI AVE 2',
                    'BEDOK RESERVIOR RD',
                    'TAMPINES AVE 1, 2, 7'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    9: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "9",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPPER CHANGI RD",
                    'SIMEI ST 3',
                    'TAMPINES AVE 2, 7',
                    'LOYANG AVE',
                    'CHANGI CARGO RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
    },
    10: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "10",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "EAST COAST RD",
                    'TANJONG KATON RD',
                    'SHENTON WAY',
                    'PASIR PANJANG RD',
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "10",
                destination: "> TAMPINES",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR PANJANG RD",
                    'NICOLL HIGHWAY',
                    'TANJONG KATONG RD',
                    'EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "10E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "10e",
                image: "express",
                destination: "EXPRESS 10e"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "10e",
                image: "express",
                destination: "EXPRESS 10e"
            }
        }
    },
    "11": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "11",
                destination: "LOR 1 GEYLANG TER-RHU CROSS",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SIMS WAY",
                    "STADIUM CRESCENT",
                    "RHU CROSS",
                    "STADIUM WALK",
                    "SIMS WAY"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    13: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "13",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 6",
                    'BRADDELL RD',
                    'LAVENDER ST',
                    'SIMS AVE',
                    'UPP EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "13",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPP AST COAST RD",
                    'GEYLANG RD',
                    'LAVENDER ST',
                    'BRADDELL RD',
                    'ANG MO KIO AVE 6, 8'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    14: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "14",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH AVE 3",
                    'EAST COAST RD',
                    'SOMERSET RD',
                    'IRWELL BANK RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "14",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "HOOT KIAM RD",
                    'ORCHARD RD',
                    'EAST COAST RD',
                    'BEDOK NORTH AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "14E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "14e",
                image: "express",
                destination: "EXPRESS 14e"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "14e",
                image: "express",
                destination: "EXPRESS 14e"
            }
        }
    },
    16: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPP EAST COAST RD",
                    'MARINE PARADE RD',
                    'JOO CHIAT RD',
                    'SOMERSET RD',
                    'TIONG BAHRU RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TIONG BAHRU RD",
                    'ORCHARD RD',
                    'JOO CHIAT RD',
                    'MARINE PARADE RD',
                    'UPP EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
    },
    18: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "18",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 7",
                    'TAMPINES AVE 2',
                    'BEDOK RESERVOIR RD',
                    'BEDOK INTERCHANGE'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "18",
                destination: "> TAMPINES CONCOURSE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BEDOK INTERCHANGE",
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 2',
                    'TAMPINES AVE 7'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    19: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "19",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'TAMPINES AVE 7',
                    "LOYANG AVE",
                    'AIRLINE RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "19",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'AIRLINE RD',
                    'LOYANG AVE',
                    'TAMPINES AVE 7'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    20: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "20",
                destination: "TAMPINES INT-CHANGI BIZ PK",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES AVE 2",
                    "SIMEI ST 1",
                    "CHANGI STH AVE 2",
                    'CHANGI BIZ PK CTRL 2',
                    'TAMPINES AVE 2',
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    21: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "21",
                destination: "> ST. MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 7",
                    'BEDOK RESERVOIR RD',
                    'GEYLANG RD',
                    'BOON KENG RD',
                    'MOULMEIN RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "21",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MOULMEIN RD",
                    'BOON KENG RD',
                    'SIMS AVE',
                    'BEDOK RESERVIOR RD',
                    'TAMPINES AVE 7'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    22: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "22",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "SERANGOON CTRL",
                    "UPPER PAYA LEBAR RD",
                    "UBI AVE 2",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "22",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 4",
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    "UPPER PAYA LEBAR RD",
                    "SERANGOON CTRL",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    23: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "23",
                destination: "TAMPINES INT-ROCHOR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 1",
                    "BEDOK NORTH RD",
                    "BENDEMEER RD",
                    "SERANGOON RD",
                    "BEDOK NORTH RD",
                    "TAMPINES AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    24: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "24",
                destination: "> CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BOUNDARY RD',
                    'UPPER PAYA LEBAR RD',
                    'SIMS AVE',
                    'NEW UPPER CHANGI RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "24",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'NEW UPPER CHANGI RD',
                    'GEYLANG RD',
                    'UPPER PAYA LEBAR RD',
                    'BOUNDARY RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    25: {
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "25",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI RD",
                    "JALAN EUNOS",
                    "HOUGANG AVE 3",
                    "HOUGANG AVE 2",
                    "ANG MO KIO AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "25",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 3",
                    "HOUGANG AVE 2, 3",
                    "JALAN EUNOS",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    26: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "26",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'NEW UPPER CHANGI RD',
                    'GEYLANG RD',
                    'KALLANG BAHRU',
                    'JALAN TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "26",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JALAN TOA PAYOH',
                    'KALLANG BAHRU',
                    'SIMS AVE',
                    'NEW UPPER CHANGI RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    27: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "27",
                destination: "> CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HOUGANG AVE 10, 6',
                    'SENGKANG CTRL',
                    'COMPASSVALE RD',
                    'TAMPINES AVE 10, 9, 7, 4, 5',
                    'AIRPORT BOULEVARD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "27",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'AIRPORT BOULEVARD',
                    'TAMPINES AVE 5, 4, 7, 9, 10',
                    'COMPASSVALE RD',
                    'SENGKANG CTRL',
                    'HOUGANG AVE 6, 10',
                    ''
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    28: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "28",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 9, 2',
                    'NEW UPP CHANGI RD',
                    'PAYA LEBAR RD',
                    'BRADDELL RD',
                    'TOA PAYOH LOR 4, 6'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "28",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TOA PAYOH LOR 6, 4',
                    'BRADDELL RD',
                    'PAYA LEBAR RD',
                    'NEW UPP CHANGI RD',
                    'TAMPINES AVE 2, 9'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    29: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "29",
                destination: "TAMP INT-CHANGI VILLAGE",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES AVE 9",
                    "OLD TAMPINES RD",
                    "UPPER CHANGI RD NORTH",
                    "NETHERAVON RD",
                    "CHANGI VILLAGE RD",
                    "NETHERAVON RD",
                    "UPPER CHANGI RD NORTH",
                    "OLD TAMPINES RD",
                    "TAMPINES AVE 9"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    30: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "30",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COPORATION DR",
                    "WEST COAST RD",
                    "PASIR PANJANG RD",
                    "TELOK BLANGAH RD",
                    "KEPPEL RD",
                    "OLD AIRPORT RD",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "30",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI RD",
                    'TANJONG KATONG RD',
                    'OLD AIRPORT RD',
                    'KEPPEL RD',
                    'TELOK BLANGAH RD',
                    'PASIR PANJANG RD',
                    'WEST COAST RD',
                    'CORPORATION RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "30E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "30e",
                image: "express",
                destination: "EXPRESS 30e"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "30e",
                image: "express",
                destination: "EXPRESS 30e"
            }
        }
    },
    31: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "31",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SIMEI AVE',
                    'BEDOK SOUTH AVE 1',
                    'MARINE PARADE RD',
                    'DUNMAN RD',
                    'SERANGOON RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "31",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BENDEMEER RD',
                    'DUNMAN RD',
                    'MARINE PARADE RD',
                    'BEDOK SOUTH AVE 1',
                    'SIMEI AVE'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    32: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "32",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'EAST COAST RD',
                    'NORTH BRIDGE RD',
                    'RIVER VALLEY RD',
                    'MARGARET DRIVE',
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "32",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MARGARET DR',
                    'RIVER VALLEY RD',
                    'VICTORIA ST',
                    'EASST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    33: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "33",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'OLD AIRPORT RD',
                    'VICTORIA ST',
                    'TIONG BAHRU RD',
                    'AYE'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "33",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'AYE',
                    'TIONG BAHRU RD',
                    'VICTORIA ST',
                    'OLD AIRPORT RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    35: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "35",
                destination: "> ALPS AVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "NEW UPPER CHANGI RD",
                    "XILIN AVE",
                    "TANAH MERAH FERRY RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "35",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TANAH MERAH FERRY RD",
                    "XILIN AVE",
                    "NEW UPPER CHANGI RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "35M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "35M",
                destination: "> T.MERAH FERRY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'NEW UPP CHANGI RD',
                    'XILIN AVE'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "35M",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'XILIN AVE',
                    'NEW UPP CHANGI RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    37: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "37",
                destination: "TAMP INT-CHANGI NTH CRES",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES AVE 7",
                    "UPPER CHANGI RD NORTH",
                    "CHANGI NORTH ST 1"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    38: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "38",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 7, 2',
                    'SIMEI ST 1, 3, 4',
                    'NEW UPP CHANGI RD',
                    'BEDOK SOUTH AVE 3',
                    'BEDOK SOUTH RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "38",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK SOUTH RD',
                    'BEDOK SOUTH AVE 3',
                    'NEW UPP CHANGI RD',
                    'SIMEI ST 4, 3, 1',
                    'TAMPINES AVE 2, 7'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    39: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "39",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 2",
                    'PASIR RIS DR 1',
                    "JALAN KAYU",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "39",
                destination: "> TAMPINES CONCOURSE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN AVE 2",
                    "JALAN KAYU",
                    "PASIR RIS DR 1",
                    "TAMPINES AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
    },
    40: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "40",
                destination: "BEDOK INT-MERPATI RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SIGLAP RD',
                    'TANJONG KATONG RD',
                    'MACPHERSON EST',
                    'SIMS AVE'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    42: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "42",
                destination: "JLN KEMBANGAN-FIDELIO ST",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LENGKOK TIGA',
                    'LENGKOK EMPAT',
                    'FIDELIO ST',
                    'SIGLAP DR',
                    'FRANKEL AVE'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    45: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "45",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 10',
                    'SERANGOON AVE 2',
                    'LOR AH SOO',
                    'EUNOS LINK',
                    'BEDOK NORTH RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "45",
                destination: "> ANG MO KIO DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK NORTH RD',
                    'EUNOS LINK',
                    'LOR AH SOO',
                    'SERANGOON AVE 2',
                    'ANG MO KIO AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    46: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "46",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 3",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH RD",
                    "BEDOK SOUTH AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "46",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK SOUTH AVE 3",
                    "BEDOK NORTH RD",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    47: {},
    48: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "48",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK SOUTH AVE 3',
                    'UPP EAST COAST RD',
                    'MARINE PARADE RD',
                    'BUKIT TIAMH RD',
                    'FARRER RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "48",
                destination: "> BEDOK NTH DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'FARRER RD',
                    'DUNEARN RD',
                    'MARINE PARADE RD',
                    'UPP EAST COAST RD',
                    'BEDOK SOTUH AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    50: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: "> PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "ANG MO KIO AVE 5",
                    "YIO CHU KANG RD",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST WAY",
                    "PUNGGOL DR"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL DR",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST AVE",
                    "YIO CHU KANG RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    51: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "51",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'EUNOS LINK',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'ALEXANDRA RD',
                    'WEST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "51",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'WEST COAST RD',
                    'ALEXANDRA RD',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'EUNOS LINK'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    52: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "52",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SIN MING AVE',
                    'UPP THOMSON AVE',
                    'CLEMENTI RD',
                    "C'WEALTH AVE WEST",
                    'TOH GUAN RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "52",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TOH GUAN RD',
                    "C'WEALTH AVE WEST",
                    'CLEMENTI RD',
                    'UPP THOMSON RD',
                    'SIN MING AVE'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    53: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: "> CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BISHAN RD",
                    "SERANGOON CENTRAL",
                    "LOR AH SOO",
                    "HOUGANG AVE 1",
                    "PASIR RIS DR 1"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR RIS DR 1",
                    "HOUGANG AVE 1",
                    "LOR AH SOO",
                    "SERANGOON CENTRAL",
                    "BISHAN RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "53M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53M",
                destination: "HOUGANG AVE 1-S'GOON CTRL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "HOUGANG AVE 1",
                    "LOR AH SOO",
                    "SERANGOON CENTRAL",
                    "LOR AH SOO",
                    "HOUGANG AVE 1"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    54: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "54",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'MARYMOUNT RD',
                    'THOMSON RD',
                    'NEWTON RD',
                    'SCOTTS RD',
                    'RIVER VALLEY RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "54",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'RIVER VALLEY RD',
                    'SCOTTS RD',
                    'NEWTON RD',
                    'THOMSON RD',
                    'MARYMOUNT RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    55: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "55",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 10',
                    'HOUGANG AVE 2',
                    'HOUGANG AVE 3',
                    'JALAN EUNOS',
                    'STILL ROAD SOUTH',
                    'MARINE PARADE RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "55",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MARINE PARADE RD',
                    'STILL ROAD SOUTH',
                    'JALAN EUNOS',
                    'HOUGANG AVE 3',
                    'HOUGANG AVE 2',
                    'ANG MO KIO AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    56: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "56",
                destination: "> MARINA CTR TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BISHAN ST 13",
                    "LOR 6 TOA PAYOH",
                    "THOMSON RD",
                    "BUKIT TIMAH RD",
                    "MIDDLE RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "56",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MIDDLE RD',
                    'BUKIT TIMAH RD',
                    'THOMSON RD',
                    'LOR 6 TOA PAYOH',
                    'BISHAN ST 13'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
    },
    57: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "57",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'THOMSON RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'DEPOT RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "57",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'DEPOT RD',
                    'TELOK BLANGAH RD',
                    'CECIL ST',
                    'THOMSON RD',
                    'LOR 6 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    58: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "58",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SERANGOON AVE 3',
                    'SERANGOON AVE 2',
                    'UPP PAYA LEBAR RD',
                    'UBI AVE 3',
                    'KAKI BUKIT AVE 1',
                    'TAMPINES AVE 10',
                    'PASIR RIS DR 12, 3',
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "58",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'PASIR RIS DR 3, 12',
                    'TAMPINES AVE 10',
                    'KAKI BUKIT AVE 1',
                    'UBI AVE 3',
                    'UPP PAYA LEBAR RD',
                    'SERANGOON AVE 2',
                    'SERANGOON AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    59: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE",
                    "TAMPINES AVE 2",
                    "BEDOK RESERVOIR RD",
                    "KAKI BUKIT AVE 1",
                    "LOR 1 TOA PAYOH"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: "> CHANGI VILLAGE TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "LOR 1 TOA PAYOH",
                    "KAKI BUKIT AVE 1",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 2",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    60: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "60",
                destination: "> BEDOK",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JALAN EUNOS',
                    'BEDOK RESERVIOR RD',
                    'BEDOK NTH RD',
                    'BEDOK RESERVIOR RD',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    63: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "63",
                destination: "> JALAN RUMAH TINGGI",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UBI AVE 1',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'UPPER CROSS ST',
                    'TIONG BAHRU RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "63",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TIONG BAHRU RD',
                    'EU TONG SEN ST',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'UBI AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "63M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "> CIRCUIT RD (LOOP)",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UBI AVE 1',
                    'UBI AVE 2',
                    'JALAN EUNOS',
                    'CIRCUIT RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    64: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: "> MEI LING ST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ALJUNIED RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "CLEMANCEAU AVE",
                    "TIONG BAHRU RD",
                    "STIRLING RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: "> SIMS PLACE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ALEXANDRA RD",
                    "TIONG BAHRU RD",
                    "CLEMANCEAU AVE",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "ALJUNIED RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    65: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "65",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    "MACPHERSON RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "ORCHARD BOULEVARD",
                    "LOWER DELTA RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "65",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOWER DELTA RD",
                    "ORCHARD RD",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "MACPHERSON RD",
                    "UBI AVE 2",
                    "BEDOK RESERVOIR RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
    },
    69: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "69",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 5',
                    'TAMPINES AVE 8',
                    'TAMPINES AVE 1',
                    'BEDOK RESERVIOR RD',
                    'BEDOK NTH AVE 3',
                    'BEDOK NTH ST 1'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "69",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NTH AVE 3',
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 1',
                    'TAMPINES AVE 8',
                    'TAMPINES AVE 5'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    70: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "70",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO ST 63',
                    'ANG MO KIO ST 64',
                    'UPP PAYA LEBAR RD',
                    'GUILLEMARD RD',
                    'COLLYER QUAY'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "70",
                destination: "> YIO CHU KANG TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ROBINSON RD',
                    'GUILLEMARD RD',
                    'UPP PAYA LEBAR RD',
                    'ANG MO KIO ST 64',
                    'ANG MO KIO ST 63'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "70M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "70M",
                destination: "YCK INT-MARINA CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO ST 63',
                    'ANG MO KIO ST 64',
                    'YIO CHU KANG RD',
                    'UPP PAYA LEBAR RD',
                    'TEMASAK AVE'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    71: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "71",
                destination: "YCK INT-BISHAN ST 11",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 4",
                    "ANG MO KIO AVE 1",
                    "BISHAN RD",
                    "BRADDELL RD",
                    "BISHAN RD",
                    "ANG MO KIO AVE 1",
                    "ANG MO KIO AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    72: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "72",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 5",
                    "HOUGANG AVE 9",
                    "HOUGANG CENTRAL",
                    "TAMPINES RD",
                    "TAMPINES AVE 10",
                    "TAMPINES AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "72",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 9",
                    "TAMPINES AVE 10",
                    "TAMPINES RD",
                    "HOUGANG CENTRAL",
                    "HOUGANG AVE 9",
                    "ANG MO KIO AVE 5"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    73: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "73",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SERANGOON NORTH AVE 4',
                    'SERANGOON GARDEN WAY',
                    'LOR CHUAN',
                    'BRADDELL RD',
                    'LOR 4 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "73",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LOR 4 TOA PAYOH',
                    'BRADDELL RD',
                    'LOR CHUAN',
                    'SERANGOON GARDEN WAY',
                    'SERANGOON NORTH AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    74: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "74",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 3',
                    'ADAM RD',
                    'CLEMENTI RD',
                    'DOVER AVE'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "74",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'DOVER AVE',
                    'CLEMENTI RD',
                    'ADAM RD',
                    'ANG MO KIO AVE 3',
                    'HOUGANG AVE 8'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    76: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3',
                    'YIO CHU KANG RD',
                    'UPP PAYA LEBAR RD',
                    'TANJONG KATONG RD',
                    'MARINE PARADE RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'UPP PAYA LEBAR RD',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    80: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "80",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'UPP SERANGOON RD',
                    'UPP PAYA LEBAR RD',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'KEPPEL RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "80",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'KEPPEL RD',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'UPP PAYA LEBAR RD',
                    'UPP SERANGOON RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    81: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "81",
                destination: "TAMPINES INT-S'GOON CTRL",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 7",
                    "PASIR RIS DR 1",
                    "TAMPINES RD",
                    "UPP SERANGOON RD",
                    "TAMPINES RD",
                    "PASIR RIS DR 1",
                    "TAMPINES AVE 7",
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    86: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "86",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'COMPASSVALE RD',
                    'RIVERVALE DR',
                    'JALAN KAYU',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 6'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "86",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ANG MO KIO AVE 6',
                    'YIO CHU KANG RD',
                    'JALAN KAYU',
                    'RIVERVALE DR',
                    'COMPASSVALE RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    87: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'COMPASSVALE RD',
                    'HOUGANG AVE 10, 5, 7, 3',
                    'EUNOS LINK',
                    'KAKI BUKIT AVE 1',
                    'BEDOK NTH RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NTH RD',
                    'KAKI BUKIT AVE 1',
                    'EUNOS LINK',
                    'HOUGANG AVE 3, 5, 7, 10',
                    'COMPASSVALE RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    88: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'PASIR RIS DR 3',
                    'PUNGGOL RD',
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 5',
                    'BISHAN ST 22'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BISHAN ST 22',
                    'ANG MO KIO AVE 5',
                    'HOUGANG AVE 8',
                    'PUNGGOL RD',
                    'PASIR RIS DR 3'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    89: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "89",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HOUGANG AVE 10",
                    "COMPASSVALE RD",
                    "PASIR RIS DR 1",
                    "PASIR RIS DR 3",
                    "LOYANG AVE",
                    "AIRLINE RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "89",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'AIRLINE RD',
                    'LOYANG AVE',
                    'PASIR RIS DR 3',
                    'PASIR RIS DR 1',
                    'COMPASSVALE RD',
                    'HOUGANG AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    90: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "90",
                destination: "EUNOS INT-AIRPORT RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "LOR 6 TOA PAYOH",
                    "JALAN TOA PAYOH",
                    "MACPHERSON RD",
                    "AIRPORT RD"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    91: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "91",
                destination: "BUONA VISTA TER-AYER RAJAH C.",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'COMMONWEALTH AVE',
                    'NORTH BUONA VISTA RD',
                    'AYER RAJAH AVE',
                    'AYER RAJAH CRES',
                    'AYER RAJAH AVE',
                    'NORTH BUONA VISTA RD'
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    92: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "92",
                destination: "GHIM MOH TER-SCIENCE PK DR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'NORTH BUONA VISTA RD',
                    'BUONA VISTA FLYOVER',
                    'SCIENCE PK DR',
                    'BUONA VISTA FLYOVER',
                    'NORTH BUONA VISTA RD',
                    'MOUNT SINAI RD',
                    'MOUNT SINAI DR',
                    'MOUNT SINAI RISE'
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    93: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ALEXANDRA RD',
                    'FARRER RD',
                    'BRADDELL RD',
                    'BARTLEY RD',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JALAN EUNOS',
                    'BARTLEY RD',
                    'BRADDELL RD',
                    'FARRER RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    94: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "94",
                destination: "EUNOS INT-AIRPORT RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'JALAN EUNOS',
                    'EUNOS LINK',
                    'AIRPORT RD',
                    'PAYA LEBAR AIRPORT',
                    'AIRPORT RD',
                    'EUNOS LINK',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    95: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "95",
                destination: "KENT RIDGE TER-HOLLAND RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'KENT RIDGE CRESCENT',
                    "NORTH BUONA VISTA RD",
                    "HOLLAND AVE",
                    'NORTH BUONA VISTA RD',
                    'KENT RIDGE CRESENT'
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    //TODO CHECK 95B
    99: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "99",
                destination: "> JOO KOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 91",
                    "UPPER JURONG RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "99",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPP JURONG RD",
                    "JURONG WEST ST 91",
                    "JURONG WEST AVE 4",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    100: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "100",
                destination: "> GHIM MOH TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ALJUNIED RD',
                    'BEACH RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "100",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TELOK BLANGAH RD',
                    'ROBINSON RD',
                    'BEACH RD',
                    'ALJUNIED RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "101",
                destination: "S'GOON INT-BUANGKOK LINK",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPPER SERANGOON RD",
                    "HOUGANG CENTRAL",
                    "HOUGANG AVE 8",
                    "HOUGANG ST 51",
                    "BUANGKOK LINK",
                    "HOUGANG ST 51",
                    "HOUGANG AVE 8",
                    "HOUGANG CENTRAL",
                    "UPPER SERANGOON RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "102",
                destination: "HOUGANG-SELETAR A'SPACE",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "UPPER SERANGOON RD",
                    "BUANGKOK DR",
                    "COMPASSVALE DR",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST WAY",
                    "SELETAR A'SPACE DR"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    103: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN CENTRAL",
                    "WEST CAMP RD",
                    "SELETAR AEROSPACE DR",
                    "JALAN KAYU",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YIO CHU KANG RD",
                    "JALAN KAYU",
                    "SELETAR AEROSPACE DR",
                    "WEST CAMP RD",
                    "YISHUN CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    105: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SERANGOON AVE 3',
                    'TOA PAYOH CTRL',
                    'STEVENS RD',
                    'HOLLAND RD',
                    "COMMONWEALTH AVE WEST",
                    'TOH GUAN RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TOH GUAN RD',
                    "COMMONWEALTH AVE WEST",
                    'HOLLAND RD',
                    'STEVEN RD',
                    'TOA PAYOH CTRL',
                    'SERANGOON AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    107: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "107",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HOUGANG AVE 10",
                    "UPPER SERANGOON RD",
                    "KALLANG BAHRU",
                    "LAVENDER ST",
                    "BEACH RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "107",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BEACH RD",
                    "LAVENDER ST",
                    "KALLANG BAHRU",
                    "UPPER SERANGOON RD",
                    "HOUGANG AVE 10"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "107M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "107M",
                destination: "HOUGANG INT-MARINA CTR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'UPPER SERANGOON RD',
                    'KALLANG BAHRU',
                    'BEACH RD',
                    'TEMASAK BOULEVARD',
                    'KALLANG BAHRU'
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    109: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "109",
                destination: "> CHANGI VILLAGE TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 9",
                    "SENGKANG EAST RD",
                    "PASIR RIS DR 1",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "109",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE",
                    "PASIR RIS DR 1",
                    "SENGKANG EAST RD",
                    "HOUGANG AVE 9",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "111",
                destination: "GHIM MOH TER-TAMASEK AVE",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "COMMONWEALTH AVE",
                    "TANGLIN RD",
                    "ORCHARD RD",
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "TANGLIN RD",
                    "COMMONWEALTH AVE"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    112: {//TODO FONTS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "112",
                destination: "HOUGANG CTRL INT-HOUGANG ST 92",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'HOUGANG AVE 7',
                    'TAMPINES RD',
                    'HOUGANG AVE 2',
                    'HOUGANG AVE 9'
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    113: {//TODO SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "113",
                destination: "HOUGANG CTRL INT-UPP PAYA LEBAR",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'HOUGANG ST 21',
                    'HOUGANG AVE 10',
                    'LOR AH SOO'
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    115: {// TODO:  SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "115",
                destination: "HOUGANG CTRL INT-HOUGANG AVE 3",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'HOUGANG AVE 1'
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    116: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "116",
                destination: "HOUGANG CTRL INT-S'GOON CTRL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'HOUGANG AVE 4',
                    'HOUGANG AVE 9',
                    "S'GOON NORTH AVE 4",
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 3',
                    'SERANGOON CTRL'
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    117: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117",
                destination: "> SEMBAWANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'PUNGGOL WAY',
                    "SELETAR A'SPACE DR",
                    'YISHUN AVE 2',
                    'SEMBAWANG WAY'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "117",
                destination: "> PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SEMBAWANG WAY',
                    'YISHUN AVE 1',
                    "SELETAR A'SPACE CR",
                    'PUNGGOL WAY'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    120: { //todo font
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "120",
                destination: "KG BAHRU TER-T.BLANGAH HTS",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH RD",
                    "ALEXANDRA RD",
                    "TIONG BAHRU RD"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    121: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "121",
                destination: "KG.BAHRU TER-TK.BLANGAH",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "GANGES AVE",
                    "TIONG BAHRU RD",
                    "KIM TIAN RD",
                    "LOWER DELTA RD",
                    "TELOK BLANGAH RISE",
                    "LOWER DELTA RD",
                    "KIM TIAN RD",
                    "TIONG BAHRU RD",
                    "GANGES AVE"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    122: { // TODO: scroll font
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "122",
                destination: "KG.BAHRU TER-C'WEALTH DR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'QUEENSWAY'
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    123: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: "> SENTOSA",
                destinationFont: "LECIP-10",
                scrolls: [
                    "QUEENSWAY",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "HAVELOCK RD",
                    "TIONG BAHRU RD",
                    "LOWER DELTA RD",
                    "BUKIT PURMEI AVE"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD",
                    "TIONG BAHRU RD",
                    "HAVELOCK RD",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "QUEENSWAY"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "123M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123M",
                destination: "BUKIT MERAH INT-BUKIT PURMEI AVE",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'BUKIT PURMEI AVE',
                    'LOWER DELTA RD',
                    'TIONG BAHRU RD',
                    'LOWER DELTA RD',
                    'BUKIT PURMEI AVE'
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    124: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "NEW BRIDGE RD",
                    "KAMPONG BAHRU RD",
                    "TELOK BLANGAH HTS",
                    "MOULMEIN RD",
                    "ORCHARD RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH WAY",
                    "EU TONG SEN ST",
                    "ORCHARD TURN",
                    "MOULMEIN RD",
                    "TELOK BLANGAH WAY",
                    "KAMPONG BAHRU RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    125: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "125",
                destination: "> SIMS DRIVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BALESTIER RD',
                    'SERANGOON RD',
                    'KALLANG WAY',
                    'ALJUNIED RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "125",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ALJUNIED RD',
                    'KALLANG WAY',
                    'BENDEMEER RD',
                    'BALESTIER RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    127: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "127",
                destination: "TAMP INT-TAMP IND AVE 5",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES CONCOURSE",
                    "TAMPINES AVE 9, 10",
                    "TAMPINES IND AVE 5",
                    "TAMPINES RD"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    128: {// TODO: SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "128",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BISHAN RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "128",
                destination: "> ANG MO KIO DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 8'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    129: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BALESTIER RD",
                    "LOR 1 TOA PAYOH",
                    "BRADDELL RD",
                    "TAMPINES AVE 1",
                    "TAMPINES AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: "> ST. MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 1",
                    "BRADDELL RD",
                    "LOR 1 TOA PAYOH",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    130: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "130",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SIN MING RD',
                    'BALESTIER RD',
                    'JALAN BESAR',
                    'SHENTON WAY'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "130",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ROBINSON RD',
                    'SERANGOON RD',
                    'BALESTIER RD',
                    'SIN MING RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    131: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "131",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'THOMSON RD',
                    'OWEN RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'BUKIT PURMEI AVE'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "131",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BUKIT PURMEI AVE',
                    'TELOK BLANGAH RD',
                    'CECIL ST',
                    'OWEN RD',
                    'THOMSON RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "131M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "131M",
                destination: "BUKIT MERAH INT-BUKIT PURMEI",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'JALAN BUKIT MERAH',
                    'LOWER DELTA RD',
                    'BUKIT PURMEI AVE',
                    'LOWER DELTA RD',
                    'JALAN BUKIT MERAH'
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    132: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "132",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'UPP THOMSON RD',
                    'STEVENS RD',
                    'TANGLIN RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "132",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'TANGLIN RD',
                    'STEVENS RD',
                    'UPP THOMSON RD',
                    'ANG MO KIO AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    133: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "133",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 1',
                    'SERANGOON AVE 2',
                    'BENDEMEER RD',
                    'VICTORIA ST',
                    'BAYFRON AVE'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "133",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BAYFRONT AVE',
                    'VICTORIA ST',
                    'SERANGOON RD',
                    'SERANGOON AVE 2',
                    'ANG MO KIO AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    135: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: "> SIGLAP RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SERANGOON AVE 2',
                    'UPP ALJUNIED RD',
                    'MACPHERSON EST',
                    'TANJONG KATONG RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TANJONG KANTONG RD',
                    'MACPHERSON EST',
                    'UPP ALJUNIED RD',
                    'SERANGOON AVE 2'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    138: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "138",
                destination: "> SINGAPORE ZOO",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3, 6, 5',
                    'YIO CHU KANG RD',
                    'UPP THOMSON RD',
                    'MANDAI RD',
                    'MANDAI LAKE RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "138",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MANDAI LAKE RD',
                    'MANDAI RD',
                    'UPP THOMSON RD',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 5, 6, 3'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    139: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "139",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ST MICHAEL'S EST",
                    'BALESTIER RD',
                    'BENCOOLEN ST',
                    'RIVER VALLEY RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "139",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ALEXANDRA RD',
                    'RIVER VALLEY RD',
                    'SELEGIE RD',
                    'BALESTIER RD',
                    "ST MICHAEL'S EST"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    140: {//CHECK SCROLL FONT
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "140",
                destination: "LOR 1 GEYLANG TER-ST WILFRED ST",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'GEYLANG BAHRU'
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    141: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "141",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LAVENDER ST',
                    'JALAN BESAR',
                    'RANGOON RD',
                    'THOMSON RD',
                    'LOR 1 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "141",
                destination: "> LOR 1 GEYLANG TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 1 TOA PAYOH',
                    'THOMSON RD',
                    'RANGOON RD',
                    'SERANGOON RD',
                    'LAVENDER ST'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    142: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "142",
                destination: "TOA PAYOH INT-POTONG P. AVE 1",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'JLN TOA PAYOH',
                    'UPP SERANGOON RD',
                    'POTONG PASIR AVE 1, 3, 2'
                ],
                scrollFont: "LECIP-6:4"
            }
        },
    },
    145: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "145",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BALESTIER RD',
                    'NTH BRIDGE RD',
                    'KEPPEL RD',
                    'HENDERSON RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "145",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HENDERSON RD',
                    'KEPPEL RD',
                    'VICTORIA ST',
                    'BALESTIER RD'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    147: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "147",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HOUGANG AVE 8, 2',
                    'SERANGOON CTRL',
                    'BENCOOLEN ST',
                    'VICTORA ST',
                    'JLN BUKIT MERAH'
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "147",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'JLN BUKIT MERAH',
                    'VICTORIA ST',
                    'PRINSEP ST',
                    'SERANGOON CTRL',
                    'HOUGANG AVE 2, 8'
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "147E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "147e",
                image: "express",
                destination: "EXPRESS 147e"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "147e",
                image: "express",
                destination: "EXPRESS 147e"
            }
        }
    },
    154: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "154",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PAYA LEBAR RD",
                    "JALAN TOA PAYOH",
                    "BUKIT TIMAH RD",
                    "CLEMENTI RD",
                    "C'WEALTH AVE WEST",
                    "AYE",
                    "YUAN CHING RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "154",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YUAN CHIN RD",
                    "AYE",
                    "COMMONWEALTH AVE WEST",
                    "CLEMENTI RD",
                    "DUNEARN RD",
                    "JALAN TOA PAYOH",
                    "PAYA LEBAR RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    156: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ULU PANDAN RD",
                    "SIXTH AVE",
                    "DUNEARN RD",
                    "THOMSON RD",
                    "BISHAN RD",
                    "YIO CHU KANG RD",
                    "BUANGKOK GREEN",
                    "SENGKANG EAST RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    157: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "157",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1",
                    "BUKIT BATOK EAST AVE 3",
                    "JALAN JURONG KECHIL",
                    "DUNEARN RD",
                    "LORNIE RD",
                    "BRADDELL RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "157",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BRADDELL RD",
                    "LORNIE RD",
                    "BUKIT TIMAH RD",
                    "JALAN JURONG KECHIL",
                    "BUKIT BATOK EAST AVE 3",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    161: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "161",
                destination: "> WOODLANDS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "HOUGANG AVE 8",
                    "HOUGANG AVE 4",
                    "SENGKANG EAST RD",
                    "SENGKANG EAST WAY",
                    "WOODLANDS AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "161",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "WOODLANDS AVE 2",
                    "SENGKANG EAST WAY",
                    "SENGKANG EAST RD",
                    "HOUGANG AVE 4",
                    "HOUGANG AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    163: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "163",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOR 4 TOA PAYOH",
                    "LOR 6 TOA PAYOH",
                    "BRADDELL RD",
                    "UPPER THOMSON RD",
                    "YIO CHU KANG RD",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST AVE"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "163",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SENGKANG EAST AVE",
                    "SENGKANG WEST AVE",
                    "YIO CHU KANG RD",
                    "UPPER THOMSON RD",
                    "BRADDELL RD",
                    "LOR 6 TOA PAYOH",
                    "LOR 4 TOA PAYOH"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    168: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "168",
                destination: "> WOODLANDS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH AVE 3",
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 10",
                    "JALAN KAYU",
                    "WOODLANDS AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "168",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "WOODLANDS AVE 2",
                    "JALAN KAYU",
                    "TAMPINES AVE 10",
                    "TAMPINES AVE 4",
                    "BEDOK NORTH AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    174: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "EU TONG SEN ST",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "FARRER RD",
                    "BT TIMAH RD",
                    "JLN JURONG KECHIL",
                    "BT BATOK E. AVE 6, 3"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BT BATOK E. AVE 3, 6",
                    "JLN JURONG KECHIL",
                    "DUNEARN RD",
                    "FARRER RD",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "NTH, STH BRIDGE RD",
                    "NTH BRIDGE RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "174E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "174e",
                image: "express",
                destination: "EXPRESS 174e"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "174e",
                image: "express",
                destination: "EXPRESS 174e"
            }
        }
    },
    179: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179",
                destination: "BOON LAY INT-NTU",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG WEST ST 63",
                    "PIONEER RD NORTH",
                    "LIEN YING CHOW DR",
                    "NANYANG DR"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "179A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179A",
                destination: "BOON LAY INT-NANYANG DR",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "NANYANG DR",
                    "PIONEER RD NTH"
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    181: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "181",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 64"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    182: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182",
                destination: "JOO KOON INT-TUAS STH",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TUAS STH AVE 3",
                    "JALAN AHMAD IBRAHIM",
                    "TUAS STH AVE 3",
                    "TUAS STH AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "182M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182M",
                destination: "JOO KOON INT-TUAS STH",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JALAN AHMAD IBRAHIM"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    186: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "186",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BALESTIER RD",
                    "FARRER RD",
                    "QUEENSWAY",
                    "ALEXANDRA RD",
                    "HAVELOCK RD",
                    "UPPER PICKERING ST"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "186",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPPER PICKERING ST",
                    "HAVELOCK RD",
                    "ALEXANDRA RD",
                    "QUEENSWAY",
                    "FARRER RD",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    192: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 1",
                    "JALAN AHMAD IBRAHIM",
                    "UPP JURONG RD",
                    "JURONG WEST ST 62"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: "> TUAS TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 62",
                    "TUAS AVE 1",
                    "TUAS AVE 12",
                    "PIONEER RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    193: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TUAS WEST DR",
                    "TUAS AVE 9, 5",
                    "TUAS RD",
                    "LOK YANG WAY",
                    "JURONG WEST AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: "> TUAS TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST AVE 4",
                    "LOK YANG WAY",
                    "TUAS RD",
                    "TUAS AVE 5, 9",
                    "TUAS WEST DR"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    194: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "194",
                destination: "BOON LAY INT-JALAN AHMAD IBRAHIM",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "JALAN AHMAD IBRAHIM"
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    "196E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "196e",
                image: "express",
                destination: "EXPRESS 196e"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "196e",
                image: "express",
                destination: "EXPRESS 196e"
            }
        }
    },
    198: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "198",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "QUEENSWAY",
                    "AYE",
                    "JURONG TOWN HALL RD",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "BOON LAY AVE"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    200: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "200",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR PANJANG RD",
                    "STH BUONA VISTA RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "200",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "201",
                destination: "KENT RIDGE TER-PANDAN GDNS",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "C'WEALTH AVE WEST"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    228: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "228",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH ST 1",
                    "BEDOK NORTH AVE 3",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    240: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "240",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN AHMAD IBRAHIM",
                    "KANG CHING RD",
                    "YUAN CHING RD",
                    "BOON LAY PLACE",
                    "BOON LAY WAY"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "240M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "240M",
                destination: "BOON LAY WY-JUR W.64",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "JURONG W ST 64"
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    241: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "241",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 63",
                    "PIONEER RD NORTH",
                    "JURONG WEST ST 91"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    242: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "242",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 72",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 4",
                    "JALAN BOON LAY"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "243G": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "243G",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 81",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 62"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "243W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "243W",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 62",
                    "JURONG WEST AVE 4",
                    "JURONG WEST AVE 5",
                    "JURONG WEST ST 81",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 64"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    246: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "246",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YUAN CHING RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    247: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "247",
                destination: "TUAS TER-TUAS BAY LINK",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TUAS AVE 7",
                    "TUAS CRES",
                    "TUAS STH AVE 5&4&7",
                    "TUAS STH AVE 3&9&8",
                    "TUAS LINK 4"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    248: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "248",
                destination: "TUAS TER-TUAS STH AVE 14",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 20",
                    "TUAS STH AVE 5",
                    "TUAS STH AVE 9",
                    "TUAS STH AVE 10"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    249: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "249",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN BOON LAY",
                    "JURONG PIER RD",
                    "TANJONG KLING RD",
                    "SHIPYARD RD",
                    "JALAN SAMULUN",
                    "SHIPYARD RD",
                    "TANJONG KLING RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    251: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "251",
                destination: "BOON LAY INT-SHIPYARD RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "BOON LAY WAY",
                    "PIONEER RD NTH",
                    "SHIPYARD RD",
                    "PIONEER RD NTH"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    252: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "252",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JOO KOON CIRCLE",
                    "ENTERPRISE RD",
                    "INTERNATIONAL RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    253: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "253",
                destination: "JOO KOON INT-BENOI RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PIONEER RD",
                    "BENOI RD",
                    "PIONEER RD",
                    "BENOI SECTOR"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    254: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "254",
                destination: "JOO KOON INT-TUAS AVE 11",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TUAS RD",
                    "TUAS BASIN LINK",
                    "BENOI RD",
                    "PIONEER RD"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    255: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "255",
                destination: "JOO KOON INT-GUL CRES",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "GUL AVE",
                    "GUL CIRCLE",
                    "GUL CRES"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    256: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "256",
                destination: "BOON LAY INT-JOO KOON",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG WEST ST 62",
                    "PIONEER RD NTH",
                    "JOO KOON CIRCLE",
                    "PIONEER RD NTH",
                    "JURONG WEST ST 62",
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    257: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "257",
                destination: "JOO KOON INT-PIONEER SEC 2",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PIONEER SECT. 2",
                    "PIONEER SECT. 1",
                    "BENOI RD",
                    "GUL RD"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    258: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "258",
                destination: "JOO KOON INT-JUR W. ST 64",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PIONEER RD NTH",
                    "JURONG WEST ST 61, 81, 75",
                    "JALAN AHMAD IBRAHIM"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    291: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "291",
                destination: "> TAMPINES ST 83 & 33",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES ST 83",
                    "TAMPINES ST 81",
                    "TAMPINES ST 21",
                    "TAMPINES ST 32",
                    "TAMPINES ST 21"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    292: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "292",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES AVE 2",
                    "TAMPINES ST 22",
                    "TAMPINES AVE 2",
                    "TAMPINES ST 11"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    293: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "293",
                destination: "> TAMPINES ST 71&AVE 7",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES ST 45&42",
                    "TAMPINES AVE 4&3",
                    "TAMPINES AVE 8&9"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    371: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "371",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COMPASSVALE RD",
                    "RIVERVALE DR",
                    "RIVERVALE CRES",
                    "COMPASSVALE ST"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    374: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "374",
                destination: "> COMPASSVALE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SENGKANG EAST WAY",
                    "ANCHORVALE CRES",
                    "COMPASSVALE RD",
                    "SENGKANG EAST WAY",
                    "FERNVALE RD"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    405: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405",
                destination: "BOON LAY INT-OLD CCK RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JALAN BAHAR",
                    "OLD CHOA CHU KANG RD",
                    "JALAN BAHAR",
                    "JALAN BOON LAY",
                    "JURONG WEST CENTRAL 1"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    "410W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "410W",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BISHAN ST 22",
                    "SIN MING AVE",
                    "UPPER THOMSON RD",
                    "SHUNFU RD",
                    "BISHAN ST 21",
                    "BISHAN ST 12",
                    "BISHAN ST 14"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "502": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "502",
                image: "express",
                destination: "EXPRESS 502"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "502",
                image: "express",
                destination: "EXPRESS 502"
            }
        }
    },
    "506": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "506",
                image: "express",
                destination: "EXPRESS 506"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "506",
                image: "express",
                destination: "EXPRESS 506"
            }
        }
    },
    "513": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "513",
                image: "express",
                destination: "EXPRESS 513"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "513",
                image: "express",
                destination: "EXPRESS 513"
            }
        }
    },
    609: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "DTL",
                destination: "> CHINATOWN",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BUKIT PANJANG",
                    "CASHEW",
                    "HILLVIEW",
                    "BEAUTY WORLD",
                    "KING ALBERT PARK",
                    "SIXTH AVENUE",
                    "TAN KAH KEE",
                    "BOTANIC GARDENS",
                    "STEVENS",
                    "NEWTON",
                    "LITTLE INDIA",
                    "ROCHOR",
                    "BUGIS",
                    "PROMENADE",
                    "BAYFRONT",
                    "DOWNTOWN",
                    "TELOK AYER"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "DTL",
                destination: "> BUKIT PANJANG",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "CHINATOWN",
                    "TELOK AYER",
                    "DOWNTOWN",
                    "BAYFRONT",
                    "PROMENADE",
                    "BUGIS",
                    "ROCHOR",
                    "LITTLE INDIA",
                    "NEWTON",
                    "STEVENS",
                    "BOTANIC GARDENS",
                    "TAN KAH KEE",
                    "SIXTH AVENUE",
                    "KING ALBERT PARK",
                    "BEAUTY WORLD",
                    "HILLVIEW",
                    "CASHEW"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    800: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "800",
                destination: "YISHUN INT-SEMBAWANG RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 7",
                    "SEMBAWANG RD",
                    "YISHUN ST 71",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    803: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "803",
                destination: "YISHUN INT-YISHUN AVE 6",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 6"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    804: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "804",
                destination: "YISHUN INT-YISHUN AVE 11",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 2",
                    "YISHUN RING RD",
                    "YISHUN ST 41",
                    "YISHUN AVE 1",
                    "YISHUN AVE 11",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    805: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "805",
                destination: "YISHUN INT-YISHUN AVE 1",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 2",
                    "YISHUN AVE 4",
                    "YISHUN AVE 1",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    806: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "806",
                destination: "YISHUN INT-YISHUN AVE 6",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN CENTRAL",
                    "YISHUN AVE 11",
                    "YISHUN AVE 6",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    807: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "807",
                destination: "YISHUN INT-YISHUN ST 71",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN RING RD",
                    "YISHUN AVE 9",
                    "YISHUN RING RD",
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "YISHUN ST 71"
                ],
                scrollFont: "LECIP-6:4"
            }
        }
    },
    811: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "811",
                destination: "> YISHUN AVE 5&1",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN AVE 9,6,7",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5,2",
                    "YISHUN RING RD",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    812: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "812",
                destination: "> YISHUN AVE 4&3",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN ST 61",
                    "YISHUN AVE 2",
                    "YISHUN RING RD",
                    "YISHUN CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    851: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TIONG BAHRU RD",
                    "VICTORIA ST",
                    "THOMSON RD",
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 6",
                    "LENTOR AVE",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    "851E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "851e",
                image: "express",
                destination: "EXPRESS 851e"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "851e",
                image: "express",
                destination: "EXPRESS 851e"
            }
        }
    },
    852: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "852",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BUKIT BATOK E. AVE 6",
                    "UPP BUKIT TIMAH RD",
                    "DUNEARN RD",
                    "LORNIE RD",
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 6",
                    "LENTOR AVE",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "852",
                destination: "> BUKIT BATOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN AVE 2",
                    "LENTOR AVE",
                    "ANG MO KIO AVE 6",
                    "LORNIE RD",
                    "BUKIT TIMAH RD",
                    "UPP BUKIT TIMAH RD",
                    "BUKIT BATOK E. AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    860: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "860",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN RING RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",
                    "YISHUN AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "860",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPPER THOMSON RD",
                    "ANG MO KIO AVE 5",
                    "YISHUN RING RD",
                    "YISHUN AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "LECIP-20:12",
                spacing: 3
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "logo",
                text: "SBS TRANSIT",
                image: "logo"
            }
        }
    },
    3333: {
        1: {
            front: {
                renderType: "message",
                text: "FREE SHUTTLE",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    4444: {
        1: {
            front: {
                renderType: "message",
                text: "ON TEST",
                font: "LECIP-20:12",
                spacing: 3
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "TRAINING BUS",
                font: "LECIP-20:12",
                spacing: 3
            }
        }
    },
    7777: {
        1: {
            front: {
                renderType: "message",
                text: "FREE BRIDGING BUS",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    9999: {
        1: {
            front: {
                renderType: "message",
                text: "VER. 1234567890-18",
                font: "LECIP-14",
                spacing: 1
            }
        }
    },
}

EDSImages.SBST = {
    logo: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ],
    express: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
        [ 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ],
    fastForward: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ]
    ]
}
