const fleetData = [
  {
    uuid: "xf-9920-alpha",
    isActive: true,
    meta: {
      created_at: 1715692000,
      updated_by: null, // Piège : valeur nulle
      tags: ["flagship", "experimental", "stealth"]
    },
    crew: {
      captain: {
        name: "Sarah Conner",
        stats: {
          intellect: 98,
          combat: {
            melee: 12,
            ranged: 85,
            specializations: [
              {
                id: 1,
                name: "Sniper",
                modifiers: { accuracy: 1.5, crit_chance: 0.2 }
              },
              {
                id: 2,
                name: "Tactician",
                modifiers: { fleet_bonus: { speed: 1.1, evasion: 1.05 } }
              }
            ]
          }
        },
        history: [
          // Tableau d'objets imbriqués dans un objet
          { event: "Promotion", date: "2040-01-01", notes: undefined },
          { event: "Injury", date: "2042-05-12", details: { part: "Left Arm", severity: "High" } }
        ]
      },
      subordinates: [
        // Liste d'objets complexes
        { role: "Engineer", name: "Bob", skills: ["repair", "physics"] },
        { role: "Medic", name: "Alice", skills: ["surgery"] }
      ]
    },
    cargo: {
      capacity: 5000,
      inventory: [
        {
          item_id: "w-laser-mk1",
          quantity: 2,
          properties: {
            condition: 85.5,
            modifications: [
              {
                slot: "optic",
                part: {
                  name: "NightVision",
                  tech_specs: {
                    range: [100, 500, 1000], // Tableau de nombres
                    power_draw: { active: 50, idle: 5 }
                  }
                }
              }
            ]
          }
        },
        {
          item_id: "food-ration",
          quantity: 1000,
          properties: null // Inconsistance de structure
        }
      ]
    },
    navigation: {
      current_route: {
        waypoints: [
          { x: 12, y: 55, z: -9 },
          { x: 14, y: 60, z: 0 }
        ],
        estimated_arrival: {
          epoch: 1715700000,
          readable: "2025-12-05T14:00:00Z"
        }
      },
      hyperdrive_status: "offline"
    }
  }
];