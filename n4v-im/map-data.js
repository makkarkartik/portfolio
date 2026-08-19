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
      "modeled_units": 1024,
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
          "units": 70,
          "perFloor": 14,
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
          "units": 70,
          "perFloor": 14,
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
          "units": 70,
          "perFloor": 14,
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
          "units": 70,
          "perFloor": 14,
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
          "units": 84,
          "perFloor": 14,
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
    "total": 1024,
    "numbering": "Block-floor+unit, zero-padded unit. Example: E-312 is Block E, floor 3, unit 12.",
    "notes": [
      "Door list is reconstructed to the advertised 1,024 units, the Oct 2011 Typical Block Plan, and listing codes such as E-312, H-406, M-211 and P-510.",
      "It is not a society-verified door survey. Official numbering may differ in places.",
      "Most blocks are modeled with 5 residential floors; Block F has 6, matching public listings of one taller tower.",
      "Unit cells follow the brochure Typical Block Plan: an H-shaped plate around two stair/lift cores. Unit 1 is right of the south stair (Type S7/S3); 2 and 3 are the east Type 1D wing; 5 and 6 are the south Type 1A/2B pair. Smaller towers drop the Type 1D stubs and keep consecutive numbering.",
      "Parking is basement for the campus; individual bay IDs start as Unknown until tagged."
    ],
    "blocks": {
      "A": {
        "floors": 5,
        "perFloor": 16,
        "layout": "typical",
        "unitCount": 80,
        "slots": [
          {
            "unit": 1,
            "side": "E",
            "wing": "right of south stair · Type S7/S3",
            "center": [
              77.6486957,
              12.8408137
            ],
            "ring": [
              [
                77.6487344,
                12.8408423
              ],
              [
                77.6487163,
                12.8407708
              ],
              [
                77.6486553,
                12.8407862
              ],
              [
                77.6486679,
                12.8408271
              ],
              [
                77.648677,
                12.8408568
              ],
              [
                77.6487344,
                12.8408423
              ]
            ]
          },
          {
            "unit": 2,
            "side": "E",
            "wing": "east 1D wing, upper · Type 1D",
            "center": [
              77.6487513,
              12.8408014
            ],
            "ring": [
              [
                77.6487344,
                12.8408423
              ],
              [
                77.64879,
                12.8408283
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
                77.6487758,
                12.8407667
              ],
              [
                77.6487189,
                12.840781
              ],
              [
                77.6487344,
                12.8408423
              ]
            ]
          },
          {
            "unit": 3,
            "side": "E",
            "wing": "east 1D wing, lower · Type 1D",
            "center": [
              77.6487344,
              12.8407428
            ],
            "ring": [
              [
                77.6487189,
                12.840781
              ],
              [
                77.6487758,
                12.8407667
              ],
              [
                77.6487759,
                12.8407573
              ],
              [
                77.6487727,
                12.8407447
              ],
              [
                77.6487529,
                12.8407461
              ],
              [
                77.6487387,
                12.8407
              ],
              [
                77.6487009,
                12.8407095
              ],
              [
                77.6487189,
                12.840781
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "inner south-east · Type S6",
            "center": [
              77.6486718,
              12.8407386
            ],
            "ring": [
              [
                77.6486478,
                12.8407881
              ],
              [
                77.6486552,
                12.8407859
              ],
              [
                77.6486553,
                12.8407862
              ],
              [
                77.6487163,
                12.8407708
              ],
              [
                77.6486957,
                12.8406891
              ],
              [
                77.6486272,
                12.8407064
              ],
              [
                77.6486478,
                12.8407881
              ]
            ]
          },
          {
            "unit": 5,
            "side": "S",
            "wing": "south-east corner · Type 1A/2B",
            "center": [
              77.6486356,
              12.8406603
            ],
            "ring": [
              [
                77.6486085,
                12.8407111
              ],
              [
                77.6486957,
                12.8406891
              ],
              [
                77.6486901,
                12.8406668
              ],
              [
                77.6486746,
                12.8406713
              ],
              [
                77.6486548,
                12.840607
              ],
              [
                77.6485865,
                12.8406243
              ],
              [
                77.6486085,
                12.8407111
              ]
            ]
          },
          {
            "unit": 6,
            "side": "S",
            "wing": "south-west corner · Type 1A/2B",
            "center": [
              77.6485418,
              12.8406818
            ],
            "ring": [
              [
                77.648491,
                12.8406661
              ],
              [
                77.6485054,
                12.8407131
              ],
              [
                77.6485031,
                12.8407138
              ],
              [
                77.6485087,
                12.8407363
              ],
              [
                77.648596,
                12.8407143
              ],
              [
                77.6485741,
                12.8406274
              ],
              [
                77.6485145,
                12.8406425
              ],
              [
                77.6484871,
                12.8406505
              ],
              [
                77.648491,
                12.8406661
              ]
            ]
          },
          {
            "unit": 7,
            "side": "W",
            "wing": "inner south-west · Type S6",
            "center": [
              77.6485491,
              12.8407531
            ],
            "ring": [
              [
                77.6485219,
                12.8407883
              ],
              [
                77.6485898,
                12.8407684
              ],
              [
                77.6485773,
                12.840719
              ],
              [
                77.6485087,
                12.8407363
              ],
              [
                77.6485219,
                12.8407883
              ]
            ]
          },
          {
            "unit": 8,
            "side": "W",
            "wing": "west 1D wing, lower · Type 1D",
            "center": [
              77.6484881,
              12.8407806
            ],
            "ring": [
              [
                77.6484601,
                12.8407931
              ],
              [
                77.6484638,
                12.8408052
              ],
              [
                77.6485219,
                12.8407883
              ],
              [
                77.6485139,
                12.8407567
              ],
              [
                77.6484547,
                12.8407717
              ],
              [
                77.6484601,
                12.8407931
              ]
            ]
          },
          {
            "unit": 9,
            "side": "W",
            "wing": "west 1D wing, upper · Type 1D",
            "center": [
              77.6485101,
              12.8408664
            ],
            "ring": [
              [
                77.6484727,
                12.8408432
              ],
              [
                77.6484882,
                12.8409045
              ],
              [
                77.6485474,
                12.8408896
              ],
              [
                77.648532,
                12.8408283
              ],
              [
                77.6484727,
                12.8408432
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "left of south stair · Type S5/S3",
            "center": [
              77.6485727,
              12.8408451
            ],
            "ring": [
              [
                77.6485294,
                12.840818
              ],
              [
                77.6485474,
                12.8408896
              ],
              [
                77.648616,
                12.8408722
              ],
              [
                77.6485979,
                12.8408007
              ],
              [
                77.6485294,
                12.840818
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "left of north stair · Type S5/S3",
            "center": [
              77.6485965,
              12.8409387
            ],
            "ring": [
              [
                77.6485706,
                12.8409815
              ],
              [
                77.6486392,
                12.8409642
              ],
              [
                77.6486217,
                12.8408947
              ],
              [
                77.6485537,
                12.8409145
              ],
              [
                77.6485706,
                12.8409815
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "inner north-west · Type S6",
            "center": [
              77.6486157,
              12.8410132
            ],
            "ring": [
              [
                77.6485755,
                12.8410009
              ],
              [
                77.6485945,
                12.8410624
              ],
              [
                77.6486598,
                12.8410459
              ],
              [
                77.6486392,
                12.8409642
              ],
              [
                77.6485706,
                12.8409815
              ],
              [
                77.6485755,
                12.8410009
              ]
            ]
          },
          {
            "unit": 13,
            "side": "N",
            "wing": "north-west corner · Type 2B",
            "center": [
              77.6486459,
              12.8410956
            ],
            "ring": [
              [
                77.6485913,
                12.8410632
              ],
              [
                77.6486132,
                12.8411501
              ],
              [
                77.6487005,
                12.841128
              ],
              [
                77.6486785,
                12.8410412
              ],
              [
                77.6485913,
                12.8410632
              ]
            ]
          },
          {
            "unit": 14,
            "side": "N",
            "wing": "north-east corner · Type 2B",
            "center": [
              77.648746,
              12.8410605
            ],
            "ring": [
              [
                77.6487012,
                12.8410786
              ],
              [
                77.6487782,
                12.8411084
              ],
              [
                77.6487865,
                12.8411063
              ],
              [
                77.6487835,
                12.8410367
              ],
              [
                77.6487783,
                12.841016
              ],
              [
                77.648691,
                12.8410381
              ],
              [
                77.6487012,
                12.8410786
              ]
            ]
          },
          {
            "unit": 15,
            "side": "E",
            "wing": "inner north-east · Type S6",
            "center": [
              77.6487337,
              12.8409838
            ],
            "ring": [
              [
                77.6487097,
                12.8410333
              ],
              [
                77.6487783,
                12.841016
              ],
              [
                77.6487576,
                12.8409343
              ],
              [
                77.6486891,
                12.8409516
              ],
              [
                77.6487097,
                12.8410333
              ]
            ]
          },
          {
            "unit": 16,
            "side": "E",
            "wing": "right of north stair · Type S7/S3",
            "center": [
              77.6487143,
              12.8409072
            ],
            "ring": [
              [
                77.6486891,
                12.8409516
              ],
              [
                77.6487576,
                12.8409343
              ],
              [
                77.6487396,
                12.8408628
              ],
              [
                77.6486771,
                12.8408785
              ],
              [
                77.6486711,
                12.8408803
              ],
              [
                77.6486891,
                12.8409516
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
              77.6490118,
              12.8407263
            ],
            "ring": [
              [
                77.6489947,
                12.8407783
              ],
              [
                77.6490638,
                12.8407585
              ],
              [
                77.6490572,
                12.8407357
              ],
              [
                77.649043,
                12.8407396
              ],
              [
                77.6490276,
                12.8406856
              ],
              [
                77.6490235,
                12.8406713
              ],
              [
                77.6489685,
                12.8406871
              ],
              [
                77.6489947,
                12.8407783
              ]
            ]
          },
          {
            "unit": 2,
            "side": "E",
            "wing": "east 1D wing, upper · Type 1D",
            "center": [
              77.6490902,
              12.8407388
            ],
            "ring": [
              [
                77.6490638,
                12.8407585
              ],
              [
                77.6491234,
                12.8407414
              ],
              [
                77.6491171,
                12.8407195
              ],
              [
                77.6490572,
                12.8407357
              ],
              [
                77.6490638,
                12.8407585
              ]
            ]
          },
          {
            "unit": 3,
            "side": "E",
            "wing": "east 1D wing, lower · Type 1D",
            "center": [
              77.6490435,
              12.8406045
            ],
            "ring": [
              [
                77.6490276,
                12.8406323
              ],
              [
                77.6490718,
                12.8406203
              ],
              [
                77.6490593,
                12.8405765
              ],
              [
                77.6490153,
                12.8405891
              ],
              [
                77.6490276,
                12.8406323
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "inner south-east · Type S6",
            "center": [
              77.6489854,
              12.8406231
            ],
            "ring": [
              [
                77.6489685,
                12.8406871
              ],
              [
                77.6490235,
                12.8406713
              ],
              [
                77.6490134,
                12.8406361
              ],
              [
                77.6490276,
                12.8406323
              ],
              [
                77.6490078,
                12.8405631
              ],
              [
                77.6489387,
                12.8405828
              ],
              [
                77.6489685,
                12.8406871
              ]
            ]
          },
          {
            "unit": 5,
            "side": "S",
            "wing": "south-east corner · Type 1A/2B",
            "center": [
              77.6489432,
              12.840524
            ],
            "ring": [
              [
                77.6489198,
                12.8405882
              ],
              [
                77.6490078,
                12.8405631
              ],
              [
                77.6490005,
                12.8405377
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
                77.6489191,
                12.8404686
              ],
              [
                77.6488881,
                12.8404775
              ],
              [
                77.6489198,
                12.8405882
              ]
            ]
          },
          {
            "unit": 6,
            "side": "S",
            "wing": "south-west corner · Type 1A/2B",
            "center": [
              77.648849,
              12.8405498
            ],
            "ring": [
              [
                77.6488193,
                12.840617
              ],
              [
                77.6489073,
                12.8405918
              ],
              [
                77.6488756,
                12.8404811
              ],
              [
                77.6487957,
                12.8405039
              ],
              [
                77.6488055,
                12.8405503
              ],
              [
                77.6488006,
                12.8405516
              ],
              [
                77.6488193,
                12.840617
              ]
            ]
          },
          {
            "unit": 7,
            "side": "W",
            "wing": "inner south-west · Type S6",
            "center": [
              77.6488689,
              12.8406591
            ],
            "ring": [
              [
                77.6488331,
                12.840665
              ],
              [
                77.6488337,
                12.8406648
              ],
              [
                77.6488498,
                12.8407211
              ],
              [
                77.6489183,
                12.8407015
              ],
              [
                77.6488884,
                12.8405972
              ],
              [
                77.6488193,
                12.840617
              ],
              [
                77.6488331,
                12.840665
              ]
            ]
          },
          {
            "unit": 8,
            "side": "W",
            "wing": "west 1D wing, lower · Type 1D",
            "center": [
              77.64881,
              12.8406972
            ],
            "ring": [
              [
                77.6487671,
                12.8406602
              ],
              [
                77.6487932,
                12.8407514
              ],
              [
                77.6488529,
                12.8407343
              ],
              [
                77.6488268,
                12.8406431
              ],
              [
                77.6487671,
                12.8406602
              ]
            ]
          },
          {
            "unit": 9,
            "side": "W",
            "wing": "west 1D wing, upper · Type 1D",
            "center": [
              77.6488343,
              12.8407819
            ],
            "ring": [
              [
                77.6487932,
                12.8407514
              ],
              [
                77.6488156,
                12.8408296
              ],
              [
                77.6488753,
                12.8408125
              ],
              [
                77.6488529,
                12.8407343
              ],
              [
                77.6487932,
                12.8407514
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "left of south stair · Type S5/S3",
            "center": [
              77.6488971,
              12.8407569
            ],
            "ring": [
              [
                77.6488753,
                12.8408125
              ],
              [
                77.6489444,
                12.8407927
              ],
              [
                77.6489183,
                12.8407015
              ],
              [
                77.6488498,
                12.8407211
              ],
              [
                77.6488738,
                12.8408053
              ],
              [
                77.6488733,
                12.8408054
              ],
              [
                77.6488753,
                12.8408125
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "left of north stair · Type S5/S3",
            "center": [
              77.6489304,
              12.8408742
            ],
            "ring": [
              [
                77.6489089,
                12.8409297
              ],
              [
                77.648978,
                12.8409099
              ],
              [
                77.6489519,
                12.8408187
              ],
              [
                77.6488828,
                12.8408385
              ],
              [
                77.6489089,
                12.8409297
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west 1D wing, lower north · Type 1D",
            "center": [
              77.6488641,
              12.8408862
            ],
            "ring": [
              [
                77.6488455,
                12.8409338
              ],
              [
                77.6489051,
                12.8409167
              ],
              [
                77.6488828,
                12.8408385
              ],
              [
                77.6488231,
                12.8408556
              ],
              [
                77.6488455,
                12.8409338
              ]
            ]
          },
          {
            "unit": 13,
            "side": "W",
            "wing": "west 1D wing, upper north · Type 1D",
            "center": [
              77.6488884,
              12.8409709
            ],
            "ring": [
              [
                77.6488716,
                12.841025
              ],
              [
                77.6489313,
                12.8410079
              ],
              [
                77.6489051,
                12.8409167
              ],
              [
                77.6488455,
                12.8409338
              ],
              [
                77.6488716,
                12.841025
              ]
            ]
          },
          {
            "unit": 14,
            "side": "W",
            "wing": "inner north-west · Type S6",
            "center": [
              77.6489584,
              12.840972
            ],
            "ring": [
              [
                77.6489387,
                12.841034
              ],
              [
                77.6490078,
                12.8410142
              ],
              [
                77.648978,
                12.8409099
              ],
              [
                77.6489089,
                12.8409297
              ],
              [
                77.6489387,
                12.841034
              ]
            ]
          },
          {
            "unit": 15,
            "side": "N",
            "wing": "north-west corner · Type 2B",
            "center": [
              77.6489986,
              12.8410768
            ],
            "ring": [
              [
                77.6489704,
                12.8411447
              ],
              [
                77.6490584,
                12.8411195
              ],
              [
                77.6490267,
                12.8410088
              ],
              [
                77.6489387,
                12.841034
              ],
              [
                77.6489704,
                12.8411447
              ]
            ]
          },
          {
            "unit": 16,
            "side": "N",
            "wing": "north-east corner · Type 2B",
            "center": [
              77.6490957,
              12.8410465
            ],
            "ring": [
              [
                77.649071,
                12.8411159
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
                77.6491446,
                12.8410407
              ],
              [
                77.6491272,
                12.84098
              ],
              [
                77.6490392,
                12.8410052
              ],
              [
                77.649071,
                12.8411159
              ]
            ]
          },
          {
            "unit": 17,
            "side": "E",
            "wing": "inner north-east · Type S6",
            "center": [
              77.6490777,
              12.8409378
            ],
            "ring": [
              [
                77.6490581,
                12.8409998
              ],
              [
                77.6491272,
                12.84098
              ],
              [
                77.6490973,
                12.8408758
              ],
              [
                77.6490282,
                12.8408956
              ],
              [
                77.6490581,
                12.8409998
              ]
            ]
          },
          {
            "unit": 18,
            "side": "E",
            "wing": "east 1D wing, upper north · Type 1D",
            "center": [
              77.6491365,
              12.8408998
            ],
            "ring": [
              [
                77.6491197,
                12.8409539
              ],
              [
                77.6491794,
                12.8409369
              ],
              [
                77.6491533,
                12.8408456
              ],
              [
                77.6490936,
                12.8408627
              ],
              [
                77.6491197,
                12.8409539
              ]
            ]
          },
          {
            "unit": 19,
            "side": "E",
            "wing": "east 1D wing, lower north · Type 1D",
            "center": [
              77.6491122,
              12.8408151
            ],
            "ring": [
              [
                77.6490936,
                12.8408627
              ],
              [
                77.6491533,
                12.8408456
              ],
              [
                77.6491309,
                12.8407675
              ],
              [
                77.6490712,
                12.8407846
              ],
              [
                77.6490936,
                12.8408627
              ]
            ]
          },
          {
            "unit": 20,
            "side": "E",
            "wing": "right of north stair · Type S7/S3",
            "center": [
              77.6490497,
              12.8408401
            ],
            "ring": [
              [
                77.6490282,
                12.8408956
              ],
              [
                77.6490973,
                12.8408758
              ],
              [
                77.6490712,
                12.8407846
              ],
              [
                77.6490021,
                12.8408043
              ],
              [
                77.6490282,
                12.8408956
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506173"
      },
      "C": {
        "floors": 5,
        "perFloor": 8,
        "layout": "typical",
        "unitCount": 40,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west, north",
            "center": [
              77.6489258,
              12.8403588
            ],
            "ring": [
              [
                77.6488717,
                12.8403126
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
            "unit": 2,
            "side": "N",
            "wing": "north, west",
            "center": [
              77.6489941,
              12.8403428
            ],
            "ring": [
              [
                77.6490084,
                12.8402806
              ],
              [
                77.6489537,
                12.8402934
              ],
              [
                77.6489799,
                12.840405
              ],
              [
                77.6490345,
                12.8403922
              ],
              [
                77.6490295,
                12.8403707
              ],
              [
                77.6490176,
                12.8403223
              ],
              [
                77.6490181,
                12.8403222
              ],
              [
                77.6490084,
                12.8402806
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north, east",
            "center": [
              77.6490406,
              12.840295
            ],
            "ring": [
              [
                77.649063,
                12.8402677
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
                77.6490728,
                12.8403094
              ],
              [
                77.649063,
                12.8402677
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east, north",
            "center": [
              77.6490816,
              12.8402854
            ],
            "ring": [
              [
                77.6490904,
                12.8402613
              ],
              [
                77.649063,
                12.8402677
              ],
              [
                77.6490728,
                12.8403094
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
            "unit": 5,
            "side": "E",
            "wing": "east, south",
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
            "unit": 6,
            "side": "S",
            "wing": "south, east",
            "center": [
              77.6489497,
              12.8401581
            ],
            "ring": [
              [
                77.6489101,
                12.8401074
              ],
              [
                77.6489363,
                12.840219
              ],
              [
                77.6489909,
                12.8402062
              ],
              [
                77.6489793,
                12.8401564
              ],
              [
                77.6489757,
                12.8401572
              ],
              [
                77.6489605,
                12.8400956
              ],
              [
                77.6489101,
                12.8401074
              ]
            ]
          },
          {
            "unit": 7,
            "side": "S",
            "wing": "south, west",
            "center": [
              77.6488958,
              12.8401696
            ],
            "ring": [
              [
                77.6488554,
                12.8401202
              ],
              [
                77.6488816,
                12.8402318
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
                77.6488554,
                12.8401202
              ]
            ]
          },
          {
            "unit": 8,
            "side": "W",
            "wing": "west, south",
            "center": [
              77.6488731,
              12.8401749
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
                77.648918,
                12.8402232
              ],
              [
                77.6488919,
                12.8401116
              ],
              [
                77.6488281,
                12.8401266
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506171"
      },
      "D": {
        "floors": 5,
        "perFloor": 12,
        "layout": "typical",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6486936,
              12.8404345
            ],
            "ring": [
              [
                77.6487171,
                12.8403913
              ],
              [
                77.6487338,
                12.8404627
              ],
              [
                77.6486701,
                12.8404776
              ],
              [
                77.6486533,
                12.8404063
              ],
              [
                77.6487171,
                12.8403913
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.648748,
              12.84042
            ],
            "ring": [
              [
                77.6487794,
                12.840452
              ],
              [
                77.648762,
                12.8403776
              ],
              [
                77.6487164,
                12.8403882
              ],
              [
                77.6487229,
                12.8404158
              ],
              [
                77.6487345,
                12.8404625
              ],
              [
                77.6487794,
                12.840452
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6487935,
              12.8404094
            ],
            "ring": [
              [
                77.648762,
                12.8403776
              ],
              [
                77.6487794,
                12.840452
              ],
              [
                77.648825,
                12.8404413
              ],
              [
                77.6488075,
                12.8403669
              ],
              [
                77.648762,
                12.8403776
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6488485,
              12.8403982
            ],
            "ring": [
              [
                77.6488082,
                12.84037
              ],
              [
                77.648825,
                12.8404413
              ],
              [
                77.6488888,
                12.8404263
              ],
              [
                77.648872,
                12.840355
              ],
              [
                77.6488082,
                12.84037
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6488318,
              12.8403269
            ],
            "ring": [
              [
                77.6487915,
                12.8402987
              ],
              [
                77.6488082,
                12.84037
              ],
              [
                77.648872,
                12.840355
              ],
              [
                77.6488553,
                12.8402837
              ],
              [
                77.6487915,
                12.8402987
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6488122,
              12.8402431
            ],
            "ring": [
              [
                77.6487719,
                12.840215
              ],
              [
                77.6487886,
                12.8402863
              ],
              [
                77.6488524,
                12.8402713
              ],
              [
                77.6488357,
                12.8402
              ],
              [
                77.6487719,
                12.840215
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6487954,
              12.8401718
            ],
            "ring": [
              [
                77.6487552,
                12.8401436
              ],
              [
                77.6487719,
                12.840215
              ],
              [
                77.6488357,
                12.8402
              ],
              [
                77.648819,
                12.8401287
              ],
              [
                77.6487552,
                12.8401436
              ]
            ]
          },
          {
            "unit": 8,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6487411,
              12.8401862
            ],
            "ring": [
              [
                77.6487096,
                12.8401543
              ],
              [
                77.6487271,
                12.8402287
              ],
              [
                77.6487726,
                12.8402181
              ],
              [
                77.6487552,
                12.8401436
              ],
              [
                77.6487096,
                12.8401543
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6486956,
              12.8401969
            ],
            "ring": [
              [
                77.6486641,
                12.840165
              ],
              [
                77.6486815,
                12.8402394
              ],
              [
                77.6487271,
                12.8402287
              ],
              [
                77.6487096,
                12.8401543
              ],
              [
                77.6486641,
                12.840165
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6486405,
              12.8402081
            ],
            "ring": [
              [
                77.6486641,
                12.840165
              ],
              [
                77.6486808,
                12.8402363
              ],
              [
                77.648617,
                12.8402513
              ],
              [
                77.6486003,
                12.84018
              ],
              [
                77.6486641,
                12.840165
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6486573,
              12.8402795
            ],
            "ring": [
              [
                77.648617,
                12.8402513
              ],
              [
                77.6486337,
                12.8403226
              ],
              [
                77.6486975,
                12.8403076
              ],
              [
                77.6486808,
                12.8402363
              ],
              [
                77.648617,
                12.8402513
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6486769,
              12.8403632
            ],
            "ring": [
              [
                77.6486366,
                12.840335
              ],
              [
                77.6486533,
                12.8404063
              ],
              [
                77.6487171,
                12.8403913
              ],
              [
                77.6487004,
                12.84032
              ],
              [
                77.6486366,
                12.840335
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506171"
      },
      "E": {
        "floors": 5,
        "perFloor": 12,
        "layout": "typical",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6486549,
              12.8400978
            ],
            "ring": [
              [
                77.6487137,
                12.8401261
              ],
              [
                77.6486974,
                12.8400569
              ],
              [
                77.6485699,
                12.8400868
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
                77.6487137,
                12.8401261
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6487507,
              12.8400793
            ],
            "ring": [
              [
                77.6486967,
                12.8400539
              ],
              [
                77.6487137,
                12.8401261
              ],
              [
                77.6488048,
                12.8401048
              ],
              [
                77.6487878,
                12.8400325
              ],
              [
                77.6486967,
                12.8400539
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6488419,
              12.840058
            ],
            "ring": [
              [
                77.6487878,
                12.8400325
              ],
              [
                77.6488048,
                12.8401048
              ],
              [
                77.6488959,
                12.8400834
              ],
              [
                77.6488789,
                12.8400111
              ],
              [
                77.6487878,
                12.8400325
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6489286,
              12.8400316
            ],
            "ring": [
              [
                77.6490072,
                12.8399843
              ],
              [
                77.6488796,
                12.8400142
              ],
              [
                77.6488959,
                12.8400834
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
                77.6490072,
                12.8399843
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6489353,
              12.8399646
            ],
            "ring": [
              [
                77.6488634,
                12.8399449
              ],
              [
                77.6488796,
                12.8400142
              ],
              [
                77.6490072,
                12.8399843
              ],
              [
                77.648991,
                12.839915
              ],
              [
                77.6488634,
                12.8399449
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6489163,
              12.8398832
            ],
            "ring": [
              [
                77.6488444,
                12.8398635
              ],
              [
                77.6488606,
                12.8399328
              ],
              [
                77.6489881,
                12.8399029
              ],
              [
                77.6489719,
                12.8398336
              ],
              [
                77.6488444,
                12.8398635
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6488721,
              12.8398256
            ],
            "ring": [
              [
                77.6488281,
                12.8397943
              ],
              [
                77.6488444,
                12.8398635
              ],
              [
                77.6489719,
                12.8398336
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
                77.6488281,
                12.8397943
              ]
            ]
          },
          {
            "unit": 8,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.648791,
              12.8398411
            ],
            "ring": [
              [
                77.648737,
                12.8398156
              ],
              [
                77.6487539,
                12.8398879
              ],
              [
                77.6488451,
                12.8398666
              ],
              [
                77.6488281,
                12.8397943
              ],
              [
                77.648737,
                12.8398156
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6486999,
              12.8398624
            ],
            "ring": [
              [
                77.6486459,
                12.839837
              ],
              [
                77.6486628,
                12.8399093
              ],
              [
                77.6487539,
                12.8398879
              ],
              [
                77.648737,
                12.8398156
              ],
              [
                77.6486459,
                12.839837
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6486189,
              12.8398798
            ],
            "ring": [
              [
                77.6486621,
                12.8399062
              ],
              [
                77.6486459,
                12.839837
              ],
              [
                77.6485753,
                12.8398535
              ],
              [
                77.6485923,
                12.8399226
              ],
              [
                77.6486621,
                12.8399062
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6486109,
              12.8399579
            ],
            "ring": [
              [
                77.6485508,
                12.8400054
              ],
              [
                77.6486784,
                12.8399755
              ],
              [
                77.6486621,
                12.8399062
              ],
              [
                77.6485923,
                12.8399226
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
                77.6485508,
                12.8400054
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6486255,
              12.8400372
            ],
            "ring": [
              [
                77.6485536,
                12.8400175
              ],
              [
                77.6485699,
                12.8400868
              ],
              [
                77.6486974,
                12.8400569
              ],
              [
                77.6486812,
                12.8399876
              ],
              [
                77.6485536,
                12.8400175
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506168"
      },
      "F": {
        "floors": 6,
        "perFloor": 14,
        "layout": "typical",
        "unitCount": 84,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer",
            "center": [
              77.6487098,
              12.8397243
            ],
            "ring": [
              [
                77.6487565,
                12.8397535
              ],
              [
                77.6487401,
                12.8396834
              ],
              [
                77.6486357,
                12.8397077
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
              77.6487847,
              12.8397058
            ],
            "ring": [
              [
                77.6487383,
                12.8396756
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
                77.6488129,
                12.8396582
              ],
              [
                77.6487383,
                12.8396756
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6488593,
              12.8396884
            ],
            "ring": [
              [
                77.6488129,
                12.8396582
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
                77.6488875,
                12.8396407
              ],
              [
                77.6488129,
                12.8396582
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6489534,
              12.8396706
            ],
            "ring": [
              [
                77.6488968,
                12.8396468
              ],
              [
                77.6489132,
                12.839717
              ],
              [
                77.6490101,
                12.8396943
              ],
              [
                77.6489937,
                12.8396242
              ],
              [
                77.6488968,
                12.8396468
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.648938,
              12.8396043
            ],
            "ring": [
              [
                77.6488822,
                12.8395844
              ],
              [
                77.6488968,
                12.8396468
              ],
              [
                77.6489937,
                12.8396242
              ],
              [
                77.6489792,
                12.8395618
              ],
              [
                77.6488822,
                12.8395844
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, by corridor",
            "center": [
              77.6489234,
              12.8395419
            ],
            "ring": [
              [
                77.6488677,
                12.839522
              ],
              [
                77.6488822,
                12.8395844
              ],
              [
                77.6489792,
                12.8395618
              ],
              [
                77.6489646,
                12.8394994
              ],
              [
                77.6488677,
                12.839522
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, by corridor",
            "center": [
              77.6489089,
              12.8394795
            ],
            "ring": [
              [
                77.6488531,
                12.8394597
              ],
              [
                77.6488677,
                12.839522
              ],
              [
                77.6489646,
                12.8394994
              ],
              [
                77.6489501,
                12.839437
              ],
              [
                77.6488531,
                12.8394597
              ]
            ]
          },
          {
            "unit": 8,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6488903,
              12.8394225
            ],
            "ring": [
              [
                77.6488385,
                12.8393973
              ],
              [
                77.6488531,
                12.8394597
              ],
              [
                77.6489501,
                12.839437
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
                77.6488861,
                12.8393862
              ],
              [
                77.6488385,
                12.8393973
              ]
            ]
          },
          {
            "unit": 9,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6488544,
              12.8393672
            ],
            "ring": [
              [
                77.6488385,
                12.8393973
              ],
              [
                77.6488861,
                12.8393862
              ],
              [
                77.6488665,
                12.8393374
              ],
              [
                77.6488263,
                12.8393447
              ],
              [
                77.6488385,
                12.8393973
              ]
            ]
          },
          {
            "unit": 10,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6487901,
              12.8393923
            ],
            "ring": [
              [
                77.6487438,
                12.8393619
              ],
              [
                77.648762,
                12.8394398
              ],
              [
                77.6488365,
                12.8394224
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
            "unit": 11,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6487156,
              12.8394095
            ],
            "ring": [
              [
                77.6486692,
                12.8393793
              ],
              [
                77.6486874,
                12.8394572
              ],
              [
                77.648762,
                12.8394398
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
            "unit": 12,
            "side": "W",
            "wing": "west bar, south outer",
            "center": [
              77.6486567,
              12.8394197
            ],
            "ring": [
              [
                77.6486855,
                12.8394494
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
                77.6486422,
                12.8394596
              ],
              [
                77.6486855,
                12.8394494
              ]
            ]
          },
          {
            "unit": 13,
            "side": "W",
            "wing": "west bar, by corridor",
            "center": [
              77.6486666,
              12.8395271
            ],
            "ring": [
              [
                77.6486084,
                12.8395908
              ],
              [
                77.6487128,
                12.8395664
              ],
              [
                77.6486855,
                12.8394494
              ],
              [
                77.6486422,
                12.8394596
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
                77.6486084,
                12.8395908
              ]
            ]
          },
          {
            "unit": 14,
            "side": "W",
            "wing": "west bar, north inner",
            "center": [
              77.6486743,
              12.8396371
            ],
            "ring": [
              [
                77.6486084,
                12.8395908
              ],
              [
                77.6486357,
                12.8397077
              ],
              [
                77.6487401,
                12.8396834
              ],
              [
                77.6487128,
                12.8395664
              ],
              [
                77.6486084,
                12.8395908
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506167"
      },
      "G": {
        "floors": 5,
        "perFloor": 12,
        "layout": "typical",
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
        "perFloor": 14,
        "layout": "typical",
        "unitCount": 70,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer",
            "center": [
              77.6478779,
              12.8394268
            ],
            "ring": [
              [
                77.64792,
                12.8394616
              ],
              [
                77.6478981,
                12.8393889
              ],
              [
                77.6478126,
                12.8394147
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
              77.6479384,
              12.8394119
            ],
            "ring": [
              [
                77.6478956,
                12.8393808
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
                77.6479567,
                12.8393623
              ],
              [
                77.6478956,
                12.8393808
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6479995,
              12.8393935
            ],
            "ring": [
              [
                77.6479567,
                12.8393623
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
                77.6480178,
                12.8393439
              ],
              [
                77.6479567,
                12.8393623
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6480664,
              12.8393661
            ],
            "ring": [
              [
                77.6480264,
                12.8393501
              ],
              [
                77.6480483,
                12.8394228
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
                77.648095,
                12.8393294
              ],
              [
                77.6480264,
                12.8393501
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6480523,
              12.839306
            ],
            "ring": [
              [
                77.6480862,
                12.8392615
              ],
              [
                77.6480068,
                12.8392855
              ],
              [
                77.6480264,
                12.8393501
              ],
              [
                77.648095,
                12.8393294
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
                77.6480862,
                12.8392615
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, by corridor",
            "center": [
              77.6480368,
              12.8392412
            ],
            "ring": [
              [
                77.6479873,
                12.8392209
              ],
              [
                77.6480068,
                12.8392855
              ],
              [
                77.6480862,
                12.8392615
              ],
              [
                77.6480667,
                12.8391969
              ],
              [
                77.6479873,
                12.8392209
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, by corridor",
            "center": [
              77.6480172,
              12.8391766
            ],
            "ring": [
              [
                77.6479678,
                12.8391563
              ],
              [
                77.6479873,
                12.8392209
              ],
              [
                77.6480667,
                12.8391969
              ],
              [
                77.6480472,
                12.8391323
              ],
              [
                77.6479678,
                12.8391563
              ]
            ]
          },
          {
            "unit": 8,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6479978,
              12.8391149
            ],
            "ring": [
              [
                77.6479483,
                12.8390917
              ],
              [
                77.6479678,
                12.8391563
              ],
              [
                77.6480472,
                12.8391323
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
                77.6479634,
                12.8390871
              ],
              [
                77.6479483,
                12.8390917
              ]
            ]
          },
          {
            "unit": 9,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6479794,
              12.8390514
            ],
            "ring": [
              [
                77.6480106,
                12.8390111
              ],
              [
                77.6480277,
                12.8390677
              ],
              [
                77.6479483,
                12.8390917
              ],
              [
                77.6479312,
                12.8390351
              ],
              [
                77.6480106,
                12.8390111
              ]
            ]
          },
          {
            "unit": 10,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6479067,
              12.8390866
            ],
            "ring": [
              [
                77.647864,
                12.8390554
              ],
              [
                77.6478884,
                12.8391362
              ],
              [
                77.6479495,
                12.8391177
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
            "unit": 11,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6478456,
              12.8391051
            ],
            "ring": [
              [
                77.6478029,
                12.8390739
              ],
              [
                77.6478273,
                12.8391547
              ],
              [
                77.6478884,
                12.8391362
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
            "unit": 12,
            "side": "W",
            "wing": "west bar, south outer",
            "center": [
              77.6477888,
              12.8391292
            ],
            "ring": [
              [
                77.6477394,
                12.8391724
              ],
              [
                77.6478249,
                12.8391466
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
                77.6477394,
                12.8391724
              ]
            ]
          },
          {
            "unit": 13,
            "side": "W",
            "wing": "west bar, by corridor",
            "center": [
              77.6478004,
              12.8392201
            ],
            "ring": [
              [
                77.6477394,
                12.8391724
              ],
              [
                77.647776,
                12.8392936
              ],
              [
                77.6478615,
                12.8392677
              ],
              [
                77.6478249,
                12.8391466
              ],
              [
                77.6477394,
                12.8391724
              ]
            ]
          },
          {
            "unit": 14,
            "side": "W",
            "wing": "west bar, north inner",
            "center": [
              77.647837,
              12.8393412
            ],
            "ring": [
              [
                77.647776,
                12.8392936
              ],
              [
                77.6478126,
                12.8394147
              ],
              [
                77.6478981,
                12.8393889
              ],
              [
                77.6478615,
                12.8392677
              ],
              [
                77.647776,
                12.8392936
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506176"
      },
      "I": {
        "floors": 5,
        "perFloor": 14,
        "layout": "typical",
        "unitCount": 70,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer",
            "center": [
              77.647983,
              12.839835
            ],
            "ring": [
              [
                77.6480122,
                12.8397941
              ],
              [
                77.6479247,
                12.8398206
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
                77.6480122,
                12.8397941
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6480532,
              12.839817
            ],
            "ring": [
              [
                77.6480967,
                12.8398479
              ],
              [
                77.6480723,
                12.8397671
              ],
              [
                77.6480098,
                12.839786
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
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6481157,
              12.8397981
            ],
            "ring": [
              [
                77.6480723,
                12.8397671
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
                77.6481348,
                12.8397482
              ],
              [
                77.6480723,
                12.8397671
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6481907,
              12.8397692
            ],
            "ring": [
              [
                77.6482247,
                12.8397298
              ],
              [
                77.6481435,
                12.8397544
              ],
              [
                77.6481655,
                12.8398271
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
                77.6482247,
                12.8397298
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6481743,
              12.8397098
            ],
            "ring": [
              [
                77.6481239,
                12.8396898
              ],
              [
                77.6481435,
                12.8397544
              ],
              [
                77.6482247,
                12.8397298
              ],
              [
                77.6482052,
                12.8396652
              ],
              [
                77.6481239,
                12.8396898
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, by corridor",
            "center": [
              77.6481548,
              12.8396452
            ],
            "ring": [
              [
                77.6481044,
                12.8396252
              ],
              [
                77.6481239,
                12.8396898
              ],
              [
                77.6482052,
                12.8396652
              ],
              [
                77.6481856,
                12.8396006
              ],
              [
                77.6481044,
                12.8396252
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, by corridor",
            "center": [
              77.6481352,
              12.8395806
            ],
            "ring": [
              [
                77.6480848,
                12.8395606
              ],
              [
                77.6481044,
                12.8396252
              ],
              [
                77.6481856,
                12.8396006
              ],
              [
                77.6481661,
                12.839536
              ],
              [
                77.6480848,
                12.8395606
              ]
            ]
          },
          {
            "unit": 8,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6481158,
              12.8395182
            ],
            "ring": [
              [
                77.6480653,
                12.839496
              ],
              [
                77.6480848,
                12.8395606
              ],
              [
                77.6481661,
                12.839536
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
                77.6480793,
                12.8394917
              ],
              [
                77.6480653,
                12.839496
              ]
            ]
          },
          {
            "unit": 9,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6480974,
              12.8394554
            ],
            "ring": [
              [
                77.6481294,
                12.8394148
              ],
              [
                77.6481465,
                12.8394714
              ],
              [
                77.6480653,
                12.839496
              ],
              [
                77.6480482,
                12.8394394
              ],
              [
                77.6481294,
                12.8394148
              ]
            ]
          },
          {
            "unit": 10,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6480229,
              12.8394912
            ],
            "ring": [
              [
                77.6479794,
                12.8394602
              ],
              [
                77.6480038,
                12.839541
              ],
              [
                77.6480664,
                12.8395221
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
            "unit": 11,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6479604,
              12.8395101
            ],
            "ring": [
              [
                77.6479169,
                12.8394791
              ],
              [
                77.6479413,
                12.8395599
              ],
              [
                77.6480038,
                12.839541
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
            "unit": 12,
            "side": "W",
            "wing": "west bar, south outer",
            "center": [
              77.6479141,
              12.8395196
            ],
            "ring": [
              [
                77.6479389,
                12.8395518
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
                77.6479113,
                12.8395602
              ],
              [
                77.6479389,
                12.8395518
              ]
            ]
          },
          {
            "unit": 13,
            "side": "W",
            "wing": "west bar, by corridor",
            "center": [
              77.6479135,
              12.8396258
            ],
            "ring": [
              [
                77.6478514,
                12.8395783
              ],
              [
                77.647888,
                12.8396994
              ],
              [
                77.6479755,
                12.839673
              ],
              [
                77.6479389,
                12.8395518
              ],
              [
                77.6479113,
                12.8395602
              ],
              [
                77.6479116,
                12.839561
              ],
              [
                77.6478516,
                12.8395782
              ],
              [
                77.6478514,
                12.8395783
              ]
            ]
          },
          {
            "unit": 14,
            "side": "W",
            "wing": "west bar, north inner",
            "center": [
              77.6479501,
              12.8397468
            ],
            "ring": [
              [
                77.647888,
                12.8396994
              ],
              [
                77.6479247,
                12.8398206
              ],
              [
                77.6480122,
                12.8397941
              ],
              [
                77.6479755,
                12.839673
              ],
              [
                77.647888,
                12.8396994
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506176"
      },
      "K": {
        "floors": 5,
        "perFloor": 14,
        "layout": "typical",
        "unitCount": 70,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer",
            "center": [
              77.6476428,
              12.8399806
            ],
            "ring": [
              [
                77.6477,
                12.8400423
              ],
              [
                77.6476714,
                12.8399257
              ],
              [
                77.6475812,
                12.8399478
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
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6477169,
              12.8399695
            ],
            "ring": [
              [
                77.6476682,
                12.8399128
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
                77.6477338,
                12.8398967
              ],
              [
                77.6476682,
                12.8399128
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6477825,
              12.8399535
            ],
            "ring": [
              [
                77.6477338,
                12.8398967
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
                77.6477994,
                12.8398806
              ],
              [
                77.6477338,
                12.8398967
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6478574,
              12.8399233
            ],
            "ring": [
              [
                77.6478944,
                12.8398711
              ],
              [
                77.6478091,
                12.839892
              ],
              [
                77.6478377,
                12.8400086
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
                77.6478944,
                12.8398711
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6478391,
              12.8398297
            ],
            "ring": [
              [
                77.6477837,
                12.8397883
              ],
              [
                77.6478091,
                12.839892
              ],
              [
                77.6478944,
                12.8398711
              ],
              [
                77.647869,
                12.8397674
              ],
              [
                77.6477837,
                12.8397883
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, by corridor",
            "center": [
              77.6478129,
              12.8397267
            ],
            "ring": [
              [
                77.6477584,
                12.8396847
              ],
              [
                77.6477837,
                12.8397883
              ],
              [
                77.647869,
                12.8397674
              ],
              [
                77.647868,
                12.8397634
              ],
              [
                77.6478399,
                12.8396647
              ],
              [
                77.6477584,
                12.8396847
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, by corridor",
            "center": [
              77.647788,
              12.8396262
            ],
            "ring": [
              [
                77.6477584,
                12.8396847
              ],
              [
                77.6478399,
                12.8396647
              ],
              [
                77.6478105,
                12.839562
              ],
              [
                77.6477646,
                12.8395733
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
                77.6477348,
                12.8395886
              ],
              [
                77.6477584,
                12.8396847
              ]
            ]
          },
          {
            "unit": 8,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6477574,
              12.8394972
            ],
            "ring": [
              [
                77.6477928,
                12.8394565
              ],
              [
                77.6477076,
                12.8394774
              ],
              [
                77.6477227,
                12.839539
              ],
              [
                77.6478074,
                12.8395159
              ],
              [
                77.6477928,
                12.8394565
              ]
            ]
          },
          {
            "unit": 9,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6477341,
              12.8394237
            ],
            "ring": [
              [
                77.6476854,
                12.8393867
              ],
              [
                77.6477076,
                12.8394774
              ],
              [
                77.6477928,
                12.8394565
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
                77.6476854,
                12.8393867
              ]
            ]
          },
          {
            "unit": 10,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6476625,
              12.8394618
            ],
            "ring": [
              [
                77.6476449,
                12.8395339
              ],
              [
                77.6477105,
                12.8395178
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
                77.6476449,
                12.8395339
              ]
            ]
          },
          {
            "unit": 11,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6476181,
              12.8395076
            ],
            "ring": [
              [
                77.6475794,
                12.83955
              ],
              [
                77.6476449,
                12.8395339
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
                77.6475794,
                12.83955
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west bar, south outer",
            "center": [
              77.647516,
              12.83949
            ],
            "ring": [
              [
                77.6475476,
                12.8394204
              ],
              [
                77.6475762,
                12.839537
              ],
              [
                77.6474844,
                12.8395595
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
            "unit": 13,
            "side": "W",
            "wing": "west bar, by corridor",
            "center": [
              77.6475808,
              12.8396658
            ],
            "ring": [
              [
                77.647532,
                12.8397539
              ],
              [
                77.6476238,
                12.8397314
              ],
              [
                77.6475791,
                12.8395489
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
                77.647532,
                12.8397539
              ]
            ]
          },
          {
            "unit": 14,
            "side": "W",
            "wing": "west bar, north inner",
            "center": [
              77.6476017,
              12.8398396
            ],
            "ring": [
              [
                77.6476714,
                12.8399257
              ],
              [
                77.6476238,
                12.8397314
              ],
              [
                77.647532,
                12.8397539
              ],
              [
                77.6475693,
                12.8399065
              ],
              [
                77.6475812,
                12.8399478
              ],
              [
                77.6476714,
                12.8399257
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506174"
      },
      "L": {
        "floors": 5,
        "perFloor": 12,
        "layout": "typical",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.647736,
              12.8403516
            ],
            "ring": [
              [
                77.6477722,
                12.8403102
              ],
              [
                77.6476447,
                12.8403402
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
                77.6477747,
                12.840386
              ],
              [
                77.6477718,
                12.8403745
              ],
              [
                77.6477865,
                12.840371
              ],
              [
                77.6477722,
                12.8403102
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.647827,
              12.8403324
            ],
            "ring": [
              [
                77.6478803,
                12.8403612
              ],
              [
                77.6478626,
                12.8402857
              ],
              [
                77.6477715,
                12.8403071
              ],
              [
                77.6477865,
                12.840371
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
                77.6478803,
                12.8403612
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6479155,
              12.8403108
            ],
            "ring": [
              [
                77.6479715,
                12.8403398
              ],
              [
                77.6479537,
                12.8402643
              ],
              [
                77.6478626,
                12.8402857
              ],
              [
                77.6478803,
                12.8403612
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
                77.6479715,
                12.8403398
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6479995,
              12.8402935
            ],
            "ring": [
              [
                77.648082,
                12.8402375
              ],
              [
                77.6479545,
                12.8402675
              ],
              [
                77.6479715,
                12.8403398
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
                77.648082,
                12.8402375
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6480098,
              12.8402163
            ],
            "ring": [
              [
                77.6479375,
                12.8401951
              ],
              [
                77.6479545,
                12.8402675
              ],
              [
                77.648082,
                12.8402375
              ],
              [
                77.6480651,
                12.8401652
              ],
              [
                77.6479375,
                12.8401951
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6479898,
              12.8401314
            ],
            "ring": [
              [
                77.6479176,
                12.8401101
              ],
              [
                77.6479345,
                12.8401825
              ],
              [
                77.6480621,
                12.8401526
              ],
              [
                77.6480451,
                12.8400802
              ],
              [
                77.6479176,
                12.8401101
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6479728,
              12.840059
            ],
            "ring": [
              [
                77.6479006,
                12.8400378
              ],
              [
                77.6479176,
                12.8401101
              ],
              [
                77.6480451,
                12.8400802
              ],
              [
                77.6480281,
                12.8400078
              ],
              [
                77.6479006,
                12.8400378
              ]
            ]
          },
          {
            "unit": 8,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6478639,
              12.8400862
            ],
            "ring": [
              [
                77.6478095,
                12.8400592
              ],
              [
                77.6478272,
                12.8401347
              ],
              [
                77.6479183,
                12.8401133
              ],
              [
                77.6479006,
                12.8400378
              ],
              [
                77.6478095,
                12.8400592
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6477728,
              12.8401076
            ],
            "ring": [
              [
                77.6477183,
                12.8400805
              ],
              [
                77.6477361,
                12.840156
              ],
              [
                77.6478272,
                12.8401347
              ],
              [
                77.6478095,
                12.8400592
              ],
              [
                77.6477183,
                12.8400805
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6476918,
              12.8401249
            ],
            "ring": [
              [
                77.6477353,
                12.8401529
              ],
              [
                77.6477183,
                12.8400805
              ],
              [
                77.6476478,
                12.8400971
              ],
              [
                77.6476656,
                12.8401693
              ],
              [
                77.6477353,
                12.8401529
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6476825,
              12.8402054
            ],
            "ring": [
              [
                77.6476247,
                12.8402552
              ],
              [
                77.6477523,
                12.8402253
              ],
              [
                77.6477353,
                12.8401529
              ],
              [
                77.6476656,
                12.8401693
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
                77.6476247,
                12.8402552
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6477,
              12.840289
            ],
            "ring": [
              [
                77.6476277,
                12.8402678
              ],
              [
                77.6476447,
                12.8403402
              ],
              [
                77.6477722,
                12.8403102
              ],
              [
                77.6477553,
                12.8402379
              ],
              [
                77.6476277,
                12.8402678
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506170"
      },
      "M": {
        "floors": 5,
        "perFloor": 12,
        "layout": "typical",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.6477992,
              12.8406547
            ],
            "ring": [
              [
                77.6478561,
                12.840681
              ],
              [
                77.6478407,
                12.8406155
              ],
              [
                77.6477132,
                12.8406454
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
                77.6478561,
                12.840681
              ]
            ]
          },
          {
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6478936,
              12.8406362
            ],
            "ring": [
              [
                77.6478401,
                12.8406127
              ],
              [
                77.6478561,
                12.840681
              ],
              [
                77.6479472,
                12.8406596
              ],
              [
                77.6479312,
                12.8405913
              ],
              [
                77.6478401,
                12.8406127
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6479847,
              12.8406148
            ],
            "ring": [
              [
                77.6479312,
                12.8405913
              ],
              [
                77.6479472,
                12.8406596
              ],
              [
                77.6480383,
                12.8406383
              ],
              [
                77.6480223,
                12.8405699
              ],
              [
                77.6479312,
                12.8405913
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.648069,
              12.84059
            ],
            "ring": [
              [
                77.6481505,
                12.8405429
              ],
              [
                77.6480229,
                12.8405728
              ],
              [
                77.6480383,
                12.8406383
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
                77.6481505,
                12.8405429
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.648079,
              12.8405251
            ],
            "ring": [
              [
                77.6480076,
                12.8405073
              ],
              [
                77.6480229,
                12.8405728
              ],
              [
                77.6481505,
                12.8405429
              ],
              [
                77.6481351,
                12.8404774
              ],
              [
                77.6480076,
                12.8405073
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.648061,
              12.8404482
            ],
            "ring": [
              [
                77.6479895,
                12.8404304
              ],
              [
                77.6480049,
                12.8404959
              ],
              [
                77.6481324,
                12.840466
              ],
              [
                77.6481171,
                12.8404005
              ],
              [
                77.6479895,
                12.8404304
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6480105,
              12.8403936
            ],
            "ring": [
              [
                77.6479742,
                12.8403649
              ],
              [
                77.6479895,
                12.8404304
              ],
              [
                77.6481171,
                12.8404005
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
                77.6479742,
                12.8403649
              ]
            ]
          },
          {
            "unit": 8,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6479367,
              12.8404098
            ],
            "ring": [
              [
                77.6478831,
                12.8403863
              ],
              [
                77.6478991,
                12.8404546
              ],
              [
                77.6479902,
                12.8404333
              ],
              [
                77.6479742,
                12.8403649
              ],
              [
                77.6478831,
                12.8403863
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6478455,
              12.8404312
            ],
            "ring": [
              [
                77.647792,
                12.8404077
              ],
              [
                77.647808,
                12.840476
              ],
              [
                77.6478991,
                12.8404546
              ],
              [
                77.6478831,
                12.8403863
              ],
              [
                77.647792,
                12.8404077
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6477646,
              12.8404486
            ],
            "ring": [
              [
                77.6478073,
                12.8404732
              ],
              [
                77.647792,
                12.8404077
              ],
              [
                77.6477216,
                12.8404242
              ],
              [
                77.6477377,
                12.8404895
              ],
              [
                77.6478073,
                12.8404732
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.6477519,
              12.8405212
            ],
            "ring": [
              [
                77.6476952,
                12.8405686
              ],
              [
                77.6478227,
                12.8405386
              ],
              [
                77.6478073,
                12.8404732
              ],
              [
                77.6477377,
                12.8404895
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
                77.6476952,
                12.8405686
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6477693,
              12.8405977
            ],
            "ring": [
              [
                77.6476978,
                12.8405799
              ],
              [
                77.6477132,
                12.8406454
              ],
              [
                77.6478407,
                12.8406155
              ],
              [
                77.6478254,
                12.84055
              ],
              [
                77.6476978,
                12.8405799
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506169"
      },
      "N": {
        "floors": 5,
        "perFloor": 12,
        "layout": "typical",
        "unitCount": 60,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer · top-right on layout map",
            "center": [
              77.647864,
              12.8410487
            ],
            "ring": [
              [
                77.6478137,
                12.8410891
              ],
              [
                77.6479048,
                12.8410655
              ],
              [
                77.6478861,
                12.8409933
              ],
              [
                77.6478582,
                12.8410006
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
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6479276,
              12.8410194
            ],
            "ring": [
              [
                77.6478853,
                12.8409902
              ],
              [
                77.6479048,
                12.8410655
              ],
              [
                77.6479699,
                12.8410486
              ],
              [
                77.6479504,
                12.8409734
              ],
              [
                77.6478853,
                12.8409902
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6479927,
              12.8410026
            ],
            "ring": [
              [
                77.6479504,
                12.8409734
              ],
              [
                77.6479699,
                12.8410486
              ],
              [
                77.6480349,
                12.8410318
              ],
              [
                77.6480155,
                12.8409565
              ],
              [
                77.6479504,
                12.8409734
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6480579,
              12.8409991
            ],
            "ring": [
              [
                77.6480163,
                12.8409597
              ],
              [
                77.6480349,
                12.8410318
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
                77.6480331,
                12.8409553
              ],
              [
                77.6480163,
                12.8409597
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6480525,
              12.8409118
            ],
            "ring": [
              [
                77.6480887,
                12.8408639
              ],
              [
                77.6481074,
                12.8409361
              ],
              [
                77.6480163,
                12.8409597
              ],
              [
                77.6479976,
                12.8408875
              ],
              [
                77.6480887,
                12.8408639
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, inner, by corridor",
            "center": [
              77.6480212,
              12.8408297
            ],
            "ring": [
              [
                77.6479757,
                12.8408028
              ],
              [
                77.6479944,
                12.840875
              ],
              [
                77.6480676,
                12.840856
              ],
              [
                77.6480471,
                12.8407843
              ],
              [
                77.6479757,
                12.8408028
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6480095,
              12.8407539
            ],
            "ring": [
              [
                77.6480481,
                12.8407071
              ],
              [
                77.647957,
                12.8407307
              ],
              [
                77.6479757,
                12.8408028
              ],
              [
                77.6480471,
                12.8407843
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
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6479375,
              12.8407782
            ],
            "ring": [
              [
                77.6479114,
                12.8408228
              ],
              [
                77.6479765,
                12.8408059
              ],
              [
                77.647957,
                12.8407307
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
                77.6479007,
                12.8407813
              ],
              [
                77.6479114,
                12.8408228
              ]
            ]
          },
          {
            "unit": 9,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6478673,
              12.8408046
            ],
            "ring": [
              [
                77.6478269,
                12.8407643
              ],
              [
                77.6478463,
                12.8408396
              ],
              [
                77.6479114,
                12.8408228
              ],
              [
                77.6479007,
                12.8407813
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
                77.6478269,
                12.8407643
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "west bar, south outer · top-left on layout map",
            "center": [
              77.6477906,
              12.8408122
            ],
            "ring": [
              [
                77.6477358,
                12.8407879
              ],
              [
                77.6477544,
                12.8408601
              ],
              [
                77.6478455,
                12.8408365
              ],
              [
                77.6478269,
                12.8407643
              ],
              [
                77.6477358,
                12.8407879
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "west bar, inner, by corridor",
            "center": [
              77.64781,
              12.8408807
            ],
            "ring": [
              [
                77.6478642,
                12.8409086
              ],
              [
                77.6478455,
                12.8408365
              ],
              [
                77.6477544,
                12.8408601
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
                77.6478342,
                12.8409164
              ],
              [
                77.6478642,
                12.8409086
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "west bar, north inner, by corridor",
            "center": [
              77.6478623,
              12.8409606
            ],
            "ring": [
              [
                77.6478861,
                12.8409933
              ],
              [
                77.6478674,
                12.8409212
              ],
              [
                77.6478377,
                12.8409289
              ],
              [
                77.6478582,
                12.8410006
              ],
              [
                77.6478861,
                12.8409933
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506172"
      },
      "O": {
        "floors": 5,
        "perFloor": 14,
        "layout": "typical",
        "unitCount": 70,
        "slots": [
          {
            "unit": 1,
            "side": "W",
            "wing": "west bar, north outer",
            "center": [
              77.6479593,
              12.8413555
            ],
            "ring": [
              [
                77.6479863,
                12.8413808
              ],
              [
                77.6479701,
                12.841324
              ],
              [
                77.6478875,
                12.8413476
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
            "unit": 2,
            "side": "N",
            "wing": "north stub, west",
            "center": [
              77.6480068,
              12.8413409
            ],
            "ring": [
              [
                77.6479683,
                12.8413177
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
                77.6480273,
                12.8413009
              ],
              [
                77.6479683,
                12.8413177
              ]
            ]
          },
          {
            "unit": 3,
            "side": "N",
            "wing": "north stub, east",
            "center": [
              77.6480658,
              12.841324
            ],
            "ring": [
              [
                77.6480273,
                12.8413009
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
                77.6480863,
                12.8412841
              ],
              [
                77.6480273,
                12.8413009
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "east bar, north outer",
            "center": [
              77.6481227,
              12.8413076
            ],
            "ring": [
              [
                77.6481706,
                12.8412668
              ],
              [
                77.648094,
                12.8412887
              ],
              [
                77.6481102,
                12.8413455
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
                77.6481706,
                12.8412668
              ]
            ]
          },
          {
            "unit": 5,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6481251,
              12.8412525
            ],
            "ring": [
              [
                77.6480795,
                12.8412382
              ],
              [
                77.648094,
                12.8412887
              ],
              [
                77.6481706,
                12.8412668
              ],
              [
                77.6481562,
                12.8412163
              ],
              [
                77.6480795,
                12.8412382
              ]
            ]
          },
          {
            "unit": 6,
            "side": "E",
            "wing": "east bar, by corridor",
            "center": [
              77.6481107,
              12.841202
            ],
            "ring": [
              [
                77.6480651,
                12.8411877
              ],
              [
                77.6480795,
                12.8412382
              ],
              [
                77.6481562,
                12.8412163
              ],
              [
                77.6481418,
                12.8411658
              ],
              [
                77.6480651,
                12.8411877
              ]
            ]
          },
          {
            "unit": 7,
            "side": "E",
            "wing": "east bar, by corridor",
            "center": [
              77.6480963,
              12.8411515
            ],
            "ring": [
              [
                77.6480507,
                12.8411372
              ],
              [
                77.6480651,
                12.8411877
              ],
              [
                77.6481418,
                12.8411658
              ],
              [
                77.6481274,
                12.8411153
              ],
              [
                77.6480507,
                12.8411372
              ]
            ]
          },
          {
            "unit": 8,
            "side": "E",
            "wing": "east bar",
            "center": [
              77.6480819,
              12.841101
            ],
            "ring": [
              [
                77.6480363,
                12.8410867
              ],
              [
                77.6480507,
                12.8411372
              ],
              [
                77.6481274,
                12.8411153
              ],
              [
                77.648113,
                12.8410648
              ],
              [
                77.6480363,
                12.8410867
              ]
            ]
          },
          {
            "unit": 9,
            "side": "E",
            "wing": "east bar, south outer",
            "center": [
              77.6480683,
              12.8410538
            ],
            "ring": [
              [
                77.6480237,
                12.8410425
              ],
              [
                77.6480363,
                12.8410867
              ],
              [
                77.648113,
                12.8410648
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
                77.6480237,
                12.8410425
              ]
            ]
          },
          {
            "unit": 10,
            "side": "S",
            "wing": "south stub, east",
            "center": [
              77.6479973,
              12.8410842
            ],
            "ring": [
              [
                77.6479588,
                12.841061
              ],
              [
                77.6479768,
                12.8411242
              ],
              [
                77.6480358,
                12.8411073
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
            "unit": 11,
            "side": "S",
            "wing": "south stub, west",
            "center": [
              77.6479383,
              12.841101
            ],
            "ring": [
              [
                77.6478998,
                12.8410779
              ],
              [
                77.6479178,
                12.841141
              ],
              [
                77.6479768,
                12.8411242
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
            "unit": 12,
            "side": "W",
            "wing": "west bar, south outer",
            "center": [
              77.6478666,
              12.8411181
            ],
            "ring": [
              [
                77.6478173,
                12.8411014
              ],
              [
                77.6478335,
                12.8411582
              ],
              [
                77.647916,
                12.8411347
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
            "unit": 13,
            "side": "W",
            "wing": "west bar, by corridor",
            "center": [
              77.6478883,
              12.8411938
            ],
            "ring": [
              [
                77.6478335,
                12.8411582
              ],
              [
                77.6478605,
                12.8412529
              ],
              [
                77.6479431,
                12.8412294
              ],
              [
                77.647916,
                12.8411347
              ],
              [
                77.6478335,
                12.8411582
              ]
            ]
          },
          {
            "unit": 14,
            "side": "W",
            "wing": "west bar, north inner",
            "center": [
              77.6479153,
              12.8412885
            ],
            "ring": [
              [
                77.6478605,
                12.8412529
              ],
              [
                77.6478875,
                12.8413476
              ],
              [
                77.6479701,
                12.841324
              ],
              [
                77.6479431,
                12.8412294
              ],
              [
                77.6478605,
                12.8412529
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506172"
      },
      "P": {
        "floors": 5,
        "perFloor": 16,
        "layout": "typical",
        "unitCount": 80,
        "slots": [
          {
            "unit": 1,
            "side": "E",
            "wing": "right of south stair · Type S7/S3",
            "center": [
              77.6483817,
              12.8409704
            ],
            "ring": [
              [
                77.648354,
                12.8410083
              ],
              [
                77.6483397,
                12.8409492
              ],
              [
                77.6484094,
                12.8409324
              ],
              [
                77.6484236,
                12.8409916
              ],
              [
                77.648354,
                12.8410083
              ]
            ]
          },
          {
            "unit": 2,
            "side": "E",
            "wing": "east 1D wing, upper · Type 1D",
            "center": [
              77.6484455,
              12.8409506
            ],
            "ring": [
              [
                77.6484215,
                12.8409832
              ],
              [
                77.6484094,
                12.8409324
              ],
              [
                77.6484695,
                12.840918
              ],
              [
                77.6484817,
                12.8409687
              ],
              [
                77.6484215,
                12.8409832
              ]
            ]
          },
          {
            "unit": 3,
            "side": "E",
            "wing": "east 1D wing, lower · Type 1D",
            "center": [
              77.6484559,
              12.8410068
            ],
            "ring": [
              [
                77.6484215,
                12.8409832
              ],
              [
                77.6484358,
                12.8410423
              ],
              [
                77.6484921,
                12.8410288
              ],
              [
                77.6484887,
                12.8410145
              ],
              [
                77.6484721,
                12.840971
              ],
              [
                77.6484215,
                12.8409832
              ]
            ]
          },
          {
            "unit": 4,
            "side": "E",
            "wing": "inner south-east · Type S6",
            "center": [
              77.6483969,
              12.8410338
            ],
            "ring": [
              [
                77.6484398,
                12.8410592
              ],
              [
                77.6484236,
                12.8409916
              ],
              [
                77.648354,
                12.8410083
              ],
              [
                77.6483702,
                12.8410759
              ],
              [
                77.6484398,
                12.8410592
              ]
            ]
          },
          {
            "unit": 5,
            "side": "S",
            "wing": "south-east corner · Type 1A/2B",
            "center": [
              77.6484042,
              12.8411058
            ],
            "ring": [
              [
                77.6484571,
                12.841131
              ],
              [
                77.6484398,
                12.8410592
              ],
              [
                77.6483512,
                12.8410805
              ],
              [
                77.6483685,
                12.8411523
              ],
              [
                77.6484571,
                12.841131
              ]
            ]
          },
          {
            "unit": 6,
            "side": "S",
            "wing": "south-west corner · Type 1A/2B",
            "center": [
              77.648314,
              12.841127
            ],
            "ring": [
              [
                77.6483558,
                12.8411554
              ],
              [
                77.6483386,
                12.8410836
              ],
              [
                77.64825,
                12.8411049
              ],
              [
                77.6482504,
                12.8411068
              ],
              [
                77.6482733,
                12.8411013
              ],
              [
                77.6482909,
                12.841171
              ],
              [
                77.6483558,
                12.8411554
              ]
            ]
          },
          {
            "unit": 7,
            "side": "W",
            "wing": "inner south-west · Type S6",
            "center": [
              77.6482766,
              12.8410627
            ],
            "ring": [
              [
                77.6483196,
                12.8410881
              ],
              [
                77.6483033,
                12.8410205
              ],
              [
                77.6482337,
                12.8410372
              ],
              [
                77.64825,
                12.8411049
              ],
              [
                77.6483196,
                12.8410881
              ]
            ]
          },
          {
            "unit": 8,
            "side": "W",
            "wing": "west 1D wing, lower · Type 1D",
            "center": [
              77.6482176,
              12.8410634
            ],
            "ring": [
              [
                77.6482459,
                12.841088
              ],
              [
                77.6482317,
                12.8410288
              ],
              [
                77.648189,
                12.8410391
              ],
              [
                77.6482039,
                12.8410981
              ],
              [
                77.6482459,
                12.841088
              ]
            ]
          },
          {
            "unit": 9,
            "side": "W",
            "wing": "west 1D wing, upper · Type 1D",
            "center": [
              77.6482051,
              12.8410128
            ],
            "ring": [
              [
                77.6482317,
                12.8410288
              ],
              [
                77.6482215,
                12.8409867
              ],
              [
                77.6481784,
                12.840997
              ],
              [
                77.648189,
                12.8410391
              ],
              [
                77.6482317,
                12.8410288
              ]
            ]
          },
          {
            "unit": 10,
            "side": "W",
            "wing": "left of south stair · Type S5/S3",
            "center": [
              77.6482621,
              12.8409996
            ],
            "ring": [
              [
                77.6482337,
                12.8410372
              ],
              [
                77.6483033,
                12.8410205
              ],
              [
                77.6482891,
                12.8409614
              ],
              [
                77.6482284,
                12.8409759
              ],
              [
                77.6482306,
                12.8409845
              ],
              [
                77.6482215,
                12.8409867
              ],
              [
                77.6482337,
                12.8410372
              ]
            ]
          },
          {
            "unit": 11,
            "side": "W",
            "wing": "left of north stair · Type S5/S3",
            "center": [
              77.6482434,
              12.8409228
            ],
            "ring": [
              [
                77.648285,
                12.8409445
              ],
              [
                77.6482708,
                12.8408853
              ],
              [
                77.6482012,
                12.840902
              ],
              [
                77.648214,
                12.8409553
              ],
              [
                77.6482227,
                12.8409532
              ],
              [
                77.6482242,
                12.8409591
              ],
              [
                77.648285,
                12.8409445
              ]
            ]
          },
          {
            "unit": 12,
            "side": "W",
            "wing": "inner north-west · Type S6",
            "center": [
              77.6482279,
              12.8408599
            ],
            "ring": [
              [
                77.6482708,
                12.8408853
              ],
              [
                77.6482546,
                12.8408177
              ],
              [
                77.6481849,
                12.8408344
              ],
              [
                77.6482012,
                12.840902
              ],
              [
                77.6482708,
                12.8408853
              ]
            ]
          },
          {
            "unit": 13,
            "side": "N",
            "wing": "north-west corner · Type 2B",
            "center": [
              77.6482237,
              12.8407873
            ],
            "ring": [
              [
                77.6481849,
                12.8408344
              ],
              [
                77.6482736,
                12.8408131
              ],
              [
                77.6482563,
                12.8407413
              ],
              [
                77.6481739,
                12.8407611
              ],
              [
                77.6481905,
                12.8408272
              ],
              [
                77.6481836,
                12.8408289
              ],
              [
                77.6481849,
                12.8408344
              ]
            ]
          },
          {
            "unit": 14,
            "side": "N",
            "wing": "north-east corner · Type 2B",
            "center": [
              77.6483208,
              12.840764
            ],
            "ring": [
              [
                77.6482689,
                12.8407382
              ],
              [
                77.6482862,
                12.8408101
              ],
              [
                77.6483748,
                12.8407888
              ],
              [
                77.6483718,
                12.8407761
              ],
              [
                77.6483692,
                12.8407767
              ],
              [
                77.6483544,
                12.8407177
              ],
              [
                77.6482689,
                12.8407382
              ]
            ]
          },
          {
            "unit": 15,
            "side": "E",
            "wing": "inner north-east · Type S6",
            "center": [
              77.6483475,
              12.8408281
            ],
            "ring": [
              [
                77.6483748,
                12.8407888
              ],
              [
                77.6483052,
                12.8408055
              ],
              [
                77.6483201,
                12.8408674
              ],
              [
                77.6483897,
                12.8408507
              ],
              [
                77.6483748,
                12.8407888
              ]
            ]
          },
          {
            "unit": 16,
            "side": "E",
            "wing": "right of north stair · Type S7/S3",
            "center": [
              77.6483634,
              12.8408943
            ],
            "ring": [
              [
                77.6483357,
                12.8409323
              ],
              [
                77.6483215,
                12.8408731
              ],
              [
                77.6483911,
                12.8408564
              ],
              [
                77.6484053,
                12.8409155
              ],
              [
                77.6483357,
                12.8409323
              ]
            ]
          }
        ],
        "osmBuildingId": "osm-259506178"
      }
    }
  }
};
