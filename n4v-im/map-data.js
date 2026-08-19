window.ITTINA = {
  "meta": {
    "project": "Ittina Mahavir",
    "location": "Electronic City Phase I, Bengaluru, Karnataka, India",
    "version": "v0.1 reconstructed massing model",
    "source_basis": [
      "Ittina Mahavir sales brochure, Oct 2011",
      "Published project area: approximately 10 acres"
    ],
    "calibration": {
      "assumed_site_area_acres": 10.0,
      "assumed_site_area_m2": 40468.56,
      "render_scale_m_per_pixel": 0.17393159,
      "method": "site-polygon area calibration from brochure raster",
      "accuracy_warning": "Not a survey. Brochure artwork may be non-linear/not-to-scale."
    },
    "uncertainties": [
      "Brochure master plan visibly labels 15 residential blocks: A-I and K-P; J is not visible.",
      "Some public listings describe 16 towers, so tower/block count is unresolved.",
      "Block footprints here are coarse massing envelopes, not exact wall polygons.",
      "All building heights are assumed; no elevation/floor-to-floor dimension was found in the brochure.",
      "Site dimensions are calibrated from the advertised 10-acre project area, not a cadastral survey."
    ],
    "known_structure_notes": {
      "structural_system": "RCC framed structure",
      "external_wall": "8 inch concrete block",
      "internal_wall": "4 inch concrete solid block",
      "elevators_per_block": 2,
      "parking": "basement parking for residents; external visitor parking"
    },
    "unit_types_from_brochure": {
      "2BHK_867": {
        "bedrooms": 2,
        "living_area_sqft": 787,
        "super_builtup_sqft": 867
      },
      "2BHK_919": {
        "bedrooms": 2,
        "living_area_sqft": 832,
        "super_builtup_sqft": 919
      },
      "3BHK_1159": {
        "bedrooms": 3,
        "living_area_sqft": 1072,
        "super_builtup_sqft": 1159
      },
      "3BHK_1103": {
        "bedrooms": 3,
        "living_area_sqft": 1016,
        "super_builtup_sqft": 1103
      },
      "3BHK_1143": {
        "bedrooms": 3,
        "living_area_sqft": 943,
        "super_builtup_sqft": 1143
      },
      "2BHK_1175": {
        "bedrooms": 2,
        "living_area_sqft": 962,
        "super_builtup_sqft": 1175
      },
      "2BHK_DUPLEX_1150": {
        "bedrooms": 2,
        "living_area_sqft": 962,
        "super_builtup_sqft": 1150
      },
      "1BHK_814": {
        "bedrooms": 1,
        "living_area_sqft": 734,
        "super_builtup_sqft": 814
      },
      "1BHK_568": {
        "bedrooms": 1,
        "living_area_sqft": 488,
        "super_builtup_sqft": 568
      },
      "1BHK_589": {
        "bedrooms": 1,
        "living_area_sqft": 488,
        "super_builtup_sqft": 589
      },
      "STUDIO_607": {
        "bedrooms": 0,
        "living_area_sqft": 506,
        "super_builtup_sqft": 607
      },
      "STUDIO_589": {
        "bedrooms": 0,
        "living_area_sqft": 488,
        "super_builtup_sqft": 589
      },
      "STUDIO_586": {
        "bedrooms": 0,
        "living_area_sqft": 506,
        "super_builtup_sqft": 586
      },
      "STUDIO_575": {
        "bedrooms": 0,
        "living_area_sqft": 474,
        "super_builtup_sqft": 575
      },
      "STUDIO_568": {
        "bedrooms": 0,
        "living_area_sqft": 488,
        "super_builtup_sqft": 568
      },
      "STUDIO_554": {
        "bedrooms": 0,
        "living_area_sqft": 474,
        "super_builtup_sqft": 554
      },
      "STUDIO_408": {
        "bedrooms": 0,
        "living_area_sqft": 404,
        "super_builtup_sqft": 408
      }
    },
    "georeference": {
      "method": "affine fit of brochure site pentagon to OSM campus corners",
      "control_rmse_m": 4.49,
      "control_max_m": 6.28
    },
    "stats": {
      "blocks": 15,
      "amenities": 7,
      "advertised_acres": 10,
      "advertised_units": 1024,
      "modeled_units": 972,
      "modeled_levels": 6,
      "modeled_height_m": 18
    }
  },
  "center": [
    77.6482849125,
    12.83994365
  ],
  "campus": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6492796,
                12.8411492
              ],
              [
                77.6478958,
                12.8415265
              ],
              [
                77.6476657,
                12.8407916
              ],
              [
                77.6474726,
                12.8396697
              ],
              [
                77.6478029,
                12.8387234
              ],
              [
                77.6483846,
                12.8391885
              ],
              [
                77.6487762,
                12.8392434
              ],
              [
                77.6490019,
                12.8392569
              ],
              [
                77.6492796,
                12.8411492
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-campus",
          "name": "Ittina Mahavir Apartments",
          "kind": "campus"
        }
      }
    ]
  },
  "reconstructedSite": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6478320173057,
                12.838688723985417
              ],
              [
                77.64747992423837,
                12.839691509772509
              ],
              [
                77.64786929421905,
                12.84152705456291
              ],
              [
                77.64931957587913,
                12.841132522809934
              ],
              [
                77.64895198835774,
                12.839285888869233
              ],
              [
                77.6478320173057,
                12.838688723985417
              ]
            ]
          ]
        },
        "properties": {
          "id": "brochure-site",
          "name": "Brochure site outline",
          "kind": "site"
        }
      }
    ]
  },
  "blocks": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64770235437203,
                12.838895304938152
              ],
              [
                77.64800148069163,
                12.838813221559315
              ],
              [
                77.6481547829105,
                12.839455055899846
              ],
              [
                77.64785565659089,
                12.839537139278683
              ],
              [
                77.64770235437203,
                12.838895304938152
              ]
            ]
          ]
        },
        "properties": {
          "id": "H",
          "name": "Block H",
          "plan_family": "typical",
          "notes": "west/mid horizontal block",
          "levels": 5,
          "height": 15.0,
          "units": 60,
          "perFloor": 12,
          "color": "#c48445",
          "east_extent_m": 33.92,
          "north_extent_m": 69.57,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64782020118336,
                12.839388697212575
              ],
              [
                77.64811932750297,
                12.839306613833738
              ],
              [
                77.64825539782083,
                12.839876302931449
              ],
              [
                77.64795627150124,
                12.839958386310286
              ],
              [
                77.64782020118336,
                12.839388697212575
              ]
            ]
          ]
        },
        "properties": {
          "id": "I",
          "name": "Block I",
          "plan_family": "typical",
          "notes": "west/mid horizontal block",
          "levels": 5,
          "height": 15.0,
          "units": 60,
          "perFloor": 12,
          "color": "#dcb888",
          "east_extent_m": 33.92,
          "north_extent_m": 61.75,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64750561177301,
                12.839552782418105
              ],
              [
                77.64780932375552,
                12.839469440685583
              ],
              [
                77.64796800268006,
                12.84013378581799
              ],
              [
                77.64766429069755,
                12.840217127550513
              ],
              [
                77.64750561177301,
                12.839552782418105
              ]
            ]
          ]
        },
        "properties": {
          "id": "K",
          "name": "Block K",
          "plan_family": "typical",
          "notes": "northwest horizontal block",
          "levels": 5,
          "height": 15.0,
          "units": 60,
          "perFloor": 12,
          "color": "#b07038",
          "east_extent_m": 34.44,
          "north_extent_m": 72.01,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64760621970306,
                12.840138248470602
              ],
              [
                77.64802959985057,
                12.840022068546723
              ],
              [
                77.64810509408686,
                12.840338142206441
              ],
              [
                77.64768171393933,
                12.84045432213032
              ],
              [
                77.64760621970306,
                12.840138248470602
              ]
            ]
          ]
        },
        "properties": {
          "id": "L",
          "name": "Block L",
          "plan_family": "typical",
          "notes": "north-central vertical block",
          "levels": 5,
          "height": 15.0,
          "units": 60,
          "perFloor": 12,
          "color": "#e4c696",
          "east_extent_m": 48.01,
          "north_extent_m": 34.26,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64767326677325,
                12.84048740932394
              ],
              [
                77.64809664692078,
                12.84037122940006
              ],
              [
                77.64817214115706,
                12.840687303059777
              ],
              [
                77.64774876100954,
                12.840803482983658
              ],
              [
                77.64767326677325,
                12.84048740932394
              ]
            ]
          ]
        },
        "properties": {
          "id": "M",
          "name": "Block M",
          "plan_family": "typical",
          "notes": "north-central vertical block",
          "levels": 5,
          "height": 15.0,
          "units": 60,
          "perFloor": 12,
          "color": "#c98d4c",
          "east_extent_m": 48.01,
          "north_extent_m": 34.26,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6476753415645,
                12.840766367869024
              ],
              [
                77.64809713436716,
                12.840650623529115
              ],
              [
                77.64816996228629,
                12.840955534050238
              ],
              [
                77.64774816948362,
                12.841071278390148
              ],
              [
                77.6476753415645,
                12.840766367869024
              ]
            ]
          ]
        },
        "properties": {
          "id": "N",
          "name": "Block N",
          "plan_family": "typical",
          "notes": "north-east vertical block",
          "levels": 5,
          "height": 15.0,
          "units": 60,
          "perFloor": 12,
          "color": "#f0dcc0",
          "east_extent_m": 47.83,
          "north_extent_m": 33.05,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6477635390827,
                12.840937151859716
              ],
              [
                77.64806566372036,
                12.840854245711162
              ],
              [
                77.64822357139613,
                12.841515361836537
              ],
              [
                77.64792144675847,
                12.841598267985091
              ],
              [
                77.6477635390827,
                12.840937151859716
              ]
            ]
          ]
        },
        "properties": {
          "id": "O",
          "name": "Block O",
          "plan_family": "typical",
          "notes": "northeast horizontal block",
          "levels": 5,
          "height": 15.0,
          "units": 60,
          "perFloor": 12,
          "color": "#a5642c",
          "east_extent_m": 34.26,
          "north_extent_m": 71.66,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64816247922192,
                12.839333258632518
              ],
              [
                77.64845393337471,
                12.839253280576193
              ],
              [
                77.64857274975593,
                12.83975073217374
              ],
              [
                77.64828129560313,
                12.839830710230066
              ],
              [
                77.64816247922192,
                12.839333258632518
              ]
            ]
          ]
        },
        "properties": {
          "id": "G",
          "name": "Block G",
          "plan_family": "typical",
          "notes": "west/south-central horizontal block",
          "levels": 5,
          "height": 15.0,
          "units": 60,
          "perFloor": 12,
          "color": "#e8d2ae",
          "east_extent_m": 33.05,
          "north_extent_m": 53.92,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64842900119964,
                12.839439625627689
              ],
              [
                77.64886613833592,
                12.839319670642755
              ],
              [
                77.64898112050898,
                12.839801069462489
              ],
              [
                77.6485439833727,
                12.839921024447424
              ],
              [
                77.64842900119964,
                12.839439625627689
              ]
            ]
          ]
        },
        "properties": {
          "id": "F",
          "name": "Block F",
          "plan_family": "typical",
          "notes": "southwest irregular envelope",
          "levels": 6,
          "height": 18.0,
          "units": 72,
          "perFloor": 12,
          "color": "#a86c32",
          "east_extent_m": 49.57,
          "north_extent_m": 52.18,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64848895981484,
                12.839896015386238
              ],
              [
                77.64892609695112,
                12.839776060401304
              ],
              [
                77.6490015911874,
                12.840092134061022
              ],
              [
                77.64856445405113,
                12.840212089045956
              ],
              [
                77.64848895981484,
                12.839896015386238
              ]
            ]
          ]
        },
        "properties": {
          "id": "E",
          "name": "Block E",
          "plan_family": "typical",
          "notes": "south-central vertical block",
          "levels": 5,
          "height": 15.0,
          "units": 60,
          "perFloor": 12,
          "color": "#d4a66a",
          "east_extent_m": 49.57,
          "north_extent_m": 34.26,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64853261653249,
                12.84024304233379
              ],
              [
                77.64896666716487,
                12.840123934317683
              ],
              [
                77.64904216140116,
                12.840440007977401
              ],
              [
                77.64860811076878,
                12.840559115993509
              ],
              [
                77.64853261653249,
                12.84024304233379
              ]
            ]
          ]
        },
        "properties": {
          "id": "D",
          "name": "Block D",
          "plan_family": "typical",
          "notes": "south-central vertical block",
          "levels": 5,
          "height": 15.0,
          "units": 60,
          "perFloor": 12,
          "color": "#b87d3d",
          "east_extent_m": 49.22,
          "north_extent_m": 34.26,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64860622244699,
                12.840489641604142
              ],
              [
                77.64904335958326,
                12.840369686619209
              ],
              [
                77.64909126514942,
                12.84057025408454
              ],
              [
                77.64865412801315,
                12.840690209069473
              ],
              [
                77.64860622244699,
                12.840489641604142
              ]
            ]
          ]
        },
        "properties": {
          "id": "C",
          "name": "Block C",
          "plan_family": "typical",
          "notes": "narrow south-central block",
          "levels": 5,
          "height": 15.0,
          "units": 40,
          "perFloor": 8,
          "color": "#e0c49a",
          "east_extent_m": 49.57,
          "north_extent_m": 21.74,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64805765640226,
                12.840796526614916
              ],
              [
                77.64835828188089,
                12.84071403185122
              ],
              [
                77.64846636688642,
                12.841166554122358
              ],
              [
                77.6481657414078,
                12.841249048886054
              ],
              [
                77.64805765640226,
                12.840796526614916
              ]
            ]
          ]
        },
        "properties": {
          "id": "P",
          "name": "Block P",
          "plan_family": "P",
          "notes": "special U/courtyard plan, 16 positions shown",
          "levels": 5,
          "height": 15.0,
          "units": 80,
          "perFloor": 16,
          "color": "#d2a060",
          "east_extent_m": 34.09,
          "north_extent_m": 49.05,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6484025402336,
                12.840701051312697
              ],
              [
                77.64870316571222,
                12.840618556549002
              ],
              [
                77.6488116253243,
                12.841072647194984
              ],
              [
                77.64851099984567,
                12.84115514195868
              ],
              [
                77.6484025402336,
                12.840701051312697
              ]
            ]
          ]
        },
        "properties": {
          "id": "A",
          "name": "Block A",
          "plan_family": "A",
          "notes": "special U/courtyard plan, 16 positions shown",
          "levels": 5,
          "height": 15.0,
          "units": 80,
          "perFloor": 16,
          "color": "#d7b07a",
          "east_extent_m": 34.09,
          "north_extent_m": 49.22,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64870491530702,
                12.840646338889018
              ],
              [
                77.64902705812703,
                12.840557939542647
              ],
              [
                77.64918802876218,
                12.841231879438805
              ],
              [
                77.64886588594217,
                12.841320278785178
              ],
              [
                77.64870491530702,
                12.840646338889018
              ]
            ]
          ]
        },
        "properties": {
          "id": "B",
          "name": "Block B",
          "plan_family": "B",
          "notes": "special wide plan, 20 positions shown",
          "levels": 5,
          "height": 15.0,
          "units": 100,
          "perFloor": 20,
          "color": "#c99555",
          "east_extent_m": 36.53,
          "north_extent_m": 73.05,
          "kind": "block"
        }
      }
    ]
  },
  "amenities": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64812599357838,
                12.840035774354305
              ],
              [
                77.64832538172949,
                12.839981060168117
              ],
              [
                77.64838287281603,
                12.840221759577984
              ],
              [
                77.64818348466491,
                12.840276473764172
              ],
              [
                77.64812599357838,
                12.840035774354305
              ]
            ]
          ]
        },
        "properties": {
          "id": "badminton_court",
          "name": "Badminton court",
          "height": 0.25,
          "color": "#3d8bfd",
          "kind": "court"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64835607227198,
                12.839955533439001
              ],
              [
                77.64850175525545,
                12.839915556510393
              ],
              [
                77.64856691475829,
                12.840188361475889
              ],
              [
                77.6484212317748,
                12.840228338404497
              ],
              [
                77.64835607227198,
                12.839955533439001
              ]
            ]
          ]
        },
        "properties": {
          "id": "basketball_court",
          "name": "Basketball court",
          "height": 0.25,
          "color": "#1f6feb",
          "kind": "court"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64821607566785,
                12.840310243612501
              ],
              [
                77.64836943081814,
                12.840268161361381
              ],
              [
                77.64846140774232,
                12.84065324351423
              ],
              [
                77.64830805259203,
                12.84069532576535
              ],
              [
                77.64821607566785,
                12.840310243612501
              ]
            ]
          ]
        },
        "properties": {
          "id": "swimming_pool",
          "name": "Swimming pool",
          "height": 0.45,
          "color": "#2ec4d6",
          "kind": "water"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6484595480701,
                12.840422984803432
              ],
              [
                77.64862057538718,
                12.840378797229802
              ],
              [
                77.64865506122483,
                12.840523179972784
              ],
              [
                77.64849403390774,
                12.840567367546415
              ],
              [
                77.6484595480701,
                12.840422984803432
              ]
            ]
          ]
        },
        "properties": {
          "id": "clubhouse_gym",
          "name": "Clubhouse / gym",
          "height": 7.5,
          "color": "#8b6a4a",
          "kind": "building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64842793788856,
                12.84029064164381
              ],
              [
                77.64858896520565,
                12.84024645407018
              ],
              [
                77.64862153393922,
                12.840382810424256
              ],
              [
                77.64846050662213,
                12.840426997997886
              ],
              [
                77.64842793788856,
                12.84029064164381
              ]
            ]
          ]
        },
        "properties": {
          "id": "grocery_coffee_shop",
          "name": "Grocery & coffee shop",
          "height": 4.5,
          "color": "#9a734f",
          "kind": "building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.64849405969393,
                12.84053324892562
              ],
              [
                77.64865508701102,
                12.840489061351988
              ],
              [
                77.64868957284867,
                12.840633444094971
              ],
              [
                77.64852854553158,
                12.840677631668603
              ],
              [
                77.64849405969393,
                12.84053324892562
              ]
            ]
          ]
        },
        "properties": {
          "id": "children_play_area",
          "name": "Children's play area",
          "height": 0.35,
          "color": "#3fa66b",
          "kind": "play"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6481681524745,
                12.839767729950898
              ],
              [
                77.64844426229367,
                12.839691962539595
              ],
              [
                77.6485017533802,
                12.839932661949463
              ],
              [
                77.64822564356102,
                12.840008429360765
              ],
              [
                77.6481681524745,
                12.839767729950898
              ]
            ]
          ]
        },
        "properties": {
          "id": "open_air_theatre",
          "name": "Open-air theatre",
          "height": 2.4,
          "color": "#6b8f71",
          "kind": "amenity"
        }
      }
    ]
  },
  "labels": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64792856864126,
            12.839175180419
          ]
        },
        "properties": {
          "id": "H",
          "name": "H",
          "label": "Block H",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6480377995021,
            12.839632500072012
          ]
        },
        "properties": {
          "id": "I",
          "name": "I",
          "label": "Block I",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64773680722654,
            12.839843284118048
          ]
        },
        "properties": {
          "id": "K",
          "name": "K",
          "label": "Block K",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64785565689496,
            12.840238195338522
          ]
        },
        "properties": {
          "id": "L",
          "name": "L",
          "label": "Block L",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64792270396516,
            12.84058735619186
          ]
        },
        "properties": {
          "id": "M",
          "name": "M",
          "label": "Block M",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6479226519254,
            12.84086095095963
          ]
        },
        "properties": {
          "id": "N",
          "name": "N",
          "label": "Block N",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64799355523942,
            12.841226256848126
          ]
        },
        "properties": {
          "id": "O",
          "name": "O",
          "label": "Block O",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64836761448892,
            12.83954199540313
          ]
        },
        "properties": {
          "id": "G",
          "name": "G",
          "label": "Block G",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64870506085431,
            12.83962034754509
          ]
        },
        "properties": {
          "id": "F",
          "name": "F",
          "label": "Block F",
          "height": 18.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64874527550111,
            12.83999407472363
          ]
        },
        "properties": {
          "id": "E",
          "name": "E",
          "label": "Block E",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64878738896682,
            12.840341525155596
          ]
        },
        "properties": {
          "id": "D",
          "name": "D",
          "label": "Block D",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6488487437982,
            12.840529947844342
          ]
        },
        "properties": {
          "id": "C",
          "name": "C",
          "label": "Block C",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64826201164435,
            12.840981540368638
          ]
        },
        "properties": {
          "id": "P",
          "name": "P",
          "label": "Block P",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64860708277895,
            12.840886849253842
          ]
        },
        "properties": {
          "id": "A",
          "name": "A",
          "label": "Block A",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64894647203461,
            12.840939109163912
          ]
        },
        "properties": {
          "id": "B",
          "name": "B",
          "label": "Block B",
          "height": 15.0,
          "kind": "block"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64825443319721,
            12.840128766966144
          ]
        },
        "properties": {
          "id": "badminton_court",
          "name": "Badminton court",
          "label": "Badminton court",
          "height": 0.25,
          "kind": "amenity"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64846149351513,
            12.840071947457444
          ]
        },
        "properties": {
          "id": "basketball_court",
          "name": "Basketball court",
          "label": "Basketball court",
          "height": 0.25,
          "kind": "amenity"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64833874170509,
            12.840481743563366
          ]
        },
        "properties": {
          "id": "swimming_pool",
          "name": "Swimming pool",
          "label": "Swimming pool",
          "height": 0.45,
          "kind": "amenity"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64855730464745,
            12.840473082388108
          ]
        },
        "properties": {
          "id": "clubhouse_gym",
          "name": "Clubhouse / gym",
          "label": "Clubhouse / gym",
          "height": 7.5,
          "kind": "amenity"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64852473591388,
            12.840336726034034
          ]
        },
        "properties": {
          "id": "grocery_coffee_shop",
          "name": "Grocery & coffee shop",
          "label": "Grocery & coffee shop",
          "height": 4.5,
          "kind": "amenity"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64859181627129,
            12.840583346510295
          ]
        },
        "properties": {
          "id": "children_play_area",
          "name": "Children's play area",
          "label": "Children's play area",
          "height": 0.35,
          "kind": "amenity"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.64833495292734,
            12.83985019595018
          ]
        },
        "properties": {
          "id": "open_air_theatre",
          "name": "Open-air theatre",
          "label": "Open-air theatre",
          "height": 2.4,
          "kind": "amenity"
        }
      }
    ]
  },
  "neighbors": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6492803,
                12.8416362
              ],
              [
                77.6494031,
                12.8416333
              ],
              [
                77.6494012,
                12.8415595
              ],
              [
                77.6492784,
                12.8415625
              ],
              [
                77.6492803,
                12.8416362
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506180",
          "osmId": 259506180,
          "name": "OSM building 259506180",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6493408,
          "lat": 12.8415979,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6482775,
                12.838416
              ],
              [
                77.6483946,
                12.8383954
              ],
              [
                77.6483794,
                12.8383131
              ],
              [
                77.6482623,
                12.8383336
              ],
              [
                77.6482775,
                12.838416
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506182",
          "osmId": 259506182,
          "name": "OSM building 259506182",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6483284,
          "lat": 12.8383645,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6473845,
                12.8411734
              ],
              [
                77.6475778,
                12.8411312
              ],
              [
                77.6475437,
                12.8409825
              ],
              [
                77.6473503,
                12.8410246
              ],
              [
                77.6473845,
                12.8411734
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506190",
          "osmId": 259506190,
          "name": "OSM building 259506190",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6474641,
          "lat": 12.8410779,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6496297,
                12.8416722
              ],
              [
                77.6498102,
                12.8416769
              ],
              [
                77.649813,
                12.841573
              ],
              [
                77.6496325,
                12.8415684
              ],
              [
                77.6496297,
                12.8416722
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506194",
          "osmId": 259506194,
          "name": "OSM building 259506194",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6497214,
          "lat": 12.8416226,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.648978,
                12.8387733
              ],
              [
                77.6488674,
                12.8388003
              ],
              [
                77.6488885,
                12.8388826
              ],
              [
                77.6489991,
                12.8388557
              ],
              [
                77.648978,
                12.8387733
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506201",
          "osmId": 259506201,
          "name": "OSM building 259506201",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6489333,
          "lat": 12.838828,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6477112,
                12.8414308
              ],
              [
                77.647838,
                12.8414118
              ],
              [
                77.6478217,
                12.8413086
              ],
              [
                77.6476949,
                12.8413276
              ],
              [
                77.6477112,
                12.8414308
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506203",
          "osmId": 259506203,
          "name": "OSM building 259506203",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6477665,
          "lat": 12.8413697,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6496338,
                12.8418384
              ],
              [
                77.6494972,
                12.8418417
              ],
              [
                77.6494995,
                12.8419319
              ],
              [
                77.6496361,
                12.8419286
              ],
              [
                77.6496338,
                12.8418384
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506214",
          "osmId": 259506214,
          "name": "OSM building 259506214",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6495666,
          "lat": 12.8418851,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6496157,
                12.8414473
              ],
              [
                77.6497836,
                12.8414433
              ],
              [
                77.6497794,
                12.8413427
              ],
              [
                77.6496128,
                12.8413453
              ],
              [
                77.6496157,
                12.8414473
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506217",
          "osmId": 259506217,
          "name": "OSM building 259506217",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6496977,
          "lat": 12.8413947,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6494165,
                12.8418975
              ],
              [
                77.6492921,
                12.8419005
              ],
              [
                77.6492936,
                12.841963
              ],
              [
                77.649418,
                12.84196
              ],
              [
                77.6494165,
                12.8418975
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506223",
          "osmId": 259506223,
          "name": "OSM building 259506223",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.649355,
          "lat": 12.8419303,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6493986,
                12.8417812
              ],
              [
                77.649291,
                12.8417838
              ],
              [
                77.6492931,
                12.8418672
              ],
              [
                77.6494007,
                12.8418646
              ],
              [
                77.6493986,
                12.8417812
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506227",
          "osmId": 259506227,
          "name": "OSM building 259506227",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6493459,
          "lat": 12.8418242,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6489607,
                12.838691
              ],
              [
                77.6490848,
                12.8386638
              ],
              [
                77.6490676,
                12.8385889
              ],
              [
                77.6489434,
                12.8386162
              ],
              [
                77.6489607,
                12.838691
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506248",
          "osmId": 259506248,
          "name": "OSM building 259506248",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6490141,
          "lat": 12.83864,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.647507,
                12.8415276
              ],
              [
                77.6476491,
                12.8414956
              ],
              [
                77.6476292,
                12.8414118
              ],
              [
                77.6475629,
                12.8414267
              ],
              [
                77.6475333,
                12.8413023
              ],
              [
                77.6475896,
                12.8412896
              ],
              [
                77.6475712,
                12.8412121
              ],
              [
                77.6474392,
                12.8412419
              ],
              [
                77.647507,
                12.8415276
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506259",
          "osmId": 259506259,
          "name": "OSM building 259506259",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6475334,
          "lat": 12.8413747,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6489703,
                12.8414575
              ],
              [
                77.6487776,
                12.8414971
              ],
              [
                77.6488851,
                12.8419931
              ],
              [
                77.6484994,
                12.8420725
              ],
              [
                77.6484054,
                12.8416392
              ],
              [
                77.6482331,
                12.8416747
              ],
              [
                77.6483722,
                12.8422713
              ],
              [
                77.6491589,
                12.842092
              ],
              [
                77.6489703,
                12.8414575
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506260",
          "osmId": 259506260,
          "name": "OSM building 259506260",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6487181,
          "lat": 12.8419184,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.647617,
                12.841902
              ],
              [
                77.6477454,
                12.8417711
              ],
              [
                77.6480433,
                12.842049
              ],
              [
                77.6479149,
                12.8421799
              ],
              [
                77.647617,
                12.841902
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-338949139",
          "osmId": 338949139,
          "name": "Ajmera Avenue",
          "height": 63.0,
          "color": "#6d6a66",
          "lon": 77.6478302,
          "lat": 12.8419755,
          "levels": 20,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6496753,
                12.8418325
              ],
              [
                77.6498334,
                12.8418263
              ],
              [
                77.6498298,
                12.8417394
              ],
              [
                77.6496717,
                12.8417456
              ],
              [
                77.6496753,
                12.8418325
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-347476383",
          "osmId": 347476383,
          "name": "OSM building 347476383",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6497526,
          "lat": 12.841786,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6498102,
                12.8416769
              ],
              [
                77.6496297,
                12.8416722
              ],
              [
                77.6496325,
                12.8415684
              ],
              [
                77.649813,
                12.841573
              ],
              [
                77.6498102,
                12.8416769
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-398453611",
          "osmId": 398453611,
          "name": "SVR Orchid",
          "height": 12.6,
          "color": "#6d6a66",
          "lon": 77.6497214,
          "lat": 12.8416226,
          "levels": 4,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6471845,
                12.8419651
              ],
              [
                77.6473685,
                12.841975
              ],
              [
                77.6473756,
                12.8418502
              ],
              [
                77.6471915,
                12.8418403
              ],
              [
                77.6471845,
                12.8419651
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-626908026",
          "osmId": 626908026,
          "name": "OSM building 626908026",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.64728,
          "lat": 12.8419076,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6473909,
                12.8421064
              ],
              [
                77.6474099,
                12.841843
              ],
              [
                77.6475158,
                12.8418503
              ],
              [
                77.6474968,
                12.8421136
              ],
              [
                77.6473909,
                12.8421064
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-626908027",
          "osmId": 626908027,
          "name": "OSM building 626908027",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6474533,
          "lat": 12.8419783,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6493622,
                12.839866
              ],
              [
                77.6496617,
                12.8398178
              ],
              [
                77.6495782,
                12.8393233
              ],
              [
                77.6492787,
                12.8393714
              ],
              [
                77.6493622,
                12.839866
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258294",
          "osmId": 1275258294,
          "name": "OSM building 1275258294",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6494702,
          "lat": 12.8395946,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6494894,
                12.8406924
              ],
              [
                77.6497929,
                12.8406437
              ],
              [
                77.6497074,
                12.8401379
              ],
              [
                77.649404,
                12.8401866
              ],
              [
                77.6494894,
                12.8406924
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258295",
          "osmId": 1275258295,
          "name": "OSM building 1275258295",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6495984,
          "lat": 12.8404152,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6472198,
                12.8416076
              ],
              [
                77.6473258,
                12.8415873
              ],
              [
                77.6472849,
                12.841384
              ],
              [
                77.6471789,
                12.8414043
              ],
              [
                77.6472198,
                12.8416076
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258299",
          "osmId": 1275258299,
          "name": "OSM building 1275258299",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6472523,
          "lat": 12.8414958,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6473432,
                12.8415834
              ],
              [
                77.6474642,
                12.8415603
              ],
              [
                77.6474237,
                12.8413592
              ],
              [
                77.6473027,
                12.8413824
              ],
              [
                77.6473432,
                12.8415834
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258300",
          "osmId": 1275258300,
          "name": "OSM building 1275258300",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6473835,
          "lat": 12.8414713,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6471937,
                12.8413788
              ],
              [
                77.6473941,
                12.8413404
              ],
              [
                77.647366,
                12.841201
              ],
              [
                77.6471656,
                12.8412394
              ],
              [
                77.6471937,
                12.8413788
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258301",
          "osmId": 1275258301,
          "name": "OSM building 1275258301",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6472799,
          "lat": 12.8412899,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6473519,
                12.8409977
              ],
              [
                77.6475483,
                12.84096
              ],
              [
                77.6475189,
                12.8408139
              ],
              [
                77.6473225,
                12.8408516
              ],
              [
                77.6473519,
                12.8409977
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258302",
          "osmId": 1275258302,
          "name": "OSM building 1275258302",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6474354,
          "lat": 12.8409058,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6473238,
                12.8408296
              ],
              [
                77.6475257,
                12.8407909
              ],
              [
                77.6474961,
                12.840644
              ],
              [
                77.6472941,
                12.8406826
              ],
              [
                77.6473238,
                12.8408296
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258303",
          "osmId": 1275258303,
          "name": "OSM building 1275258303",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6474099,
          "lat": 12.8407368,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6472849,
                12.840674
              ],
              [
                77.6474942,
                12.8406339
              ],
              [
                77.6474652,
                12.8404903
              ],
              [
                77.6472559,
                12.8405304
              ],
              [
                77.6472849,
                12.840674
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258304",
          "osmId": 1275258304,
          "name": "OSM building 1275258304",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6473751,
          "lat": 12.8405821,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6472473,
                12.8405145
              ],
              [
                77.6474485,
                12.840476
              ],
              [
                77.647417,
                12.8403197
              ],
              [
                77.6472158,
                12.8403582
              ],
              [
                77.6472473,
                12.8405145
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258305",
          "osmId": 1275258305,
          "name": "OSM building 1275258305",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6473322,
          "lat": 12.8404171,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6471615,
                12.8412245
              ],
              [
                77.6473683,
                12.8411849
              ],
              [
                77.6473372,
                12.8410303
              ],
              [
                77.6471303,
                12.84107
              ],
              [
                77.6471615,
                12.8412245
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258306",
          "osmId": 1275258306,
          "name": "OSM building 1275258306",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6472493,
          "lat": 12.8411274,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.647128,
                12.8410624
              ],
              [
                77.6473461,
                12.8410206
              ],
              [
                77.6472829,
                12.8407067
              ],
              [
                77.6470647,
                12.8407485
              ],
              [
                77.647128,
                12.8410624
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258307",
          "osmId": 1275258307,
          "name": "OSM building 1275258307",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6472054,
          "lat": 12.8408845,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6470629,
                12.840742
              ],
              [
                77.647273,
                12.8407018
              ],
              [
                77.6472419,
                12.8405478
              ],
              [
                77.6470319,
                12.8405881
              ],
              [
                77.6470629,
                12.840742
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258308",
          "osmId": 1275258308,
          "name": "OSM building 1275258308",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6471524,
          "lat": 12.8406449,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6470294,
                12.8405747
              ],
              [
                77.6472391,
                12.8405345
              ],
              [
                77.647193,
                12.840306
              ],
              [
                77.6469833,
                12.8403461
              ],
              [
                77.6470294,
                12.8405747
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258309",
          "osmId": 1275258309,
          "name": "OSM building 1275258309",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6471112,
          "lat": 12.8404403,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6472178,
                12.8403465
              ],
              [
                77.6474052,
                12.8403106
              ],
              [
                77.6473747,
                12.8401595
              ],
              [
                77.6471874,
                12.8401954
              ],
              [
                77.6472178,
                12.8403465
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258310",
          "osmId": 1275258310,
          "name": "OSM building 1275258310",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6472963,
          "lat": 12.840253,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6469811,
                12.8403373
              ],
              [
                77.6471891,
                12.8402975
              ],
              [
                77.6471736,
                12.8402203
              ],
              [
                77.6469656,
                12.8402601
              ],
              [
                77.6469811,
                12.8403373
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258311",
          "osmId": 1275258311,
          "name": "OSM building 1275258311",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6470774,
          "lat": 12.8402788,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6469523,
                12.8402517
              ],
              [
                77.64717,
                12.84021
              ],
              [
                77.6471407,
                12.8400647
              ],
              [
                77.646923,
                12.8401064
              ],
              [
                77.6469523,
                12.8402517
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258312",
          "osmId": 1275258312,
          "name": "OSM building 1275258312",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6470465,
          "lat": 12.8401582,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6471789,
                12.840183
              ],
              [
                77.647392,
                12.8401422
              ],
              [
                77.6473331,
                12.8398503
              ],
              [
                77.6471201,
                12.8398911
              ],
              [
                77.6471789,
                12.840183
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258313",
          "osmId": 1275258313,
          "name": "OSM building 1275258313",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.647256,
          "lat": 12.8400167,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6468953,
                12.8399235
              ],
              [
                77.6471167,
                12.8398811
              ],
              [
                77.6470857,
                12.8397274
              ],
              [
                77.6468643,
                12.8397698
              ],
              [
                77.6468953,
                12.8399235
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258314",
          "osmId": 1275258314,
          "name": "OSM building 1275258314",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6469905,
          "lat": 12.8398254,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6471246,
                12.8398731
              ],
              [
                77.6473387,
                12.8398321
              ],
              [
                77.6473077,
                12.8396783
              ],
              [
                77.6470936,
                12.8397193
              ],
              [
                77.6471246,
                12.8398731
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258315",
          "osmId": 1275258315,
          "name": "OSM building 1275258315",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6472161,
          "lat": 12.8397757,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6470978,
                12.8397084
              ],
              [
                77.6473032,
                12.839669
              ],
              [
                77.6472735,
                12.8395214
              ],
              [
                77.647068,
                12.8395608
              ],
              [
                77.6470978,
                12.8397084
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258316",
          "osmId": 1275258316,
          "name": "OSM building 1275258316",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6471856,
          "lat": 12.8396149,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6468349,
                12.8395946
              ],
              [
                77.6470643,
                12.8395507
              ],
              [
                77.6470334,
                12.8393972
              ],
              [
                77.646804,
                12.8394411
              ],
              [
                77.6468349,
                12.8395946
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258317",
          "osmId": 1275258317,
          "name": "OSM building 1275258317",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6469341,
          "lat": 12.8394959,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.647075,
                12.8395384
              ],
              [
                77.6472762,
                12.8394999
              ],
              [
                77.6472466,
                12.8393534
              ],
              [
                77.6470455,
                12.8393919
              ],
              [
                77.647075,
                12.8395384
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258318",
          "osmId": 1275258318,
          "name": "OSM building 1275258318",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6471608,
          "lat": 12.8394459,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6470093,
                12.8392135
              ],
              [
                77.6472148,
                12.8391741
              ],
              [
                77.647185,
                12.8390258
              ],
              [
                77.6469794,
                12.8390652
              ],
              [
                77.6470093,
                12.8392135
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258319",
          "osmId": 1275258319,
          "name": "OSM building 1275258319",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6470971,
          "lat": 12.8391196,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6470347,
                12.8393808
              ],
              [
                77.6472511,
                12.8393394
              ],
              [
                77.6472205,
                12.8391873
              ],
              [
                77.6470041,
                12.8392288
              ],
              [
                77.6470347,
                12.8393808
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258320",
          "osmId": 1275258320,
          "name": "OSM building 1275258320",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6471276,
          "lat": 12.8392841,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6467987,
                12.8394312
              ],
              [
                77.647028,
                12.8393873
              ],
              [
                77.6469972,
                12.8392344
              ],
              [
                77.6467679,
                12.8392783
              ],
              [
                77.6467987,
                12.8394312
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258321",
          "osmId": 1275258321,
          "name": "OSM building 1275258321",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6468979,
          "lat": 12.8393328,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6467692,
                12.8392697
              ],
              [
                77.6470029,
                12.8392249
              ],
              [
                77.6469724,
                12.8390736
              ],
              [
                77.6467387,
                12.8391183
              ],
              [
                77.6467692,
                12.8392697
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258322",
          "osmId": 1275258322,
          "name": "OSM building 1275258322",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6468708,
          "lat": 12.8391716,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6469382,
                12.8416691
              ],
              [
                77.6471254,
                12.8416332
              ],
              [
                77.6470864,
                12.8414396
              ],
              [
                77.6468992,
                12.8414755
              ],
              [
                77.6469382,
                12.8416691
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258325",
          "osmId": 1275258325,
          "name": "OSM building 1275258325",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6470123,
          "lat": 12.8415543,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6468946,
                12.8414645
              ],
              [
                77.64709,
                12.841427
              ],
              [
                77.6470555,
                12.8412559
              ],
              [
                77.6468601,
                12.8412933
              ],
              [
                77.6468946,
                12.8414645
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258327",
          "osmId": 1275258327,
          "name": "OSM building 1275258327",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.646975,
          "lat": 12.8413602,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6468584,
                12.841282
              ],
              [
                77.6470638,
                12.8412427
              ],
              [
                77.6470032,
                12.8409421
              ],
              [
                77.6467978,
                12.8409814
              ],
              [
                77.6468584,
                12.841282
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258330",
          "osmId": 1275258330,
          "name": "OSM building 1275258330",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6469308,
          "lat": 12.8411121,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6467907,
                12.8409597
              ],
              [
                77.647002,
                12.8409192
              ],
              [
                77.6469724,
                12.8407721
              ],
              [
                77.646761,
                12.8408126
              ],
              [
                77.6467907,
                12.8409597
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1275258331",
          "osmId": 1275258331,
          "name": "OSM building 1275258331",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6468815,
          "lat": 12.8408659,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6495366,
                12.8382949
              ],
              [
                77.6495656,
                12.8384365
              ],
              [
                77.6496714,
                12.8384159
              ],
              [
                77.6496423,
                12.8382743
              ],
              [
                77.6495366,
                12.8382949
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1286010917",
          "osmId": 1286010917,
          "name": "OSM building 1286010917",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.649604,
          "lat": 12.8383554,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6494393,
                12.8384695
              ],
              [
                77.6495673,
                12.8384445
              ],
              [
                77.6495656,
                12.8384365
              ],
              [
                77.6495366,
                12.8382949
              ],
              [
                77.6494087,
                12.8383198
              ],
              [
                77.6494393,
                12.8384695
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1286010918",
          "osmId": 1286010918,
          "name": "OSM building 1286010918",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.649488,
          "lat": 12.8383822,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6496083,
                12.838593
              ],
              [
                77.6498061,
                12.8385545
              ],
              [
                77.6497768,
                12.8384114
              ],
              [
                77.649579,
                12.83845
              ],
              [
                77.6496083,
                12.838593
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1286010919",
          "osmId": 1286010919,
          "name": "OSM building 1286010919",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6496926,
          "lat": 12.8385022,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.649662,
                12.8389108
              ],
              [
                77.6498709,
                12.8388804
              ],
              [
                77.649847,
                12.8387244
              ],
              [
                77.6496381,
                12.8387548
              ],
              [
                77.649662,
                12.8389108
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1286010920",
          "osmId": 1286010920,
          "name": "OSM building 1286010920",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6497545,
          "lat": 12.8388176,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.649666,
                12.8389297
              ],
              [
                77.6496871,
                12.8390676
              ],
              [
                77.6498893,
                12.8390383
              ],
              [
                77.6498682,
                12.8389003
              ],
              [
                77.649666,
                12.8389297
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1286010921",
          "osmId": 1286010921,
          "name": "OSM building 1286010921",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6497777,
          "lat": 12.838984,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6497156,
                12.839235
              ],
              [
                77.64992,
                12.8392053
              ],
              [
                77.649896,
                12.8390481
              ],
              [
                77.6496916,
                12.8390778
              ],
              [
                77.6497156,
                12.839235
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1286010922",
          "osmId": 1286010922,
          "name": "OSM building 1286010922",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6498058,
          "lat": 12.8391416,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6497512,
                12.8393959
              ],
              [
                77.6499417,
                12.8393682
              ],
              [
                77.6499195,
                12.8392226
              ],
              [
                77.6497289,
                12.8392503
              ],
              [
                77.6497512,
                12.8393959
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1286010923",
          "osmId": 1286010923,
          "name": "OSM building 1286010923",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6498353,
          "lat": 12.8393092,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.649782,
                12.8395639
              ],
              [
                77.6499772,
                12.8395355
              ],
              [
                77.6499523,
                12.839373
              ],
              [
                77.6497572,
                12.8394014
              ],
              [
                77.649782,
                12.8395639
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1286010924",
          "osmId": 1286010924,
          "name": "OSM building 1286010924",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6498672,
          "lat": 12.8394685,
          "levels": 5,
          "kind": "neighbor"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6498082,
                12.8397228
              ],
              [
                77.6499993,
                12.839695
              ],
              [
                77.6499765,
                12.8395456
              ],
              [
                77.6497853,
                12.8395734
              ],
              [
                77.6498082,
                12.8397228
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-1286010925",
          "osmId": 1286010925,
          "name": "OSM building 1286010925",
          "height": 9.0,
          "color": "#6d6a66",
          "lon": 77.6498923,
          "lat": 12.8396342,
          "levels": 5,
          "kind": "neighbor"
        }
      }
    ]
  },
  "osmCampusBuildings": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6486783,
                12.8397131
              ],
              [
                77.6486938,
                12.8397764
              ],
              [
                77.6490194,
                12.8397004
              ],
              [
                77.6489444,
                12.839395
              ],
              [
                77.6488944,
                12.8394067
              ],
              [
                77.6488665,
                12.8393374
              ],
              [
                77.6486282,
                12.8393806
              ],
              [
                77.6486575,
                12.8395464
              ],
              [
                77.6485966,
                12.8395665
              ],
              [
                77.648631,
                12.8397212
              ],
              [
                77.6486783,
                12.8397131
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506167",
          "osmId": 259506167,
          "name": "OSM building 259506167",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6488015,
          "lat": 12.8395613,
          "levels": 5,
          "kind": "campus",
          "blocks": "F",
          "label": "F",
          "blockCount": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6486347,
                12.8400981
              ],
              [
                77.6486471,
                12.8401481
              ],
              [
                77.6489475,
                12.8400777
              ],
              [
                77.6489332,
                12.8400195
              ],
              [
                77.6490203,
                12.8399991
              ],
              [
                77.6489771,
                12.8398238
              ],
              [
                77.6488924,
                12.8398437
              ],
              [
                77.6488759,
                12.8397768
              ],
              [
                77.6485738,
                12.8398475
              ],
              [
                77.6485959,
                12.8399373
              ],
              [
                77.6485289,
                12.839953
              ],
              [
                77.6485685,
                12.8401136
              ],
              [
                77.6486347,
                12.8400981
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506168",
          "osmId": 259506168,
          "name": "OSM building 259506168",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6487698,
          "lat": 12.8399629,
          "levels": 5,
          "kind": "campus",
          "blocks": "E",
          "label": "E",
          "blockCount": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.647777,
                12.8406526
              ],
              [
                77.6477894,
                12.8407026
              ],
              [
                77.6480898,
                12.8406322
              ],
              [
                77.6480755,
                12.840574
              ],
              [
                77.6481626,
                12.8405536
              ],
              [
                77.6481237,
                12.8403957
              ],
              [
                77.6480354,
                12.8404164
              ],
              [
                77.6480187,
                12.8403485
              ],
              [
                77.6477202,
                12.8404185
              ],
              [
                77.6477382,
                12.8404917
              ],
              [
                77.6476712,
                12.8405074
              ],
              [
                77.6477108,
                12.8406681
              ],
              [
                77.647777,
                12.8406526
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506169",
          "osmId": 259506169,
          "name": "OSM building 259506169",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6479116,
          "lat": 12.8405258,
          "levels": 5,
          "kind": "campus",
          "blocks": "M",
          "label": "M",
          "blockCount": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6477066,
                12.8403389
              ],
              [
                77.6477228,
                12.8404048
              ],
              [
                77.6477762,
                12.8403922
              ],
              [
                77.6477718,
                12.8403745
              ],
              [
                77.6478118,
                12.8403651
              ],
              [
                77.6478162,
                12.8403829
              ],
              [
                77.6479239,
                12.8403576
              ],
              [
                77.6479194,
                12.8403392
              ],
              [
                77.6479565,
                12.8403305
              ],
              [
                77.6479611,
                12.8403489
              ],
              [
                77.6479789,
                12.8403447
              ],
              [
                77.6479764,
                12.8403348
              ],
              [
                77.6480469,
                12.8403183
              ],
              [
                77.64804,
                12.8402903
              ],
              [
                77.6480218,
                12.8402946
              ],
              [
                77.6480129,
                12.8402584
              ],
              [
                77.6480922,
                12.8402399
              ],
              [
                77.6480532,
                12.840082
              ],
              [
                77.6480527,
                12.8400821
              ],
              [
                77.6480325,
                12.8400004
              ],
              [
                77.6476463,
                12.8400908
              ],
              [
                77.6476677,
                12.840178
              ],
              [
                77.6476007,
                12.8401937
              ],
              [
                77.6476403,
                12.8403544
              ],
              [
                77.6477066,
                12.8403389
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506170",
          "osmId": 259506170,
          "name": "OSM building 259506170",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6478505,
          "lat": 12.8402022,
          "levels": 5,
          "kind": "campus",
          "blocks": "L",
          "label": "L",
          "blockCount": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6487173,
                12.8403934
              ],
              [
                77.648736,
                12.8404687
              ],
              [
                77.6490363,
                12.8403983
              ],
              [
                77.6490176,
                12.8403223
              ],
              [
                77.6491047,
                12.8403019
              ],
              [
                77.649064,
                12.8401365
              ],
              [
                77.6489757,
                12.8401572
              ],
              [
                77.648959,
                12.8400894
              ],
              [
                77.6486605,
                12.8401593
              ],
              [
                77.6486785,
                12.8402326
              ],
              [
                77.6486115,
                12.8402483
              ],
              [
                77.6486511,
                12.8404089
              ],
              [
                77.6487173,
                12.8403934
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506171",
          "osmId": 259506171,
          "name": "OSM building 259506171",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.648855,
          "lat": 12.8402768,
          "levels": 5,
          "kind": "campus",
          "blocks": "C,D",
          "label": "C, D",
          "blockCount": 2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6477286,
                12.8407871
              ],
              [
                77.6478438,
                12.8407559
              ],
              [
                77.6478546,
                12.8407938
              ],
              [
                77.6479148,
                12.8407775
              ],
              [
                77.647904,
                12.8407396
              ],
              [
                77.6480516,
                12.8406995
              ],
              [
                77.6480687,
                12.8407597
              ],
              [
                77.6480422,
                12.840767
              ],
              [
                77.6480692,
                12.8408616
              ],
              [
                77.6480109,
                12.8408774
              ],
              [
                77.648025,
                12.8409268
              ],
              [
                77.6480436,
                12.8409919
              ],
              [
                77.6480946,
                12.840978
              ],
              [
                77.6481785,
                12.841272
              ],
              [
                77.6481287,
                12.8412855
              ],
              [
                77.6481449,
                12.8413424
              ],
              [
                77.6479572,
                12.8413933
              ],
              [
                77.6479408,
                12.8413358
              ],
              [
                77.6478823,
                12.8413517
              ],
              [
                77.6478007,
                12.8410658
              ],
              [
                77.6478713,
                12.8410466
              ],
              [
                77.6478312,
                12.840906
              ],
              [
                77.6477675,
                12.8409233
              ],
              [
                77.6477286,
                12.8407871
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506172",
          "osmId": 259506172,
          "name": "OSM building 259506172",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6479646,
          "lat": 12.8410575,
          "levels": 5,
          "kind": "campus",
          "blocks": "N,O",
          "label": "N, O",
          "blockCount": 2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6487943,
                12.8404973
              ],
              [
                77.6489618,
                12.8404588
              ],
              [
                77.6489867,
                12.8405415
              ],
              [
                77.6490448,
                12.8405257
              ],
              [
                77.6490718,
                12.8406203
              ],
              [
                77.6490134,
                12.8406361
              ],
              [
                77.6490276,
                12.8406856
              ],
              [
                77.649043,
                12.8407396
              ],
              [
                77.6491203,
                12.8407186
              ],
              [
                77.6492074,
                12.8410236
              ],
              [
                77.6491312,
                12.8410443
              ],
              [
                77.6491474,
                12.8411011
              ],
              [
                77.6489677,
                12.8411499
              ],
              [
                77.6489513,
                12.8410924
              ],
              [
                77.6488921,
                12.8411085
              ],
              [
                77.6488105,
                12.8408225
              ],
              [
                77.6488738,
                12.8408053
              ],
              [
                77.6488337,
                12.8406648
              ],
              [
                77.64877,
                12.8406821
              ],
              [
                77.6487377,
                12.8405687
              ],
              [
                77.6488055,
                12.8405503
              ],
              [
                77.6487943,
                12.8404973
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506173",
          "osmId": 259506173,
          "name": "OSM building 259506173",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6489746,
          "lat": 12.8408159,
          "levels": 5,
          "kind": "campus",
          "blocks": "B",
          "label": "B",
          "blockCount": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6477537,
                12.8393562
              ],
              [
                77.6477729,
                12.8394082
              ],
              [
                77.6477467,
                12.8394174
              ],
              [
                77.6477541,
                12.8394376
              ],
              [
                77.6477543,
                12.8394375
              ],
              [
                77.6477894,
                12.839428
              ],
              [
                77.6478139,
                12.8395141
              ],
              [
                77.6477208,
                12.8395395
              ],
              [
                77.6477373,
                12.8395973
              ],
              [
                77.6477696,
                12.8395908
              ],
              [
                77.6477624,
                12.8395655
              ],
              [
                77.647808,
                12.8395531
              ],
              [
                77.6479171,
                12.8399354
              ],
              [
                77.6478409,
                12.839956
              ],
              [
                77.6478572,
                12.8400129
              ],
              [
                77.6476774,
                12.8400616
              ],
              [
                77.647661,
                12.8400041
              ],
              [
                77.6476018,
                12.8400202
              ],
              [
                77.6475202,
                12.8397342
              ],
              [
                77.6475835,
                12.8397171
              ],
              [
                77.6475492,
                12.8395934
              ],
              [
                77.6476088,
                12.8395048
              ],
              [
                77.6476242,
                12.8393925
              ],
              [
                77.6477537,
                12.8393562
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506174",
          "osmId": 259506174,
          "name": "OSM building 259506174",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6477101,
          "lat": 12.8397412,
          "levels": 5,
          "kind": "campus",
          "blocks": "K",
          "label": "K",
          "blockCount": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6483865,
                12.8397417
              ],
              [
                77.6485699,
                12.8396971
              ],
              [
                77.6485541,
                12.8396351
              ],
              [
                77.6485891,
                12.8396266
              ],
              [
                77.6485576,
                12.8395034
              ],
              [
                77.6485102,
                12.839515
              ],
              [
                77.6485013,
                12.8394804
              ],
              [
                77.6485718,
                12.8394633
              ],
              [
                77.6485384,
                12.8393323
              ],
              [
                77.6484658,
                12.83935
              ],
              [
                77.6484516,
                12.8392943
              ],
              [
                77.6482815,
                12.8393356
              ],
              [
                77.6482971,
                12.8393966
              ],
              [
                77.6482364,
                12.8394113
              ],
              [
                77.6482709,
                12.8395466
              ],
              [
                77.6483296,
                12.8395324
              ],
              [
                77.6483365,
                12.8395593
              ],
              [
                77.648284,
                12.8395721
              ],
              [
                77.6483133,
                12.8396868
              ],
              [
                77.648369,
                12.8396733
              ],
              [
                77.6483865,
                12.8397417
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506175",
          "osmId": 259506175,
          "name": "OSM building 259506175",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6484204,
          "lat": 12.8395147,
          "levels": 5,
          "kind": "campus",
          "blocks": "G",
          "label": "G",
          "blockCount": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6477703,
                12.8392967
              ],
              [
                77.6477279,
                12.8391566
              ],
              [
                77.6477957,
                12.839137
              ],
              [
                77.6477764,
                12.8390731
              ],
              [
                77.6479445,
                12.8390248
              ],
              [
                77.6479653,
                12.8390935
              ],
              [
                77.648036,
                12.8390732
              ],
              [
                77.6480978,
                12.8392777
              ],
              [
                77.6480808,
                12.8392826
              ],
              [
                77.6481091,
                12.8393761
              ],
              [
                77.6480495,
                12.8393933
              ],
              [
                77.6480643,
                12.8394421
              ],
              [
                77.6480807,
                12.8394964
              ],
              [
                77.6481545,
                12.8394752
              ],
              [
                77.6482464,
                12.8397789
              ],
              [
                77.6481677,
                12.8398015
              ],
              [
                77.6481741,
                12.8398333
              ],
              [
                77.6479952,
                12.8398758
              ],
              [
                77.6479875,
                12.8398486
              ],
              [
                77.6479312,
                12.8398647
              ],
              [
                77.6478451,
                12.8395801
              ],
              [
                77.6479116,
                12.839561
              ],
              [
                77.6478684,
                12.8394184
              ],
              [
                77.647812,
                12.8394346
              ],
              [
                77.6477703,
                12.8392967
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506176",
          "osmId": 259506176,
          "name": "OSM building 259506176",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6479824,
          "lat": 12.8394604,
          "levels": 5,
          "kind": "campus",
          "blocks": "H,I",
          "label": "H, I",
          "blockCount": 2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6487254,
                12.8406565
              ],
              [
                77.6486746,
                12.8406713
              ],
              [
                77.6486533,
                12.840602
              ],
              [
                77.6484863,
                12.8406507
              ],
              [
                77.6485054,
                12.8407131
              ],
              [
                77.6484413,
                12.8407318
              ],
              [
                77.6484638,
                12.8408052
              ],
              [
                77.6485961,
                12.8407666
              ],
              [
                77.6486063,
                12.8408001
              ],
              [
                77.6486552,
                12.8407859
              ],
              [
                77.6486679,
                12.8408271
              ],
              [
                77.6486831,
                12.8408768
              ],
              [
                77.6485168,
                12.8409253
              ],
              [
                77.6485325,
                12.8409765
              ],
              [
                77.6485051,
                12.8409845
              ],
              [
                77.6485152,
                12.8410173
              ],
              [
                77.6485752,
                12.8409998
              ],
              [
                77.6485972,
                12.8410713
              ],
              [
                77.6486621,
                12.8410634
              ],
              [
                77.6487867,
                12.8411117
              ],
              [
                77.6487803,
                12.8409627
              ],
              [
                77.6488065,
                12.8409538
              ],
              [
                77.6487892,
                12.8408223
              ],
              [
                77.648733,
                12.8408235
              ],
              [
                77.6487273,
                12.8408049
              ],
              [
                77.6487756,
                12.8407995
              ],
              [
                77.648776,
                12.8407445
              ],
              [
                77.6487529,
                12.8407461
              ],
              [
                77.6487254,
                12.8406565
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506177",
          "osmId": 259506177,
          "name": "OSM building 259506177",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6486516,
          "lat": 12.840852,
          "levels": 5,
          "kind": "campus",
          "blocks": "A",
          "label": "A",
          "blockCount": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6481415,
                12.840839
              ],
              [
                77.6481905,
                12.8408272
              ],
              [
                77.6481728,
                12.8407569
              ],
              [
                77.6483533,
                12.8407135
              ],
              [
                77.6483692,
                12.8407767
              ],
              [
                77.6484342,
                12.8407611
              ],
              [
                77.648453,
                12.8408355
              ],
              [
                77.648319,
                12.8408677
              ],
              [
                77.6483276,
                12.8409017
              ],
              [
                77.6482781,
                12.8409135
              ],
              [
                77.6482887,
                12.8409554
              ],
              [
                77.6483014,
                12.8410057
              ],
              [
                77.6484699,
                12.8409652
              ],
              [
                77.6484887,
                12.8410145
              ],
              [
                77.6484971,
                12.8410498
              ],
              [
                77.6484583,
                12.8410583
              ],
              [
                77.6484767,
                12.8411308
              ],
              [
                77.648292,
                12.8411752
              ],
              [
                77.6482733,
                12.8411013
              ],
              [
                77.6482086,
                12.8411168
              ],
              [
                77.6481784,
                12.840997
              ],
              [
                77.6482306,
                12.8409845
              ],
              [
                77.6482227,
                12.8409532
              ],
              [
                77.6481511,
                12.8409704
              ],
              [
                77.6481422,
                12.8409351
              ],
              [
                77.6481645,
                12.8409298
              ],
              [
                77.6481415,
                12.840839
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506178",
          "osmId": 259506178,
          "name": "OSM building 259506178",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6483083,
          "lat": 12.8409477,
          "levels": 5,
          "kind": "campus",
          "blocks": "P",
          "label": "P",
          "blockCount": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.6484471,
                12.8398793
              ],
              [
                77.6481121,
                12.8399643
              ],
              [
                77.6482261,
                12.8403913
              ],
              [
                77.6483567,
                12.8403582
              ],
              [
                77.6483905,
                12.840485
              ],
              [
                77.6485654,
                12.8404406
              ],
              [
                77.648503,
                12.840207
              ],
              [
                77.6485326,
                12.8401994
              ],
              [
                77.6484471,
                12.8398793
              ]
            ]
          ]
        },
        "properties": {
          "id": "osm-259506258",
          "osmId": 259506258,
          "name": "OSM building 259506258",
          "height": 16.0,
          "color": "#d7b07a",
          "lon": 77.6483498,
          "lat": 12.8401691,
          "levels": 5,
          "kind": "campus",
          "blocks": "",
          "label": "Building",
          "blockCount": 0
        }
      }
    ]
  },
  "osmBuildingLabels": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6488015,
            12.8395613
          ]
        },
        "properties": {
          "id": "osm-259506167",
          "name": "F",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6487698,
            12.8399629
          ]
        },
        "properties": {
          "id": "osm-259506168",
          "name": "E",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6479116,
            12.8405258
          ]
        },
        "properties": {
          "id": "osm-259506169",
          "name": "M",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6478505,
            12.8402022
          ]
        },
        "properties": {
          "id": "osm-259506170",
          "name": "L",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.648855,
            12.8402768
          ]
        },
        "properties": {
          "id": "osm-259506171",
          "name": "C, D",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6479646,
            12.8410575
          ]
        },
        "properties": {
          "id": "osm-259506172",
          "name": "N, O",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6489746,
            12.8408159
          ]
        },
        "properties": {
          "id": "osm-259506173",
          "name": "B",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6477101,
            12.8397412
          ]
        },
        "properties": {
          "id": "osm-259506174",
          "name": "K",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6484204,
            12.8395147
          ]
        },
        "properties": {
          "id": "osm-259506175",
          "name": "G",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6479824,
            12.8394604
          ]
        },
        "properties": {
          "id": "osm-259506176",
          "name": "H, I",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6486516,
            12.840852
          ]
        },
        "properties": {
          "id": "osm-259506177",
          "name": "A",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6483083,
            12.8409477
          ]
        },
        "properties": {
          "id": "osm-259506178",
          "name": "P",
          "kind": "osm-building"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6483498,
            12.8401691
          ]
        },
        "properties": {
          "id": "osm-259506258",
          "name": "Building",
          "kind": "osm-building"
        }
      }
    ]
  },
  "inventory": {
    "total": 972,
    "numbering": "Block-floor+unit, zero-padded unit. Example: E-312 is Block E, floor 3, unit 12.",
    "notes": [
      "Door list follows the Oct 2011 Layout Map cell numbers (G-312 = Block G, floor 3, plan cell 12). The brochure advertised 1,024 units; plus towers show 12 cells on the site plan, so this model has 972 apartments.",
      "It is not a society-verified door survey. Official numbering may differ in places.",
      "Most blocks are modeled with 5 residential floors; Block F has 6, matching public listings of one taller tower.",
      "Unit cells follow the Oct 2011 Layout Map: each plus-shaped tower keeps the map's 12-cell numbering, rotated or mirrored to match that block. A and P face each other as U-courtyard plates; B uses the 20-unit special plate.",
      "Parking is basement for the campus; individual bay IDs start as Unknown until tagged."
    ],
    "blocks": {
      "A": {
        "floors": 5,
        "perFloor": 16,
        "layout": "u_west",
        "unitCount": 80,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "north wing",
            "center": [
              77.6485664,
              12.8410749
            ],
            "ring": [
              [
                77.6485777,
                12.8409906
              ],
              [
                77.6486164,
                12.8411438
              ],
              [
                77.6485551,
                12.8411593
              ],
              [
                77.6485164,
                12.8410061
              ],
              [
                77.6485777,
                12.8409906
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north wing",
            "center": [
              77.648618,
              12.8410253
            ],
            "ring": [
              [
                77.6486375,
                12.8409755
              ],
              [
                77.6485762,
                12.840991
              ],
              [
                77.6485935,
                12.8410591
              ],
              [
                77.6485972,
                12.8410713
              ],
              [
                77.6486598,
                12.8410637
              ],
              [
                77.6486375,
                12.8409755
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north wing",
            "center": [
              77.6486825,
              12.8410222
            ],
            "ring": [
              [
                77.6486973,
                12.8409604
              ],
              [
                77.6486361,
                12.8409758
              ],
              [
                77.6486583,
                12.8410639
              ],
              [
                77.6486621,
                12.8410634
              ],
              [
                77.64873,
                12.8410897
              ],
              [
                77.6486973,
                12.8409604
              ]
            ]
          },
          {
            "unit": 4,
            "side": "N",
            "wing": "north wing",
            "center": [
              77.6487449,
              12.8410246
            ],
            "ring": [
              [
                77.6487572,
                12.8409453
              ],
              [
                77.6486959,
                12.8409607
              ],
              [
                77.6487283,
                12.8410891
              ],
              [
                77.6487697,
                12.8411051
              ],
              [
                77.6487862,
                12.8411009
              ],
              [
                77.6487841,
                12.8410521
              ],
              [
                77.6487572,
                12.8409453
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "north wing",
            "center": [
              77.6488057,
              12.8410145
            ],
            "ring": [
              [
                77.648817,
                12.8409302
              ],
              [
                77.6488557,
                12.8410834
              ],
              [
                77.6487944,
                12.8410989
              ],
              [
                77.6487557,
                12.8409456
              ],
              [
                77.648817,
                12.8409302
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6487634,
              12.8409273
            ],
            "ring": [
              [
                77.6487212,
                12.8409214
              ],
              [
                77.6487291,
                12.8409527
              ],
              [
                77.6488039,
                12.8409339
              ],
              [
                77.6487996,
                12.8409016
              ],
              [
                77.6487212,
                12.8409214
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6487575,
              12.8408962
            ],
            "ring": [
              [
                77.6487135,
                12.8408907
              ],
              [
                77.6487214,
                12.8409221
              ],
              [
                77.6487997,
                12.8409023
              ],
              [
                77.6487955,
                12.84087
              ],
              [
                77.6487135,
                12.8408907
              ]
            ]
          },
          {
            "unit": 8,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6487515,
              12.8408651
            ],
            "ring": [
              [
                77.6487057,
                12.8408601
              ],
              [
                77.6487137,
                12.8408914
              ],
              [
                77.6487956,
                12.8408708
              ],
              [
                77.6487913,
                12.8408385
              ],
              [
                77.6487057,
                12.8408601
              ]
            ]
          },
          {
            "unit": 9,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6487411,
              12.8408375
            ],
            "ring": [
              [
                77.648789,
                12.8408223
              ],
              [
                77.648733,
                12.8408235
              ],
              [
                77.6487322,
                12.8408208
              ],
              [
                77.648698,
                12.8408294
              ],
              [
                77.6487059,
                12.8408608
              ],
              [
                77.6487914,
                12.8408392
              ],
              [
                77.6487894,
                12.8408239
              ],
              [
                77.648789,
                12.8408223
              ]
            ]
          },
          {
            "unit": 10,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6487298,
              12.8408022
            ],
            "ring": [
              [
                77.6486903,
                12.8407988
              ],
              [
                77.6486982,
                12.8408301
              ],
              [
                77.6487324,
                12.8408215
              ],
              [
                77.6487273,
                12.8408049
              ],
              [
                77.6487756,
                12.8407995
              ],
              [
                77.6487758,
                12.8407772
              ],
              [
                77.6486903,
                12.8407988
              ]
            ]
          },
          {
            "unit": 11,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.64873,
              12.8407728
            ],
            "ring": [
              [
                77.6487698,
                12.8407461
              ],
              [
                77.6486825,
                12.8407681
              ],
              [
                77.6486904,
                12.8407995
              ],
              [
                77.6487758,
                12.840778
              ],
              [
                77.6487758,
                12.84077
              ],
              [
                77.6487698,
                12.8407461
              ]
            ]
          },
          {
            "unit": 12,
            "side": "E",
            "wing": "south wing",
            "center": [
              77.6487201,
              12.8407103
            ],
            "ring": [
              [
                77.6487107,
                12.8407614
              ],
              [
                77.6487691,
                12.8407466
              ],
              [
                77.6487687,
                12.840745
              ],
              [
                77.6487529,
                12.8407461
              ],
              [
                77.6487254,
                12.8406565
              ],
              [
                77.6486871,
                12.8406677
              ],
              [
                77.6487107,
                12.8407614
              ]
            ]
          },
          {
            "unit": 13,
            "side": "S",
            "wing": "south wing",
            "center": [
              77.6486598,
              12.8406975
            ],
            "ring": [
              [
                77.6486122,
                12.8406232
              ],
              [
                77.6486509,
                12.8407765
              ],
              [
                77.6487093,
                12.8407617
              ],
              [
                77.6486857,
                12.8406681
              ],
              [
                77.6486746,
                12.8406713
              ],
              [
                77.6486564,
                12.8406121
              ],
              [
                77.6486122,
                12.8406232
              ]
            ]
          },
          {
            "unit": 14,
            "side": "S",
            "wing": "south wing",
            "center": [
              77.6486011,
              12.8407056
            ],
            "ring": [
              [
                77.6486495,
                12.8407768
              ],
              [
                77.6486108,
                12.8406236
              ],
              [
                77.6485524,
                12.8406383
              ],
              [
                77.6485856,
                12.8407697
              ],
              [
                77.6485961,
                12.8407666
              ],
              [
                77.6486028,
                12.8407886
              ],
              [
                77.6486495,
                12.8407768
              ]
            ]
          },
          {
            "unit": 15,
            "side": "S",
            "wing": "south wing",
            "center": [
              77.6485384,
              12.8407123
            ],
            "ring": [
              [
                77.648551,
                12.8406387
              ],
              [
                77.6484926,
                12.8406535
              ],
              [
                77.6485263,
                12.840787
              ],
              [
                77.6485841,
                12.8407701
              ],
              [
                77.648551,
                12.8406387
              ]
            ]
          },
          {
            "unit": 16,
            "side": "W",
            "wing": "south wing",
            "center": [
              77.6484868,
              12.8407563
            ],
            "ring": [
              [
                77.6484911,
                12.8406538
              ],
              [
                77.6484875,
                12.8406547
              ],
              [
                77.6485054,
                12.8407131
              ],
              [
                77.6484482,
                12.8407298
              ],
              [
                77.648467,
                12.8408043
              ],
              [
                77.6485248,
                12.8407874
              ],
              [
                77.6484911,
                12.8406538
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506177"
      },
      "B": {
        "floors": 5,
        "perFloor": 20,
        "layout": "typical",
        "unitCount": 100,
        "slots": [
          {
            "unit": 1,
            "side": "E",
            "wing": "right of south stair · Type S7/S3",
            "center": [
              77.649037,
              12.8409142
            ],
            "ring": [
              [
                77.6489945,
                12.8408488
              ],
              [
                77.6490355,
                12.8409922
              ],
              [
                77.6490795,
                12.8409796
              ],
              [
                77.6490384,
                12.8408362
              ],
              [
                77.6489945,
                12.8408488
              ]
            ]
          },
          {
            "unit": 2,
            "side": "E",
            "wing": "east 1D wing, upper · Type 1D",
            "center": [
              77.6490721,
              12.8410487
            ],
            "ring": [
              [
                77.6490355,
                12.8409922
              ],
              [
                77.649071,
                12.8411159
              ],
              [
                77.6491086,
                12.8411051
              ],
              [
                77.6490732,
                12.8409814
              ],
              [
                77.6490355,
                12.8409922
              ]
            ]
          },
          {
            "unit": 3,
            "side": "E",
            "wing": "east 1D wing, lower · Type 1D",
            "center": [
              77.6491109,
              12.8410348
            ],
            "ring": [
              [
                77.6491172,
                12.8409688
              ],
              [
                77.6490732,
                12.8409814
              ],
              [
                77.6491086,
                12.8411051
              ],
              [
                77.6491455,
                12.8410946
              ],
              [
                77.6491312,
                12.8410443
              ],
              [
                77.6491382,
                12.8410424
              ],
              [
                77.6491172,
                12.8409688
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "inner south-east · Type S6",
            "center": [
              77.6490841,
              12.8409007
            ],
            "ring": [
              [
                77.6490384,
                12.8408362
              ],
              [
                77.6490795,
                12.8409796
              ],
              [
                77.6491297,
                12.8409652
              ],
              [
                77.6490887,
                12.8408218
              ],
              [
                77.6490384,
                12.8408362
              ]
            ]
          },
          {
            "unit": 5,
            "side": "S",
            "wing": "south-east corner · Type 1A/2B",
            "center": [
              77.6491303,
              12.8408663
            ],
            "ring": [
              [
                77.6490775,
                12.8407828
              ],
              [
                77.6491297,
                12.8409652
              ],
              [
                77.6491831,
                12.8409499
              ],
              [
                77.6491309,
                12.8407675
              ],
              [
                77.6490775,
                12.8407828
              ]
            ]
          },
          {
            "unit": 6,
            "side": "S",
            "wing": "south-west corner · Type 1A/2B",
            "center": [
              77.6490706,
              12.8406578
            ],
            "ring": [
              [
                77.6490712,
                12.840559
              ],
              [
                77.6491234,
                12.8407414
              ],
              [
                77.64907,
                12.8407567
              ],
              [
                77.6490178,
                12.8405743
              ],
              [
                77.6490712,
                12.840559
              ]
            ]
          },
          {
            "unit": 7,
            "side": "W",
            "wing": "inner south-west · Type S6",
            "center": [
              77.6490057,
              12.8406453
            ],
            "ring": [
              [
                77.6490178,
                12.8405743
              ],
              [
                77.6489675,
                12.8405887
              ],
              [
                77.6490086,
                12.840732
              ],
              [
                77.6490384,
                12.8407235
              ],
              [
                77.6490276,
                12.8406856
              ],
              [
                77.6490134,
                12.8406361
              ],
              [
                77.6490339,
                12.8406305
              ],
              [
                77.6490178,
                12.8405743
              ]
            ]
          },
          {
            "unit": 8,
            "side": "W",
            "wing": "west 1D wing, lower · Type 1D",
            "center": [
              77.6489639,
              12.8405266
            ],
            "ring": [
              [
                77.6489613,
                12.8405905
              ],
              [
                77.6490052,
                12.8405779
              ],
              [
                77.6489942,
                12.8405395
              ],
              [
                77.6489867,
                12.8405415
              ],
              [
                77.6489618,
                12.8404588
              ],
              [
                77.6489259,
                12.840467
              ],
              [
                77.6489613,
                12.8405905
              ]
            ]
          },
          {
            "unit": 9,
            "side": "W",
            "wing": "west 1D wing, upper · Type 1D",
            "center": [
              77.6489247,
              12.840534
            ],
            "ring": [
              [
                77.6488881,
                12.8404775
              ],
              [
                77.6489236,
                12.8406013
              ],
              [
                77.6489613,
                12.8405905
              ],
              [
                77.6489259,
                12.840467
              ],
              [
                77.6489191,
                12.8404686
              ],
              [
                77.6488881,
                12.8404775
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "left of south stair · Type S5/S3",
            "center": [
              77.6489661,
              12.8406666
            ],
            "ring": [
              [
                77.6489236,
                12.8406013
              ],
              [
                77.6489646,
                12.8407446
              ],
              [
                77.6490086,
                12.840732
              ],
              [
                77.6489675,
                12.8405887
              ],
              [
                77.6489236,
                12.8406013
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "left of north stair · Type S5/S3",
            "center": [
              77.6489095,
              12.8406828
            ],
            "ring": [
              [
                77.648867,
                12.8406175
              ],
              [
                77.6489081,
                12.8407608
              ],
              [
                77.6489521,
                12.8407482
              ],
              [
                77.648911,
                12.8406049
              ],
              [
                77.648867,
                12.8406175
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west 1D wing, lower north · Type 1D",
            "center": [
              77.6488744,
              12.8405484
            ],
            "ring": [
              [
                77.6488379,
                12.8404919
              ],
              [
                77.6488733,
                12.8406157
              ],
              [
                77.648911,
                12.8406049
              ],
              [
                77.6488756,
                12.8404811
              ],
              [
                77.6488379,
                12.8404919
              ]
            ]
          },
          {
            "unit": 13,
            "side": "W",
            "wing": "west 1D wing, upper north · Type 1D",
            "center": [
              77.6488338,
              12.8405603
            ],
            "ring": [
              [
                77.6488293,
                12.8406282
              ],
              [
                77.6488733,
                12.8406157
              ],
              [
                77.6488379,
                12.8404919
              ],
              [
                77.6487957,
                12.8405039
              ],
              [
                77.6488012,
                12.84053
              ],
              [
                77.6488293,
                12.8406282
              ]
            ]
          },
          {
            "unit": 14,
            "side": "W",
            "wing": "inner north-west · Type S6",
            "center": [
              77.6488644,
              12.8406936
            ],
            "ring": [
              [
                77.6489081,
                12.8407608
              ],
              [
                77.648867,
                12.8406175
              ],
              [
                77.6488168,
                12.8406318
              ],
              [
                77.6488268,
                12.8406667
              ],
              [
                77.6488337,
                12.8406648
              ],
              [
                77.6488646,
                12.8407732
              ],
              [
                77.6489081,
                12.8407608
              ]
            ]
          },
          {
            "unit": 15,
            "side": "N",
            "wing": "north-west corner · Type 2B",
            "center": [
              77.6488162,
              12.8407307
            ],
            "ring": [
              [
                77.6488168,
                12.8406318
              ],
              [
                77.648869,
                12.8408143
              ],
              [
                77.6488156,
                12.8408296
              ],
              [
                77.6487634,
                12.8406471
              ],
              [
                77.6488168,
                12.8406318
              ]
            ]
          },
          {
            "unit": 16,
            "side": "N",
            "wing": "north-east corner · Type 2B",
            "center": [
              77.6488759,
              12.8409392
            ],
            "ring": [
              [
                77.6488231,
                12.8408556
              ],
              [
                77.6488753,
                12.841038
              ],
              [
                77.6489287,
                12.8410227
              ],
              [
                77.6488765,
                12.8408403
              ],
              [
                77.6488231,
                12.8408556
              ]
            ]
          },
          {
            "unit": 17,
            "side": "E",
            "wing": "inner north-east · Type S6",
            "center": [
              77.6489333,
              12.8409439
            ],
            "ring": [
              [
                77.6488877,
                12.8408794
              ],
              [
                77.6489287,
                12.8410227
              ],
              [
                77.648979,
                12.8410083
              ],
              [
                77.6489379,
                12.840865
              ],
              [
                77.6488877,
                12.8408794
              ]
            ]
          },
          {
            "unit": 18,
            "side": "E",
            "wing": "east 1D wing, upper north · Type 1D",
            "center": [
              77.648981,
              12.8410747
            ],
            "ring": [
              [
                77.6489413,
                12.8410191
              ],
              [
                77.6489767,
                12.8411429
              ],
              [
                77.6490207,
                12.8411303
              ],
              [
                77.6489853,
                12.8410065
              ],
              [
                77.6489413,
                12.8410191
              ]
            ]
          },
          {
            "unit": 19,
            "side": "E",
            "wing": "east 1D wing, lower north · Type 1D",
            "center": [
              77.6490218,
              12.841063
            ],
            "ring": [
              [
                77.6489853,
                12.8410065
              ],
              [
                77.6490207,
                12.8411303
              ],
              [
                77.6490584,
                12.8411195
              ],
              [
                77.6490229,
                12.8409958
              ],
              [
                77.6489853,
                12.8410065
              ]
            ]
          },
          {
            "unit": 20,
            "side": "E",
            "wing": "right of north stair · Type S7/S3",
            "center": [
              77.6489804,
              12.8409304
            ],
            "ring": [
              [
                77.6489379,
                12.840865
              ],
              [
                77.648979,
                12.8410083
              ],
              [
                77.6490229,
                12.8409958
              ],
              [
                77.6489819,
                12.8408524
              ],
              [
                77.6489379,
                12.840865
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506173"
      },
      "C": {
        "floors": 5,
        "perFloor": 8,
        "layout": "plus",
        "unitCount": 40,
        "slots": [
          {
            "unit": 1,
            "side": "N",
            "wing": "west, north",
            "center": [
              77.6490543,
              12.8402918
            ],
            "ring": [
              [
                77.6490904,
                12.8402613
              ],
              [
                77.6490084,
                12.8402806
              ],
              [
                77.6490181,
                12.8403222
              ],
              [
                77.6491001,
                12.840303
              ],
              [
                77.6490904,
                12.8402613
              ]
            ]
          },
          {
            "unit": 2,
            "side": "E",
            "wing": "north, west",
            "center": [
              77.6490407,
              12.8402337
            ],
            "ring": [
              [
                77.6489909,
                12.8402062
              ],
              [
                77.6490084,
                12.8402806
              ],
              [
                77.6490904,
                12.8402613
              ],
              [
                77.6490729,
                12.8401869
              ],
              [
                77.6489909,
                12.8402062
              ]
            ]
          },
          {
            "unit": 3,
            "side": "E",
            "wing": "north, east",
            "center": [
              77.6490261,
              12.8401716
            ],
            "ring": [
              [
                77.6489909,
                12.8402062
              ],
              [
                77.6490729,
                12.8401869
              ],
              [
                77.6490613,
                12.8401371
              ],
              [
                77.6489793,
                12.8401564
              ],
              [
                77.6489909,
                12.8402062
              ]
            ]
          },
          {
            "unit": 4,
            "side": "S",
            "wing": "east, north",
            "center": [
              77.6490101,
              12.8401035
            ],
            "ring": [
              [
                77.6490468,
                12.8400753
              ],
              [
                77.6490555,
                12.8401125
              ],
              [
                77.6489735,
                12.8401318
              ],
              [
                77.6489648,
                12.8400946
              ],
              [
                77.6490468,
                12.8400753
              ]
            ]
          },
          {
            "unit": 5,
            "side": "S",
            "wing": "east, south",
            "center": [
              77.6488822,
              12.8401728
            ],
            "ring": [
              [
                77.6488281,
                12.8401266
              ],
              [
                77.6488543,
                12.8402382
              ],
              [
                77.6489363,
                12.840219
              ],
              [
                77.6489101,
                12.8401074
              ],
              [
                77.6488281,
                12.8401266
              ]
            ]
          },
          {
            "unit": 6,
            "side": "W",
            "wing": "south, east",
            "center": [
              77.648904,
              12.8402658
            ],
            "ring": [
              [
                77.6488543,
                12.8402382
              ],
              [
                77.6488717,
                12.8403126
              ],
              [
                77.6489537,
                12.8402934
              ],
              [
                77.6489363,
                12.840219
              ],
              [
                77.6488543,
                12.8402382
              ]
            ]
          },
          {
            "unit": 7,
            "side": "W",
            "wing": "south, west",
            "center": [
              77.6489214,
              12.8403402
            ],
            "ring": [
              [
                77.6488717,
                12.8403126
              ],
              [
                77.6488891,
                12.840387
              ],
              [
                77.6489711,
                12.8403678
              ],
              [
                77.6489537,
                12.8402934
              ],
              [
                77.6488717,
                12.8403126
              ]
            ]
          },
          {
            "unit": 8,
            "side": "N",
            "wing": "west, south",
            "center": [
              77.6489287,
              12.8403712
            ],
            "ring": [
              [
                77.6488775,
                12.8403374
              ],
              [
                77.6488979,
                12.8404242
              ],
              [
                77.6489799,
                12.840405
              ],
              [
                77.6489595,
                12.8403182
              ],
              [
                77.6488775,
                12.8403374
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506171"
      },
      "D": {
        "floors": 5,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "N",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6488524,
              12.8403891
            ],
            "ring": [
              [
                77.648816,
                12.8403518
              ],
              [
                77.6488364,
                12.8404386
              ],
              [
                77.6488888,
                12.8404263
              ],
              [
                77.6488684,
                12.8403395
              ],
              [
                77.648816,
                12.8403518
              ]
            ]
          },
          {
            "unit": 2,
            "side": "E",
            "wing": "north stub, west",
            "center": [
              77.6488338,
              12.8403149
            ],
            "ring": [
              [
                77.6487992,
                12.8402903
              ],
              [
                77.6488137,
                12.8403523
              ],
              [
                77.6488684,
                12.8403395
              ],
              [
                77.6488539,
                12.8402775
              ],
              [
                77.6487992,
                12.8402903
              ]
            ]
          },
          {
            "unit": 3,
            "side": "E",
            "wing": "north stub, east",
            "center": [
              77.6488193,
              12.8402529
            ],
            "ring": [
              [
                77.6487847,
                12.8402283
              ],
              [
                77.6487992,
                12.8402903
              ],
              [
                77.6488539,
                12.8402775
              ],
              [
                77.6488393,
                12.8402155
              ],
              [
                77.6487847,
                12.8402283
              ]
            ]
          },
          {
            "unit": 4,
            "side": "S",
            "wing": "east bar, north outer",
            "center": [
              77.648803,
              12.8401782
            ],
            "ring": [
              [
                77.6487666,
                12.840141
              ],
              [
                77.6487869,
                12.8402278
              ],
              [
                77.6488393,
                12.8402155
              ],
              [
                77.648819,
                12.8401287
              ],
              [
                77.6487666,
                12.840141
              ]
            ]
          },
          {
            "unit": 5,
            "side": "S",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6487506,
              12.8401905
            ],
            "ring": [
              [
                77.6487142,
                12.8401533
              ],
              [
                77.6487345,
                12.8402401
              ],
              [
                77.6487869,
                12.8402278
              ],
              [
                77.6487666,
                12.840141
              ],
              [
                77.6487142,
                12.8401533
              ]
            ]
          },
          {
            "unit": 6,
            "side": "S",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.648693,
              12.8402057
            ],
            "ring": [
              [
                77.648673,
                12.8402545
              ],
              [
                77.6487254,
                12.8402422
              ],
              [
                77.6487051,
                12.8401554
              ],
              [
                77.648662,
                12.8401655
              ],
              [
                77.6486785,
                12.8402326
              ],
              [
                77.6486685,
                12.840235
              ],
              [
                77.648673,
                12.8402545
              ]
            ]
          },
          {
            "unit": 7,
            "side": "S",
            "wing": "east bar, south outer",
            "center": [
              77.6486367,
              12.8402172
            ],
            "ring": [
              [
                77.6486527,
                12.8401677
              ],
              [
                77.648673,
                12.8402545
              ],
              [
                77.6486206,
                12.8402668
              ],
              [
                77.6486003,
                12.84018
              ],
              [
                77.6486527,
                12.8401677
              ]
            ]
          },
          {
            "unit": 8,
            "side": "W",
            "wing": "south stub, east",
            "center": [
              77.6486552,
              12.8402914
            ],
            "ring": [
              [
                77.6486206,
                12.8402668
              ],
              [
                77.6486352,
                12.8403288
              ],
              [
                77.6486898,
                12.840316
              ],
              [
                77.6486753,
                12.840254
              ],
              [
                77.6486206,
                12.8402668
              ]
            ]
          },
          {
            "unit": 9,
            "side": "W",
            "wing": "south stub, west",
            "center": [
              77.6486698,
              12.8403534
            ],
            "ring": [
              [
                77.6486352,
                12.8403288
              ],
              [
                77.6486497,
                12.8403908
              ],
              [
                77.6487044,
                12.840378
              ],
              [
                77.6486898,
                12.840316
              ],
              [
                77.6486352,
                12.8403288
              ]
            ]
          },
          {
            "unit": 10,
            "side": "N",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6486861,
              12.8404281
            ],
            "ring": [
              [
                77.6487021,
                12.8403785
              ],
              [
                77.6487225,
                12.8404653
              ],
              [
                77.6486701,
                12.8404776
              ],
              [
                77.6486497,
                12.8403908
              ],
              [
                77.6487021,
                12.8403785
              ]
            ]
          },
          {
            "unit": 11,
            "side": "N",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6487424,
              12.8404128
            ],
            "ring": [
              [
                77.6487749,
                12.840453
              ],
              [
                77.6487545,
                12.8403662
              ],
              [
                77.6487021,
                12.8403785
              ],
              [
                77.6487062,
                12.840396
              ],
              [
                77.6487173,
                12.8403934
              ],
              [
                77.6487345,
                12.8404625
              ],
              [
                77.6487749,
                12.840453
              ]
            ]
          },
          {
            "unit": 12,
            "side": "N",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6488,
              12.8404014
            ],
            "ring": [
              [
                77.6487636,
                12.8403641
              ],
              [
                77.648784,
                12.8404509
              ],
              [
                77.6488364,
                12.8404386
              ],
              [
                77.648816,
                12.8403518
              ],
              [
                77.6487636,
                12.8403641
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506171"
      },
      "E": {
        "floors": 5,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "N",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6489465,
              12.8400127
            ],
            "ring": [
              [
                77.6490037,
                12.8399692
              ],
              [
                77.6488989,
                12.8399938
              ],
              [
                77.6489187,
                12.8400781
              ],
              [
                77.648946,
                12.8400717
              ],
              [
                77.6489332,
                12.8400195
              ],
              [
                77.6490112,
                12.8400012
              ],
              [
                77.6490037,
                12.8399692
              ]
            ]
          },
          {
            "unit": 2,
            "side": "E",
            "wing": "north stub, west",
            "center": [
              77.648942,
              12.8399519
            ],
            "ring": [
              [
                77.6488802,
                12.8399346
              ],
              [
                77.6488943,
                12.8399948
              ],
              [
                77.6490037,
                12.8399692
              ],
              [
                77.6489896,
                12.839909
              ],
              [
                77.6488802,
                12.8399346
              ]
            ]
          },
          {
            "unit": 3,
            "side": "E",
            "wing": "north stub, east",
            "center": [
              77.6489278,
              12.8398916
            ],
            "ring": [
              [
                77.6488661,
                12.8398743
              ],
              [
                77.6488802,
                12.8399346
              ],
              [
                77.6489896,
                12.839909
              ],
              [
                77.6489754,
                12.8398487
              ],
              [
                77.6488661,
                12.8398743
              ]
            ]
          },
          {
            "unit": 4,
            "side": "S",
            "wing": "east bar, north outer",
            "center": [
              77.6489007,
              12.8398361
            ],
            "ring": [
              [
                77.6488509,
                12.8397889
              ],
              [
                77.6488707,
                12.8398733
              ],
              [
                77.6489754,
                12.8398487
              ],
              [
                77.64897,
                12.8398255
              ],
              [
                77.6488924,
                12.8398437
              ],
              [
                77.6488774,
                12.8397827
              ],
              [
                77.6488509,
                12.8397889
              ]
            ]
          },
          {
            "unit": 5,
            "side": "S",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6488084,
              12.8398434
            ],
            "ring": [
              [
                77.6487461,
                12.8398135
              ],
              [
                77.6487659,
                12.8398978
              ],
              [
                77.6488707,
                12.8398733
              ],
              [
                77.6488509,
                12.8397889
              ],
              [
                77.6487461,
                12.8398135
              ]
            ]
          },
          {
            "unit": 6,
            "side": "S",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6486854,
              12.8398722
            ],
            "ring": [
              [
                77.6486231,
                12.8398423
              ],
              [
                77.6486429,
                12.8399266
              ],
              [
                77.6487477,
                12.8399021
              ],
              [
                77.6487279,
                12.8398177
              ],
              [
                77.6486231,
                12.8398423
              ]
            ]
          },
          {
            "unit": 7,
            "side": "S",
            "wing": "east bar, south outer",
            "center": [
              77.6486091,
              12.8398901
            ],
            "ring": [
              [
                77.6485381,
                12.8399512
              ],
              [
                77.6486429,
                12.8399266
              ],
              [
                77.6486231,
                12.8398423
              ],
              [
                77.6485753,
                12.8398535
              ],
              [
                77.6485959,
                12.8399373
              ],
              [
                77.648538,
                12.8399509
              ],
              [
                77.6485381,
                12.8399512
              ]
            ]
          },
          {
            "unit": 8,
            "side": "W",
            "wing": "south stub, east",
            "center": [
              77.6485998,
              12.8399685
            ],
            "ring": [
              [
                77.6485381,
                12.8399512
              ],
              [
                77.6485522,
                12.8400114
              ],
              [
                77.6486615,
                12.8399858
              ],
              [
                77.6486474,
                12.8399256
              ],
              [
                77.6485381,
                12.8399512
              ]
            ]
          },
          {
            "unit": 9,
            "side": "W",
            "wing": "south stub, west",
            "center": [
              77.6486139,
              12.8400288
            ],
            "ring": [
              [
                77.6485522,
                12.8400114
              ],
              [
                77.6485663,
                12.8400717
              ],
              [
                77.6486757,
                12.8400461
              ],
              [
                77.6486615,
                12.8399858
              ],
              [
                77.6485522,
                12.8400114
              ]
            ]
          },
          {
            "unit": 10,
            "side": "N",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6486362,
              12.8400909
            ],
            "ring": [
              [
                77.6486909,
                12.8401315
              ],
              [
                77.6486711,
                12.8400471
              ],
              [
                77.6485663,
                12.8400717
              ],
              [
                77.6485758,
                12.8401119
              ],
              [
                77.6486347,
                12.8400981
              ],
              [
                77.6486456,
                12.8401421
              ],
              [
                77.6486909,
                12.8401315
              ]
            ]
          },
          {
            "unit": 11,
            "side": "N",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6487334,
              12.840077
            ],
            "ring": [
              [
                77.6486711,
                12.8400471
              ],
              [
                77.6486909,
                12.8401315
              ],
              [
                77.6487957,
                12.8401069
              ],
              [
                77.6487759,
                12.8400226
              ],
              [
                77.6486711,
                12.8400471
              ]
            ]
          },
          {
            "unit": 12,
            "side": "N",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6488564,
              12.8400482
            ],
            "ring": [
              [
                77.6487941,
                12.8400183
              ],
              [
                77.6488139,
                12.8401027
              ],
              [
                77.6489187,
                12.8400781
              ],
              [
                77.6488989,
                12.8399938
              ],
              [
                77.6487941,
                12.8400183
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506168"
      },
      "F": {
        "floors": 6,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 72,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6487029,
              12.8397133
            ],
            "ring": [
              [
                77.6487565,
                12.8397535
              ],
              [
                77.6487356,
                12.8396639
              ],
              [
                77.6486312,
                12.8396882
              ],
              [
                77.6486386,
                12.8397199
              ],
              [
                77.6486783,
                12.8397131
              ],
              [
                77.6486919,
                12.8397686
              ],
              [
                77.6487565,
                12.8397535
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6487829,
              12.839698
            ],
            "ring": [
              [
                77.6487347,
                12.83966
              ],
              [
                77.6487565,
                12.8397535
              ],
              [
                77.6488311,
                12.8397361
              ],
              [
                77.6488093,
                12.8396426
              ],
              [
                77.6487347,
                12.83966
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6488575,
              12.8396806
            ],
            "ring": [
              [
                77.6488093,
                12.8396426
              ],
              [
                77.6488311,
                12.8397361
              ],
              [
                77.6489057,
                12.8397187
              ],
              [
                77.6488839,
                12.8396251
              ],
              [
                77.6488093,
                12.8396426
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6489474,
              12.8396617
            ],
            "ring": [
              [
                77.6488848,
                12.839629
              ],
              [
                77.6489057,
                12.8397187
              ],
              [
                77.6490101,
                12.8396943
              ],
              [
                77.6489892,
                12.8396047
              ],
              [
                77.6488848,
                12.839629
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6489265,
              12.839572
            ],
            "ring": [
              [
                77.6488638,
                12.8395394
              ],
              [
                77.6488848,
                12.839629
              ],
              [
                77.6489892,
                12.8396047
              ],
              [
                77.6489683,
                12.839515
              ],
              [
                77.6488638,
                12.8395394
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6489019,
              12.8394668
            ],
            "ring": [
              [
                77.6488393,
                12.8394341
              ],
              [
                77.6488602,
                12.8395238
              ],
              [
                77.6489646,
                12.8394994
              ],
              [
                77.6489437,
                12.8394097
              ],
              [
                77.6488393,
                12.8394341
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6488639,
              12.8393888
            ],
            "ring": [
              [
                77.6488393,
                12.8394341
              ],
              [
                77.6489437,
                12.8394097
              ],
              [
                77.6489405,
                12.8393959
              ],
              [
                77.6488944,
                12.8394067
              ],
              [
                77.6488665,
                12.8393374
              ],
              [
                77.6488187,
                12.8393461
              ],
              [
                77.6488393,
                12.8394341
              ]
            ]
          },
          {
            "unit": 8,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6487919,
              12.8394001
            ],
            "ring": [
              [
                77.6487438,
                12.8393619
              ],
              [
                77.6487656,
                12.8394554
              ],
              [
                77.6488402,
                12.839438
              ],
              [
                77.6488187,
                12.8393461
              ],
              [
                77.6487859,
                12.839352
              ],
              [
                77.6487438,
                12.8393619
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6487174,
              12.8394173
            ],
            "ring": [
              [
                77.6486692,
                12.8393793
              ],
              [
                77.648691,
                12.8394728
              ],
              [
                77.6487656,
                12.8394554
              ],
              [
                77.6487438,
                12.8393619
              ],
              [
                77.6486692,
                12.8393793
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6486588,
              12.8394299
            ],
            "ring": [
              [
                77.6486901,
                12.8394689
              ],
              [
                77.6486692,
                12.8393793
              ],
              [
                77.6486296,
                12.8393885
              ],
              [
                77.6486456,
                12.8394793
              ],
              [
                77.6486901,
                12.8394689
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6486677,
              12.8395299
            ],
            "ring": [
              [
                77.6486066,
                12.839583
              ],
              [
                77.648711,
                12.8395586
              ],
              [
                77.6486901,
                12.8394689
              ],
              [
                77.6486456,
                12.8394793
              ],
              [
                77.6486575,
                12.8395464
              ],
              [
                77.6486023,
                12.8395646
              ],
              [
                77.6486066,
                12.839583
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6486729,
              12.8396312
            ],
            "ring": [
              [
                77.6486102,
                12.8395986
              ],
              [
                77.6486312,
                12.8396882
              ],
              [
                77.6487356,
                12.8396639
              ],
              [
                77.6487147,
                12.8395742
              ],
              [
                77.6486102,
                12.8395986
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506167"
      },
      "G": {
        "floors": 5,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6483646,
              12.8396748
            ],
            "ring": [
              [
                77.6484101,
                12.8397273
              ],
              [
                77.6483873,
                12.8396336
              ],
              [
                77.6483048,
                12.8396537
              ],
              [
                77.6483133,
                12.8396868
              ],
              [
                77.648369,
                12.8396733
              ],
              [
                77.6483844,
                12.8397336
              ],
              [
                77.6484101,
                12.8397273
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6484287,
              12.839671
            ],
            "ring": [
              [
                77.6483863,
                12.8396295
              ],
              [
                77.6484101,
                12.8397273
              ],
              [
                77.648471,
                12.8397125
              ],
              [
                77.6484472,
                12.8396147
              ],
              [
                77.6483863,
                12.8396295
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6484896,
              12.8396562
            ],
            "ring": [
              [
                77.6484472,
                12.8396147
              ],
              [
                77.648471,
                12.8397125
              ],
              [
                77.648532,
                12.8396977
              ],
              [
                77.6485082,
                12.8395999
              ],
              [
                77.6484472,
                12.8396147
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6485466,
              12.8396362
            ],
            "ring": [
              [
                77.6485092,
                12.839604
              ],
              [
                77.648532,
                12.8396977
              ],
              [
                77.6485678,
                12.839689
              ],
              [
                77.6485541,
                12.8396351
              ],
              [
                77.6485891,
                12.8396266
              ],
              [
                77.648579,
                12.839587
              ],
              [
                77.6485092,
                12.839604
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6485324,
              12.8395523
            ],
            "ring": [
              [
                77.6484864,
                12.8395102
              ],
              [
                77.6485092,
                12.839604
              ],
              [
                77.648579,
                12.839587
              ],
              [
                77.6485576,
                12.8395034
              ],
              [
                77.6485102,
                12.839515
              ],
              [
                77.6485076,
                12.8395051
              ],
              [
                77.6484864,
                12.8395102
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6485122,
              12.8394338
            ],
            "ring": [
              [
                77.648545,
                12.8393794
              ],
              [
                77.6484596,
                12.8394002
              ],
              [
                77.6484824,
                12.8394939
              ],
              [
                77.6485035,
                12.8394888
              ],
              [
                77.6485013,
                12.8394804
              ],
              [
                77.6485657,
                12.8394648
              ],
              [
                77.648545,
                12.8393794
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6484889,
              12.8393602
            ],
            "ring": [
              [
                77.6484368,
                12.8393065
              ],
              [
                77.6484596,
                12.8394002
              ],
              [
                77.648545,
                12.8393794
              ],
              [
                77.6485338,
                12.8393334
              ],
              [
                77.6484658,
                12.83935
              ],
              [
                77.6484537,
                12.8393024
              ],
              [
                77.6484368,
                12.8393065
              ]
            ]
          },
          {
            "unit": 8,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6484183,
              12.8393628
            ],
            "ring": [
              [
                77.6483759,
                12.8393213
              ],
              [
                77.6483997,
                12.8394191
              ],
              [
                77.6484606,
                12.8394043
              ],
              [
                77.6484368,
                12.8393065
              ],
              [
                77.6483759,
                12.8393213
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6483573,
              12.8393776
            ],
            "ring": [
              [
                77.6483149,
                12.8393361
              ],
              [
                77.6483387,
                12.8394339
              ],
              [
                77.6483997,
                12.8394191
              ],
              [
                77.6483759,
                12.8393213
              ],
              [
                77.6483149,
                12.8393361
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6482952,
              12.8394026
            ],
            "ring": [
              [
                77.6482524,
                12.8394506
              ],
              [
                77.6483377,
                12.8394298
              ],
              [
                77.6483149,
                12.8393361
              ],
              [
                77.6482836,
                12.8393437
              ],
              [
                77.6482971,
                12.8393966
              ],
              [
                77.6482425,
                12.8394098
              ],
              [
                77.6482524,
                12.8394506
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6483065,
              12.8394871
            ],
            "ring": [
              [
                77.6482524,
                12.8394506
              ],
              [
                77.6482752,
                12.8395443
              ],
              [
                77.6483605,
                12.8395236
              ],
              [
                77.6483377,
                12.8394298
              ],
              [
                77.6482524,
                12.8394506
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6483366,
              12.8396
            ],
            "ring": [
              [
                77.6483873,
                12.8396336
              ],
              [
                77.6483645,
                12.8395399
              ],
              [
                77.6483335,
                12.8395474
              ],
              [
                77.6483365,
                12.8395593
              ],
              [
                77.648284,
                12.8395721
              ],
              [
                77.6483048,
                12.8396537
              ],
              [
                77.6483873,
                12.8396336
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506175"
      },
      "H": {
        "floors": 5,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6478694,
              12.8394152
            ],
            "ring": [
              [
                77.64792,
                12.8394616
              ],
              [
                77.647892,
                12.8393687
              ],
              [
                77.6478065,
                12.8393945
              ],
              [
                77.6478181,
                12.8394329
              ],
              [
                77.6478684,
                12.8394184
              ],
              [
                77.6478847,
                12.8394722
              ],
              [
                77.64792,
                12.8394616
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6479359,
              12.8394039
            ],
            "ring": [
              [
                77.6478908,
                12.8393646
              ],
              [
                77.64792,
                12.8394616
              ],
              [
                77.6479811,
                12.8394431
              ],
              [
                77.6479518,
                12.8393462
              ],
              [
                77.6478908,
                12.8393646
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.647997,
              12.8393854
            ],
            "ring": [
              [
                77.6479518,
                12.8393462
              ],
              [
                77.6479811,
                12.8394431
              ],
              [
                77.6480422,
                12.8394246
              ],
              [
                77.6480129,
                12.8393277
              ],
              [
                77.6479518,
                12.8393462
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6480604,
              12.8393579
            ],
            "ring": [
              [
                77.6480141,
                12.8393318
              ],
              [
                77.6480422,
                12.8394246
              ],
              [
                77.6480576,
                12.83942
              ],
              [
                77.6480495,
                12.8393933
              ],
              [
                77.6481091,
                12.8393761
              ],
              [
                77.6480888,
                12.8393092
              ],
              [
                77.6480141,
                12.8393318
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6480411,
              12.8392716
            ],
            "ring": [
              [
                77.6480716,
                12.839213
              ],
              [
                77.6479861,
                12.8392389
              ],
              [
                77.6480141,
                12.8393318
              ],
              [
                77.6480888,
                12.8393092
              ],
              [
                77.6480808,
                12.8392826
              ],
              [
                77.6480917,
                12.8392795
              ],
              [
                77.6480716,
                12.839213
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6480099,
              12.8391634
            ],
            "ring": [
              [
                77.6479531,
                12.8391299
              ],
              [
                77.6479812,
                12.8392227
              ],
              [
                77.6480667,
                12.8391969
              ],
              [
                77.6480386,
                12.839104
              ],
              [
                77.6479531,
                12.8391299
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6479753,
              12.8390895
            ],
            "ring": [
              [
                77.6479251,
                12.839037
              ],
              [
                77.6479531,
                12.8391299
              ],
              [
                77.6480386,
                12.839104
              ],
              [
                77.6480299,
                12.839075
              ],
              [
                77.6479653,
                12.8390935
              ],
              [
                77.6479463,
                12.8390306
              ],
              [
                77.6479251,
                12.839037
              ]
            ]
          },
          {
            "unit": 8,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6479092,
              12.8390947
            ],
            "ring": [
              [
                77.647864,
                12.8390554
              ],
              [
                77.6478933,
                12.8391524
              ],
              [
                77.6479544,
                12.8391339
              ],
              [
                77.6479251,
                12.839037
              ],
              [
                77.647864,
                12.8390554
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6478481,
              12.8391131
            ],
            "ring": [
              [
                77.6478029,
                12.8390739
              ],
              [
                77.6478322,
                12.8391708
              ],
              [
                77.6478933,
                12.8391524
              ],
              [
                77.647864,
                12.8390554
              ],
              [
                77.6478029,
                12.8390739
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6477874,
              12.8391446
            ],
            "ring": [
              [
                77.6477455,
                12.8391926
              ],
              [
                77.647831,
                12.8391668
              ],
              [
                77.6478029,
                12.8390739
              ],
              [
                77.6477788,
                12.8390812
              ],
              [
                77.6477957,
                12.839137
              ],
              [
                77.647734,
                12.8391548
              ],
              [
                77.6477455,
                12.8391926
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6478022,
              12.8392261
            ],
            "ring": [
              [
                77.6477455,
                12.8391926
              ],
              [
                77.6477735,
                12.8392855
              ],
              [
                77.647859,
                12.8392597
              ],
              [
                77.647831,
                12.8391668
              ],
              [
                77.6477455,
                12.8391926
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6478352,
              12.8393352
            ],
            "ring": [
              [
                77.6477784,
                12.8393016
              ],
              [
                77.6478065,
                12.8393945
              ],
              [
                77.647892,
                12.8393687
              ],
              [
                77.6478639,
                12.8392758
              ],
              [
                77.6477784,
                12.8393016
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506176"
      },
      "I": {
        "floors": 5,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "E",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6481845,
              12.8397609
            ],
            "ring": [
              [
                77.6482186,
                12.8397096
              ],
              [
                77.6481311,
                12.8397361
              ],
              [
                77.6481592,
                12.839829
              ],
              [
                77.6481724,
                12.839825
              ],
              [
                77.6481677,
                12.8398015
              ],
              [
                77.6482401,
                12.8397807
              ],
              [
                77.6482186,
                12.8397096
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6481133,
              12.83979
            ],
            "ring": [
              [
                77.6480674,
                12.839751
              ],
              [
                77.6480967,
                12.8398479
              ],
              [
                77.6481592,
                12.839829
              ],
              [
                77.6481299,
                12.8397321
              ],
              [
                77.6480674,
                12.839751
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6480508,
              12.8398089
            ],
            "ring": [
              [
                77.6480967,
                12.8398479
              ],
              [
                77.6480674,
                12.839751
              ],
              [
                77.6480049,
                12.8397699
              ],
              [
                77.6480341,
                12.8398666
              ],
              [
                77.6480384,
                12.8398655
              ],
              [
                77.6480967,
                12.8398479
              ]
            ]
          },
          {
            "unit": 4,
            "side": "W",
            "wing": "east bar, north outer",
            "center": [
              77.6479783,
              12.8398249
            ],
            "ring": [
              [
                77.6480061,
                12.8397739
              ],
              [
                77.6479186,
                12.8398004
              ],
              [
                77.6479375,
                12.8398629
              ],
              [
                77.6479875,
                12.8398486
              ],
              [
                77.6479952,
                12.8398758
              ],
              [
                77.6480341,
                12.8398666
              ],
              [
                77.6480061,
                12.8397739
              ]
            ]
          },
          {
            "unit": 5,
            "side": "W",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6479483,
              12.8397407
            ],
            "ring": [
              [
                77.6478905,
                12.8397075
              ],
              [
                77.6479186,
                12.8398004
              ],
              [
                77.6480061,
                12.8397739
              ],
              [
                77.647978,
                12.839681
              ],
              [
                77.6478905,
                12.8397075
              ]
            ]
          },
          {
            "unit": 6,
            "side": "W",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6479153,
              12.8396317
            ],
            "ring": [
              [
                77.6478575,
                12.8395985
              ],
              [
                77.6478856,
                12.8396914
              ],
              [
                77.6479731,
                12.8396649
              ],
              [
                77.647945,
                12.839572
              ],
              [
                77.6478575,
                12.8395985
              ]
            ]
          },
          {
            "unit": 7,
            "side": "W",
            "wing": "east bar, south outer",
            "center": [
              77.6479068,
              12.8395455
            ],
            "ring": [
              [
                77.6478575,
                12.8395985
              ],
              [
                77.647945,
                12.839572
              ],
              [
                77.6479169,
                12.8394791
              ],
              [
                77.6478893,
                12.8394875
              ],
              [
                77.6479116,
                12.839561
              ],
              [
                77.6478514,
                12.8395783
              ],
              [
                77.6478575,
                12.8395985
              ]
            ]
          },
          {
            "unit": 8,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6479628,
              12.8395181
            ],
            "ring": [
              [
                77.6479169,
                12.8394791
              ],
              [
                77.6479462,
                12.8395761
              ],
              [
                77.6480087,
                12.8395571
              ],
              [
                77.6479794,
                12.8394602
              ],
              [
                77.6479169,
                12.8394791
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6480253,
              12.8394992
            ],
            "ring": [
              [
                77.6479794,
                12.8394602
              ],
              [
                77.6480087,
                12.8395571
              ],
              [
                77.6480712,
                12.8395382
              ],
              [
                77.6480419,
                12.8394413
              ],
              [
                77.6479794,
                12.8394602
              ]
            ]
          },
          {
            "unit": 10,
            "side": "E",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.648094,
              12.839494
            ],
            "ring": [
              [
                77.6480419,
                12.8394413
              ],
              [
                77.64807,
                12.8395342
              ],
              [
                77.6481575,
                12.8395077
              ],
              [
                77.6481482,
                12.839477
              ],
              [
                77.6480807,
                12.8394964
              ],
              [
                77.6480643,
                12.8394421
              ],
              [
                77.6480622,
                12.8394352
              ],
              [
                77.6480419,
                12.8394413
              ]
            ]
          },
          {
            "unit": 11,
            "side": "E",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6481278,
              12.8395674
            ],
            "ring": [
              [
                77.64807,
                12.8395342
              ],
              [
                77.6480981,
                12.8396271
              ],
              [
                77.6481856,
                12.8396006
              ],
              [
                77.6481575,
                12.8395077
              ],
              [
                77.64807,
                12.8395342
              ]
            ]
          },
          {
            "unit": 12,
            "side": "E",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6481608,
              12.8396764
            ],
            "ring": [
              [
                77.648103,
                12.8396432
              ],
              [
                77.6481311,
                12.8397361
              ],
              [
                77.6482186,
                12.8397096
              ],
              [
                77.6481905,
                12.8396168
              ],
              [
                77.648103,
                12.8396432
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506176"
      },
      "K": {
        "floors": 5,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "E",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6478509,
              12.8399088
            ],
            "ring": [
              [
                77.6478865,
                12.8398387
              ],
              [
                77.6477946,
                12.8398612
              ],
              [
                77.6478311,
                12.8400102
              ],
              [
                77.6478548,
                12.8400044
              ],
              [
                77.6478409,
                12.839956
              ],
              [
                77.6479106,
                12.8399372
              ],
              [
                77.6478865,
                12.8398387
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6477793,
              12.8399405
            ],
            "ring": [
              [
                77.6477275,
                12.8398708
              ],
              [
                77.6477656,
                12.8400263
              ],
              [
                77.6478311,
                12.8400102
              ],
              [
                77.6477931,
                12.8398547
              ],
              [
                77.6477275,
                12.8398708
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6477137,
              12.8399566
            ],
            "ring": [
              [
                77.6476619,
                12.8398869
              ],
              [
                77.6477,
                12.8400423
              ],
              [
                77.6477656,
                12.8400263
              ],
              [
                77.6477275,
                12.8398708
              ],
              [
                77.6476619,
                12.8398869
              ]
            ]
          },
          {
            "unit": 4,
            "side": "W",
            "wing": "east bar, north outer",
            "center": [
              77.647637,
              12.8399639
            ],
            "ring": [
              [
                77.6477,
                12.8400423
              ],
              [
                77.6476635,
                12.8398933
              ],
              [
                77.647572,
                12.8399157
              ],
              [
                77.6476018,
                12.8400202
              ],
              [
                77.647661,
                12.8400041
              ],
              [
                77.6476737,
                12.8400488
              ],
              [
                77.6477,
                12.8400423
              ]
            ]
          },
          {
            "unit": 5,
            "side": "W",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6475993,
              12.8398301
            ],
            "ring": [
              [
                77.6476635,
                12.8398933
              ],
              [
                77.647627,
                12.8397443
              ],
              [
                77.6475351,
                12.8397668
              ],
              [
                77.6475693,
                12.8399065
              ],
              [
                77.647572,
                12.8399157
              ],
              [
                77.6476635,
                12.8398933
              ]
            ]
          },
          {
            "unit": 6,
            "side": "W",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6475819,
              12.8396555
            ],
            "ring": [
              [
                77.6475288,
                12.8397409
              ],
              [
                77.6476206,
                12.8397184
              ],
              [
                77.6475841,
                12.8395694
              ],
              [
                77.6475616,
                12.8395749
              ],
              [
                77.6475492,
                12.8395934
              ],
              [
                77.6475835,
                12.8397171
              ],
              [
                77.6475267,
                12.8397324
              ],
              [
                77.6475288,
                12.8397409
              ]
            ]
          },
          {
            "unit": 7,
            "side": "W",
            "wing": "east bar, south outer",
            "center": [
              77.64752,
              12.8395062
            ],
            "ring": [
              [
                77.6475476,
                12.8394204
              ],
              [
                77.6475841,
                12.8395694
              ],
              [
                77.6474923,
                12.8395919
              ],
              [
                77.6474558,
                12.8394429
              ],
              [
                77.6475476,
                12.8394204
              ]
            ]
          },
          {
            "unit": 8,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.647617,
              12.8395261
            ],
            "ring": [
              [
                77.6475857,
                12.8395759
              ],
              [
                77.6476513,
                12.8395598
              ],
              [
                77.6476192,
                12.8394289
              ],
              [
                77.6476088,
                12.8395048
              ],
              [
                77.6475791,
                12.8395489
              ],
              [
                77.6475857,
                12.8395759
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6476656,
              12.8394748
            ],
            "ring": [
              [
                77.6476513,
                12.8395598
              ],
              [
                77.6477169,
                12.8395438
              ],
              [
                77.6476788,
                12.8393883
              ],
              [
                77.6476229,
                12.839402
              ],
              [
                77.6476192,
                12.8394289
              ],
              [
                77.6476513,
                12.8395598
              ]
            ]
          },
          {
            "unit": 10,
            "side": "E",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6477407,
              12.8394554
            ],
            "ring": [
              [
                77.6476788,
                12.8393883
              ],
              [
                77.6477153,
                12.8395373
              ],
              [
                77.6478071,
                12.8395148
              ],
              [
                77.6477861,
                12.8394289
              ],
              [
                77.6477543,
                12.8394375
              ],
              [
                77.6477541,
                12.8394376
              ],
              [
                77.6477467,
                12.8394174
              ],
              [
                77.6477729,
                12.8394082
              ],
              [
                77.6477584,
                12.8393688
              ],
              [
                77.6476788,
                12.8393883
              ]
            ]
          },
          {
            "unit": 11,
            "side": "E",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6477822,
              12.8396203
            ],
            "ring": [
              [
                77.6478071,
                12.8395148
              ],
              [
                77.6477153,
                12.8395373
              ],
              [
                77.6477518,
                12.8396863
              ],
              [
                77.6478399,
                12.8396647
              ],
              [
                77.647808,
                12.8395531
              ],
              [
                77.6477624,
                12.8395655
              ],
              [
                77.6477696,
                12.8395908
              ],
              [
                77.6477373,
                12.8395973
              ],
              [
                77.6477208,
                12.8395395
              ],
              [
                77.6478074,
                12.8395159
              ],
              [
                77.6478071,
                12.8395148
              ]
            ]
          },
          {
            "unit": 12,
            "side": "E",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6478221,
              12.8397759
            ],
            "ring": [
              [
                77.6477581,
                12.8397122
              ],
              [
                77.6477946,
                12.8398612
              ],
              [
                77.6478865,
                12.8398387
              ],
              [
                77.647868,
                12.8397634
              ],
              [
                77.6478472,
                12.8396904
              ],
              [
                77.6477581,
                12.8397122
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506174"
      },
      "L": {
        "floors": 5,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "N",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6477158,
              12.840344
            ],
            "ring": [
              [
                77.6477664,
                12.8403879
              ],
              [
                77.6477458,
                12.8402998
              ],
              [
                77.647641,
                12.8403244
              ],
              [
                77.6476476,
                12.8403527
              ],
              [
                77.6477066,
                12.8403389
              ],
              [
                77.6477213,
                12.8403985
              ],
              [
                77.6477664,
                12.8403879
              ]
            ]
          },
          {
            "unit": 2,
            "side": "W",
            "wing": "north stub, west",
            "center": [
              77.6476883,
              12.8402801
            ],
            "ring": [
              [
                77.6476262,
                12.8402615
              ],
              [
                77.647641,
                12.8403244
              ],
              [
                77.6477503,
                12.8402988
              ],
              [
                77.6477356,
                12.8402358
              ],
              [
                77.6476262,
                12.8402615
              ]
            ]
          },
          {
            "unit": 3,
            "side": "W",
            "wing": "north stub, east",
            "center": [
              77.6476735,
              12.8402172
            ],
            "ring": [
              [
                77.6476115,
                12.8401986
              ],
              [
                77.6476262,
                12.8402615
              ],
              [
                77.6477356,
                12.8402358
              ],
              [
                77.6477208,
                12.8401729
              ],
              [
                77.6476115,
                12.8401986
              ]
            ]
          },
          {
            "unit": 4,
            "side": "S",
            "wing": "east bar, north outer",
            "center": [
              77.6476785,
              12.84014
            ],
            "ring": [
              [
                77.6476115,
                12.8401986
              ],
              [
                77.6477162,
                12.840174
              ],
              [
                77.6476956,
                12.8400859
              ],
              [
                77.6476478,
                12.8400971
              ],
              [
                77.6476677,
                12.840178
              ],
              [
                77.6476098,
                12.8401916
              ],
              [
                77.6476115,
                12.8401986
              ]
            ]
          },
          {
            "unit": 5,
            "side": "S",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6477583,
              12.8401176
            ],
            "ring": [
              [
                77.6476956,
                12.8400859
              ],
              [
                77.6477162,
                12.840174
              ],
              [
                77.647821,
                12.8401494
              ],
              [
                77.6478003,
                12.8400613
              ],
              [
                77.6476956,
                12.8400859
              ]
            ]
          },
          {
            "unit": 6,
            "side": "S",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6478813,
              12.8400888
            ],
            "ring": [
              [
                77.6478186,
                12.840057
              ],
              [
                77.6478392,
                12.8401451
              ],
              [
                77.647944,
                12.8401205
              ],
              [
                77.6479234,
                12.8400324
              ],
              [
                77.6478186,
                12.840057
              ]
            ]
          },
          {
            "unit": 7,
            "side": "S",
            "wing": "east bar, south outer",
            "center": [
              77.6479861,
              12.8400642
            ],
            "ring": [
              [
                77.6479234,
                12.8400324
              ],
              [
                77.647944,
                12.8401205
              ],
              [
                77.6480488,
                12.8400959
              ],
              [
                77.6480281,
                12.8400078
              ],
              [
                77.6479234,
                12.8400324
              ]
            ]
          },
          {
            "unit": 8,
            "side": "E",
            "wing": "south stub, east",
            "center": [
              77.6480015,
              12.8401402
            ],
            "ring": [
              [
                77.6479395,
                12.8401216
              ],
              [
                77.6479542,
                12.8401845
              ],
              [
                77.6480636,
                12.8401589
              ],
              [
                77.6480488,
                12.8400959
              ],
              [
                77.6479395,
                12.8401216
              ]
            ]
          },
          {
            "unit": 9,
            "side": "E",
            "wing": "south stub, west",
            "center": [
              77.6480163,
              12.8402032
            ],
            "ring": [
              [
                77.6479542,
                12.8401845
              ],
              [
                77.647969,
                12.8402475
              ],
              [
                77.6480783,
                12.8402218
              ],
              [
                77.6480636,
                12.8401589
              ],
              [
                77.6479542,
                12.8401845
              ]
            ]
          },
          {
            "unit": 10,
            "side": "N",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6480174,
              12.840274
            ],
            "ring": [
              [
                77.6480783,
                12.8402218
              ],
              [
                77.6479736,
                12.8402464
              ],
              [
                77.6479934,
                12.8403308
              ],
              [
                77.6480469,
                12.8403183
              ],
              [
                77.64804,
                12.8402903
              ],
              [
                77.6480218,
                12.8402946
              ],
              [
                77.6480129,
                12.8402584
              ],
              [
                77.6480831,
                12.840242
              ],
              [
                77.6480783,
                12.8402218
              ]
            ]
          },
          {
            "unit": 11,
            "side": "N",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6479307,
              12.8403005
            ],
            "ring": [
              [
                77.6479736,
                12.8402464
              ],
              [
                77.6478688,
                12.840271
              ],
              [
                77.6478894,
                12.8403591
              ],
              [
                77.6479224,
                12.8403513
              ],
              [
                77.6479194,
                12.8403392
              ],
              [
                77.6479565,
                12.8403305
              ],
              [
                77.6479595,
                12.8403426
              ],
              [
                77.6479773,
                12.8403385
              ],
              [
                77.6479764,
                12.8403348
              ],
              [
                77.6479934,
                12.8403308
              ],
              [
                77.6479736,
                12.8402464
              ]
            ]
          },
          {
            "unit": 12,
            "side": "N",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6478093,
              12.8403293
            ],
            "ring": [
              [
                77.6478712,
                12.8403633
              ],
              [
                77.6478506,
                12.8402752
              ],
              [
                77.6477458,
                12.8402998
              ],
              [
                77.6477664,
                12.8403879
              ],
              [
                77.6477747,
                12.840386
              ],
              [
                77.6477718,
                12.8403745
              ],
              [
                77.6478118,
                12.8403651
              ],
              [
                77.6478146,
                12.8403766
              ],
              [
                77.6478712,
                12.8403633
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506170"
      },
      "M": {
        "floors": 5,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "N",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6477802,
              12.8406482
            ],
            "ring": [
              [
                77.6478333,
                12.8406863
              ],
              [
                77.6478146,
                12.8406066
              ],
              [
                77.6477098,
                12.8406312
              ],
              [
                77.6477181,
                12.8406664
              ],
              [
                77.647777,
                12.8406526
              ],
              [
                77.647788,
                12.840697
              ],
              [
                77.6478333,
                12.8406863
              ]
            ]
          },
          {
            "unit": 2,
            "side": "W",
            "wing": "north stub, west",
            "center": [
              77.6477578,
              12.8405899
            ],
            "ring": [
              [
                77.6476965,
                12.8405742
              ],
              [
                77.6477098,
                12.8406312
              ],
              [
                77.6478192,
                12.8406056
              ],
              [
                77.6478058,
                12.8405486
              ],
              [
                77.6476965,
                12.8405742
              ]
            ]
          },
          {
            "unit": 3,
            "side": "W",
            "wing": "north stub, east",
            "center": [
              77.6477445,
              12.840533
            ],
            "ring": [
              [
                77.6476831,
                12.8405173
              ],
              [
                77.6476965,
                12.8405742
              ],
              [
                77.6478058,
                12.8405486
              ],
              [
                77.6477925,
                12.8404917
              ],
              [
                77.6476831,
                12.8405173
              ]
            ]
          },
          {
            "unit": 4,
            "side": "S",
            "wing": "east bar, north outer",
            "center": [
              77.647748,
              12.8404655
            ],
            "ring": [
              [
                77.6476831,
                12.8405173
              ],
              [
                77.6477879,
                12.8404927
              ],
              [
                77.6477692,
                12.840413
              ],
              [
                77.6477216,
                12.8404242
              ],
              [
                77.6477382,
                12.8404917
              ],
              [
                77.6476803,
                12.8405053
              ],
              [
                77.6476831,
                12.8405173
              ]
            ]
          },
          {
            "unit": 5,
            "side": "S",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6478309,
              12.8404406
            ],
            "ring": [
              [
                77.6477692,
                12.840413
              ],
              [
                77.6477879,
                12.8404927
              ],
              [
                77.6478927,
                12.8404682
              ],
              [
                77.647874,
                12.8403884
              ],
              [
                77.6477692,
                12.840413
              ]
            ]
          },
          {
            "unit": 6,
            "side": "S",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6479539,
              12.8404117
            ],
            "ring": [
              [
                77.6478922,
                12.8403842
              ],
              [
                77.6479109,
                12.8404639
              ],
              [
                77.6480157,
                12.8404393
              ],
              [
                77.647997,
                12.8403596
              ],
              [
                77.6478922,
                12.8403842
              ]
            ]
          },
          {
            "unit": 7,
            "side": "S",
            "wing": "east bar, south outer",
            "center": [
              77.6480437,
              12.8404049
            ],
            "ring": [
              [
                77.647997,
                12.8403596
              ],
              [
                77.6480157,
                12.8404393
              ],
              [
                77.6481204,
                12.8404148
              ],
              [
                77.6481164,
                12.8403974
              ],
              [
                77.6480354,
                12.8404164
              ],
              [
                77.6480201,
                12.8403542
              ],
              [
                77.647997,
                12.8403596
              ]
            ]
          },
          {
            "unit": 8,
            "side": "E",
            "wing": "south stub, east",
            "center": [
              77.6480724,
              12.840456
            ],
            "ring": [
              [
                77.6480111,
                12.8404404
              ],
              [
                77.6480245,
                12.8404973
              ],
              [
                77.6481338,
                12.8404717
              ],
              [
                77.6481204,
                12.8404148
              ],
              [
                77.6480111,
                12.8404404
              ]
            ]
          },
          {
            "unit": 9,
            "side": "E",
            "wing": "south stub, west",
            "center": [
              77.6480858,
              12.840513
            ],
            "ring": [
              [
                77.6480245,
                12.8404973
              ],
              [
                77.6480378,
                12.8405543
              ],
              [
                77.6481471,
                12.8405286
              ],
              [
                77.6481338,
                12.8404717
              ],
              [
                77.6480245,
                12.8404973
              ]
            ]
          },
          {
            "unit": 10,
            "side": "N",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6480881,
              12.8405709
            ],
            "ring": [
              [
                77.6481471,
                12.8405286
              ],
              [
                77.6480424,
                12.8405532
              ],
              [
                77.6480611,
                12.8406329
              ],
              [
                77.6480884,
                12.8406265
              ],
              [
                77.6480755,
                12.840574
              ],
              [
                77.6481535,
                12.8405557
              ],
              [
                77.6481471,
                12.8405286
              ]
            ]
          },
          {
            "unit": 11,
            "side": "N",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6479993,
              12.8406054
            ],
            "ring": [
              [
                77.6479376,
                12.8405778
              ],
              [
                77.6479563,
                12.8406575
              ],
              [
                77.6480611,
                12.8406329
              ],
              [
                77.6480424,
                12.8405532
              ],
              [
                77.6479376,
                12.8405778
              ]
            ]
          },
          {
            "unit": 12,
            "side": "N",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6478763,
              12.8406342
            ],
            "ring": [
              [
                77.6478146,
                12.8406066
              ],
              [
                77.6478333,
                12.8406863
              ],
              [
                77.6479381,
                12.8406618
              ],
              [
                77.6479194,
                12.8405821
              ],
              [
                77.6478146,
                12.8406066
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506169"
      },
      "N": {
        "floors": 5,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "N",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6478534,
              12.8410524
            ],
            "ring": [
              [
                77.6478137,
                12.8410891
              ],
              [
                77.6478885,
                12.8410697
              ],
              [
                77.6478658,
                12.8409819
              ],
              [
                77.6478537,
                12.840985
              ],
              [
                77.6478713,
                12.8410466
              ],
              [
                77.6478072,
                12.841064
              ],
              [
                77.6478137,
                12.8410891
              ]
            ]
          },
          {
            "unit": 2,
            "side": "W",
            "wing": "north stub, west",
            "center": [
              77.6478219,
              12.8409597
            ],
            "ring": [
              [
                77.6478528,
                12.8409183
              ],
              [
                77.647869,
                12.840981
              ],
              [
                77.6477909,
                12.8410012
              ],
              [
                77.6477747,
                12.8409385
              ],
              [
                77.6478528,
                12.8409183
              ]
            ]
          },
          {
            "unit": 3,
            "side": "W",
            "wing": "north stub, east",
            "center": [
              77.6478062,
              12.8408905
            ],
            "ring": [
              [
                77.6478528,
                12.8409183
              ],
              [
                77.6478366,
                12.8408555
              ],
              [
                77.6477585,
                12.8408757
              ],
              [
                77.6477706,
                12.8409225
              ],
              [
                77.6478312,
                12.840906
              ],
              [
                77.6478359,
                12.8409226
              ],
              [
                77.6478528,
                12.8409183
              ]
            ]
          },
          {
            "unit": 4,
            "side": "S",
            "wing": "east bar, north outer",
            "center": [
              77.6477845,
              12.8408221
            ],
            "ring": [
              [
                77.6477358,
                12.8407879
              ],
              [
                77.6477585,
                12.8408757
              ],
              [
                77.6478333,
                12.8408564
              ],
              [
                77.6478106,
                12.8407685
              ],
              [
                77.6477358,
                12.8407879
              ]
            ]
          },
          {
            "unit": 5,
            "side": "S",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6478567,
              12.840811
            ],
            "ring": [
              [
                77.6478106,
                12.8407685
              ],
              [
                77.6478333,
                12.8408564
              ],
              [
                77.6479082,
                12.840837
              ],
              [
                77.6478942,
                12.8407831
              ],
              [
                77.6478546,
                12.8407938
              ],
              [
                77.6478449,
                12.8407597
              ],
              [
                77.6478106,
                12.8407685
              ]
            ]
          },
          {
            "unit": 6,
            "side": "S",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6479488,
              12.8407807
            ],
            "ring": [
              [
                77.6479212,
                12.8408336
              ],
              [
                77.647996,
                12.8408143
              ],
              [
                77.6479733,
                12.8407264
              ],
              [
                77.6479053,
                12.8407441
              ],
              [
                77.6479148,
                12.8407775
              ],
              [
                77.6479072,
                12.8407796
              ],
              [
                77.6479212,
                12.8408336
              ]
            ]
          },
          {
            "unit": 7,
            "side": "S",
            "wing": "east bar, south outer",
            "center": [
              77.6480183,
              12.8407585
            ],
            "ring": [
              [
                77.6480481,
                12.8407071
              ],
              [
                77.6479733,
                12.8407264
              ],
              [
                77.647996,
                12.8408143
              ],
              [
                77.6480516,
                12.8407999
              ],
              [
                77.6480422,
                12.840767
              ],
              [
                77.6480622,
                12.8407615
              ],
              [
                77.6480481,
                12.8407071
              ]
            ]
          },
          {
            "unit": 8,
            "side": "E",
            "wing": "south stub, east",
            "center": [
              77.6480306,
              12.8408388
            ],
            "ring": [
              [
                77.6479928,
                12.8408151
              ],
              [
                77.648009,
                12.8408779
              ],
              [
                77.648013,
                12.8408768
              ],
              [
                77.6480692,
                12.8408616
              ],
              [
                77.6480516,
                12.8407999
              ],
              [
                77.6479928,
                12.8408151
              ]
            ]
          },
          {
            "unit": 9,
            "side": "E",
            "wing": "south stub, west",
            "center": [
              77.6480562,
              12.8408991
            ],
            "ring": [
              [
                77.6480871,
                12.8408577
              ],
              [
                77.6481033,
                12.8409204
              ],
              [
                77.6480252,
                12.8409406
              ],
              [
                77.648009,
                12.8408779
              ],
              [
                77.6480871,
                12.8408577
              ]
            ]
          },
          {
            "unit": 10,
            "side": "N",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6480724,
              12.8410022
            ],
            "ring": [
              [
                77.6480285,
                12.8409398
              ],
              [
                77.6480512,
                12.8410276
              ],
              [
                77.6481048,
                12.8410137
              ],
              [
                77.6480946,
                12.840978
              ],
              [
                77.6480436,
                12.8409919
              ],
              [
                77.6480287,
                12.8409397
              ],
              [
                77.6480285,
                12.8409398
              ]
            ]
          },
          {
            "unit": 11,
            "side": "N",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6480024,
              12.8409934
            ],
            "ring": [
              [
                77.6479536,
                12.8409591
              ],
              [
                77.6479764,
                12.841047
              ],
              [
                77.6480512,
                12.8410276
              ],
              [
                77.6480285,
                12.8409398
              ],
              [
                77.6479536,
                12.8409591
              ]
            ]
          },
          {
            "unit": 12,
            "side": "N",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6479146,
              12.8410161
            ],
            "ring": [
              [
                77.6478658,
                12.8409819
              ],
              [
                77.6478885,
                12.8410697
              ],
              [
                77.6479633,
                12.8410503
              ],
              [
                77.6479406,
                12.8409625
              ],
              [
                77.6478658,
                12.8409819
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506172"
      },
      "O": {
        "floors": 5,
        "perFloor": 12,
        "layout": "plus",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "E",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6481221,
              12.8412958
            ],
            "ring": [
              [
                77.6481661,
                12.841251
              ],
              [
                77.6480836,
                12.8412746
              ],
              [
                77.6481043,
                12.8413472
              ],
              [
                77.6481431,
                12.8413361
              ],
              [
                77.6481287,
                12.8412855
              ],
              [
                77.6481726,
                12.8412736
              ],
              [
                77.6481661,
                12.841251
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.648064,
              12.8413177
            ],
            "ring": [
              [
                77.6480237,
                12.8412883
              ],
              [
                77.6480453,
                12.841364
              ],
              [
                77.6481043,
                12.8413472
              ],
              [
                77.6480827,
                12.8412714
              ],
              [
                77.6480237,
                12.8412883
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.648005,
              12.8413345
            ],
            "ring": [
              [
                77.6479647,
                12.8413051
              ],
              [
                77.6479863,
                12.8413808
              ],
              [
                77.6480453,
                12.841364
              ],
              [
                77.6480237,
                12.8412883
              ],
              [
                77.6479647,
                12.8413051
              ]
            ]
          },
          {
            "unit": 4,
            "side": "W",
            "wing": "east bar, north outer",
            "center": [
              77.6479458,
              12.8413442
            ],
            "ring": [
              [
                77.6479863,
                12.8413808
              ],
              [
                77.6479656,
                12.8413083
              ],
              [
                77.647883,
                12.8413318
              ],
              [
                77.6478882,
                12.8413501
              ],
              [
                77.6479408,
                12.8413358
              ],
              [
                77.6479561,
                12.8413895
              ],
              [
                77.6479863,
                12.8413808
              ]
            ]
          },
          {
            "unit": 5,
            "side": "W",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6479139,
              12.8412837
            ],
            "ring": [
              [
                77.6478623,
                12.8412592
              ],
              [
                77.647883,
                12.8413318
              ],
              [
                77.6479656,
                12.8413083
              ],
              [
                77.6479449,
                12.8412357
              ],
              [
                77.6478623,
                12.8412592
              ]
            ]
          },
          {
            "unit": 6,
            "side": "W",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6478896,
              12.8411985
            ],
            "ring": [
              [
                77.647838,
                12.841174
              ],
              [
                77.6478587,
                12.8412466
              ],
              [
                77.6479413,
                12.841223
              ],
              [
                77.6479205,
                12.8411505
              ],
              [
                77.647838,
                12.841174
              ]
            ]
          },
          {
            "unit": 7,
            "side": "W",
            "wing": "east bar, south outer",
            "center": [
              77.6478689,
              12.8411259
            ],
            "ring": [
              [
                77.6478173,
                12.8411014
              ],
              [
                77.647838,
                12.841174
              ],
              [
                77.6479205,
                12.8411505
              ],
              [
                77.6478998,
                12.8410779
              ],
              [
                77.6478173,
                12.8411014
              ]
            ]
          },
          {
            "unit": 8,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6479401,
              12.8411073
            ],
            "ring": [
              [
                77.6478998,
                12.8410779
              ],
              [
                77.6479214,
                12.8411536
              ],
              [
                77.6479804,
                12.8411368
              ],
              [
                77.6479588,
                12.841061
              ],
              [
                77.6478998,
                12.8410779
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6479991,
              12.8410905
            ],
            "ring": [
              [
                77.6479588,
                12.841061
              ],
              [
                77.6479804,
                12.8411368
              ],
              [
                77.6480394,
                12.8411199
              ],
              [
                77.6480178,
                12.8410442
              ],
              [
                77.6479588,
                12.841061
              ]
            ]
          },
          {
            "unit": 10,
            "side": "E",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6480694,
              12.8410688
            ],
            "ring": [
              [
                77.6480178,
                12.8410442
              ],
              [
                77.6480385,
                12.8411168
              ],
              [
                77.6481211,
                12.8410932
              ],
              [
                77.6481006,
                12.8410215
              ],
              [
                77.6480655,
                12.8410306
              ],
              [
                77.6480178,
                12.8410442
              ]
            ]
          },
          {
            "unit": 11,
            "side": "E",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6480902,
              12.8411413
            ],
            "ring": [
              [
                77.6480385,
                12.8411168
              ],
              [
                77.6480592,
                12.8411894
              ],
              [
                77.6481418,
                12.8411658
              ],
              [
                77.6481211,
                12.8410932
              ],
              [
                77.6480385,
                12.8411168
              ]
            ]
          },
          {
            "unit": 12,
            "side": "E",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6481145,
              12.8412265
            ],
            "ring": [
              [
                77.6480628,
                12.841202
              ],
              [
                77.6480836,
                12.8412746
              ],
              [
                77.6481661,
                12.841251
              ],
              [
                77.6481454,
                12.8411784
              ],
              [
                77.6480628,
                12.841202
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506172"
      },
      "P": {
        "floors": 5,
        "perFloor": 16,
        "layout": "u_east",
        "unitCount": 80,
        "slots": [
          {
            "unit": 1,
            "side": "E",
            "wing": "north wing",
            "center": [
              77.6484578,
              12.8410444
            ],
            "ring": [
              [
                77.6484211,
                12.8410011
              ],
              [
                77.6484516,
                12.8411279
              ],
              [
                77.6484746,
                12.8411224
              ],
              [
                77.6484583,
                12.8410583
              ],
              [
                77.6484971,
                12.8410498
              ],
              [
                77.6484887,
                12.8410145
              ],
              [
                77.6484784,
                12.8409874
              ],
              [
                77.6484211,
                12.8410011
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north wing",
            "center": [
              77.6484067,
              12.8410717
            ],
            "ring": [
              [
                77.6483603,
                12.8410157
              ],
              [
                77.6483908,
                12.8411425
              ],
              [
                77.648453,
                12.8411276
              ],
              [
                77.6484225,
                12.8410008
              ],
              [
                77.6483603,
                12.8410157
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north wing",
            "center": [
              77.6483459,
              12.8410863
            ],
            "ring": [
              [
                77.6482996,
                12.8410304
              ],
              [
                77.64833,
                12.8411571
              ],
              [
                77.6483923,
                12.8411422
              ],
              [
                77.6483618,
                12.8410154
              ],
              [
                77.6482996,
                12.8410304
              ]
            ]
          },
          {
            "unit": 4,
            "side": "N",
            "wing": "north wing",
            "center": [
              77.6482879,
              12.8410936
            ],
            "ring": [
              [
                77.6483315,
                12.8411568
              ],
              [
                77.648301,
                12.84103
              ],
              [
                77.6482388,
                12.841045
              ],
              [
                77.6482535,
                12.841106
              ],
              [
                77.6482733,
                12.8411013
              ],
              [
                77.6482899,
                12.8411668
              ],
              [
                77.6483315,
                12.8411568
              ]
            ]
          },
          {
            "unit": 5,
            "side": "W",
            "wing": "north wing",
            "center": [
              77.6482242,
              12.8410807
            ],
            "ring": [
              [
                77.6482403,
                12.8410446
              ],
              [
                77.6481933,
                12.8410559
              ],
              [
                77.6482086,
                12.8411168
              ],
              [
                77.6482549,
                12.8411057
              ],
              [
                77.6482403,
                12.8410446
              ]
            ]
          },
          {
            "unit": 6,
            "side": "W",
            "wing": "east bar",
            "center": [
              77.6482272,
              12.8410343
            ],
            "ring": [
              [
                77.6482675,
                12.8410384
              ],
              [
                77.6482612,
                12.8410124
              ],
              [
                77.6481868,
                12.8410303
              ],
              [
                77.6481933,
                12.8410562
              ],
              [
                77.6482675,
                12.8410384
              ]
            ]
          },
          {
            "unit": 7,
            "side": "W",
            "wing": "east bar",
            "center": [
              77.648221,
              12.841009
            ],
            "ring": [
              [
                77.6482614,
                12.841013
              ],
              [
                77.6482551,
                12.8409871
              ],
              [
                77.6481804,
                12.841005
              ],
              [
                77.648187,
                12.8410309
              ],
              [
                77.6482614,
                12.841013
              ]
            ]
          },
          {
            "unit": 8,
            "side": "W",
            "wing": "east bar",
            "center": [
              77.6482255,
              12.8409851
            ],
            "ring": [
              [
                77.6482553,
                12.8409877
              ],
              [
                77.648249,
                12.8409617
              ],
              [
                77.6482262,
                12.8409672
              ],
              [
                77.6482306,
                12.8409845
              ],
              [
                77.6481784,
                12.840997
              ],
              [
                77.6481806,
                12.8410056
              ],
              [
                77.6482553,
                12.8409877
              ]
            ]
          },
          {
            "unit": 9,
            "side": "W",
            "wing": "east bar",
            "center": [
              77.648209,
              12.8409539
            ],
            "ring": [
              [
                77.6482492,
                12.8409623
              ],
              [
                77.6482429,
                12.8409364
              ],
              [
                77.6481543,
                12.8409577
              ],
              [
                77.648157,
                12.840969
              ],
              [
                77.6482227,
                12.8409532
              ],
              [
                77.6482264,
                12.8409678
              ],
              [
                77.6482492,
                12.8409623
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "east bar",
            "center": [
              77.648196,
              12.8409347
            ],
            "ring": [
              [
                77.6481545,
                12.8409583
              ],
              [
                77.6482431,
                12.840937
              ],
              [
                77.6482368,
                12.840911
              ],
              [
                77.6481642,
                12.8409285
              ],
              [
                77.6481645,
                12.8409298
              ],
              [
                77.6481485,
                12.8409336
              ],
              [
                77.6481545,
                12.8409583
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "east bar",
            "center": [
              77.6481974,
              12.8409074
            ],
            "ring": [
              [
                77.648237,
                12.8409116
              ],
              [
                77.6482307,
                12.8408857
              ],
              [
                77.6481578,
                12.8409032
              ],
              [
                77.6481643,
                12.8409291
              ],
              [
                77.648237,
                12.8409116
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "south wing",
            "center": [
              77.648172,
              12.8408658
            ],
            "ring": [
              [
                77.6482022,
                12.8408928
              ],
              [
                77.6481867,
                12.8408281
              ],
              [
                77.6481415,
                12.840839
              ],
              [
                77.6481578,
                12.8409035
              ],
              [
                77.6482022,
                12.8408928
              ]
            ]
          },
          {
            "unit": 13,
            "side": "S",
            "wing": "south wing",
            "center": [
              77.6482187,
              12.8408224
            ],
            "ring": [
              [
                77.6482037,
                12.8408925
              ],
              [
                77.648263,
                12.8408782
              ],
              [
                77.6482325,
                12.8407515
              ],
              [
                77.6481749,
                12.8407653
              ],
              [
                77.6481905,
                12.8408272
              ],
              [
                77.6481881,
                12.8408278
              ],
              [
                77.6482037,
                12.8408925
              ]
            ]
          },
          {
            "unit": 14,
            "side": "S",
            "wing": "south wing",
            "center": [
              77.6482789,
              12.8408074
            ],
            "ring": [
              [
                77.648234,
                12.8407511
              ],
              [
                77.6482645,
                12.8408779
              ],
              [
                77.6483238,
                12.8408636
              ],
              [
                77.6482933,
                12.8407369
              ],
              [
                77.648234,
                12.8407511
              ]
            ]
          },
          {
            "unit": 15,
            "side": "S",
            "wing": "south wing",
            "center": [
              77.6483396,
              12.8407928
            ],
            "ring": [
              [
                77.6482947,
                12.8407365
              ],
              [
                77.6483252,
                12.8408633
              ],
              [
                77.6483845,
                12.840849
              ],
              [
                77.648354,
                12.8407223
              ],
              [
                77.6482947,
                12.8407365
              ]
            ]
          },
          {
            "unit": 16,
            "side": "E",
            "wing": "south wing",
            "center": [
              77.6484069,
              12.8408055
            ],
            "ring": [
              [
                77.648386,
                12.8408487
              ],
              [
                77.6484453,
                12.8408344
              ],
              [
                77.648428,
                12.8407626
              ],
              [
                77.6483692,
                12.8407767
              ],
              [
                77.6483573,
                12.8407294
              ],
              [
                77.648386,
                12.8408487
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506178"
      }
    }
  }
};
